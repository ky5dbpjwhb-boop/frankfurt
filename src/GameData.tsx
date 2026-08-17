import * as React from "react"
import Flur from "./Flur.tsx"
import Wohnzimmer from "./Wohnzimmer.tsx"
import Schlafzimmer from "./Schlafzimmer.tsx"
import Kitchen from "./Kitchen.tsx"
import Bathroom from "./Bathroom.tsx"
import Balcony from "./Balcony.tsx"
import Street from "./Street.tsx"
import Park from "./Park.tsx"
import Kiosk from "./Kiosk.tsx"
import Sandwich from "./Sandwich.tsx"
import Supplier from "./Supplier.tsx"
import Amt from "./Amt.tsx"
import Supermarkt from "./Supermarkt.tsx"
import Gericht from "./Gericht.tsx"
import Knast from "./Knast.tsx"
import Zelle from "./Zelle.tsx"
import Hof from "./Hof.tsx"
import Kantine from "./Kantine.tsx"
import Sportraum from "./Sportraum.tsx"
import KioskClosed from "./KioskClosed.tsx"
import EinbruchKiosk from "./EinbruchKiosk.tsx"
import Hochhaus from "./Hochhaus.tsx"
import SandwichClosed from "./SandwichClosed.tsx"
import SupermarktClosed from "./SupermarktClosed.tsx"
import Nordwestzentrum from "./Nordwestzentrum.tsx"
import HalleA from "./HalleA.tsx"
import HalleB from "./HalleB.tsx"
import HalleC from "./HalleC.tsx"
import Untergeschoss from "./Untergeschoss.tsx"
import HalleABudget from "./HalleABudget.tsx"
import HalleABudgetClosed from "./HalleABudgetClosed.tsx"
import HalleAMid from "./HalleAMid.tsx"
import HalleAMidClosed from "./HalleAMidClosed.tsx"
import HalleAPremium from "./HalleAPremium.tsx"
import HalleAPremiumClosed from "./HalleAPremiumClosed.tsx"
import HalleBSchmuck from "./HalleBSchmuck.tsx"
import HalleBSchmuckClosed from "./HalleBSchmuckClosed.tsx"
import HalleBParfuem from "./HalleBParfuem.tsx"
import HalleBParfuemClosed from "./HalleBParfuemClosed.tsx"
import HalleCTv from "./HalleCTv.tsx"
import HalleCTvClosed from "./HalleCTvClosed.tsx"
import HalleCKonsole from "./HalleCKonsole.tsx"
import HalleCKonsoleClosed from "./HalleCKonsoleClosed.tsx"
import HalleCKuehl from "./HalleCKuehl.tsx"
import HalleCKuehlClosed from "./HalleCKuehlClosed.tsx"
import NwzugDoener from "./NwzugDoener.tsx"
import NwzugDoenerClosed from "./NwzugDoenerClosed.tsx"
import NwzugBurger from "./NwzugBurger.tsx"
import NwzugBurgerClosed from "./NwzugBurgerClosed.tsx"
import NwzugSushi from "./NwzugSushi.tsx"
import NwzugSushiClosed from "./NwzugSushiClosed.tsx"
import NordwestzentrumClosed from "./NordwestzentrumClosed.tsx"
import HalleAClosed from "./HalleAClosed.tsx"
import HalleBClosed from "./HalleBClosed.tsx"
import HalleCClosed from "./HalleCClosed.tsx"
import UntergeschossClosed from "./UntergeschossClosed.tsx"
import BusDay from "./BusDay.tsx"
import BusNight from "./BusNight.tsx"
import CarDay from "./CarDay.tsx"
import CarNight from "./CarNight.tsx"
import Garage from "./Garage.tsx"
import FreundeChillen from "./FreundeChillen.tsx"
import Flughafen from "./Flughafen.tsx"
import MiamiFlughafen from "./MiamiFlughafen.tsx"
import MiamiStrasse from "./MiamiStrasse.tsx"
import MiamiHotel from "./MiamiHotel.tsx"
import MiamiStrand from "./MiamiStrand.tsx"
import MiamiParty from "./MiamiParty.tsx"
import MiamiLaden from "./MiamiLaden.tsx"
import MiamiStrasseNacht from "./MiamiStrasseNacht.tsx"
import MiamiHotelNacht from "./MiamiHotelNacht.tsx"
import MiamiStrandNacht from "./MiamiStrandNacht.tsx"
import MiamiPartyNacht from "./MiamiPartyNacht.tsx"
import MiamiLadenNacht from "./MiamiLadenNacht.tsx"
import Revier from "./Revier.tsx"
import WohnzimmerNacht from "./WohnzimmerNacht.tsx"
import FlurNacht from "./FlurNacht.tsx"
import SchlafzimmerNacht from "./SchlafzimmerNacht.tsx"
import KitchenNacht from "./KitchenNacht.tsx"
import BathroomNacht from "./BathroomNacht.tsx"
import BalconyNacht from "./BalconyNacht.tsx"
import StreetNacht from "./StreetNacht.tsx"
import ParkNacht from "./ParkNacht.tsx"
import SupplierNacht from "./SupplierNacht.tsx"
import AmtNacht from "./AmtNacht.tsx"
import ZelleNacht from "./ZelleNacht.tsx"
import RevierNacht from "./RevierNacht.tsx"

// =====================================================
// FRANKFURT LIFE SIMULATOR
// GAMECORE
// Version 0.9 (Ware bunkern, Lieferanten-Limit, Überfälle/
// Polizei draußen, Level/Respekt-System, Übergangs-Texte)
// =====================================================
//
// 01 EINSTELLUNGEN (hier kannst du Werte leicht anpassen)
// 02 SPIELSTAND LADEN / SPEICHERN
// 03 SPIELWERTE
// 04 ZEIT-SYSTEM
// 05 SPIELFUNKTIONEN
// 06 KUNDEN-NACHRICHTEN-SYSTEM (ortsunabhängig)
// 07 GEFAHR DRAUSSEN (Überfälle & Polizei-Kontrollen)
// 08 NAVIGATION (mit Übergangs-Text)
// 09 ORTE / BUTTONS
// 10 HUD-KONFIGURATION
// 11 TAG/NACHT-BERECHNUNG
// 12 SCENE-AUSWAHL
// 13 OBERFLÄCHE (RENDER)
//
// =====================================================

export const SAVE_KEY = "frankfurt-life-simulator-save"

// -----------------------------------------------------
// 01 EINSTELLUNGEN
// -----------------------------------------------------
export const TIME_COST_MINUTES = {
    sleep: 8 * 60,
    work: 4 * 60,
    eat: 60,
    shower: 60,
    watchMovie: 2 * 60,
    sellPackage: 30,
    buyPackage: 0,
    buyCola: 0,
    buyChocolate: 0,
    buySandwich: 0,
    buyCigarettes: 0,
    smoke: 5,
    takePackages: 10,
    stashPackages: 5,
    buyGroceries: 30,
    brushTeeth: 5,
    playGames: 60,
    jailSleep: 8 * 60,
    jailWatchTV: 120,
    jailWeightsSport: 60,
    jailYardSport: 60,
    jailCanteen: 60,
    jailEatCell: 30,
    jailEatCanteen: 30,
    jailWorkJob: 60,
    jailSocial: 45,
}

export const REAL_MS_PER_TICK = 8000 // alle 8 echten Sekunden
export const GAME_MINUTES_PER_TICK = 10 // vergehen 10 Spielminuten

export const MAX_HEAT = 5 // ab wie vielen Sternen kommt die Polizei
export const SELL_ENERGY_COST = 15 // Energie-Verlust pro Verkauf
export const HEAT_DECAY_SECONDS = 50 // alle X echten Sekunden sinkt die Hitze um 1

export const SURVEILLANCE_DURATION_MINUTES = 6 * 60 // 6 Spielstunden
export const SURVEILLANCE_MIN_HEAT = 2
export const FENCE_RATE = 0.8
export const HEAT_DECAY_SECONDS_PHONE_OFF = 15

export const PHONE_OFF_PENALTY_MINUTES = 12 * 60

export const CUSTOMER_MIN_DELAY_MS = 6000

export const PHONE_APPS = [
    { key: "kryptor", label: "Kryptor", emoji: "🔒", color: "#1f6b52" },
    { key: "chatwave", label: "ChatWave", emoji: "💬", color: "#2c9c5c" },
    { key: "pixgram", label: "PixGram", emoji: "📸", color: "#a83279" },
    { key: "sparkly", label: "Sparkly", emoji: "💕", color: "#d84a6b" },
    { key: "webgo", label: "WebGo", emoji: "🌐", color: "#2c6fa8" },
    { key: "foodo", label: "Foodo", emoji: "🍔", color: "#c9432c" },
    { key: "karte", label: "Karte", emoji: "🗺", color: "#3a6b8a" },
]
export const FOODO_MENU = [
    { key: "foodo_pizza", name: "Pizza", price: 12, hunger: 45, mood: 10 },
    { key: "foodo_asia", name: "Asia-Box", price: 14, hunger: 40, mood: 12 },
    {
        key: "foodo_burger",
        name: "Burger-Menü",
        price: 10,
        hunger: 40,
        mood: 8,
    },
]
export const FOODO_DELIVERY_MINUTES = 60
export const CUSTOMER_MAX_DELAY_MS = 18000

export const NPC_FRIENDS = [
    { key: "emre", name: "Emre", emoji: "🧑" },
    { key: "elif", name: "Elif", emoji: "👩" },
    { key: "milan", name: "Milan", emoji: "🧑‍🦱" },
    { key: "amira", name: "Amira", emoji: "👩‍🦰" },
]
// Zusätzliche Kontakte, die man im Club/in der Lounge kennenlernen kann.
// Landen dann in ChatWave und werden zu potenziellen Kunden.
export const NIGHTLIFE_CONTACTS = [
    { key: "tarek", name: "Tarek", emoji: "🧔" },
    { key: "jonas", name: "Jonas", emoji: "👨" },
    { key: "nadia", name: "Nadia", emoji: "👩‍🦱" },
    { key: "sami", name: "Sami", emoji: "🧑‍🦲" },
    { key: "leyla", name: "Leyla", emoji: "👩‍🎤" },
    { key: "chris", name: "Chris", emoji: "🧑‍🎤" },
    { key: "burak", name: "Burak", emoji: "🧑‍🦱" },
    { key: "melissa", name: "Melissa", emoji: "👱‍♀️" },
    { key: "dennis", name: "Dennis", emoji: "🧑" },
    { key: "fatima", name: "Fatima", emoji: "🧕" },
    { key: "kevin", name: "Kevin", emoji: "👦" },
    { key: "jasmin", name: "Jasmin", emoji: "👩" },
    { key: "arman", name: "Arman", emoji: "🧔‍♂️" },
    { key: "sarah", name: "Sarah", emoji: "👩‍🦳" },
    { key: "murat", name: "Murat", emoji: "👨‍🦰" },
    { key: "vanessa", name: "Vanessa", emoji: "💇‍♀️" },
    { key: "denis", name: "Denis", emoji: "🕺" },
    { key: "aylin2", name: "Aylin K.", emoji: "💃" },
    { key: "marco", name: "Marco", emoji: "🧑‍💼" },
    { key: "sinem", name: "Sinem", emoji: "👩‍🦰" },
    { key: "erik", name: "Erik", emoji: "👨‍🦲" },
    { key: "hannah", name: "Hannah", emoji: "👧" },
    { key: "yusuf", name: "Yusuf", emoji: "🧑‍🌾" },
    { key: "lena", name: "Lena", emoji: "👩‍🎓" },
    { key: "tobias", name: "Tobias", emoji: "🧑‍🔧" },
    { key: "elena", name: "Elena", emoji: "👩‍🍳" },
    { key: "hakan", name: "Hakan", emoji: "🧑‍✈️" },
    { key: "nina", name: "Nina", emoji: "👩‍🎨" },
    { key: "robin", name: "Robin", emoji: "🧑‍🎨" },
    { key: "dilara", name: "Dilara", emoji: "👩‍💼" },
    { key: "serkan", name: "Serkan", emoji: "🧑‍🏭" },
    { key: "pia", name: "Pia", emoji: "👩‍🔬" },
    { key: "onur", name: "Onur", emoji: "🧑‍🚀" },
    { key: "mara", name: "Mara", emoji: "👩‍🚒" },
    { key: "levent", name: "Levent", emoji: "🧑‍⚖️" },
    { key: "tugce", name: "Tugce", emoji: "👩‍🏫" },
    { key: "flo", name: "Flo", emoji: "🧑‍🎓" },
    { key: "besim", name: "Besim", emoji: "🧔‍♀️" },
    { key: "carina", name: "Carina", emoji: "💁‍♀️" },
    { key: "ilias", name: "Ilias", emoji: "🙋‍♂️" },
]
// Die Kiosk-Kassiererin: fester Kontakt, den man beim Kiosk kennenlernt.
// Sie bleibt einem treu und verschwindet nie (auch nicht durch Eifersucht).
export const KIOSK_CASHIER = {
    key: "melike",
    name: "Melike (Kiosk)",
    emoji: "👩‍💼",
}
// Ab dieser Freundschaft kann man sie nach Hause einladen
export const KIOSK_CASHIER_LOVE_LEVEL = 40

// Anmachen: ab dieser Freundschaft kann man es bei Kontakten versuchen
export const FLIRT_MIN_FRIENDSHIP = 25
export const FLIRT_DURATION_SECONDS = 6
export const FLIRT_TAPS_NEEDED = 10
// Grundchance, dass es klappt (steigt mit Style, Charisma und Freundschaft)
export const FLIRT_BASE_CHANCE = 0.35

// Intim-Minispiel beim Hausbesuch
export const INTIMACY_DURATION_SECONDS = 12
export const INTIMACY_TAPS_NEEDED = 30
// Ab dieser Beziehungsstufe kann man fest zusammenkommen
export const RELATIONSHIP_MIN_LEVEL = 6
// Gruppentreffen: Grundchance, dass jemand Zeit hat
export const GROUP_AVAILABILITY_BASE = 0.45

// Namen für angeheuerte Dealer
// Legale Nebenjobs: Ort -> Job. Bezahlung steigt mit Charisma/Stärke.
export const SIDE_JOBS: Record<
    string,
    {
        label: string
        hours: number
        basePay: number
        energy: number
        mood: number
    }
