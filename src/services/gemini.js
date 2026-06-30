import { GoogleGenerativeAI } from '@google/generative-ai';

function incrementAndGetDailyUsage() {
    const today = new Date().toISOString().split('T')[0];
    let usageData = JSON.parse(localStorage.getItem('gemini_daily_usage') || '{}');
    
    if (usageData.date !== today) {
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
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        
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
        
        // If we hit a 429 quota limit, we know the true server usage is at least 20.
        // Sync our local counter if it's currently lower than 20.
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
