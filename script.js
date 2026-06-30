/**
 * System Requirements Specification (SRS) - Web & Prophets Edition
 * Content Bank configuration with 15 real Leaflet coordinates.
 */
const gameStations = [
    // --- Existing Stations ---
    {
        id: "jericho_joshua",
        placeNameHebrew: "יריחו",
        clueText: "החומות שלי נפלו אחרי שחצו את נהר הירדן והקיפו אותי שבעה ימים. איפה אני?",
        characterName: "יהושע בן נון",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Joshua.6.2?context=0",
        characterIcon: "🎺",
        verseReference: "יהושע ו', ב'",
        fullChapterSefariaRef: "Joshua.6",
        audioRegular: "https://mechon-mamre.org/mp3/t0606.mp3",
        spotifyQuery: "יריחו",
        timelineYear: -1273,
        coordinates: [31.861, 35.461]
    },
    {
        id: "mt_tabor_deborah",
        placeNameHebrew: "הר תבור",
        clueText: "כאן יצא ברק בן אבינועם למלחמה נגד סיסרא, בהוראת נביאה ששפטה תחת תומר. איפה אנחנו?",
        characterName: "דבורה הנביאה",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.4.14?context=0",
        characterIcon: "🌴",
        verseReference: "שופטים ד', י\"ד",
        fullChapterSefariaRef: "Judges.4",
        audioRegular: "https://mechon-mamre.org/mp3/t0704.mp3",
        timelineYear: -1150,
        coordinates: [32.686, 35.389]
    },
    {
        id: "shiloh_samuel",
        placeNameHebrew: "שילה",
        clueText: "המשכן עמד כאן, ונער קטן שמע קול קורא בשמו בלילה אבל חשב שזה עלי הכהן. איפה המשכן?",
        characterName: "שמואל הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.3.21?context=0",
        characterIcon: "👂",
        verseReference: "שמואל א', ג', כ\"א",
        fullChapterSefariaRef: "I_Samuel.3",
        audioRegular: "https://mechon-mamre.org/mp3/t0803.mp3",
        timelineYear: -1050,
        coordinates: [32.055, 35.289]
    },
    {
        id: "elah_valley_david",
        placeNameHebrew: "עמק האלה",
        clueText: "נער אדמוני לקח חמישה חלוקי נחל וקלע, וניצח ענק פלשתי עם שריון כבד. איפה התרחש הקרב?",
        characterName: "דוד המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.17.15?context=0",
        verseReference: "שמואל א', י\"ז, ט\"ו",
        secondarySefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.17.2?context=0",
        secondaryVerseReference: "שמואל א', י\"ז, ב'",
        fullChapterSefariaRef: "I_Samuel.17",
        audioRegular: "https://mechon-mamre.org/mp3/t0817.mp3",
        spotifyQuery: "track:גוליית artist:כוורת",
        characterIcon: "🪨",
        timelineYear: -1000,
        coordinates: [31.681, 34.960]
    },
    {
        id: "mt_carmel_elijah",
        placeNameHebrew: "הר הכרמל",
        clueText: "ירדה אש מן השמיים ובלעה את העולה, לעיני כל נביאי הבעל. איפה התרחש הנס של נביא האמת?",
        characterName: "אליהו הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.18.42?context=0",
        characterIcon: "🔥",
        verseReference: "מלכים א', י\"ח, מ\"ב",
        fullChapterSefariaRef: "I_Kings.18",
        audioRegular: "https://mechon-mamre.org/mp3/t0918.mp3",
        timelineYear: -850,
        coordinates: [32.735, 35.044]
    },
    {
        id: "jerusalem_david",
        placeNameHebrew: "ירושלים (יבוס)",
        clueText: "עיר חשובה זו נקראה גם יבוס או עיר דוד, והיא נכבשה על ידי דוד המלך שהפך אותה לבירתו.",
        characterName: "דוד המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/II_Samuel.5.6?context=0",
        spotifyQuery: "track:ירושלים של זהב",
        characterIcon: "🏰",
        verseReference: "שמואל ב', ה', ו'",
        fullChapterSefariaRef: "II_Samuel.5",
        audioRegular: "https://mechon-mamre.org/mp3/t0836.mp3",
        timelineYear: -1000,
        coordinates: [31.776, 35.234]
    },
    {
        id: "ein_gedi_david",
        placeNameHebrew: "עין גדי",
        clueText: "נווה מדבר ליד ים המלח, שבו דוד הסתתר במערה והוכיח לשאול המלך שהוא לא רוצה לפגוע בו.",
        characterName: "דוד המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.24.1?context=0",
        characterIcon: "🐐",
        verseReference: "שמואל א', כ\"ד, א'",
        fullChapterSefariaRef: "I_Samuel.24",
        audioRegular: "https://mechon-mamre.org/mp3/t0824.mp3",
        timelineYear: -1000,
        coordinates: [31.458, 35.385]
    },
    {
        id: "bethlehem_samuel",
        placeNameHebrew: "בית לחם",
        clueText: "עיר קטנה ביהודה, אליה נשלח הנביא למשוח למלך נער רועה צאן שהיה הקטן מבין שמונת אֶחָיו.",
        characterName: "שמואל הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.16.4?context=0",
        characterIcon: "🐑",
        verseReference: "שמואל א', ט\"ז, ד'",
        fullChapterSefariaRef: "I_Samuel.16",
        audioRegular: "https://mechon-mamre.org/mp3/t0816.mp3",
        timelineYear: -1050,
        coordinates: [31.705, 35.202]
    },
    {
        id: "hebron_david",
        placeNameHebrew: "חברון",
        clueText: "כאן נמשח דוד למלך על כל שבטי ישראל לאחר מות שאול, לפני שהעביר את הבירה.",
        characterName: "דוד המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/II_Samuel.5.3?context=0",
        characterIcon: "👑",
        verseReference: "שמואל ב', ה', ג'",
        fullChapterSefariaRef: "II_Samuel.5",
        audioRegular: "https://mechon-mamre.org/mp3/t0836.mp3",
        timelineYear: -1000,
        coordinates: [31.532, 35.099]
    },
    {
        id: "gibeon_joshua",
        placeNameHebrew: "גבעון",
        clueText: "כאן נעשה נס עצום כשיהושע ציווה על השמש ועל הירח לעצור במהלך המלחמה נגד חמשת מלכי האמורי.",
        characterName: "יהושע בן נון",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Joshua.10.12?context=0",
        characterIcon: "☀️",
        verseReference: "יהושע י', י\"ב",
        fullChapterSefariaRef: "Joshua.10",
        audioRegular: "https://mechon-mamre.org/mp3/t0610.mp3",
        timelineYear: -1273,
        coordinates: [31.847, 35.183]
    },
    {
        id: "ai_joshua",
        placeNameHebrew: "העי",
        clueText: "העיר השנייה שכבשו בני ישראל, לאחר הכישלון הראשון בגלל החטא של עכן.",
        characterName: "יהושע בן נון",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Joshua.8.28?context=0",
        characterIcon: "⚔️",
        verseReference: "יהושע ח', כ\"ח",
        fullChapterSefariaRef: "Joshua.8",
        audioRegular: "https://mechon-mamre.org/mp3/t0608.mp3",
        timelineYear: -1273,
        coordinates: [31.916, 35.260]
    },
    {
        id: "mitzpah_samuel",
        placeNameHebrew: "מצפה",
        clueText: "שמואל אסף כאן את העם לשאוב מים, לצום ולחזור בתשובה, ומשם יצאו להילחם בפלשתים.",
        characterName: "שמואל הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.7.6?context=0",
        characterIcon: "💧",
        verseReference: "שמואל א', ז', ו'",
        fullChapterSefariaRef: "I_Samuel.7",
        audioRegular: "https://mechon-mamre.org/mp3/t0807.mp3",
        timelineYear: -1050,
        coordinates: [31.829, 35.184]
    },
    {
        id: "jezreel_elijah",
        placeNameHebrew: "יזרעאל",
        clueText: "במקום הזה עמד כרם של איש בשם נבות. המלך רצה את הכרם, ואשתו המלכה דאגה שהוא יקבל אותו בדרכי רשע.",
        characterName: "אליהו הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.21.17?context=0",
        verseReference: "מלכים א', כ\"א, י\"ז",
        secondarySefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.21.1?context=0",
        secondaryVerseReference: "מלכים א', כ\"א, א'",
        fullChapterSefariaRef: "I_Kings.21",
        audioRegular: "https://mechon-mamre.org/mp3/t0921.mp3",
        characterIcon: "🍇",
        timelineYear: -850,
        coordinates: [32.557, 35.328]
    },
    {
        id: "beersheba_elijah",
        placeNameHebrew: "באר שבע",
        clueText: "הנביא שברח מזעמה של המלכה איזבל הגיע דרומה עד לעיר הזו, ומשם המשיך אל המדבר.",
        characterName: "אליהו הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.19.1?context=0",
        verseReference: "מלכים א', י\"ט, א'",
        secondarySefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.19.3?context=0",
        secondaryVerseReference: "מלכים א', י\"ט, ג'",
        fullChapterSefariaRef: "I_Kings.19",
        audioRegular: "https://mechon-mamre.org/mp3/t0919.mp3",
        characterIcon: "🏃",
        timelineYear: -850,
        coordinates: [31.252, 34.791]
    },
    {
        id: "ziklag_david",
        placeNameHebrew: "צקלג",
        clueText: "העיר הזו ניתנה לדוד על ידי הפלשתים, אך כשיצא למלחמה, העמלקים פשטו עליה ושרפו אותה באש.",
        characterName: "דוד המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.30.1?context=0",
        characterIcon: "🔥",
        verseReference: "שמואל א', ל', א'",
        fullChapterSefariaRef: "I_Samuel.30",
        audioRegular: "https://mechon-mamre.org/mp3/t0830.mp3",
        timelineYear: -1000,
        coordinates: [31.385, 34.795]
    },
    {
        id: "ehud_ben_gera",
        placeNameHebrew: "עיר התמרים",
        clueText: "החבאתי חרב פיפיות על ירך ימין, והבאתי מנחה למלך מואב השמן. איפה סגרתי עליו את בעליית המקרה?",
        characterName: "אהוד בן גרא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.3.15?context=0",
        verseReference: "שופטים ג', ט\"ו",
        secondarySefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.3.13?context=0",
        secondaryVerseReference: "שופטים ג', י\"ג",
        fullChapterSefariaRef: "Judges.3",
        audioRegular: "https://mechon-mamre.org/mp3/t0703.mp3",
        characterIcon: "🗡️",
        timelineYear: -1200,
        coordinates: [31.855, 35.455]
    },
    {
        id: "yael",
        placeNameHebrew: "אלון בצעננים",
        clueText: "שר צבא חצור ברח אל האוהל שלי. השקיתי אותו חלב, וכשישן נתתי יתד ברקתו. איפה האוהל שלי?",
        characterName: "יעל אשת חבר הקיני",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.4.21?context=0",
        verseReference: "שופטים ד', כ\"א",
        secondarySefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.4.11?context=0",
        secondaryVerseReference: "שופטים ד', י\"א",
        fullChapterSefariaRef: "Judges.4",
        audioRegular: "https://mechon-mamre.org/mp3/t0704.mp3",
        characterIcon: "⛺",
        timelineYear: -1148,
        coordinates: [33.112, 35.529]
    },
    {
        id: "gideon",
        placeNameHebrew: "עין חרוד",
        clueText: "כאן בחנתי את הלוחמים שלי לפי הדרך שבה שתו מים, ובחרתי רק 300 איש כדי להילחם במדין.",
        characterName: "גדעון בן יואש",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.7.1?context=0",
        characterIcon: "📯",
        verseReference: "שופטים ז', א'",
        fullChapterSefariaRef: "Judges.7",
        audioRegular: "https://mechon-mamre.org/mp3/t0707.mp3",
        timelineYear: -1100,
        coordinates: [32.551, 35.358]
    },
    {
        id: "samson_gaza",
        placeNameHebrew: "עזה",
        clueText: "לפני מותי, התפללתי לתת לי כוח בפעם האחרונה, והפלתי את העמודים על אלפי הפלשתים שחגגו במקדש.",
        characterName: "שמשון הגיבור",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.16.30?context=0",
        verseReference: "שופטים ט\"ז, ל'",
        secondarySefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.16.21?context=0",
        secondaryVerseReference: "שופטים ט\"ז, כ\"א",
        fullChapterSefariaRef: "Judges.16",
        audioRegular: "https://mechon-mamre.org/mp3/t0716.mp3",
        spotifyQuery: "track:שיר לשמשון",
        characterIcon: "💪",
        timelineYear: -1080,
        coordinates: [31.501, 34.466]
    },

    // --- Added 5 Alternate Events for Existing Locations ---
    {
        id: "jerusalem_solomon",
        placeNameHebrew: "ירושלים",
        clueText: "כאן בניתי את בית המקדש הראשון לה', במשך שבע שנים. היכן אני?",
        characterName: "שלמה המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.11.42?context=0",
        verseReference: "מלכים א', י\"א, מ\"ב",
        fullChapterSefariaRef: "I_Kings.11",
        audioRegular: "https://mechon-mamre.org/mp3/t0911.mp3",
        characterIcon: "🏛️",
        timelineYear: -970,
        coordinates: [31.776, 35.234]
    },
    {
        id: "hebron_abraham",
        placeNameHebrew: "חברון",
        clueText: "קניתי מעפרון החיתי את מערת המכפלה בארבע מאות שקל כסף כדי לקבור כאן את שרה אשתי. איפה אני?",
        characterName: "אברהם אבינו",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Genesis.23.19?context=0",
        verseReference: "בראשית כ\"ג, י\"ט",
        fullChapterSefariaRef: "Genesis.23",
        audioRegular: "https://mechon-mamre.org/mp3/t0123.mp3",
        characterIcon: "⚰️",
        timelineYear: -1800,
        coordinates: [31.532, 35.099]
    },
    {
        id: "jericho_elisha",
        placeNameHebrew: "יריחו",
        clueText: "יושבי העיר אמרו לי שהמים רעים. זרקתי מלח אל מוצא המים וריפאתי אותם. איזו עיר זו?",
        characterName: "אלישע הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/II_Kings.2.15?context=0",
        verseReference: "מלכים ב', ב', ט\"ו",
        fullChapterSefariaRef: "II_Kings.2",
        audioRegular: "https://mechon-mamre.org/mp3/t1102.mp3",
        characterIcon: "🧂",
        timelineYear: -800,
        coordinates: [31.861, 35.461]
    },
    {
        id: "shiloh_hannah",
        placeNameHebrew: "שילה",
        clueText: "הגעתי לכאן כפולת מרירות, התפללתי בשקט במשכן והבטחתי שאם אקבל בן, אקדיש אותו לה'.",
        characterName: "חנה",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.1.9?context=0",
        verseReference: "שמואל א', א', ט'",
        fullChapterSefariaRef: "I_Samuel.1",
        audioRegular: "https://mechon-mamre.org/mp3/t0801.mp3",
        characterIcon: "🙏",
        timelineYear: -1050,
        coordinates: [32.055, 35.289]
    },
    {
        id: "beersheba_abraham",
        placeNameHebrew: "באר שבע",
        clueText: "כאן נתתי שבע כבשות כעדות על באר המים שחפרתי, וכרתתי ברית עם מלך הפלשתים.",
        characterName: "אברהם אבינו",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Genesis.22.19?context=0",
        verseReference: "בראשית כ\"ב, י\"ט",
        fullChapterSefariaRef: "Genesis.22",
        audioRegular: "https://mechon-mamre.org/mp3/t0122.mp3",
        characterIcon: "🤝",
        timelineYear: -1800,
        coordinates: [31.252, 34.791]
    },

    // --- 15 New Places ---
    {
        id: "shechem_joshua",
        placeNameHebrew: "שכם",
        clueText: "אספתי כאן את כל שבטי ישראל וכרתנו ברית לעבוד את ה', והקמתי אבן גדולה תחת האלה.",
        characterName: "יהושע בן נון",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Joshua.24.26?context=0",
        verseReference: "יהושע כ\"ד, כ\"ו",
        fullChapterSefariaRef: "Joshua.24",
        audioRegular: "https://mechon-mamre.org/mp3/t0624.mp3",
        characterIcon: "📜",
        timelineYear: -1273,
        coordinates: [32.213, 35.271]
    },
    {
        id: "shechem_rehoboam",
        placeNameHebrew: "שכם",
        clueText: "באתי לפה כדי שכל ישראל ימליכו אותי אחרי מות אבי שלמה, אבל הממלכה התפלגה בגלל תשובתי הקשה.",
        characterName: "רחבעם",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.12.1?context=0",
        verseReference: "מלכים א', י\"ב, א'",
        fullChapterSefariaRef: "I_Kings.12",
        audioRegular: "https://mechon-mamre.org/mp3/t0912.mp3",
        characterIcon: "💔",
        timelineYear: -930,
        coordinates: [32.213, 35.271]
    },
    {
        id: "bethel_jacob",
        placeNameHebrew: "בית אל",
        clueText: "שמתי אבן מראשותיי, וישנתי. בחלום ראיתי סולם שניצב ארצה וראשו מגיע השמיימה, ומלאכים עולים ויורדים בו.",
        characterName: "יעקב אבינו",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Genesis.28.19?context=0",
        verseReference: "בראשית כ\"ח, י\"ט",
        fullChapterSefariaRef: "Genesis.28",
        audioRegular: "https://mechon-mamre.org/mp3/t0128.mp3",
        characterIcon: "🪜",
        timelineYear: -1700,
        coordinates: [31.940, 35.222]
    },
    {
        id: "bethel_jeroboam",
        placeNameHebrew: "בית אל",
        clueText: "פחדתי שהעם יעלה לירושלים, אז הצבתי כאן (ובדן) עגל זהב כדי שיתפללו אליו במקום לעלות למקדש.",
        characterName: "ירבעם בן נבט",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.12.29?context=0",
        verseReference: "מלכים א', י\"ב, כ\"ט",
        fullChapterSefariaRef: "I_Kings.12",
        audioRegular: "https://mechon-mamre.org/mp3/t0912.mp3",
        characterIcon: "🐄",
        timelineYear: -930,
        coordinates: [31.940, 35.222]
    },
    {
        id: "gilgal_joshua",
        placeNameHebrew: "הגלגל",
        clueText: "כאן הקמתי את 12 האבנים שלקחנו מתוך נהר הירדן, למזכרת לנס חציית הנהר.",
        characterName: "יהושע בן נון",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Joshua.4.20?context=0",
        verseReference: "יהושע ד', כ'",
        fullChapterSefariaRef: "Joshua.4",
        audioRegular: "https://mechon-mamre.org/mp3/t0604.mp3",
        characterIcon: "🪨",
        timelineYear: -1273,
        coordinates: [31.883, 35.483]
    },
    {
        id: "megiddo_josiah",
        placeNameHebrew: "מגידו",
        clueText: "יצאתי להילחם נגד פרעה נכה מלך מצרים במקום הזה, ושם ירו בי המורים ומתתי.",
        characterName: "יאשיהו המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/II_Kings.23.29?context=0",
        verseReference: "מלכים ב', כ\"ג, כ\"ט",
        fullChapterSefariaRef: "II_Kings.23",
        audioRegular: "https://mechon-mamre.org/mp3/t1123.mp3",
        characterIcon: "⚔️",
        timelineYear: -620,
        coordinates: [32.583, 35.183]
    },
    {
        id: "dan_jeroboam",
        placeNameHebrew: "דן",
        clueText: "כאן בקצה הצפוני של הממלכה, הצבתי את אחד מעגלי הזהב שיצרתי כדי למנוע מעלייה לירושלים.",
        characterName: "ירבעם בן נבט",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.12.29?context=0",
        verseReference: "מלכים א', י\"ב, כ\"ט",
        fullChapterSefariaRef: "I_Kings.12",
        audioRegular: "https://mechon-mamre.org/mp3/t0912.mp3",
        characterIcon: "🐄",
        timelineYear: -930,
        coordinates: [33.248, 35.652]
    },
    {
        id: "hazor_joshua",
        placeNameHebrew: "חצור",
        clueText: "העיר הזו הייתה 'ראש כל הממלכות האלה'. תפסתי את מלכה, הכיתי את תושביה לפי חרב, ורק אותה שרפתי באש.",
        characterName: "יהושע בן נון",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Joshua.11.11?context=0",
        verseReference: "יהושע י\"א, י\"א",
        fullChapterSefariaRef: "Joshua.11",
        audioRegular: "https://mechon-mamre.org/mp3/t0611.mp3",
        characterIcon: "🔥",
        timelineYear: -1273,
        coordinates: [33.018, 35.568]
    },
    {
        id: "jaffa_jonah",
        placeNameHebrew: "יפו",
        clueText: "ה' ציווה עלי ללכת לנינווה, אבל ברחתי לכאן, מצאתי אונייה וירדתי בה כדי לברוח לתרשיש.",
        characterName: "יונה הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Jonah.1.3?context=0",
        verseReference: "יונה א', ג'",
        fullChapterSefariaRef: "Jonah.1",
        audioRegular: "https://mechon-mamre.org/mp3/t1701.mp3",
        characterIcon: "⛵",
        timelineYear: -780,
        coordinates: [32.054, 34.756]
    },
    {
        id: "mt_gilboa_saul",
        placeNameHebrew: "הר גלבוע",
        clueText: "במלחמה הקשה מול הפלשתים נפלתי כאן על חרבי כדי שלא יתעללו בי. גם שלושת בניי נהרגו כאן.",
        characterName: "שאול המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.31.8?context=0",
        verseReference: "שמואל א', ל\"א, ח'",
        fullChapterSefariaRef: "I_Samuel.31",
        audioRegular: "https://mechon-mamre.org/mp3/t0831.mp3",
        characterIcon: "🗡️",
        timelineYear: -1030,
        coordinates: [32.483, 35.416]
    },
    {
        id: "ashkelon_samson",
        placeNameHebrew: "אשקלון",
        clueText: "ירדתי לכאן והכיתי 30 איש מהפלשתים, כדי לקחת את חליפותיהם ולתת לפותרי החידה שלי.",
        characterName: "שמשון הגיבור",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.14.19?context=0",
        verseReference: "שופטים י\"ד, י\"ט",
        fullChapterSefariaRef: "Judges.14",
        audioRegular: "https://mechon-mamre.org/mp3/t0714.mp3",
        characterIcon: "👊",
        timelineYear: -1080,
        coordinates: [31.666, 34.566]
    },
    {
        id: "azekah_joshua",
        placeNameHebrew: "עזקה",
        clueText: "כאשר האמורים נסו מפנינו, ה' השליך עליהם אבנים גדולות מן השמיים עד המקום הזה.",
        characterName: "יהושע בן נון",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Joshua.10.11?context=0",
        verseReference: "יהושע י', י\"א",
        fullChapterSefariaRef: "Joshua.10",
        audioRegular: "https://mechon-mamre.org/mp3/t0610.mp3",
        characterIcon: "☄️",
        timelineYear: -1273,
        coordinates: [31.699, 34.933]
    },
    {
        id: "samaria_omri",
        placeNameHebrew: "שומרון",
        clueText: "קניתי את ההר הזה משמר בכיכריים כסף, בניתי כאן עיר וקראתי לה על שמו. היא הפכה לבירת ישראל.",
        characterName: "עמרי המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Kings.16.24?context=0",
        verseReference: "מלכים א', ט\"ז, כ\"ד",
        fullChapterSefariaRef: "I_Kings.16",
        audioRegular: "https://mechon-mamre.org/mp3/t0916.mp3",
        characterIcon: "🏛️",
        timelineYear: -850,
        coordinates: [32.276, 35.195]
    },
    {
        id: "ramah_samuel",
        placeNameHebrew: "הרמה",
        clueText: "כאן היה ביתי, כאן שפטתי את ישראל כל ימי חיי, וכאן גם קברו אותי כשמתתי.",
        characterName: "שמואל הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.25.1?context=0",
        verseReference: "שמואל א', כ\"ה, א'",
        fullChapterSefariaRef: "I_Samuel.25",
        audioRegular: "https://mechon-mamre.org/mp3/t0825.mp3",
        characterIcon: "🏠",
        timelineYear: -1050,
        coordinates: [31.833, 35.233]
    },
    {
        id: "endor_saul",
        placeNameHebrew: "עין דור",
        clueText: "התחפשתי, הלכתי בלילה וביקשתי מבעלת אוב שגרה כאן להעלות לי את רוחו של שמואל הנביא.",
        characterName: "שאול המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.28.7?context=0",
        verseReference: "שמואל א', כ\"ח, ז'",
        fullChapterSefariaRef: "I_Samuel.28",
        audioRegular: "https://mechon-mamre.org/mp3/t0828.mp3",
        characterIcon: "👻",
        timelineYear: -1030,
        coordinates: [32.633, 35.383]
    },
    {
        id: "qiryat_yearim",
        placeNameHebrew: "קרית יערים",
        clueText: "ארון הברית הובא לכאן אל בית אבינדב בגבעה, ושם הוא נשאר במשך 20 שנה עד שדוד העלה אותו.",
        characterName: "שמואל הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.7.2?context=0",
        verseReference: "שמואל א', ז', ב'",
        fullChapterSefariaRef: "I_Samuel.7",
        audioRegular: "https://mechon-mamre.org/mp3/t0807.mp3",
        characterIcon: "📦",
        timelineYear: -1050,
        coordinates: [31.808, 35.109]
    },
    {
        id: "sinai_moses",
        placeNameHebrew: "הר סיני",
        clueText: "עליתי לכאן אל הערפל שבו היה האלוהים, וקיבלתי את לוחות הברית והתורה מול כל העם.",
        characterName: "משה רבנו",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Exodus.19.20?context=0",
        verseReference: "שמות י\"ט, כ'",
        fullChapterSefariaRef: "Exodus.19",
        audioRegular: "https://mechon-mamre.org/mp3/t0219.mp3",
        characterIcon: "📜",
        timelineYear: -1313,
        coordinates: [28.539, 33.975]
    },

    // --- 10 ADDITIONAL NEW PLACES ---
    {
        id: "tekoa_amos",
        placeNameHebrew: "תקוע",
        clueText: "הייתי נוקד ובולס שקמים במקום הזה, לפני שה' קרא לי ללכת ולהינבא על ישראל.",
        characterName: "עמוס הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Amos.1.1?context=0",
        verseReference: "עמוס א', א'",
        fullChapterSefariaRef: "Amos.1",
        audioRegular: "https://mechon-mamre.org/mp3/t1501.mp3",
        characterIcon: "🐑",
        timelineYear: -760,
        coordinates: [31.611, 35.215]
    },
    {
        id: "anathoth_jeremiah",
        placeNameHebrew: "ענתות",
        clueText: "אני ממשפחת כהנים בארץ בנימין בעיר הזו. עוד בטרם אצר אותי ה' בבטן, הוא הקדיש אותי לנביא.",
        characterName: "ירמיהו הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Jeremiah.1.1?context=0",
        verseReference: "ירמיהו א', א'",
        fullChapterSefariaRef: "Jeremiah.1",
        audioRegular: "https://mechon-mamre.org/mp3/t1101.mp3",
        characterIcon: "😢",
        timelineYear: -586,
        coordinates: [31.815, 35.261]
    },
    {
        id: "moresheth_gath_micah",
        placeNameHebrew: "מורשת גת",
        clueText: "מכאן הגעתי. ניבאתי בימי יותם, אחז ויחזקיהו, וזעקתי על חורבן שומרון וירושלים.",
        characterName: "מיכה הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Micah.1.1?context=0",
        verseReference: "מיכה א', א'",
        fullChapterSefariaRef: "Micah.1",
        audioRegular: "https://mechon-mamre.org/mp3/t1801.mp3",
        characterIcon: "🗣️",
        timelineYear: -740,
        coordinates: [31.628, 34.898]
    },
    {
        id: "carmel_judah",
        placeNameHebrew: "כרמל (ביהודה)",
        clueText: "כאן היה איש עשיר וקשה בשם נבל. אשתו החכמה אביגיל מנעה ממני להרוג אותו ואת אנשיו.",
        characterName: "דוד המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.25.2?context=0",
        verseReference: "שמואל א', כ\"ה, ב'",
        fullChapterSefariaRef: "I_Samuel.25",
        audioRegular: "https://mechon-mamre.org/mp3/t0825.mp3",
        characterIcon: "🍷",
        timelineYear: -1000,
        coordinates: [31.424, 35.129]
    },
    {
        id: "zorah_samson",
        placeNameHebrew: "צרעה",
        clueText: "נולדתי כאן למנוח ולאשתו, לאחר שמלאך ה' התגלה והבטיח שאהיה נזיר אלוהים מן הבטן.",
        characterName: "שמשון הגיבור",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.13.2?context=0",
        verseReference: "שופטים י\"ג, ב'",
        fullChapterSefariaRef: "Judges.13",
        audioRegular: "https://mechon-mamre.org/mp3/t0713.mp3",
        characterIcon: "👼",
        timelineYear: -1080,
        coordinates: [31.774, 34.983]
    },
    {
        id: "timnah_samson",
        placeNameHebrew: "תמנה",
        clueText: "ירדתי לכאן ומצאתי אישה פלשתית שרציתי. בדרך לפה, שיסעתי כפיר אריות בידיים ריקות.",
        characterName: "שמשון הגיבור",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Judges.14.1?context=0",
        verseReference: "שופטים י\"ד, א'",
        fullChapterSefariaRef: "Judges.14",
        audioRegular: "https://mechon-mamre.org/mp3/t0714.mp3",
        characterIcon: "🦁",
        timelineYear: -1080,
        coordinates: [31.789, 34.908]
    },
    {
        id: "gibeah_saul",
        placeNameHebrew: "גבעת שאול",
        clueText: "זו העיר שלי! כאן ישבתי כמלך תחת האשל, ופה קראתי לעם להילחם למען אנשי יבש גלעד.",
        characterName: "שאול המלך",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/I_Samuel.11.4?context=0",
        verseReference: "שמואל א', י\"א, ד'",
        fullChapterSefariaRef: "I_Samuel.11",
        audioRegular: "https://mechon-mamre.org/mp3/t0811.mp3",
        characterIcon: "👑",
        timelineYear: -1030,
        coordinates: [31.823, 35.230]
    },
    {
        id: "sodom_lot",
        placeNameHebrew: "סדום",
        clueText: "ה' המטיר גופרית ואש על העיר הזו. אשתי הביטה אחורה בבריחתנו והפכה לנציב מלח.",
        characterName: "לוט",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Genesis.19.24?context=0",
        verseReference: "בראשית י\"ט, כ\"ד",
        fullChapterSefariaRef: "Genesis.19",
        audioRegular: "https://mechon-mamre.org/mp3/t0119.mp3",
        characterIcon: "🧂",
        timelineYear: -1800,
        coordinates: [31.077, 35.395]
    },
    {
        id: "shunem_elisha",
        placeNameHebrew: "שונם",
        clueText: "אישה גדולה מהעיר הזו הכינה לי חדר קטן עם מיטה, שולחן, כיסא ומנורה, כדי שאנוח שם בדרכי.",
        characterName: "אלישע הנביא",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/II_Kings.4.8?context=0",
        verseReference: "מלכים ב', ד', ח'",
        fullChapterSefariaRef: "II_Kings.4",
        audioRegular: "https://mechon-mamre.org/mp3/t1104.mp3",
        characterIcon: "🛏️",
        timelineYear: -800,
        coordinates: [32.604, 35.334]
    },
    {
        id: "penuel_jacob",
        placeNameHebrew: "פנואל (יבוק)",
        clueText: "נאבקתי כאן עם איש מסתורי עד עלות השחר. הוא ברך אותי ושינה את שמי לישראל.",
        characterName: "יעקב אבינו",
        sefariaApiUrl: "https://www.sefaria.org/api/texts/Genesis.32.31?context=0",
        verseReference: "בראשית ל\"ב, ל\"א",
        fullChapterSefariaRef: "Genesis.32",
        audioRegular: "https://mechon-mamre.org/mp3/t0132.mp3",
        characterIcon: "🤼",
        timelineYear: -1700,
        coordinates: [32.185, 35.632]
    }
];