> = {
    supermarkt: {
        label: "🛒 Regale einräumen",
        hours: 4,
        basePay: 55,
        energy: 30,
        mood: -8,
    },
    kiosk: {
        label: "🏪 Im Kiosk aushelfen",
        hours: 3,
        basePay: 40,
        energy: 20,
        mood: -5,
    },
    sandwich: {
        label: "🥪 Im Sandwichladen aushelfen",
        hours: 4,
        basePay: 50,
        energy: 28,
        mood: -6,
    },
    nwzug: {
        label: "📦 Lieferdienst im Zentrum",
        hours: 5,
        basePay: 75,
        energy: 35,
        mood: -10,
    },
    gallusviertel_platz: {
        label: "🥙 Küchenhilfe im Grill",
        hours: 4,
        basePay: 55,
        energy: 30,
        mood: -7,
    },
    bockenheim_platz: {
        label: "☕ Im Café aushelfen",
        hours: 4,
        basePay: 60,
        energy: 25,
        mood: -4,
    },
    sachsenhausen_hof: {
        label: "🍺 In der Stubb bedienen",
        hours: 5,
        basePay: 80,
        energy: 32,
        mood: -5,
    },
    bahnhofsviertel_hof: {
        label: "🪩 An der Clubtheke arbeiten",
        hours: 5,
        basePay: 95,
        energy: 35,
        mood: -6,
    },
}
// Wie viel Charisma und Stärke den Lohn erhöhen (pro Level)
export const JOB_PAY_PER_CHARISMA = 0.06
export const JOB_PAY_PER_STRENGTH = 0.04
// Wie oft man denselben Job pro Tag machen kann
export const JOB_MAX_PER_DAY = 2

// Vorteile durch eine feste Beziehung
export const PARTNER_DAILY_MOOD = 12
export const PARTNER_COOK_HUNGER = 60
export const PARTNER_STASH_PROTECTION = 0.5
export const PARTNER_LOAN_AMOUNT = 300

// Sprüche, die deine Begleitung von sich gibt – je nach Ort
export const COMPANION_LINES: Record<string, string[]> = {
    park: [
        "Hier war ich ewig nicht mehr.",
        "Schön ruhig heute.",
        "Lass uns kurz sitzen.",
    ],
    street: ["Wo gehen wir eigentlich hin?", "Bisschen kalt heute, oder?"],
    kiosk: ["Nimm mir auch was mit, ja?", "Ich hol mir 'ne Cola."],
    supermarkt: [
        "Ich brauch auch noch was.",
        "Guck mal, das war letzte Woche billiger.",
    ],
    bahnhofsviertel_hof: ["Die Musik ist geil heute!", "Komm, wir tanzen!"],
    bahnhofsviertel_ecke: ["Die Shisha hier ist echt gut.", "Chillig hier."],
    sachsenhausen_hof: [
        "Ein Ebbelwoi noch?",
        "Hier war ich mit meinem Vater früher.",
    ],
    nwzug: ["Ich hab Hunger, lass was essen.", "Guck mal die Schlange da."],
    wohnzimmer: [
        "Bei dir ist es echt gemütlich.",
        "Machst du mal was anderes an?",
    ],
    kitchen: ["Hast du was zu essen da?", "Ich mach uns was, warte."],
    balcony: ["Schöne Aussicht hast du.", "Endlich mal frische Luft."],
    default: [
        "Und, wie läuft's bei dir so?",
        "Lang nicht mehr gesehen.",
        "Erzähl mal, was geht bei dir?",
        "Kein Stress gerade, oder?",
    ],
}
// Sprüche speziell bei einem Date
export const DATE_LINES: Record<string, string[]> = {
    bahnhofsviertel_hof: ["Tanz mit mir!", "Du siehst heute richtig gut aus."],
    sachsenhausen_platz: [
        "Die Straße hier mag ich total.",
        "Zeigst du mir mal deine Lieblingsecke?",
    ],
    bockenheim_platz: [
        "Der Kaffee hier ist echt gut.",
        "Erzähl mir was von dir.",
    ],
    park: ["Hier ist es schön mit dir.", "Können wir öfter machen, oder?"],
    wohnzimmer: ["Bei dir gefällt's mir.", "Bleiben wir einfach hier?"],
    default: [
        "Schön, dass wir das machen.",
        "Ich mag das mit uns.",
        "Was machst du eigentlich sonst so?",
        "Du bist anders als die anderen.",
    ],
}
// Wie oft (Spielminuten) etwa ein Spruch kommt
export const COMPANION_LINE_INTERVAL = 40
// Vorschläge, die deine Begleitung von sich aus macht
export const COMPANION_SUGGESTIONS = [
    { id: "park", text: "Lass uns in den Park!" },
    { id: "nwzug", text: "Ich hab Hunger – Nordwestzentrum?" },
    { id: "bahnhofsviertel_hof", text: "Bock auf Club Elbe?" },
    { id: "sachsenhausen_hof", text: "Auf einen Ebbelwoi in die Stubb?" },
    { id: "bockenheim_platz", text: "Kaffee an der Warte?" },
    { id: "kiosk", text: "Kurz zum Kiosk?" },
]
// Wie oft ein Vorschlag kommt (Spielminuten)
export const COMPANION_SUGGESTION_INTERVAL = 90
// Bonus, wenn du dem Vorschlag folgst
export const COMPANION_SUGGESTION_REWARD = 8
// Wenn du einen Vorschlag ablehnst
export const COMPANION_DECLINE_PENALTY = 4

// ---- Aktions-Minispiele ----
// Jede Aktion hat ein kleines Spiel: Dauer, nötige Treffer, Titel
export const ACTION_GAMES: Record<
    string,
    {
        label: string
        emoji: string
        seconds: number
        taps: number
        hint: string
    }
> = {
    sport: {
        label: "Sport",
        emoji: "💪",
        seconds: 10,
        taps: 20,
        hint: "Durchhalten!",
    },
    rauchen: {
        label: "Rauchen",
        emoji: "🚬",
        seconds: 8,
        taps: 8,
        hint: "Ruhig ziehen",
    },
    joint: {
        label: "Joint",
        emoji: "🌀",
        seconds: 9,
        taps: 10,
        hint: "Gleichmäßig ziehen",
    },
    tanzen: {
        label: "Tanzen",
        emoji: "💃",
        seconds: 12,
        taps: 24,
        hint: "Im Takt bleiben!",
    },
    zocken: {
        label: "Zocken",
        emoji: "🎮",
        seconds: 10,
        taps: 22,
        hint: "Reaktion zeigen",
    },
    trinken: {
        label: "Trinken",
        emoji: "🍺",
        seconds: 8,
        taps: 12,
        hint: "Prost!",
    },
    essen: {
        label: "Essen",
        emoji: "🍔",
        seconds: 8,
        taps: 10,
        hint: "Genießen",
    },
    schwimmen: {
        label: "Schwimmen",
        emoji: "🏊",
        seconds: 12,
        taps: 22,
        hint: "Zieh durch!",
    },
    arbeiten: {
        label: "Arbeiten",
        emoji: "💼",
        seconds: 12,
        taps: 24,
        hint: "Schicht schaffen",
    },
}
// Wie stark eine gute Leistung den Ertrag erhöht (max. +50 %)
export const ACTION_GAME_MAX_BONUS = 0.5
// Bonus, wenn jemand dabei ist
export const ACTION_GAME_COMPANY_BONUS = 0.25
// Laune-Gewinn pro Stunde mit einer guten Begleitung
export const COMPANION_MOOD_PER_HOUR = 4

// Was ein Date sich für den Abend wünscht
export const DATE_WISHES = [
    {
        key: "essen",
        text: "Lass uns was essen gehen.",
        locations: [
            "nwzug",
            "miami_restaurant",
            "bockenheim_platz",
            "sachsenhausen_platz",
        ],
        reward: 2,
    },
    {
        key: "tanzen",
        text: "Ich hab Lust zu tanzen!",
        locations: ["bahnhofsviertel_hof", "miami_club", "miami_beachparty"],
        reward: 2,
    },
    {
        key: "drink",
        text: "Auf einen Drink irgendwo?",
        locations: [
            "sachsenhausen_hof",
            "bahnhofsviertel_ecke",
            "miami_bar",
            "miami_rooftop",
        ],
        reward: 2,
    },
    {
        key: "spazieren",
        text: "Lass uns einfach spazieren gehen.",
        locations: ["park", "miami_strand", "miami_liegestuhl"],
        reward: 2,
    },
]
// Nach wie vielen Minuten das Date von sich aus gehen will
export const DATE_DURATION_MINUTES = 180
// Geschenke, die man einem Date unterwegs machen kann
// ---- Chat-System: Schlüsselwörter erkennen und passend antworten ----
export type ChatIntent =
    | "kompliment"
    | "flirt"
    | "treffen"
    | "frage"
    | "gruss"
    | "beleidigung"
    | "geschaeft"
    | "smalltalk"
    | "gehen"
    | "mitkommen"

export const CHAT_KEYWORDS: { intent: ChatIntent; words: string[] }[] = [
    {
        intent: "mitkommen",
        words: [
            "komm mit zu mir",
            "zu mir nach hause",
            "mit zu mir",
            "bei mir",
            "wir gehen zu mir",
            "komm mit hoch",
        ],
    },
    {
        intent: "gehen",
        words: [
            "lass uns gehen",
            "ich muss los",
            "machen wir schluss für heute",
            "ich geh dann",
            "bis dann",
            "tschüss",
            "ciao",
            "war schön heute",
        ],
    },
    {
        intent: "beleidigung",
        words: [
            "idiot",
            "dumm",
            "hässlich",
            "hurensohn",
            "fick",
            "arsch",
            "spast",
            "verpiss",
            "halt die fresse",
            "nervst",
            "blöd",
            "wichser",
        ],
    },
    {
        intent: "treffen",
        words: [
            "treffen",
            "sehen",
            "abhängen",
            "chillen",
            "vorbeikommen",
            "rauskommen",
            "unterwegs",
            "hast du zeit",
            "lust rauszugehen",
            "bock",
            "wo bist du",
        ],
    },
    {
        intent: "flirt",
        words: [
            "date",
            "verliebt",
            "vermisse",
            "kuss",
            "küssen",
            "liebe dich",
            "verknallt",
            "zu mir",
            "bei mir übernachten",
            "wir zwei",
            "was für uns",
        ],
    },
    {
        intent: "kompliment",
        words: [
            "schön",
            "hübsch",
            "süß",
            "toll",
            "cool",
            "mag dich",
            "gut aus",
            "sympathisch",
            "witzig",
            "klug",
            "nett",
            "beste",
            "krass gut",
        ],
    },
    {
        intent: "geschaeft",
        words: [
            "ware",
            "stoff",
            "gras",
            "koks",
            "piece",
            "deal",
            "geschäft",
            "kaufen",
            "besorgen",
        ],
    },
    {
        intent: "gruss",
        words: [
            "hallo",
            "hey",
            "moin",
            "was geht",
            "alles klar",
            "wie gehts",
            "wie geht's",
            "servus",
        ],
    },
    { intent: "frage", words: ["?"] },
]

// Antworten je nach Absicht und Verhältnis (low = unter 30, mid = 30-69, high = ab 70)
export const CHAT_REPLIES: Record<
    ChatIntent,
    { low: string[]; mid: string[]; high: string[] }
> = {
    gruss: {
        low: ["Hey.", "Alles gut, und bei dir?", "Hi."],
        mid: [
            "Hey du! Alles fit?",
            "Naa, was machst du so?",
            "Hi! Lange nichts gehört.",
        ],
        high: [
            "Heyyy! Schön dass du schreibst 😊",
            "Na endlich meldest du dich!",
            "Hab grad an dich gedacht!",
        ],
    },
    kompliment: {
        low: ["Ähm... danke?", "Okay.", "Na gut."],
        mid: [
            "Danke, das ist lieb 😊",
            "Oh, danke dir!",
            "Haha, das hör ich gern.",
        ],
        high: [
            "Du bist echt süß 🥰",
            "Awww, du machst mich verlegen!",
            "Von dir hör ich das gern ❤️",
        ],
    },
    flirt: {
        low: [
            "Puh, ich kenn dich kaum.",
            "Lass uns mal langsam machen.",
            "Ähm, nein.",
        ],
        mid: ["Mal sehen 😏", "Du bist ja direkt!", "Vielleicht... wer weiß."],
        high: [
            "Ich dich auch ❤️",
            "Wann sehen wir uns? 😘",
            "Komm doch einfach vorbei 😏",
        ],
    },
    treffen: {
        low: [
            "Heute passt schlecht.",
            "Ich hab keine Zeit gerade.",
            "Vielleicht ein andermal.",
        ],
        mid: [
            "Ja, warum nicht! Wo denn?",
            "Klar, lass was machen.",
            "Bin dabei!",
        ],
        high: [
            "Auf jeden! Ich komm sofort 😄",
            "Immer! Sag wo.",
            "Endlich, ich warte schon!",
        ],
    },
    frage: {
        low: ["Weiß nicht.", "Warum fragst du?", "Keine Ahnung."],
        mid: [
            "Gute Frage! Erzähl du erst.",
            "Hmm, kommt drauf an.",
            "Sag du's mir 😄",
        ],
        high: [
            "Alles was du wissen willst 😊",
            "Frag ruhig, ich hab nichts zu verbergen.",
            "Für dich immer!",
        ],
    },
    beleidigung: {
        low: ["Verpiss dich.", "Was soll das?", "Schreib mir nicht mehr."],
        mid: ["Ey, was soll das denn?", "Das war unnötig.", "Ernsthaft jetzt?"],
        high: [
            "Das tut echt weh von dir...",
            "Warum sagst du sowas?",
            "Ich dachte wir wären Freunde 😞",
        ],
    },
    geschaeft: {
        low: [
            "Ich weiß nicht wovon du redest.",
            "Nicht über Chat, Mann.",
            "Kenn dich zu wenig dafür.",
        ],
        mid: [
            "Vielleicht. Was brauchst du?",
            "Können wir drüber reden.",
            "Meld dich wenn du was hast.",
        ],
        high: [
            "Klar, sag was du brauchst.",
            "Für dich immer was da.",
            "Bin dabei, wie immer 👍",
        ],
    },
    smalltalk: {
        low: ["Aha.", "Okay.", "Hmm."],
        mid: ["Verstehe. Und sonst so?", "Interessant!", "Ja, kenn ich."],
        high: ["Erzähl mehr! 😊", "Haha, typisch du.", "Das mag ich an dir."],
    },
    gehen: {
        low: ["Ja, auch besser.", "Okay, tschüss.", "Bis dann."],
        mid: ["Alles klar, war nett!", "Ja, ich muss auch los.", "Bis bald!"],
        high: [
            "Schade, aber okay 😊",
            "War richtig schön mit dir!",
            "Meld dich wieder, ja?",
        ],
    },
    mitkommen: {
        low: ["Ähm, nein danke.", "Lieber nicht.", "So weit sind wir nicht."],
        mid: [
            "Hmm... vielleicht ein andermal.",
            "Heute nicht, sorry.",
            "Mal sehen.",
        ],
        high: [
            "Ja, gerne 😊",
            "Auf jeden Fall!",
            "Dachte schon du fragst nie 😏",
        ],
    },
}

// Wie stark eine Nachricht das Verhältnis verändert
export const CHAT_EFFECTS: Record<
    ChatIntent,
    { low: number; mid: number; high: number }
