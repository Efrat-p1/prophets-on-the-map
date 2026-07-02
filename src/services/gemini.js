import { GoogleGenerativeAI } from '@google/generative-ai';

function incrementAndGetDailyUsage() {
    const today = new Date().toISOString().split('T')[0];
    let usageData = JSON.parse(localStorage.getItem('gemini_daily_usage') || '{}');
    
    if (usageData.date !== today || usageData.count > 1000) {
        usageData = { date: today, count: 0 };
    }
    
    usageData.count += 1;
    localStorage.setItem('gemini_daily_usage', JSON.stringify(usageData));
    return usageData.count;
}

export async function generateClueFromGemini(placeName, characterName, fallbackText) {
    let apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_api_key_here') {
        console.warn("Gemini API key is missing. Using fallback clue.");
        return { text: fallbackText || `שגיאה: חסר מפתח API של Gemini. אנא בדוק את קובץ .env.local שלך. (מקום הקשור ל${characterName})`, isAI: false };
    }
    
    // Sanitize API key (remove accidental quotes and whitespace)
    apiKey = apiKey.replace(/['"]/g, '').trim();

    try {
        const prompt = `אתה מחבר חידות היסטוריות. חבר חידה קצרה (עד 2-3 משפטים) בעברית על האירוע התנ"כי המרכזי שהתרחש במקום '${placeName}' הקשור לדמות '${characterName}'. 
החידה צריכה לתאר מה קרה שם ומה עשתה הדמות באותו מקום. בסוף שאל: 'איפה אני?' או 'מהו המקום?'.
התשובה לחידה היא שם המקום.
חשוב מאוד: אל תכתוב את השם '${placeName}' בתוך החידה בשום אופן.`;
        
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        let retries = 3;
        let generatedText = "";
        
        // Track usage before making the actual request
        const dailyUsage = incrementAndGetDailyUsage();
        
        while (retries > 0) {
            try {
                const result = await model.generateContent(prompt);
                generatedText = result.response.text();
                break;
            } catch (err) {
                if (err.message && err.message.includes("429")) throw err;
                retries--;
                if (retries === 0) throw err;
                // Wait 1.5 seconds before retrying
                await new Promise(resolve => setTimeout(resolve, 1500));
            }
        }
        
        return { text: generatedText, isAI: true, dailyUsage: dailyUsage };
    } catch (e) {
        console.error("Failed to generate clue from Gemini SDK", e);
        const smartFallback = fallbackText || `החידה לא נטענה עקב עומס שרתים. אך אגלה לך רמז: הדמות המרכזית הקשורה למקום זה היא ${characterName}. באיזה מקום מדובר?`;
        
        // Read current usage to show it even if it failed
        const today = new Date().toISOString().split('T')[0];
        let usageData = JSON.parse(localStorage.getItem('gemini_daily_usage') || '{}');
        
        // If we hit a 429 quota limit, we know they hit the 20 requests per day limit.
        if (e.message && e.message.includes("429")) {
            if (!usageData.count || usageData.count < 20) {
                usageData.count = 20;
                localStorage.setItem('gemini_daily_usage', JSON.stringify(usageData));
            }
        }
        
        const dailyUsage = usageData.date === today ? usageData.count : 0;
        
        return { text: smartFallback, isAI: false, dailyUsage: dailyUsage };
    }
}

export async function generateAllCluesFromGemini(stations) {
    let apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_api_key_here') {
        console.warn("Gemini API key is missing. Using fallback clues.");
        return { 
            clues: stations.map(s => s.fallbackText || `שגיאה: חסר מפתח API של Gemini. (מקום הקשור ל${s.character})`),
            isAI: false 
        };
    }
    
    apiKey = apiKey.replace(/['"]/g, '').trim();

    try {
        const stationsListString = stations.map((s, index) => `${index + 1}. מקום: ${s.place}, דמות: ${s.character}`).join('\n');
        
        const prompt = `אתה מחבר חידות היסטוריות. להלן רשימה של 5 מקומות ודמויות תנ"כיות.
עבור כל זוג מקום ודמות ברשימה, חבר חידה קצרה (עד 2-3 משפטים) בעברית על האירוע התנ"כי המרכזי שהתרחש באותו מקום והקשור לאותה דמות.
החידה צריכה לתאר מה קרה שם ומה עשתה הדמות באותו מקום, ולהסתיים בשאלה: 'איפה אני?' או 'מהו המקום?'.

חשוב מאוד:
1. אל תכתוב את שם המקום בתוך החידה בשום אופן.
2. ודא שהחידה מתאימה במדויק לדמות ולמקום המצוינים בשורה שלה, ואל תבלבל בין הדמויות והמקומות השונים ברשימה.

הרשימה:
${stationsListString}

החזר את התשובה כ-JSON array שבו כל איבר הוא אובייקט עם שדה "clue" המכיל את טקסט החידה, לפי הסדר של הרשימה.`;
        
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        let retries = 3;
        let generatedJson = [];
        
        const dailyUsage = incrementAndGetDailyUsage();
        
        while (retries > 0) {
            try {
                const result = await model.generateContent({
                    contents: [{ role: 'user', parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseMimeType: "application/json",
                    }
                });
                const responseText = result.response.text();
                generatedJson = JSON.parse(responseText);
                
                // Validate response format
                if (!Array.isArray(generatedJson) || generatedJson.length !== stations.length) {
                    throw new Error("Invalid JSON format or wrong number of clues returned");
                }
                
                break;
            } catch (err) {
                if (err.message && err.message.includes("429")) throw err;
                retries--;
                if (retries === 0) throw err;
                await new Promise(resolve => setTimeout(resolve, 1500));
            }
        }
        
        return { 
            clues: generatedJson.map(item => item.clue), 
            isAI: true, 
            dailyUsage: dailyUsage 
        };
    } catch (e) {
        console.error("Failed to generate clues from Gemini SDK", e);
        
        const today = new Date().toISOString().split('T')[0];
        let usageData = JSON.parse(localStorage.getItem('gemini_daily_usage') || '{}');
        
        if (e.message && e.message.includes("429")) {
            if (!usageData.count || usageData.count < 20) {
                usageData.count = 20;
                localStorage.setItem('gemini_daily_usage', JSON.stringify(usageData));
            }
        }
        
        const dailyUsage = usageData.date === today ? usageData.count : 0;
        
        return { 
            clues: stations.map(s => s.fallbackText || `החידה לא נטענה עקב עומס שרתים. רמז: הדמות המרכזית היא ${s.character}. איפה אני?`), 
            isAI: false, 
            dailyUsage: dailyUsage 
        };
    }
}