const timelineData = [
    { year: -1800, character: "אברהם ולוט", event: "עקידה, סדום וחברון" },
    { year: -1700, character: "יעקב אבינו", event: "חלום הסולם והמאבק" },
    { year: -1313, character: "משה רבנו", event: "מתן תורה בהר סיני" },
    { year: -1273, character: "יהושע בן נון", event: "כניסה לארץ וכיבושים" },
    { year: -1200, character: "אהוד בן גרא", event: "התנקשות בעגלון מלך מואב" },
    { year: -1150, character: "דבורה הנביאה", event: "מלחמת סיסרא" },
    { year: -1148, character: "יעל", event: "הריגת סיסרא" },
    { year: -1100, character: "גדעון השופט", event: "מלחמת מדין" },
    { year: -1080, character: "שמשון הגיבור", event: "תמנה, עזה וגיבור הפלשתים" },
    { year: -1050, character: "שמואל וחנה", event: "שילה והמלכת שאול" },
    { year: -1030, character: "שאול המלך", event: "המלוכה והנפילה בגלבוע" },
    { year: -1000, character: "דוד המלך", event: "כיבוש ירושלים וניצחונות" },
    { year: -970, character: "שלמה המלך", event: "בניין המקדש" },
    { year: -930, character: "רחבעם וירבעם", event: "פילוג הממלכה ועגלי הזהב" },
    { year: -850, character: "אליהו ועמרי", event: "הכרמל, שומרון ויזרעאל" },
    { year: -800, character: "אלישע הנביא", event: "שונם וריפוי המים ביריחו" },
    { year: -780, character: "יונה הנביא", event: "הבריחה מיפו לנינווה" },
    { year: -760, character: "עמוס הנביא", event: "נבואות תוכחה מתקוע" },
    { year: -740, character: "מיכה הנביא", event: "נבואות החורבן ממורשת גת" },
    { year: -620, character: "יאשיהו המלך", event: "בדק הבית ומותו במגידו" },
    { year: -586, character: "ירמיהו הנביא", event: "חורבן בית ראשון" }
];