> = {
    gruss: { low: 1, mid: 2, high: 2 },
    kompliment: { low: 1, mid: 4, high: 5 },
    flirt: { low: -3, mid: 2, high: 6 },
    treffen: { low: 0, mid: 2, high: 3 },
    frage: { low: 1, mid: 2, high: 3 },
    beleidigung: { low: -15, mid: -12, high: -20 },
    geschaeft: { low: 0, mid: 1, high: 2 },
    smalltalk: { low: 0, mid: 1, high: 2 },
    gehen: { low: 0, mid: 0, high: 0 },
    mitkommen: { low: -2, mid: 0, high: 3 },
}

// Erkennt die Absicht hinter einer geschriebenen Nachricht
export function detectChatIntent(text: string): ChatIntent {
    const lower = text.toLowerCase()
    for (const entry of CHAT_KEYWORDS) {
        if (entry.words.some((w) => lower.includes(w))) return entry.intent
    }
    return "smalltalk"
}

// Stufe des Verhältnisses für die Antwortauswahl
export function relationTier(value: number): "low" | "mid" | "high" {
    if (value >= 70) return "high"
    if (value >= 30) return "mid"
    return "low"
}

export const DATE_GIFTS = [
    { key: "blumen", label: "🌹 Blumen kaufen", price: 12, reward: 1 },
    { key: "drink", label: "🍸 Einen Drink ausgeben", price: 15, reward: 1 },
    { key: "kette", label: "🎁 Kleines Geschenk", price: 60, reward: 2 },
]

export const DEALER_NAMES = [
    "Kemal",
    "Rico",
    "Timo",
    "Ferdi",
    "Nico",
    "Dario",
    "Ilyas",
    "Sven",
    "Bilal",
    "Mirko",
    "Jannis",
    "Okan",
]
// Loyalität: ab hier machen sie auch krumme Aufträge
export const HITMAN_MIN_LOYALTY = 70
// Wie lange ein Dealer nach einem Auftrag sitzt (Spieltage)
export const HIT_JAIL_DAYS = 30
// Grundchance, dass er dich verrät (sinkt mit Loyalität)
export const HIT_BETRAYAL_BASE_CHANCE = 0.35
// Was ein Auftrag kostet
export const HIT_PRICE = 2500
// Jemanden im Knast zusammenschlagen lassen
export const JAIL_HIT_PRICE = 800

// Aufträge: Art und Preis
export const ORDER_PRICES = {
    verjagen: 600,
    verpruegeln: 1200,
    ausschalten: 2500,
}
// Ab dieser Loyalität macht ein Dealer welche Art von Auftrag
export const ORDER_MIN_LOYALTY = {
    verjagen: 40,
    verpruegeln: 55,
    ausschalten: 70,
}
// Wie lange der Ausführende dafür sitzt (Spieltage)
export const ORDER_JAIL_DAYS = {
    verjagen: 0,
    verpruegeln: 6,
    ausschalten: 30,
}
// Verrats-Risiko je nach Auftrag und Loyalität des Ausführenden
export const ORDER_BETRAYAL = {
    verjagen: { threshold: 0, chance: 0 },
    verpruegeln: { threshold: 65, chance: 0.2 },
    ausschalten: { threshold: 80, chance: 0.4 },
}
// Wie lange ein beauftragter Ex-Dealer-Job dauert (Spieltage)
export const ORDER_HUNT_DAYS = 7

// Kunden auf Pump: Frist und Folgen
export const CREDIT_DAYS = 7
export const CREDIT_MAX_PER_CUSTOMER = 400
// Eintreiben durch deine Dealer
export const DEBT_COLLECT_MIN_LOYALTY = 45
export const DEBT_COLLECT_SUCCESS_BASE = 0.55

// Mithäftlinge, die man im Knast kennenlernen kann. Treffen kann man sie
// erst, wenn sie wieder draußen sind.
export const INMATE_CONTACTS = [
    { key: "razor", name: "Razor", emoji: "🧑‍🦲" },
    { key: "tommy", name: "Tommy", emoji: "🧔" },
    { key: "goran", name: "Goran", emoji: "👨‍🦳" },
    { key: "jamal", name: "Jamal", emoji: "🧑🏾" },
    { key: "vito", name: "Vito", emoji: "🕴" },
]
// Wie lange ein Mithäftling nach dem Kennenlernen noch sitzt (in Tagen)
export const INMATE_RELEASE_MIN_DAYS = 2
export const INMATE_RELEASE_MAX_DAYS = 8
// Chance pro Tag, dass ein freier Knast-Kontakt wieder einfährt
export const INMATE_REARREST_CHANCE_PER_DAY = 0.06
export const INMATE_REARREST_MIN_DAYS = 3
export const INMATE_REARREST_MAX_DAYS = 14
// Gemeinsamer Einbruch: mehr Zeit, mehr Beute – aber geteilt
export const PARTNER_BREAKIN_EXTRA_SECONDS = 8
export const PARTNER_BREAKIN_SHARE = 0.6

export const NIGHTLIFE_CONTACT_CHANCE = 0.55
export const NIGHTLIFE_FLIRT_CHANCE = 0.45
// Türsteher im Club: ab diesem Style-Score kommst du rein
export const CLUB_MIN_STYLE_SCORE = 5
// Eintritt in den Club (gilt bis zum nächsten Tag)
export const CLUB_ENTRY_PRICE = 15
// Orte, an denen man auch außerhalb des Nachtlebens zufällig Leute trifft
export const RANDOM_CONTACT_CHANCE_PER_LOCATION = 0.08
// ---- PixGram: eigene Beiträge posten ----
export const PIXGRAM_POST_TYPES = [
    { key: "outfit", label: "👕 Outfit posten", styleFactor: 1.5, moodGain: 8 },
    {
        key: "auto",
        label: "🚗 Auto posten",
        styleFactor: 0.6,
        moodGain: 10,
        needsCar: true,
    },
    {
        key: "geld",
        label: "💸 Geld zeigen",
        styleFactor: 0.3,
        moodGain: 12,
        risky: true,
    },
    { key: "essen", label: "🍔 Essen posten", styleFactor: 0.4, moodGain: 5 },
    {
        key: "aussicht",
        label: "🌇 Aussicht posten",
        styleFactor: 0.5,
        moodGain: 7,
    },
]
// Wie viele Follower ein Post ungefähr bringt
export const PIXGRAM_FOLLOWER_BASE = 12
// Ab wie vielen Followern man Werbedeals bekommt
export const PIXGRAM_SPONSOR_THRESHOLD = 500
export const PIXGRAM_SPONSOR_PAY = 250
// Wie oft man posten kann (Spielminuten)
export const PIXGRAM_POST_COOLDOWN = 240
// Follower erhöhen die Chance auf Sparkly-Matches
export const PIXGRAM_MATCH_BONUS_PER_100 = 0.02

export const PIXGRAM_CAPTIONS = [
    "Guter Tag heute ☀️",
    "Neues Fit, wer geht mit?",
    "Chillen mit den Jungs 🙌",
    "Wieder mal die Nacht zum Tag gemacht 🌙",
    "Frühstück wie ein Champion 🍳",
]

export const SPARKLY_NAMES = [
    "Yasemin",
    "Deniz",
    "Aylin",
    "Kerem",
    "Luca",
    "Sofia",
    "Ivana",
    "Rafael",
]

export const NIGHT_MAX_DARKNESS = 0.72
export const NIGHT_COLOR = "10, 15, 45"

export const HUNGER_DECAY_PER_HOUR = 1
export const ENERGY_DECAY_PER_HOUR = 1

export const CIGARETTES_PRICE = 5
export const CIGARETTES_PER_PURCHASE = 5
export const SMOKE_ENERGY_BOOST = 5
export const SMOKE_HUNGER_DROP = 5
export const SMOKE_FILTER_DURATION_MS = 6000

export const SNACK_ITEMS = [
    {
        key: "chips",
        label: "Chips",
        emoji: "🍟",
        price: 2,
        hungerBoost: 20,
        energyBoost: 10,
        moodBoost: 3,
        category: "snack",
    },
    {
        key: "riegel",
        label: "Müsliriegel",
        emoji: "🍫",
        price: 1.5,
        hungerBoost: 15,
        energyBoost: 20,
        moodBoost: 2,
        category: "snack",
    },
    {
        key: "kekse",
        label: "Kekse",
        emoji: "🍪",
        price: 2.5,
        hungerBoost: 18,
        energyBoost: 12,
        moodBoost: 5,
        category: "snack",
    },
    {
        key: "nuesse",
        label: "Nüsse",
        emoji: "🥜",
        price: 3,
        hungerBoost: 20,
        energyBoost: 22,
        moodBoost: 2,
        category: "snack",
    },
    {
        key: "sandwich2go",
        label: "Sandwich to go",
        emoji: "🥪",
        price: 3.5,
        hungerBoost: 35,
        energyBoost: 18,
        moodBoost: 3,
        category: "snack",
    },
    {
        key: "energydrink",
        label: "Energy-Drink",
        emoji: "⚡",
        price: 2.5,
        hungerBoost: 0,
        energyBoost: 55,
        moodBoost: 4,
        category: "getraenk",
    },
    {
        key: "wasser",
        label: "Wasser",
        emoji: "💧",
        price: 1,
        hungerBoost: 5,
        energyBoost: 15,
        moodBoost: 0,
        category: "getraenk",
    },
    {
        key: "saft",
        label: "Orangensaft",
        emoji: "🧃",
        price: 2,
        hungerBoost: 10,
        energyBoost: 25,
        moodBoost: 3,
        category: "getraenk",
    },
    {
        key: "eistee",
        label: "Eistee",
        emoji: "🧋",
        price: 2.5,
        hungerBoost: 5,
        energyBoost: 28,
        moodBoost: 4,
        category: "getraenk",
    },
    {
        key: "comicheft",
        label: "Comic-Heft",
        emoji: "📖",
        price: 4,
        hungerBoost: 0,
        energyBoost: 0,
        moodBoost: 15,
        category: "sonstiges",
    },
    {
        key: "blumenstrauss",
        label: "Blumenstrauß",
        emoji: "🌹",
        price: 6,
        hungerBoost: 0,
        energyBoost: 0,
        moodBoost: 20,
        category: "sonstiges",
    },
]
export const RUBBELLOS_PRICE = 3
export const RUBBELLOS_WIN_CHANCE = 0.25

export const ALCOHOL_TYPES = [
    {
        key: "wodka",
        label: "Wodka-Dose",
        emoji: "🥤",
        price: 4,
        buzzMinutes: 40,
    },
    { key: "rum", label: "Rum-Dose", emoji: "🥤", price: 6, buzzMinutes: 55 },
    {
        key: "whiskey",
        label: "Whiskey-Dose",
        emoji: "🥤",
        price: 9,
        buzzMinutes: 70,
    },
    {
        key: "ebbelwoi",
        label: "Ebbelwoi (Bembel)",
        emoji: "🍏",
        price: 4,
        buzzMinutes: 45,
    },
]

export const JOINT_PIECE_AMOUNT = 1
export const JOINT_HIGH_MINUTES = 60

export const MAX_CARRY = 500

// -----------------------------------------------------
// DROGEN-SORTEN
// -----------------------------------------------------
export const DRUG_TYPES = ["weed", "hashish", "kokain"]
export const DRUG_INFO: Record<
    string,
    {
        label: string
        emoji: string
        sellRange: [number, number]
        buyRange: [number, number]
    }
> = {
    hashish: {
        label: "Piece",
        emoji: "🟤",
        sellRange: [5, 10],
        buyRange: [1.8, 3.0],
    },
    weed: {
        label: "Weed",
        emoji: "🌿",
        sellRange: [7, 12],
        buyRange: [3.3, 5.5],
    },
    kokain: {
        label: "Kokain",
        emoji: "❄️",
        sellRange: [60, 80],
        buyRange: [15, 25],
    },
}
export const CUSTOMER_DEAL_MIN_GRAMS = 3
// Orte, an denen Kunden sich mit dir treffen wollen (stadtweit)
// Treffpunkte: Straßen und Plätze sind rund um die Uhr zugänglich. Läden
// (mit Öffnungszeiten) kommen zusätzlich in Frage, werden beim Annehmen des
// Auftrags aber nur genommen, wenn sie gerade offen haben.
// Wie lange man Zeit hat, um zum vereinbarten Treffpunkt zu kommen
export const CUSTOMER_DEAL_TIME_MINUTES = 120

export const CUSTOMER_MEETING_SPOTS = [
    "park",
    "street",
    ...[
        "bockenheim",
        "bahnhofsviertel",
        "gallusviertel",
        "sachsenhausen",
    ].flatMap((d) => [`${d}_platz`, `${d}_ecke`, `${d}_hof`]),
]
// Läden, in denen man sich tagsüber (während der Öffnungszeiten) treffen kann
export const CUSTOMER_MEETING_SHOPS = [
    "kiosk",
    "supermarkt",
    "sandwich",
    "nordwestzentrum",
    "nwzug",
    "hallea",
    "halleb",
    "hallec",
]
// Verkauf in fremdem Gang-Gebiet: Chance, dass die dortige Gang dich abzieht
export const HOSTILE_SELL_ROBBERY_CHANCE = 0.55
export const CUSTOMER_DEAL_MAX_GRAMS = 100

export function generateCustomerDealGrams() {
    const raw = CUSTOMER_DEAL_MIN_GRAMS + -Math.log(Math.random()) * 12
    return Math.min(
        CUSTOMER_DEAL_MAX_GRAMS,
        Math.max(CUSTOMER_DEAL_MIN_GRAMS, Math.round(raw))
    )
}
export const SUPPLIER_MAX_GRAMS_PER_WEEK = 10000
export const DEALER_SALE_AMOUNT = 5

export function generateSellPrices() {
    const prices: Record<string, number> = {}
    for (const drug of DRUG_TYPES) {
        const [min, max] = DRUG_INFO[drug].sellRange
        prices[drug] = Math.round((min + Math.random() * (max - min)) * 10) / 10
    }
    return prices
}

export function generateBuyPrices() {
    const prices: Record<string, number> = {}
    for (const drug of DRUG_TYPES) {
        const [min, max] = DRUG_INFO[drug].buyRange
        prices[drug] = Math.round((min + Math.random() * (max - min)) * 10) / 10
    }
    return prices
}

export function emptyDrugRecord() {
    return { weed: 0, hashish: 0, kokain: 0 }
}

export const OUTSIDE_LOCATIONS = [
    "street",
    "park",
    "kiosk",
    "sandwich",
    "supplier",
    "amt",
    "supermarkt",
]
export const BASE_DANGER_CHANCE = 0.12
export const SUPPLIER_DANGER_BONUS = 0.35

export const COLLAPSE_TIME_SKIP_MINUTES = 3 * 60
export const COLLAPSE_RESTORE_HUNGER = 40
export const COLLAPSE_RESTORE_ENERGY = 40
export const COLLAPSE_HEALTH_PENALTY = 15
export const COLLAPSE_ROBBED_CHANCE = 0.4
export const COLLAPSE_SCENE_REAL_MS = 2500
export const DANGER_CHANCE_FLOOR = 0.05

export const SALES_PER_LEVEL = 8
export const MONEY_PER_SALE_PER_LEVEL = 2
export const DANGER_REDUCTION_PER_LEVEL = 0.02
export const FLEE_BASE_CHANCE = 0.5

export const IMPAIRMENT_CHANCE_PENALTY = 0.15

export const JEALOUSY_CHANCE = 0.2
export const JEALOUSY_MOOD_PENALTY = 20

export const CAR_TYPES = [
    {
        key: "kleinwagen",
        label: "Kleinwagen",
        emoji: "🚗",
        price: 2000,
        sellValue: 1200,
        image: "images/Cars/Photoroom_20260804_154236.png",
    },
    {
        key: "mittelklasse",
        label: "Mittelklassewagen",
        emoji: "🚙",
        price: 8000,
        sellValue: 5500,
        image: "images/Cars/Photoroom_20260804_154314.png",
    },
    {
        key: "luxuslimousine",
        label: "Luxuslimousine",
        emoji: "🚘",
        price: 45000,
        sellValue: 32000,
        image: "images/Cars/Photoroom_20260804_154445.png",
    },
]
export const CAR_THEFT_TAPS_NEEDED = 8
export const CAR_THEFT_DURATION_SECONDS = 6
export const CAR_STOLEN_STOP_CHANCE = 0.2
export const FLEE_CHANCE_PER_LEVEL = 0.03

export const WEAPON_TYPES = [
    {
        key: "messer",
        label: "Messer",
        emoji: "🔪",
        price: 100,
        rewardPerCatch: 20,
    },
    {
        key: "schlagring",
        label: "Schlagring",
        emoji: "🥊",
        price: 180,
        rewardPerCatch: 30,
    },
    {
        key: "pistole",
        label: "Pistole",
        emoji: "🔫",
        price: 300,
        rewardPerCatch: 45,
    },
]
export const MASK_PRICE = 50
export const ROBBERY_COOLDOWN_DAYS = 1
export const ROBBERY_GAME_DURATION_SECONDS = 12

export const HEAVY_SEVERITY_CARRYING_THRESHOLD = 30

export const WELFARE_AMOUNT = 300
export const WELFARE_COOLDOWN_DAYS = 7
export const APARTMENT_RENT_PRICE = 300
export const RENT_AMOUNT = 150
export const RENT_DUE_INTERVAL_DAYS = 7
export const RENT_GRACE_DAYS = 10

export const DEALER_HIRE_COST = 500

export const DEALER_HELP_COOLDOWN_MINUTES = 6 * 60
export const DEALER_HELP_SUCCESS_CHANCE = 0.6
export const DEALER_SALE_CHANCE_PER_HOUR = 0.65
export const DEALERS_PER_LEVEL = 2

export const DEALER_CHASE_CATCH_CHANCE_BASE = 0.4
export const DEALER_CHASE_CATCH_CHANCE_PER_LEVEL = 0.02
export const DEALER_BETRAYAL_WARE_STOLEN = 50
export const DEALER_BETRAYAL_CHANCE_ON_PENALTY = 0.4
export const DEALER_FIGHT_DURATION_SECONDS = 12
export const DEALER_FIGHT_TAPS_NEEDED = 7
export const DEALER_CHASE_WINDOW_MINUTES = 120
export const SUPPLY_DEALER_AMOUNTS = [10, 30]

export const WEEKDAY_NAMES = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
]

export function isClosedAtHour(
    currentHour: number,
    closedStart: number,
    closedEnd: number
) {
    if (closedStart < closedEnd) {
        return currentHour >= closedStart && currentHour < closedEnd
    }
    return currentHour >= closedStart || currentHour < closedEnd
}

export const KIOSK_CLOSED_START = 1
export const KIOSK_CLOSED_END = 8
export const SANDWICH_CLOSED_START = 22
export const SANDWICH_CLOSED_END = 10
export const SUPERMARKET_CLOSED_START = 23
export const SUPERMARKET_CLOSED_END = 7

export const MALL_OPEN_START = 9
export const MALL_OPEN_END = 20
export const MALL_HUB_LOCATIONS = [
    "nordwestzentrum",
    "hallea",
    "halleb",
    "hallec",
    "nwzug",
]

export const AMT_OPEN_START = 8
export const AMT_OPEN_END = 16

export const GERICHT_OPEN_START = 8
export const GERICHT_OPEN_END = 16

export const BREAKIN_DURATIONS_BY_ATTEMPT = [30, 20, 10]
export const BREAKIN_TARGET_INTERVAL_MS = 900
export const BREAKIN_REWARD_PER_CATCH = 20
export const BREAKIN_MAX_PER_WEEK = 3

export const BREAKIN_ENTRY_TAPS_NEEDED = 6
export const BREAKIN_ENTRY_DURATION_SECONDS = 5

// -----------------------------------------------------
// POLIZEI-VERFOLGUNG: organisches Straßen-Netz statt Raster
// -----------------------------------------------------
// -----------------------------------------------------
// POLIZEI-VERFOLGUNG: Straßen-Netz angelehnt an eine echte Stadtkarte
// -----------------------------------------------------
// -----------------------------------------------------
// POLIZEI-VERFOLGUNG: normales Straßenraster, Ghetto-Optik
// -----------------------------------------------------
export const CHASE_DURATION_SECONDS = 15
export const CHASE_GRID_SIZE = 6
export const CHASE_TICK_MS = 1000
export const CHASE_MAZE = [
    ".#.#.#",
    "......",
    "#.#.#.",
    "......",
    ".#.#.#",
    "......",
]
export const chaseIsStreet = (x: number, y: number) =>
    y >= 0 &&
    y < CHASE_MAZE.length &&
    x >= 0 &&
    x < CHASE_MAZE[y].length &&
    CHASE_MAZE[y][x] === "."

export const chaseBfsNextStep = (
    from: { x: number; y: number },
    to: { x: number; y: number }
): { x: number; y: number } => {
    const visited = new Set([`${from.x},${from.y}`])
    const queue: {
        x: number
        y: number
        first: { x: number; y: number } | null
    }[] = [{ x: from.x, y: from.y, first: null }]
    while (queue.length > 0) {
        const cur = queue.shift()!
        if (cur.x === to.x && cur.y === to.y) {
            return cur.first ?? from
        }
        const neighbors = [
            { x: cur.x + 1, y: cur.y },
            { x: cur.x - 1, y: cur.y },
            { x: cur.x, y: cur.y + 1 },
            { x: cur.x, y: cur.y - 1 },
        ]
        for (const n of neighbors) {
            const key = `${n.x},${n.y}`
            if (!chaseIsStreet(n.x, n.y) || visited.has(key)) continue
            visited.add(key)
            queue.push({ x: n.x, y: n.y, first: cur.first ?? n })
        }
    }
    return from
}

// Graffiti-Farbtupfer für die Häuserblöcke
export const CHASE_GRAFFITI_COLORS = [
    "#ff5a36",
    "#ffd23f",
    "#3fd6ff",
    "#ff3fa0",
    "#7dff3f",
]

export const SELL_GAME_DURATION_SECONDS = 4
export const SELL_GAME_TAPS_NEEDED = 5

export const UEBERFALL_REACT_SECONDS = 6

export const LAWYER_PRICE = 200

export const ESCORT_PRICE = 150
// Anzeigename für die Escort-Begleitung (keine echte Beziehung)
export const ESCORT_NAME = "Deine Begleitung"
export const ESCORT_MIN_WAIT_MINUTES = 60
export const ESCORT_MAX_WAIT_MINUTES = 120
export const ESCORT_VISIT_HOURS_SKIP = 3 * 60
export const ESCORT_IMAGE_REAL_MS = 7000
export const FREEDOM_CHANCE_NO_LAWYER = 0.3
export const FREEDOM_CHANCE_WITH_LAWYER = 0.6
export const JUDGE_MOOD_MODIFIER: Record<string, number> = {
    gut: 0.15,
    neutral: 0,
    schlecht: -0.15,
}
export const COURT_DEFENSE_TAPS_NEEDED = 12
export const COURT_DEFENSE_DURATION_SECONDS = 8
export const COURT_DEFENSE_MAX_BONUS = 0.2

export const JAIL_JOB_PAY = 15

export const SPORT_ENERGY_COST = 20
export const SPORT_HEALTH_GAIN = 10
export const SPORT_RESPECT_GAIN = 4

export const JAIL_PIECE_BUY_AMOUNT = 2
export const JAIL_PIECE_PRICE = 40
export const JAIL_MOONSHINE_PRICE = 15
// Schwarzmarkt im Knast: Preise pro Gramm bzw. pro Dose
export const JAIL_SELL_PRICE_MULTIPLIER = 2.5
export const JAIL_SELL_ALCOHOL_PRICE = 35
// Risiko, dabei erwischt zu werden
export const JAIL_SELL_CAUGHT_CHANCE = 0.25
// Wie viele Tage Aufschlag es kostet, wenn man erwischt wird
export const JAIL_EXTRA_DAYS_DEALING = 4
export const JAIL_EXTRA_DAYS_FIGHT = 3
export const JAIL_MOONSHINE_BUZZ_MINUTES = 50

export const JAIL_FIGHT_TAPS_NEEDED = 10
export const JAIL_FIGHT_DURATION_SECONDS = 6
export const JAIL_LIGHT_MINUTES = 3 * 24 * 60
export const JAIL_HEAVY_MINUTES = 7 * 24 * 60
export const JAIL_FINE_MINUTES = 1 * 24 * 60

export const STRAFZETTEL_DUE_DAYS = 2

export const JAIL_LOCATIONS = ["knast", "zelle", "hof", "kantine", "sportraum"]
export const JAIL_NIGHT_START = 19
export const JAIL_NIGHT_END = 7

export const STRAFZETTEL_FINE = 30
export const STRAFZETTEL_CHANCE_ON_CLEAN_STOP = 0.5
export const CAR_TICKET_CHANCE_PER_DAY = 0.15

export const FRIDGE_MAX = 100
export const EAT_FRIDGE_COST = 20

export const SUPERMARKET_OPTIONS = [
    { percent: 20, price: 15 },
    { percent: 40, price: 30 },
    { percent: 60, price: 45 },
    { percent: 80, price: 60 },
    { percent: 100, price: 75 },
]

export const MIRROR_COMMENTS_HIGH = [
    "😊 Du siehst top aus!",
    "😎 Nicht schlecht heute.",
]
export const MIRROR_COMMENTS_MID = ["😐 Geht so, ein bisschen müde vielleicht."]
export const MIRROR_COMMENTS_LOW = [
    "😩 Du siehst ziemlich fertig aus...",
    "🥱 Zeit für eine Pause.",
]
export const BRUSH_TEETH_MOOD_BOOST = 3

// ---- WebGo: mehr als nur Preise ----
export const WEBGO_SECTIONS = [
    { key: "preise", label: "📈 Marktpreise", emoji: "📈" },
    { key: "news", label: "📰 Stadtnachrichten", emoji: "📰" },
    { key: "kleinanzeigen", label: "🏷 Kleinanzeigen", emoji: "🏷" },
    { key: "anzeigen", label: "🌹 Anzeigen", emoji: "🌹" },
    { key: "wetter", label: "🌤 Wetter", emoji: "🌤" },
]
// Nachrichten, die im Netz auftauchen (beeinflussen teils das Spiel)
export const WEBGO_NEWS = [
    { text: "🚔 Großrazzia im Bahnhofsviertel angekündigt", effect: "heat" },
    { text: "📉 Preise auf dem Schwarzmarkt fallen", effect: "priceDown" },
    { text: "📈 Nachschub knapp – Preise ziehen an", effect: "priceUp" },
    { text: "👮 Polizei verstärkt Streifen in der Innenstadt", effect: "heat" },
    { text: "🎉 Großes Straßenfest am Wochenende", effect: "mood" },
    {
        text: "🏗 Neue Baustelle legt halbe Mainzer Landstraße lahm",
        effect: null,
    },
    { text: "⚽ Eintracht gewinnt – die ganze Stadt feiert", effect: "mood" },
]
// Kleinanzeigen: gebrauchte Sachen günstig kaufen
export const WEBGO_CLASSIFIEDS = [
    { key: "handy", label: "📱 Gebrauchtes Handy", price: 80, mood: 8 },
    { key: "kette2", label: "💎 Kette (gebraucht)", price: 120, style: 2 },
    { key: "jacke", label: "🧥 Markenjacke", price: 90, style: 1 },
    { key: "konsole2", label: "🎮 Alte Konsole", price: 60, mood: 10 },
]
// Wie oft die Anzeigen wechseln (Spieltage)
export const WEBGO_REFRESH_DAYS = 2

export const WEATHER_TYPES = [
    { key: "sonnig", label: "☀️ Sonnig", moodEffect: 8 },
    { key: "bewoelkt", label: "☁️ Bewölkt", moodEffect: 0 },
    { key: "regen", label: "🌧 Regnerisch", moodEffect: -8 },
]

export const SCENES: Record<string, React.ComponentType> = {
    flur: Flur,
    wohnzimmer: Wohnzimmer,
    bedroom: Schlafzimmer,
    kitchen: Kitchen,
    bathroom: Bathroom,
    balcony: Balcony,
    street: Street,
    bus: BusDay,
    auto: CarDay,
    garage: Garage,
    freunde_chillen: FreundeChillen,
    flughafen: Flughafen,
    miami_flughafen: MiamiFlughafen,
    miami_strasse: MiamiStrasse,
    miami_hotel: MiamiHotel,
    miami_zimmer: MiamiHotel,
    miami_zimmer_schlaf: MiamiHotel,
    miami_zimmer_balkon: MiamiHotel,
    miami_strand: MiamiStrand,
    miami_party: MiamiParty,
    miami_laden: MiamiLaden,
    park: Park,
    kiosk: Kiosk,
    sandwich: Sandwich,
    supplier: Supplier,
    amt: Amt,
    supermarkt: Supermarkt,
    gericht: Gericht,
    knast: Knast,
    zelle: Zelle,
    hof: Hof,
    kantine: Kantine,
    sportraum: Sportraum,
    nordwestzentrum: Nordwestzentrum,
    hallea: HalleA,
    halleb: HalleB,
    hallec: HalleC,
    nwzug: Untergeschoss,
    hallea_budget: HalleABudget,
    hallea_mid: HalleAMid,
    hallea_premium: HalleAPremium,
    halleb_schmuck: HalleBSchmuck,
    halleb_parfuem: HalleBParfuem,
    hallec_tv: HalleCTv,
    hallec_konsole: HalleCKonsole,
    hallec_kuehl: HalleCKuehl,
    nwzug_doener: NwzugDoener,
    nwzug_burger: NwzugBurger,
    nwzug_sushi: NwzugSushi,
    revier: Revier,
    revierzelle: RevierNacht,
}