// Major Israeli Cities
const israelCities = [
    { name: "ירושלים", coords: [31.768, 35.213] },
    { name: "תל אביב", coords: [32.085, 34.781] },
    { name: "חיפה", coords: [32.794, 34.989] },
    { name: "ראשון לציון", coords: [31.973, 34.792] },
    { name: "פתח תקווה", coords: [32.083, 34.879] },
    { name: "אשדוד", coords: [31.791, 34.639] },
    { name: "נתניה", coords: [32.321, 34.853] },
    { name: "באר שבע", coords: [31.251, 34.791] },
    { name: "חולון", coords: [32.015, 34.776] },
    { name: "בני ברק", coords: [32.084, 34.829] },
    { name: "רמת גן", coords: [32.068, 34.824] },
    { name: "אשקלון", coords: [31.669, 34.571] },
    { name: "רחובות", coords: [31.892, 34.811] },
    { name: "בת ים", coords: [32.013, 34.748] },
    { name: "בית שמש", coords: [31.745, 34.986] },
    { name: "כפר סבא", coords: [32.171, 34.908] },
    { name: "הרצליה", coords: [32.162, 34.844] },
    { name: "חדרה", coords: [32.434, 34.919] },
    { name: "מודיעין", coords: [31.904, 35.007] },
    { name: "לוד", coords: [31.951, 34.888] },
    { name: "רמלה", coords: [31.927, 34.872] },
    { name: "רעננה", coords: [32.184, 34.871] },
    { name: "מודיעין עילית", coords: [31.933, 35.041] },
    { name: "הוד השרון", coords: [32.164, 34.896] },
    { name: "קריית אתא", coords: [32.802, 35.101] },
    { name: "נהריה", coords: [33.011, 35.094] },
    { name: "ביתר עילית", coords: [31.696, 35.111] },
    { name: "קרית גת", coords: [31.606, 34.771] },
    { name: "אילת", coords: [29.557, 34.951] },
    { name: "עפולה", coords: [32.610, 35.289] },
    { name: "כרמיאל", coords: [32.915, 35.301] },
    { name: "טבריה", coords: [32.794, 35.529] },
    { name: "אלעד", coords: [32.052, 34.951] },
    { name: "צפת", coords: [32.964, 35.498] },
    { name: "קרית שמונה", coords: [33.207, 35.571] },
    { name: "אריאל", coords: [32.106, 35.184] },
    { name: "שדרות", coords: [31.522, 34.595] },
    { name: "מעלה אדומים", coords: [31.776, 35.300] }
];