export const CLOSED_SCENES: Partial<Record<string, React.ComponentType>> = {
    kiosk: KioskClosed,
    sandwich: SandwichClosed,
    supermarkt: SupermarktClosed,
    nordwestzentrum: NordwestzentrumClosed,
    hallea: HalleAClosed,
    halleb: HalleBClosed,
    hallec: HalleCClosed,
    nwzug: UntergeschossClosed,
    hallea_budget: HalleABudgetClosed,
    hallea_mid: HalleAMidClosed,
    hallea_premium: HalleAPremiumClosed,
    halleb_schmuck: HalleBSchmuckClosed,
    halleb_parfuem: HalleBParfuemClosed,
    hallec_tv: HalleCTvClosed,
    hallec_konsole: HalleCKonsoleClosed,
    hallec_kuehl: HalleCKuehlClosed,
    nwzug_doener: NwzugDoenerClosed,
    nwzug_burger: NwzugBurgerClosed,
    nwzug_sushi: NwzugSushiClosed,
}

export const NIGHT_SCENES: Partial<Record<string, React.ComponentType>> = {
    wohnzimmer: WohnzimmerNacht,
    flur: FlurNacht,
    bedroom: SchlafzimmerNacht,
    kitchen: KitchenNacht,
    bathroom: BathroomNacht,
    balcony: BalconyNacht,
    street: StreetNacht,
    bus: BusNight,
    miami_strasse: MiamiStrasseNacht,
    miami_hotel: MiamiHotelNacht,
    miami_zimmer: MiamiHotelNacht,
    miami_zimmer_schlaf: MiamiHotelNacht,
    miami_zimmer_balkon: MiamiHotelNacht,
    miami_strand: MiamiStrandNacht,
    miami_party: MiamiPartyNacht,
    miami_laden: MiamiLadenNacht,
    auto: CarNight,
    park: ParkNacht,
    supplier: SupplierNacht,
    amt: AmtNacht,
    zelle: ZelleNacht,
    nordwestzentrum: NordwestzentrumClosed,
    hallea: HalleAClosed,
    halleb: HalleBClosed,
    hallec: HalleCClosed,
    nwzug: UntergeschossClosed,
}

export const NIGHT_IMAGE_FADE_IN_START = 19 * 60 + 30
export const NIGHT_IMAGE_SWAP_TO_NIGHT = 20 * 60
export const NIGHT_IMAGE_FADE_IN_END = 20 * 60 + 30
export const NIGHT_IMAGE_FADE_OUT_START = 5 * 60 + 30
export const NIGHT_IMAGE_SWAP_TO_DAY = 6 * 60
export const NIGHT_IMAGE_FADE_OUT_END = 6 * 60 + 30

export function getNightCurtainOpacity(minutesOfDay: number) {
    if (
        minutesOfDay >= NIGHT_IMAGE_FADE_IN_START &&
        minutesOfDay < NIGHT_IMAGE_SWAP_TO_NIGHT
    ) {
        return (
            (minutesOfDay - NIGHT_IMAGE_FADE_IN_START) /
            (NIGHT_IMAGE_SWAP_TO_NIGHT - NIGHT_IMAGE_FADE_IN_START)
        )
    }
    if (
        minutesOfDay >= NIGHT_IMAGE_SWAP_TO_NIGHT &&
        minutesOfDay < NIGHT_IMAGE_FADE_IN_END
    ) {
        return (
            1 -
            (minutesOfDay - NIGHT_IMAGE_SWAP_TO_NIGHT) /
                (NIGHT_IMAGE_FADE_IN_END - NIGHT_IMAGE_SWAP_TO_NIGHT)
        )
    }
    if (
        minutesOfDay >= NIGHT_IMAGE_FADE_OUT_START &&
        minutesOfDay < NIGHT_IMAGE_SWAP_TO_DAY
    ) {
        return (
            (minutesOfDay - NIGHT_IMAGE_FADE_OUT_START) /
            (NIGHT_IMAGE_SWAP_TO_DAY - NIGHT_IMAGE_FADE_OUT_START)
        )
    }
    if (
        minutesOfDay >= NIGHT_IMAGE_SWAP_TO_DAY &&
        minutesOfDay < NIGHT_IMAGE_FADE_OUT_END
    ) {
        return (
            1 -
            (minutesOfDay - NIGHT_IMAGE_SWAP_TO_DAY) /
                (NIGHT_IMAGE_FADE_OUT_END - NIGHT_IMAGE_SWAP_TO_DAY)
        )
    }
    return 0
}

export function shouldShowNightImage(minutesOfDay: number) {
    return (
        minutesOfDay >= NIGHT_IMAGE_SWAP_TO_NIGHT ||
        minutesOfDay < NIGHT_IMAGE_SWAP_TO_DAY
    )
}

export const LOCATION_NAMES: Record<string, string> = {
    flur: "Flur",
    garage: "Garage",
    freunde_chillen: "Mit den Jungs & Mädels chillen",
    flughafen: "Flughafen",
    miami_flughafen: "Miami Airport",
    miami_strasse: "Miami – Straße",
    miami_hotel: "Miami – Hotel",
    miami_zimmer: "Hotelzimmer – Wohnraum",
    miami_zimmer_schlaf: "Hotelzimmer – Schlafzimmer",
    miami_zimmer_balkon: "Hotelzimmer – Balkon",
    miami_rooftop: "Rooftop-Bar",
    miami_livemusic: "Live-Musik-Bar",
    miami_club: "Club Ocean Drive",
    miami_beachparty: "Beach-Party",
    miami_restaurant: "Restaurant",
    miami_bar: "Cocktail-Bar",
    miami_meer: "Im Meer",
    miami_liegestuhl: "Am Strand",
    miami_strand: "Miami Beach",
    miami_party: "Ocean Drive (Partymeile)",
    miami_laden: "Miami – Einkaufsstraße",
    wohnzimmer: "Wohnzimmer",
    bedroom: "Schlafzimmer",
    kitchen: "Küche",
    bathroom: "Badezimmer",
    balcony: "Balkon",
    street: "Straße",
    bus: "Bus",
    auto: "Auto",
    park: "Park",
    kiosk: "Kiosk",
    sandwich: "Sandwichladen",
    supplier: "Lieferant",
    amt: "Amt",
    supermarkt: "Supermarkt",
    gericht: "Gericht",
    knast: "Knast",
    zelle: "Zelle",
    hof: "Hof",
    kantine: "Kantine",
    sportraum: "Sportraum",
    nordwestzentrum: "Nordwestzentrum",
    hallea: "Halle A",
    halleb: "Halle B",
    hallec: "Halle C",
    nwzug: "Untergeschoss",
    hallea_budget: "Fetzenkiste",
    hallea_mid: "Stilwerk",
    hallea_premium: "Boulevard Couture",
    halleb_schmuck: "Diamantino",
    halleb_parfuem: "Duftbar",
    hallec_tv: "ElectroWelt",
    hallec_konsole: "GameZone",
    hallec_kuehl: "KüchenKing",
    nwzug_doener: "Ali's Döner Palast",
    nwzug_burger: "Burger Boss",
    nwzug_sushi: "Sushi Sensei",
    revier: "Polizeirevier",
    revierzelle: "Ausnüchterungszelle",
    bockenheim_platz: "Bockenheimer Warte",
    bockenheim_ecke: "Leipziger Straße",
    bockenheim_hof: "Kirchplatz Bockenheim",
    bahnhofsviertel_platz: "Kaiserstraße",
    bahnhofsviertel_ecke: "Münchener Straße",
    bahnhofsviertel_hof: "Elbestraße",
    gallusviertel_platz: "Frankenallee",
    gallusviertel_ecke: "Mainzer Landstraße",
    gallusviertel_hof: "Gustavsburgplatz",
    sachsenhausen_platz: "Schweizer Straße",
    sachsenhausen_ecke: "Affentorplatz",
    sachsenhausen_hof: "Alt-Sachsenhausen (Textorstraße)",
}

// -----------------------------------------------------
// 10 STATUS-MENÜ (alle Werte, wird über einen Button geöffnet)
// -----------------------------------------------------
export const STATUS_KEYS = [
    "hunger",
    "energy",
    "mood",
    "apartment",
    "dealers",
    "level",
    "heat",
    "strengthLevel",
    "charismaLevel",
    "styleLevel",
    "territories",
]

export const STATUS_CATEGORY_INFO: Record<
    string,
    { label: string; emoji: string }
> = {
    gesundheit: { label: "Gesundheit", emoji: "❤️" },
    kriminell: { label: "Untergrund", emoji: "🕶️" },
    zuhause: { label: "Zuhause", emoji: "🏠" },
}
export const STATUS_CATEGORY_ORDER = ["gesundheit", "kriminell", "zuhause"]
export const STATUS_KEY_CATEGORY: Record<string, string> = {
    hunger: "gesundheit",
    energy: "gesundheit",
    mood: "gesundheit",
    strengthLevel: "gesundheit",
    level: "kriminell",
    heat: "kriminell",
    dealers: "kriminell",
    charismaLevel: "kriminell",
    styleLevel: "kriminell",
    territories: "kriminell",
    apartment: "zuhause",
    moneySafe: "zuhause",
    homeStash: "zuhause",
    fridgeStock: "zuhause",
}

export const HOME_STATUS_KEYS = ["moneySafe", "homeStash", "fridgeStock"]
export const HOME_LOCATIONS = [
    "flur",
    "wohnzimmer",
    "bedroom",
    "kitchen",
    "bathroom",
    "balcony",
]

export const INVENTORY_KEYS = [
    "money",
    "carrying",
    "stolenGoods",
    "cigarettes",
    "snacks",
    "alcohol",
    "weapon",
    "mask",
]

export const STAT_LABEL: Record<string, string> = {
    money: "Geld dabei",
    moneySafe: "Geld im Safe",
    hunger: "Hunger",
    energy: "Energie",
    mood: "Stimmung",
    homeStash: "Heim-Vorrat",
    carrying: "Ware dabei",
    cigarettes: "Zigaretten",
    fridgeStock: "Kühlschrank",
    weapon: "Waffe",
    mask: "Maske",
    apartment: "Wohnung",
    dealers: "Dealer",
    level: "Level",
    heat: "Polizei-Hitze",
    strengthLevel: "Stärke-Level",
    charismaLevel: "Charisma-Level",
    styleLevel: "Style-Level",
    territories: "Kontrollierte Reviere",
}

export const STAT_ICON: Record<string, string> = {
    money: "💰",
    energy: "⚡",
    hunger: "🍔",
    mood: "😊",
    homeStash: "📦",
    carrying: "🎒",
    cigarettes: "🚬",
    fridgeStock: "🧊",
    weapon: "🔫",
    mask: "🎭",
    apartment: "🏠",
    dealers: "🤝",
    level: "🎖",
    moneySafe: "🏦",
    heat: "🚨",
    strengthLevel: "💪",
    charismaLevel: "😎",
    styleLevel: "✨",
    territories: "🗺",
}

export const LOW_HUNGER_WARNING = 20
export const LOW_HUNGER_RESET = 40
export const LOW_ENERGY_WARNING = 20
export const LOW_ENERGY_RESET = 40
export const HIGH_HEAT_WARNING = 4
export const HIGH_HEAT_RESET = 2

export const DEALER_STASH_LOW_WARNING = 20
export const DEALER_STASH_LOW_RESET = 50

// -----------------------------------------------------
// KLAMOTTEN / STYLE-SYSTEM
// -----------------------------------------------------
export const CHARACTER_IMAGE_BASE =
    "images/character/"

// Um ein neues Outfit hinzuzufügen: einfach ein Objekt in die passende
// Kategorie weiter unten einfügen. Felder-Erklärung:
//   id             – eindeutiger Schlüssel, wird intern zum Referenzieren benutzt
//   name           – Anzeigename im Spiel
//   price          – Preis in €
//   styleValue     – wie viele Style-Punkte es dem Charakter gibt
//   image          – Dateiname im character/-Ordner (ganzer Körper, im GitHub-Repo)
//   tier           – NUR bei normalen Outfits: "basic" | "mid" | "premium"
//                    (bestimmt, in welchem Klamottenladen es im Spiel auftaucht)
//   season         – NUR bei normalen Outfits: "standard" | "sommer" | "zuhause" | "herbst" | "winter"
//                    (bestimmt, unter welcher Jahreszeiten-Auswahl es auftaucht)
//   requiresOutfit – NUR bei Uhren/Accessoires: id des Outfits, zu dem es gehört
//   shopImage      – NUR bei Uhren/Accessoires: Nahaufnahme-Bild für den Laden
export type OutfitEntry = {
    id: string
    name: string
    price: number
    styleValue: number
    image: string
    requiresOutfit?: string
    shopImage?: string
    tier?: string
    season?: "standard" | "sommer" | "zuhause" | "herbst" | "winter"
}

export const OUTFIT_SEASON_INFO: Record<
    string,
    { label: string; emoji: string }
> = {
    standard: { label: "Standard", emoji: "👕" },
    sommer: { label: "Sommer", emoji: "☀️" },
    zuhause: { label: "Zuhause", emoji: "🏠" },
    herbst: { label: "Herbst", emoji: "🍂" },
    winter: { label: "Winter", emoji: "❄️" },
}
export const OUTFIT_SEASON_ORDER = [
    "standard",
    "sommer",
    "zuhause",
    "herbst",
    "winter",
]

// === GRUNDAUSSTATTUNG (immer im Besitz, kostenlos, kein Laden) ===
export const OUTFITS_BASIS: OutfitEntry[] = [
    {
        id: "outfit_unterwaesche",
        name: "Nur Unterwäsche",
        price: 0,
        styleValue: 0,
        image: "outfit_unterwaesche.PNG",
        season: "standard",
    },
]

// === BUDGET-TIER (günstige Klamotten – Halle A) ===
export const OUTFITS_BUDGET: OutfitEntry[] = [
    {
        id: "outfit_budget",
        name: "Budget-Outfit",
        price: 150,
        styleValue: 0,
        image: "outfit_budget.PNG",
        tier: "basic",
        season: "standard",
    },
    {
        id: "outfit_budget_uhr",
        name: "Budget-Outfit mit Uhr",
        price: 80,
        styleValue: 1,
        image: "outfit_budget_uhr.PNG",
        requiresOutfit: "outfit_budget",
        shopImage: "uhr_budget_closeup.PNG",
    },
    // Sommer
    {
        id: "outfit_budget_sommer_1",
        name: "Budget Sommer-Outfit 1",
        price: 130,
        styleValue: 0,
        image: "outfit_budget_sommer_1.PNG",
        tier: "basic",
        season: "sommer",
    },
    {
        id: "outfit_budget_sommer_2",
        name: "Budget Sommer-Outfit 2",
        price: 140,
        styleValue: 0,
        image: "outfit_budget_sommer_2.PNG",
        tier: "basic",
        season: "sommer",
    },
    {
        id: "outfit_budget_sommer_3",
        name: "Budget Sommer-Outfit 3",
        price: 150,
        styleValue: 1,
        image: "outfit_budget_sommer_3.PNG",
        tier: "basic",
        season: "sommer",
    },
    // Zuhause
    {
        id: "outfit_budget_zuhause_1",
        name: "Budget Zuhause-Outfit 1",
        price: 90,
        styleValue: 0,
        image: "outfit_budget_zuhause_1.PNG",
        tier: "basic",
        season: "zuhause",
    },
    {
        id: "outfit_budget_zuhause_2",
        name: "Budget Zuhause-Outfit 2",
        price: 100,
        styleValue: 0,
        image: "outfit_budget_zuhause_2.PNG",
        tier: "basic",
        season: "zuhause",
    },
    {
        id: "outfit_budget_zuhause_3",
        name: "Budget Zuhause-Outfit 3",
        price: 110,
        styleValue: 0,
        image: "outfit_budget_zuhause_3.PNG",
        tier: "basic",
        season: "zuhause",
    },
    // Herbst
    {
        id: "outfit_budget_herbst_1",
        name: "Budget Herbst-Outfit 1",
        price: 160,
        styleValue: 1,
        image: "outfit_budget_herbst_1.PNG",
        tier: "basic",
        season: "herbst",
    },
    {
        id: "outfit_budget_herbst_2",
        name: "Budget Herbst-Outfit 2",
        price: 170,
        styleValue: 1,
        image: "outfit_budget_herbst_2.PNG",
        tier: "basic",
        season: "herbst",
    },
    {
        id: "outfit_budget_herbst_3",
        name: "Budget Herbst-Outfit 3",
        price: 180,
        styleValue: 1,
        image: "outfit_budget_herbst_3.PNG",
        tier: "basic",
        season: "herbst",
    },
    // Winter
    {
        id: "outfit_budget_winter_1",
        name: "Budget Winter-Outfit 1",
        price: 190,
        styleValue: 1,
        image: "outfit_budget_winter_1.PNG",
        tier: "basic",
        season: "winter",
    },
    {
        id: "outfit_budget_winter_2",
        name: "Budget Winter-Outfit 2",
        price: 200,
        styleValue: 1,
        image: "outfit_budget_winter_2.PNG",
        tier: "basic",
        season: "winter",
    },
    {
        id: "outfit_budget_winter_3",
        name: "Budget Winter-Outfit 3",
        price: 210,
        styleValue: 2,
        image: "outfit_budget_winter_3.PNG",
        tier: "basic",
        season: "winter",
    },
]

// === MITTEL-TIER (mittlere Klamotten – Halle A) ===
export const OUTFITS_MITTEL: OutfitEntry[] = [
    {
        id: "outfit_mittel",
        name: "Mittel-Outfit",
        price: 2500,
        styleValue: 4,
        image: "outfit_mittel.PNG",
        tier: "mid",
        season: "standard",
    },
    {
        id: "outfit_mittel_uhr",
        name: "Mittel-Outfit mit Uhr",
        price: 600,
        styleValue: 7,
        image: "outfit_mittel_uhr.PNG",
        requiresOutfit: "outfit_mittel",
        shopImage: "uhr_mittel_closeup.PNG",
    },
    {
        id: "outfit_mittel_herbst",
        name: "Mittel-Herbst-Outfit",
        price: 2800,
        styleValue: 5,
        image: "outfit_mittel_herbst.PNG",
        tier: "mid",
        season: "herbst",
    },
    // Sommer
    {
        id: "outfit_mittel_sommer_1",
        name: "Mittel Sommer-Outfit 1",
        price: 2300,
        styleValue: 4,
        image: "outfit_mittel_sommer_1.PNG",
        tier: "mid",
        season: "sommer",
    },
    {
        id: "outfit_mittel_sommer_2",
        name: "Mittel Sommer-Outfit 2",
        price: 2400,
        styleValue: 4,
        image: "outfit_mittel_sommer_2.PNG",
        tier: "mid",
        season: "sommer",
    },
    {
        id: "outfit_mittel_sommer_3",
        name: "Mittel Sommer-Outfit 3",
        price: 2500,
        styleValue: 5,
        image: "outfit_mittel_sommer_3.PNG",
        tier: "mid",
        season: "sommer",
    },
    // Zuhause
    {
        id: "outfit_mittel_zuhause_1",
        name: "Mittel Zuhause-Outfit 1",
        price: 1800,
        styleValue: 3,
        image: "outfit_mittel_zuhause_1.PNG",
        tier: "mid",
        season: "zuhause",
    },
    {
        id: "outfit_mittel_zuhause_2",
        name: "Mittel Zuhause-Outfit 2",
        price: 1900,
        styleValue: 3,
        image: "outfit_mittel_zuhause_2.PNG",
        tier: "mid",
        season: "zuhause",
    },
    {
        id: "outfit_mittel_zuhause_3",
        name: "Mittel Zuhause-Outfit 3",
        price: 2000,
        styleValue: 3,
        image: "outfit_mittel_zuhause_3.PNG",
        tier: "mid",
        season: "zuhause",
    },
    // Herbst (zusätzlich zu outfit_mittel_herbst)
    {
        id: "outfit_mittel_herbst_1",
        name: "Mittel Herbst-Outfit 1",
        price: 2700,
        styleValue: 5,
        image: "outfit_mittel_herbst_1.PNG",
        tier: "mid",
        season: "herbst",
    },
    {
        id: "outfit_mittel_herbst_2",
        name: "Mittel Herbst-Outfit 2",
        price: 2800,
        styleValue: 5,
        image: "outfit_mittel_herbst_2.PNG",
        tier: "mid",
        season: "herbst",
    },
    {
        id: "outfit_mittel_herbst_3",
        name: "Mittel Herbst-Outfit 3",
        price: 2900,
        styleValue: 5,
        image: "outfit_mittel_herbst_3.PNG",
        tier: "mid",
        season: "herbst",
    },
    // Winter
    {
        id: "outfit_mittel_winter_1",
        name: "Mittel Winter-Outfit 1",
        price: 2900,
        styleValue: 5,
        image: "outfit_mittel_winter_1.PNG",
        tier: "mid",
        season: "winter",
    },
    {
        id: "outfit_mittel_winter_2",
        name: "Mittel Winter-Outfit 2",
        price: 3000,
        styleValue: 6,
        image: "outfit_mittel_winter_2.PNG",
        tier: "mid",
        season: "winter",
    },
    {
        id: "outfit_mittel_winter_3",
        name: "Mittel Winter-Outfit 3",
        price: 3100,
        styleValue: 6,
        image: "outfit_mittel_winter_3.PNG",
        tier: "mid",
        season: "winter",
    },
]

// === LUXUS-TIER (edle Klamotten – Halle A) ===
export const OUTFITS_LUXUS: OutfitEntry[] = [
    {
        id: "outfit_luxus",
        name: "Luxus-Outfit",
        price: 7500,
        styleValue: 12,
        image: "outfit_luxus.PNG",
        tier: "premium",
        season: "standard",
    },
    {
        id: "outfit_luxus_uhr",
        name: "Luxus-Outfit mit Uhr",
        price: 12000,
        styleValue: 18,
        image: "outfit_luxus_uhr.PNG",
        requiresOutfit: "outfit_luxus",
        shopImage: "uhr_luxus_closeup.PNG",
    },
    {
        id: "outfit_luxus_winter",
        name: "Luxus-Winter-Outfit",
        price: 8200,
        styleValue: 13,
        image: "outfit_luxus_winter.PNG",
        tier: "premium",
        season: "winter",
    },
    // Sommer
    {
        id: "outfit_luxus_sommer_1",
        name: "Luxus Sommer-Outfit 1",
        price: 7200,
        styleValue: 12,
        image: "outfit_luxus_sommer_1.PNG",
        tier: "premium",
        season: "sommer",
    },
    {
        id: "outfit_luxus_sommer_2",
        name: "Luxus Sommer-Outfit 2",
        price: 7400,
        styleValue: 12,
        image: "outfit_luxus_sommer_2.PNG",
        tier: "premium",
        season: "sommer",
    },
    {
        id: "outfit_luxus_sommer_3",
        name: "Luxus Sommer-Outfit 3",
        price: 7600,
        styleValue: 13,
        image: "outfit_luxus_sommer_3.PNG",
        tier: "premium",
        season: "sommer",
    },
    // Zuhause
    {
        id: "outfit_luxus_zuhause_1",
        name: "Luxus Zuhause-Outfit 1",
        price: 6000,
        styleValue: 10,
        image: "outfit_luxus_zuhause_1.PNG",
        tier: "premium",
        season: "zuhause",
    },
    {
        id: "outfit_luxus_zuhause_2",
        name: "Luxus Zuhause-Outfit 2",
        price: 6200,
        styleValue: 10,
        image: "outfit_luxus_zuhause_2.PNG",
        tier: "premium",
        season: "zuhause",
    },
    {
        id: "outfit_luxus_zuhause_3",
        name: "Luxus Zuhause-Outfit 3",
        price: 6400,
        styleValue: 11,
        image: "outfit_luxus_zuhause_3.PNG",
        tier: "premium",
        season: "zuhause",
    },
    // Herbst
    {
        id: "outfit_luxus_herbst_1",
        name: "Luxus Herbst-Outfit 1",
        price: 8000,
        styleValue: 13,
        image: "outfit_luxus_herbst_1.PNG",
        tier: "premium",
        season: "herbst",
    },
    {
        id: "outfit_luxus_herbst_2",
        name: "Luxus Herbst-Outfit 2",
        price: 8200,
        styleValue: 13,
        image: "outfit_luxus_herbst_2.PNG",
        tier: "premium",
        season: "herbst",
    },
    {
        id: "outfit_luxus_herbst_3",
        name: "Luxus Herbst-Outfit 3",
        price: 8400,
        styleValue: 14,
        image: "outfit_luxus_herbst_3.PNG",
        tier: "premium",
        season: "herbst",
    },
    // Winter (zusätzlich zu outfit_luxus_winter)
    {
        id: "outfit_luxus_winter_1",
        name: "Luxus Winter-Outfit 1",
        price: 8600,
        styleValue: 14,
        image: "outfit_luxus_winter_1.PNG",
        tier: "premium",
        season: "winter",
    },
    {
        id: "outfit_luxus_winter_2",
        name: "Luxus Winter-Outfit 2",
        price: 8800,
        styleValue: 14,
        image: "outfit_luxus_winter_2.PNG",
        tier: "premium",
        season: "winter",
    },
    {
        id: "outfit_luxus_winter_3",
        name: "Luxus Winter-Outfit 3",
        price: 9000,
        styleValue: 15,
        image: "outfit_luxus_winter_3.PNG",
        tier: "premium",
        season: "winter",
    },
]

// Neue Kategorie? Einfach ein eigenes OUTFITS_XYZ-Array wie oben anlegen
// und hier mit ...OUTFITS_XYZ ergänzen.
export const OUTFITS: OutfitEntry[] = [
    ...OUTFITS_BASIS,
    ...OUTFITS_BUDGET,
    ...OUTFITS_MITTEL,
    ...OUTFITS_LUXUS,
]

export const STYLE_SCORE_PER_LEVEL = 3

export const COMPLIMENT_CHANCE_PER_STYLE_POINT = 0.015
export const COMPLIMENT_MOOD_BONUS = 8

// -----------------------------------------------------
// LEVEL-SYSTEME: Stärke, Charisma, Style
// -----------------------------------------------------
// Stärke: steigt durch Sport & gewonnene Kämpfe. Wirkt sich auf
// Tragekapazität, Fluchtchance und Dealer-Jagd-Erfolg aus.
export const STRENGTH_XP_PER_LEVEL = 100
export const STRENGTH_XP_SPORT = 15
export const STRENGTH_XP_JAIL_SPORT = 10
export const STRENGTH_XP_FIGHT_WIN = 20
export const STRENGTH_CARRY_BONUS_PER_LEVEL = 20
export const STRENGTH_FLEE_BONUS_PER_LEVEL = 0.02
export const STRENGTH_CHASE_BONUS_PER_LEVEL = 0.015

// Charisma: steigt durch soziale Aktionen mit gutem Ausgang. Wirkt sich
// auf Verkaufspreise, Geldgeschenke und Gerichtsverhandlungen aus.
export const CHARISMA_XP_PER_LEVEL = 100
export const CHARISMA_XP_CHAT = 5
export const CHARISMA_XP_MEET = 10
export const CHARISMA_XP_GROUP = 10
export const CHARISMA_XP_DATE = 15
export const CHARISMA_XP_LIKE = 2
export const CHARISMA_SELL_BONUS_PER_LEVEL = 0.02
export const CHARISMA_GIFT_CHANCE_BONUS_PER_LEVEL = 0.015
export const CHARISMA_COURT_BONUS_PER_LEVEL = 0.01

// Style: nutzt den bereits vorhandenen styleScore (aus Outfits/Kette/
// Parfüm). Wirkt sich auf Rabatte in Läden aus.
export const STYLE_DISCOUNT_PER_LEVEL = 0.02
export const STYLE_DISCOUNT_MAX = 0.2

// -----------------------------------------------------
// GANG-GEBIETE: Frankfurter Stadtteile, die man sich erkämpfen kann
// -----------------------------------------------------
export const DISTRICTS: {
    id: string
    name: string
    gangName: string
    color: string
    gangStrength: number // bestimmt Taps im Kampf-Minigame
    incomePerHour: number // Einnahmen, wenn du es kontrollierst
    isHome?: boolean // Heimat-Kiez: gehört dir von Anfang an, kein Angriff nötig
    mapX: number // Position als Pin auf dem RMV-Schnellbahnplan (Prozent)
    mapY: number
}[] = [
    {
        id: "nordweststadt",
        name: "Nordweststadt",
        gangName: "Dein Kiez",
        color: "#3ddc72",
        gangStrength: 0,
        incomePerHour: 15,
        isHome: true,
        mapX: 43,
        mapY: 29,
    },
    {
        id: "bockenheim",
        name: "Bockenheim",
        gangName: "Die Falken",
        color: "#9b5de5",
        gangStrength: 11,
        incomePerHour: 20,
        mapX: 52,
        mapY: 41,
    },
    {
        id: "bahnhofsviertel",
        name: "Bahnhofsviertel",
        gangName: "Die Schatten",
        color: "#ff5fa2",
        gangStrength: 15,
        incomePerHour: 30,
        mapX: 60,
        mapY: 49,
    },
    {
        id: "gallusviertel",
        name: "Gallusviertel",
        gangName: "Westblock",
        color: "#4d8fff",
        gangStrength: 13,
        incomePerHour: 24,
        mapX: 40,
        mapY: 54,
    },
    {
        id: "sachsenhausen",
        name: "Sachsenhausen",
        gangName: "Goldene Hand",
        color: "#ffd23f",
        gangStrength: 18,
        incomePerHour: 35,
        mapX: 64,
        mapY: 61,
    },
]
// Hintergrundbild der Stadtkarte – lade eine Version deines RMV-Plans
// OHNE Logo/Branding hoch, dann hier den Dateinamen eintragen
export const STADTKARTE_IMAGE_URL =
    "images/stadtkarte.PNG"