// Local State
let currentStationIndex = 0;
let score = 0;
let map;
let markersLayer; // Leaflet LayerGroup for dynamic pins
let homeMarkerLayer; // Store the home marker
let activeMarkers = {}; // Store marker references by ID

// DOM Elements
const clueTextElement = document.getElementById('clue-text');
const clueContainer = document.getElementById('clue-container');
const scoreValueElement = document.getElementById('score-value');
const resultModal = document.getElementById('result-modal');
const closeModalBtn = document.getElementById('close-modal');
const nextBtn = document.getElementById('next-button');
const revealBtn = document.getElementById('reveal-btn');
const skipBtn = document.getElementById('skip-btn');

const modalTitle = document.getElementById('modal-title');
const characterIcon = document.getElementById('character-icon');
const characterName = document.getElementById('character-name');
const placeName = document.getElementById('place-name');
const verseText = document.getElementById('verse-text');
const verseRef = document.getElementById('verse-ref');
const secondarySourceContainer = document.getElementById('secondary-source-container');
const secondaryVerseText = document.getElementById('secondary-verse-text');
const secondaryVerseRef = document.getElementById('secondary-verse-ref');
const spotifyPlayerContainer = document.getElementById('spotify-player-container');

const openChapterBtn = document.getElementById('open-chapter-btn');
const fullChapterModal = document.getElementById('full-chapter-modal');
const closeChapterModal = document.getElementById('close-chapter-modal');
const chapterTitle = document.getElementById('chapter-title');
const audioRegular = document.getElementById('audio-regular');
const audioYemenite = document.getElementById('audio-yemenite');
const regularAudioContainer = document.getElementById('regular-audio-container');
const yemeniteAudioContainer = document.getElementById('yemenite-audio-container');
const fullChapterText = document.getElementById('full-chapter-text');