export const DISTRICT_FIGHT_DURATION_SECONDS = 20
export const DISTRICT_RAID_CHANCE_PER_DAY = 0.12
export const DISTRICT_MIN_DEALERS_REQUIRED = 3
export const DISTRICT_ARREST_ON_FAIL_CHANCE = 0.4
export const DISTRICT_CONQUER_RESPECT = 5
export const DISTRICT_DEFEND_RESPECT = 2
export const RAID_DEFENSE_DURATION_SECONDS = 18
export const RAID_DEFENSE_TAPS_NEEDED = 9
export const TERRITORY_FIGHT_TARGET_INTERVAL_MS = 450
// Fremde Dealer in Gang-Gebieten überfallen (und deren Gegenangriffe)
export const DEALER_ROBBERY_DURATION_SECONDS = 18
export const DEALER_ROBBERY_TAPS_NEEDED = 11
export const DEALER_ROBBERY_COOLDOWN_DAYS = 1
export const DEALER_ROBBERY_MONEY_MIN = 80
export const DEALER_ROBBERY_MONEY_MAX = 250
export const DEALER_ROBBERY_DRUGS_MIN = 10
export const DEALER_ROBBERY_DRUGS_MAX = 40
export const DEALER_ROBBERY_FAIL_ARREST_CHANCE = 0.3
export const REVENGE_ROBBERY_CHANCE_PER_DAY = 0.15
export const REVENGE_DEFENSE_DURATION_SECONDS = 17
export const REVENGE_DEFENSE_TAPS_NEEDED = 8

// Drei begehbare Orte pro Stadtteil, mit echten Frankfurter Straßen/Plätzen.
// Bild-Ordner: images/ (kein Unterordner, Dateinamen siehe "image"-Feld)
export const DISTRICT_SPOT_IMAGE_BASE =
    "images/"

export const DISTRICT_SPOTS: {
    id: string
    districtId: string
    name: string
    image: string
    nightImage: string
}[] = [
    {
        id: "bockenheim_platz",
        districtId: "bockenheim",
        name: "Bockenheimer Warte",
        image: "bockenheimer_warte.PNG",
        nightImage: "bockenheimer_warte_nacht.PNG",
    },
    {
        id: "bockenheim_ecke",
        districtId: "bockenheim",
        name: "Leipziger Straße",
        image: "leipziger_strasse.PNG",
        nightImage: "leipziger_strasse_nacht.PNG",
    },
    {
        id: "bockenheim_hof",
        districtId: "bockenheim",
        name: "Kirchplatz Bockenheim",
        image: "kirchplatz_bockenheim.PNG",
        nightImage: "kirchplatz_bockenheim_nacht.PNG",
    },
    {
        id: "bahnhofsviertel_platz",
        districtId: "bahnhofsviertel",
        name: "Kaiserstraße",
        image: "kaiserstrasse.PNG",
        nightImage: "kaiserstrasse_nacht.PNG",
    },
    {
        id: "bahnhofsviertel_ecke",
        districtId: "bahnhofsviertel",
        name: "Münchener Straße",
        image: "muenchener_strasse.PNG",
        nightImage: "muenchener_strasse_nacht.PNG",
    },
    {
        id: "bahnhofsviertel_hof",
        districtId: "bahnhofsviertel",
        name: "Elbestraße",
        image: "elbestrasse.PNG",
        nightImage: "elbestrasse_nacht.PNG",
    },
    {
        id: "gallusviertel_platz",
        districtId: "gallusviertel",
        name: "Frankenallee",
        image: "frankenallee.PNG",
        nightImage: "frankenallee_nacht.PNG",
    },
    {
        id: "gallusviertel_ecke",
        districtId: "gallusviertel",
        name: "Mainzer Landstraße",
        image: "mainzer_landstrasse.PNG",
        nightImage: "mainzer_landstrasse_nacht.PNG",
    },
    {
        id: "gallusviertel_hof",
        districtId: "gallusviertel",
        name: "Gustavsburgplatz",
        image: "gustavsburgplatz.PNG",
        nightImage: "gustavsburgplatz_nacht.PNG",
    },
    {
        id: "sachsenhausen_platz",
        districtId: "sachsenhausen",
        name: "Schweizer Straße",
        image: "schweizer_strasse.PNG",
        nightImage: "schweizer_strasse_nacht.PNG",
    },
    {
        id: "sachsenhausen_ecke",
        districtId: "sachsenhausen",
        name: "Affentorplatz",
        image: "affentorplatz.PNG",
        nightImage: "affentorplatz_nacht.PNG",
    },
    {
        id: "sachsenhausen_hof",
        districtId: "sachsenhausen",
        name: "Alt-Sachsenhausen (Textorstraße)",
        image: "textorstrasse.PNG",
        nightImage: "textorstrasse_nacht.PNG",
    },
]

// Eigener kleiner Laden pro Ort, mit Öffnungszeiten. Ist er zu, gibt's nur
// noch die Möglichkeit einzubrechen (Optik: Lila-Neon-Filter übers Ortsbild,
// kein drittes "geschlossen"-Bild nötig)
export const DISTRICT_SPOT_SHOPS: Record<
    string,
    {
        shopName: string
        interiorImage: string
        closedStart: number
        closedEnd: number
        alwaysOpen?: boolean
        breakinReward: number
        items: {
            key: string
            name: string
            price: number
            hunger?: number
            mood?: number
            energy?: number
            kind?: "cigarettes" | "snack" | "alcohol" // fehlt = sofort verbraucht, sonst landet's im Inventar
            refKey?: string // Schlüssel in SNACK_ITEMS / ALCOHOL_TYPES bei kind "snack"/"alcohol"
            buzzMinutes?: number // macht betrunken (Minuten)
            highMinutes?: number // macht high (Minuten)
        }[]
    }
> = {
    bockenheim_platz: {
        shopName: "Café Warte",
        interiorImage: "cafe_warte.PNG",
        closedStart: 20,
        closedEnd: 7,
        breakinReward: 12,
        items: [
            { key: "kaffee", name: "Kaffee", price: 3, mood: 4, energy: 15 },
            {
                key: "kuchen",
                name: "Stück Kuchen",
                price: 4,
                hunger: 15,
                mood: 6,
            },
            { key: "bagel", name: "Bagel", price: 5, hunger: 25, mood: 3 },
        ],
    },
    bockenheim_ecke: {
        shopName: "Basar Leipziger Straße",
        interiorImage: "basar_leipziger.PNG",
        closedStart: 21,
        closedEnd: 8,
        breakinReward: 15,
        items: [
            {
                key: "obst",
                name: "Frisches Obst",
                price: 3,
                hunger: 15,
                mood: 2,
            },
            {
                key: "geback",
                name: "Orientalisches Gebäck",
                price: 4,
                hunger: 20,
                mood: 5,
            },
            { key: "minztee", name: "Minztee", price: 2, mood: 4 },
        ],
    },
    bockenheim_hof: {
        shopName: "Feinkost Kirchplatz",
        interiorImage: "feinkost_kirchplatz.PNG",
        closedStart: 19,
        closedEnd: 9,
        breakinReward: 18,
        items: [
            {
                key: "blumen",
                name: "Blumenstrauß",
                price: 6,
                kind: "snack",
                refKey: "blumenstrauss",
            },
            {
                key: "kaeseplatte",
                name: "Käseplatte",
                price: 9,
                hunger: 30,
                mood: 8,
            },
            {
                key: "glaswein",
                name: "Glas Wein",
                price: 6,
                mood: 8,
                buzzMinutes: 40,
            },
        ],
    },
    bahnhofsviertel_platz: {
        shopName: "Kaiser-Kiosk 24h",
        interiorImage: "kaiser_kiosk.PNG",
        closedStart: 0,
        closedEnd: 0,
        alwaysOpen: true,
        breakinReward: 20,
        items: [
            {
                key: "energydrink2",
                name: "Energy-Drink",
                price: 3,
                kind: "snack",
                refKey: "energydrink",
            },
            {
                key: "chips2",
                name: "Chips",
                price: 2.5,
                kind: "snack",
                refKey: "chips",
            },
            {
                key: "zigaretten2",
                name: "Schachtel Zigaretten",
                price: CIGARETTES_PRICE,
                kind: "cigarettes",
            },
        ],
    },
    bahnhofsviertel_ecke: {
        shopName: "Shisha Lounge München",
        interiorImage: "shisha_lounge.PNG",
        closedStart: 3,
        closedEnd: 16,
        breakinReward: 22,
        items: [
            {
                key: "shisha",
                name: "Shisha rauchen",
                price: 12,
                mood: 15,
                highMinutes: 45,
            },
            { key: "tee2", name: "Tee", price: 3, mood: 5 },
        ],
    },
    bahnhofsviertel_hof: {
        shopName: "Club Elbe",
        interiorImage: "club_elbe.PNG",
        closedStart: 4,
        closedEnd: 22,
        breakinReward: 25,
        items: [
            {
                key: "cocktail2",
                name: "Cocktail",
                price: 9,
                mood: 10,
                buzzMinutes: 50,
            },
            {
                key: "shots",
                name: "Runde Shots",
                price: 12,
                mood: 14,
                buzzMinutes: 80,
            },
            {
                key: "vipbereich",
                name: "VIP-Bereich (Flasche)",
                price: 90,
                mood: 30,
                buzzMinutes: 150,
            },
        ],
    },
    gallusviertel_platz: {
        shopName: "Frankenallee Grill",
        interiorImage: "frankenallee_grill.PNG",
        closedStart: 23,
        closedEnd: 10,
        breakinReward: 10,
        items: [
            { key: "doener2", name: "Döner", price: 6, hunger: 35, mood: 5 },
            { key: "pommes2", name: "Pommes", price: 3, hunger: 15, mood: 2 },
        ],
    },
    gallusviertel_ecke: {
        shopName: "Schnellrestaurant Gallus",
        interiorImage: "schnellrestaurant_gallus.PNG",
        closedStart: 22,
        closedEnd: 9,
        breakinReward: 14,
        items: [
            {
                key: "burgermenu",
                name: "Burger-Menü",
                price: 8,
                hunger: 40,
                mood: 6,
            },
            { key: "milchshake2", name: "Milchshake", price: 4, mood: 5 },
        ],
    },
    gallusviertel_hof: {
        shopName: "Wochenmarkt Gustavsburg",
        interiorImage: "wochenmarkt_gustavsburg.PNG",
        closedStart: 14,
        closedEnd: 7,
        breakinReward: 16,
        items: [
            { key: "gemuese", name: "Gemüse", price: 4, hunger: 20, mood: 2 },
            {
                key: "brot",
                name: "Frisches Brot",
                price: 3,
                hunger: 20,
                mood: 3,
            },
        ],
    },
    sachsenhausen_platz: {
        shopName: "Boutique Schweizer Straße",
        interiorImage: "boutique_schweizer.PNG",
        closedStart: 19,
        closedEnd: 10,
        breakinReward: 28,
        items: [
            { key: "pralinen", name: "Pralinen", price: 10, mood: 12 },
            {
                key: "delibox",
                name: "Deli-Box",
                price: 12,
                hunger: 30,
                mood: 10,
            },
        ],
    },
    sachsenhausen_ecke: {
        shopName: "Apotheke & Bäckerei Affentor",
        interiorImage: "apotheke_affentor.PNG",
        closedStart: 19,
        closedEnd: 8,
        breakinReward: 12,
        items: [
            {
                key: "broetchen",
                name: "Brötchen",
                price: 2,
                hunger: 15,
                mood: 2,
            },
            { key: "vitamine", name: "Vitamintabletten", price: 5, energy: 15 },
        ],
    },
    sachsenhausen_hof: {
        shopName: "Ebbelwoi Stubb",
        interiorImage: "ebbelwoi_stubb.PNG",
        closedStart: 1,
        closedEnd: 16,
        breakinReward: 20,
        items: [
            {
                key: "ebbelwoi_item",
                name: "Ebbelwoi (Bembel)",
                price: 4,
                kind: "alcohol",
                refKey: "ebbelwoi",
            },
            {
                key: "handkaes",
                name: "Handkäs mit Musik",
                price: 5,
                hunger: 20,
                mood: 6,
            },
        ],
    },
}

export const LUXURY_ITEMS = [
    { key: "hasKette", name: "Kette", price: 200, styleValue: 2 },
]

// Mehrere Parfüms gleichzeitig besitzbar – jedes bringt eigene Style-Punkte
export const PERFUME_ITEMS = [
    { key: "parfuem_frisch", name: "Frischer Duft", price: 50, styleValue: 1 },
    { key: "parfuem_edel", name: "Edler Duft", price: 150, styleValue: 2 },
    { key: "parfuem_luxus", name: "Luxus-Duft", price: 400, styleValue: 4 },
]

// Fernseher, Konsole & Kühlschrank: jeweils nur EIN Gerät im Besitz,
// ein Kauf ersetzt (upgraded) das alte Gerät
export const TV_ITEMS = [
    { key: "tv_basic", name: "Röhrenfernseher", price: 150, moodBonus: 3 },
    { key: "tv_mid", name: "Flachbild-Fernseher", price: 400, moodBonus: 6 },
    { key: "tv_premium", name: "Riesen-Smart-TV", price: 900, moodBonus: 10 },
]

export const KONSOLE_ITEMS = [
    {
        key: "konsole_basic",
        name: "Einsteiger-Konsole",
        price: 120,
        moodBonus: 3,
    },
    {
        key: "konsole_mid",
        name: "Mittelklasse-Konsole",
        price: 350,
        moodBonus: 6,
    },
    {
        key: "konsole_premium",
        name: "High-End-Konsole",
        price: 800,
        moodBonus: 10,
    },
]

export const KUEHL_ITEMS = [
    {
        key: "kuehl_basic",
        name: "Kompakt-Kühlschrank",
        price: 100,
        extraCapacity: 30,
    },
    {
        key: "kuehl_mid",
        name: "Großer Kühlschrank",
        price: 250,
        extraCapacity: 60,
    },
    {
        key: "kuehl_premium",
        name: "XXL-Kühl-Gefrier-Kombi",
        price: 500,
        extraCapacity: 100,
    },
]

export const FOODCOURT_MENUS: Record<
    string,
    { key: string; name: string; price: number; hunger: number; mood: number }[]