let currentStationForChapter = null;

const successSound = document.getElementById('success-sound');
const errorSound = document.getElementById('error-sound');

// Spotify API Logic
let spotifyAccessToken = null;

async function getSpotifyToken() {
    if (spotifyAccessToken) return spotifyAccessToken;
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    
    if (!clientId || !clientSecret || clientId === 'your_client_id_here') {
        console.warn("Spotify credentials not set in .env.local");
        return null;
    }
    
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        spotifyAccessToken = data.access_token;
        return spotifyAccessToken;
    } catch (e) {
        console.error("Failed to get Spotify token", e);
        return null;
    }
}

async function embedSpotifyTrack(query) {
    spotifyPlayerContainer.innerHTML = '<p class="spotify-loading">מחפש שירים מתאימים...</p>';
    const token = await getSpotifyToken();
    if (!token) {
        spotifyPlayerContainer.innerHTML = '<p class="spotify-error">שגיאת התחברות לספוטיפיי.</p>';
        return;
    }
    
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        
        spotifyPlayerContainer.innerHTML = '';
        
        if (data.tracks && data.tracks.items.length > 0) {
            let items = data.tracks.items;
            shuffleArray(items);
            const selectedItems = items.slice(0, 3);
            
            selectedItems.forEach(track => {
                const trackId = track.id;
                const iframe = document.createElement('iframe');
                iframe.src = `https://open.spotify.com/embed/track/${trackId}`;
                iframe.width = "100%";
                iframe.height = "80";
                iframe.frameBorder = "0";
                iframe.allowTransparency = "true";
                iframe.allow = "encrypted-media";
                iframe.style.marginBottom = "10px";
                spotifyPlayerContainer.appendChild(iframe);
            });
        } else {
            spotifyPlayerContainer.innerHTML = '<p class="spotify-no-results">לא מצאנו שירים מתאימים... 🎵</p>';
        }
    } catch (e) {
        console.error("Failed to search Spotify", e);
        spotifyPlayerContainer.innerHTML = '<p class="spotify-error">שגיאה בחיפוש השירים.</p>';
    }
}

// Array shuffling utility
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initGame() {
    // Shuffle the stations so the game order is random every time
    shuffleArray(gameStations);
    
    initLeafletMap();
    loadCurrentStation();
    renderTimeline();
    initHomeSelector();
    
    closeModalBtn.addEventListener('click', hideModal);
    nextBtn.addEventListener('click', handleNextStation);
    revealBtn.addEventListener('click', handleRevealAnswer);
    skipBtn.addEventListener('click', handleNextStation);
}

// Initialize Home Selector
function initHomeSelector() {
    const select = document.getElementById('home-city');
    if (!select) return;

    // Sort alphabetically
    israelCities.sort((a, b) => a.name.localeCompare(b.name, 'he'));

    israelCities.forEach(city => {
        const option = document.createElement('option');
        option.value = JSON.stringify(city.coords);
        option.textContent = city.name;
        select.appendChild(option);
    });

    select.addEventListener('change', handleHomeSelection);
}

function handleHomeSelection(event) {
    const val = event.target.value;
    if (!val) return;

    const coords = JSON.parse(val);

    // Remove existing home marker if exists
    if (homeMarkerLayer && map.hasLayer(homeMarkerLayer)) {
        map.removeLayer(homeMarkerLayer);
    }

    const homeIcon = L.divIcon({
        className: 'custom-home-marker-wrapper',
        html: `<div class="custom-home-marker animate-drop">🏠</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    homeMarkerLayer = L.marker(coords, { icon: homeIcon }).addTo(map);
    
    // Pan to show the home and animate
    map.setView(coords, 10, { animate: true });
}

// Helper to break text into multiple lines
function formatMultiline(text) {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= 1) return text;
    if (words.length === 2) return `${words[0]}<br>${words[1]}`;
    
    // For 3 or more words, break nicely in the middle
    const mid = Math.ceil(words.length / 2);
    return `${words.slice(0, mid).join(" ")}<br>${words.slice(mid).join(" ")}`;
}

// Render Timeline
function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;
    
    timelineContainer.innerHTML = ''; // Clear previous if any
    
    // Create line
    const line = document.createElement('div');
    line.id = 'timeline-line';
    timelineContainer.appendChild(line);

    const minYear = timelineData[0].year;
    const maxYear = timelineData[timelineData.length - 1].year;
    const totalYears = maxYear - minYear;

    timelineData.forEach((item, index) => {
        // Calculate percentage (0 to 100)
        // With RTL, 0% is right, 100% is left.
        const padding = 5;
        const percentage = ((item.year - minYear) / totalYears) * (100 - 2 * padding) + padding;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item';
        if (index % 2 !== 0) {
            itemDiv.classList.add('staggered');
        }
        itemDiv.style.right = `${percentage}%`;
        itemDiv.setAttribute('data-year', item.year);

        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        itemDiv.appendChild(dot);

        if (item.character) {
            const connectorTop = document.createElement('div');
            connectorTop.className = 'timeline-connector-top';
            itemDiv.appendChild(connectorTop);

            const charDiv = document.createElement('div');
            charDiv.className = 'timeline-character';
            charDiv.innerHTML = formatMultiline(item.character);
            itemDiv.appendChild(charDiv);
        }

        if (item.event) {
            const connectorBottom = document.createElement('div');
            connectorBottom.className = 'timeline-connector-bottom';
            itemDiv.appendChild(connectorBottom);

            const eventDiv = document.createElement('div');
            eventDiv.className = 'timeline-event';
            eventDiv.innerHTML = formatMultiline(item.event);
            itemDiv.appendChild(eventDiv);
        }
        
        timelineContainer.appendChild(itemDiv);
    });
}

// Initialize Leaflet Map
function initLeafletMap() {
    map = L.map('map', {
        center: [31.8, 35.0],
        zoom: 8,
        minZoom: 7,
        maxZoom: 13,
        maxBounds: [
            [29.0, 33.0], 
            [34.0, 36.5]
        ]
    });

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map);
}

// Render only 5 pins per riddle
function renderMapPins(correctStation) {
    markersLayer.clearLayers();
    activeMarkers = {}; // clear active markers dict
    
    // Pick 4 random distractors
    const distractors = gameStations.filter(s => s.id !== correctStation.id);
    shuffleArray(distractors);
    const selectedDistractors = distractors.slice(0, 4);
    
    // Combine and shuffle the 5 pins
    const pinsToRender = [correctStation, ...selectedDistractors];
    shuffleArray(pinsToRender);
    
    pinsToRender.forEach((station) => {
        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `
                <div class="marker-text">${station.placeNameHebrew}</div>
                <div class="marker-circle"></div>
            `,
            iconSize: [120, 60],
            iconAnchor: [60, 60]
        });

        const marker = L.marker(station.coordinates, { icon: customIcon }).addTo(markersLayer);
        marker.on('click', () => handlePinClick(station.id));
        
        // Save reference for reveal logic
        activeMarkers[station.id] = marker;
    });
    
    // Pan to fit the bounds of the 5 pins nicely
    const group = L.featureGroup(markersLayer.getLayers());
    map.fitBounds(group.getBounds(), { padding: [50, 50], maxZoom: 10 });
}

function loadCurrentStation() {
    if (currentStationIndex >= gameStations.length) {
        clueTextElement.textContent = "סיימתם את כל החידות! כל הכבוד! 🎉";
        document.getElementById('clue-title').textContent = "ניצחון!";
        markersLayer.clearLayers();
        return;
    }
    const station = gameStations[currentStationIndex];
    clueTextElement.textContent = station.clueText;
    
    renderMapPins(station);
}

async function handlePinClick(clickedId) {
    if (currentStationIndex >= gameStations.length) return;
    
    const currentStation = gameStations[currentStationIndex];
    
    if (clickedId === currentStation.id) {
        handleCorrectAnswer(currentStation);
    } else {
        handleIncorrectAnswer();
    }
}

function handleIncorrectAnswer() {
    errorSound.currentTime = 0;
    errorSound.play().catch(e => console.log("Audio play blocked"));
    
    clueContainer.classList.remove('shake');
    void clueContainer.offsetWidth; // trigger reflow
    clueContainer.classList.add('shake');
}

function handleRevealAnswer() {
    if (currentStationIndex >= gameStations.length) return;
    const currentStation = gameStations[currentStationIndex];
    
    // Find the marker object for the correct answer
    const correctMarker = activeMarkers[currentStation.id];
    if (correctMarker) {
        // Add highlight class to the marker's DOM element
        const iconElement = correctMarker.getElement();
        if (iconElement) {
            iconElement.classList.add('highlight-marker');
        }
        
        // Pan map slightly towards the correct answer to make it obvious
        map.setView(currentStation.coordinates, 10, { animate: true });
    }
}

async function handleCorrectAnswer(station) {
    score += 10;
    scoreValueElement.textContent = score;
    currentStationForChapter = station;
    
    successSound.currentTime = 0;
    successSound.play().catch(e => console.log("Audio play blocked"));
    
    modalTitle.textContent = "כל הכבוד!";
    characterIcon.textContent = station.characterIcon;
    characterName.textContent = station.characterName;
    placeName.textContent = station.placeNameHebrew;
    verseRef.textContent = station.verseReference;
    verseText.textContent = "טוען פסוק מספרייה...";
    
    resultModal.classList.remove('hidden');
    
    // Timeline Highlight Logic
    document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active-timeline'));
    if (station.timelineYear) {
        const activeTimelineItem = document.querySelector(`.timeline-item[data-year="${station.timelineYear}"]`);
        if (activeTimelineItem) {
            activeTimelineItem.classList.add('active-timeline');
            // Smoothly scroll the timeline container so the active item is visible
            const timelineContainer = document.getElementById('timeline-container');
            if (timelineContainer && timelineContainer.parentElement) {
                // Approximate scroll position
                const wrapper = timelineContainer.parentElement;
                // item right percentage is known, but scrollLeft works differently in RTL.
                // ScrollIntoView works best.
                activeTimelineItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }
    
    // Clear previous Spotify player
    spotifyPlayerContainer.innerHTML = '';
    
    // Use explicit Spotify query if available, otherwise fallback to the character's name
    const query = station.spotifyQuery || station.characterName;
    embedSpotifyTrack(query);
    
    try {
        const response = await fetch(station.sefariaApiUrl);
        const data = await response.json();
        
        if (data && data.he && data.he.length > 0) {
            let cleanText = data.he;
            if (Array.isArray(cleanText)) {
                cleanText = cleanText.join(" ");
            }
            cleanText = cleanText.replace(/<[^>]*>?/gm, ''); // Remove HTML tags
            cleanText = cleanText.replace(/\{[ספ]\}/g, ''); // Remove Sefaria paragraph markers
            
            // Decode HTML entities (like &thinsp; and &nbsp;)
            const textArea = document.createElement('textarea');
            textArea.innerHTML = cleanText;
            cleanText = textArea.value;
            
            cleanText = cleanText.replace(/\s+/g, ' ').trim(); // Clean up extra spaces
            
            verseText.textContent = cleanText;
        } else {
            verseText.textContent = "לא הצלחנו לטעון את הפסוק.";
        }
    } catch (error) {
        console.error("Error fetching Sefaria API:", error);
        verseText.textContent = "שגיאה בטעינת הפסוק.";
    }
    
    // Handle secondary verse if exists
    if (station.secondarySefariaApiUrl) {
        secondarySourceContainer.classList.remove('hidden');
        secondaryVerseRef.textContent = station.secondaryVerseReference;
        secondaryVerseText.textContent = "טוען פסוק נוסף...";
        
        try {
            const secResponse = await fetch(station.secondarySefariaApiUrl);
            const secData = await secResponse.json();
            
            if (secData && secData.he && secData.he.length > 0) {
                let secCleanText = secData.he;
                if (Array.isArray(secCleanText)) secCleanText = secCleanText.join(" ");
                secCleanText = secCleanText.replace(/<[^>]*>?/gm, '');
                secCleanText = secCleanText.replace(/\{[ספ]\}/g, '');
                
                const textArea = document.createElement('textarea');
                textArea.innerHTML = secCleanText;
                secCleanText = textArea.value.replace(/\s+/g, ' ').trim();
                
                secondaryVerseText.textContent = secCleanText;
            } else {
                secondaryVerseText.textContent = "לא הצלחנו לטעון את הפסוק.";
            }
        } catch (error) {
            console.error("Error fetching secondary Sefaria API:", error);
            secondaryVerseText.textContent = "שגיאה בטעינת הפסוק.";
        }
    } else {
        if (secondarySourceContainer) {
            secondarySourceContainer.classList.add('hidden');
        }
    }
}

// Full Chapter Modal Logic
if (openChapterBtn) {
    openChapterBtn.addEventListener('click', async () => {
        if (!currentStationForChapter || !currentStationForChapter.fullChapterSefariaRef) return;
        
        fullChapterModal.classList.remove('hidden');
        chapterTitle.textContent = "טוען פרק...";
        fullChapterText.innerHTML = "<p>טוען נתונים מספרייה...</p>";
        
        // Set Audio
        if (currentStationForChapter.audioRegular) {
            regularAudioContainer.classList.remove('hidden');
            audioRegular.src = currentStationForChapter.audioRegular;
        } else {
            regularAudioContainer.classList.add('hidden');
            audioRegular.src = "";
        }
        
        if (currentStationForChapter.audioYemenite) {
            yemeniteAudioContainer.classList.remove('hidden');
            audioYemenite.src = currentStationForChapter.audioYemenite;
        } else {
            yemeniteAudioContainer.classList.add('hidden');
            audioYemenite.src = "";
        }
        
        // Fetch Text
        try {
            const response = await fetch(`https://www.sefaria.org/api/texts/${currentStationForChapter.fullChapterSefariaRef}?context=0`);
            const data = await response.json();
            
            chapterTitle.textContent = data.heRef || currentStationForChapter.fullChapterSefariaRef;
            
            if (data && data.he && data.he.length > 0) {
                let html = "";
                data.he.forEach((verseHe, index) => {
                    let cleanText = verseHe.replace(/<[^>]*>?/gm, ''); // Remove HTML tags
                    cleanText = cleanText.replace(/\{[ספ]\}/g, ''); // Remove Sefaria markers
                    const textArea = document.createElement('textarea');
                    textArea.innerHTML = cleanText;
                    cleanText = textArea.value.replace(/\s+/g, ' ').trim();
                    html += `<p><strong style="color:var(--secondary-color); margin-left: 10px;">${index+1}.</strong> ${cleanText}</p>`;
                });
                fullChapterText.innerHTML = html;
            } else {
                fullChapterText.innerHTML = "<p>לא נמצא טקסט לפרק זה.</p>";
            }
        } catch (error) {
            console.error("Error fetching full chapter:", error);
            fullChapterText.innerHTML = "<p>שגיאה בטעינת הפרק.</p>";
        }
    });
}

if (closeChapterModal) {
    closeChapterModal.addEventListener('click', () => {
        fullChapterModal.classList.add('hidden');
        audioRegular.pause();
        audioYemenite.pause();
    });
}

function hideModal() {
    resultModal.classList.add('hidden');
}

function handleNextStation() {
    hideModal();
    currentStationIndex++;
    loadCurrentStation();
}

document.addEventListener('DOMContentLoaded', initGame);