> = {
    doener: [
        {
            key: "doener_normal",
            name: "Döner (normal)",
            price: 5,
            hunger: 30,
            mood: 0,
        },
        {
            key: "doener_scharf",
            name: "Döner (scharf)",
            price: 5.5,
            hunger: 30,
            mood: 3,
        },
        { key: "duerum", name: "Dürüm", price: 6, hunger: 32, mood: 2 },
        {
            key: "pommes_doener",
            name: "Portion Pommes",
            price: 3,
            hunger: 15,
            mood: 2,
        },
    ],
    burger: [
        {
            key: "cheeseburger",
            name: "Cheeseburger",
            price: 6,
            hunger: 30,
            mood: 3,
        },
        {
            key: "doppelburger",
            name: "Doppel-Burger",
            price: 9,
            hunger: 45,
            mood: 5,
        },
        {
            key: "pommes_burger",
            name: "Portion Pommes",
            price: 3,
            hunger: 15,
            mood: 2,
        },
        { key: "milkshake", name: "Milchshake", price: 4, hunger: 5, mood: 6 },
    ],
    sushi: [
        { key: "maki", name: "Maki-Rolle", price: 7, hunger: 15, mood: 5 },
        { key: "nigiri", name: "Nigiri-Set", price: 10, hunger: 20, mood: 8 },
        {
            key: "sushi_menu",
            name: "Großes Sushi-Menü",
            price: 18,
            hunger: 40,
            mood: 15,
        },
        { key: "misosuppe", name: "Miso-Suppe", price: 4, hunger: 10, mood: 3 },
    ],
}

export const MALL_SHOPS = [
    {
        key: "hallea_budget",
        parent: "hallea",
        label: "Fetzenkiste",
        type: "clothing",
        tier: "basic",
        breakinReward: 10,
    },
    {
        key: "hallea_mid",
        parent: "hallea",
        label: "Stilwerk",
        type: "clothing",
        tier: "mid",
        breakinReward: 20,
    },
    {
        key: "hallea_premium",
        parent: "hallea",
        label: "Boulevard Couture",
        type: "clothing",
        tier: "premium",
        breakinReward: 35,
    },
    {
        key: "halleb_schmuck",
        parent: "halleb",
        label: "Diamantino",
        type: "jewelry",
        breakinReward: 50,
    },
    {
        key: "halleb_parfuem",
        parent: "halleb",
        label: "Duftbar",
        type: "perfume",
        breakinReward: 25,
    },
    {
        key: "hallec_tv",
        parent: "hallec",
        label: "ElectroWelt",
        type: "tv",
        breakinReward: 30,
    },
    {
        key: "hallec_konsole",
        parent: "hallec",
        label: "GameZone",
        type: "konsole",
        breakinReward: 30,
    },
    {
        key: "hallec_kuehl",
        parent: "hallec",
        label: "KüchenKing",
        type: "kuehl",
        breakinReward: 20,
    },
    {
        key: "nwzug_doener",
        parent: "nwzug",
        label: "Ali's Döner Palast",
        type: "food",
        foodKey: "doener",
        breakinReward: 8,
    },
    {
        key: "nwzug_burger",
        parent: "nwzug",
        label: "Burger Boss",
        type: "food",
        foodKey: "burger",
        breakinReward: 12,
    },
    {
        key: "nwzug_sushi",
        parent: "nwzug",
        label: "Sushi Sensei",
        type: "food",
        foodKey: "sushi",
        breakinReward: 18,
    },
]
export const MALL_SHOP_KEYS = MALL_SHOPS.map((s) => s.key)
export const MALL_LOCATIONS = [...MALL_HUB_LOCATIONS, ...MALL_SHOP_KEYS]

export const BUS_FARE = 3

export const MIAMI_TICKET_PRICE = 780
export const MIAMI_WELCOME_IMAGE =
    "images/willkommen_miami.PNG"
export const MIAMI_FLIGHT_HOURS = 10.5
export const MIAMI_HOTEL_PRICE = 220
// Hotelzimmer für die ganze Reise buchen
export const MIAMI_ROOM_PRICE = 450
// Eigene Bilder für die Hotelzimmer (Ordner: images/)
export const MIAMI_ROOM_IMAGES: Record<
    string,
    { image: string; nightImage: string }
> = {
    miami_rooftop: {
        image: "miami_rooftop.PNG",
        nightImage: "miami_rooftop_nacht.PNG",
    },
    miami_livemusic: {
        image: "miami_livemusic.PNG",
        nightImage: "miami_livemusic_nacht.PNG",
    },
    miami_club: {
        image: "miami_club.PNG",
        nightImage: "miami_club_nacht.PNG",
    },
    miami_beachparty: {
        image: "miami_beachparty.PNG",
        nightImage: "miami_beachparty_nacht.PNG",
    },
    miami_restaurant: {
        image: "miami_restaurant.PNG",
        nightImage: "miami_restaurant_nacht.PNG",
    },
    miami_bar: {
        image: "miami_bar.PNG",
        nightImage: "miami_bar_nacht.PNG",
    },
    miami_meer: {
        image: "miami_meer.PNG",
        nightImage: "miami_meer_nacht.PNG",
    },
    miami_liegestuhl: {
        image: "miami_liegestuhl.PNG",
        nightImage: "miami_liegestuhl_nacht.PNG",
    },
    miami_zimmer: {
        image: "miami_zimmer_wohnraum.PNG",
        nightImage: "miami_zimmer_wohnraum_nacht.PNG",
    },
    miami_zimmer_schlaf: {
        image: "miami_zimmer_schlaf.PNG",
        nightImage: "miami_zimmer_schlaf_nacht.PNG",
    },
    miami_zimmer_balkon: {
        image: "miami_zimmer_balkon.PNG",
        nightImage: "miami_zimmer_balkon_nacht.PNG",
    },
}
// Leute, die man in Miami kennenlernen kann
export const MIAMI_NAMES = [
    "Camila",
    "Isabella",
    "Mia",
    "Valentina",
    "Diego",
    "Mateo",
    "Sofía",
    "Lucia",
    "Carlos",
    "Elena",
]
export const MIAMI_COCKTAIL_PRICE = 18
export const MIAMI_CLUB_PRICE = 40
export const MIAMI_SHOPPING_PRICE = 65
export const MIAMI_MEAL_PRICE = 35
export const MIAMI_LADEN_CLOSED_START = 0
export const MIAMI_LADEN_CLOSED_END = 8
export const MIAMI_ROOFTOP_PRICE = 25
export const MIAMI_LIVEMUSIC_PRICE = 20
export const MIAMI_BEACHPARTY_PRICE = 35
export const MIAMI_BARCOCKTAIL_PRICE = 14

// -----------------------------------------------------
// AKTIONS-BILDER
// -----------------------------------------------------
export const ACTION_IMAGES: Record<string, string> = {
    buyCola:
        "images/actions/buycola.jpg",
    smoke: "images/actions/smoke.jpg",
    sellPackage:
        "images/actions/sell.jpg",
}
export const ACTION_IMAGE_DURATION_MS = 1400

export function loadSave() {
    // Framer rendert die Seite auch auf dem Server, dort gibt es kein window
    if (typeof window === "undefined") return null
    try {
        const raw = window.localStorage.getItem(SAVE_KEY)
        if (!raw) return null
        return JSON.parse(raw)
    } catch (e) {
        return null
    }
}

export function slotKey(slot: number) {
    return `${SAVE_KEY}-slot-${slot}`
}

export function pad(n: number) {
    return n.toString().padStart(2, "0")
}

export function totalOf(record: Record<string, number>) {
    return DRUG_TYPES.reduce((sum, drug) => sum + (record[drug] ?? 0), 0)
}

// -----------------------------------------------------
// MENÜ-KATEGORIEN
// -----------------------------------------------------
export const MENU_CATEGORY_INFO: Record<
    string,
    { label: string; emoji: string }
> = {
    bewegen: { label: "Bewegen", emoji: "🚶" },
    handeln: { label: "Handeln", emoji: "🛍" },
    bedurfnisse: { label: "Alltag", emoji: "🍽" },
    kriminelles: { label: "Untergrund", emoji: "🕶️" },
    sonstiges: { label: "Sonstiges", emoji: "⚙️" },
}
export const MENU_CATEGORY_ORDER = [
    "bewegen",
    "handeln",
    "bedurfnisse",
    "kriminelles",
    "sonstiges",
]

// Feinere Unterteilung innerhalb einer Kategorie, damit lange Listen
// (z.B. auf der Straße) übersichtliche Zwischenüberschriften bekommen
export function buttonSubGroup(text: string, category: string): string {
    const lower = text.toLowerCase()

    if (category === "bewegen") {
        if (
            text.startsWith("🚌") ||
            text.startsWith("🚗") ||
            text.startsWith("✈️") ||
            lower.includes("flughafen") ||
            lower.includes("stadtkarte")
        )
            return "Reisen"
        if (text.startsWith("⬅")) return "Zurück"
        if (text.startsWith("🚶")) return "In der Nähe"
        return "Orte"
    }

    if (category === "bedurfnisse") {
        if (
            lower.includes("essen") ||
            lower.includes("trinken") ||
            lower.includes("rauchen") ||
            lower.includes("joint") ||
            lower.includes("shisha")
        )
            return "Essen, Trinken & Genuss"
        if (
            lower.includes("schlafen") ||
            lower.includes("duschen") ||
            lower.includes("zähneputzen") ||
            lower.includes("sport") ||
            lower.includes("spiegel") ||
            lower.includes("umziehen") ||
            lower.includes("outfit")
        )
            return "Körper & Pflege"
        if (
            lower.includes("treffen") ||
            lower.includes("date") ||
            lower.includes("einladen") ||
            lower.includes("schreiben") ||
            lower.includes("anfreunden") ||
            lower.includes("kennenlernen") ||
            lower.includes("quatschen") ||
            lower.includes("kassiererin") ||
            lower.includes("tür öffnen")
        )
            return "Leute"
        return "Freizeit"
    }

    if (category === "handeln") {
        if (
            lower.includes("einzahlen") ||
            lower.includes("abheben") ||
            lower.includes("geld holen")
        )
            return "Bank & Safe"
        if (lower.includes("miete") || lower.includes("wohnung"))
            return "Wohnen"
        if (lower.includes("arbeiten") || lower.includes("nebenjob"))
            return "Arbeit"
        return "Einkaufen"
    }

    if (category === "kriminelles") {
        if (
            lower.includes("verkaufen") ||
            lower.includes("bunker") ||
            lower.includes("ware") ||
            lower.includes("dealer") ||
            lower.includes("diebesgut")
        )
            return "Geschäft"
        if (
            lower.includes("waffe") ||
            lower.includes("maske") ||
            lower.includes("messer") ||
            lower.includes("schlagring") ||
            lower.includes("pistole")
        )
            return "Ausrüstung"
        return "Aktionen"
    }

    return "Sonstiges"
}

export function categorizeButtonText(
    text: string,
    action?: () => void
): string {
    // 1) Ortswechsel zuverlässig am Code der Aktion erkennen (go, Bus, Auto,
    //    Gebiets-Orte). Damit landen Bus-/Autofahrten nicht mehr in "Sonstiges".
    if (action) {
        const src = action.toString()
        if (
            /\bgo\(/.test(src) ||
            /\brideBusTo\(/.test(src) ||
            /\bdriveCarTo\(/.test(src) ||
            /\benterDistrictSpot\(/.test(src) ||
            /\bflyToMiami\b/.test(src) ||
            /\bbookReturnFlightFromMiami\b/.test(src) ||
            /\bopenTerritoryMap\b/.test(src)
        ) {
            return "bewegen"
        }
    }
    // 2) Fallback über den Text (z.B. deaktivierte Platzhalter-Buttons)
    if (
        text.startsWith("⬅") ||
        text.startsWith("🚌") ||
        text.startsWith("🚗") ||
        text.startsWith("🚶") ||
        text.startsWith("✈️") ||
        text.startsWith("🗺") ||
        text.startsWith("🏬") ||
        text.startsWith("🅰️") ||
        text.startsWith("🅱️") ||
        text.startsWith("🅲️") ||
        text.startsWith("⬇️")
    ) {
        return "bewegen"
    }

    const lower = text.toLowerCase()

    // 3) Untergrund / Kriminelles
    if (
        lower.includes("einbrechen") ||
        lower.includes("ausrauben") ||
        lower.includes("überfallen") ||
        lower.includes("jagen") ||
        lower.includes("fliehen") ||
        lower.includes("ergeben") ||
        lower.includes("anwalt") ||
        lower.includes("strafzettel") ||
        lower.includes("aufgeben") ||
        lower.includes("beef") ||
        lower.includes("auto klauen") ||
        lower.includes("angreifen") ||
        lower.includes("dealer") ||
        lower.includes("bunker") ||
        lower.includes("diebesgut") ||
        lower.includes("ware mitnehmen") ||
        lower.includes("ware einlagern") ||
        lower.includes("verkaufen") ||
        lower.includes("waffe") ||
        lower.includes("maske") ||
        lower.includes("messer") ||
        lower.includes("schlagring") ||
        lower.includes("pistole")
    ) {
        return "kriminelles"
    }

    // 4) Alltag / Bedürfnisse
    if (
        lower.includes("schlafen") ||
        lower.includes("essen") ||
        lower.includes("trinken") ||
        lower.includes("duschen") ||
        lower.includes("fernsehen") ||
        lower.includes("zocken") ||
        lower.includes("sport") ||
        lower.includes("tanzen") ||
        lower.includes("rauchen") ||
        lower.includes("joint") ||
        lower.includes("zähneputzen") ||
        lower.includes("spiegel") ||
        lower.includes("umziehen") ||
        lower.includes("outfit") ||
        lower.includes("anfreunden") ||
        lower.includes("kennenlernen") ||
        lower.includes("treffen") ||
        lower.includes("schreiben") ||
        lower.includes("wetter") ||
        lower.includes("swipen") ||
        lower.includes("date") ||
        lower.includes("einladen") ||
        lower.includes("tür öffnen") ||
        lower.includes("shisha")
    ) {
        return "bedurfnisse"
    }

    // 5) Einkaufen / Geld
    if (
        lower.includes("kaufen") ||
        lower.includes("bezahlen") ||
        lower.includes("einzahlen") ||
        lower.includes("abheben") ||
        lower.includes("abholen") ||
        lower.includes("miete") ||
        lower.includes("wohnung") ||
        lower.includes("eintritt") ||
        lower.includes("snacks") ||
        lower.includes("getränke") ||
        lower.includes("alkohol") ||
        lower.includes("großeinkauf") ||
        lower.includes("arbeiten") ||
        lower.includes("nebenjob") ||
        lower.includes("geld holen") ||
        text.includes("€")
    ) {
        return "handeln"
    }

    return "sonstiges"
}
