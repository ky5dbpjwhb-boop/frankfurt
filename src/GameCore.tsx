import * as React from "react"
import {
    ACTION_GAMES,
    ACTION_GAME_COMPANY_BONUS,
    ACTION_GAME_MAX_BONUS,
    ACTION_IMAGES,
    ACTION_IMAGE_DURATION_MS,
    ALCOHOL_TYPES,
    AMT_OPEN_END,
    AMT_OPEN_START,
    APARTMENT_RENT_PRICE,
    BASE_DANGER_CHANCE,
    BREAKIN_DURATIONS_BY_ATTEMPT,
    BREAKIN_ENTRY_DURATION_SECONDS,
    BREAKIN_ENTRY_TAPS_NEEDED,
    BREAKIN_MAX_PER_WEEK,
    BREAKIN_REWARD_PER_CATCH,
    BREAKIN_TARGET_INTERVAL_MS,
    BRUSH_TEETH_MOOD_BOOST,
    BUS_FARE,
    CAR_STOLEN_STOP_CHANCE,
    CAR_THEFT_DURATION_SECONDS,
    CAR_THEFT_TAPS_NEEDED,
    CAR_TICKET_CHANCE_PER_DAY,
    CAR_TYPES,
    CHARACTER_IMAGE_BASE,
    CHARISMA_COURT_BONUS_PER_LEVEL,
    CHARISMA_GIFT_CHANCE_BONUS_PER_LEVEL,
    CHARISMA_SELL_BONUS_PER_LEVEL,
    CHARISMA_XP_CHAT,
    CHAT_EFFECTS,
    CHAT_REPLIES,
    CHARISMA_XP_DATE,
    CHARISMA_XP_GROUP,
    CHARISMA_XP_LIKE,
    CHARISMA_XP_MEET,
    CHARISMA_XP_PER_LEVEL,
    CHASE_DURATION_SECONDS,
    CHASE_GRID_SIZE,
    CHASE_MAZE,
    CHASE_TICK_MS,
    CIGARETTES_PER_PURCHASE,
    CIGARETTES_PRICE,
    CLOSED_SCENES,
    CLUB_ENTRY_PRICE,
    CLUB_MIN_STYLE_SCORE,
    COLLAPSE_HEALTH_PENALTY,
    COLLAPSE_RESTORE_ENERGY,
    COLLAPSE_RESTORE_HUNGER,
    COLLAPSE_ROBBED_CHANCE,
    COLLAPSE_SCENE_REAL_MS,
    COLLAPSE_TIME_SKIP_MINUTES,
    COMPLIMENT_CHANCE_PER_STYLE_POINT,
    COMPANION_LINES,
    COMPANION_LINE_INTERVAL,
    COMPANION_MOOD_PER_HOUR,
    COMPANION_SUGGESTIONS,
    COMPANION_SUGGESTION_INTERVAL,
    COMPANION_DECLINE_PENALTY,
    COMPANION_SUGGESTION_REWARD,
    COMPLIMENT_MOOD_BONUS,
    COURT_DEFENSE_DURATION_SECONDS,
    COURT_DEFENSE_MAX_BONUS,
    COURT_DEFENSE_TAPS_NEEDED,
    CUSTOMER_DEAL_MIN_GRAMS,
    CUSTOMER_MAX_DELAY_MS,
    CUSTOMER_MEETING_SHOPS,
    CUSTOMER_DEAL_TIME_MINUTES,
    CREDIT_DAYS,
    CREDIT_MAX_PER_CUSTOMER,
    CUSTOMER_MEETING_SPOTS,
    CUSTOMER_MIN_DELAY_MS,
    DANGER_CHANCE_FLOOR,
    DANGER_REDUCTION_PER_LEVEL,
    DEALERS_PER_LEVEL,
    DEALER_BETRAYAL_CHANCE_ON_PENALTY,
    DEALER_BETRAYAL_WARE_STOLEN,
    DEALER_CHASE_CATCH_CHANCE_BASE,
    DEALER_CHASE_CATCH_CHANCE_PER_LEVEL,
    DEALER_CHASE_WINDOW_MINUTES,
    DEALER_FIGHT_DURATION_SECONDS,
    DEALER_FIGHT_TAPS_NEEDED,
    DEALER_HELP_COOLDOWN_MINUTES,
    DEALER_HELP_SUCCESS_CHANCE,
    DEALER_HIRE_COST,
    DATE_DURATION_MINUTES,
    DATE_GIFTS,
    DATE_LINES,
    DATE_WISHES,
    DEALER_NAMES,
    detectChatIntent,
    DEALER_ROBBERY_DRUGS_MAX,
    DEALER_ROBBERY_DRUGS_MIN,
    DEALER_ROBBERY_DURATION_SECONDS,
    DEALER_ROBBERY_FAIL_ARREST_CHANCE,
    DEALER_ROBBERY_MONEY_MAX,
    DEALER_ROBBERY_MONEY_MIN,
    DEALER_ROBBERY_TAPS_NEEDED,
    DEALER_SALE_AMOUNT,
    DEALER_SALE_CHANCE_PER_HOUR,
    DEBT_COLLECT_MIN_LOYALTY,
    DEBT_COLLECT_SUCCESS_BASE,
    DEALER_STASH_LOW_RESET,
    DEALER_STASH_LOW_WARNING,
    DISTRICTS,
    DISTRICT_ARREST_ON_FAIL_CHANCE,
    DISTRICT_CONQUER_RESPECT,
    DISTRICT_DEFEND_RESPECT,
    DISTRICT_FIGHT_DURATION_SECONDS,
    DISTRICT_MIN_DEALERS_REQUIRED,
    DISTRICT_RAID_CHANCE_PER_DAY,
    DISTRICT_SPOTS,
    DISTRICT_SPOT_IMAGE_BASE,
    DISTRICT_SPOT_SHOPS,
    DRUG_INFO,
    DRUG_TYPES,
    EAT_FRIDGE_COST,
    ENERGY_DECAY_PER_HOUR,
    ESCORT_IMAGE_REAL_MS,
    ESCORT_MAX_WAIT_MINUTES,
    ESCORT_MIN_WAIT_MINUTES,
    ESCORT_NAME,
    ESCORT_PRICE,
    ESCORT_VISIT_HOURS_SKIP,
    FENCE_RATE,
    FLIRT_BASE_CHANCE,
    FLIRT_DURATION_SECONDS,
    FLIRT_MIN_FRIENDSHIP,
    FLIRT_TAPS_NEEDED,
    FLEE_BASE_CHANCE,
    FLEE_CHANCE_PER_LEVEL,
    FOODCOURT_MENUS,
    FOODO_DELIVERY_MINUTES,
    FOODO_MENU,
    FREEDOM_CHANCE_NO_LAWYER,
    FREEDOM_CHANCE_WITH_LAWYER,
    FRIDGE_MAX,
    GAME_MINUTES_PER_TICK,
    GROUP_AVAILABILITY_BASE,
    GERICHT_OPEN_END,
    GERICHT_OPEN_START,
    HEAT_DECAY_SECONDS,
    HEAT_DECAY_SECONDS_PHONE_OFF,
    HEAVY_SEVERITY_CARRYING_THRESHOLD,
    HIGH_HEAT_RESET,
    HIGH_HEAT_WARNING,
    HITMAN_MIN_LOYALTY,
    HIT_BETRAYAL_BASE_CHANCE,
    HIT_JAIL_DAYS,
    HIT_PRICE,
    ORDER_BETRAYAL,
    ORDER_HUNT_DAYS,
    ORDER_JAIL_DAYS,
    ORDER_MIN_LOYALTY,
    ORDER_PRICES,
    HOME_LOCATIONS,
    HOME_STATUS_KEYS,
    HOSTILE_SELL_ROBBERY_CHANCE,
    HUNGER_DECAY_PER_HOUR,
    IMPAIRMENT_CHANCE_PENALTY,
    INMATE_CONTACTS,
    INMATE_REARREST_CHANCE_PER_DAY,
    INMATE_REARREST_MAX_DAYS,
    INMATE_REARREST_MIN_DAYS,
    INMATE_RELEASE_MAX_DAYS,
    INMATE_RELEASE_MIN_DAYS,
    INTIMACY_DURATION_SECONDS,
    INTIMACY_TAPS_NEEDED,
    JAIL_FIGHT_DURATION_SECONDS,
    JAIL_FIGHT_TAPS_NEEDED,
    JAIL_HIT_PRICE,
    JOB_MAX_PER_DAY,
    JOB_PAY_PER_CHARISMA,
    JOB_PAY_PER_STRENGTH,
    JAIL_FINE_MINUTES,
    JAIL_HEAVY_MINUTES,
    JAIL_JOB_PAY,
    JAIL_LIGHT_MINUTES,
    JAIL_LOCATIONS,
    JAIL_MOONSHINE_BUZZ_MINUTES,
    JAIL_EXTRA_DAYS_DEALING,
    JAIL_EXTRA_DAYS_FIGHT,
    JAIL_MOONSHINE_PRICE,
    JAIL_NIGHT_END,
    JAIL_NIGHT_START,
    JAIL_PIECE_BUY_AMOUNT,
    JAIL_PIECE_PRICE,
    JAIL_SELL_ALCOHOL_PRICE,
    JAIL_SELL_CAUGHT_CHANCE,
    JAIL_SELL_PRICE_MULTIPLIER,
    JEALOUSY_CHANCE,
    JEALOUSY_MOOD_PENALTY,
    JOINT_HIGH_MINUTES,
    JOINT_PIECE_AMOUNT,
    JUDGE_MOOD_MODIFIER,
    KIOSK_CASHIER,
    KIOSK_CASHIER_LOVE_LEVEL,
    KIOSK_CLOSED_END,
    KIOSK_CLOSED_START,
    KONSOLE_ITEMS,
    KUEHL_ITEMS,
    LAWYER_PRICE,
    LOCATION_NAMES,
    LOW_ENERGY_RESET,
    LOW_ENERGY_WARNING,
    LOW_HUNGER_RESET,
    LOW_HUNGER_WARNING,
    LUXURY_ITEMS,
    MALL_HUB_LOCATIONS,
    MALL_OPEN_END,
    MALL_OPEN_START,
    MALL_SHOPS,
    MALL_SHOP_KEYS,
    MASK_PRICE,
    MAX_CARRY,
    MAX_HEAT,
    MENU_CATEGORY_INFO,
    MENU_CATEGORY_ORDER,
    MIAMI_BARCOCKTAIL_PRICE,
    MIAMI_BEACHPARTY_PRICE,
    MIAMI_CLUB_PRICE,
    MIAMI_COCKTAIL_PRICE,
    MIAMI_FLIGHT_HOURS,
    MIAMI_HOTEL_PRICE,
    MIAMI_ROOM_IMAGES,
    MIAMI_ROOM_PRICE,
    MIAMI_LADEN_CLOSED_END,
    MIAMI_LADEN_CLOSED_START,
    MIAMI_LIVEMUSIC_PRICE,
    MIAMI_MEAL_PRICE,
    MIAMI_NAMES,
    MIAMI_ROOFTOP_PRICE,
    MIAMI_SHOPPING_PRICE,
    MIAMI_TICKET_PRICE,
    MIAMI_WELCOME_IMAGE,
    MIRROR_COMMENTS_HIGH,
    MIRROR_COMMENTS_LOW,
    MIRROR_COMMENTS_MID,
    MONEY_PER_SALE_PER_LEVEL,
    NIGHTLIFE_CONTACTS,
    NIGHTLIFE_CONTACT_CHANCE,
    NIGHTLIFE_FLIRT_CHANCE,
    NIGHT_COLOR,
    NIGHT_MAX_DARKNESS,
    NIGHT_SCENES,
    NPC_FRIENDS,
    OUTFITS,
    OUTFIT_SEASON_INFO,
    OUTFIT_SEASON_ORDER,
    OUTSIDE_LOCATIONS,
    PERFUME_ITEMS,
    PARTNER_BREAKIN_EXTRA_SECONDS,
    PARTNER_BREAKIN_SHARE,
    PARTNER_COOK_HUNGER,
    PARTNER_DAILY_MOOD,
    PARTNER_LOAN_AMOUNT,
    PARTNER_STASH_PROTECTION,
    PHONE_APPS,
    PHONE_OFF_PENALTY_MINUTES,
    PIXGRAM_CAPTIONS,
    PIXGRAM_FOLLOWER_BASE,
    PIXGRAM_MATCH_BONUS_PER_100,
    PIXGRAM_POST_COOLDOWN,
    PIXGRAM_POST_TYPES,
    PIXGRAM_SPONSOR_PAY,
    PIXGRAM_SPONSOR_THRESHOLD,
    RAID_DEFENSE_DURATION_SECONDS,
    RAID_DEFENSE_TAPS_NEEDED,
    RANDOM_CONTACT_CHANCE_PER_LOCATION,
    REAL_MS_PER_TICK,
    RELATIONSHIP_MIN_LEVEL,
    relationTier,
    RENT_AMOUNT,
    RENT_DUE_INTERVAL_DAYS,
    RENT_GRACE_DAYS,
    REVENGE_DEFENSE_DURATION_SECONDS,
    REVENGE_DEFENSE_TAPS_NEEDED,
    REVENGE_ROBBERY_CHANCE_PER_DAY,
    ROBBERY_COOLDOWN_DAYS,
    ROBBERY_GAME_DURATION_SECONDS,
    RUBBELLOS_PRICE,
    RUBBELLOS_WIN_CHANCE,
    SALES_PER_LEVEL,
    SANDWICH_CLOSED_END,
    SANDWICH_CLOSED_START,
    SAVE_KEY,
    SCENES,
    SELL_ENERGY_COST,
    SIDE_JOBS,
    SELL_GAME_DURATION_SECONDS,
    SELL_GAME_TAPS_NEEDED,
    SMOKE_ENERGY_BOOST,
    SMOKE_FILTER_DURATION_MS,
    SMOKE_HUNGER_DROP,
    SNACK_ITEMS,
    SPARKLY_NAMES,
    SPORT_ENERGY_COST,
    SPORT_HEALTH_GAIN,
    SPORT_RESPECT_GAIN,
    STADTKARTE_IMAGE_URL,
    STATUS_CATEGORY_INFO,
    STATUS_CATEGORY_ORDER,
    STATUS_KEYS,
    STATUS_KEY_CATEGORY,
    STAT_ICON,
    STAT_LABEL,
    STRAFZETTEL_CHANCE_ON_CLEAN_STOP,
    STRAFZETTEL_DUE_DAYS,
    STRAFZETTEL_FINE,
    STRENGTH_CARRY_BONUS_PER_LEVEL,
    STRENGTH_CHASE_BONUS_PER_LEVEL,
    STRENGTH_FLEE_BONUS_PER_LEVEL,
    STRENGTH_XP_FIGHT_WIN,
    STRENGTH_XP_JAIL_SPORT,
    STRENGTH_XP_PER_LEVEL,
    STRENGTH_XP_SPORT,
    STYLE_DISCOUNT_MAX,
    STYLE_DISCOUNT_PER_LEVEL,
    STYLE_SCORE_PER_LEVEL,
    SUPERMARKET_CLOSED_END,
    SUPERMARKET_CLOSED_START,
    SUPERMARKET_OPTIONS,
    SUPPLIER_DANGER_BONUS,
    SUPPLIER_MAX_GRAMS_PER_WEEK,
    SURVEILLANCE_DURATION_MINUTES,
    SURVEILLANCE_MIN_HEAT,
    TERRITORY_FIGHT_TARGET_INTERVAL_MS,
    TIME_COST_MINUTES,
    TV_ITEMS,
    UEBERFALL_REACT_SECONDS,
    WEAPON_TYPES,
    WEATHER_TYPES,
    WEBGO_CLASSIFIEDS,
    WEBGO_NEWS,
    WEBGO_REFRESH_DAYS,
    WEBGO_SECTIONS,
    WEEKDAY_NAMES,
    WELFARE_AMOUNT,
    WELFARE_COOLDOWN_DAYS,
    buttonSubGroup,
    categorizeButtonText,
    chaseBfsNextStep,
    chaseIsStreet,
    emptyDrugRecord,
    generateBuyPrices,
    generateCustomerDealGrams,
    generateSellPrices,
    getNightCurtainOpacity,
    isClosedAtHour,
    loadSave,
    pad,
    shouldShowNightImage,
    slotKey,
    totalOf,
} from "./GameData.tsx"
import Flur from "./Flur.tsx"
import EinbruchKiosk from "./EinbruchKiosk.tsx"
import Hochhaus from "./Hochhaus.tsx"
import MiamiHotel from "./MiamiHotel.tsx"

export default function GameCore() {
    const saved = React.useMemo(() => loadSave(), [])

    // =====================================================
    // 03 SPIELWERTE
    // =====================================================
    const [money, setMoney] = React.useState(saved?.money ?? 500)
    const [health, setHealth] = React.useState(saved?.health ?? 100)
    const [energy, setEnergy] = React.useState(saved?.energy ?? 100)
    const [hunger, setHunger] = React.useState(saved?.hunger ?? 100)
    const [mood, setMood] = React.useState(saved?.mood ?? 100)

    const [homeStash, setHomeStash] = React.useState<Record<string, number>>(
        () => {
            const old = saved?.homeStash ?? saved?.packages
            if (typeof old === "number")
                return { ...emptyDrugRecord(), weed: old }
            return old ?? emptyDrugRecord()
        }
    )
    const [carrying, setCarrying] = React.useState<Record<string, number>>(
        () => {
            const old = saved?.carrying
            if (typeof old === "number")
                return { ...emptyDrugRecord(), weed: old }
            return old ?? emptyDrugRecord()
        }
    )

    const [fridgeStock, setFridgeStock] = React.useState(
        saved?.fridgeStock ?? 100
    )

    const [lastWeatherCheckDay, setLastWeatherCheckDay] = React.useState(
        saved?.lastWeatherCheckDay ?? 0
    )

    const [moneySafe, setMoneySafe] = React.useState(saved?.moneySafe ?? 0)

    const [cigarettes, setCigarettes] = React.useState(saved?.cigarettes ?? 0)
    const [snackInventory, setSnackInventory] = React.useState<
        Record<string, number>
    >(saved?.snackInventory ?? {})
    const [alcoholInventory, setAlcoholInventory] = React.useState<
        Record<string, number>
    >(saved?.alcoholInventory ?? {})

    const [hasApartment, setHasApartment] = React.useState(
        saved?.hasApartment ?? (saved ? true : false)
    )

    const [hiredDealers, setHiredDealers] = React.useState(
        saved?.hiredDealers ?? 0
    )
    const [dealerHelpCalledAt, setDealerHelpCalledAt] = React.useState<
        number | null
    >(saved?.dealerHelpCalledAt ?? null)

    const [ownedOutfits, setOwnedOutfits] = React.useState<string[]>(
        saved?.ownedOutfits ?? ["outfit_unterwaesche", "outfit_budget"]
    )
    const [equippedOutfit, setEquippedOutfit] = React.useState<string>(
        saved?.equippedOutfit ?? "outfit_budget"
    )
    const [outfitPickerOpen, setOutfitPickerOpen] = React.useState(false)
    const [shopSubCategory, setShopSubCategory] = React.useState<string | null>(
        null
    )
    // Zweistufige Reiseauswahl in Bus/Auto: erst Stadtteil, dann Straße
    const [travelDistrict, setTravelDistrict] = React.useState<string | null>(
        null
    )
    const [browsingOutfitIndex, setBrowsingOutfitIndex] = React.useState(0)
    const [outfitPickerSeason, setOutfitPickerSeason] = React.useState<
        string | null
    >(null)
    const [clothingShopPickerOpen, setClothingShopPickerOpen] =
        React.useState(false)
    const [browsingClothingShopIndex, setBrowsingClothingShopIndex] =
        React.useState(0)
    const [clothingShopTier, setClothingShopTier] = React.useState<
        string | null
    >(null)
    const [clothingShopSeason, setClothingShopSeason] = React.useState<
        string | null
    >(null)
    const [watchShopPickerOpen, setWatchShopPickerOpen] = React.useState(false)
    const [browsingWatchShopIndex, setBrowsingWatchShopIndex] =
        React.useState(0)
    const [characterViewOpen, setCharacterViewOpen] = React.useState(false)

    const [amountPanelMode, setAmountPanelMode] = React.useState<
        "take" | "buy" | "supply" | "withdraw" | null
    >(null)
    const [amountPanelInputs, setAmountPanelInputs] = React.useState<
        Record<string, string>
    >({
        weed: "",
        hashish: "",
        kokain: "",
    })
    const [moneyPanelMode, setMoneyPanelMode] = React.useState<
        "deposit" | "withdraw" | null
    >(null)
    const [moneyPanelInput, setMoneyPanelInput] = React.useState("")

    const [hasKette, setHasKette] = React.useState(saved?.hasKette ?? false)
    const [ownedPerfumes, setOwnedPerfumes] = React.useState<string[]>(
        saved?.ownedPerfumes ?? (saved?.hasParfuem ? ["parfuem_frisch"] : [])
    )

    const [ownedTv, setOwnedTv] = React.useState<string | null>(
        saved?.ownedTv ?? (saved?.hasFernseher ? "tv_basic" : null)
    )
    const [ownedKonsole, setOwnedKonsole] = React.useState<string | null>(
        saved?.ownedKonsole ?? (saved?.hasKonsole ? "konsole_basic" : null)
    )
    const [ownedKuehl, setOwnedKuehl] = React.useState<string | null>(
        saved?.ownedKuehl ??
            (saved?.hasKuehlschrankUpgrade ? "kuehl_basic" : null)
    )

    const [dealerChaseDeadline, setDealerChaseDeadline] = React.useState<
        number | null
    >(saved?.dealerChaseDeadline ?? null)
    const [dealerDebtMoney, setDealerDebtMoney] = React.useState(0)
    const [dealerDebtWare, setDealerDebtWare] = React.useState(0)
    const [dealerDebtWareType, setDealerDebtWareType] = React.useState("weed")

    const [dealerFightActive, setDealerFightActive] = React.useState(false)
    const [dealerFightTimeLeft, setDealerFightTimeLeft] = React.useState(0)
    const [dealerFightTapsDone, setDealerFightTapsDone] = React.useState(0)
    const dealerFightTapsRef = React.useRef(0)
    const [dealerStash, setDealerStash] = React.useState<
        Record<string, number>
    >(() => {
        const old = saved?.dealerStash
        if (typeof old === "number") return { ...emptyDrugRecord(), weed: old }
        return old ?? emptyDrugRecord()
    })
    const [dealerEarnings, setDealerEarnings] = React.useState(
        saved?.dealerEarnings ?? 0
    )

    const [sellPrices, setSellPrices] = React.useState<Record<string, number>>(
        saved?.sellPrices ?? generateSellPrices()
    )
    const [sellPricesWeek, setSellPricesWeek] = React.useState(
        saved?.sellPricesWeek ?? -1
    )
    const [buyPrices, setBuyPrices] = React.useState<Record<string, number>>(
        saved?.buyPrices ?? generateBuyPrices()
    )
    const [supplierBoughtThisWeek, setSupplierBoughtThisWeek] = React.useState<
        Record<string, number>
    >(saved?.supplierBoughtThisWeek ?? emptyDrugRecord())
    const [supplierBoughtWeek, setSupplierBoughtWeek] = React.useState(
        saved?.supplierBoughtWeek ?? -1
    )

    const [location, setLocation] = React.useState(
        saved?.location ?? (hasApartment ? "flur" : "street")
    )

    const [lastSupplierDay, setLastSupplierDay] = React.useState(
        saved?.lastSupplierDay ?? 0
    )
    const [justLeftSupplier, setJustLeftSupplier] = React.useState(false)

    const [ownedWeapon, setOwnedWeapon] = React.useState<string | null>(
        saved?.ownedWeapon ?? (saved?.hasWeapon ? "pistole" : null)
    )
    const [hasMask, setHasMask] = React.useState(saved?.hasMask ?? false)
    const [lastRobberyDay, setLastRobberyDay] = React.useState(
        saved?.lastRobberyDay ?? 0
    )

    const [totalSales, setTotalSales] = React.useState(saved?.totalSales ?? 0)
    const level = Math.floor(totalSales / SALES_PER_LEVEL) + 1
    const maxDealers = Math.floor(level / DEALERS_PER_LEVEL)

    const styleScore =
        (OUTFITS.find((o) => o.id === equippedOutfit)?.styleValue ?? 0) +
        (hasKette ? 2 : 0) +
        ownedPerfumes.reduce(
            (sum, key) =>
                sum +
                (PERFUME_ITEMS.find((p) => p.key === key)?.styleValue ?? 0),
            0
        )
    const effectiveLevel =
        level + Math.floor(styleScore / STYLE_SCORE_PER_LEVEL)

    // Level-Systeme: Stärke, Charisma, Style
    const [strengthXP, setStrengthXP] = React.useState(saved?.strengthXP ?? 0)
    const [charismaXP, setCharismaXP] = React.useState(saved?.charismaXP ?? 0)
    const strengthLevel = Math.floor(strengthXP / STRENGTH_XP_PER_LEVEL) + 1
    const charismaLevel = Math.floor(charismaXP / CHARISMA_XP_PER_LEVEL) + 1
    const styleLevel = Math.floor(styleScore / STYLE_SCORE_PER_LEVEL) + 1
    const effectiveMaxCarry =
        MAX_CARRY + (strengthLevel - 1) * STRENGTH_CARRY_BONUS_PER_LEVEL
    const styleDiscount = Math.min(
        STYLE_DISCOUNT_MAX,
        (styleLevel - 1) * STYLE_DISCOUNT_PER_LEVEL
    )
    const discountedPrice = (price: number) =>
        Math.round(price * (1 - styleDiscount))

    // Gang-Gebiete
    const [districtControl, setDistrictControl] = React.useState<
        Record<string, boolean>
    >(saved?.districtControl ?? {})
    const [territoryEarnings, setTerritoryEarnings] = React.useState(
        saved?.territoryEarnings ?? 0
    )
    const [territoryMapOpen, setTerritoryMapOpen] = React.useState(false)
    const [selectedDistrict, setSelectedDistrict] = React.useState<
        string | null
    >(null)
    const [territoryFightActive, setTerritoryFightActive] =
        React.useState(false)
    const [territoryFightTapsDone, setTerritoryFightTapsDone] =
        React.useState(0)
    const [territoryFightTimeLeft, setTerritoryFightTimeLeft] =
        React.useState(0)
    const territoryFightTapsRef = React.useRef(0)
    const [raidDefenseActive, setRaidDefenseActive] = React.useState(false)
    const [raidDefenseDistrict, setRaidDefenseDistrict] = React.useState<
        string | null
    >(null)
    const [raidDefenseTapsDone, setRaidDefenseTapsDone] = React.useState(0)
    const [raidDefenseTimeLeft, setRaidDefenseTimeLeft] = React.useState(0)
    const raidDefenseTapsRef = React.useRef(0)
    // Kampf-Minigame: bewegliches Tap-Ziel statt fixem Button
    const [fightTargetVisible, setFightTargetVisible] = React.useState(false)
    // Fremde Dealer überfallen / Rache-Überfälle abwehren
    const [dealerRobberyActive, setDealerRobberyActive] = React.useState(false)
    const [dealerRobberyTapsDone, setDealerRobberyTapsDone] = React.useState(0)
    const [dealerRobberyTimeLeft, setDealerRobberyTimeLeft] = React.useState(0)
    const [dealerRobberyDistrict, setDealerRobberyDistrict] = React.useState<
        string | null
    >(null)
    const dealerRobberyTapsRef = React.useRef(0)
    const [lastDealerRobberyDay, setLastDealerRobberyDay] = React.useState<
        Record<string, number>
    >(saved?.lastDealerRobberyDay ?? {})
    const [revengeDefenseActive, setRevengeDefenseActive] =
        React.useState(false)
    const [revengeDefenseTapsDone, setRevengeDefenseTapsDone] =
        React.useState(0)
    const [revengeDefenseTimeLeft, setRevengeDefenseTimeLeft] =
        React.useState(0)
    const [revengeDefenseGang, setRevengeDefenseGang] = React.useState<
        string | null
    >(null)
    const revengeDefenseTapsRef = React.useRef(0)
    const [fightTargetPos, setFightTargetPos] = React.useState({ x: 50, y: 45 })

    const isDistrictControlled = (id: string) => {
        const district = DISTRICTS.find((d) => d.id === id)
        if (district?.isHome) return true
        return districtControl[id] === true
    }

    // Begehbare Orte in fremden/eigenen Gebieten
    const [districtBanUntilDay, setDistrictBanUntilDay] = React.useState<
        Record<string, number>
    >(saved?.districtBanUntilDay ?? {})
    const [districtStash, setDistrictStash] = React.useState<
        Record<string, Record<string, number>>
    >(saved?.districtStash ?? {})
    // Einnahmen liegen beim jeweiligen Gebiet und müssen dort abgeholt werden
    const [districtEarnings, setDistrictEarnings] = React.useState<
        Record<string, number>
    >(saved?.districtEarnings ?? {})
    // Deine namentlich bekannte Crew
    const [crew, setCrew] = React.useState<
        {
            key: string
            name: string
            districtId: string | null
            loyalty: number
            jailUntilDay?: number
            traitor?: boolean
        }[]
    >(saved?.crew ?? [])
    const [districtDealers, setDistrictDealers] = React.useState<
        Record<string, number>
    >(saved?.districtDealers ?? {})
    const currentDistrictSpot = DISTRICT_SPOTS.find((s) => s.id === location)
    const totalAssignedDealers = Object.values(districtDealers).reduce(
        (a, b) => a + b,
        0
    )
    const idleDealers = Math.max(hiredDealers - totalAssignedDealers, 0)
    const getDistrictStash = (districtId: string) =>
        districtStash[districtId] ?? emptyDrugRecord()

    const [heat, setHeat] = React.useState(saved?.heat ?? 0)
    const [stolenGoods, setStolenGoods] = React.useState(
        saved?.stolenGoods ?? 0
    )
    const [ownedCarLegit, setOwnedCarLegit] = React.useState<{
        key: string
    } | null>(saved?.ownedCarLegit ?? null)
    const [ownedCarStolen, setOwnedCarStolen] = React.useState<{
        key: string
    } | null>(saved?.ownedCarStolen ?? null)
    const [lastCarTheftDay, setLastCarTheftDay] = React.useState(
        saved?.lastCarTheftDay ?? 0
    )
    const [carTheftActive, setCarTheftActive] = React.useState(false)
    const [carLegitOffset, setCarLegitOffset] = React.useState<{
        x: number
        y: number
    }>(saved?.carLegitOffset ?? { x: 0, y: 0 })
    const [carStolenOffset, setCarStolenOffset] = React.useState<{
        x: number
        y: number
    }>(saved?.carStolenOffset ?? { x: 0, y: 0 })
    const carDragRef = React.useRef<{
        type: "legit" | "stolen" | null
        startX: number
        startY: number
        origX: number
        origY: number
    }>({ type: null, startX: 0, startY: 0, origX: 0, origY: 0 })

    const [carTheftTapsDone, setCarTheftTapsDone] = React.useState(0)
    const [carTheftTimeLeft, setCarTheftTimeLeft] = React.useState(0)
    const carTheftTapsRef = React.useRef(0)
    const [surveillanceUntilMinutes, setSurveillanceUntilMinutes] =
        React.useState<number | null>(saved?.surveillanceUntilMinutes ?? null)

    const [policeEncounter, setPoliceEncounter] = React.useState(false)
    const [policeEncounterContext, setPoliceEncounterContext] = React.useState<
        "danger" | "breakin" | "cartheft" | "stolencarstop"
    >("danger")

    const [breakinGameActive, setBreakinGameActive] = React.useState(false)
    const [breakinTimeLeft, setBreakinTimeLeft] = React.useState(0)
    const [breakinCaught, setBreakinCaught] = React.useState(0)
    const [breakinTargetVisible, setBreakinTargetVisible] =
        React.useState(false)
    const [breakinTargetPos, setBreakinTargetPos] = React.useState({
        x: 50,
        y: 50,
    })
    const breakinCaughtRef = React.useRef(0)
    const breakinPriorAttemptsRef = React.useRef(0)

    const [breakinEntryActive, setBreakinEntryActive] = React.useState(false)
    const [breakinEntryTapsDone, setBreakinEntryTapsDone] = React.useState(0)
    const [policeChaseActive, setPoliceChaseActive] = React.useState(false)
    const [chaseTimeLeft, setChaseTimeLeft] = React.useState(0)
    const [chasePendingReward, setChasePendingReward] = React.useState(0)
    const [chasePlayerPos, setChasePlayerPos] = React.useState({ x: 0, y: 1 })
    const [chasePolicePos, setChasePolicePos] = React.useState({ x: 5, y: 5 })
    const chasePlayerPosRef = React.useRef({ x: 0, y: 1 })
    const [breakinEntryTimeLeft, setBreakinEntryTimeLeft] = React.useState(0)
    const breakinEntryTapsRef = React.useRef(0)

    const [breakinCounts, setBreakinCounts] = React.useState<
        Record<string, number>
    >(saved?.breakinCounts ?? {})
    const [breakinCountsWeek, setBreakinCountsWeek] = React.useState(
        saved?.breakinCountsWeek ?? 0
    )
    const [breakinLastDay, setBreakinLastDay] = React.useState<
        Record<string, number>
    >(saved?.breakinLastDay ?? {})

    const [sellGameActive, setSellGameActive] = React.useState(false)
    const [sellTimeLeft, setSellTimeLeft] = React.useState(0)
    const [sellTapsDone, setSellTapsDone] = React.useState(0)
    const sellTapsRef = React.useRef(0)
    const [sellingDrugType, setSellingDrugType] = React.useState<string | null>(
        null
    )

    const [ueberfallGameActive, setUeberfallGameActive] = React.useState(false)
    const [ueberfallTimeLeft, setUeberfallTimeLeft] = React.useState(0)
    const [ueberfallPendingLoss, setUeberfallPendingLoss] = React.useState(0)
    const ueberfallReactedRef = React.useRef(false)

    const [courtActive, setCourtActive] = React.useState(false)
    const [courtSeverity, setCourtSeverity] = React.useState<
        "light" | "heavy" | "fine"
    >("light")
    const [judgeMood, setJudgeMood] = React.useState<
        "gut" | "neutral" | "schlecht"
    >("neutral")
    const [courtDefenseActive, setCourtDefenseActive] = React.useState(false)
    const [courtDefenseTapsDone, setCourtDefenseTapsDone] = React.useState(0)
    const [courtDefenseTimeLeft, setCourtDefenseTimeLeft] = React.useState(0)
    const courtDefenseTapsRef = React.useRef(0)
    const [courtWithLawyerPending, setCourtWithLawyerPending] =
        React.useState(false)

    const [jailFightActive, setJailFightActive] = React.useState(false)
    const [jailFightTapsDone, setJailFightTapsDone] = React.useState(0)
    const [jailFightTimeLeft, setJailFightTimeLeft] = React.useState(0)
    const jailFightTapsRef = React.useRef(0)

    const [escortOrdered, setEscortOrdered] = React.useState(
        saved?.escortOrdered ?? false
    )
    const [escortArrivalMinutes, setEscortArrivalMinutes] = React.useState<
        number | null
    >(saved?.escortArrivalMinutes ?? null)
    const [escortDoorbellActive, setEscortDoorbellActive] = React.useState(
        saved?.escortDoorbellActive ?? false
    )
    const [escortSceneActive, setEscortSceneActive] = React.useState(false)

    const [dateVisitOrdered, setDateVisitOrdered] = React.useState(
        saved?.dateVisitOrdered ?? false
    )
    const [dateVisitName, setDateVisitName] = React.useState<string | null>(
        saved?.dateVisitName ?? null
    )
    const [dateVisitArrivalMinutes, setDateVisitArrivalMinutes] =
        React.useState<number | null>(saved?.dateVisitArrivalMinutes ?? null)
    const [dateVisitDoorbellActive, setDateVisitDoorbellActive] =
        React.useState(saved?.dateVisitDoorbellActive ?? false)
    const [dateVisitSceneActive, setDateVisitSceneActive] =
        React.useState(false)

    const [foodOrdered, setFoodOrdered] = React.useState(
        saved?.foodOrdered ?? false
    )
    const [foodOrderedMeal, setFoodOrderedMeal] = React.useState<string | null>(
        saved?.foodOrderedMeal ?? null
    )
    const [foodArrivalMinutes, setFoodArrivalMinutes] = React.useState<
        number | null
    >(saved?.foodArrivalMinutes ?? null)
    const [foodDoorbellActive, setFoodDoorbellActive] = React.useState(
        saved?.foodDoorbellActive ?? false
    )
    const [deliveredMeal, setDeliveredMeal] = React.useState<string | null>(
        saved?.deliveredMeal ?? null
    )

    const [collapseSceneActive, setCollapseSceneActive] = React.useState(false)

    // Kunden-Nachrichten-State (früh definiert, wird weiter unten gebraucht)
    const [customerRequest, setCustomerRequest] = React.useState(false)
    const [phoneMessage, setPhoneMessage] = React.useState<string | null>(null)
    const [phoneNotifVisible, setPhoneNotifVisible] = React.useState(false)
    const [customerDealGrams, setCustomerDealGrams] = React.useState(0)
    const [customerDealDrug, setCustomerDealDrug] = React.useState("weed")
    const [customerRequestNpc, setCustomerRequestNpc] = React.useState<
        string | null
    >(null)
    const [customerRequestAccepted, setCustomerRequestAccepted] =
        React.useState(false)
    const [customerDealDeadline, setCustomerDealDeadline] = React.useState<
        number | null
    >(null)
    const [customerMeetingSpot, setCustomerMeetingSpot] = React.useState<
        string | null
    >(null)

    const [unlockedContacts, setUnlockedContacts] = React.useState<string[]>(
        saved?.unlockedContacts ?? []
    )
    // Wann ein Mithäftling wieder draußen ist (Spieltag)
    const [inmateFreeDay, setInmateFreeDay] = React.useState<
        Record<string, number>
    >(saved?.inmateFreeDay ?? {})
    const [deletedContacts, setDeletedContacts] = React.useState<string[]>(
        saved?.deletedContacts ?? []
    )
    const [favoriteContacts, setFavoriteContacts] = React.useState<string[]>(
        saved?.favoriteContacts ?? []
    )
    const [chatwaveFilter, setChatwaveFilter] = React.useState<
        "alle" | "favoriten"
    >("alle")
    // Alle sichtbaren Kontakte (gelöschte fliegen raus), Favoriten zuerst
    const ALL_CONTACTS = [
        ...NPC_FRIENDS,
        ...NIGHTLIFE_CONTACTS.filter((c) => unlockedContacts.includes(c.key)),
        ...(unlockedContacts.includes(KIOSK_CASHIER.key)
            ? [KIOSK_CASHIER]
            : []),
        ...INMATE_CONTACTS.filter((c) => unlockedContacts.includes(c.key)),
    ]
        .filter((c) => !deletedContacts.includes(c.key))
        .sort((a, b) => {
            const aFav = favoriteContacts.includes(a.key) ? 0 : 1
            const bFav = favoriteContacts.includes(b.key) ? 0 : 1
            return aFav - bFav
        })
    const visibleContacts =
        chatwaveFilter === "favoriten"
            ? ALL_CONTACTS.filter((c) => favoriteContacts.includes(c.key))
            : ALL_CONTACTS
    const toggleFavoriteContact = (key: string) => {
        setFavoriteContacts((list) =>
            list.includes(key) ? list.filter((k) => k !== key) : [...list, key]
        )
    }
    const [npcFriendship, setNpcFriendship] = React.useState<
        Record<string, number>
    >(saved?.npcFriendship ?? {})
    const [sparklyMatches, setSparklyMatches] = React.useState<
        {
            name: string
            level: number
            metInPerson: boolean
            loyal?: boolean
            relationship?: boolean
        }[]
    >(saved?.sparklyMatches ?? [])

    const [pendingCourtSeverity, setPendingCourtSeverity] = React.useState<
        "light" | "heavy" | "fine" | null
    >(saved?.pendingCourtSeverity ?? null)

    const [strafzettelDebt, setStrafzettelDebt] = React.useState(
        saved?.strafzettelDebt ?? 0
    )
    const [strafzettelIssuedDay, setStrafzettelIssuedDay] = React.useState(
        saved?.strafzettelIssuedDay ?? 0
    )

    const [jailReleaseAt, setJailReleaseAt] = React.useState<number | null>(
        saved?.jailReleaseAt ?? null
    )

    const [robberyGameActive, setRobberyGameActive] = React.useState(false)
    const [robberyTimeLeft, setRobberyTimeLeft] = React.useState(0)
    const [robberyCaught, setRobberyCaught] = React.useState(0)
    const [robberyTargetVisible, setRobberyTargetVisible] =
        React.useState(false)
    const [robberyTargetPos, setRobberyTargetPos] = React.useState({
        x: 50,
        y: 50,
    })
    const robberyCaughtRef = React.useRef(0)

    const [confirmationIcon, setConfirmationIcon] = React.useState<
        "success" | "fail" | null
    >(null)
    const showConfirmation = (success: boolean) => {
        setConfirmationIcon(success ? "success" : "fail")
        window.setTimeout(() => setConfirmationIcon(null), 1200)
    }

    const [smokeEffect, setSmokeEffect] = React.useState(false)
    const [drunkUntilMinutes, setDrunkUntilMinutes] = React.useState<
        number | null
    >(saved?.drunkUntilMinutes ?? null)
    const [highUntilMinutes, setHighUntilMinutes] = React.useState<
        number | null
    >(saved?.highUntilMinutes ?? null)

    const [menuOpen, setMenuOpen] = React.useState(false)
    const [openMenuCategory, setOpenMenuCategory] = React.useState<
        string | null
    >(null)
    const [openStatusCategory, setOpenStatusCategory] = React.useState<
        string | null
    >(null)

    const [phoneOn, setPhoneOn] = React.useState(saved?.phoneOn ?? true)
    const [phoneOffSinceMinutes, setPhoneOffSinceMinutes] = React.useState<
        number | null
    >(saved?.phoneOffSinceMinutes ?? null)
    const phonePenaltiesAppliedRef = React.useRef(0)

    const togglePhone = () => {
        setPhoneOn((on) => {
            const next = !on
            if (!next) {
                setPhoneOffSinceMinutes(gameMinutes)
            } else {
                setPhoneOffSinceMinutes(null)
                phonePenaltiesAppliedRef.current = 0
            }
            return next
        })
    }

    const [phoneHomeOpen, setPhoneHomeOpen] = React.useState(false)
    const [phoneAppOpen, setPhoneAppOpen] = React.useState<string | null>(null)
    // Untermenü innerhalb von Kryptor
    const [kryptorTab, setKryptorTab] = React.useState<
        | "anfragen"
        | "dealer"
        | "exdealer"
        | "kunden"
        | "knast"
        | "auftraege"
        | null
    >(null)

    const openPhone = () => {
        setPhoneHomeOpen((open) => !open)
        setPhoneAppOpen(null)
    }

    const closePhone = () => {
        setPhoneHomeOpen(false)
        setPhoneAppOpen(null)
    }

    const [statsMenuOpen, setStatsMenuOpen] = React.useState(false)

    const [inventoryMenuOpen, setInventoryMenuOpen] = React.useState(false)

    const [homeMenuOpen, setHomeMenuOpen] = React.useState(false)

    const [notice, setNotice] = React.useState<string | null>(null)

    const showNotice = (text: string) => {
        setNotice(text)
        window.setTimeout(() => setNotice(null), 4500)
    }

    const slotHasSave = (slot: number) => {
        if (typeof window === "undefined") return false
        try {
            return window.localStorage.getItem(slotKey(slot)) !== null
        } catch (e) {
            return false
        }
    }

    const saveToSlot = (slot: number) => {
        try {
            const current = window.localStorage.getItem(SAVE_KEY)
            if (!current) return
            window.localStorage.setItem(slotKey(slot), current)
            showNotice(`💾 Auf Speicherplatz ${slot} gespeichert.`)
        } catch (e) {
            showNotice("⚠️ Speichern hat nicht geklappt.")
        }
    }

    const loadFromSlot = (slot: number) => {
        try {
            const saved = window.localStorage.getItem(slotKey(slot))
            if (!saved) return
            window.localStorage.setItem(SAVE_KEY, saved)
            window.location.reload()
        } catch (e) {
            showNotice("⚠️ Laden hat nicht geklappt.")
        }
    }

    const restartGame = () => {
        const confirmed = window.confirm(
            "Wirklich neu starten? Dein aktueller Fortschritt geht verloren (außer du hast ihn vorher auf einem Speicherplatz gesichert)."
        )
        if (!confirmed) return
        try {
            window.localStorage.removeItem(SAVE_KEY)
        } catch (e) {
            // ignorieren
        }
        window.location.reload()
    }

    const [transitionText, setTransitionText] = React.useState<string | null>(
        null
    )
    const [transitionVisible, setTransitionVisible] = React.useState(false)
    const [flightPhase, setFlightPhase] = React.useState<
        "black" | "welcome" | "fadeout" | null
    >(null)
    const [flightPhaseVisible, setFlightPhaseVisible] = React.useState(false)

    const [actionImageUrl, setActionImageUrl] = React.useState<string | null>(
        null
    )
    const [actionImageVisible, setActionImageVisible] = React.useState(false)

    const showActionImage = (
        imageKey: string,
        durationMs = ACTION_IMAGE_DURATION_MS
    ) => {
        const url = ACTION_IMAGES[imageKey]
        if (!url) return
        setActionImageUrl(url)
        setActionImageVisible(true)
        window.setTimeout(() => setActionImageVisible(false), durationMs)
        window.setTimeout(() => setActionImageUrl(null), durationMs + 300)
    }

    // =====================================================
    // 04 ZEIT-SYSTEM
    // =====================================================
    const initialGameMinutes =
        saved?.gameMinutes ??
        (saved?.day && saved?.hour !== undefined
            ? (saved.day - 1) * 1440 + saved.hour * 60
            : 9 * 60)

    const [gameMinutes, setGameMinutes] = React.useState(initialGameMinutes)

    const isDrunk =
        drunkUntilMinutes !== null && gameMinutes < drunkUntilMinutes
    const isHigh = highUntilMinutes !== null && gameMinutes < highUntilMinutes
    const impairmentPenalty = isDrunk || isHigh ? IMPAIRMENT_CHANCE_PENALTY : 0

    const day = Math.floor(gameMinutes / 1440) + 1

    // Club-Eintritt gilt für den laufenden Spieltag
    const [clubEntryDay, setClubEntryDay] = React.useState<number>(
        saved?.clubEntryDay ?? 0
    )
    const clubEntryPaid = clubEntryDay === day
    // In Miami wird bei Besuchen das Hotel gezeigt statt des Hochhauses
    const inMiami = location.startsWith("miami_")

    // Begleitung: mit wem man gerade unterwegs ist und seit wann
    const [companions, setCompanions] = React.useState<string[]>(
        saved?.companions ?? []
    )
    const [companionSince, setCompanionSince] = React.useState<number | null>(
        saved?.companionSince ?? null
    )

    // Was das aktuelle Date sich wünscht
    const [dateWish, setDateWish] = React.useState<string | null>(null)
    const [dateWishDone, setDateWishDone] = React.useState(false)
    const [dateGiftsGiven, setDateGiftsGiven] = React.useState<string[]>([])

    // Früh deklariert, weil der Speicher-Effekt sie braucht
    // Laufende Suche nach einem Ex-Dealer (dauert eine Woche)
    const [pendingHunt, setPendingHunt] = React.useState<{
        targetKey: string
        targetName: string
        executorKey: string
        kind: "verjagen" | "verpruegeln" | "ausschalten"
        loot: number
        dueDay: number
    } | null>(saved?.pendingHunt ?? null)
    const [debtors, setDebtors] = React.useState<
        { name: string; amount: number; dueDay: number }[]
    >(saved?.debtors ?? [])
    const [followers, setFollowers] = React.useState(saved?.followers ?? 0)
    const [lastPostMinute, setLastPostMinute] = React.useState(
        saved?.lastPostMinute ?? -9999
    )
    const [sponsorDayClaimed, setSponsorDayClaimed] = React.useState(
        saved?.sponsorDayClaimed ?? 0
    )
    const [newsIndex, setNewsIndex] = React.useState(saved?.newsIndex ?? 0)
    const [newsDay, setNewsDay] = React.useState(saved?.newsDay ?? 0)
    const [boughtClassifieds, setBoughtClassifieds] = React.useState<string[]>(
        saved?.boughtClassifieds ?? []
    )
    const [classifiedsDay, setClassifiedsDay] = React.useState(
        saved?.classifiedsDay ?? 0
    )
    const [jobsToday, setJobsToday] = React.useState<Record<string, number>>(
        saved?.jobsToday ?? {}
    )
    const [jobsDay, setJobsDay] = React.useState(saved?.jobsDay ?? 0)
    const [partnerCookDay, setPartnerCookDay] = React.useState(
        saved?.partnerCookDay ?? 0
    )
    const [partnerLoanDay, setPartnerLoanDay] = React.useState(
        saved?.partnerLoanDay ?? 0
    )
    const [traitorKey, setTraitorKey] = React.useState<string | null>(
        saved?.traitorKey ?? null
    )
    const [traitorLoot, setTraitorLoot] = React.useState(
        saved?.traitorLoot ?? 0
    )
    const [hasMiamiRoom, setHasMiamiRoom] = React.useState(
        saved?.hasMiamiRoom ?? false
    )
    const hour = Math.floor((gameMinutes % 1440) / 60)
    const minute = gameMinutes % 60

    const weekdayIndex = (day - 1) % 7
    const weekdayName = WEEKDAY_NAMES[weekdayIndex]
    const isWeekend = weekdayIndex === 5 || weekdayIndex === 6

    const isCurrentShopClosed =
        (location === "kiosk" &&
            isClosedAtHour(hour, KIOSK_CLOSED_START, KIOSK_CLOSED_END)) ||
        (location === "sandwich" &&
            isClosedAtHour(hour, SANDWICH_CLOSED_START, SANDWICH_CLOSED_END)) ||
        (location === "supermarkt" &&
            isClosedAtHour(
                hour,
                SUPERMARKET_CLOSED_START,
                SUPERMARKET_CLOSED_END
            )) ||
        (MALL_SHOP_KEYS.includes(location) &&
            isClosedAtHour(hour, MALL_OPEN_END, MALL_OPEN_START))

    const [lastWelfareDay, setLastWelfareDay] = React.useState(
        saved?.lastWelfareDay ?? 0
    )
    const [lastRentPaidDay, setLastRentPaidDay] = React.useState(
        saved?.lastRentPaidDay ?? (hasApartment ? day : 0)
    )

    const advanceTime = (minutesToAdd: number) => {
        setGameMinutes((m) => m + minutesToAdd)
    }

    React.useEffect(() => {
        const interval = window.setInterval(() => {
            advanceTime(GAME_MINUTES_PER_TICK)
        }, REAL_MS_PER_TICK)
        return () => window.clearInterval(interval)
    }, [])

    const lastDecayHourRef = React.useRef(Math.floor(initialGameMinutes / 60))

    React.useEffect(() => {
        const currentTotalHour = Math.floor(gameMinutes / 60)
        const previousTotalHour = lastDecayHourRef.current
        if (currentTotalHour > previousTotalHour) {
            const hoursPassed = currentTotalHour - previousTotalHour
            setHunger((h) =>
                Math.max(h - HUNGER_DECAY_PER_HOUR * hoursPassed, 0)
            )
            setEnergy((e) =>
                Math.max(e - ENERGY_DECAY_PER_HOUR * hoursPassed, 0)
            )

            const parkDealers = Math.max(hiredDealers - totalAssignedDealers, 0)
            if (parkDealers > 0) {
                const stashLeft = { ...dealerStash }
                let income = 0
                for (let h = 0; h < hoursPassed; h++) {
                    for (let d = 0; d < parkDealers; d++) {
                        const available = DRUG_TYPES.filter(
                            (drug) => stashLeft[drug] >= DEALER_SALE_AMOUNT
                        )
                        if (available.length === 0) continue
                        if (Math.random() < DEALER_SALE_CHANCE_PER_HOUR) {
                            const drug =
                                available[
                                    Math.floor(Math.random() * available.length)
                                ]
                            stashLeft[drug] -= DEALER_SALE_AMOUNT
                            const dealPrice =
                                (sellPrices[drug] ??
                                    DRUG_INFO[drug].sellRange[0]) *
                                DEALER_SALE_AMOUNT
                            income += dealPrice / 2
                        }
                    }
                }
                if (totalOf(stashLeft) !== totalOf(dealerStash))
                    setDealerStash(stashLeft)
                if (income > 0) {
                    setDealerEarnings((e) => e + Math.round(income))
                }
            }

            // Gebiets-Dealer: verkaufen aus dem jeweiligen Gebiets-Bunker,
            // Erlös fließt in die Gebiets-Einnahmen
            const districtsWithDealers = Object.entries(districtDealers).filter(
                ([, count]) => count > 0
            )
            if (districtsWithDealers.length > 0) {
                const stashCopy: Record<string, Record<string, number>> = {}
                let districtDealerIncome = 0
                for (const [districtId, count] of districtsWithDealers) {
                    const stashLeft = {
                        ...(districtStash[districtId] ?? emptyDrugRecord()),
                    }
                    for (let h = 0; h < hoursPassed; h++) {
                        for (let d = 0; d < count; d++) {
                            const available = DRUG_TYPES.filter(
                                (drug) => stashLeft[drug] >= DEALER_SALE_AMOUNT
                            )
                            if (available.length === 0) continue
                            if (Math.random() < DEALER_SALE_CHANCE_PER_HOUR) {
                                const drug =
                                    available[
                                        Math.floor(
                                            Math.random() * available.length
                                        )
                                    ]
                                stashLeft[drug] -= DEALER_SALE_AMOUNT
                                const dealPrice =
                                    (sellPrices[drug] ??
                                        DRUG_INFO[drug].sellRange[0]) *
                                    DEALER_SALE_AMOUNT
                                districtDealerIncome += dealPrice / 2
                            }
                        }
                    }
                    stashCopy[districtId] = stashLeft
                }
                setDistrictStash((s) => ({ ...s, ...stashCopy }))
                if (districtDealerIncome > 0) {
                    // Verkaufserlös liegt ebenfalls beim Gebiet
                    const first = districtsWithDealers[0][0]
                    setDistrictEarnings((prev) => ({
                        ...prev,
                        [first]:
                            (prev[first] ?? 0) +
                            Math.round(districtDealerIncome),
                    }))
                }
            }

            // Gebiets-Einnahmen: nur dort, wo auch wirklich Dealer für dich
            // arbeiten. Das Geld liegt beim jeweiligen Dealer und muss vor Ort
            // abgeholt werden.
            const incomePerDistrict: Record<string, number> = {}
            for (const district of DISTRICTS) {
                const controlled =
                    district.isHome || districtControl[district.id] === true
                const crewHere = districtDealers[district.id] ?? 0
                if (!controlled || crewHere <= 0) continue
                incomePerDistrict[district.id] =
                    district.incomePerHour * hoursPassed * crewHere
            }
            if (Object.keys(incomePerDistrict).length > 0) {
                setDistrictEarnings((prev) => {
                    const next = { ...prev }
                    for (const [id, amount] of Object.entries(
                        incomePerDistrict
                    )) {
                        next[id] = (next[id] ?? 0) + Math.round(amount)
                    }
                    return next
                })
            }

            lastDecayHourRef.current = currentTotalHour
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameMinutes])

    // Tägliches Risiko: eine rivalisierende Gang versucht, sich ein von dir
    // eingenommenes Gebiet zurückzuholen – gibt dir aber die Chance, aktiv
    // zu verteidigen (Tipp-Minigame), statt es einfach zu verlieren
    const lastRaidCheckDayRef = React.useRef(day)
    React.useEffect(() => {
        if (day <= lastRaidCheckDayRef.current) return
        lastRaidCheckDayRef.current = day
        if (raidDefenseActive || territoryFightActive) return
        const heldDistricts = DISTRICTS.filter(
            (d) => !d.isHome && districtControl[d.id] === true
        )
        for (const district of heldDistricts) {
            if (Math.random() < DISTRICT_RAID_CHANCE_PER_DAY) {
                showNotice(
                    `🚨 Die ${district.gangName} greifen ${district.name} an! Verteidige dich!`
                )
                startRaidDefense(district.id)
                break
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day, districtControl])

    React.useEffect(() => {
        try {
            window.localStorage.setItem(
                SAVE_KEY,
                JSON.stringify({
                    money,
                    health,
                    energy,
                    hunger,
                    mood,
                    homeStash,
                    carrying,
                    moneySafe,
                    cigarettes,
                    snackInventory,
                    alcoholInventory,
                    location,
                    gameMinutes,
                    heat,
                    lastSupplierDay,
                    totalSales,
                    phoneOn,
                    phoneOffSinceMinutes,
                    fridgeStock,
                    lastWeatherCheckDay,
                    ownedWeapon,
                    hasMask,
                    lastRobberyDay,
                    hasApartment,
                    lastWelfareDay,
                    lastRentPaidDay,
                    breakinCounts,
                    breakinCountsWeek,
                    breakinLastDay,
                    dealerChaseDeadline,
                    sellPrices,
                    sellPricesWeek,
                    buyPrices,
                    supplierBoughtThisWeek,
                    escortOrdered,
                    escortArrivalMinutes,
                    escortDoorbellActive,
                    dateVisitOrdered,
                    dateVisitName,
                    dateVisitArrivalMinutes,
                    dateVisitDoorbellActive,
                    foodOrdered,
                    foodOrderedMeal,
                    foodArrivalMinutes,
                    foodDoorbellActive,
                    deliveredMeal,
                    drunkUntilMinutes,
                    highUntilMinutes,
                    stolenGoods,
                    ownedCarLegit,
                    ownedCarStolen,
                    carLegitOffset,
                    carStolenOffset,
                    lastCarTheftDay,
                    surveillanceUntilMinutes,
                    npcFriendship,
                    sparklyMatches,
                    supplierBoughtWeek,
                    jailReleaseAt,
                    hiredDealers,
                    dealerHelpCalledAt,
                    dealerStash,
                    dealerEarnings,
                    ownedOutfits,
                    equippedOutfit,
                    pendingCourtSeverity,
                    strafzettelDebt,
                    strafzettelIssuedDay,
                    hasKette,
                    ownedPerfumes,
                    ownedTv,
                    ownedKonsole,
                    ownedKuehl,
                    strengthXP,
                    charismaXP,
                    districtControl,
                    territoryEarnings,
                    districtBanUntilDay,
                    districtStash,
                    districtDealers,
                    districtEarnings,
                    crew,
                    jobsToday,
                    jobsDay,
                    partnerCookDay,
                    partnerLoanDay,
                    traitorKey,
                    traitorLoot,
                    pendingHunt,
                    debtors,
                    unlockedContacts,
                    deletedContacts,
                    favoriteContacts,
                    lastDealerRobberyDay,
                    clubEntryDay,
                    followers,
                    lastPostMinute,
                    sponsorDayClaimed,
                    newsIndex,
                    newsDay,
                    boughtClassifieds,
                    classifiedsDay,
                    inmateFreeDay,
                    hasMiamiRoom,
                    companions,
                    companionSince,
                })
            )
        } catch (e) {
            // Speicher nicht verfügbar (z.B. privates Fenster) – ignorieren
        }
    }, [
        money,
        health,
        energy,
        hunger,
        mood,
        homeStash,
        carrying,
        moneySafe,
        cigarettes,
        snackInventory,
        alcoholInventory,
        location,
        gameMinutes,
        heat,
        lastSupplierDay,
        totalSales,
        phoneOn,
        phoneOffSinceMinutes,
        fridgeStock,
        lastWeatherCheckDay,
        ownedWeapon,
        hasMask,
        lastRobberyDay,
        hasApartment,
        lastWelfareDay,
        lastRentPaidDay,
        breakinCounts,
        breakinCountsWeek,
        breakinLastDay,
        dealerChaseDeadline,
        sellPrices,
        sellPricesWeek,
        buyPrices,
        supplierBoughtThisWeek,
        supplierBoughtWeek,
        escortOrdered,
        escortArrivalMinutes,
        escortDoorbellActive,
        dateVisitOrdered,
        dateVisitName,
        dateVisitArrivalMinutes,
        dateVisitDoorbellActive,
        foodOrdered,
        foodOrderedMeal,
        foodArrivalMinutes,
        foodDoorbellActive,
        deliveredMeal,
        drunkUntilMinutes,
        highUntilMinutes,
        stolenGoods,
        ownedCarLegit,
        ownedCarStolen,
        carLegitOffset,
        carStolenOffset,
        lastCarTheftDay,
        surveillanceUntilMinutes,
        npcFriendship,
        sparklyMatches,
        jailReleaseAt,
        hiredDealers,
        dealerHelpCalledAt,
        dealerStash,
        dealerEarnings,
        ownedOutfits,
        equippedOutfit,
        pendingCourtSeverity,
        strafzettelDebt,
        strafzettelIssuedDay,
        hasKette,
        ownedPerfumes,
        ownedTv,
        ownedKonsole,
        ownedKuehl,
        strengthXP,
        charismaXP,
        districtControl,
        territoryEarnings,
        districtBanUntilDay,
        districtStash,
        districtDealers,
        unlockedContacts,
        deletedContacts,
        favoriteContacts,
        lastDealerRobberyDay,
        clubEntryDay,
        companions,
        companionSince,
        boughtClassifieds,
        classifiedsDay,
        crew,
        debtors,
        districtEarnings,
        followers,
        hasMiamiRoom,
        inmateFreeDay,
        jobsDay,
        jobsToday,
        lastPostMinute,
        newsDay,
        newsIndex,
        partnerCookDay,
        partnerLoanDay,
        pendingHunt,
        sponsorDayClaimed,
        traitorKey,
        traitorLoot,
    ])

    const gameMinutesRef = React.useRef(gameMinutes)
    React.useEffect(() => {
        gameMinutesRef.current = gameMinutes
    }, [gameMinutes])
    const surveillanceUntilRef = React.useRef(surveillanceUntilMinutes)
    React.useEffect(() => {
        surveillanceUntilRef.current = surveillanceUntilMinutes
    }, [surveillanceUntilMinutes])

    React.useEffect(() => {
        const seconds = phoneOn
            ? HEAT_DECAY_SECONDS
            : HEAT_DECAY_SECONDS_PHONE_OFF
        const interval = window.setInterval(() => {
            setHeat((h) => {
                const beingWatched =
                    surveillanceUntilRef.current !== null &&
                    gameMinutesRef.current < surveillanceUntilRef.current
                const floor = beingWatched ? SURVEILLANCE_MIN_HEAT : 0
                return Math.max(h - 1, floor)
            })
        }, seconds * 1000)
        return () => window.clearInterval(interval)
    }, [phoneOn])

    React.useEffect(() => {
        if (phoneOffSinceMinutes === null) {
            phonePenaltiesAppliedRef.current = 0
            return
        }
        const elapsed = gameMinutes - phoneOffSinceMinutes
        const penaltiesEarned = Math.floor(elapsed / PHONE_OFF_PENALTY_MINUTES)
        if (penaltiesEarned > phonePenaltiesAppliedRef.current) {
            const newPenalties =
                penaltiesEarned - phonePenaltiesAppliedRef.current
            showNotice(
                "📴 Dein Handy ist aus – du verpasst Anfragen von Kunden."
            )
            phonePenaltiesAppliedRef.current = penaltiesEarned
            if (
                hiredDealers > 0 &&
                Math.random() < DEALER_BETRAYAL_CHANCE_ON_PENALTY
            ) {
                triggerDealerBetrayal()
            }
        }
    }, [gameMinutes, phoneOffSinceMinutes])

    const hungerWarnedRef = React.useRef(false)
    React.useEffect(() => {
        if (hunger < LOW_HUNGER_WARNING && !hungerWarnedRef.current) {
            showNotice("🍔 Du hast großen Hunger! Geh bald was essen.")
            hungerWarnedRef.current = true
        }
        if (hunger >= LOW_HUNGER_RESET) hungerWarnedRef.current = false
    }, [hunger])

    const energyWarnedRef = React.useRef(false)
    React.useEffect(() => {
        if (energy < LOW_ENERGY_WARNING && !energyWarnedRef.current) {
            showNotice("⚡ Du bist erschöpft! Zeit zu schlafen.")
            energyWarnedRef.current = true
        }
        if (energy >= LOW_ENERGY_RESET) energyWarnedRef.current = false
    }, [energy])

    const heatWarnedRef = React.useRef(false)
    React.useEffect(() => {
        if (heat >= HIGH_HEAT_WARNING && !heatWarnedRef.current) {
            showNotice("🚨 Vorsicht, die Polizei ist dir fast auf den Fersen!")
            heatWarnedRef.current = true
        }
        if (heat <= HIGH_HEAT_RESET) heatWarnedRef.current = false
    }, [heat])

    const dealerStashWarnedRef = React.useRef(false)
    const dealerStashTotal = totalOf(dealerStash)
    React.useEffect(() => {
        if (hiredDealers <= 0) return
        if (
            dealerStashTotal < DEALER_STASH_LOW_WARNING &&
            !dealerStashWarnedRef.current
        ) {
            showNotice(
                "📦 Deinen Dealern geht die Ware aus – bring bald Nachschub in den Park!"
            )
            dealerStashWarnedRef.current = true
        }
        if (dealerStashTotal >= DEALER_STASH_LOW_RESET)
            dealerStashWarnedRef.current = false
    }, [dealerStashTotal, hiredDealers])

    // =====================================================
    // 05 SPIELFUNKTIONEN
    // =====================================================
    const work = () => {
        setMoney((m) => m + 80)
        setEnergy((e) => Math.max(e - 40, 0))
        setHunger((h) => Math.max(h - 20, 0))
        setMood((m) => Math.max(m - 10, 0))
        advanceTime(TIME_COST_MINUTES.work)
    }

    const sleep = () => {
        const isLateNight = hour >= 2 && hour < 6
        setEnergy(isLateNight ? 70 : 100)
        setHealth((h) => Math.min(h + (isLateNight ? 3 : 10), 100))
        setMood((m) => Math.min(m + (isLateNight ? 3 : 10), 100))
        setHunger((h) => Math.max(h - 30, 0))
        advanceTime(TIME_COST_MINUTES.sleep)
        showNotice(
            isLateNight
                ? "😵 Du hast zu spät geschlafen – nicht besonders erholsam."
                : "😴 Guter, erholsamer Schlaf."
        )
    }

    const shower = () => {
        setMood((m) => Math.min(m + 10, 100))
        setEnergy((e) => Math.max(e - 5, 0))
        advanceTime(TIME_COST_MINUTES.shower)
    }

    const watchMovie = () => {
        setMood((m) =>
            Math.min(
                m +
                    20 +
                    (TV_ITEMS.find((t) => t.key === ownedTv)?.moodBonus ?? 0),
                100
            )
        )
        setEnergy((e) => Math.max(e - 10, 0))
        advanceTime(TIME_COST_MINUTES.watchMovie)
    }

    const eat = () => {
        if (fridgeStock < EAT_FRIDGE_COST) return
        setFridgeStock((f) => f - EAT_FRIDGE_COST)
        setHunger(100)
        setEnergy(100)
        setMood((m) => Math.min(m + 5, 100))
        advanceTime(TIME_COST_MINUTES.eat)
    }

    const sellStolenGoods = () => {
        if (stolenGoods <= 0) return
        const payout = Math.round(stolenGoods * FENCE_RATE)
        setMoney((m) => m + payout)
        setStolenGoods(0)
        showNotice(`🕵️ Diebesgut verkauft für ${payout} €.`)
    }

    const buyCar = (key: string) => {
        if (ownedCarLegit) return
        const item = CAR_TYPES.find((c) => c.key === key)
        if (!item) return
        if (money < item.price) return
        setMoney((m) => m - item.price)
        setOwnedCarLegit({ key })
        showNotice(
            `${item.emoji} ${item.label} gekauft! Steht jetzt in deiner Garage.`
        )
    }

    const sellCar = (stolen: boolean) => {
        const owned = stolen ? ownedCarStolen : ownedCarLegit
        if (!owned) return
        const item = CAR_TYPES.find((c) => c.key === owned.key)
        if (!item) return
        const payout = stolen
            ? Math.round(item.sellValue * FENCE_RATE)
            : item.sellValue
        setMoney((m) => m + payout)
        if (stolen) setOwnedCarStolen(null)
        else setOwnedCarLegit(null)
        showNotice(`${item.emoji} ${item.label} verkauft für ${payout} €.`)
    }

    const canStealCar = day !== lastCarTheftDay
    const startCarTheft = () => {
        if (!canStealCar) return
        carTheftTapsRef.current = 0
        setCarTheftTapsDone(0)
        setCarTheftTimeLeft(CAR_THEFT_DURATION_SECONDS)
        setCarTheftActive(true)
    }

    const tapCarTheft = () => {
        if (carTheftTapsRef.current >= CAR_THEFT_TAPS_NEEDED) return
        carTheftTapsRef.current += 1
        setCarTheftTapsDone(carTheftTapsRef.current)
        if (carTheftTapsRef.current >= CAR_THEFT_TAPS_NEEDED) {
            setCarTheftActive(false)
            setLastCarTheftDay(day)
            const roll = Math.random()
            const carKey =
                roll < 0.6
                    ? "kleinwagen"
                    : roll < 0.9
                      ? "mittelklasse"
                      : "luxuslimousine"
            const car = CAR_TYPES.find((c) => c.key === carKey)
            if (ownedCarStolen) {
                const oldItem = CAR_TYPES.find(
                    (c) => c.key === ownedCarStolen.key
                )
                if (oldItem) {
                    setMoney(
                        (m) => m + Math.round(oldItem.sellValue * FENCE_RATE)
                    )
                }
            }
            setOwnedCarStolen({ key: carKey })
            setSurveillanceUntilMinutes(
                gameMinutes + SURVEILLANCE_DURATION_MINUTES
            )
            setHeat((h) => Math.min(h + 1, MAX_HEAT))
            showNotice(
                `🚗 Auto geklaut! Ein ${car?.label} steht jetzt (heiß) in deiner Garage${
                    ownedCarStolen
                        ? " – dein altes geklautes Auto wurde direkt mitverkauft"
                        : ""
                } – beobachtet, also verkauf's lieber bald.`
            )
        }
    }

    React.useEffect(() => {
        if (!carTheftActive) return
        const countdown = window.setInterval(() => {
            setCarTheftTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [carTheftActive])

    React.useEffect(() => {
        if (carTheftActive && carTheftTimeLeft === 0) {
            setCarTheftActive(false)
            setLastCarTheftDay(day)
            setPoliceEncounterContext("cartheft")
            setPoliceEncounter(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carTheftTimeLeft, carTheftActive])

    const buyFromSupplier = (drug: string, grams: number) => {
        if (grams <= 0) return
        const alreadyBought = supplierBoughtThisWeek[drug] ?? 0
        const remainingThisWeek = Math.max(
            SUPPLIER_MAX_GRAMS_PER_WEEK - alreadyBought,
            0
        )
        if (remainingThisWeek <= 0) {
            showNotice(
                `🚫 Diese Woche schon ${SUPPLIER_MAX_GRAMS_PER_WEEK / 1000}kg ${DRUG_INFO[drug].label} gekauft – mehr gibt's erst nächste Woche.`
            )
            return
        }
        const cappedGrams = Math.min(grams, remainingThisWeek)
        const pricePerGram = buyPrices[drug] ?? DRUG_INFO[drug].buyRange[0]
        const price = Math.round(cappedGrams * pricePerGram)
        if (money < price) return
        setMoney((m) => m - price)
        setCarrying((c) => ({ ...c, [drug]: (c[drug] ?? 0) + cappedGrams }))
        setSupplierBoughtThisWeek((b) => ({
            ...b,
            [drug]: (b[drug] ?? 0) + cappedGrams,
        }))
        setLastSupplierDay(day)
        setJustLeftSupplier(true)
        advanceTime(TIME_COST_MINUTES.buyPackage)
        showNotice(
            cappedGrams < grams
                ? `${DRUG_INFO[drug].emoji} Nur noch ${cappedGrams}g ${DRUG_INFO[drug].label} diese Woche verfügbar, abgeholt für ${price} €.`
                : `${DRUG_INFO[drug].emoji} ${cappedGrams}g ${DRUG_INFO[drug].label} abgeholt für ${price} € – bring sie nach Hause und lager sie ein!`
        )
    }

    const depositMoney = (amount: number) => {
        if (amount <= 0) return
        const actual = Math.min(amount, money)
        if (actual <= 0) return
        setMoneySafe((s) => s + actual)
        setMoney((m) => m - actual)
    }

    const withdrawMoney = (amount: number) => {
        if (moneySafe < amount) return
        setMoneySafe((s) => s - amount)
        setMoney((m) => m + amount)
    }

    const takePackages = (drug: string, amount: number) => {
        if (amount <= 0) return
        if ((homeStash[drug] ?? 0) < amount) return
        if (totalOf(carrying) + amount > effectiveMaxCarry) return
        setHomeStash((s) => ({ ...s, [drug]: s[drug] - amount }))
        setCarrying((c) => ({ ...c, [drug]: (c[drug] ?? 0) + amount }))
        advanceTime(TIME_COST_MINUTES.takePackages)
    }

    const stashPackages = () => {
        if (totalOf(carrying) <= 0) return
        setHomeStash((s) => {
            const next = { ...s }
            for (const drug of DRUG_TYPES)
                next[drug] = (next[drug] ?? 0) + (carrying[drug] ?? 0)
            return next
        })
        setCarrying(emptyDrugRecord())
        advanceTime(TIME_COST_MINUTES.stashPackages)
    }

    const completeSale = (onCredit = false) => {
        const drug = sellingDrugType ?? "weed"
        const grams = customerDealGrams || CUSTOMER_DEAL_MIN_GRAMS
        const pricePerGram = sellPrices[drug] ?? DRUG_INFO[drug].sellRange[0]
        const charismaMultiplier =
            1 + (charismaLevel - 1) * CHARISMA_SELL_BONUS_PER_LEVEL
        const revenue =
            Math.round(pricePerGram * grams * charismaMultiplier) +
            (level - 1) * MONEY_PER_SALE_PER_LEVEL
        const carryingAtSaleTime = totalOf(carrying)

        setCarrying((c) => ({
            ...c,
            [drug]: Math.max((c[drug] ?? 0) - grams, 0),
        }))
        if (onCredit) {
            // Auf Pump: Geld gibt's erst später, dafür etwas Aufschlag
            const owed = Math.round(revenue * 1.25)
            const name =
                (customerRequestNpc
                    ? ALL_CONTACTS.find((f) => f.key === customerRequestNpc)
                          ?.name
                    : null) ?? `Kunde (${LOCATION_NAMES[location] ?? "Straße"})`
            addDebtor(name, owed)
            showNotice(
                `🤝 Auf Pump verkauft – ${name} schuldet dir ${owed} € (${CREDIT_DAYS} Tage).`
            )
        } else {
            setMoney((m) => m + revenue)
        }
        setEnergy((e) => Math.max(e - SELL_ENERGY_COST, 0))
        setTotalSales((t) => t + 1)
        advanceTime(TIME_COST_MINUTES.sellPackage)

        setCustomerRequest(false)
        setCustomerRequestAccepted(false)
        setCustomerRequestNpc(null)
        setCustomerDealDeadline(null)
        setCustomerMeetingSpot(null)
        setPhoneMessage(null)
        setSellingDrugType(null)
        showConfirmation(true)

        setHeat((h) => {
            const next = Math.min(h + 1, MAX_HEAT)
            if (next >= MAX_HEAT) {
                const partner = sparklyMatches.find((m) => m.relationship)
                if (partner) {
                    // Deine Freundin schafft einen Teil beiseite
                    setCarrying((cur) => {
                        const kept = { ...cur }
                        for (const drug of DRUG_TYPES) {
                            kept[drug] = Math.floor(
                                (kept[drug] ?? 0) * PARTNER_STASH_PROTECTION
                            )
                        }
                        return kept
                    })
                    showNotice(
                        `🙏 ${partner.name} hat einen Teil deiner Ware rechtzeitig verschwinden lassen.`
                    )
                } else {
                    setCarrying(emptyDrugRecord())
                }
                setMoney((m) => Math.floor(m / 2))
                setLocation(hasApartment ? "flur" : "street")
                showNotice(
                    "🚨 Polizei-Razzia! Deine mitgeführte Ware ist weg, die Hälfte deines Geldes auch."
                )
                startCourt(
                    carryingAtSaleTime >= HEAVY_SEVERITY_CARRYING_THRESHOLD
                        ? "heavy"
                        : "light"
                )
                return 2
            }
            return next
        })
    }

    const declineCustomerRequest = () => {
        setCustomerRequest(false)
        setCustomerRequestAccepted(false)
        setCustomerRequestNpc(null)
        setCustomerDealDeadline(null)
        setCustomerMeetingSpot(null)
        setPhoneMessage(null)
        showNotice("❌ Anfrage abgelehnt.")
    }

    const chatWithNpc = (key: string) => {
        const friend = ALL_CONTACTS.find((f) => f.key === key)
        if (!friend) return
        const currentLevel = npcFriendship[key] ?? 0
        const newLevel = Math.min(currentLevel + 5, 100)
        setNpcFriendship((f) => ({ ...f, [key]: newLevel }))
        setMood((m) => Math.min(m + 10, 100))
        setEnergy((e) => Math.max(e - 5, 0))
        advanceTime(30)
        setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)
        showNotice(`💬 Netter Chat mit ${friend.name}.`)
    }

    const pickRandomOutsideLocation = () =>
        OUTSIDE_LOCATIONS[Math.floor(Math.random() * OUTSIDE_LOCATIONS.length)]

    // Ein Treffen läuft jetzt als Session: ihr trefft euch an einem zufälligen
    // Ort und bleibt zusammen, bis du dich in ChatWave verabschiedest.
    // Es vergeht nur die Zeit, die ihr wirklich zusammen verbringt.
    const meetFriend = (key: string) => {
        const friend = ALL_CONTACTS.find((f) => f.key === key)
        if (!friend) return
        if (companions.includes(key)) {
            showNotice(`👥 ${friend.name} ist schon bei dir.`)
            return
        }
        // Nicht jeder hat immer Zeit – je besser die Freundschaft, desto eher
        const friendship = npcFriendship[key] ?? 0
        const availability = GROUP_AVAILABILITY_BASE + (friendship / 100) * 0.45
        if (Math.random() > availability) {
            advanceTime(10)
            showNotice(
                `📵 ${friend.name} hat gerade keine Zeit – vielleicht später.`
            )
            return
        }
        // Kommt jemand dazu, während du schon unterwegs bist?
        if (companions.length > 0) {
            setCompanions((list) => [...list, key])
            advanceTime(20)
            showNotice(`👥 ${friend.name} stößt zu euch dazu!`)
            return
        }
        // Zufälliger Treffpunkt irgendwo in der Stadt
        const meetSpots = [
            "park",
            "street",
            ...DISTRICT_SPOTS.map((s) => s.id),
            "nwzug",
        ].filter((s) => !isSpotBanned(s))
        const spot =
            meetSpots[Math.floor(Math.random() * meetSpots.length)] ?? "park"
        setCompanions([key])
        setCompanionSince(gameMinutes)
        // Anfahrt zum Treffpunkt
        advanceTime(20)
        showNotice(
            `🤝 Du triffst ${friend.name} – ihr seid jetzt zusammen unterwegs. Verabschieden kannst du dich in ChatWave.`
        )
        go(spot)
    }

    // Treffen beenden: Freundschaft und Laune richten sich danach, wie lange
    // ihr wirklich zusammen wart
    const sayGoodbyeToCompanion = () => {
        if (companions.length === 0) return
        const minutes = Math.max(
            gameMinutes - (companionSince ?? gameMinutes),
            0
        )
        const hours = minutes / 60
        const gain = Math.min(Math.round(hours * 6), 40)
        const names = companions.map(companionName).join(", ")
        setNpcFriendship((f) => {
            const next = { ...f }
            for (const k of companions) {
                if (k.startsWith("date:") || k.startsWith("crew_")) continue
                next[k] = Math.min((next[k] ?? 0) + gain, 100)
            }
            return next
        })
        // Dealer: Loyalität statt Freundschaft
        const crewKeys = companions.filter((k) => k.startsWith("crew_"))
        if (crewKeys.length > 0) {
            setCrew((list) =>
                list.map((m) =>
                    crewKeys.includes(m.key)
                        ? { ...m, loyalty: Math.min(m.loyalty + gain, 100) }
                        : m
                )
            )
        }
        // Dates: Beziehung wächst mit der gemeinsamen Zeit
        const dateNames = companions
            .filter((k) => k.startsWith("date:"))
            .map((k) => k.slice(5))
        if (dateNames.length > 0 && hours >= 1) {
            setSparklyMatches((matches) =>
                matches.map((m) =>
                    dateNames.includes(m.name)
                        ? { ...m, level: Math.min(m.level + 1, 10) }
                        : m
                )
            )
        }
        // In der Gruppe macht es mehr Spaß
        const groupBonus = 1 + (companions.length - 1) * 0.3
        setMood((m) =>
            Math.min(m + Math.min(Math.round(hours * 8 * groupBonus), 40), 100)
        )
        setEnergy((e) => Math.max(e - Math.min(Math.round(hours * 5), 25), 0))
        setCharismaXP((xp) => xp + CHARISMA_XP_MEET * companions.length)
        const bestLevel = Math.max(
            ...companions
                .filter((k) => !k.startsWith("date:"))
                .map((k) => (npcFriendship[k] ?? 0) + gain),
            0
        )
        const hoursText =
            hours >= 1
                ? `${Math.floor(hours)}h ${minutes % 60}min`
                : `${minutes}min`
        showNotice(
            `👋 ${hoursText} mit ${names} verbracht. Bis zum nächsten Mal!`
        )
        setCompanions([])
        setCompanionSince(null)
        setDateWish(null)
        setDateWishDone(false)
        setDateGiftsGiven([])
    }

    const groupHangout = () => {
        setNpcFriendship((f) => {
            const next = { ...f }
            for (const friend of ALL_CONTACTS) {
                next[friend.key] = Math.min((next[friend.key] ?? 0) + 8, 100)
            }
            return next
        })
        setMood((m) => Math.min(m + 25, 100))
        setEnergy((e) => Math.max(e - 15, 0))
        setCharismaXP((xp) => xp + CHARISMA_XP_GROUP)
        advanceTime(120)
        showNotice(
            "👥 Ihr trefft euch alle in der Tiefgarage – ein lockerer Abend mit der ganzen Truppe."
        )
        go("freunde_chillen")
    }

    const [pixgramFeedNpc] = React.useState(
        () => NPC_FRIENDS[Math.floor(Math.random() * NPC_FRIENDS.length)].key
    )
    const likePixgramPost = (key: string) => {
        const friend = ALL_CONTACTS.find((f) => f.key === key)
        if (!friend) return
        const currentLevel = npcFriendship[key] ?? 0
        setNpcFriendship((f) => ({
            ...f,
            [key]: Math.min(currentLevel + 3, 100),
        }))
        setMood((m) => Math.min(m + 5, 100))
        setCharismaXP((xp) => xp + CHARISMA_XP_LIKE)
        advanceTime(10)
        showNotice(`📸 ${friend.name}s Beitrag geliked.`)
    }

    const payClubEntry = () => {
        if (money < CLUB_ENTRY_PRICE) return
        setMoney((m) => m - CLUB_ENTRY_PRICE)
        setClubEntryDay(day)
        setMood((m) => Math.min(m + 10, 100))
        showNotice("🎟 Eintritt bezahlt – willkommen im Club!")
    }

    // Kiosk-Kassiererin: kennenlernen & Freundschaft aufbauen
    const cashierLevel = npcFriendship[KIOSK_CASHIER.key] ?? 0
    const cashierKnown = unlockedContacts.includes(KIOSK_CASHIER.key)
    const chatWithCashier = () => {
        if (!cashierKnown) {
            setUnlockedContacts((list) => [...list, KIOSK_CASHIER.key])
            setNpcFriendship((f) => ({ ...f, [KIOSK_CASHIER.key]: 10 }))
            setMood((m) => Math.min(m + 10, 100))
            setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)
            advanceTime(20)
            showNotice(
                `🤝 ${KIOSK_CASHIER.name} kennengelernt – sie steht jetzt in deinem ChatWave.`
            )
            return
        }
        const next = Math.min(cashierLevel + 8, 100)
        setNpcFriendship((f) => ({ ...f, [KIOSK_CASHIER.key]: next }))
        setMood((m) => Math.min(m + 12, 100))
        setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)
        advanceTime(30)
        if (
            next >= KIOSK_CASHIER_LOVE_LEVEL &&
            cashierLevel < KIOSK_CASHIER_LOVE_LEVEL
        ) {
            showNotice(
                `💕 Zwischen dir und ${KIOSK_CASHIER.name} funkt es – du kannst sie jetzt einladen.`
            )
        } else {
            showNotice(`💬 Schön mit ${KIOSK_CASHIER.name} gequatscht.`)
        }
    }

    // Sobald die Freundschaft hoch genug ist, taucht Melike bei den Dates auf –
    // egal ob die Freundschaft am Kiosk oder über ChatWave gewachsen ist
    React.useEffect(() => {
        if (!cashierKnown) return
        if (cashierLevel < KIOSK_CASHIER_LOVE_LEVEL) return
        setSparklyMatches((matches) =>
            matches.some((m) => m.name === KIOSK_CASHIER.name)
                ? matches
                : [
                      ...matches,
                      {
                          name: KIOSK_CASHIER.name,
                          level: 5,
                          metInPerson: true,
                          loyal: true,
                      },
                  ]
        )
    }, [cashierKnown, cashierLevel])

    // Merkt sich Bilder, die nicht geladen werden konnten (z.B. noch nicht
    // hochgeladen), damit statt einer leeren Fläche ein Hinweis erscheint
    const [failedImages, setFailedImages] = React.useState<
        Record<string, boolean>
    >({})
    const markImageFailed = (file: string) =>
        setFailedImages((f) => (f[file] ? f : { ...f, [file]: true }))

    // Begleiter können Kontakte (Key) oder Dates ("date:Name") sein
    const companionName = (entry: string): string => {
        if (entry.startsWith("date:")) return entry.slice(5)
        const contact = ALL_CONTACTS.find((f) => f.key === entry)
        if (contact) return contact.name
        return crew.find((m) => m.key === entry)?.name ?? "?"
    }

    // Mit einem Date gemeinsam ausgehen – ihr bleibt zusammen, bis du dich
    // in ChatWave verabschiedest
    const goOutWithDate = (name: string) => {
        const entry = `date:${name}`
        if (companions.includes(entry)) {
            showNotice(`👥 ${name} ist schon bei dir.`)
            return
        }
        const match = sparklyMatches.find((m) => m.name === name)
        const availability =
            GROUP_AVAILABILITY_BASE + ((match?.level ?? 1) / 10) * 0.45
        if (Math.random() > availability) {
            advanceTime(10)
            showNotice(`📵 ${name} hat gerade keine Zeit.`)
            return
        }
        if (companions.length > 0) {
            setCompanions((list) => [...list, entry])
            advanceTime(20)
            showNotice(`👥 ${name} kommt dazu!`)
            return
        }
        // Schöne Orte für ein Date
        const dateSpots = [
            { id: "bockenheim_platz", label: "ins Café Warte" },
            { id: "sachsenhausen_platz", label: "in die Schweizer Straße" },
            { id: "bahnhofsviertel_hof", label: "in den Club Elbe" },
            { id: "sachsenhausen_hof", label: "in die Ebbelwoi Stubb" },
            { id: "nwzug", label: "essen ins Nordwestzentrum" },
            { id: "park", label: "in den Park" },
        ].filter((s) => !isSpotBanned(s.id))
        const spot = dateSpots[
            Math.floor(Math.random() * dateSpots.length)
        ] ?? {
            id: "park",
            label: "in den Park",
        }
        // Sie hat einen Wunsch für den Abend
        const wish = DATE_WISHES[Math.floor(Math.random() * DATE_WISHES.length)]
        setDateWish(wish.key)
        setDateWishDone(false)
        setDateGiftsGiven([])
        setCompanions([entry])
        setCompanionSince(gameMinutes)
        advanceTime(20)
        showNotice(`💕 ${name}: „${wish.text}“`)
        go(spot.id)
    }

    // Erfüllt sich der Wunsch am aktuellen Ort?
    const currentDateWish = DATE_WISHES.find((w) => w.key === dateWish)
    React.useEffect(() => {
        if (!currentDateWish || dateWishDone) return
        if (!companions.some((k) => k.startsWith("date:"))) return
        if (!currentDateWish.locations.includes(location)) return
        setDateWishDone(true)
        const names = companions
            .filter((k) => k.startsWith("date:"))
            .map((k) => k.slice(5))
        setSparklyMatches((list) =>
            list.map((m) =>
                names.includes(m.name)
                    ? {
                          ...m,
                          level: Math.min(m.level + currentDateWish.reward, 10),
                      }
                    : m
            )
        )
        setMood((m) => Math.min(m + 15, 100))
        showNotice(`💕 Genau das wollte sie – der Abend läuft richtig gut!`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, dateWish, dateWishDone, companions])

    // Sie sagt Bescheid, wenn sie langsam los will
    const dateLeaveNotedRef = React.useRef(false)
    React.useEffect(() => {
        if (!companions.some((k) => k.startsWith("date:"))) {
            dateLeaveNotedRef.current = false
            return
        }
        if (companionSince === null) return
        if (gameMinutes - companionSince < DATE_DURATION_MINUTES) return
        if (dateLeaveNotedRef.current) return
        dateLeaveNotedRef.current = true
        const name = companions
            .filter((k) => k.startsWith("date:"))
            .map((k) => k.slice(5))
            .join(" & ")
        showNotice(
            `💕 ${name}: „Ich muss langsam los – oder wir gehen zu dir?“`
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameMinutes, companions])

    // Ein Geschenk unterwegs machen
    const giveDateGift = (giftKey: string) => {
        const gift = DATE_GIFTS.find((g) => g.key === giftKey)
        if (!gift || money < gift.price) return
        if (dateGiftsGiven.includes(giftKey)) return
        setMoney((m) => m - gift.price)
        setDateGiftsGiven((list) => [...list, giftKey])
        const names = companions
            .filter((k) => k.startsWith("date:"))
            .map((k) => k.slice(5))
        setSparklyMatches((list) =>
            list.map((m) =>
                names.includes(m.name)
                    ? { ...m, level: Math.min(m.level + gift.reward, 10) }
                    : m
            )
        )
        setMood((m) => Math.min(m + 10, 100))
        advanceTime(15)
        showNotice(`🎁 ${names.join(" & ")}: „Das ist lieb von dir!“`)
    }

    // Nach ein paar Stunden will sie los – oder mit zu dir
    const dateWantsToLeave =
        companions.some((k) => k.startsWith("date:")) &&
        companionSince !== null &&
        gameMinutes - companionSince >= DATE_DURATION_MINUTES

    // Zusammen zu dir nach Hause – führt direkt zur Szene und zum Minispiel
    const takeDateHome = () => {
        const dateEntry = companions.find((k) => k.startsWith("date:"))
        if (!dateEntry) return
        const name = dateEntry.slice(5)
        const match = sparklyMatches.find((m) => m.name === name)
        // Kommt sie mit? Hängt von der Beziehung und dem Abend ab
        const chance =
            0.3 + (match?.level ?? 1) * 0.06 + (dateWishDone ? 0.2 : 0)
        advanceTime(30)
        if (Math.random() > chance) {
            showNotice(`💔 ${name}: „Heute lieber nicht, aber es war schön.“`)
            sayGoodbyeToCompanion()
            return
        }
        setCompanions([])
        setCompanionSince(null)
        setDateWish(null)
        go(hasApartment ? "wohnzimmer" : "street")
        setDateVisitSceneActive(true)
        window.setTimeout(() => {
            setDateVisitSceneActive(false)
            startIntimacy(name)
        }, ESCORT_IMAGE_REAL_MS)
    }

    // Mit einem Lieblings-Kontakt gemeinsam weggehen – ihr landet zusammen
    // an einem echten Ort in der Stadt
    const hangOutWithFriend = (key: string) => {
        const friend = ALL_CONTACTS.find((f) => f.key === key)
        if (!friend) return
        const spots = [
            { id: "bahnhofsviertel_hof", label: "im Club Elbe" },
            { id: "bahnhofsviertel_ecke", label: "in der Shisha Lounge" },
            { id: "sachsenhausen_hof", label: "in der Ebbelwoi Stubb" },
            { id: "nwzug", label: "im Nordwestzentrum" },
            { id: "park", label: "im Park" },
            { id: "bockenheim_platz", label: "an der Bockenheimer Warte" },
        ].filter((s) => !isSpotBanned(s.id))
        const spot = spots[Math.floor(Math.random() * spots.length)] ?? {
            id: "park",
            label: "im Park",
        }
        if (companions.length > 0) {
            showNotice(
                "👥 Du bist gerade schon unterwegs – verabschiede dich erst."
            )
            return
        }
        setCompanions([key])
        setCompanionSince(gameMinutes)
        advanceTime(20)
        showNotice(
            `🎉 Du gehst mit ${friend.name} ${spot.label} – verabschieden kannst du dich in ChatWave.`
        )
        go(spot.id)
    }

    // Kunden, die auf Pump gekauft haben

    // Rechnung mit Begleitung: teurer, aber je nach Verhältnis zahlt auch
    // mal der andere oder ihr teilt euch
    const payWithCompany = (basePrice: number, label: string) => {
        if (companions.length === 0) {
            if (money < basePrice) return false
            setMoney((m) => m - basePrice)
            return true
        }
        const total = basePrice * (companions.length + 1)
        // Bestes Verhältnis in der Runde entscheidet
        const best = Math.max(
            ...companions.map((k) => {
                if (k.startsWith("date:"))
                    return (
                        (sparklyMatches.find((m) => m.name === k.slice(5))
                            ?.level ?? 1) * 10
                    )
                if (k.startsWith("crew_"))
                    return crew.find((m) => m.key === k)?.loyalty ?? 0
                return npcFriendship[k] ?? 0
            }),
            0
        )
        const roll = Math.random()
        const names = companions.map(companionName).join(" & ")
        // Hohe Verbundenheit: gute Chance, dass der andere übernimmt
        if (roll < best / 250) {
            showNotice(`🍻 ${names} hat ${label} übernommen (${total} €).`)
            return true
        }
        // Mittlere Chance: geteilt
        if (roll < 0.5 + best / 300) {
            const share = Math.round(total / (companions.length + 1))
            if (money < share) {
                showNotice("💸 Du hast gerade nicht genug Geld.")
                return false
            }
            setMoney((m) => m - share)
            showNotice(
                `🤝 Rechnung geteilt – du zahlst ${share} € von ${total} €.`
            )
            return true
        }
        // Sonst zahlst du alles
        if (money < total) {
            showNotice(`💸 Für alle zusammen brauchst du ${total} €.`)
            return false
        }
        setMoney((m) => m - total)
        showNotice(`💸 Du hast für alle bezahlt (${total} €).`)
        return true
    }

    // ---- PixGram: Follower und Posts ----
    const canPost = gameMinutes - lastPostMinute >= PIXGRAM_POST_COOLDOWN

    const postToPixgram = (typeKey: string) => {
        const type = PIXGRAM_POST_TYPES.find((t) => t.key === typeKey)
        if (!type || !canPost) return
        if (type.needsCar && !ownsAnyCar) {
            showNotice("🚗 Du hast gar kein Auto zum Angeben.")
            return
        }
        setLastPostMinute(gameMinutes)
        advanceTime(20)
        // Follower je nach Style, Level und Art des Posts
        const gained = Math.max(
            1,
            Math.round(
                PIXGRAM_FOLLOWER_BASE *
                    (1 + styleScore * type.styleFactor * 0.08) *
                    (1 + (level - 1) * 0.05) *
                    (0.7 + Math.random() * 0.6)
            )
        )
        setFollowers((f) => f + gained)
        setMood((m) => Math.min(m + type.moodGain, 100))
        setCharismaXP((xp) => xp + CHARISMA_XP_LIKE)
        // Mit Geld angeben zieht auch die falschen Leute an
        if (type.risky && Math.random() < 0.35) {
            setHeat((h) => Math.min(h + 1, MAX_HEAT))
            showNotice(
                `📸 +${gained} Follower – aber jemand hat den Post der Polizei gemeldet.`
            )
            return
        }
        showNotice(`📸 Post ist online – ${gained} neue Follower!`)
    }

    const claimSponsorDeal = () => {
        if (followers < PIXGRAM_SPONSOR_THRESHOLD) return
        if (sponsorDayClaimed === day) {
            showNotice("💼 Heute schon kassiert – morgen wieder.")
            return
        }
        const pay = Math.round(PIXGRAM_SPONSOR_PAY * (1 + followers / 2000))
        setMoney((m) => m + pay)
        setSponsorDayClaimed(day)
        advanceTime(60)
        showNotice(`💼 Werbedeal abgewickelt – ${pay} € verdient.`)
    }

    // ---- WebGo: Nachrichten und Kleinanzeigen ----
    const [webgoSection, setWebgoSection] = React.useState<string | null>(null)

    // Täglich neue Schlagzeile
    React.useEffect(() => {
        if (newsDay === day) return
        setNewsDay(day)
        setNewsIndex(Math.floor(Math.random() * WEBGO_NEWS.length))
        // Anzeigen alle paar Tage auffrischen
        if (day - classifiedsDay >= WEBGO_REFRESH_DAYS) {
            setClassifiedsDay(day)
            setBoughtClassifieds([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day])

    const currentNews = WEBGO_NEWS[newsIndex] ?? WEBGO_NEWS[0]

    const buyClassified = (key: string) => {
        const item = WEBGO_CLASSIFIEDS.find((i) => i.key === key)
        if (!item || boughtClassifieds.includes(key)) return
        if (money < item.price) return
        setMoney((m) => m - item.price)
        setBoughtClassifieds((list) => [...list, key])
        if (item.mood) setMood((m) => Math.min(m + item.mood, 100))
        if (item.style) setHasKette(true)
        advanceTime(45)
        showNotice(`🏷 ${item.label} gekauft – günstiger als im Laden.`)
    }

    // ---- Universelles Aktions-Minispiel ----
    const [actionGame, setActionGame] = React.useState<string | null>(null)
    const [actionTaps, setActionTaps] = React.useState(0)
    const [actionTimeLeft, setActionTimeLeft] = React.useState(0)
    const actionTapsRef = React.useRef(0)
    const actionDoneRef = React.useRef<((quality: number) => void) | null>(null)

    // Startet ein Minispiel; danach wird onDone mit der Leistung (0..1+) gerufen
    const playAction = (key: string, onDone: (quality: number) => void) => {
        const game = ACTION_GAMES[key]
        if (!game) {
            onDone(1)
            return
        }
        actionTapsRef.current = 0
        actionDoneRef.current = onDone
        setActionTaps(0)
        setActionTimeLeft(game.seconds)
        setActionGame(key)
    }

    const tapAction = () => {
        actionTapsRef.current += 1
        setActionTaps(actionTapsRef.current)
    }

    React.useEffect(() => {
        if (!actionGame) return
        const t = window.setInterval(() => {
            setActionTimeLeft((v) => Math.max(v - 1, 0))
        }, 1000)
        return () => window.clearInterval(t)
    }, [actionGame])

    React.useEffect(() => {
        if (!actionGame || actionTimeLeft > 0) return
        const game = ACTION_GAMES[actionGame]
        const raw = actionTapsRef.current / game.taps
        // Mit Begleitung macht es mehr her
        const quality =
            Math.min(raw, 1) *
            (companions.length > 0 ? 1 + ACTION_GAME_COMPANY_BONUS : 1)
        setActionGame(null)
        const cb = actionDoneRef.current
        actionDoneRef.current = null
        if (cb) cb(quality)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actionTimeLeft, actionGame])

    // ---- Gespräch vor Ort, wenn jemand dabei ist ----
    const [talkOpen, setTalkOpen] = React.useState(false)
    const [talkInput, setTalkInput] = React.useState("")
    const [talkLog, setTalkLog] = React.useState<
        { from: "me" | "them"; text: string }[]
    >([])

    // Vorschlag der Begleitung
    const [companionSuggestion, setCompanionSuggestion] = React.useState<
        string | null
    >(null)
    const lastSuggestionRef = React.useRef(0)
    React.useEffect(() => {
        if (companions.length === 0) {
            setCompanionSuggestion(null)
            return
        }
        if (
            gameMinutes - lastSuggestionRef.current <
            COMPANION_SUGGESTION_INTERVAL
        )
            return
        lastSuggestionRef.current = gameMinutes
        const options = COMPANION_SUGGESTIONS.filter(
            (s) => s.id !== location && !isSpotBanned(s.id)
        )
        if (options.length === 0) return
        const pick = options[Math.floor(Math.random() * options.length)]
        setCompanionSuggestion(pick.id)
        const who = companions.map(companionName).join(" & ")
        showNotice(`💬 ${who}: „${pick.text}“`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameMinutes, companions])

    // Folgst du dem Vorschlag, freut sich die Begleitung
    React.useEffect(() => {
        if (!companionSuggestion) return
        if (location !== companionSuggestion) return
        setCompanionSuggestion(null)
        boostCompanions(COMPANION_SUGGESTION_REWARD)
        setMood((m) => Math.min(m + 10, 100))
        const who = companions.map(companionName).join(" & ")
        showNotice(`😊 ${who}: „Cool dass wir hergegangen sind!“`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, companionSuggestion])

    // Etwas zur Begleitung sagen – gleiche Erkennung wie im Chat
    const sayToCompanion = () => {
        const text = talkInput.trim()
        if (!text || companions.length === 0) return
        const entry = companions[0]
        const isDate = entry.startsWith("date:")
        const name = companionName(entry)
        const intent = detectChatIntent(text)
        const value = isDate
            ? (sparklyMatches.find((m) => m.name === name)?.level ?? 1) * 10
            : entry.startsWith("crew_")
              ? (crew.find((m) => m.key === entry)?.loyalty ?? 0)
              : (npcFriendship[entry] ?? 0)
        const tier = relationTier(value)
        const pool = CHAT_REPLIES[intent][tier]
        const reply = pool[Math.floor(Math.random() * pool.length)]

        let effect = CHAT_EFFECTS[intent][tier]
        // Persönlich wirkt stärker als geschrieben
        if (intent === "kompliment" || intent === "flirt") {
            effect = Math.round(
                effect * 1.5 + (charismaLevel - 1) * 0.5 + styleScore * 0.15
            )
        }

        setTalkLog((log) => [
            ...log,
            { from: "me", text },
            { from: "them", text: reply },
        ])
        setTalkInput("")
        advanceTime(10)
        setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)

        if (isDate) {
            setSparklyMatches((list) =>
                list.map((m) =>
                    m.name === name
                        ? {
                              ...m,
                              level: Math.max(
                                  1,
                                  Math.min(m.level + Math.round(effect / 5), 10)
                              ),
                          }
                        : m
                )
            )
        } else if (entry.startsWith("crew_")) {
            setCrew((list) =>
                list.map((m) =>
                    m.key === entry
                        ? {
                              ...m,
                              loyalty: Math.max(
                                  0,
                                  Math.min(m.loyalty + effect, 100)
                              ),
                          }
                        : m
                )
            )
        } else {
            boostCompanions(effect)
        }

        if (intent === "beleidigung") {
            setMood((m) => Math.max(m - 5, 0))
        }

        // Verabschieden
        if (intent === "gehen") {
            window.setTimeout(() => {
                setTalkOpen(false)
                setTalkLog([])
                sayGoodbyeToCompanion()
            }, 900)
        }

        // Mit zu dir nehmen
        if (intent === "mitkommen" && tier === "high") {
            window.setTimeout(() => {
                setTalkOpen(false)
                setTalkLog([])
                if (isDate) {
                    takeDateHome()
                } else {
                    setCompanions([])
                    setCompanionSince(null)
                    go(hasApartment ? "wohnzimmer" : "street")
                    showNotice(`🏠 ${name} kommt mit zu dir.`)
                }
            }, 900)
        }
    }

    // ---- Chat mit Schlüsselwort-Erkennung ----
    const [chatOpenWith, setChatOpenWith] = React.useState<string | null>(null)
    const [chatInput, setChatInput] = React.useState("")
    const [chatLog, setChatLog] = React.useState<
        Record<string, { from: "me" | "them"; text: string }[]>
    >({})

    // Verhältniswert für eine Person (Kontakt oder Date)
    const relationValueOf = (key: string) => {
        if (key.startsWith("date:")) {
            const m = sparklyMatches.find((x) => x.name === key.slice(5))
            return (m?.level ?? 1) * 10
        }
        return npcFriendship[key] ?? 0
    }

    const sendChatMessage = () => {
        const text = chatInput.trim()
        if (!text || !chatOpenWith) return
        const key = chatOpenWith
        const name = key.startsWith("date:")
            ? key.slice(5)
            : (ALL_CONTACTS.find((f) => f.key === key)?.name ?? "?")
        const intent = detectChatIntent(text)
        const value = relationValueOf(key)
        const tier = relationTier(value)

        // Antwort aussuchen
        const pool = CHAT_REPLIES[intent][tier]
        let reply = pool[Math.floor(Math.random() * pool.length)]

        // Wirkung aufs Verhältnis
        let effect = CHAT_EFFECTS[intent][tier]
        // Charme und Style helfen beim Flirten und bei Komplimenten
        if (intent === "flirt" || intent === "kompliment") {
            effect += Math.round((charismaLevel - 1) * 0.5 + styleScore * 0.15)
        }

        // Treffen-Anfrage: kann direkt zu einem Treffen führen
        let startsMeeting = false
        if (intent === "treffen") {
            const chance = 0.2 + value / 150 + (charismaLevel - 1) * 0.03
            startsMeeting = Math.random() < chance
            if (!startsMeeting) {
                reply =
                    CHAT_REPLIES.treffen.low[
                        Math.floor(
                            Math.random() * CHAT_REPLIES.treffen.low.length
                        )
                    ]
            }
        }

        // Flirt bei hohem Verhältnis kann ein Date auslösen
        let becomesDate = false
        if (
            intent === "flirt" &&
            tier === "high" &&
            !key.startsWith("date:") &&
            !sparklyMatches.some((m) => m.name === name)
        ) {
            becomesDate = Math.random() < 0.5 + styleScore * 0.01
        }

        setChatLog((log) => ({
            ...log,
            [key]: [
                ...(log[key] ?? []),
                { from: "me", text },
                { from: "them", text: reply },
            ],
        }))
        setChatInput("")
        advanceTime(10)
        setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)

        // Verhältnis anpassen
        if (key.startsWith("date:")) {
            setSparklyMatches((list) =>
                list.map((m) =>
                    m.name === name
                        ? {
                              ...m,
                              level: Math.max(
                                  1,
                                  Math.min(m.level + Math.round(effect / 5), 10)
                              ),
                          }
                        : m
                )
            )
        } else {
            setNpcFriendship((f) => ({
                ...f,
                [key]: Math.max(0, Math.min((f[key] ?? 0) + effect, 100)),
            }))
        }

        if (intent === "beleidigung") {
            setMood((m) => Math.max(m - 5, 0))
        }

        if (becomesDate) {
            setSparklyMatches((list) => [
                ...list,
                { name, level: 3, metInPerson: true },
            ])
            window.setTimeout(
                () => showNotice(`💕 Zwischen dir und ${name} läuft was!`),
                400
            )
        }

        if (startsMeeting) {
            window.setTimeout(() => {
                closePhone()
                setChatOpenWith(null)
                if (key.startsWith("date:")) {
                    goOutWithDate(name)
                } else {
                    meetFriend(key)
                }
            }, 900)
        }
    }

    // Gemeinsame Aktivitäten – nur wenn jemand dabei ist
    const withCompany = companions.length > 0
    const companyNames = companions.map(companionName).join(" & ")
    // Freundschaft bzw. Beziehung aller Begleiter etwas anheben
    const boostCompanions = (amount: number) => {
        setNpcFriendship((f) => {
            const next = { ...f }
            for (const k of companions) {
                if (k.startsWith("date:")) continue
                next[k] = Math.min((next[k] ?? 0) + amount, 100)
            }
            return next
        })
    }

    const watchMovieTogether = () => {
        setMood((m) =>
            Math.min(
                m +
                    32 +
                    (TV_ITEMS.find((t) => t.key === ownedTv)?.moodBonus ?? 0),
                100
            )
        )
        setEnergy((e) => Math.max(e - 8, 0))
        boostCompanions(6)
        advanceTime(120)
        showNotice(`📺 Film mit ${companyNames} geschaut – war lustig.`)
    }

    const playGamesTogether = () => {
        playAction("zocken", (q) => {
            const konsole =
                KONSOLE_ITEMS.find((k) => k.key === ownedKonsole)?.moodBonus ??
                0
            setMood((m) =>
                Math.min(m + Math.round((28 + konsole) * (1 + q * 0.6)), 100)
            )
            setEnergy((e) => Math.max(e - 12, 0))
            boostCompanions(6 + Math.round(q * 4))
            advanceTime(90)
            showNotice(
                q >= 0.8
                    ? `🎮 Du hast ${companyNames} abgezogen – große Klasse!`
                    : `🎮 Zusammen mit ${companyNames} gezockt.`
            )
        })
    }

    const smokeTogether = () => {
        if (cigarettes <= 0) return
        setCigarettes((n) => Math.max(n - companions.length - 1, 0))
        setEnergy((e) => Math.min(e + SMOKE_ENERGY_BOOST, 100))
        setMood((m) => Math.min(m + 12, 100))
        boostCompanions(3)
        advanceTime(15)
        setSmokeEffect(true)
        window.setTimeout(() => setSmokeEffect(false), SMOKE_FILTER_DURATION_MS)
        showNotice(`🚬 Eine mit ${companyNames} geraucht.`)
    }

    const orderFoodTogether = () => {
        const price = 12 * (companions.length + 1)
        if (money < price) {
            showNotice(`💸 Dafür brauchst du ${price} €.`)
            return
        }
        setMoney((m) => m - price)
        setHunger((h) => Math.min(h + 50, 100))
        setEnergy((e) => Math.min(e + 20, 100))
        setMood((m) => Math.min(m + 25, 100))
        boostCompanions(8)
        advanceTime(75)
        showNotice(
            `🍕 Mit ${companyNames} was bestellt und gequatscht (${price} €).`
        )
    }

    // Deine Begleitung meldet sich ab und zu zu Wort
    const lastLineMinuteRef = React.useRef(0)
    React.useEffect(() => {
        if (companions.length === 0) return
        if (gameMinutes - lastLineMinuteRef.current < COMPANION_LINE_INTERVAL)
            return
        lastLineMinuteRef.current = gameMinutes
        const entry = companions[Math.floor(Math.random() * companions.length)]
        const isDate = entry.startsWith("date:")
        const name = companionName(entry)
        const pool = isDate
            ? (DATE_LINES[location] ?? DATE_LINES.default)
            : (COMPANION_LINES[location] ?? COMPANION_LINES.default)
        const line = pool[Math.floor(Math.random() * pool.length)]
        showNotice(`${isDate ? "💕" : "💬"} ${name}: „${line}“`)
    }, [gameMinutes, companions, location])

    // Gute Gesellschaft hebt die Stimmung, während ihr unterwegs seid
    const lastCompanionMoodHourRef = React.useRef(Math.floor(gameMinutes / 60))
    React.useEffect(() => {
        if (companions.length === 0) return
        const h = Math.floor(gameMinutes / 60)
        if (h <= lastCompanionMoodHourRef.current) return
        lastCompanionMoodHourRef.current = h
        // Nur bei Leuten, die man auch mag
        const best = Math.max(
            ...companions.map((k) =>
                k.startsWith("date:")
                    ? (sparklyMatches.find((m) => m.name === k.slice(5))
                          ?.level ?? 1) * 10
                    : (npcFriendship[k] ?? 0)
            ),
            0
        )
        if (best < 30) return
        setMood((m) => Math.min(m + COMPANION_MOOD_PER_HOUR, 100))
    }, [gameMinutes, companions])

    // ---- Crew: Ausgehen, Verrat, Aufträge ----
    // Verräter sind weder aktiv noch einsatzbereit
    const activeCrew = crew.filter(
        (m) => !m.traitor && (!m.jailUntilDay || day >= m.jailUntilDay)
    )
    const jailedCrew = crew.filter(
        (m) => !m.traitor && m.jailUntilDay && day < m.jailUntilDay
    )
    const exDealers = crew.filter((m) => m.traitor)

    // Crew und Dealer-Zahl abgleichen (alte Spielstände hatten noch keine Namen)
    React.useEffect(() => {
        const activeCount = crew.filter(
            (m) => !m.traitor && (!m.jailUntilDay || day >= m.jailUntilDay)
        ).length
        if (activeCount === hiredDealers) return
        if (activeCount < hiredDealers) {
            // Fehlende Leute nachtragen, damit alle einen Namen haben
            const missing = hiredDealers - activeCount
            setCrew((list) => {
                const used = list.map((m) => m.name)
                const free = DEALER_NAMES.filter((n) => !used.includes(n))
                const added = []
                for (let i = 0; i < missing; i++) {
                    added.push({
                        key: `crew_sync_${Date.now()}_${i}`,
                        name: free[i] ?? `Dealer ${list.length + i + 1}`,
                        districtId: null,
                        loyalty: 30 + Math.round(Math.random() * 20),
                    })
                }
                return [...list, ...added]
            })
        } else {
            // Zu viele in der Liste – Zahl anpassen
            setHiredDealers(activeCount)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hiredDealers, crew, day])

    // Einen Dealer entlassen
    const fireCrewMember = (key: string) => {
        const member = crew.find((m) => m.key === key)
        if (!member) return
        setCrew((list) => list.filter((m) => m.key !== key))
        setHiredDealers((n) => Math.max(n - 1, 0))
        if (member.districtId) {
            setDistrictDealers((d) => ({
                ...d,
                [member.districtId!]: Math.max(
                    (d[member.districtId!] ?? 1) - 1,
                    0
                ),
            }))
        }
        // Wer rausfliegt, ist sauer – bei geringer Loyalität nimmt er was mit
        if (member.loyalty < 40 && Math.random() < 0.4) {
            const grab = Math.round(50 + Math.random() * 150)
            setMoney((m) => Math.max(m - grab, 0))
            showNotice(
                `😡 ${member.name} ist rausgeflogen – hat aber noch ${grab} € mitgehen lassen.`
            )
        } else {
            showNotice(`👋 ${member.name} arbeitet nicht mehr für dich.`)
        }
    }

    // Mit einem Dealer ausgehen – wer zahlt, hängt vom Verhältnis ab
    const goOutWithCrew = (key: string) => {
        const member = crew.find((m) => m.key === key)
        if (!member) return
        if (member.jailUntilDay && day < member.jailUntilDay) {
            showNotice(
                `🔒 ${member.name} sitzt noch ${member.jailUntilDay - day} Tage.`
            )
            return
        }
        if (companions.includes(key)) {
            showNotice(`👥 ${member.name} ist schon bei dir.`)
            return
        }
        if (
            Math.random() >
            GROUP_AVAILABILITY_BASE + (member.loyalty / 100) * 0.45
        ) {
            advanceTime(10)
            showNotice(`📵 ${member.name} hat gerade keine Zeit.`)
            return
        }
        if (companions.length > 0) {
            setCompanions((list) => [...list, key])
            advanceTime(20)
            showNotice(`👥 ${member.name} stößt dazu!`)
            return
        }
        const spots = [
            "park",
            "street",
            "bahnhofsviertel_hof",
            "sachsenhausen_hof",
            "nwzug",
        ].filter((s) => !isSpotBanned(s))
        const spot = spots[Math.floor(Math.random() * spots.length)] ?? "park"
        setCompanions([key])
        setCompanionSince(gameMinutes)
        advanceTime(20)
        showNotice(
            `🍻 Du triffst dich mit ${member.name} – verabschieden kannst du dich in Kryptor.`
        )
        go(spot)
    }

    // Ein Dealer zieht dich ab – du weißt, wer es war

    const triggerCrewBetrayal = () => {
        const candidates = activeCrew.filter((m) => m.districtId)
        if (candidates.length === 0) return
        // Je unloyaler, desto wahrscheinlicher
        const weighted = candidates.filter(
            (m) => Math.random() > m.loyalty / 100
        )
        const target = (weighted.length > 0 ? weighted : candidates)[
            Math.floor(
                Math.random() *
                    (weighted.length > 0 ? weighted.length : candidates.length)
            )
        ]
        const loot = districtEarnings[target.districtId!] ?? 0
        setDistrictEarnings((e) => ({ ...e, [target.districtId!]: 0 }))
        setCrew((list) =>
            list.map((m) =>
                m.key === target.key
                    ? { ...m, traitor: true, districtId: null }
                    : m
            )
        )
        setDistrictDealers((d) => ({
            ...d,
            [target.districtId!]: Math.max((d[target.districtId!] ?? 1) - 1, 0),
        }))
        setHiredDealers((n) => Math.max(n - 1, 0))
        setTraitorKey(target.key)
        setTraitorLoot(loot)
        showNotice(
            `😡 ${target.name} hat dich abgezogen und ist mit ${loot} € abgehauen! Du weißt, wer es war.`
        )
    }

    // Den Verräter selbst jagen
    const huntTraitorSelf = () => {
        const member = crew.find((m) => m.key === traitorKey)
        if (!member) return
        const chance = 0.4 + (strengthLevel - 1) * 0.03 - impairmentPenalty
        advanceTime(60)
        if (Math.random() < chance) {
            setMoney((m) => m + traitorLoot)
            setStrengthXP((xp) => xp + STRENGTH_XP_FIGHT_WIN)
            setCrew((list) => list.filter((m) => m.key !== traitorKey))
            showNotice(
                `🥊 ${member.name} geschnappt – ${traitorLoot} € zurückgeholt.`
            )
            setTraitorKey(null)
            setTraitorLoot(0)
        } else {
            setHealth((h) => Math.max(h - 10, 0))
            showNotice(`💨 ${member.name} ist dir entwischt.`)
        }
    }

    // Die restliche Crew auf den Verräter ansetzen
    const sendCrewAfterTraitor = () => {
        const member = crew.find((m) => m.key === traitorKey)
        if (!member) return
        const helpers = activeCrew.filter((m) => m.key !== traitorKey)
        if (helpers.length === 0) {
            showNotice("🤷 Du hast niemanden, den du losschicken könntest.")
            return
        }
        const bestLoyalty = Math.max(...helpers.map((m) => m.loyalty))
        advanceTime(180)
        if (Math.random() < 0.4 + bestLoyalty / 200) {
            setMoney((m) => m + traitorLoot)
            setCrew((list) => list.filter((m) => m.key !== traitorKey))
            showNotice(
                `🤝 Deine Leute haben ${member.name} gefunden – ${traitorLoot} € sind zurück.`
            )
            setTraitorKey(null)
            setTraitorLoot(0)
        } else {
            showNotice(`🤷 Deine Leute haben ${member.name} nicht gefunden.`)
        }
    }

    // Täglich: unloyale Dealer können dich abziehen
    const lastBetrayalCheckRef = React.useRef(day)
    React.useEffect(() => {
        if (day <= lastBetrayalCheckRef.current) return
        lastBetrayalCheckRef.current = day
        if (traitorKey) return
        const risky = crew.filter(
            (m) => m.districtId && !m.jailUntilDay && m.loyalty < 50
        )
        if (risky.length === 0) return
        if (Math.random() < 0.12) triggerCrewBetrayal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day])

    // Deine Knast-Kontakte fahren immer mal wieder ein – so hast du dauerhaft
    // Leute drinnen, die für dich etwas erledigen können
    const lastRearrestCheckRef = React.useRef(day)
    React.useEffect(() => {
        if (day <= lastRearrestCheckRef.current) return
        lastRearrestCheckRef.current = day
        const freeInmates = INMATE_CONTACTS.filter(
            (i) =>
                unlockedContacts.includes(i.key) &&
                !deletedContacts.includes(i.key) &&
                isContactAvailable(i.key)
        )
        if (freeInmates.length === 0) return
        for (const inmate of freeInmates) {
            if (Math.random() < INMATE_REARREST_CHANCE_PER_DAY) {
                const days =
                    INMATE_REARREST_MIN_DAYS +
                    Math.round(
                        Math.random() *
                            (INMATE_REARREST_MAX_DAYS -
                                INMATE_REARREST_MIN_DAYS)
                    )
                setInmateFreeDay((d) => ({ ...d, [inmate.key]: day + days }))
                showNotice(
                    `🚔 ${inmate.name} wurde wieder eingebuchtet – ${days} Tage. Von drinnen kann er dir Gefallen tun.`
                )
                break
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day])

    // Suche nach einem Ex-Dealer läuft ab
    const lastHuntCheckRef = React.useRef(day)
    React.useEffect(() => {
        if (!pendingHunt) return
        if (day < pendingHunt.dueDay) return
        const { targetKey, targetName, executorKey, kind, loot } = pendingHunt
        const executor = crew.find((m) => m.key === executorKey)
        setPendingHunt(null)
        // Beute zurück, Ziel raus aus der Liste
        if (loot > 0) setMoney((m) => m + loot)
        setCrew((list) => list.filter((m) => m.key !== targetKey))
        const wording = {
            verjagen: `${targetName} wurde aus der Stadt gejagt`,
            verpruegeln: `${targetName} wurde zusammengeschlagen`,
            ausschalten: `${targetName} ist erledigt`,
        }[kind]
        showNotice(
            loot > 0
                ? `✅ ${wording}. ${executor?.name ?? "Deine Leute"} bringt dir ${loot} € zurück.`
                : `✅ ${wording}.`
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day, pendingHunt])

    // ---- Kunden auf Pump ----
    const totalDebt = debtors.reduce((s, d) => s + d.amount, 0)

    const addDebtor = (name: string, amount: number) => {
        setDebtors((list) => {
            const existing = list.find((d) => d.name === name)
            if (existing) {
                return list.map((d) =>
                    d.name === name
                        ? {
                              ...d,
                              amount: d.amount + amount,
                              dueDay: day + CREDIT_DAYS,
                          }
                        : d
                )
            }
            return [...list, { name, amount, dueDay: day + CREDIT_DAYS }]
        })
    }

    // Schulden von einem Dealer eintreiben lassen
    const collectDebt = (name: string) => {
        const debt = debtors.find((d) => d.name === name)
        if (!debt) return
        const collector = activeCrew.find(
            (m) => m.loyalty >= DEBT_COLLECT_MIN_LOYALTY
        )
        if (!collector) {
            showNotice(
                `🤝 Dafür brauchst du einen Dealer mit mindestens ${DEBT_COLLECT_MIN_LOYALTY} Loyalität.`
            )
            return
        }
        advanceTime(2 * 60)
        const chance =
            DEBT_COLLECT_SUCCESS_BASE + (collector.loyalty / 100) * 0.3
        if (Math.random() < chance) {
            setMoney((m) => m + debt.amount)
            setDebtors((list) => list.filter((d) => d.name !== name))
            setCrew((list) =>
                list.map((m) =>
                    m.key === collector.key
                        ? { ...m, loyalty: Math.min(m.loyalty + 5, 100) }
                        : m
                )
            )
            showNotice(
                `💰 ${collector.name} hat ${debt.amount} € von ${name} eingetrieben.`
            )
        } else {
            setHeat((h) => Math.min(h + 1, MAX_HEAT))
            showNotice(`🤷 ${collector.name} hat ${name} nicht angetroffen.`)
        }
    }

    // Überfällige Schulden: Kunde taucht ab
    const lastDebtCheckRef = React.useRef(day)
    React.useEffect(() => {
        if (day <= lastDebtCheckRef.current) return
        lastDebtCheckRef.current = day
        const overdue = debtors.filter((d) => day > d.dueDay + 3)
        if (overdue.length === 0) return
        for (const d of overdue) {
            showNotice(`💸 ${d.name} ist mit ${d.amount} € untergetaucht.`)
        }
        setDebtors((list) => list.filter((d) => day <= d.dueDay + 3))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day])

    // ---- Aufträge an loyale Leute ----
    const loyalExecutor = activeCrew.find(
        (m) => m.loyalty >= HITMAN_MIN_LOYALTY
    )
    // Auftrag erteilen: verjagen, verprügeln oder ausschalten.
    // targetName = normale Person, targetCrewKey = ein Ex-Dealer/Verräter
    const orderOn = (
        kind: "verjagen" | "verpruegeln" | "ausschalten",
        targetName: string,
        executorKey: string,
        targetCrewKey?: string
    ) => {
        const executor = crew.find((m) => m.key === executorKey)
        if (!executor) return
        if (executor.loyalty < ORDER_MIN_LOYALTY[kind]) {
            showNotice(
                `🤝 ${executor.name} macht das nicht – dafür braucht er ${ORDER_MIN_LOYALTY[kind]} Loyalität.`
            )
            return
        }
        const price = ORDER_PRICES[kind]
        if (money < price) {
            showNotice(`💸 Dafür brauchst du ${price} €.`)
            return
        }
        setMoney((m) => m - price)
        advanceTime(3 * 60)

        const jailDays = ORDER_JAIL_DAYS[kind]
        if (jailDays > 0) {
            setCrew((list) =>
                list.map((m) =>
                    m.key === executorKey
                        ? {
                              ...m,
                              districtId: null,
                              jailUntilDay: day + jailDays,
                          }
                        : m
                )
            )
            if (executor.districtId) {
                setDistrictDealers((d) => ({
                    ...d,
                    [executor.districtId!]: Math.max(
                        (d[executor.districtId!] ?? 1) - 1,
                        0
                    ),
                }))
            }
            setHiredDealers((n) => Math.max(n - 1, 0))
        }

        // Wenn es um einen Ex-Dealer geht: die Suche dauert eine Woche
        if (targetCrewKey) {
            const loot = traitorKey === targetCrewKey ? traitorLoot : 0
            setPendingHunt({
                targetKey: targetCrewKey,
                targetName,
                executorKey,
                kind,
                loot,
                dueDay: day + ORDER_HUNT_DAYS,
            })
            if (traitorKey === targetCrewKey) {
                setTraitorKey(null)
                setTraitorLoot(0)
            }
            showNotice(
                `🕵️ ${executor.name} sucht ${targetName} – das dauert etwa ${ORDER_HUNT_DAYS} Tage.`
            )
            return
        } else {
            // Normale Person: je nach Auftrag verschwindet sie ganz oder teilweise
            const contact = ALL_CONTACTS.find((f) => f.name === targetName)
            if (kind === "ausschalten") {
                setSparklyMatches((list) =>
                    list.filter((m) => m.name !== targetName)
                )
                if (contact)
                    setDeletedContacts((list) => [...list, contact.key])
            } else if (kind === "verjagen") {
                setSparklyMatches((list) =>
                    list.filter((m) => m.name !== targetName)
                )
                if (contact)
                    setDeletedContacts((list) => [...list, contact.key])
            } else {
                // Verprügeln: bleibt, aber Verhältnis ist im Eimer
                if (contact) {
                    setNpcFriendship((f) => ({ ...f, [contact.key]: 0 }))
                }
                setSparklyMatches((list) =>
                    list.map((m) =>
                        m.name === targetName ? { ...m, level: 1 } : m
                    )
                )
            }
        }

        setTotalSales((t) => t + SALES_PER_LEVEL)
        if (kind === "ausschalten") {
            setHeat((h) => Math.min(h + 2, MAX_HEAT))
            setMood((m) => Math.max(m - 15, 0))
        } else if (kind === "verpruegeln") {
            setHeat((h) => Math.min(h + 1, MAX_HEAT))
        }

        // Verrät er dich? Nur wenn seine Loyalität unter der Schwelle liegt
        const rule = ORDER_BETRAYAL[kind]
        const betrayalChance =
            rule.chance > 0 && executor.loyalty < rule.threshold
                ? rule.chance
                : 0
        if (betrayalChance > 0 && Math.random() < betrayalChance) {
            setCrew((list) =>
                list.map((m) =>
                    m.key === executorKey ? { ...m, traitor: true } : m
                )
            )
            showNotice(
                `🚨 ${executor.name} hat es erledigt – aber er hat bei der Vernehmung deinen Namen genannt!`
            )
            startCourt(kind === "ausschalten" ? "heavy" : "light")
            return
        }

        const wording = {
            verjagen: `${targetName} hat die Stadt verlassen`,
            verpruegeln: `${targetName} liegt im Krankenhaus`,
            ausschalten: `${targetName} ist erledigt`,
        }[kind]
        showNotice(
            jailDays > 0
                ? `✅ ${wording}. ${executor.name} sitzt dafür ${jailDays} Tage.`
                : `✅ ${wording}. ${executor.name} ist sauber geblieben.`
        )
    }

    // Einen Verräter im Knast von deinen Knast-Kontakten besuchen lassen
    const orderJailBeating = (targetKey: string) => {
        const target = crew.find((m) => m.key === targetKey)
        if (!target) return
        const jailFriends = INMATE_CONTACTS.filter(
            (i) =>
                unlockedContacts.includes(i.key) && !isContactAvailable(i.key)
        )
        if (jailFriends.length === 0) {
            showNotice("🤷 Du kennst gerade niemanden, der noch drin sitzt.")
            return
        }
        if (money < JAIL_HIT_PRICE) {
            showNotice(`💸 Dafür brauchst du ${JAIL_HIT_PRICE} €.`)
            return
        }
        setMoney((m) => m - JAIL_HIT_PRICE)
        const helper =
            jailFriends[Math.floor(Math.random() * jailFriends.length)]
        setCrew((list) => list.filter((m) => m.key !== targetKey))
        setTotalSales((t) => t + SALES_PER_LEVEL)
        showNotice(
            `📨 ${helper.name} hat sich im Knast um ${target.name} gekümmert. Dein Respekt steigt.`
        )
    }

    // ---- Vorteile durch eine feste Beziehung ----

    // Jeden Tag ein Stimmungsplus, wenn jemand auf dich wartet
    const lastPartnerMoodDayRef = React.useRef(day)
    React.useEffect(() => {
        if (day <= lastPartnerMoodDayRef.current) return
        lastPartnerMoodDayRef.current = day
        const partner = sparklyMatches.find((m) => m.relationship)
        if (!partner) return
        setMood((m) => Math.min(m + PARTNER_DAILY_MOOD, 100))
    }, [day, sparklyMatches])

    const partnerCooks = () => {
        const partner = sparklyMatches.find((m) => m.relationship)
        if (!partner) return
        if (partnerCookDay === day) {
            showNotice(`🍲 ${partner.name} hat heute schon für dich gekocht.`)
            return
        }
        setPartnerCookDay(day)
        setHunger((h) => Math.min(h + PARTNER_COOK_HUNGER, 100))
        setEnergy((e) => Math.min(e + 25, 100))
        setMood((m) => Math.min(m + 15, 100))
        advanceTime(60)
        showNotice(`🍲 ${partner.name} hat für dich gekocht – richtig lecker.`)
    }

    const askPartnerForMoney = () => {
        const partner = sparklyMatches.find((m) => m.relationship)
        if (!partner) return
        if (partnerLoanDay === day) {
            showNotice(`💸 ${partner.name} hat dir heute schon ausgeholfen.`)
            return
        }
        setPartnerLoanDay(day)
        const amount = Math.round(PARTNER_LOAN_AMOUNT * (partner.level / 10))
        setMoney((m) => m + amount)
        setSparklyMatches((list) =>
            list.map((m) =>
                m.name === partner.name
                    ? { ...m, level: Math.max(m.level - 1, 1) }
                    : m
            )
        )
        showNotice(
            `💸 ${partner.name} leiht dir ${amount} € – sie ist aber nicht begeistert.`
        )
    }

    // ---- Legale Nebenjobs ----
    const jobCountToday = (key: string) =>
        jobsDay === day ? (jobsToday[key] ?? 0) : 0

    const workSideJob = (locationKey: string) => {
        const job = SIDE_JOBS[locationKey]
        if (!job) return
        if (jobCountToday(locationKey) >= JOB_MAX_PER_DAY) {
            showNotice("😮‍💨 Für heute hast du hier genug gearbeitet.")
            return
        }
        if (energy < job.energy) {
            showNotice("⚡ Dafür bist du zu erschöpft.")
            return
        }
        playAction("arbeiten", (q) => {
            const bonus =
                1 +
                (charismaLevel - 1) * JOB_PAY_PER_CHARISMA +
                (strengthLevel - 1) * JOB_PAY_PER_STRENGTH +
                q * ACTION_GAME_MAX_BONUS
            const pay = Math.round(job.basePay * bonus)
            setMoney((m) => m + pay)
            setEnergy((e) => Math.max(e - job.energy, 0))
            setHunger((h) => Math.max(h - 15, 0))
            setMood((m) => Math.max(Math.min(m + job.mood, 100), 0))
            setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)
            advanceTime(job.hours * 60)
            setJobsToday((t) =>
                jobsDay === day
                    ? { ...t, [locationKey]: (t[locationKey] ?? 0) + 1 }
                    : { [locationKey]: 1 }
            )
            setJobsDay(day)
            showNotice(
                q >= 0.85
                    ? `💼 Starke Schicht! ${pay} € verdient.`
                    : `💼 ${job.hours}h gearbeitet – ${pay} € verdient.`
            )
        })
    }

    // ---- Feste Beziehung ----
    const currentPartner = sparklyMatches.find((m) => m.relationship)
    const startRelationship = (name: string) => {
        if (currentPartner) {
            showNotice(`💔 Du bist schon mit ${currentPartner.name} zusammen.`)
            return
        }
        const match = sparklyMatches.find((m) => m.name === name)
        if (!match || match.level < RELATIONSHIP_MIN_LEVEL) return
        setSparklyMatches((matches) =>
            matches.map((m) =>
                m.name === name ? { ...m, relationship: true } : m
            )
        )
        setMood((m) => Math.min(m + 30, 100))
        showNotice(`💍 Du bist jetzt mit ${name} zusammen!`)
    }
    const endRelationship = (name: string) => {
        setSparklyMatches((matches) =>
            matches.map((m) =>
                m.name === name ? { ...m, relationship: false } : m
            )
        )
        setMood((m) => Math.max(m - 20, 0))
        showNotice(`💔 Du hast dich von ${name} getrennt.`)
    }

    // ---- Intim-Minispiel beim Hausbesuch ----
    const [intimacyActive, setIntimacyActive] = React.useState(false)
    const [intimacyPartner, setIntimacyPartner] = React.useState<string | null>(
        null
    )
    const [intimacyTapsDone, setIntimacyTapsDone] = React.useState(0)
    const [intimacyTimeLeft, setIntimacyTimeLeft] = React.useState(0)
    const intimacyTapsRef = React.useRef(0)

    const startIntimacy = (name: string) => {
        setIntimacyPartner(name)
        intimacyTapsRef.current = 0
        setIntimacyTapsDone(0)
        setIntimacyTimeLeft(INTIMACY_DURATION_SECONDS)
        setIntimacyActive(true)
    }

    const tapIntimacy = () => {
        if (intimacyTapsRef.current >= INTIMACY_TAPS_NEEDED) return
        intimacyTapsRef.current += 1
        setIntimacyTapsDone(intimacyTapsRef.current)
    }

    const resolveIntimacy = () => {
        setIntimacyActive(false)
        const name = intimacyPartner
        setIntimacyPartner(null)
        if (!name) return
        const performance = intimacyTapsRef.current / INTIMACY_TAPS_NEEDED
        advanceTime(ESCORT_VISIT_HOURS_SKIP)
        setEnergy((e) => Math.max(e - 15, 0))
        // Escort: keine Beziehung, nur Laune je nach Leistung
        if (name === ESCORT_NAME) {
            if (performance >= 0.85) {
                setMood((m) => Math.min(m + 45, 100))
                showNotice("🌹 Was für ein Abend – du bist bestens gelaunt.")
            } else if (performance >= 0.5) {
                setMood((m) => Math.min(m + 30, 100))
                showNotice("🌹 War ein schöner Abend.")
            } else {
                setMood((m) => Math.min(m + 12, 100))
                showNotice("🌹 War okay – viel Geld für wenig Freude.")
            }
            return
        }
        if (performance >= 0.85) {
            setSparklyMatches((matches) =>
                matches.map((m) =>
                    m.name === name
                        ? {
                              ...m,
                              level: Math.min(m.level + 2, 10),
                              metInPerson: true,
                          }
                        : m
                )
            )
            setMood((m) => Math.min(m + 35, 100))
            showNotice(
                `💕 ${name} war begeistert – eure Beziehung wird deutlich stärker.`
            )
        } else if (performance >= 0.5) {
            setSparklyMatches((matches) =>
                matches.map((m) =>
                    m.name === name
                        ? {
                              ...m,
                              level: Math.min(m.level + 1, 10),
                              metInPerson: true,
                          }
                        : m
                )
            )
            setMood((m) => Math.min(m + 20, 100))
            showNotice(`💕 Schöner Abend mit ${name}.`)
        } else {
            setSparklyMatches((matches) =>
                matches.map((m) =>
                    m.name === name
                        ? { ...m, level: Math.max(m.level - 1, 1) }
                        : m
                )
            )
            setMood((m) => Math.max(m - 10, 0))
            showNotice(`😐 ${name} wirkt danach etwas enttäuscht.`)
        }
        maybeTriggerJealousy(name)
    }

    React.useEffect(() => {
        if (!intimacyActive) return
        const countdown = window.setInterval(() => {
            setIntimacyTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [intimacyActive])

    React.useEffect(() => {
        if (intimacyActive && intimacyTimeLeft === 0) {
            resolveIntimacy()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intimacyTimeLeft, intimacyActive])

    // ---- Anmachen / Flirten ----
    const [flirtActive, setFlirtActive] = React.useState(false)
    const [flirtTarget, setFlirtTarget] = React.useState<string | null>(null)
    const [flirtTapsDone, setFlirtTapsDone] = React.useState(0)
    const [flirtTimeLeft, setFlirtTimeLeft] = React.useState(0)
    const flirtTapsRef = React.useRef(0)

    const startFlirt = (name: string) => {
        if (flirtActive) return
        setFlirtTarget(name)
        flirtTapsRef.current = 0
        setFlirtTapsDone(0)
        setFlirtTimeLeft(FLIRT_DURATION_SECONDS)
        setFlirtActive(true)
        advanceTime(20)
    }

    const tapFlirt = () => {
        if (flirtTapsRef.current >= FLIRT_TAPS_NEEDED) return
        flirtTapsRef.current += 1
        setFlirtTapsDone(flirtTapsRef.current)
    }

    // Wertet den Flirt aus: gute Taps, Style und Charisma erhöhen die Chance
    const resolveFlirt = () => {
        setFlirtActive(false)
        const name = flirtTarget
        setFlirtTarget(null)
        if (!name) return
        const contact = ALL_CONTACTS.find((c) => c.name === name)
        const friendship = contact ? (npcFriendship[contact.key] ?? 0) : 30
        const performance = Math.min(
            flirtTapsRef.current / FLIRT_TAPS_NEEDED,
            1
        )
        const chance =
            FLIRT_BASE_CHANCE +
            performance * 0.25 +
            styleScore * 0.015 +
            (charismaLevel - 1) * 0.02 +
            (friendship / 100) * 0.2 -
            impairmentPenalty
        setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)
        if (Math.random() < chance) {
            setSparklyMatches((matches) =>
                matches.some((m) => m.name === name)
                    ? matches.map((m) =>
                          m.name === name ? { ...m, metInPerson: true } : m
                      )
                    : [...matches, { name, level: 3, metInPerson: true }]
            )
            setMood((m) => Math.min(m + 18, 100))
            showNotice(
                `💘 ${name} steht auf dich – ihr seid jetzt mehr als Freunde!`
            )
        } else {
            setMood((m) => Math.max(m - 8, 0))
            if (contact) {
                setNpcFriendship((f) => ({
                    ...f,
                    [contact.key]: Math.max((f[contact.key] ?? 0) - 5, 0),
                }))
            }
            showNotice(`😬 ${name} ist nicht interessiert – etwas peinlich.`)
        }
    }

    React.useEffect(() => {
        if (!flirtActive) return
        const countdown = window.setInterval(() => {
            setFlirtTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [flirtActive])

    React.useEffect(() => {
        if (flirtActive && flirtTimeLeft === 0) {
            resolveFlirt()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flirtTimeLeft, flirtActive])

    const danceAtClub = () => {
        playAction("tanzen", (q) => {
            setMood((m) => Math.min(m + Math.round(22 * (1 + q)), 100))
            setEnergy((e) => Math.max(e - 18, 0))
            setHunger((h) => Math.max(h - 8, 0))
            setCharismaXP((xp) => xp + CHARISMA_XP_MEET)
            boostCompanions(5)
            advanceTime(90)
            if (q >= 0.8 || Math.random() < 0.25 + styleScore * 0.02) {
                setMood((m) => Math.min(m + 10, 100))
                showNotice("💃 Du rockst die Tanzfläche – alle schauen zu dir!")
            } else {
                showNotice("💃 Ordentlich abgetanzt.")
            }
        })
    }

    const socializeAtNightlife = (venueName: string) => {
        setMood((m) => Math.min(m + 12, 100))
        setEnergy((e) => Math.max(e - 8, 0))
        setCharismaXP((xp) => xp + CHARISMA_XP_MEET)
        advanceTime(60)

        const contactChance =
            NIGHTLIFE_CONTACT_CHANCE +
            (charismaLevel - 1) * 0.03 +
            styleScore * 0.01
        const available = NIGHTLIFE_CONTACTS.filter(
            (c) =>
                !unlockedContacts.includes(c.key) &&
                !deletedContacts.includes(c.key)
        )
        if (available.length > 0 && Math.random() < contactChance) {
            const contact =
                available[Math.floor(Math.random() * available.length)]
            setUnlockedContacts((list) => [...list, contact.key])
            setNpcFriendship((f) => ({ ...f, [contact.key]: 10 }))
            showNotice(
                `🤝 Im ${venueName} ${contact.name} kennengelernt – jetzt in deinem ChatWave.`
            )
            return
        }

        const flirtChance = NIGHTLIFE_FLIRT_CHANCE + styleScore * 0.015
        const takenNames = sparklyMatches.map((m) => m.name)
        const freeNames = SPARKLY_NAMES.filter((n) => !takenNames.includes(n))
        if (freeNames.length > 0 && Math.random() < flirtChance) {
            const name = freeNames[Math.floor(Math.random() * freeNames.length)]
            setSparklyMatches((matches) => [
                ...matches,
                { name, level: 1, metInPerson: true },
            ])
            showNotice(
                `💕 Im ${venueName} ${name} kennengelernt – Nummer bekommen!`
            )
            return
        }

        showNotice(
            `🍸 Netter Abend im ${venueName}, aber keine neuen Kontakte.`
        )
    }

    const useSparkly = () => {
        const matchChance = 0.3 + styleScore * 0.02
        const matched = Math.random() < matchChance
        setMood((m) => Math.min(m + (matched ? 15 : 5), 100))
        advanceTime(20)
        if (matched) {
            const takenNames = sparklyMatches.map((m) => m.name)
            const available = SPARKLY_NAMES.filter(
                (n) => !takenNames.includes(n)
            )
            if (available.length > 0) {
                const name =
                    available[Math.floor(Math.random() * available.length)]
                setSparklyMatches((matches) => [
                    ...matches,
                    { name, level: 1, metInPerson: false },
                ])
                showNotice(`💕 Match mit ${name}! Ist jetzt in deinen Matches.`)
            } else {
                showNotice(
                    "💕 Match! Aber deine Matches-Liste ist gerade ziemlich voll."
                )
            }
        } else {
            showNotice("💔 Kein Match diesmal – nächstes Mal vielleicht.")
        }
    }

    const deleteMatch = (name: string) => {
        setSparklyMatches((matches) => matches.filter((m) => m.name !== name))
    }

    const chatWithMatch = (name: string) => {
        setSparklyMatches((matches) =>
            matches.map((m) =>
                m.name === name ? { ...m, level: Math.min(m.level + 2, 10) } : m
            )
        )
        setMood((m) => Math.min(m + 8, 100))
        advanceTime(15)
        showNotice(`💬 Netter Chat mit ${name}.`)
    }

    const maybeTriggerJealousy = (currentName: string) => {
        // Treue Kontakte (z.B. die Kiosk-Kassiererin) verlassen dich nie
        const others = sparklyMatches.filter(
            (m) => m.metInPerson && m.name !== currentName && !m.loyal
        )
        // Wer fest mit dir zusammen ist, macht bei einem Seitensprung Schluss
        const partner = sparklyMatches.find((m) => m.relationship)
        if (partner && partner.name !== currentName && Math.random() < 0.5) {
            setSparklyMatches((matches) =>
                matches.filter((m) => m.name !== partner.name)
            )
            setMood((m) => Math.max(m - 30, 0))
            showNotice(
                `💔 ${partner.name} hat von deinem Seitensprung erfahren und Schluss gemacht!`
            )
            return
        }
        if (others.length === 0) return
        if (Math.random() < JEALOUSY_CHANCE) {
            const target = others[Math.floor(Math.random() * others.length)]
            setSparklyMatches((matches) =>
                matches.filter((m) => m.name !== target.name)
            )
            setMood((m) => Math.max(m - JEALOUSY_MOOD_PENALTY, 0))
            showNotice(
                `💔 ${target.name} hat von deinen anderen Dates erfahren und will nichts mehr von dir wissen.`
            )
        }
    }

    const goOnDate = (name: string) => {
        const match = sparklyMatches.find((m) => m.name === name)
        if (!match) return
        setSparklyMatches((matches) =>
            matches.map((m) =>
                m.name === name
                    ? {
                          ...m,
                          level: Math.min(m.level + 1, 10),
                          metInPerson: true,
                      }
                    : m
            )
        )
        setMood((m) => Math.min(m + 20, 100))
        setEnergy((e) => Math.max(e - 10, 0))
        setCharismaXP((xp) => xp + CHARISMA_XP_DATE)
        advanceTime(90)
        showNotice(`💕 Schönes Date mit ${name} gehabt.`)
        maybeTriggerJealousy(name)
        go(pickRandomOutsideLocation())
    }

    // Verkaufen geht überall dort, wo der Kunde sich mit dir treffen will
    const isAtMeetingSpot =
        customerMeetingSpot !== null && location === customerMeetingSpot
    // In fremdem Gang-Gebiet ist es riskant (Überfall-Chance), aber möglich
    const inHostileTerritory =
        currentDistrictSpot !== undefined &&
        !isDistrictControlled(currentDistrictSpot.districtId)
    const canSellHere = isAtMeetingSpot

    const [sellOnCredit, setSellOnCredit] = React.useState(false)

    const startSellGame = (drug: string, onCredit = false) => {
        setSellOnCredit(onCredit)
        if (!customerRequest || !customerRequestAccepted || !canSellHere) return
        if (drug !== customerDealDrug) return
        if ((carrying[drug] ?? 0) < customerDealGrams) return
        // Fremdes Gebiet: hohe Chance, dass die dortige Gang dich abzieht
        if (inHostileTerritory && Math.random() < HOSTILE_SELL_ROBBERY_CHANCE) {
            const gang = DISTRICTS.find(
                (d) => d.id === currentDistrictSpot!.districtId
            )
            const stolenMoney = Math.floor(money * 0.5)
            setMoney((m) => m - stolenMoney)
            setCarrying(emptyDrugRecord())
            setCustomerRequest(false)
            setCustomerRequestAccepted(false)
            setCustomerRequestNpc(null)
            setCustomerDealDeadline(null)
            setCustomerMeetingSpot(null)
            setPhoneMessage(null)
            setDistrictBanUntilDay((b) => ({
                ...b,
                [currentDistrictSpot!.districtId]: day + 1,
            }))
            setLocation("street")
            setTotalSales((t) => Math.max(t - SALES_PER_LEVEL, 0))
            showNotice(
                `🔪 Die ${gang?.gangName ?? "Gang"} haben dich beim Dealen erwischt! ${stolenMoney} € und deine Ware sind weg.`
            )
            showConfirmation(false)
            return
        }
        setSellingDrugType(drug)
        sellTapsRef.current = 0
        setSellTapsDone(0)
        setSellTimeLeft(SELL_GAME_DURATION_SECONDS)
        setSellGameActive(true)
    }

    const tapSell = () => {
        sellTapsRef.current += 1
        setSellTapsDone(sellTapsRef.current)
        if (sellTapsRef.current >= SELL_GAME_TAPS_NEEDED) {
            setSellGameActive(false)
            completeSale(sellOnCredit)
        }
    }

    React.useEffect(() => {
        if (!sellGameActive) return
        const interval = window.setInterval(() => {
            setSellTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(interval)
    }, [sellGameActive])

    React.useEffect(() => {
        if (sellGameActive && sellTimeLeft === 0) {
            setSellGameActive(false)
            setCustomerRequest(false)
            setCustomerRequestAccepted(false)
            setCustomerRequestNpc(null)
            setCustomerDealDeadline(null)
            setCustomerMeetingSpot(null)
            setPhoneMessage(null)
            showNotice(
                "😤 Der Kunde wurde ungeduldig und ist gegangen – zu langsam übergeben."
            )
            showConfirmation(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sellTimeLeft, sellGameActive])

    const buyCola = () => {
        if (money < 3) return
        setMoney((m) => m - 3)
        setEnergy((e) => Math.min(e + 35, 100))
        advanceTime(TIME_COST_MINUTES.buyCola)
    }

    const buyChocolate = () => {
        if (money < 2) return
        setMoney((m) => m - 2)
        setMood((m) => Math.min(m + 10, 100))
        advanceTime(TIME_COST_MINUTES.buyChocolate)
    }

    const SANDWICH_MENU = [
        {
            key: "sandwich_classic",
            name: "Classic Sandwich",
            price: 8,
            hunger: 40,
            mood: 0,
        },
        {
            key: "sandwich_hähnchen",
            name: "Hähnchen-Sandwich",
            price: 9,
            hunger: 42,
            mood: 3,
        },
        {
            key: "sandwich_vegi",
            name: "Vegi-Sandwich",
            price: 7,
            hunger: 35,
            mood: 2,
        },
        { key: "suppe", name: "Tagessuppe", price: 5, hunger: 20, mood: 5 },
    ]
    const buySandwichItem = (price: number, hunger: number, mood: number) => {
        if (!payWithCompany(price, "das Essen")) return
        setHunger((h) => Math.min(h + hunger, 100))
        setMood((m) => Math.min(m + mood, 100))
        setEnergy((e) => Math.min(e + Math.round(hunger * 0.6), 100))
        advanceTime(TIME_COST_MINUTES.buySandwich)
    }

    const buyCigarettes = () => {
        if (money < CIGARETTES_PRICE) return
        setMoney((m) => m - CIGARETTES_PRICE)
        setCigarettes((c) => c + CIGARETTES_PER_PURCHASE)
        advanceTime(TIME_COST_MINUTES.buyCigarettes)
    }

    const smoke = () => {
        if (cigarettes <= 0) return
        playAction("rauchen", (q) => {
            setCigarettes((c) => c - 1)
            setEnergy((e) =>
                Math.min(e + Math.round(SMOKE_ENERGY_BOOST * (1 + q)), 100)
            )
            setHunger((h) => Math.max(h - SMOKE_HUNGER_DROP, 0))
            setMood((m) => Math.min(m + Math.round(q * 8), 100))
            advanceTime(TIME_COST_MINUTES.smoke)
            setSmokeEffect(true)
            window.setTimeout(
                () => setSmokeEffect(false),
                SMOKE_FILTER_DURATION_MS
            )
        })
    }

    const buySnack = (key: string) => {
        const item = SNACK_ITEMS.find((s) => s.key === key)
        if (!item) return
        if (money < item.price) return
        setMoney((m) => m - item.price)
        setSnackInventory((inv) => ({ ...inv, [key]: (inv[key] ?? 0) + 1 }))
        showNotice(
            `${item.emoji} ${item.label} gekauft – liegt jetzt in deinem Inventar.`
        )
    }

    const eatSnack = (key: string) => {
        const item = SNACK_ITEMS.find((s) => s.key === key)
        if (!item) return
        if ((snackInventory[key] ?? 0) <= 0) return
        setSnackInventory((inv) => ({ ...inv, [key]: inv[key] - 1 }))
        setHunger((h) => Math.min(h + item.hungerBoost, 100))
        setEnergy((e) => Math.min(e + item.energyBoost, 100))
        setMood((m) => Math.min(m + item.moodBoost, 100))
        advanceTime(5)
        const verb = item.category === "getraenk" ? "getrunken" : "genossen"
        showNotice(`${item.emoji} ${item.label} ${verb}.`)
    }

    const buyRubbellos = () => {
        if (money < RUBBELLOS_PRICE) return
        setMoney((m) => m - RUBBELLOS_PRICE)
        setMood((m) => Math.min(m + 10, 100))
        advanceTime(5)
        if (Math.random() < RUBBELLOS_WIN_CHANCE) {
            const prize = Math.round(5 + Math.random() * 45)
            setMoney((m) => m + prize)
            showNotice(`🎫 Rubbellos: Gewonnen! +${prize} €`)
        } else {
            showNotice(
                "🎫 Rubbellos: leider nichts gewonnen, aber lustig war's."
            )
        }
    }

    const buyAlcohol = (key: string) => {
        const item = ALCOHOL_TYPES.find((a) => a.key === key)
        if (!item) return
        if (money < item.price) return
        setMoney((m) => m - item.price)
        setAlcoholInventory((inv) => ({ ...inv, [key]: (inv[key] ?? 0) + 1 }))
        showNotice(
            `${item.emoji} ${item.label} gekauft – liegt jetzt in deinem Inventar.`
        )
    }

    const drinkAlcohol = (key: string) => {
        const item = ALCOHOL_TYPES.find((a) => a.key === key)
        if (!item) return
        if ((alcoholInventory[key] ?? 0) <= 0) return
        if (JAIL_LOCATIONS.includes(location)) return
        setAlcoholInventory((inv) => ({ ...inv, [key]: inv[key] - 1 }))
        setDrunkUntilMinutes(
            (prev) =>
                Math.max(prev ?? gameMinutes, gameMinutes) + item.buzzMinutes
        )
        setMood((m) => Math.min(m + 10, 100))
        setHunger((h) => Math.max(h - 5, 0))
        advanceTime(15)
        showNotice(
            `${item.emoji} ${item.label} getrunken – du bist jetzt ordentlich angeheitert.`
        )
    }

    const smokeJoint = () => {
        if ((carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT) return
        playAction("joint", (q) => {
            setCarrying((c) => ({
                ...c,
                hashish: c.hashish - JOINT_PIECE_AMOUNT,
            }))
            setHighUntilMinutes(
                (prev) =>
                    Math.max(prev ?? gameMinutes, gameMinutes) +
                    Math.round(JOINT_HIGH_MINUTES * (1 + q * 0.5))
            )
            setMood((m) => Math.min(m + Math.round(15 * (1 + q)), 100))
            setHunger((h) => Math.max(h - 10, 0))
            boostCompanions(3)
            advanceTime(15)
            showNotice(
                q >= 0.7
                    ? "🌀 Perfekt gedreht und geraucht – richtig entspannt."
                    : "🌀 Joint geraucht."
            )
        })
    }

    const effectiveFridgeMax =
        FRIDGE_MAX +
        (KUEHL_ITEMS.find((k) => k.key === ownedKuehl)?.extraCapacity ?? 0)

    const buyGroceries = (percent: number, price: number) => {
        if (money < price) return
        if (fridgeStock >= effectiveFridgeMax) return
        setMoney((m) => m - price)
        setFridgeStock((f) => Math.min(f + percent, effectiveFridgeMax))
        advanceTime(TIME_COST_MINUTES.buyGroceries)
    }

    const checkMirror = () => {
        let pool = MIRROR_COMMENTS_MID
        if (mood >= 70) pool = MIRROR_COMMENTS_HIGH
        else if (mood < 30) pool = MIRROR_COMMENTS_LOW
        const comment = pool[Math.floor(Math.random() * pool.length)]
        showNotice(`🪞 ${comment}`)
        setCharacterViewOpen(true)
    }

    const brushTeeth = () => {
        setMood((m) => Math.min(m + BRUSH_TEETH_MOOD_BOOST, 100))
        advanceTime(TIME_COST_MINUTES.brushTeeth)
    }

    const checkWeather = () => {
        const weather = WEATHER_TYPES[day % WEATHER_TYPES.length]
        if (lastWeatherCheckDay !== day) {
            setMood((m) => Math.max(0, Math.min(100, m + weather.moodEffect)))
            setLastWeatherCheckDay(day)
        }
        showNotice(`${weather.label} draußen.`)
    }

    const playGames = () => {
        playAction("zocken", (q) => {
            const konsole =
                KONSOLE_ITEMS.find((k) => k.key === ownedKonsole)?.moodBonus ??
                0
            setMood((m) =>
                Math.min(m + Math.round((15 + konsole) * (1 + q)), 100)
            )
            setEnergy((e) => Math.max(e - 15, 0))
            advanceTime(TIME_COST_MINUTES.playGames)
            showNotice(
                q >= 0.8 ? "🎮 Was für eine Runde!" : "🎮 Ein bisschen gezockt."
            )
        })
    }

    // Neuen Dealer anheuern – er bekommt sofort einen Namen und taucht in
    // ChatWave unter "Deine Dealer" auf
    const addCrewMember = (districtId: string | null) => {
        setCrew((list) => {
            const used = list.map((m) => m.name)
            const freeNames = DEALER_NAMES.filter((n) => !used.includes(n))
            const name =
                freeNames[Math.floor(Math.random() * freeNames.length)] ??
                `Dealer ${list.length + 1}`
            return [
                ...list,
                {
                    key: `crew_${Date.now()}_${list.length}`,
                    name,
                    districtId,
                    loyalty: 30 + Math.round(Math.random() * 20),
                },
            ]
        })
    }

    const hireDealer = () => {
        if (hiredDealers >= maxDealers) return
        if (money < DEALER_HIRE_COST) return
        setMoney((m) => m - DEALER_HIRE_COST)
        setHiredDealers((d) => d + 1)
        addCrewMember(null)
        showNotice(
            "🤝 Neuer Dealer angeheuert – du findest ihn in ChatWave unter „Deine Dealer“."
        )
    }

    const supplyDealers = (drug: string, amount: number) => {
        if (amount <= 0) return
        if ((carrying[drug] ?? 0) < amount) return
        setCarrying((c) => ({ ...c, [drug]: c[drug] - amount }))
        setDealerStash((s) => ({ ...s, [drug]: (s[drug] ?? 0) + amount }))
    }

    const withdrawFromDealerStash = (drug: string, amount: number) => {
        if (amount <= 0) return
        if ((dealerStash[drug] ?? 0) < amount) return
        if (totalOf(carrying) + amount > effectiveMaxCarry) {
            showNotice(
                "🎒 Dein Gepäck ist zu voll dafür – erst was abgeben oder verkaufen."
            )
            return
        }
        setDealerStash((s) => ({ ...s, [drug]: s[drug] - amount }))
        setCarrying((c) => ({ ...c, [drug]: (c[drug] ?? 0) + amount }))
    }

    const collectDealerEarnings = () => {
        if (dealerEarnings <= 0) return
        setMoney((m) => m + dealerEarnings)
        showNotice(`💰 ${dealerEarnings} € von deinen Dealern abgeholt.`)
        setDealerEarnings(0)
    }

    const openOutfitPicker = () => {
        setOutfitPickerSeason(null)
        setOutfitPickerOpen(true)
    }

    const closeOutfitPicker = () => {
        setOutfitPickerOpen(false)
        setOutfitPickerSeason(null)
    }

    const openAmountPanel = (mode: "take" | "buy" | "supply" | "withdraw") => {
        setAmountPanelInputs({ weed: "", hashish: "", kokain: "" })
        setAmountPanelMode(mode)
    }
    const closeAmountPanel = () => setAmountPanelMode(null)

    const openMoneyPanel = (mode: "deposit" | "withdraw") => {
        setMoneyPanelInput("")
        setMoneyPanelMode(mode)
    }
    const closeMoneyPanel = () => setMoneyPanelMode(null)

    const confirmMoneyPanel = () => {
        const amount = Math.max(0, Math.floor(Number(moneyPanelInput) || 0))
        if (amount <= 0) return
        if (moneyPanelMode === "deposit") depositMoney(amount)
        if (moneyPanelMode === "withdraw") withdrawMoney(amount)
        setMoneyPanelInput("")
        setMoneyPanelMode(null)
    }

    const confirmAmountPanel = (drug: string) => {
        const grams = Math.max(
            0,
            Math.floor(Number(amountPanelInputs[drug]) || 0)
        )
        if (grams <= 0) return
        if (amountPanelMode === "take") takePackages(drug, grams)
        if (amountPanelMode === "supply") supplyDealers(drug, grams)
        if (amountPanelMode === "withdraw") withdrawFromDealerStash(drug, grams)
        if (amountPanelMode === "buy") {
            buyFromSupplier(drug, grams)
        }
        setAmountPanelInputs((inputs) => ({ ...inputs, [drug]: "" }))
    }

    const HOME_OUTFIT_SEASON_OUTFITS = OUTFITS.filter(
        (o) => o.season === outfitPickerSeason
    )
    const HOME_OUTFIT_SEASONS = OUTFIT_SEASON_ORDER.filter((season) =>
        OUTFITS.some((o) => o.season === season)
    )
    const selectOutfitPickerSeason = (season: string) => {
        const list = OUTFITS.filter((o) => o.season === season)
        const currentIndex = list.findIndex((o) => o.id === equippedOutfit)
        setBrowsingOutfitIndex(currentIndex >= 0 ? currentIndex : 0)
        setOutfitPickerSeason(season)
    }
    const cycleOutfit = (direction: number) => {
        setBrowsingOutfitIndex(
            (i) =>
                (i + direction + HOME_OUTFIT_SEASON_OUTFITS.length) %
                Math.max(HOME_OUTFIT_SEASON_OUTFITS.length, 1)
        )
    }

    const CLOTHING_SHOP_OUTFITS = OUTFITS.filter(
        (o) =>
            o.tier &&
            o.tier === clothingShopTier &&
            o.season === clothingShopSeason
    )
    const CLOTHING_SHOP_SEASONS = OUTFIT_SEASON_ORDER.filter((season) =>
        OUTFITS.some((o) => o.tier === clothingShopTier && o.season === season)
    )
    const openClothingShopPicker = (tier: string) => {
        setClothingShopTier(tier)
        setClothingShopSeason(null)
        setBrowsingClothingShopIndex(0)
        setClothingShopPickerOpen(true)
    }
    const selectClothingShopSeason = (season: string) => {
        setClothingShopSeason(season)
        setBrowsingClothingShopIndex(0)
    }
    const closeClothingShopPicker = () => {
        setClothingShopPickerOpen(false)
        setClothingShopSeason(null)
    }
    const cycleClothingShop = (direction: number) => {
        setBrowsingClothingShopIndex(
            (i) =>
                (i + direction + CLOTHING_SHOP_OUTFITS.length) %
                Math.max(CLOTHING_SHOP_OUTFITS.length, 1)
        )
    }

    const WATCH_SHOP_OUTFITS = OUTFITS.filter((o) => o.requiresOutfit)
    const openWatchShopPicker = () => {
        setBrowsingWatchShopIndex(0)
        setWatchShopPickerOpen(true)
    }
    const closeWatchShopPicker = () => setWatchShopPickerOpen(false)
    const cycleWatchShop = (direction: number) => {
        setBrowsingWatchShopIndex(
            (i) =>
                (i + direction + WATCH_SHOP_OUTFITS.length) %
                WATCH_SHOP_OUTFITS.length
        )
    }

    const buyAndEquipOutfit = (outfitId: string, price: number) => {
        const alreadyOwned = ownedOutfits.includes(outfitId)
        if (!alreadyOwned) {
            const finalPrice = discountedPrice(price)
            if (money < finalPrice) return
            setMoney((m) => m - finalPrice)
            setOwnedOutfits((o) => [...o, outfitId])
        }
        setEquippedOutfit(outfitId)
        showNotice(alreadyOwned ? "👕 Angezogen." : "🛍 Gekauft & angezogen!")
        setOutfitPickerOpen(false)
    }

    const equipOwnedOutfit = (outfitId: string) => {
        if (!ownedOutfits.includes(outfitId)) return
        setEquippedOutfit(outfitId)
        showNotice("👕 Angezogen.")
        setOutfitPickerOpen(false)
    }

    const buyLuxuryItem = (key: string, price: number) => {
        const finalPrice = discountedPrice(price)
        if (money < finalPrice) return
        setMoney((m) => m - finalPrice)
        if (key === "hasKette") setHasKette(true)
        showNotice("🛍 Gekauft!")
    }

    const buyWatchOutfit = (outfitId: string) => {
        const outfit = OUTFITS.find((o) => o.id === outfitId)
        if (!outfit || !outfit.requiresOutfit) return
        if (ownedOutfits.includes(outfitId)) return
        if (!ownedOutfits.includes(outfit.requiresOutfit)) return
        const finalPrice = discountedPrice(outfit.price)
        if (money < finalPrice) return
        setMoney((m) => m - finalPrice)
        setOwnedOutfits((o) => [...o, outfitId])
        showNotice(
            `⌚ ${outfit.name} gekauft – jetzt in deinem Kleiderschrank!`
        )
    }

    const buyPerfume = (key: string) => {
        if (ownedPerfumes.includes(key)) return
        const item = PERFUME_ITEMS.find((p) => p.key === key)
        if (!item) return
        const finalPrice = discountedPrice(item.price)
        if (money < finalPrice) return
        setMoney((m) => m - finalPrice)
        setOwnedPerfumes((list) => [...list, key])
        showNotice(`🧴 ${item.name} gekauft!`)
    }

    const buyTv = (key: string) => {
        if (ownedTv === key) return
        const item = TV_ITEMS.find((t) => t.key === key)
        if (!item) return
        const finalPrice = discountedPrice(item.price)
        if (money < finalPrice) return
        setMoney((m) => m - finalPrice)
        setOwnedTv(key)
        showNotice(
            `📺 ${item.name} gekauft! Fernsehen macht jetzt noch mehr gute Laune.`
        )
    }

    const buyKonsoleItem = (key: string) => {
        if (ownedKonsole === key) return
        const item = KONSOLE_ITEMS.find((k) => k.key === key)
        if (!item) return
        const finalPrice = discountedPrice(item.price)
        if (money < finalPrice) return
        setMoney((m) => m - finalPrice)
        setOwnedKonsole(key)
        showNotice(
            `🎮 ${item.name} gekauft! Zocken macht jetzt noch mehr gute Laune.`
        )
    }

    const buyKuehlItem = (key: string) => {
        if (ownedKuehl === key) return
        const item = KUEHL_ITEMS.find((k) => k.key === key)
        if (!item) return
        const finalPrice = discountedPrice(item.price)
        if (money < finalPrice) return
        setMoney((m) => m - finalPrice)
        setOwnedKuehl(key)
        showNotice(`🧊 ${item.name} gekauft! Mehr Platz für Essen.`)
    }

    const buyFoodcourtItem = (
        price: number,
        hungerGain: number,
        moodGain: number
    ) => {
        if (!payWithCompany(price, "das Essen")) return
        setHunger((h) => Math.min(h + hungerGain, 100))
        setMood((m) => Math.min(m + moodGain, 100))
        // Auswärts essen gibt auch Energie
        setEnergy((e) => Math.min(e + Math.round(hungerGain * 0.6), 100))
        advanceTime(20)
    }

    const buyDistrictSpotItem = (
        price: number,
        hungerGain: number,
        moodGain: number,
        energyGain: number,
        buzzMinutes = 0,
        highMinutes = 0
    ) => {
        if (!payWithCompany(price, "die Runde")) return
        setHunger((h) => Math.min(h + hungerGain, 100))
        setMood((m) => Math.min(m + moodGain, 100))
        // Essen sättigt und gibt zusätzlich Energie
        setEnergy((e) =>
            Math.min(e + energyGain + Math.round(hungerGain * 0.6), 100)
        )
        // Alkohol und Shisha wirken auch vor Ort
        if (buzzMinutes > 0) {
            setDrunkUntilMinutes(
                (prev) =>
                    Math.max(prev ?? gameMinutes, gameMinutes) + buzzMinutes
            )
        }
        if (highMinutes > 0) {
            setHighUntilMinutes(
                (prev) =>
                    Math.max(prev ?? gameMinutes, gameMinutes) + highMinutes
            )
        }
        advanceTime(15)
    }

    const flyToMiami = () => {
        if (money < MIAMI_TICKET_PRICE) return
        setMoney((m) => m - MIAMI_TICKET_PRICE)
        advanceTime(MIAMI_FLIGHT_HOURS * 60)
        // 1) Bildschirm wird schwarz
        setFlightPhase("black")
        setFlightPhaseVisible(false)
        // 2) Willkommensbild blendet über dem Schwarz auf
        window.setTimeout(() => {
            setFlightPhase("welcome")
            window.setTimeout(() => setFlightPhaseVisible(true), 30)
        }, 2000)
        // 3) Willkommensbild blendet wieder aus – es bleibt schwarz
        window.setTimeout(() => setFlightPhaseVisible(false), 6000)
        // 4) Miami wird im Hintergrund gesetzt, dann blendet das Schwarz sanft weg
        window.setTimeout(() => {
            setLocation("miami_flughafen")
            setFlightPhase("fadeout")
        }, 7000)
        window.setTimeout(() => {
            setFlightPhase(null)
            showNotice("✈️ Nach 10,5 Stunden in Miami gelandet!")
        }, 9000)
    }

    const bookReturnFlightFromMiami = () => {
        if (money < MIAMI_TICKET_PRICE) return
        setMoney((m) => m - MIAMI_TICKET_PRICE)
        advanceTime(MIAMI_FLIGHT_HOURS * 60)
        // Rückflug: schwarz werden, Ort wechseln, sanft aufblenden
        setFlightPhase("black")
        setFlightPhaseVisible(false)
        window.setTimeout(() => {
            setLocation("street")
            setFlightPhase("fadeout")
        }, 2500)
        window.setTimeout(() => {
            setFlightPhase(null)
            showNotice("✈️ Nach 10,5 Stunden zurück in Frankfurt gelandet.")
        }, 4500)
    }

    // ---- Miami: eigenes Hotelzimmer ----
    const [miamiGuestOrdered, setMiamiGuestOrdered] = React.useState(false)
    const [miamiGuestName, setMiamiGuestName] = React.useState<string | null>(
        null
    )
    const [miamiGuestArrival, setMiamiGuestArrival] = React.useState<
        number | null
    >(null)
    const [miamiGuestDoorbellActive, setMiamiGuestDoorbellActive] =
        React.useState(false)

    const bookMiamiRoom = () => {
        if (hasMiamiRoom) return
        if (money < MIAMI_ROOM_PRICE) return
        setMoney((m) => m - MIAMI_ROOM_PRICE)
        setHasMiamiRoom(true)
        showNotice(
            "🔑 Zimmer gebucht! Es hat einen Wohnraum, ein Schlafzimmer und einen Balkon."
        )
        go("miami_zimmer")
    }

    // In Miami jemanden anmachen (Namen passend zur Stadt)
    const flirtInMiami = () => {
        const taken = sparklyMatches.map((m) => m.name)
        const free = MIAMI_NAMES.filter((n) => !taken.includes(n))
        if (free.length === 0) {
            showNotice("😅 Hier ist gerade niemand Neues.")
            return
        }
        startFlirt(free[Math.floor(Math.random() * free.length)])
    }

    const miamiBalconyView = () => {
        setMood((m) => Math.min(m + 18, 100))
        setEnergy((e) => Math.min(e + 10, 100))
        advanceTime(60)
        showNotice("🌅 Du genießt den Blick über Miami – herrlich.")
    }

    const inviteToMiamiRoom = (name: string) => {
        if (miamiGuestOrdered) return
        const wait = 30 + Math.round(Math.random() * 60)
        setMiamiGuestName(name)
        setMiamiGuestArrival(gameMinutes + wait)
        setMiamiGuestOrdered(true)
        showNotice(`💕 ${name} macht sich auf den Weg zu deinem Hotel.`)
    }

    React.useEffect(() => {
        if (!miamiGuestOrdered || miamiGuestArrival === null) return
        if (miamiGuestDoorbellActive) return
        if (gameMinutes >= miamiGuestArrival) setMiamiGuestDoorbellActive(true)
    }, [
        gameMinutes,
        miamiGuestOrdered,
        miamiGuestArrival,
        miamiGuestDoorbellActive,
    ])

    const openDoorForMiamiGuest = () => {
        if (!miamiGuestDoorbellActive) return
        const name = miamiGuestName
        setMiamiGuestDoorbellActive(false)
        setMiamiGuestOrdered(false)
        setMiamiGuestArrival(null)
        setMiamiGuestName(null)
        if (!name) return
        setDateVisitSceneActive(true)
        window.setTimeout(() => {
            setDateVisitSceneActive(false)
            startIntimacy(name)
        }, ESCORT_IMAGE_REAL_MS)
    }

    const miamiHotelRelax = () => {
        if (money < MIAMI_HOTEL_PRICE) return
        setMoney((m) => m - MIAMI_HOTEL_PRICE)
        setEnergy((e) => Math.min(e + 40, 100))
        setMood((m) => Math.min(m + 15, 100))
        advanceTime(4 * 60)
        showNotice("🛏 Im Hotel ausgeruht.")
    }
    const miamiSunbathe = () => {
        setMood((m) => Math.min(m + 20, 100))
        setEnergy((e) => Math.min(e + 10, 100))
        advanceTime(2 * 60)
        showNotice("🏖 Ordentlich Sonne getankt am Miami Beach.")
    }
    const miamiSwim = () => {
        playAction("schwimmen", (q) => {
            setMood((m) => Math.min(m + Math.round(12 * (1 + q)), 100))
            setEnergy((e) => Math.min(e + Math.round(8 * (1 + q)), 100))
            setStrengthXP((xp) => xp + Math.round(8 * (1 + q)))
            boostCompanions(4)
            advanceTime(60)
            showNotice(
                q >= 0.8
                    ? "🏊 Weit rausgeschwommen – top!"
                    : "🏊 Im Meer geschwommen."
            )
        })
    }
    const miamiDrinkCocktail = () => {
        if (!payWithCompany(MIAMI_COCKTAIL_PRICE, "die Cocktails")) return
        setMood((m) => Math.min(m + 15, 100))
        setDrunkUntilMinutes(
            (prev) => Math.max(prev ?? gameMinutes, gameMinutes) + 40
        )
        advanceTime(30)
        showNotice("🍹 Cocktail am Strand genossen.")
    }
    const miamiClubbing = () => {
        if (!payWithCompany(MIAMI_CLUB_PRICE, "den Eintritt")) return
        setMood((m) => Math.min(m + 30, 100))
        setEnergy((e) => Math.max(e - 20, 0))
        setDrunkUntilMinutes(
            (prev) => Math.max(prev ?? gameMinutes, gameMinutes) + 90
        )
        advanceTime(3 * 60)
        showNotice("🎉 Durchgefeiert am Ocean Drive!")
    }
    const miamiRooftopBar = () => {
        if (!payWithCompany(MIAMI_ROOFTOP_PRICE, "die Drinks")) return
        setMood((m) => Math.min(m + 18, 100))
        setDrunkUntilMinutes(
            (prev) => Math.max(prev ?? gameMinutes, gameMinutes) + 40
        )
        advanceTime(2 * 60)
        showNotice("🌆 Drinks mit Skyline-Blick auf der Rooftop-Bar.")
    }
    const miamiLiveMusic = () => {
        if (!payWithCompany(MIAMI_LIVEMUSIC_PRICE, "die Tickets")) return
        setMood((m) => Math.min(m + 16, 100))
        advanceTime(2 * 60)
        showNotice("🎤 Live-Musik in einer kleinen Bar genossen.")
    }
    const miamiBeachParty = () => {
        if (!payWithCompany(MIAMI_BEACHPARTY_PRICE, "die Party")) return
        setMood((m) => Math.min(m + 28, 100))
        setEnergy((e) => Math.max(e - 15, 0))
        setDrunkUntilMinutes(
            (prev) => Math.max(prev ?? gameMinutes, gameMinutes) + 70
        )
        advanceTime(3 * 60)
        showNotice("🏖️ Ausgelassene Beach-Party bis spät in die Nacht!")
    }
    const miamiBarCocktail = () => {
        if (!payWithCompany(MIAMI_BARCOCKTAIL_PRICE, "die Drinks")) return
        setMood((m) => Math.min(m + 12, 100))
        setDrunkUntilMinutes(
            (prev) => Math.max(prev ?? gameMinutes, gameMinutes) + 35
        )
        advanceTime(30)
        showNotice("🍸 Cocktail an der Bar genossen.")
    }
    const miamiShopping = () => {
        if (!payWithCompany(MIAMI_SHOPPING_PRICE, "den Einkauf")) return
        setMood((m) => Math.min(m + 20, 100))
        advanceTime(90)
        showNotice("🛍 Shopping-Trip auf der Einkaufsstraße.")
    }
    const miamiEatOut = () => {
        if (!payWithCompany(MIAMI_MEAL_PRICE, "das Essen")) return
        setHunger((h) => Math.min(h + 40, 100))
        setMood((m) => Math.min(m + 12, 100))
        advanceTime(60)
        showNotice("🍽 Lecker in Miami gegessen.")
    }

    const isSpotBanned = (destination: string) => {
        const spot = DISTRICT_SPOTS.find((s) => s.id === destination)
        if (!spot) return false
        return day < (districtBanUntilDay[spot.districtId] ?? 0)
    }

    const rideBusTo = (destination: string) => {
        if (money < BUS_FARE) return
        if (isSpotBanned(destination)) {
            showNotice("🚫 Du wurdest hier verjagt – komm morgen wieder.")
            return
        }
        setMoney((m) => m - BUS_FARE)
        advanceTime(20)
        go(destination)
    }

    const ownsAnyCar = ownedCarLegit !== null || ownedCarStolen !== null

    const confiscateOneStolenCar = () => {
        setOwnedCarStolen(null)
    }

    const driveCarTo = (destination: string) => {
        if (!ownedCarLegit && !ownedCarStolen) return
        if (isSpotBanned(destination)) {
            showNotice("🚫 Du wurdest hier verjagt – komm morgen wieder.")
            return
        }
        advanceTime(10)
        const drivingStolen = !ownedCarLegit && !!ownedCarStolen
        if (drivingStolen && Math.random() < CAR_STOLEN_STOP_CHANCE) {
            setPoliceEncounterContext("stolencarstop")
            setPoliceEncounter(true)
            return
        }
        go(destination)
    }

    const triggerDealerBetrayal = () => {
        const stashEntries = DRUG_TYPES.map(
            (d) => [d, dealerStash[d] ?? 0] as const
        )
        const [stolenDrug, stolenDrugAmount] = stashEntries.reduce(
            (best, cur) => (cur[1] > best[1] ? cur : best)
        )
        const stolenWare = Math.min(
            stolenDrugAmount,
            DEALER_BETRAYAL_WARE_STOLEN
        )
        const stolenMoney = dealerEarnings
        setDealerDebtMoney(stolenMoney)
        setDealerDebtWare(stolenWare)
        setDealerDebtWareType(stolenDrug)
        if (stolenWare > 0) {
            setDealerStash((s) => ({
                ...s,
                [stolenDrug]: s[stolenDrug] - stolenWare,
            }))
        }
        setDealerEarnings(0)
        setHiredDealers((d) => Math.max(d - 1, 0))
        setDealerChaseDeadline(gameMinutes + DEALER_CHASE_WINDOW_MINUTES)
        // Wer es war, landet als Ex-Dealer in Kryptor
        const runner = crew.find((m) => !m.traitor && !m.jailUntilDay)
        if (runner) {
            setCrew((list) =>
                list.map((m) =>
                    m.key === runner.key
                        ? { ...m, traitor: true, districtId: null }
                        : m
                )
            )
            if (runner.districtId) {
                setDistrictDealers((d) => ({
                    ...d,
                    [runner.districtId!]: Math.max(
                        (d[runner.districtId!] ?? 1) - 1,
                        0
                    ),
                }))
            }
            setTraitorKey(runner.key)
            setTraitorLoot(stolenMoney)
        }
        showNotice(
            `😡 ${runner?.name ?? "Einer deiner Dealer"} ist mit ${stolenMoney} € und ${stolenWare}g ${DRUG_INFO[stolenDrug].label} abgehauen! Du hast 2 Stunden Zeit, ihn im Park zu erwischen – oder schick jemanden über Kryptor.`
        )
    }

    const chaseDealer = () => {
        if (location !== "park") return
        if (dealerChaseDeadline === null || gameMinutes >= dealerChaseDeadline)
            return
        const catchChance =
            DEALER_CHASE_CATCH_CHANCE_BASE +
            (level - 1) * DEALER_CHASE_CATCH_CHANCE_PER_LEVEL +
            (strengthLevel - 1) * STRENGTH_CHASE_BONUS_PER_LEVEL -
            impairmentPenalty
        setDealerChaseDeadline(null)
        if (Math.random() < catchChance) {
            dealerFightTapsRef.current = 0
            setDealerFightTapsDone(0)
            setDealerFightTimeLeft(DEALER_FIGHT_DURATION_SECONDS)
            setDealerFightActive(true)
        } else {
            showNotice(
                "🏃 Nicht gefunden – er ist weg, mitsamt deinem Geld und deiner Ware."
            )
        }
    }

    const letDealerGo = () => {
        setDealerChaseDeadline(null)
        showNotice("🤷 Du lässt ihn laufen. Das Geld und die Ware sind weg.")
    }

    React.useEffect(() => {
        if (dealerChaseDeadline === null) return
        if (gameMinutes >= dealerChaseDeadline) {
            setDealerChaseDeadline(null)
            showNotice(
                "⏰ Zu spät – der Dealer ist über alle Berge. Geld und Ware sind weg."
            )
        }
    }, [gameMinutes, dealerChaseDeadline])

    const tapDealerFight = () => {
        dealerFightTapsRef.current += 1
        setDealerFightTapsDone(dealerFightTapsRef.current)
        if (dealerFightTapsRef.current >= DEALER_FIGHT_TAPS_NEEDED) {
            setDealerFightActive(false)
            setMoney((m) => m + dealerDebtMoney)
            setHomeStash((s) => ({
                ...s,
                [dealerDebtWareType]:
                    (s[dealerDebtWareType] ?? 0) + dealerDebtWare,
            }))
            setStrengthXP((xp) => xp + STRENGTH_XP_FIGHT_WIN)
            showNotice(
                `🥊 Erwischt und verprügelt! ${dealerDebtMoney} € und ${dealerDebtWare}g ${DRUG_INFO[dealerDebtWareType].label} zurückgeholt.`
            )
        }
    }

    React.useEffect(() => {
        if (!dealerFightActive) return
        const interval = window.setInterval(() => {
            setDealerFightTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(interval)
    }, [dealerFightActive])

    React.useEffect(() => {
        if (dealerFightActive && dealerFightTimeLeft === 0) {
            setDealerFightActive(false)
            showNotice(
                "💨 Er konnte sich losreißen – Geld und Ware bleiben weg."
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dealerFightTimeLeft, dealerFightActive])

    const buyWeapon = (key: string) => {
        const item = WEAPON_TYPES.find((w) => w.key === key)
        if (!item) return
        if (money < item.price) return
        setMoney((m) => m - item.price)
        setOwnedWeapon(key)
        showNotice(`${item.emoji} ${item.label} gekauft.`)
    }

    const buyMask = () => {
        if (hasMask) return
        if (money < MASK_PRICE) return
        setMoney((m) => m - MASK_PRICE)
        setHasMask(true)
    }

    const daysSinceRobbery =
        lastRobberyDay === 0 ? Infinity : day - lastRobberyDay
    const canRobKiosk =
        ownedWeapon !== null &&
        hasMask &&
        daysSinceRobbery >= ROBBERY_COOLDOWN_DAYS
    const currentRobberyRewardPerCatch =
        WEAPON_TYPES.find((w) => w.key === ownedWeapon)?.rewardPerCatch ?? 20

    const spawnRobberyTarget = () => {
        setRobberyTargetPos({
            x: 15 + Math.random() * 70,
            y: 25 + Math.random() * 50,
        })
        setRobberyTargetVisible(true)
    }

    const startRobbery = () => {
        if (!canRobKiosk) return
        setLastRobberyDay(day)
        robberyCaughtRef.current = 0
        setRobberyCaught(0)
        setRobberyTimeLeft(ROBBERY_GAME_DURATION_SECONDS)
        setRobberyGameActive(true)
        spawnRobberyTarget()
    }

    const catchRobberyTarget = () => {
        setRobberyTargetVisible(false)
        robberyCaughtRef.current += 1
        setRobberyCaught(robberyCaughtRef.current)
    }

    const endRobberySuccess = (caughtCount: number) => {
        const reward = caughtCount * currentRobberyRewardPerCatch
        if (reward > 0) {
            setMoney((m) => m + reward)
        }
        setHeat((h) => Math.min(h + 2, MAX_HEAT))
        showNotice(
            reward > 0
                ? `🔫 Rechtzeitig raus! ${caughtCount}x geschnappt = +${reward} €.`
                : "🔫 Rechtzeitig raus – diesmal nichts erbeutet."
        )
        setRobberyGameActive(false)
        setRobberyTargetVisible(false)
        showConfirmation(true)
    }

    const leaveRobberyEarly = () => {
        endRobberySuccess(robberyCaughtRef.current)
    }

    const triggerRobberyCaught = () => {
        setRobberyGameActive(false)
        setRobberyTargetVisible(false)
        setOwnedWeapon(null)
        setHasMask(false)
        setMoney(0)
        setHeat(MAX_HEAT)
        setLocation(hasApartment ? "flur" : "street")
        showNotice(
            "🚔 Erwischt! Bewaffneter Raub – Waffe & Maske weg, dein Geld weg. Du kommst vor Gericht."
        )
        startCourt("heavy")
        showConfirmation(false)
    }

    React.useEffect(() => {
        if (!robberyGameActive) return
        const countdown = window.setInterval(() => {
            setRobberyTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [robberyGameActive])

    React.useEffect(() => {
        if (robberyGameActive && robberyTimeLeft === 0) {
            triggerRobberyCaught()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [robberyTimeLeft, robberyGameActive])

    React.useEffect(() => {
        if (!robberyGameActive) return
        const spawnInterval = window.setInterval(() => {
            spawnRobberyTarget()
        }, BREAKIN_TARGET_INTERVAL_MS)
        return () => window.clearInterval(spawnInterval)
    }, [robberyGameActive])

    const daysSinceWelfare =
        lastWelfareDay === 0 ? Infinity : day - lastWelfareDay
    const canClaimWelfare = daysSinceWelfare >= WELFARE_COOLDOWN_DAYS

    const claimWelfare = () => {
        if (!canClaimWelfare) return
        setMoney((m) => m + WELFARE_AMOUNT)
        setLastWelfareDay(day)
        showNotice(`💶 ${WELFARE_AMOUNT} € vom Amt erhalten.`)
    }

    const rentApartment = () => {
        if (hasApartment) return
        if (money < APARTMENT_RENT_PRICE) return
        setMoney((m) => m - APARTMENT_RENT_PRICE)
        setHasApartment(true)
        setLastRentPaidDay(day)
        showNotice(
            "🏠 Du hast eine Wohnung gemietet! Ab jetzt kannst du nach Hause gehen."
        )
    }

    const daysSinceRent = lastRentPaidDay === 0 ? 0 : day - lastRentPaidDay
    const canPayRent = daysSinceRent >= RENT_DUE_INTERVAL_DAYS

    const payRent = () => {
        if (!hasApartment) return
        if (!canPayRent) return
        if (money < RENT_AMOUNT) return
        setMoney((m) => m - RENT_AMOUNT)
        setLastRentPaidDay(day)
        showNotice("🏠 Miete bezahlt. Nächste Miete in 7 Tagen fällig.")
    }

    const evictedRef = React.useRef(false)
    React.useEffect(() => {
        if (!hasApartment) {
            evictedRef.current = false
            return
        }
        if (daysSinceRent >= RENT_GRACE_DAYS && !evictedRef.current) {
            evictedRef.current = true
            setHasApartment(false)
            if (
                [
                    "flur",
                    "wohnzimmer",
                    "bedroom",
                    "kitchen",
                    "bathroom",
                    "balcony",
                ].includes(location)
            ) {
                setLocation("street")
            }
            showNotice(
                "🚪 Du wurdest aus deiner Wohnung geworfen, weil du die Miete nicht bezahlt hast!"
            )
        }
    }, [daysSinceRent, hasApartment, location])

    // -----------------------------------------------------
    // GANG-GEBIETE
    // -----------------------------------------------------
    const openTerritoryMap = () => {
        setTerritoryMapOpen(true)
        setSelectedDistrict(null)
    }
    const closeTerritoryMap = () => {
        setTerritoryMapOpen(false)
        setSelectedDistrict(null)
    }

    const attackDistrict = (id: string) => {
        const district = DISTRICTS.find((d) => d.id === id)
        if (!district || district.isHome) return
        if (isDistrictControlled(id)) return
        if (hiredDealers < DISTRICT_MIN_DEALERS_REQUIRED) {
            showNotice(
                `🤝 Du brauchst mindestens ${DISTRICT_MIN_DEALERS_REQUIRED} eigene Dealer, bevor du ein fremdes Gebiet angreifen kannst.`
            )
            return
        }
        if (!ownedWeapon) {
            showNotice(
                "🔪 Ohne Waffe geht hier nichts – kauf dir eine beim Lieferanten."
            )
            return
        }
        // Die Waffe wird beim Angriff benutzt und ist danach kaputt/weg,
        // egal ob der Angriff gelingt oder nicht
        setOwnedWeapon(null)
        territoryFightTapsRef.current = 0
        setTerritoryFightTapsDone(0)
        setTerritoryFightTimeLeft(DISTRICT_FIGHT_DURATION_SECONDS)
        setTerritoryFightActive(true)
        spawnFightTarget()
    }

    const territoryFightTapsNeeded = (() => {
        const district = DISTRICTS.find((d) => d.id === selectedDistrict)
        return district ? district.gangStrength : 10
    })()

    const tapTerritoryFight = () => {
        if (territoryFightTapsRef.current >= territoryFightTapsNeeded) return
        setFightTargetVisible(false)
        territoryFightTapsRef.current += 1
        setTerritoryFightTapsDone(territoryFightTapsRef.current)
        if (territoryFightTapsRef.current >= territoryFightTapsNeeded) {
            setTerritoryFightActive(false)
            const district = DISTRICTS.find((d) => d.id === selectedDistrict)
            if (district) {
                setDistrictControl((c) => ({ ...c, [district.id]: true }))
                setStrengthXP((xp) => xp + STRENGTH_XP_FIGHT_WIN * 2)
                setTotalSales((t) => t + DISTRICT_CONQUER_RESPECT)
                showNotice(
                    `🏴 ${district.name} gehört jetzt dir! Die ${district.gangName} sind vertrieben. Dein Respekt steigt.`
                )
            }
        }
    }

    React.useEffect(() => {
        if (!territoryFightActive) return
        const spawnInterval = window.setInterval(() => {
            spawnFightTarget()
        }, TERRITORY_FIGHT_TARGET_INTERVAL_MS)
        return () => window.clearInterval(spawnInterval)
    }, [territoryFightActive])

    React.useEffect(() => {
        if (!territoryFightActive) return
        const countdown = window.setInterval(() => {
            setTerritoryFightTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [territoryFightActive])

    React.useEffect(() => {
        if (territoryFightActive && territoryFightTimeLeft === 0) {
            setTerritoryFightActive(false)
            const district = DISTRICTS.find((d) => d.id === selectedDistrict)
            if (Math.random() < DISTRICT_ARREST_ON_FAIL_CHANCE) {
                showNotice(
                    `🚔 Zurückgeschlagen und festgenommen! Die ${district?.gangName ?? "Gang"} haben die Polizei gerufen.`
                )
                startCourt("light")
            } else {
                setHealth((h) => Math.max(h - 10, 0))
                showNotice(
                    `🏴 Zurückgeschlagen von den ${district?.gangName ?? "Gang"} – deine Waffe ist im Kampf verloren gegangen.`
                )
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [territoryFightTimeLeft, territoryFightActive])

    // ---- Fremde Dealer überfallen ----
    const canRobDistrictDealers = (districtId: string) =>
        (lastDealerRobberyDay[districtId] ?? 0) < day

    const startDealerRobbery = (districtId: string) => {
        if (!canRobDistrictDealers(districtId)) return
        if (!ownedWeapon) {
            showNotice(
                "🔪 Ohne Waffe legst du dich hier besser nicht mit denen an."
            )
            return
        }
        setDealerRobberyDistrict(districtId)
        setLastDealerRobberyDay((d) => ({ ...d, [districtId]: day }))
        dealerRobberyTapsRef.current = 0
        setDealerRobberyTapsDone(0)
        setDealerRobberyTimeLeft(DEALER_ROBBERY_DURATION_SECONDS)
        setDealerRobberyActive(true)
        spawnFightTarget()
    }

    const tapDealerRobbery = () => {
        if (dealerRobberyTapsRef.current >= DEALER_ROBBERY_TAPS_NEEDED) return
        setFightTargetVisible(false)
        dealerRobberyTapsRef.current += 1
        setDealerRobberyTapsDone(dealerRobberyTapsRef.current)
        if (dealerRobberyTapsRef.current >= DEALER_ROBBERY_TAPS_NEEDED) {
            setDealerRobberyActive(false)
            const gang = DISTRICTS.find((d) => d.id === dealerRobberyDistrict)
            const loot =
                DEALER_ROBBERY_MONEY_MIN +
                Math.round(
                    Math.random() *
                        (DEALER_ROBBERY_MONEY_MAX - DEALER_ROBBERY_MONEY_MIN)
                )
            const drugAmount =
                DEALER_ROBBERY_DRUGS_MIN +
                Math.round(
                    Math.random() *
                        (DEALER_ROBBERY_DRUGS_MAX - DEALER_ROBBERY_DRUGS_MIN)
                )
            const drug =
                DRUG_TYPES[Math.floor(Math.random() * DRUG_TYPES.length)]
            setMoney((m) => m + loot)
            setCarrying((c) => ({ ...c, [drug]: (c[drug] ?? 0) + drugAmount }))
            setStrengthXP((xp) => xp + STRENGTH_XP_FIGHT_WIN)
            setHeat((h) => Math.min(h + 1, MAX_HEAT))
            showNotice(
                `💰 Dealer der ${gang?.gangName ?? "Gang"} abgezogen! +${loot} € und ${drugAmount}g ${DRUG_INFO[drug].label}.`
            )
            setDealerRobberyDistrict(null)
        }
    }

    React.useEffect(() => {
        if (!dealerRobberyActive) return
        const spawnInterval = window.setInterval(() => {
            spawnFightTarget()
        }, TERRITORY_FIGHT_TARGET_INTERVAL_MS)
        const countdown = window.setInterval(() => {
            setDealerRobberyTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => {
            window.clearInterval(spawnInterval)
            window.clearInterval(countdown)
        }
    }, [dealerRobberyActive])

    React.useEffect(() => {
        if (dealerRobberyActive && dealerRobberyTimeLeft === 0) {
            setDealerRobberyActive(false)
            const gang = DISTRICTS.find((d) => d.id === dealerRobberyDistrict)
            setOwnedWeapon(null)
            if (Math.random() < DEALER_ROBBERY_FAIL_ARREST_CHANCE) {
                showNotice(
                    `🚔 Der Überfall ging schief – die ${gang?.gangName ?? "Gang"} haben die Polizei gerufen!`
                )
                startCourt("light")
            } else {
                setHealth((h) => Math.max(h - 15, 0))
                setMoney((m) => Math.floor(m * 0.8))
                showNotice(
                    `🥊 Die ${gang?.gangName ?? "Gang"} haben dich verprügelt – Waffe und etwas Geld weg.`
                )
            }
            if (dealerRobberyDistrict) {
                setDistrictBanUntilDay((b) => ({
                    ...b,
                    [dealerRobberyDistrict]: day + 1,
                }))
            }
            setDealerRobberyDistrict(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dealerRobberyTimeLeft, dealerRobberyActive])

    // ---- Rache: fremde Gangs überfallen DEINE Dealer ----
    const startRevengeDefense = (gangDistrictId: string) => {
        setRevengeDefenseGang(gangDistrictId)
        revengeDefenseTapsRef.current = 0
        setRevengeDefenseTapsDone(0)
        setRevengeDefenseTimeLeft(REVENGE_DEFENSE_DURATION_SECONDS)
        setRevengeDefenseActive(true)
        spawnFightTarget()
    }

    const tapRevengeDefense = () => {
        if (revengeDefenseTapsRef.current >= REVENGE_DEFENSE_TAPS_NEEDED) return
        setFightTargetVisible(false)
        revengeDefenseTapsRef.current += 1
        setRevengeDefenseTapsDone(revengeDefenseTapsRef.current)
        if (revengeDefenseTapsRef.current >= REVENGE_DEFENSE_TAPS_NEEDED) {
            setRevengeDefenseActive(false)
            const gang = DISTRICTS.find((d) => d.id === revengeDefenseGang)
            setTotalSales((t) => t + DISTRICT_DEFEND_RESPECT)
            setStrengthXP((xp) => xp + STRENGTH_XP_FIGHT_WIN)
            showNotice(
                `🛡 Überfall der ${gang?.gangName ?? "Gang"} abgewehrt! Dein Respekt steigt.`
            )
            setRevengeDefenseGang(null)
        }
    }

    React.useEffect(() => {
        if (!revengeDefenseActive) return
        const spawnInterval = window.setInterval(() => {
            spawnFightTarget()
        }, TERRITORY_FIGHT_TARGET_INTERVAL_MS)
        const countdown = window.setInterval(() => {
            setRevengeDefenseTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => {
            window.clearInterval(spawnInterval)
            window.clearInterval(countdown)
        }
    }, [revengeDefenseActive])

    React.useEffect(() => {
        if (revengeDefenseActive && revengeDefenseTimeLeft === 0) {
            setRevengeDefenseActive(false)
            const gang = DISTRICTS.find((d) => d.id === revengeDefenseGang)
            const stolenMoney = Math.floor(money * 0.3)
            setMoney((m) => m - stolenMoney)
            // Ein verlorener Überfall kostet Respekt
            setTotalSales((t) => Math.max(t - SALES_PER_LEVEL, 0))
            // Sie plündern auch einen deiner Gebiets-Bunker
            const myDistricts = DISTRICTS.filter(
                (d) =>
                    isDistrictControlled(d.id) &&
                    totalOf(getDistrictStash(d.id)) > 0
            )
            if (myDistricts.length > 0) {
                const target =
                    myDistricts[Math.floor(Math.random() * myDistricts.length)]
                setDistrictStash((s) => ({
                    ...s,
                    [target.id]: emptyDrugRecord(),
                }))
                showNotice(
                    `🔪 Die ${gang?.gangName ?? "Gang"} haben zugeschlagen! ${stolenMoney} € und dein Bunker in ${target.name} sind weg.`
                )
            } else {
                showNotice(
                    `🔪 Die ${gang?.gangName ?? "Gang"} haben dir ${stolenMoney} € abgenommen.`
                )
            }
            setRevengeDefenseGang(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [revengeDefenseTimeLeft, revengeDefenseActive])

    // Täglich: Chance, dass eine fremde Gang zurückschlägt
    const lastRevengeCheckDayRef = React.useRef(day)
    React.useEffect(() => {
        if (day <= lastRevengeCheckDayRef.current) return
        lastRevengeCheckDayRef.current = day
        if (
            revengeDefenseActive ||
            dealerRobberyActive ||
            territoryFightActive ||
            raidDefenseActive
        )
            return
        if (hiredDealers <= 0) return
        const hostileGangs = DISTRICTS.filter(
            (d) => !d.isHome && !isDistrictControlled(d.id)
        )
        if (hostileGangs.length === 0) return
        if (Math.random() < REVENGE_ROBBERY_CHANCE_PER_DAY) {
            const gang =
                hostileGangs[Math.floor(Math.random() * hostileGangs.length)]
            showNotice(
                `🚨 Die ${gang.gangName} überfallen deine Leute! Wehr dich!`
            )
            startRevengeDefense(gang.id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day])

    const collectTerritoryEarnings = () => {
        if (territoryEarnings <= 0) return
        setMoney((m) => m + territoryEarnings)
        showNotice(`💰 ${territoryEarnings} € aus deinen Gebieten abgeholt.`)
        setTerritoryEarnings(0)
    }

    const spawnFightTarget = () => {
        setFightTargetPos({
            x: 15 + Math.random() * 70,
            y: 22 + Math.random() * 46,
        })
        setFightTargetVisible(true)
    }

    const enterDistrictSpot = (spotId: string) => {
        const spot = DISTRICT_SPOTS.find((s) => s.id === spotId)
        if (!spot) return
        const bannedUntil = districtBanUntilDay[spot.districtId] ?? 0
        if (day < bannedUntil) {
            showNotice("🚫 Du wurdest hier verjagt – komm morgen wieder.")
            return
        }
        go(spotId)
    }

    const depositAllToDistrict = (districtId: string) => {
        if (totalOf(carrying) <= 0) return
        setDistrictStash((s) => {
            const current = s[districtId] ?? emptyDrugRecord()
            const next = { ...current }
            for (const drug of DRUG_TYPES)
                next[drug] = (next[drug] ?? 0) + (carrying[drug] ?? 0)
            return { ...s, [districtId]: next }
        })
        setCarrying(emptyDrugRecord())
        showNotice("📦 Ware im Bunker eingelagert.")
    }

    const withdrawAllFromDistrict = (districtId: string) => {
        const stash = getDistrictStash(districtId)
        const stashTotal = totalOf(stash)
        if (stashTotal <= 0) return
        if (totalOf(carrying) + stashTotal > effectiveMaxCarry) {
            showNotice(
                "🎒 Dein Gepäck ist zu voll dafür – erst was abgeben oder verkaufen."
            )
            return
        }
        setCarrying((c) => {
            const next = { ...c }
            for (const drug of DRUG_TYPES)
                next[drug] = (next[drug] ?? 0) + (stash[drug] ?? 0)
            return next
        })
        setDistrictStash((s) => ({ ...s, [districtId]: emptyDrugRecord() }))
        showNotice("📤 Bunker geleert – Ware ist jetzt bei dir.")
    }

    const assignDistrictDealer = (districtId: string) => {
        if (idleDealers <= 0) return
        setDistrictDealers((d) => ({
            ...d,
            [districtId]: (d[districtId] ?? 0) + 1,
        }))
        // Freien Dealer aus der Crew hier stationieren – oder neu benennen
        const free = crew.find((m) => m.districtId === null && !m.jailUntilDay)
        if (free) {
            setCrew((list) =>
                list.map((m) => (m.key === free.key ? { ...m, districtId } : m))
            )
        } else {
            addCrewMember(districtId)
        }
        showNotice("🤝 Dealer hier stationiert – er sammelt das Geld vor Ort.")
    }

    // Geld bei einem Dealer im Gebiet abholen
    const collectFromDistrict = (districtId: string) => {
        const amount = districtEarnings[districtId] ?? 0
        if (amount <= 0) return
        setMoney((m) => m + amount)
        setDistrictEarnings((e) => ({ ...e, [districtId]: 0 }))
        // Persönliches Abholen stärkt die Loyalität
        setCrew((list) =>
            list.map((m) =>
                m.districtId === districtId
                    ? { ...m, loyalty: Math.min(m.loyalty + 4, 100) }
                    : m
            )
        )
        const names = crew
            .filter((m) => m.districtId === districtId)
            .map((m) => m.name)
            .join(", ")
        showNotice(`💰 ${amount} € von ${names || "deinen Leuten"} abgeholt.`)
    }

    const unassignDistrictDealer = (districtId: string) => {
        if ((districtDealers[districtId] ?? 0) <= 0) return
        setDistrictDealers((d) => ({ ...d, [districtId]: d[districtId] - 1 }))
        showNotice("🤝 Dealer abgezogen.")
    }

    const attemptSellInHostileDistrict = () => {
        const district = DISTRICTS.find(
            (d) => d.id === currentDistrictSpot?.districtId
        )
        if (!district) return
        setCustomerRequest(false)
        setCustomerRequestAccepted(false)
        setCustomerRequestNpc(null)
        setCustomerDealDeadline(null)
        setCustomerMeetingSpot(null)
        setPhoneMessage(null)
        setDistrictBanUntilDay((b) => ({ ...b, [district.id]: day + 1 }))
        setHeat((h) => Math.min(h + 1, MAX_HEAT))
        setLocation("street")
        showNotice(
            `🚨 Erwischt! Die ${district.gangName} schmeißen dich raus – ${district.name} ist für dich bis morgen tabu.`
        )
        showConfirmation(false)
    }

    const startRaidDefense = (id: string) => {
        setRaidDefenseDistrict(id)
        raidDefenseTapsRef.current = 0
        setRaidDefenseTapsDone(0)
        setRaidDefenseTimeLeft(RAID_DEFENSE_DURATION_SECONDS)
        setRaidDefenseActive(true)
        spawnFightTarget()
    }

    const tapRaidDefense = () => {
        if (raidDefenseTapsRef.current >= RAID_DEFENSE_TAPS_NEEDED) return
        setFightTargetVisible(false)
        raidDefenseTapsRef.current += 1
        setRaidDefenseTapsDone(raidDefenseTapsRef.current)
        if (raidDefenseTapsRef.current >= RAID_DEFENSE_TAPS_NEEDED) {
            setRaidDefenseActive(false)
            const district = DISTRICTS.find((d) => d.id === raidDefenseDistrict)
            setTotalSales((t) => t + DISTRICT_DEFEND_RESPECT)
            showNotice(
                `🛡 Angriff der ${district?.gangName ?? "Gang"} auf ${district?.name ?? "dein Gebiet"} abgewehrt! Dein Respekt steigt.`
            )
            setRaidDefenseDistrict(null)
        }
    }

    React.useEffect(() => {
        if (!raidDefenseActive) return
        const spawnInterval = window.setInterval(() => {
            spawnFightTarget()
        }, TERRITORY_FIGHT_TARGET_INTERVAL_MS)
        return () => window.clearInterval(spawnInterval)
    }, [raidDefenseActive])

    React.useEffect(() => {
        if (!raidDefenseActive) return
        const countdown = window.setInterval(() => {
            setRaidDefenseTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [raidDefenseActive])

    React.useEffect(() => {
        if (raidDefenseActive && raidDefenseTimeLeft === 0) {
            setRaidDefenseActive(false)
            const district = DISTRICTS.find((d) => d.id === raidDefenseDistrict)
            if (district) {
                setDistrictControl((c) => ({ ...c, [district.id]: false }))
                showNotice(
                    `⚠️ Die ${district.gangName} haben sich ${district.name} zurückgeholt!`
                )
            }
            setRaidDefenseDistrict(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [raidDefenseTimeLeft, raidDefenseActive])

    // =====================================================
    // 06 KUNDEN-NACHRICHTEN-SYSTEM (ortsunabhängig)
    // =====================================================
    const deleteContact = (key: string) => {
        setDeletedContacts((list) => [...list, key])
        setFavoriteContacts((list) => list.filter((k) => k !== key))
        // Laufende Anfrage von diesem Kontakt sofort beenden
        if (customerRequestNpc === key) {
            setCustomerRequest(false)
            setCustomerRequestAccepted(false)
            setCustomerRequestNpc(null)
            setCustomerDealDeadline(null)
            setCustomerMeetingSpot(null)
            setPhoneMessage(null)
        }
        showNotice(
            "🗑 Kontakt gelöscht – du bekommst keine Nachrichten mehr von ihm."
        )
    }

    // Prüft, ob ein Laden zur aktuellen Uhrzeit offen hat (und damit als
    // Treffpunkt taugt). Berücksichtigt auch, dass er in einer Stunde noch
    // offen sein muss – sonst steht der Kunde vor verschlossener Tür.
    const isShopOpenForMeeting = (shopKey: string) => {
        const hourInAnHour = (hour + 2) % 24
        const closedNow = (h: number) => {
            if (shopKey === "kiosk")
                return isClosedAtHour(h, KIOSK_CLOSED_START, KIOSK_CLOSED_END)
            if (shopKey === "supermarkt")
                return isClosedAtHour(
                    h,
                    SUPERMARKET_CLOSED_START,
                    SUPERMARKET_CLOSED_END
                )
            if (shopKey === "sandwich")
                return isClosedAtHour(
                    h,
                    SANDWICH_CLOSED_START,
                    SANDWICH_CLOSED_END
                )
            // Nordwestzentrum und seine Hallen
            return isClosedAtHour(h, MALL_OPEN_END, MALL_OPEN_START)
        }
        return !closedNow(hour) && !closedNow(hourInAnHour)
    }

    // Beschreibt, in wessen Gebiet ein Treffpunkt liegt
    const describeSpotTerritory = (spotId: string) => {
        const spot = DISTRICT_SPOTS.find((s) => s.id === spotId)
        if (!spot) return "neutrales Gebiet"
        const district = DISTRICTS.find((d) => d.id === spot.districtId)
        if (!district) return "neutrales Gebiet"
        return isDistrictControlled(district.id)
            ? `dein Gebiet (${district.name})`
            : `Gebiet der ${district.gangName} (${district.name})`
    }

    // Sucht einen möglichen Treffpunkt aus (gesperrte Gebiete und
    // geschlossene Läden fallen raus)
    const pickMeetingSpot = () => {
        const availableSpots = CUSTOMER_MEETING_SPOTS.filter(
            (s) => !isSpotBanned(s)
        )
        const openShops = CUSTOMER_MEETING_SHOPS.filter((s) =>
            isShopOpenForMeeting(s)
        )
        const pool = [...availableSpots, ...openShops]
        const finalPool = pool.length > 0 ? pool : ["street"]
        return finalPool[Math.floor(Math.random() * finalPool.length)]
    }

    const acceptCustomerRequest = () => {
        const spot = customerMeetingSpot ?? pickMeetingSpot()
        setCustomerMeetingSpot(spot)
        setCustomerRequestAccepted(true)
        setCustomerDealDeadline(gameMinutes + CUSTOMER_DEAL_TIME_MINUTES)
        showNotice(
            `📍 Treffpunkt: ${LOCATION_NAMES[spot] ?? spot} – ${describeSpotTerritory(spot)}. Du hast 2 Stunden Zeit.`
        )
    }

    // Angenommenen Deal wieder absagen, um eine neue Anfrage zu bekommen
    const cancelCustomerDeal = () => {
        setCustomerRequest(false)
        setCustomerRequestAccepted(false)
        setCustomerRequestNpc(null)
        setCustomerDealDeadline(null)
        setCustomerMeetingSpot(null)
        setPhoneMessage(null)
        setMood((m) => Math.max(m - 5, 0))
        showNotice(
            "❌ Deal abgesagt – der Kunde ist sauer, aber du bist wieder frei."
        )
    }

    React.useEffect(() => {
        if (!phoneOn) return
        if (customerRequest) return
        if (totalOf(homeStash) + totalOf(carrying) < CUSTOMER_DEAL_MIN_GRAMS)
            return

        const delay =
            CUSTOMER_MIN_DELAY_MS +
            Math.random() * (CUSTOMER_MAX_DELAY_MS - CUSTOMER_MIN_DELAY_MS)

        const timeout = window.setTimeout(() => {
            const grams = generateCustomerDealGrams()
            const drug =
                DRUG_TYPES[Math.floor(Math.random() * DRUG_TYPES.length)]
            const isFriendRequest = Math.random() < 0.35
            const npc = isFriendRequest
                ? ALL_CONTACTS[Math.floor(Math.random() * ALL_CONTACTS.length)]
                      .key
                : null
            setCustomerDealGrams(grams)
            setCustomerDealDrug(drug)
            setCustomerRequestNpc(npc)
            // Treffpunkt sofort festlegen, damit man vor dem Annehmen sieht,
            // in wessen Gebiet man liefern müsste
            setCustomerMeetingSpot(pickMeetingSpot())
            setCustomerRequest(true)
            setCustomerRequestAccepted(false)
            setCustomerDealDeadline(null)
            const friendName = npc
                ? ALL_CONTACTS.find((f) => f.key === npc)?.name
                : null
            setPhoneMessage(
                friendName
                    ? `💬 ChatWave: Neue Nachricht von ${friendName}`
                    : "🔒 Kryptor: Neue Nachricht"
            )
            setPhoneNotifVisible(true)
            window.setTimeout(() => setPhoneNotifVisible(false), 5000)
        }, delay)

        return () => window.clearTimeout(timeout)
    }, [customerRequest, homeStash, carrying, phoneOn])

    React.useEffect(() => {
        if (customerDealDeadline === null) return
        if (gameMinutes >= customerDealDeadline) {
            setCustomerRequest(false)
            setCustomerRequestAccepted(false)
            setCustomerRequestNpc(null)
            setCustomerDealDeadline(null)
            setCustomerMeetingSpot(null)
            setPhoneMessage(null)
            showNotice(
                "⏰ Der Kunde hat nicht mehr gewartet – Anfrage ist weg."
            )
        }
    }, [gameMinutes, customerDealDeadline])

    // =====================================================
    // 07 GEFAHR DRAUSSEN (Überfälle & Polizei-Kontrollen)
    // =====================================================
    const isCourtOpen =
        !isWeekend &&
        !isClosedAtHour(hour, GERICHT_OPEN_END, GERICHT_OPEN_START)

    const collapseHandledRef = React.useRef(false)
    React.useEffect(() => {
        if (hunger > 0 && energy > 0) {
            collapseHandledRef.current = false
            return
        }
        if (collapseHandledRef.current) return
        const anyOverlayActive =
            courtActive ||
            courtDefenseActive ||
            jailFightActive ||
            breakinGameActive ||
            breakinEntryActive ||
            sellGameActive ||
            dealerFightActive ||
            policeEncounter ||
            escortSceneActive
        if (anyOverlayActive) return
        collapseHandledRef.current = true

        const wasOutside = OUTSIDE_LOCATIONS.includes(location)
        // Im Knast wacht man in der Zelle auf, nicht zu Hause –
        // sonst käme man durch einen Zusammenbruch vorzeitig frei
        const wasInJail =
            JAIL_LOCATIONS.includes(location) || location === "revierzelle"
        setCollapseSceneActive(true)
        window.setTimeout(() => {
            setCollapseSceneActive(false)
            setLocation(
                wasInJail
                    ? location === "revierzelle"
                        ? "revierzelle"
                        : "zelle"
                    : hasApartment
                      ? "bedroom"
                      : "street"
            )
            advanceTime(COLLAPSE_TIME_SKIP_MINUTES)
            setHunger((h) => Math.max(h, COLLAPSE_RESTORE_HUNGER))
            setEnergy((e) => Math.max(e, COLLAPSE_RESTORE_ENERGY))
            setHealth((h) => Math.max(h - COLLAPSE_HEALTH_PENALTY, 0))

            let robbed = false
            if (
                !wasInJail &&
                wasOutside &&
                Math.random() < COLLAPSE_ROBBED_CHANCE
            ) {
                robbed = true
                setMoney((m) => Math.floor(m / 2))
                setCarrying(emptyDrugRecord())
            }
            showNotice(
                robbed
                    ? "😵 Jemand hat dich ausgeraubt, während du außer Gefecht warst."
                    : "😵 Du kommst wieder zu dir."
            )
        }, COLLAPSE_SCENE_REAL_MS)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hunger,
        energy,
        courtActive,
        courtDefenseActive,
        jailFightActive,
        breakinGameActive,
        breakinEntryActive,
        sellGameActive,
        dealerFightActive,
        policeEncounter,
        escortSceneActive,
    ])

    const rollJudgeMood = () => {
        const roll = Math.random()
        return roll < 0.3 ? "gut" : roll < 0.6 ? "neutral" : "schlecht"
    }

    const startCourt = (severity: "light" | "heavy" | "fine") => {
        if (isCourtOpen) {
            setCourtSeverity(severity)
            setJudgeMood(rollJudgeMood())
            setCourtActive(true)
            setLocation("gericht")
        } else {
            setPendingCourtSeverity(severity)
            setLocation("revierzelle")
            showNotice(
                "🚔 Festgenommen! Das Gericht hat gerade zu – du wartest in der Ausnüchterungszelle, bis es öffnet."
            )
        }
    }

    React.useEffect(() => {
        if (pendingCourtSeverity === null) return
        if (!isCourtOpen) return
        setCourtSeverity(pendingCourtSeverity)
        setJudgeMood(rollJudgeMood())
        setPendingCourtSeverity(null)
        setCourtActive(true)
        setLocation("gericht")
    }, [isCourtOpen, pendingCourtSeverity])

    const payStrafzettel = () => {
        if (strafzettelDebt <= 0) return
        if (money < strafzettelDebt) return
        setMoney((m) => m - strafzettelDebt)
        showNotice(`🎫 Strafzettel bezahlt (${strafzettelDebt} €).`)
        setStrafzettelDebt(0)
        setStrafzettelIssuedDay(0)
    }

    React.useEffect(() => {
        if (!ownsAnyCar) return
        if (Math.random() < CAR_TICKET_CHANCE_PER_DAY) {
            setStrafzettelDebt((d) => {
                if (d === 0) setStrafzettelIssuedDay(day)
                return d + STRAFZETTEL_FINE
            })
            showNotice(
                `🎫 Strafzettel fürs Auto kassiert (${STRAFZETTEL_FINE} €, zahlbar am Revier).`
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day, ownsAnyCar])

    React.useEffect(() => {
        if (!OUTSIDE_LOCATIONS.includes(location)) return
        if (strafzettelDebt <= 0 || strafzettelIssuedDay <= 0) return
        if (day - strafzettelIssuedDay >= STRAFZETTEL_DUE_DAYS) {
            setStrafzettelDebt(0)
            setStrafzettelIssuedDay(0)
            showNotice(
                "🎫 Unbezahlter Strafzettel! Du wirst vor Gericht geladen."
            )
            startCourt("fine")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day, strafzettelDebt, strafzettelIssuedDay, location])

    const revierZelleEat = () => {
        setHunger((h) => Math.min(h + 30, 100))
        advanceTime(30)
    }

    const revierZelleSport = () => {
        setEnergy((e) => Math.max(e - 10, 0))
        setMood((m) => Math.min(m + 5, 100))
        advanceTime(30)
    }

    const revierZelleSleep = () => {
        const todayWeekday = (day - 1) % 7
        let targetDay = day
        if (!(todayWeekday <= 4 && hour < GERICHT_OPEN_START)) {
            targetDay = day + 1
            while ((targetDay - 1) % 7 > 4) {
                targetDay += 1
            }
        }
        const targetGameMinutes =
            (targetDay - 1) * 1440 + GERICHT_OPEN_START * 60
        const minutesToSleep = Math.max(targetGameMinutes - gameMinutes, 0)
        setEnergy(100)
        setHealth((h) => Math.min(h + 5, 100))
        setMood((m) => Math.min(m + 3, 100))
        setHunger((h) => Math.max(h - 20, 0))
        if (minutesToSleep > 0) advanceTime(minutesToSleep)
    }

    const chooseCourtOption = (withLawyer: boolean) => {
        if (withLawyer) {
            if (money < LAWYER_PRICE) return
            setMoney((m) => m - LAWYER_PRICE)
        }
        setCourtWithLawyerPending(withLawyer)
        courtDefenseTapsRef.current = 0
        setCourtDefenseTapsDone(0)
        setCourtDefenseTimeLeft(COURT_DEFENSE_DURATION_SECONDS)
        setCourtDefenseActive(true)
    }

    const tapCourtDefense = () => {
        if (courtDefenseTapsRef.current >= COURT_DEFENSE_TAPS_NEEDED) return
        courtDefenseTapsRef.current += 1
        setCourtDefenseTapsDone(courtDefenseTapsRef.current)
    }

    React.useEffect(() => {
        if (!courtDefenseActive) return
        const countdown = window.setInterval(() => {
            setCourtDefenseTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [courtDefenseActive])

    React.useEffect(() => {
        if (courtDefenseActive && courtDefenseTimeLeft === 0) {
            resolveCourtDefense()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courtDefenseTimeLeft, courtDefenseActive])

    const resolveCourtDefense = () => {
        setCourtDefenseActive(false)
        const performance =
            courtDefenseTapsRef.current / COURT_DEFENSE_TAPS_NEEDED
        const baseChance = courtWithLawyerPending
            ? FREEDOM_CHANCE_WITH_LAWYER
            : FREEDOM_CHANCE_NO_LAWYER
        const moodMod = JUDGE_MOOD_MODIFIER[judgeMood]
        const performanceBonus = performance * COURT_DEFENSE_MAX_BONUS
        const charismaBonus =
            (charismaLevel - 1) * CHARISMA_COURT_BONUS_PER_LEVEL
        const freedomChance = Math.min(
            Math.max(
                baseChance +
                    moodMod +
                    performanceBonus +
                    charismaBonus -
                    impairmentPenalty,
                0.05
            ),
            0.95
        )

        if (Math.random() < freedomChance) {
            showNotice("⚖️ Freispruch! Du bist wieder frei.")
            setLocation(hasApartment ? "flur" : "street")
        } else {
            const jailMinutes =
                courtSeverity === "heavy"
                    ? JAIL_HEAVY_MINUTES
                    : courtSeverity === "fine"
                      ? JAIL_FINE_MINUTES
                      : JAIL_LIGHT_MINUTES
            const jailLabel =
                courtSeverity === "heavy"
                    ? "1 Woche"
                    : courtSeverity === "fine"
                      ? "1 Tag"
                      : "3 Tage"
            setLocation("knast")
            setJailReleaseAt(gameMinutes + jailMinutes)
            showNotice(`⚖️ Schuldig! Du sitzt jetzt ${jailLabel} im Knast ab.`)
        }
        setCourtActive(false)
    }

    React.useEffect(() => {
        if (jailReleaseAt === null) return
        if (gameMinutes >= jailReleaseAt) {
            setJailReleaseAt(null)
            setLocation(hasApartment ? "flur" : "street")
            showNotice("🔓 Deine Zeit ist abgesessen – du bist wieder frei.")
        }
    }, [gameMinutes, jailReleaseAt, hasApartment])

    const isJailNight = isClosedAtHour(hour, JAIL_NIGHT_START, JAIL_NIGHT_END)
    React.useEffect(() => {
        if (jailReleaseAt === null) return
        if (!isJailNight) return
        if (
            location === "knast" ||
            location === "hof" ||
            location === "kantine" ||
            location === "sportraum"
        ) {
            setLocation("zelle")
            showNotice("🔒 Nachtsperre! Zurück in die Zelle.")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isJailNight, jailReleaseAt])

    const jailSleep = () => {
        setEnergy(100)
        setHealth((h) => Math.min(h + 5, 100))
        setMood((m) => Math.min(m + 3, 100))
        setHunger((h) => Math.max(h - 20, 0))
        advanceTime(TIME_COST_MINUTES.jailSleep)
    }

    const jailWatchTV = () => {
        setMood((m) => Math.min(m + 15, 100))
        setEnergy((e) => Math.max(e - 5, 0))
        advanceTime(TIME_COST_MINUTES.jailWatchTV)
    }

    const jailWeightsSport = () => {
        setEnergy((e) => Math.max(e - 20, 0))
        setHealth((h) => Math.min(h + 10, 100))
        setMood((m) => Math.min(m + 3, 100))
        setStrengthXP((xp) => xp + STRENGTH_XP_JAIL_SPORT)
        advanceTime(TIME_COST_MINUTES.jailWeightsSport)
    }

    const jailYardSport = () => {
        setEnergy((e) => Math.max(e - 20, 0))
        setHealth((h) => Math.min(h + 5, 100))
        setMood((m) => Math.min(m + 10, 100))
        setStrengthXP((xp) => xp + STRENGTH_XP_JAIL_SPORT)
        advanceTime(TIME_COST_MINUTES.jailYardSport)
    }

    const befriendInmate = () => {
        setMood((m) => Math.min(m + 15, 100))
        advanceTime(TIME_COST_MINUTES.jailSocial)
        setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)
        // Chance, einen Mithäftling als Kontakt zu gewinnen
        const available = INMATE_CONTACTS.filter(
            (i) =>
                !unlockedContacts.includes(i.key) &&
                !deletedContacts.includes(i.key)
        )
        if (available.length > 0 && Math.random() < 0.5) {
            const inmate =
                available[Math.floor(Math.random() * available.length)]
            const daysLeft =
                INMATE_RELEASE_MIN_DAYS +
                Math.round(
                    Math.random() *
                        (INMATE_RELEASE_MAX_DAYS - INMATE_RELEASE_MIN_DAYS)
                )
            setUnlockedContacts((list) => [...list, inmate.key])
            setNpcFriendship((f) => ({ ...f, [inmate.key]: 20 }))
            setInmateFreeDay((d) => ({ ...d, [inmate.key]: day + daysLeft }))
            showNotice(
                `🤝 ${inmate.name} kennengelernt – er kommt in ${daysLeft} Tagen raus. Danach könnt ihr Geschäfte machen.`
            )
            return
        }
        showNotice("🤝 Nette Unterhaltung gehabt.")
    }

    // Prüft, ob ein Kontakt gerade verfügbar ist (Häftlinge erst nach Haftende)
    const isContactAvailable = (key: string) => {
        const freeDay = inmateFreeDay[key]
        return freeDay === undefined || day >= freeDay
    }

    // Freigelassene Mithäftlinge als Dealer anheuern
    const hireInmateAsDealer = (key: string) => {
        const inmate = INMATE_CONTACTS.find((i) => i.key === key)
        if (!inmate) return
        if (!isContactAvailable(key)) return
        if (hiredDealers >= maxDealers) {
            showNotice(
                "🤝 Du kannst noch keine weiteren Dealer führen – steig erst im Level."
            )
            return
        }
        const cost = Math.round(DEALER_HIRE_COST * 0.6)
        if (money < cost) {
            showNotice(`💸 Du brauchst ${cost} € Startgeld für ihn.`)
            return
        }
        setMoney((m) => m - cost)
        setHiredDealers((d) => d + 1)
        setCrew((list) => [
            ...list,
            {
                key: `crew_${key}_${Date.now()}`,
                name: inmate.name,
                districtId: null,
                loyalty: 50 + Math.round(Math.random() * 25),
            },
        ])
        setNpcFriendship((f) => ({
            ...f,
            [key]: Math.min((f[key] ?? 0) + 10, 100),
        }))
        showNotice(
            `🤝 ${inmate.name} arbeitet jetzt für dich (${cost} € Startgeld).`
        )
    }

    // Gezielt Leute ansprechen (statt zufälliger Begegnungen)
    const approachPeople = () => {
        setEnergy((e) => Math.max(e - 5, 0))
        setCharismaXP((xp) => xp + CHARISMA_XP_CHAT)
        advanceTime(30)
        const available = NIGHTLIFE_CONTACTS.filter(
            (c) =>
                !unlockedContacts.includes(c.key) &&
                !deletedContacts.includes(c.key)
        )
        if (available.length === 0) {
            showNotice("🤷 Hier ist gerade niemand, den du noch nicht kennst.")
            return
        }
        const chance = 0.45 + (charismaLevel - 1) * 0.04 + styleScore * 0.012
        if (Math.random() < chance) {
            const contact =
                available[Math.floor(Math.random() * available.length)]
            setUnlockedContacts((list) => [...list, contact.key])
            setNpcFriendship((f) => ({ ...f, [contact.key]: 8 }))
            setMood((m) => Math.min(m + 8, 100))
            showNotice(
                `🤝 ${contact.name} kennengelernt – jetzt in deinem ChatWave.`
            )
        } else {
            showNotice("😐 Niemand hat gerade Lust auf ein Gespräch.")
        }
    }

    const startBeef = () => {
        if (Math.random() < 0.25) {
            const take = Math.round(10 + Math.random() * 20)
            setMood((m) => Math.min(m + 5, 100))
            setMoney((m) => m + take)
            showNotice(
                `👊 Der andere zieht sofort den Schwanz ein – du kassierst ${take} € ab.`
            )
            advanceTime(TIME_COST_MINUTES.jailSocial)
            return
        }
        jailFightTapsRef.current = 0
        setJailFightTapsDone(0)
        setJailFightTimeLeft(JAIL_FIGHT_DURATION_SECONDS)
        setJailFightActive(true)
    }

    const tapJailFight = () => {
        if (jailFightTapsRef.current >= JAIL_FIGHT_TAPS_NEEDED) return
        jailFightTapsRef.current += 1
        setJailFightTapsDone(jailFightTapsRef.current)
        if (jailFightTapsRef.current >= JAIL_FIGHT_TAPS_NEEDED) {
            setJailFightActive(false)
            const take = Math.round(15 + Math.random() * 25)
            setMood((m) => Math.min(m + 10, 100))
            setMoney((m) => m + take)
            setStrengthXP((xp) => xp + STRENGTH_XP_FIGHT_WIN)
            showNotice(
                `👊 Gewonnen! Respekt steigt, du kassierst ${take} € ab.`
            )
        }
    }

    React.useEffect(() => {
        if (!jailFightActive) return
        const countdown = window.setInterval(() => {
            setJailFightTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [jailFightActive])

    React.useEffect(() => {
        if (jailFightActive && jailFightTimeLeft === 0) {
            setJailFightActive(false)
            setHealth((h) => Math.max(h - 15, 0))
            setMood((m) => Math.max(m - 15, 0))
            showNotice("👊 Verloren... ordentlich eingesteckt.")
            // Prügelei bleibt nicht ohne Folgen
            extendSentence(
                JAIL_EXTRA_DAYS_FIGHT,
                "Die Schlägerei wurde gemeldet"
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jailFightTimeLeft, jailFightActive])

    const jailWorkJob = () => {
        setEnergy((e) => Math.max(e - 15, 0))
        setMoney((m) => m + JAIL_JOB_PAY)
        advanceTime(TIME_COST_MINUTES.jailWorkJob)
    }

    const doSport = () => {
        if (energy < SPORT_ENERGY_COST) return
        playAction("sport", (q) => {
            const bonus = 1 + q * ACTION_GAME_MAX_BONUS
            setEnergy((e) => Math.max(e - SPORT_ENERGY_COST, 0))
            setHealth((h) =>
                Math.min(h + Math.round(SPORT_HEALTH_GAIN * bonus), 100)
            )
            setTotalSales(
                (t) => t + Math.max(1, Math.round(SPORT_RESPECT_GAIN * bonus))
            )
            setStrengthXP((xp) => xp + Math.round(STRENGTH_XP_SPORT * bonus))
            boostCompanions(3)
            advanceTime(45)
            showNotice(
                q >= 0.85
                    ? "💪 Top-Training! Gesundheit, Respekt und Kraft steigen deutlich."
                    : q >= 0.5
                      ? "💪 Ordentlich trainiert."
                      : "😮‍💨 Halbherziges Training – bringt nicht viel."
            )
        })
    }

    const buyJailPiece = () => {
        if (money < JAIL_PIECE_PRICE) return
        setMoney((m) => m - JAIL_PIECE_PRICE)
        setCarrying((c) => ({
            ...c,
            hashish: (c.hashish ?? 0) + JAIL_PIECE_BUY_AMOUNT,
        }))
        advanceTime(15)
        showNotice(
            `🌿 ${JAIL_PIECE_BUY_AMOUNT}g Piece auf dem Schwarzmarkt organisiert.`
        )
    }

    const drinkMoonshine = () => {
        if (money < JAIL_MOONSHINE_PRICE) return
        setMoney((m) => m - JAIL_MOONSHINE_PRICE)
        setDrunkUntilMinutes(
            (prev) =>
                Math.max(prev ?? gameMinutes, gameMinutes) +
                JAIL_MOONSHINE_BUZZ_MINUTES
        )
        setMood((m) => Math.min(m + 10, 100))
        advanceTime(15)
        showNotice("🥃 Selbstgebrannten getrunken – das Zeug hat's in sich.")
    }

    // ---- Schwarzmarkt im Knast ----
    // Strafe verlängern (auch bei Beef genutzt)
    const extendSentence = (days: number, reason: string) => {
        setJailReleaseAt((prev) => (prev ?? gameMinutes) + days * 1440)
        showNotice(`⛓ ${reason} – ${days} Tage Aufschlag auf deine Strafe.`)
    }

    const sellDrugsInJail = (drug: string) => {
        const amount = 5
        if ((carrying[drug] ?? 0) < amount) return
        const price = Math.round(
            (sellPrices[drug] ?? DRUG_INFO[drug].sellRange[0]) *
                amount *
                JAIL_SELL_PRICE_MULTIPLIER
        )
        setCarrying((cur) => ({ ...cur, [drug]: (cur[drug] ?? 0) - amount }))
        advanceTime(30)
        // Erwischt? Dann gibt's Aufschlag statt Geld
        if (Math.random() < JAIL_SELL_CAUGHT_CHANCE) {
            setCarrying((cur) => ({ ...cur, [drug]: 0 }))
            extendSentence(
                JAIL_EXTRA_DAYS_DEALING,
                "Beim Dealen im Knast erwischt, deine Ware ist weg"
            )
            showConfirmation(false)
            return
        }
        setMoney((m) => m + price)
        setTotalSales((t) => t + 1)
        showNotice(
            `💰 ${amount}g ${DRUG_INFO[drug].label} im Knast verkauft – ${price} €.`
        )
    }

    const sellAlcoholInJail = (key: string) => {
        if ((alcoholInventory[key] ?? 0) <= 0) return
        const item = ALCOHOL_TYPES.find((a) => a.key === key)
        setAlcoholInventory((inv) => ({ ...inv, [key]: inv[key] - 1 }))
        advanceTime(20)
        if (Math.random() < JAIL_SELL_CAUGHT_CHANCE) {
            setAlcoholInventory((inv) => ({ ...inv, [key]: 0 }))
            extendSentence(
                JAIL_EXTRA_DAYS_DEALING,
                "Mit Alkohol im Knast erwischt, alles beschlagnahmt"
            )
            showConfirmation(false)
            return
        }
        setMoney((m) => m + JAIL_SELL_ALCOHOL_PRICE)
        showNotice(
            `💰 ${item?.label ?? "Alkohol"} im Knast verkauft – ${JAIL_SELL_ALCOHOL_PRICE} €.`
        )
    }

    const orderEscort = () => {
        if (money < ESCORT_PRICE) return
        if (escortOrdered) return
        setMoney((m) => m - ESCORT_PRICE)
        const wait =
            ESCORT_MIN_WAIT_MINUTES +
            Math.random() * (ESCORT_MAX_WAIT_MINUTES - ESCORT_MIN_WAIT_MINUTES)
        setEscortArrivalMinutes(gameMinutes + Math.round(wait))
        setEscortOrdered(true)
        showNotice(
            "🌹 Bestellung aufgegeben – in 1-2 Stunden klingelt es an der Tür."
        )
    }

    React.useEffect(() => {
        if (!escortOrdered || escortArrivalMinutes === null) return
        if (escortDoorbellActive) return
        if (gameMinutes >= escortArrivalMinutes) {
            setEscortDoorbellActive(true)
        }
    }, [gameMinutes, escortOrdered, escortArrivalMinutes, escortDoorbellActive])

    const openDoorForEscort = () => {
        if (!escortDoorbellActive) return
        setEscortSceneActive(true)
        window.setTimeout(() => {
            setEscortSceneActive(false)
            setEscortDoorbellActive(false)
            setEscortOrdered(false)
            setEscortArrivalMinutes(null)
            // Auch beim Escort das Minispiel – hier zählt es nur für die Laune,
            // eine Beziehung entsteht daraus nicht
            startIntimacy(ESCORT_NAME)
        }, ESCORT_IMAGE_REAL_MS)
    }

    const inviteDateHome = (name: string) => {
        if (dateVisitOrdered || escortOrdered) return
        const match = sparklyMatches.find((m) => m.name === name)
        if (!match) return
        const wait =
            ESCORT_MIN_WAIT_MINUTES +
            Math.random() * (ESCORT_MAX_WAIT_MINUTES - ESCORT_MIN_WAIT_MINUTES)
        setDateVisitName(name)
        setDateVisitArrivalMinutes(gameMinutes + Math.round(wait))
        setDateVisitOrdered(true)
        showNotice(
            `💕 ${name} hat zugesagt vorbeizukommen – in 1-2 Stunden klingelt es.`
        )
    }

    React.useEffect(() => {
        if (!dateVisitOrdered || dateVisitArrivalMinutes === null) return
        if (dateVisitDoorbellActive) return
        if (gameMinutes >= dateVisitArrivalMinutes) {
            setDateVisitDoorbellActive(true)
        }
    }, [
        gameMinutes,
        dateVisitOrdered,
        dateVisitArrivalMinutes,
        dateVisitDoorbellActive,
    ])

    const openDoorForDate = () => {
        if (!dateVisitDoorbellActive) return
        const name = dateVisitName
        setDateVisitDoorbellActive(false)
        setDateVisitOrdered(false)
        setDateVisitArrivalMinutes(null)
        setDateVisitName(null)
        if (!name) return

        const match = sparklyMatches.find((m) => m.name === name)
        const successChance = 0.5 + (match ? match.level * 0.03 : 0)
        if (Math.random() < successChance) {
            setDateVisitSceneActive(true)
            window.setTimeout(() => {
                setDateVisitSceneActive(false)
                // Statt Zeitsprung: Minispiel, das über die Beziehung entscheidet
                startIntimacy(name)
            }, ESCORT_IMAGE_REAL_MS)
        } else {
            showNotice(
                `💔 Du machst auf, aber ${name} hat's sich anders überlegt und kommt doch nicht.`
            )
        }
    }

    const orderFood = (mealKey: string, price: number) => {
        if (foodOrdered) return
        if (money < price) return
        setMoney((m) => m - price)
        setFoodOrderedMeal(mealKey)
        setFoodArrivalMinutes(gameMinutes + FOODO_DELIVERY_MINUTES)
        setFoodOrdered(true)
        showNotice("🍔 Bestellung aufgegeben – in etwa 1 Stunde klingelt's.")
    }

    React.useEffect(() => {
        if (!foodOrdered || foodArrivalMinutes === null) return
        if (foodDoorbellActive) return
        if (gameMinutes >= foodArrivalMinutes) {
            setFoodDoorbellActive(true)
        }
    }, [gameMinutes, foodOrdered, foodArrivalMinutes, foodDoorbellActive])

    const openDoorForFood = () => {
        if (!foodDoorbellActive) return
        setFoodDoorbellActive(false)
        setFoodOrdered(false)
        setFoodArrivalMinutes(null)
        setDeliveredMeal(foodOrderedMeal)
        setFoodOrderedMeal(null)
        showNotice("🍔 Lieferung ist da! Ab ins Wohnzimmer zum Essen.")
    }

    const eatDeliveredMeal = () => {
        if (!deliveredMeal) return
        const meal = FOODO_MENU.find((m) => m.key === deliveredMeal)
        if (!meal) return
        setHunger((h) => Math.min(h + meal.hunger, 100))
        setMood((m) => Math.min(m + meal.mood, 100))
        setDeliveredMeal(null)
        advanceTime(20)
        showNotice(`🍽 ${meal.name} genossen.`)
    }

    const jailEatCell = () => {
        setHunger((h) => Math.min(h + 30, 100))
        advanceTime(TIME_COST_MINUTES.jailEatCell)
    }

    const jailEatCanteen = () => {
        setHunger((h) => Math.min(h + 50, 100))
        setMood((m) => Math.min(m + 5, 100))
        advanceTime(TIME_COST_MINUTES.jailEatCanteen)
    }

    const fleeAttempt = () => {
        const successChance =
            FLEE_BASE_CHANCE +
            (effectiveLevel - 1) * FLEE_CHANCE_PER_LEVEL +
            (strengthLevel - 1) * STRENGTH_FLEE_BONUS_PER_LEVEL -
            impairmentPenalty
        if (Math.random() < successChance) {
            showNotice("🏃 Geschafft! Du konntest entkommen.")
            setPoliceEncounter(false)
            return
        }
        if (policeEncounterContext === "breakin") {
            setMoney((m) => Math.floor(m / 2))
            setHeat((h) => Math.min(h + 2, MAX_HEAT))
            showNotice(
                "🚨 Erwischt beim Einbruch! Die Hälfte deines Geldes ist als Strafe weg."
            )
            setPoliceEncounter(false)
            startCourt("light")
        } else if (policeEncounterContext === "cartheft") {
            setHeat((h) => Math.min(h + 2, MAX_HEAT))
            showNotice(
                "🚨 Beim Kurzschließen erwischt! Ohne Auto, aber mit einer Anzeige."
            )
            setPoliceEncounter(false)
            startCourt("light")
        } else if (policeEncounterContext === "stolencarstop") {
            confiscateOneStolenCar()
            setHeat((h) => Math.min(h + 2, MAX_HEAT))
            showNotice(
                "🚨 Kontrolle erwischt dich im geklauten Auto! Wagen weg, dazu eine Anzeige."
            )
            setPoliceEncounter(false)
            startCourt("light")
        } else {
            const carryingAtArrest = totalOf(carrying)
            setCarrying(emptyDrugRecord())
            setHeat((h) => Math.min(h + 2, MAX_HEAT))
            showNotice("🚨 Erwischt! Deine mitgeführte Ware ist weg.")
            setPoliceEncounter(false)
            startCourt(
                carryingAtArrest >= HEAVY_SEVERITY_CARRYING_THRESHOLD
                    ? "heavy"
                    : "light"
            )
        }
    }

    const surrender = () => {
        if (policeEncounterContext === "breakin") {
            setMoney((m) => Math.floor(m / 2))
            showNotice(
                "🙋 Du hast dich ergeben. Ein Teil deines Geldes wurde einbehalten."
            )
            setPoliceEncounter(false)
            startCourt("light")
        } else if (policeEncounterContext === "cartheft") {
            showNotice(
                "🙋 Du hast dich ergeben. Zum Glück hattest du das Auto noch nicht."
            )
            setPoliceEncounter(false)
            startCourt("light")
        } else if (policeEncounterContext === "stolencarstop") {
            confiscateOneStolenCar()
            showNotice("🙋 Du hast dich ergeben. Das geklaute Auto ist weg.")
            setPoliceEncounter(false)
            startCourt("light")
        } else {
            const carryingAtArrest = totalOf(carrying)
            setCarrying(emptyDrugRecord())
            showNotice(
                "🙋 Du hast dich ergeben. Deine Ware wurde beschlagnahmt."
            )
            setPoliceEncounter(false)
            startCourt(
                carryingAtArrest >= HEAVY_SEVERITY_CARRYING_THRESHOLD
                    ? "heavy"
                    : "light"
            )
        }
    }

    const canCallDealerForHelp =
        hiredDealers > 0 &&
        (dealerHelpCalledAt === null ||
            gameMinutes - dealerHelpCalledAt >= DEALER_HELP_COOLDOWN_MINUTES)

    const callDealerForHelp = () => {
        if (!canCallDealerForHelp) return
        setDealerHelpCalledAt(gameMinutes)
        if (Math.random() < DEALER_HELP_SUCCESS_CHANCE - impairmentPenalty) {
            showNotice(
                "🆘 Dein Dealer taucht auf und verscheucht die Lage – du kommst sauber weg."
            )
            setPoliceEncounter(false)
        } else {
            showNotice(
                "🆘 Dein Dealer kommt nicht rechtzeitig – du bist auf dich allein gestellt."
            )
        }
    }

    const spawnBreakinTarget = () => {
        setBreakinTargetPos({
            x: 15 + Math.random() * 70,
            y: 25 + Math.random() * 50,
        })
        setBreakinTargetVisible(true)
    }

    const currentPriceWeek = Math.floor((day - 1) / 7)
    React.useEffect(() => {
        if (sellPricesWeek !== currentPriceWeek) {
            setSellPrices(generateSellPrices())
            setBuyPrices(generateBuyPrices())
            setSellPricesWeek(currentPriceWeek)
        }
        if (supplierBoughtWeek !== currentPriceWeek) {
            setSupplierBoughtThisWeek(emptyDrugRecord())
            setSupplierBoughtWeek(currentPriceWeek)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPriceWeek])

    const breakinCurrentWeek = Math.floor((day - 1) / 7)
    const effectiveBreakinCounts =
        breakinCountsWeek === breakinCurrentWeek ? breakinCounts : {}

    const getBreakinCount = (shop: string) => effectiveBreakinCounts[shop] ?? 0
    const hasBrokenInToday = (shop: string) =>
        (breakinLastDay[shop] ?? 0) >= day
    const canBreakInShop = (shop: string) =>
        getBreakinCount(shop) < BREAKIN_MAX_PER_WEEK && !hasBrokenInToday(shop)

    // Ein freigelassener Kumpel kann beim Einbruch mitmachen
    const [breakinPartner, setBreakinPartner] = React.useState<string | null>(
        null
    )
    const availableCrimePartners = INMATE_CONTACTS.filter(
        (i) =>
            unlockedContacts.includes(i.key) &&
            !deletedContacts.includes(i.key) &&
            isContactAvailable(i.key)
    )

    const startBreakIn = (partnerKey?: string) => {
        setBreakinPartner(partnerKey ?? null)
        const priorAttempts = getBreakinCount(location)
        if (priorAttempts >= BREAKIN_MAX_PER_WEEK) return
        if (hasBrokenInToday(location)) return

        setBreakinCounts({
            ...effectiveBreakinCounts,
            [location]: priorAttempts + 1,
        })
        setBreakinCountsWeek(breakinCurrentWeek)
        setBreakinLastDay({ ...breakinLastDay, [location]: day })
        breakinPriorAttemptsRef.current = priorAttempts

        breakinEntryTapsRef.current = 0
        setBreakinEntryTapsDone(0)
        setBreakinEntryTimeLeft(BREAKIN_ENTRY_DURATION_SECONDS)
        setBreakinEntryActive(true)
    }

    const tapBreakinEntry = () => {
        breakinEntryTapsRef.current += 1
        setBreakinEntryTapsDone(breakinEntryTapsRef.current)
        if (breakinEntryTapsRef.current >= BREAKIN_ENTRY_TAPS_NEEDED) {
            setBreakinEntryActive(false)

            const duration =
                (BREAKIN_DURATIONS_BY_ATTEMPT[
                    breakinPriorAttemptsRef.current
                ] ?? 10) + (breakinPartner ? PARTNER_BREAKIN_EXTRA_SECONDS : 0)
            breakinCaughtRef.current = 0
            setBreakinCaught(0)
            setBreakinTimeLeft(duration)
            setBreakinGameActive(true)
            spawnBreakinTarget()
        }
    }

    React.useEffect(() => {
        if (breakinEntryActive && breakinEntryTimeLeft === 0) {
            setBreakinEntryActive(false)
            triggerBreakInAlarm(0)
            showNotice(
                "🚨 Zu langsam am Schloss – Alarm ausgelöst, bevor du überhaupt drin warst!"
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [breakinEntryTimeLeft, breakinEntryActive])

    React.useEffect(() => {
        if (!breakinEntryActive) return
        const countdown = window.setInterval(() => {
            setBreakinEntryTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [breakinEntryActive])

    const catchBreakinTarget = () => {
        setBreakinTargetVisible(false)
        breakinCaughtRef.current += 1
        setBreakinCaught(breakinCaughtRef.current)
    }

    const currentBreakinRewardPerCatch =
        MALL_SHOPS.find((s) => s.key === location)?.breakinReward ??
        DISTRICT_SPOT_SHOPS[location]?.breakinReward ??
        BREAKIN_REWARD_PER_CATCH

    const endBreakInSuccess = (caughtCount: number) => {
        let reward = caughtCount * currentBreakinRewardPerCatch
        if (breakinPartner) {
            // Zu zweit gibt's mehr Beute, aber ihr teilt sie
            const partner = INMATE_CONTACTS.find(
                (i) => i.key === breakinPartner
            )
            reward = Math.round(reward * 1.6 * PARTNER_BREAKIN_SHARE)
            setNpcFriendship((f) => ({
                ...f,
                [breakinPartner]: Math.min((f[breakinPartner] ?? 0) + 8, 100),
            }))
            showNotice(
                `🤝 ${partner?.name ?? "Dein Kumpel"} teilt die Beute mit dir.`
            )
        }
        setBreakinGameActive(false)
        setBreakinTargetVisible(false)
        showConfirmation(true)
        startPoliceChase(reward)
    }

    const carPointerDown = (
        type: "legit" | "stolen",
        e: React.PointerEvent
    ) => {
        const offset = type === "legit" ? carLegitOffset : carStolenOffset
        carDragRef.current = {
            type,
            startX: e.clientX,
            startY: e.clientY,
            origX: offset.x,
            origY: offset.y,
        }
    }
    React.useEffect(() => {
        const handleMove = (e: PointerEvent) => {
            const d = carDragRef.current
            if (!d.type) return
            const next = {
                x: d.origX + (e.clientX - d.startX),
                y: d.origY + (e.clientY - d.startY),
            }
            if (d.type === "legit") setCarLegitOffset(next)
            else setCarStolenOffset(next)
        }
        const handleUp = () => {
            carDragRef.current = {
                type: null,
                startX: 0,
                startY: 0,
                origX: 0,
                origY: 0,
            }
        }
        window.addEventListener("pointermove", handleMove)
        window.addEventListener("pointerup", handleUp)
        return () => {
            window.removeEventListener("pointermove", handleMove)
            window.removeEventListener("pointerup", handleUp)
        }
    }, [])
    const resetCarPositions = () => {
        setCarLegitOffset({ x: 0, y: 0 })
        setCarStolenOffset({ x: 0, y: 0 })
    }

    const startPoliceChase = (reward: number) => {
        setChasePendingReward(reward)
        const startPos = { x: 0, y: 1 }
        setChasePlayerPos(startPos)
        chasePlayerPosRef.current = startPos
        setChasePolicePos({ x: 5, y: 5 })
        setChaseTimeLeft(CHASE_DURATION_SECONDS)
        setPoliceChaseActive(true)
    }

    const moveChasePlayer = (dx: number, dy: number) => {
        setChasePlayerPos((p) => {
            const next = {
                x: Math.min(Math.max(p.x + dx, 0), CHASE_GRID_SIZE - 1),
                y: Math.min(Math.max(p.y + dy, 0), CHASE_GRID_SIZE - 1),
            }
            if (!chaseIsStreet(next.x, next.y)) return p
            chasePlayerPosRef.current = next
            return next
        })
    }

    // Jede Sekunde: Polizei sucht sich den kürzesten Weg zum Spieler
    React.useEffect(() => {
        if (!policeChaseActive) return
        const tick = window.setInterval(() => {
            setChasePolicePos((prev) =>
                chaseBfsNextStep(prev, chasePlayerPosRef.current)
            )
            setChaseTimeLeft((t) => Math.max(t - 1, 0))
        }, CHASE_TICK_MS)
        return () => window.clearInterval(tick)
    }, [policeChaseActive])

    React.useEffect(() => {
        if (!policeChaseActive) return
        if (
            chasePolicePos.x === chasePlayerPos.x &&
            chasePolicePos.y === chasePlayerPos.y
        ) {
            setPoliceChaseActive(false)
            showNotice(
                "🚨 Erwischt bei der Flucht! Die Ware ist futsch, dazu eine Anzeige."
            )
            startCourt("light")
        }
    }, [chasePolicePos, chasePlayerPos, policeChaseActive])

    React.useEffect(() => {
        if (policeChaseActive && chaseTimeLeft === 0) {
            setPoliceChaseActive(false)
            if (chasePendingReward > 0) {
                setStolenGoods((g) => g + chasePendingReward)
            }
            setHeat((h) => Math.min(h + 1, MAX_HEAT))
            setSurveillanceUntilMinutes(
                gameMinutes + SURVEILLANCE_DURATION_MINUTES
            )
            setLocation(hasApartment ? "flur" : "street")
            showNotice(
                chasePendingReward > 0
                    ? `🏃 Entkommen, direkt nach Hause gehetzt! Diebesgut sicher (Wert ~${chasePendingReward} €) – verkauf es beim Lieferanten.`
                    : "🏃 Entkommen, direkt nach Hause gehetzt – diesmal ohne Beute."
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chaseTimeLeft, policeChaseActive])

    const leaveBreakInEarly = () => {
        endBreakInSuccess(breakinCaughtRef.current)
    }

    const triggerBreakInAlarm = (caughtCount: number) => {
        const partialReward = caughtCount * currentBreakinRewardPerCatch
        if (partialReward > 0) {
            setStolenGoods((g) => g + partialReward)
        }
        setSurveillanceUntilMinutes(gameMinutes + SURVEILLANCE_DURATION_MINUTES)
        setBreakinGameActive(false)
        setBreakinTargetVisible(false)
        setPoliceEncounterContext("breakin")
        setPoliceEncounter(true)
        showConfirmation(false)
    }

    React.useEffect(() => {
        if (!breakinGameActive) return
        const countdown = window.setInterval(() => {
            setBreakinTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(countdown)
    }, [breakinGameActive])

    React.useEffect(() => {
        if (breakinGameActive && breakinTimeLeft === 0) {
            triggerBreakInAlarm(breakinCaughtRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [breakinTimeLeft, breakinGameActive])

    React.useEffect(() => {
        if (!breakinGameActive) return
        const spawnInterval = window.setInterval(() => {
            spawnBreakinTarget()
        }, BREAKIN_TARGET_INTERVAL_MS)
        return () => window.clearInterval(spawnInterval)
    }, [breakinGameActive])

    const startUeberfallGame = () => {
        const moneyLost = Math.floor(money * (0.2 + Math.random() * 0.3))
        setUeberfallPendingLoss(moneyLost)
        ueberfallReactedRef.current = false
        setUeberfallTimeLeft(UEBERFALL_REACT_SECONDS)
        setUeberfallGameActive(true)
    }

    const reactToUeberfall = () => {
        if (ueberfallReactedRef.current) return
        ueberfallReactedRef.current = true
        const reducedLoss = Math.floor(ueberfallPendingLoss / 2)
        setMoney((m) => Math.max(m - reducedLoss, 0))
        showNotice(
            `🥊 Du hast dich gewehrt! Nur -${reducedLoss} € statt mehr, Ware gerettet.`
        )
        setUeberfallGameActive(false)
    }

    React.useEffect(() => {
        if (!ueberfallGameActive) return
        const interval = window.setInterval(() => {
            setUeberfallTimeLeft((t) => Math.max(t - 1, 0))
        }, 1000)
        return () => window.clearInterval(interval)
    }, [ueberfallGameActive])

    React.useEffect(() => {
        if (
            ueberfallGameActive &&
            ueberfallTimeLeft === 0 &&
            !ueberfallReactedRef.current
        ) {
            ueberfallReactedRef.current = true
            setMoney((m) => Math.max(m - ueberfallPendingLoss, 0))
            setCarrying(0)
            showNotice(
                `🥊 Überfall! -${ueberfallPendingLoss} € und deine mitgeführte Ware ist weg.`
            )
            setUeberfallGameActive(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ueberfallTimeLeft, ueberfallGameActive])

    React.useEffect(() => {
        if (!OUTSIDE_LOCATIONS.includes(location)) return
        if (policeEncounter) return
        if (heat < 1) return
        if (money <= 0 && totalOf(carrying) <= 0) return

        let chance = BASE_DANGER_CHANCE
        if (justLeftSupplier) chance += SUPPLIER_DANGER_BONUS
        chance = Math.max(
            chance - (effectiveLevel - 1) * DANGER_REDUCTION_PER_LEVEL,
            DANGER_CHANCE_FLOOR
        )

        if (Math.random() < chance) {
            if (Math.random() < 0.5) {
                if (totalOf(carrying) <= 0) {
                    if (Math.random() < STRAFZETTEL_CHANCE_ON_CLEAN_STOP) {
                        setStrafzettelDebt((d) => {
                            if (d === 0) setStrafzettelIssuedDay(day)
                            return d + STRAFZETTEL_FINE
                        })
                        showNotice(
                            `👮 Kontrolle... alles sauber, aber du kriegst einen Strafzettel über ${STRAFZETTEL_FINE} € (zahlbar am Revier, ${STRAFZETTEL_DUE_DAYS} Tage Zeit).`
                        )
                    } else {
                        showNotice(
                            "👮 Kontrolle... alles sauber. Schönen Abend noch!"
                        )
                    }
                } else {
                    setPoliceEncounterContext("danger")
                    setPoliceEncounter(true)
                }
            } else {
                startUeberfallGame()
            }
        }

        if (location !== "supplier") setJustLeftSupplier(false)
        setOpenMenuCategory(null)
        setShopSubCategory(null)
        setClothingShopPickerOpen(false)
        setWatchShopPickerOpen(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    React.useEffect(() => {
        if (!OUTSIDE_LOCATIONS.includes(location)) return
        if (styleScore <= 0) return
        const chance = styleScore * COMPLIMENT_CHANCE_PER_STYLE_POINT
        if (Math.random() < chance) {
            setMood((m) => Math.min(m + COMPLIMENT_MOOD_BONUS, 100))
            showNotice("😍 Jemand macht dir ein Kompliment zu deinem Style!")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    // =====================================================
    // 08 NAVIGATION
    // =====================================================
    const go = (place: string) => {
        setLocation(place)
        setTravelDistrict(null)
        setTransitionText(`Du bist jetzt in: ${LOCATION_NAMES[place] ?? place}`)
        setTransitionVisible(true)
        window.setTimeout(() => setTransitionVisible(false), 1400)
        window.setTimeout(() => setTransitionText(null), 1700)
    }

    // =====================================================
    // 09 ORTE / BUTTONS
    // =====================================================
    let buttons: {
        text: string
        action: () => void
        disabled?: boolean
        imageKey?: string
    }[] = []

    const currentMallShop = MALL_SHOPS.find((s) => s.key === location)

    if (currentMallShop) {
        if (isCurrentShopClosed) {
            buttons = [
                {
                    text: `🔒 ${currentMallShop.label} ist geschlossen`,
                    action: () => {},
                    disabled: true,
                },
                {
                    text: canBreakInShop(location)
                        ? "🌙 Einbrechen"
                        : getBreakinCount(location) >= BREAKIN_MAX_PER_WEEK
                          ? `🚫 Diese Woche schon ${BREAKIN_MAX_PER_WEEK}x eingebrochen`
                          : "🚫 Heute schon hier eingebrochen",
                    action: () => startBreakIn(),
                    disabled: !canBreakInShop(location),
                },
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        } else if (currentMallShop.type === "clothing") {
            buttons = [
                {
                    text: "👕 Outfits ansehen & kaufen",
                    action: () =>
                        openClothingShopPicker(currentMallShop.tier ?? "basic"),
                },
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        } else if (currentMallShop.type === "jewelry") {
            const ketteItem = LUXURY_ITEMS.find((l) => l.key === "hasKette")!
            const ketteFinalPrice = discountedPrice(ketteItem.price)
            buttons = [
                {
                    text: hasKette
                        ? "💎 Kette (schon gekauft)"
                        : `💎 Kette kaufen (${ketteFinalPrice} €)`,
                    action: () => buyLuxuryItem("hasKette", ketteItem.price),
                    disabled: hasKette || money < ketteFinalPrice,
                },
                {
                    text: "⌚ Uhren ansehen & kaufen",
                    action: openWatchShopPicker,
                },
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        } else if (currentMallShop.type === "perfume") {
            buttons = [
                ...PERFUME_ITEMS.map((item) => {
                    const owned = ownedPerfumes.includes(item.key)
                    const finalPrice = discountedPrice(item.price)
                    return {
                        text: owned
                            ? `🧴 ${item.name} (schon gekauft, +${item.styleValue} Style)`
                            : `🧴 ${item.name} kaufen (${finalPrice} €, +${item.styleValue} Style)`,
                        action: () => buyPerfume(item.key),
                        disabled: owned || money < finalPrice,
                    }
                }),
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        } else if (currentMallShop.type === "tv") {
            buttons = [
                ...TV_ITEMS.map((item) => {
                    const owned = ownedTv === item.key
                    const finalPrice = discountedPrice(item.price)
                    return {
                        text: owned
                            ? `📺 ${item.name} (im Wohnzimmer, +${item.moodBonus} Laune)`
                            : `📺 ${item.name} kaufen (${finalPrice} €, +${item.moodBonus} Laune)`,
                        action: () => buyTv(item.key),
                        disabled: owned || money < finalPrice,
                    }
                }),
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        } else if (currentMallShop.type === "konsole") {
            buttons = [
                ...KONSOLE_ITEMS.map((item) => {
                    const owned = ownedKonsole === item.key
                    const finalPrice = discountedPrice(item.price)
                    return {
                        text: owned
                            ? `🎮 ${item.name} (im Wohnzimmer, +${item.moodBonus} Laune)`
                            : `🎮 ${item.name} kaufen (${finalPrice} €, +${item.moodBonus} Laune)`,
                        action: () => buyKonsoleItem(item.key),
                        disabled: owned || money < finalPrice,
                    }
                }),
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        } else if (currentMallShop.type === "kuehl") {
            buttons = [
                ...KUEHL_ITEMS.map((item) => {
                    const owned = ownedKuehl === item.key
                    const finalPrice = discountedPrice(item.price)
                    return {
                        text: owned
                            ? `🧊 ${item.name} (im Einsatz, +${item.extraCapacity} Kapazität)`
                            : `🧊 ${item.name} kaufen (${finalPrice} €, +${item.extraCapacity} Kapazität)`,
                        action: () => buyKuehlItem(item.key),
                        disabled: owned || money < finalPrice,
                    }
                }),
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        } else if (currentMallShop.type === "food") {
            const menu = FOODCOURT_MENUS[currentMallShop.foodKey!] ?? []
            buttons = [
                ...menu.map((item) => ({
                    text: `🍽 ${item.name} (${item.price} €)`,
                    action: () =>
                        buyFoodcourtItem(item.price, item.hunger, item.mood),
                    disabled: money < item.price,
                })),
                {
                    text: `⬅ ${LOCATION_NAMES[currentMallShop.parent]}`,
                    action: () => go(currentMallShop.parent),
                },
            ]
        }
    } else if (currentDistrictSpot) {
        const district = DISTRICTS.find(
            (d) => d.id === currentDistrictSpot.districtId
        )!
        const controlled = isDistrictControlled(district.id)
        const spotStash = getDistrictStash(district.id)
        const spotDealers = districtDealers[district.id] ?? 0
        const spotShop = DISTRICT_SPOT_SHOPS[location]
        const spotShopClosed =
            !!spotShop &&
            !spotShop.alwaysOpen &&
            isClosedAtHour(hour, spotShop.closedStart, spotShop.closedEnd)

        if (shopSubCategory === "spot_shop" && spotShop && !spotShopClosed) {
            const isClub = location === "bahnhofsviertel_hof"
            const clubStyleOk = styleScore >= CLUB_MIN_STYLE_SCORE
            if (isClub && !clubStyleOk) {
                buttons = [
                    {
                        text: `🚷 Türsteher: "So kommst du hier nicht rein."`,
                        action: () => {},
                        disabled: true,
                    },
                    {
                        text: `✨ Nötiger Style: ${CLUB_MIN_STYLE_SCORE} (du hast ${styleScore})`,
                        action: () => {},
                        disabled: true,
                    },
                    {
                        text: "⬅ Zurück",
                        action: () => setShopSubCategory(null),
                    },
                ]
            } else if (isClub && !clubEntryPaid) {
                buttons = [
                    {
                        text: `🎟 Eintritt zahlen (${CLUB_ENTRY_PRICE} €)`,
                        action: payClubEntry,
                        disabled: money < CLUB_ENTRY_PRICE,
                    },
                    {
                        text: "🚷 Ohne Eintritt kommst du nicht rein",
                        action: () => {},
                        disabled: true,
                    },
                    {
                        text: "⬅ Zurück",
                        action: () => setShopSubCategory(null),
                    },
                ]
            } else {
                buttons = [
                    ...spotShop.items.map((item) => {
                        if (item.kind === "cigarettes") {
                            return {
                                text: `🚬 ${item.name} (${item.price} €, +${CIGARETTES_PER_PURCHASE})`,
                                action: buyCigarettes,
                                disabled: money < item.price,
                            }
                        }
                        if (item.kind === "snack") {
                            const snack = SNACK_ITEMS.find(
                                (s) => s.key === item.refKey
                            )
                            return {
                                text: `${snack?.emoji ?? "🛍"} ${item.name} (${snack?.price ?? item.price} €)`,
                                action: () => buySnack(item.refKey!),
                                disabled: money < (snack?.price ?? item.price),
                            }
                        }
                        if (item.kind === "alcohol") {
                            const drink = ALCOHOL_TYPES.find(
                                (a) => a.key === item.refKey
                            )
                            return {
                                text: `${drink?.emoji ?? "🍏"} ${item.name} (${drink?.price ?? item.price} €)`,
                                action: () => buyAlcohol(item.refKey!),
                                disabled: money < (drink?.price ?? item.price),
                            }
                        }
                        return {
                            text: `🛍 ${item.name} (${item.price} €)`,
                            action: () =>
                                buyDistrictSpotItem(
                                    item.price,
                                    item.hunger ?? 0,
                                    item.mood ?? 0,
                                    item.energy ?? 0,
                                    item.buzzMinutes ?? 0,
                                    item.highMinutes ?? 0
                                ),
                            disabled: money < item.price,
                        }
                    }),
                    ...(location === "bahnhofsviertel_hof" ||
                    location === "bahnhofsviertel_ecke"
                        ? [
                              {
                                  text: "🤝 Leute kennenlernen (1h)",
                                  action: () =>
                                      socializeAtNightlife(spotShop.shopName),
                              },
                          ]
                        : []),
                    ...(isClub
                        ? [
                              {
                                  text: "💃 Tanzen (1,5h)",
                                  action: danceAtClub,
                                  disabled: energy < 18,
                              },
                          ]
                        : []),
                    ...(location === "bahnhofsviertel_hof" ||
                    location === "bahnhofsviertel_ecke" ||
                    location === "sachsenhausen_hof"
                        ? [
                              {
                                  text: "💘 Jemanden anmachen",
                                  action: () => {
                                      const takenNames = sparklyMatches.map(
                                          (m) => m.name
                                      )
                                      const free = SPARKLY_NAMES.filter(
                                          (n) => !takenNames.includes(n)
                                      )
                                      if (free.length === 0) {
                                          showNotice(
                                              "😅 Hier ist gerade niemand Neues."
                                          )
                                          return
                                      }
                                      startFlirt(
                                          free[
                                              Math.floor(
                                                  Math.random() * free.length
                                              )
                                          ]
                                      )
                                  },
                              },
                          ]
                        : []),
                    {
                        text: "⬅ Zurück",
                        action: () => setShopSubCategory(null),
                    },
                ]
            }
        } else {
            buttons = [
                ...(customerRequest &&
                customerRequestAccepted &&
                isAtMeetingSpot
                    ? [
                          {
                              text: controlled
                                  ? `💰 ${customerDealGrams}g ${DRUG_INFO[customerDealDrug].emoji} ${DRUG_INFO[customerDealDrug].label} verkaufen`
                                  : `⚠️ ${customerDealGrams}g ${DRUG_INFO[customerDealDrug].emoji} ${DRUG_INFO[customerDealDrug].label} verkaufen (fremdes Gebiet – riskant!)`,
                              action: () => startSellGame(customerDealDrug),
                              disabled:
                                  (carrying[customerDealDrug] ?? 0) <
                                  customerDealGrams,
                              imageKey: "sellPackage",
                          },
                          {
                              text: `🤝 Auf Pump verkaufen (+25 %, ${CREDIT_DAYS} Tage Frist)`,
                              action: () =>
                                  startSellGame(customerDealDrug, true),
                              disabled:
                                  (carrying[customerDealDrug] ?? 0) <
                                  customerDealGrams,
                          },
                      ]
                    : []),
                ...(spotShop
                    ? spotShopClosed
                        ? [
                              {
                                  text: `🔒 ${spotShop.shopName} ist geschlossen`,
                                  action: () => {},
                                  disabled: true,
                              },
                              {
                                  text: canBreakInShop(location)
                                      ? `🌙 Bei ${spotShop.shopName} einbrechen`
                                      : getBreakinCount(location) >=
                                          BREAKIN_MAX_PER_WEEK
                                        ? `🚫 Diese Woche schon ${BREAKIN_MAX_PER_WEEK}x eingebrochen`
                                        : "🚫 Heute schon hier eingebrochen",
                                  action: () => startBreakIn(),
                                  disabled: !canBreakInShop(location),
                              },
                          ]
                        : [
                              {
                                  text: `🛍 ${spotShop.shopName}`,
                                  action: () => setShopSubCategory("spot_shop"),
                              },
                          ]
                    : []),
                {
                    text: `🚬 Rauchen (${cigarettes})`,
                    action: smoke,
                    disabled: cigarettes <= 0,
                    imageKey: "smoke",
                },
                {
                    text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                    action: smokeJoint,
                    disabled: (carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT,
                },
                ...SNACK_ITEMS.filter(
                    (item) => (snackInventory[item.key] ?? 0) > 0
                ).map((item) => ({
                    text: `${item.emoji} ${item.label} essen (${snackInventory[item.key]})`,
                    action: () => eatSnack(item.key),
                })),
                ...(controlled
                    ? [
                          {
                              text: `📦 Alles hier einlagern (dabei: ${totalOf(carrying)}g)`,
                              action: () => depositAllToDistrict(district.id),
                              disabled: totalOf(carrying) <= 0,
                          },
                          {
                              text: `📤 Bunker leeren (Vorrat: ${totalOf(spotStash)}g)`,
                              action: () =>
                                  withdrawAllFromDistrict(district.id),
                              disabled: totalOf(spotStash) <= 0,
                          },
                          ...((districtEarnings[district.id] ?? 0) > 0
                              ? [
                                    {
                                        text: `💰 Geld abholen (${districtEarnings[district.id]} €)`,
                                        action: () =>
                                            collectFromDistrict(district.id),
                                    },
                                ]
                              : []),
                          {
                              text: `🤝 Dealer hier einsetzen (frei: ${idleDealers})`,
                              action: () => assignDistrictDealer(district.id),
                              disabled: idleDealers <= 0,
                          },
                          ...(spotDealers > 0
                              ? [
                                    {
                                        text: `➖ Dealer abziehen (hier: ${spotDealers})`,
                                        action: () =>
                                            unassignDistrictDealer(district.id),
                                    },
                                ]
                              : []),
                      ]
                    : [
                          {
                              text: "🔒 Bunkern & Dealer erst nach Eroberung",
                              action: () => {},
                              disabled: true,
                          },
                          {
                              text: canRobDistrictDealers(district.id)
                                  ? `🔪 Dealer der ${district.gangName} überfallen`
                                  : "⏳ Hier heute schon zugeschlagen",
                              action: () => startDealerRobbery(district.id),
                              disabled:
                                  !canRobDistrictDealers(district.id) ||
                                  !ownedWeapon,
                          },
                      ]),
                // Innerhalb des Stadtteils kann man zu Fuß zwischen den drei
                // Straßen wechseln – in andere Stadtteile nur mit Bus oder Auto
                ...DISTRICT_SPOTS.filter(
                    (s) => s.districtId === district.id && s.id !== location
                ).map((s) => ({
                    text: `🚶 ${s.name}`,
                    action: () => go(s.id),
                })),
                { text: "🚌 Bus", action: () => go("bus") },
                ...(ownsAnyCar
                    ? [{ text: "🚗 Auto fahren", action: () => go("auto") }]
                    : [
                          {
                              text: "🚶 In andere Stadtteile nur mit Bus oder Auto",
                              action: () => {},
                              disabled: true,
                          },
                      ]),
            ]
        }
    } else {
        switch (location) {
            case "flur":
                buttons = [
                    ...(escortDoorbellActive
                        ? [
                              {
                                  text: "🚪 Tür öffnen (es klingelt)",
                                  action: openDoorForEscort,
                              },
                          ]
                        : []),
                    ...(dateVisitDoorbellActive
                        ? [
                              {
                                  text: "🚪 Tür öffnen (es klingelt)",
                                  action: openDoorForDate,
                              },
                          ]
                        : []),
                    ...(foodDoorbellActive
                        ? [
                              {
                                  text: "🚪 Tür öffnen (es klingelt)",
                                  action: openDoorForFood,
                              },
                          ]
                        : []),
                    { text: "🛋 Wohnzimmer", action: () => go("wohnzimmer") },
                    { text: "🛏 Schlafzimmer", action: () => go("bedroom") },
                    { text: "🍳 Küche", action: () => go("kitchen") },
                    { text: "🚿 Badezimmer", action: () => go("bathroom") },
                    { text: "🌇 Balkon", action: () => go("balcony") },
                    { text: "🏚 Garage", action: () => go("garage") },
                    {
                        text: "📦 Ware mitnehmen",
                        action: () => openAmountPanel("take"),
                    },
                    {
                        text: `🏠 Ware einlagern (${totalOf(carrying)}g)`,
                        action: stashPackages,
                        disabled: totalOf(carrying) <= 0,
                    },
                    {
                        text: `🏦 Geld einzahlen (dabei: ${money} €)`,
                        action: () => openMoneyPanel("deposit"),
                        disabled: money <= 0,
                    },
                    {
                        text: `🏦 Geld abheben (im Safe: ${moneySafe} €)`,
                        action: () => openMoneyPanel("withdraw"),
                        disabled: moneySafe <= 0,
                    },
                    { text: "🚶 Straße", action: () => go("street") },
                ]
                break
            case "wohnzimmer":
                buttons = [
                    ...(withCompany
                        ? [
                              {
                                  text: `📺 Mit ${companyNames} Film schauen (2h)`,
                                  action: watchMovieTogether,
                              },
                              {
                                  text: `🎮 Mit ${companyNames} zocken (1,5h)`,
                                  action: playGamesTogether,
                                  disabled: energy < 12,
                              },
                              {
                                  text: `🍕 Mit ${companyNames} was bestellen (${
                                      12 * (companions.length + 1)
                                  } €)`,
                                  action: orderFoodTogether,
                                  disabled:
                                      money < 12 * (companions.length + 1),
                              },
                          ]
                        : []),
                    ...(currentPartner
                        ? [
                              {
                                  text:
                                      partnerLoanDay === day
                                          ? `💸 ${currentPartner.name} hat dir heute schon geholfen`
                                          : `💸 ${currentPartner.name} um Geld bitten`,
                                  action: askPartnerForMoney,
                                  disabled: partnerLoanDay === day,
                              },
                          ]
                        : []),
                    { text: "📺 Fernsehen (2h)", action: watchMovie },
                    { text: "🎮 Zocken (1h)", action: playGames },
                    {
                        text: "💪 Sport machen (45min)",
                        action: doSport,
                        disabled: energy < SPORT_ENERGY_COST,
                    },
                    ...(deliveredMeal
                        ? [
                              {
                                  text: `🍽 ${
                                      FOODO_MENU.find(
                                          (m) => m.key === deliveredMeal
                                      )?.name ?? "Essen"
                                  } essen`,
                                  action: eatDeliveredMeal,
                              },
                          ]
                        : []),
                    { text: "⬅ Flur", action: () => go("flur") },
                ]
                break
            case "bedroom":
                buttons = [
                    { text: "😴 Schlafen (8h)", action: sleep },
                    {
                        text: "👕 Umziehen",
                        action: () => setCharacterViewOpen(true),
                    },
                    { text: "⬅ Flur", action: () => go("flur") },
                ]
                break
            case "kitchen":
                buttons = [
                    ...(currentPartner
                        ? [
                              {
                                  text:
                                      partnerCookDay === day
                                          ? `🍲 ${currentPartner.name} hat heute schon gekocht`
                                          : `🍲 ${currentPartner.name} kochen lassen (1h)`,
                                  action: partnerCooks,
                                  disabled: partnerCookDay === day,
                              },
                          ]
                        : []),
                    {
                        text: "🍔 Essen (1h)",
                        action: eat,
                        disabled: fridgeStock < EAT_FRIDGE_COST,
                    },
                    { text: "⬅ Flur", action: () => go("flur") },
                ]
                break
            case "bathroom":
                buttons = [
                    { text: "🚿 Duschen (1h)", action: shower },
                    { text: "🪞 In den Spiegel schauen", action: checkMirror },
                    { text: "🦷 Zähneputzen", action: brushTeeth },
                    { text: "⬅ Flur", action: () => go("flur") },
                ]
                break
            case "balcony":
                buttons = [
                    ...(withCompany && cigarettes > 0
                        ? [
                              {
                                  text: `🚬 Mit ${companyNames} eine rauchen`,
                                  action: smokeTogether,
                              },
                          ]
                        : []),
                    { text: "🌤 Wetter checken", action: checkWeather },
                    {
                        text: `🚬 Rauchen (${cigarettes})`,
                        action: smoke,
                        disabled: cigarettes <= 0,
                        imageKey: "smoke",
                    },
                    {
                        text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                        action: smokeJoint,
                        disabled: (carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT,
                    },
                    ...SNACK_ITEMS.filter(
                        (item) => (snackInventory[item.key] ?? 0) > 0
                    ).map((item) => ({
                        text: `${item.emoji} ${item.label} essen (${snackInventory[item.key]})`,
                        action: () => eatSnack(item.key),
                    })),
                    { text: "⬅ Flur", action: () => go("flur") },
                ]
                break
            case "street":
                buttons = [
                    ...(shopSubCategory === "street_orte"
                        ? [
                              { text: "🏪 Kiosk", action: () => go("kiosk") },
                              {
                                  text: "🥪 Sandwichladen",
                                  action: () => go("sandwich"),
                              },
                              {
                                  text: "🛒 Supermarkt",
                                  action: () => go("supermarkt"),
                              },
                              { text: "🌳 Park", action: () => go("park") },
                              {
                                  text: "📦 Lieferant",
                                  action: () => go("supplier"),
                              },
                              { text: "🏢 Amt", action: () => go("amt") },
                              { text: "🚓 Revier", action: () => go("revier") },
                              {
                                  text: "🏬 Nordwestzentrum",
                                  action: () => go("nordwestzentrum"),
                              },
                              {
                                  text: "⬅ Zurück",
                                  action: () => setShopSubCategory(null),
                              },
                          ]
                        : [
                              {
                                  text: "🏘 Orte in der Nordweststadt",
                                  action: () =>
                                      setShopSubCategory("street_orte"),
                              },
                              {
                                  text: "🗺 Stadtkarte",
                                  action: openTerritoryMap,
                              },
                              {
                                  text: "✈️ Flughafen",
                                  action: () => go("flughafen"),
                              },
                          ]),
                    {
                        text: "🚌 Bus",
                        action: () => go("bus"),
                    },
                    ...(ownsAnyCar
                        ? [{ text: "🚗 Auto fahren", action: () => go("auto") }]
                        : []),
                    {
                        text: canStealCar
                            ? "🚗 Auto klauen"
                            : "⏳ Heute schon ein Auto geklaut",
                        action: startCarTheft,
                        disabled: !canStealCar,
                    },
                    {
                        text: `🚬 Rauchen (${cigarettes})`,
                        action: smoke,
                        disabled: cigarettes <= 0,
                        imageKey: "smoke",
                    },
                    {
                        text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                        action: smokeJoint,
                        disabled: (carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT,
                    },
                    ...SNACK_ITEMS.filter(
                        (item) => (snackInventory[item.key] ?? 0) > 0
                    ).map((item) => ({
                        text: `${item.emoji} ${item.label} essen (${snackInventory[item.key]})`,
                        action: () => eatSnack(item.key),
                    })),
                    ...(hasApartment
                        ? [{ text: "🏠 Nach Hause", action: () => go("flur") }]
                        : []),
                ]
                break
            case "supermarkt":
                buttons = isClosedAtHour(
                    hour,
                    SUPERMARKET_CLOSED_START,
                    SUPERMARKET_CLOSED_END
                )
                    ? [
                          {
                              text: `🔒 Supermarkt geschlossen (${pad(
                                  SUPERMARKET_CLOSED_START
                              )}:00–${pad(SUPERMARKET_CLOSED_END)}:00 Uhr)`,
                              action: () => {},
                              disabled: true,
                          },
                          {
                              text: canBreakInShop(location)
                                  ? "🌙 Einbrechen"
                                  : getBreakinCount(location) >=
                                      BREAKIN_MAX_PER_WEEK
                                    ? `🚫 Diese Woche schon ${BREAKIN_MAX_PER_WEEK}x eingebrochen`
                                    : "🚫 Heute schon hier eingebrochen",
                              action: () => startBreakIn(),
                              disabled: !canBreakInShop(location),
                          },
                          ...(canBreakInShop(location) &&
                          availableCrimePartners.length > 0
                              ? availableCrimePartners.slice(0, 2).map((p) => ({
                                    text: `👥 Mit ${p.name} einbrechen (mehr Zeit & Beute, geteilt)`,
                                    action: () => startBreakIn(p.key),
                                }))
                              : []),
                          { text: "⬅ Straße", action: () => go("street") },
                      ]
                    : shopSubCategory === "grosseinkauf"
                      ? [
                            ...SUPERMARKET_OPTIONS.map((option) => ({
                                text: `🛒 ${option.percent}% Kühlschrank füllen (${option.price} €)`,
                                action: () =>
                                    buyGroceries(option.percent, option.price),
                                disabled:
                                    money < option.price ||
                                    fridgeStock >= effectiveFridgeMax,
                            })),
                            {
                                text: "⬅ Zurück",
                                action: () => setShopSubCategory(null),
                            },
                        ]
                      : shopSubCategory === "snacks"
                        ? [
                              ...SNACK_ITEMS.filter(
                                  (item) => item.category === "snack"
                              ).map((item) => ({
                                  text: `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                                  action: () => buySnack(item.key),
                                  disabled: money < item.price,
                              })),
                              ...SNACK_ITEMS.filter(
                                  (item) =>
                                      item.category === "snack" &&
                                      (snackInventory[item.key] ?? 0) > 0
                              ).map((item) => ({
                                  text: `${item.emoji} ${item.label} essen (${snackInventory[item.key]})`,
                                  action: () => eatSnack(item.key),
                              })),
                              {
                                  text: "⬅ Zurück",
                                  action: () => setShopSubCategory(null),
                              },
                          ]
                        : shopSubCategory === "getraenke"
                          ? [
                                ...SNACK_ITEMS.filter(
                                    (item) => item.category === "getraenk"
                                ).map((item) => ({
                                    text: `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                                    action: () => buySnack(item.key),
                                    disabled: money < item.price,
                                })),
                                ...SNACK_ITEMS.filter(
                                    (item) =>
                                        item.category === "getraenk" &&
                                        (snackInventory[item.key] ?? 0) > 0
                                ).map((item) => ({
                                    text: `${item.emoji} ${item.label} trinken (${snackInventory[item.key]})`,
                                    action: () => eatSnack(item.key),
                                })),
                                {
                                    text: "⬅ Zurück",
                                    action: () => setShopSubCategory(null),
                                },
                            ]
                          : [
                                {
                                    text: "🛒 Großeinkauf",
                                    action: () =>
                                        setShopSubCategory("grosseinkauf"),
                                },
                                {
                                    text: "🍟 Snacks",
                                    action: () => setShopSubCategory("snacks"),
                                },
                                {
                                    text: "🥤 Getränke",
                                    action: () =>
                                        setShopSubCategory("getraenke"),
                                },
                                {
                                    text: "⬅ Straße",
                                    action: () => go("street"),
                                },
                            ]
                break
            case "amt":
                buttons =
                    isWeekend ||
                    isClosedAtHour(hour, AMT_OPEN_END, AMT_OPEN_START)
                        ? [
                              {
                                  text: isWeekend
                                      ? "🔒 Amt hat am Wochenende geschlossen"
                                      : `🔒 Amt geschlossen (nur ${pad(AMT_OPEN_START)}:00–${pad(
                                            AMT_OPEN_END
                                        )}:00 Uhr, Mo–Fr)`,
                                  action: () => {},
                                  disabled: true,
                              },
                              { text: "⬅ Straße", action: () => go("street") },
                          ]
                        : [
                              {
                                  text: canClaimWelfare
                                      ? `💶 Geld holen (${WELFARE_AMOUNT} €)`
                                      : `⏳ Nächstes Geld in ${Math.max(
                                            Math.ceil(
                                                WELFARE_COOLDOWN_DAYS -
                                                    daysSinceWelfare
                                            ),
                                            1
                                        )} Tag(en)`,
                                  action: claimWelfare,
                                  disabled: !canClaimWelfare,
                              },
                              ...(hasApartment
                                  ? [
                                        {
                                            text: canPayRent
                                                ? `🏠 Miete zahlen (${RENT_AMOUNT} €)`
                                                : `⏳ Nächste Miete in ${Math.max(
                                                      Math.ceil(
                                                          RENT_DUE_INTERVAL_DAYS -
                                                              daysSinceRent
                                                      ),
                                                      1
                                                  )} Tag(en)`,
                                            action: payRent,
                                            disabled:
                                                !canPayRent ||
                                                money < RENT_AMOUNT,
                                        },
                                    ]
                                  : [
                                        {
                                            text: `🏠 Wohnung mieten (${APARTMENT_RENT_PRICE} €)`,
                                            action: rentApartment,
                                            disabled:
                                                money < APARTMENT_RENT_PRICE,
                                        },
                                    ]),
                              { text: "⬅ Straße", action: () => go("street") },
                          ]
                break
            case "park":
                buttons = [
                    ...(customerRequest && customerRequestAccepted
                        ? isAtMeetingSpot
                            ? []
                            : [
                                  {
                                      text: `📍 Kunde wartet: ${LOCATION_NAMES[customerMeetingSpot ?? ""] ?? "unbekannt"}`,
                                      action: () => {},
                                      disabled: true,
                                  },
                              ]
                        : customerRequest
                          ? [
                                {
                                    text: "📵 Erst in Kryptor annehmen",
                                    action: () => {},
                                    disabled: true,
                                },
                            ]
                          : [
                                {
                                    text: "⏳ Kein Kunde da – warte auf eine Nachricht",
                                    action: () => {},
                                    disabled: true,
                                },
                            ]),
                    {
                        text: `🚬 Rauchen (${cigarettes})`,
                        action: smoke,
                        disabled: cigarettes <= 0,
                        imageKey: "smoke",
                    },
                    {
                        text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                        action: smokeJoint,
                        disabled: (carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT,
                    },
                    {
                        text: "💪 Sport machen (45min)",
                        action: doSport,
                        disabled: energy < SPORT_ENERGY_COST,
                    },
                    ...SNACK_ITEMS.filter(
                        (item) => (snackInventory[item.key] ?? 0) > 0
                    ).map((item) => ({
                        text: `${item.emoji} ${item.label} essen (${snackInventory[item.key]})`,
                        action: () => eatSnack(item.key),
                    })),
                    ...(dealerChaseDeadline !== null &&
                    gameMinutes < dealerChaseDeadline
                        ? [
                              {
                                  text: `🏃 Dealer jagen (noch ${Math.max(
                                      Math.ceil(
                                          (dealerChaseDeadline - gameMinutes) /
                                              60
                                      ),
                                      1
                                  )} min)`,
                                  action: chaseDealer,
                              },
                              { text: "🤷 Aufgeben", action: letDealerGo },
                          ]
                        : []),
                    {
                        text:
                            hiredDealers >= maxDealers
                                ? `🤝 Dealer (${hiredDealers}/${maxDealers}, Level für mehr)`
                                : `🤝 Dealer anheuern (${hiredDealers}/${maxDealers}, ${DEALER_HIRE_COST} €)`,
                        action: hireDealer,
                        disabled:
                            hiredDealers >= maxDealers ||
                            money < DEALER_HIRE_COST,
                    },
                    {
                        text: `📦 Bunker befüllen (Vorrat: ${totalOf(dealerStash)}g)`,
                        action: () => openAmountPanel("supply"),
                    },
                    {
                        text: `📤 Aus Bunker holen (Vorrat: ${totalOf(dealerStash)}g)`,
                        action: () => openAmountPanel("withdraw"),
                        disabled: totalOf(dealerStash) <= 0,
                    },
                    ...(hiredDealers > 0
                        ? [
                              {
                                  text: `💰 Dealer-Geld abholen (${dealerEarnings} €)`,
                                  action: collectDealerEarnings,
                                  disabled: dealerEarnings <= 0,
                              },
                          ]
                        : []),
                    { text: "⬅ Straße", action: () => go("street") },
                ]
                break
            case "kiosk":
                buttons = isClosedAtHour(
                    hour,
                    KIOSK_CLOSED_START,
                    KIOSK_CLOSED_END
                )
                    ? [
                          {
                              text: `🔒 Kiosk geschlossen (${pad(KIOSK_CLOSED_START)}:00–${pad(
                                  KIOSK_CLOSED_END
                              )}:00 Uhr)`,
                              action: () => {},
                              disabled: true,
                          },
                          {
                              text: canBreakInShop(location)
                                  ? "🌙 Einbrechen"
                                  : getBreakinCount(location) >=
                                      BREAKIN_MAX_PER_WEEK
                                    ? `🚫 Diese Woche schon ${BREAKIN_MAX_PER_WEEK}x eingebrochen`
                                    : "🚫 Heute schon hier eingebrochen",
                              action: () => startBreakIn(),
                              disabled: !canBreakInShop(location),
                          },
                          ...(canBreakInShop(location) &&
                          availableCrimePartners.length > 0
                              ? availableCrimePartners.slice(0, 2).map((p) => ({
                                    text: `👥 Mit ${p.name} einbrechen (mehr Zeit & Beute, geteilt)`,
                                    action: () => startBreakIn(p.key),
                                }))
                              : []),
                          { text: "⬅ Straße", action: () => go("street") },
                      ]
                    : shopSubCategory === "snacks"
                      ? [
                            {
                                text: "🍫 Schokolade kaufen (2 €)",
                                action: buyChocolate,
                            },
                            ...SNACK_ITEMS.filter(
                                (item) => item.category === "snack"
                            ).map((item) => ({
                                text: `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                                action: () => buySnack(item.key),
                                disabled: money < item.price,
                            })),
                            ...SNACK_ITEMS.filter(
                                (item) =>
                                    item.category === "snack" &&
                                    (snackInventory[item.key] ?? 0) > 0
                            ).map((item) => ({
                                text: `${item.emoji} ${item.label} essen (${snackInventory[item.key]})`,
                                action: () => eatSnack(item.key),
                            })),
                            {
                                text: "⬅ Zurück",
                                action: () => setShopSubCategory(null),
                            },
                        ]
                      : shopSubCategory === "getraenke"
                        ? [
                              {
                                  text: "🥤 Cola kaufen (3 €)",
                                  action: buyCola,
                                  imageKey: "buyCola",
                              },
                              ...SNACK_ITEMS.filter(
                                  (item) => item.category === "getraenk"
                              ).map((item) => ({
                                  text: `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                                  action: () => buySnack(item.key),
                                  disabled: money < item.price,
                              })),
                              ...SNACK_ITEMS.filter(
                                  (item) =>
                                      item.category === "getraenk" &&
                                      (snackInventory[item.key] ?? 0) > 0
                              ).map((item) => ({
                                  text: `${item.emoji} ${item.label} trinken (${snackInventory[item.key]})`,
                                  action: () => eatSnack(item.key),
                              })),
                              {
                                  text: "⬅ Zurück",
                                  action: () => setShopSubCategory(null),
                              },
                          ]
                        : shopSubCategory === "alkohol"
                          ? [
                                ...ALCOHOL_TYPES.map((item) => ({
                                    text: `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                                    action: () => buyAlcohol(item.key),
                                    disabled: money < item.price,
                                })),
                                {
                                    text: "⬅ Zurück",
                                    action: () => setShopSubCategory(null),
                                },
                            ]
                          : shopSubCategory === "rauchen"
                            ? [
                                  {
                                      text: `🚬 Zigaretten kaufen (${CIGARETTES_PRICE} €)`,
                                      action: buyCigarettes,
                                  },
                                  {
                                      text: `🚬 Rauchen (${cigarettes})`,
                                      action: smoke,
                                      disabled: cigarettes <= 0,
                                      imageKey: "smoke",
                                  },
                                  {
                                      text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                                      action: smokeJoint,
                                      disabled:
                                          (carrying.hashish ?? 0) <
                                          JOINT_PIECE_AMOUNT,
                                  },
                                  {
                                      text: "⬅ Zurück",
                                      action: () => setShopSubCategory(null),
                                  },
                              ]
                            : shopSubCategory === "sonstiges"
                              ? [
                                    {
                                        text: `🎫 Rubbellos kaufen (${RUBBELLOS_PRICE} €)`,
                                        action: buyRubbellos,
                                        disabled: money < RUBBELLOS_PRICE,
                                    },
                                    ...SNACK_ITEMS.filter(
                                        (item) => item.category === "sonstiges"
                                    ).map((item) => ({
                                        text: `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                                        action: () => buySnack(item.key),
                                        disabled: money < item.price,
                                    })),
                                    ...SNACK_ITEMS.filter(
                                        (item) =>
                                            item.category === "sonstiges" &&
                                            (snackInventory[item.key] ?? 0) > 0
                                    ).map((item) => ({
                                        text: `${item.emoji} ${item.label} genießen (${snackInventory[item.key]})`,
                                        action: () => eatSnack(item.key),
                                    })),
                                    {
                                        text: "⬅ Zurück",
                                        action: () => setShopSubCategory(null),
                                    },
                                ]
                              : [
                                    {
                                        text: "🍟 Snacks",
                                        action: () =>
                                            setShopSubCategory("snacks"),
                                    },
                                    {
                                        text: "🥤 Getränke",
                                        action: () =>
                                            setShopSubCategory("getraenke"),
                                    },
                                    {
                                        text: "🍺 Alkohol",
                                        action: () =>
                                            setShopSubCategory("alkohol"),
                                    },
                                    {
                                        text: "🚬 Rauchen",
                                        action: () =>
                                            setShopSubCategory("rauchen"),
                                    },
                                    {
                                        text: "🎫 Sonstiges",
                                        action: () =>
                                            setShopSubCategory("sonstiges"),
                                    },
                                    {
                                        text: cashierKnown
                                            ? cashierLevel >=
                                              KIOSK_CASHIER_LOVE_LEVEL
                                                ? `💬 Mit ${KIOSK_CASHIER.name} quatschen (❤️ ${cashierLevel}) – ihr seid zusammen`
                                                : `💬 Mit ${KIOSK_CASHIER.name} quatschen (❤️ ${cashierLevel}/${KIOSK_CASHIER_LOVE_LEVEL})`
                                            : "👋 Die Kassiererin ansprechen",
                                        action: chatWithCashier,
                                    },
                                    canRobKiosk
                                        ? {
                                              text: "🔫 Kiosk ausrauben",
                                              action: startRobbery,
                                          }
                                        : {
                                              text:
                                                  !ownedWeapon || !hasMask
                                                      ? "🔫 Ausrauben (Waffe & Maske nötig)"
                                                      : `⏳ Ausrauben erst in ${Math.max(
                                                            Math.ceil(
                                                                ROBBERY_COOLDOWN_DAYS -
                                                                    daysSinceRobbery
                                                            ),
                                                            1
                                                        )} Tag(en) wieder`,
                                              action: () => {},
                                              disabled: true,
                                          },
                                    {
                                        text: "⬅ Straße",
                                        action: () => go("street"),
                                    },
                                ]
                break
            case "sandwich":
                buttons = isClosedAtHour(
                    hour,
                    SANDWICH_CLOSED_START,
                    SANDWICH_CLOSED_END
                )
                    ? [
                          {
                              text: `🔒 Sandwichladen geschlossen (${pad(
                                  SANDWICH_CLOSED_START
                              )}:00–${pad(SANDWICH_CLOSED_END)}:00 Uhr)`,
                              action: () => {},
                              disabled: true,
                          },
                          {
                              text: canBreakInShop(location)
                                  ? "🌙 Einbrechen"
                                  : getBreakinCount(location) >=
                                      BREAKIN_MAX_PER_WEEK
                                    ? `🚫 Diese Woche schon ${BREAKIN_MAX_PER_WEEK}x eingebrochen`
                                    : "🚫 Heute schon hier eingebrochen",
                              action: () => startBreakIn(),
                              disabled: !canBreakInShop(location),
                          },
                          ...(canBreakInShop(location) &&
                          availableCrimePartners.length > 0
                              ? availableCrimePartners.slice(0, 2).map((p) => ({
                                    text: `👥 Mit ${p.name} einbrechen (mehr Zeit & Beute, geteilt)`,
                                    action: () => startBreakIn(p.key),
                                }))
                              : []),
                          { text: "⬅ Straße", action: () => go("street") },
                      ]
                    : [
                          ...SANDWICH_MENU.map((item) => ({
                              text: `🥪 ${item.name} (${item.price} €)`,
                              action: () =>
                                  buySandwichItem(
                                      item.price,
                                      item.hunger,
                                      item.mood
                                  ),
                              disabled: money < item.price,
                          })),
                          { text: "⬅ Straße", action: () => go("street") },
                      ]
                break
            case "supplier":
                buttons = [
                    {
                        text: `🛒 Ware kaufen (${DRUG_TYPES.map(
                            (d) => `${DRUG_INFO[d].emoji}${buyPrices[d]}€/g`
                        ).join(" ")})`,
                        action: () => openAmountPanel("buy"),
                    },
                    {
                        text: `🕵️ Diebesgut verkaufen (${stolenGoods} → ${Math.round(
                            stolenGoods * FENCE_RATE
                        )} €)`,
                        action: sellStolenGoods,
                        disabled: stolenGoods <= 0,
                    },
                    ...WEAPON_TYPES.map((item) => ({
                        text:
                            ownedWeapon === item.key
                                ? `${item.emoji} ${item.label} (im Besitz)`
                                : `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                        action: () => buyWeapon(item.key),
                        disabled:
                            ownedWeapon === item.key || money < item.price,
                    })),
                    {
                        text: hasMask
                            ? "🎭 Maske (schon gekauft)"
                            : `🎭 Maske kaufen (${MASK_PRICE} €)`,
                        action: buyMask,
                        disabled: hasMask || money < MASK_PRICE,
                    },
                    { text: "⬅ Straße", action: () => go("street") },
                ]
                break
            case "knast":
                buttons = [
                    {
                        text: (() => {
                            const minutesLeft = Math.max(
                                (jailReleaseAt ?? 0) - gameMinutes,
                                0
                            )
                            const daysLeft = Math.floor(minutesLeft / 1440)
                            const hoursLeft = Math.floor(
                                (minutesLeft % 1440) / 60
                            )
                            return `🔒 Noch ${daysLeft}T ${hoursLeft}h abzusitzen...`
                        })(),
                        action: () => {},
                        disabled: true,
                    },
                    { text: "🛏 Zelle", action: () => go("zelle") },
                    ...(isJailNight
                        ? [
                              {
                                  text: `🔒 Bis ${pad(JAIL_NIGHT_END)}:00 Uhr nur die Zelle`,
                                  action: () => {},
                                  disabled: true,
                              },
                          ]
                        : [
                              { text: "🌳 Hof", action: () => go("hof") },
                              {
                                  text: "🍽 Kantine",
                                  action: () => go("kantine"),
                              },
                              {
                                  text: "🏋️ Sportraum",
                                  action: () => go("sportraum"),
                              },
                          ]),
                ]
                break
            case "zelle":
                buttons = [
                    {
                        text: (() => {
                            const minutesLeft = Math.max(
                                (jailReleaseAt ?? 0) - gameMinutes,
                                0
                            )
                            const daysLeft = Math.floor(minutesLeft / 1440)
                            const hoursLeft = Math.floor(
                                (minutesLeft % 1440) / 60
                            )
                            return `🔒 Noch ${daysLeft}T ${hoursLeft}h abzusitzen...`
                        })(),
                        action: () => {},
                        disabled: true,
                    },
                    { text: "😴 Schlafen (8h)", action: jailSleep },
                    { text: "📺 Fernsehen (2h)", action: jailWatchTV },
                    { text: "🍽 Essen (30min)", action: jailEatCell },
                    {
                        text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                        action: smokeJoint,
                        disabled: (carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT,
                    },
                    ...(isJailNight
                        ? [
                              {
                                  text: `🔒 Zellentür verschlossen bis ${pad(
                                      JAIL_NIGHT_END
                                  )}:00 Uhr`,
                                  action: () => {},
                                  disabled: true,
                              },
                          ]
                        : [
                              {
                                  text: "🚪 Zurück in den Knast-Flur",
                                  action: () => go("knast"),
                              },
                          ]),
                ]
                break
            case "hof":
                buttons = [
                    { text: "🏃 Cardio machen (1h)", action: jailYardSport },
                    {
                        text: `🌿 Piece organisieren (${JAIL_PIECE_PRICE} €, Schwarzmarkt)`,
                        action: buyJailPiece,
                        disabled: money < JAIL_PIECE_PRICE,
                    },
                    {
                        text: `🥃 Selbstgebrannten trinken (${JAIL_MOONSHINE_PRICE} €)`,
                        action: drinkMoonshine,
                        disabled: money < JAIL_MOONSHINE_PRICE,
                    },
                    ...DRUG_TYPES.filter(
                        (drug) => (carrying[drug] ?? 0) >= 5
                    ).map((drug) => ({
                        text: `💊 5g ${DRUG_INFO[drug].emoji} ${DRUG_INFO[drug].label} verticken (${Math.round(
                            (sellPrices[drug] ?? DRUG_INFO[drug].sellRange[0]) *
                                5 *
                                JAIL_SELL_PRICE_MULTIPLIER
                        )} €, riskant)`,
                        action: () => sellDrugsInJail(drug),
                    })),
                    ...ALCOHOL_TYPES.filter(
                        (a) => (alcoholInventory[a.key] ?? 0) > 0
                    ).map((a) => ({
                        text: `🍺 ${a.label} verticken (${JAIL_SELL_ALCOHOL_PRICE} €, riskant)`,
                        action: () => sellAlcoholInJail(a.key),
                    })),
                    {
                        text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                        action: smokeJoint,
                        disabled: (carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT,
                    },
                    {
                        text: "⬅ Zurück in den Knast-Flur",
                        action: () => go("knast"),
                    },
                ]
                break
            case "sportraum":
                buttons = [
                    {
                        text: "🏋️ Gewichte stemmen (1h)",
                        action: jailWeightsSport,
                    },
                    {
                        text: "⬅ Zurück in den Knast-Flur",
                        action: () => go("knast"),
                    },
                ]
                break
            case "kantine":
                buttons = [
                    { text: "🍽 Essen (30min)", action: jailEatCanteen },
                    { text: "🤝 Anfreunden (45min)", action: befriendInmate },
                    { text: "👊 Beef anfangen (riskant)", action: startBeef },
                    { text: "🧹 Nebenjob (1h, +15 €)", action: jailWorkJob },
                    ...DRUG_TYPES.filter(
                        (drug) => (carrying[drug] ?? 0) >= 5
                    ).map((drug) => ({
                        text: `💊 5g ${DRUG_INFO[drug].emoji} ${DRUG_INFO[drug].label} verticken (${Math.round(
                            (sellPrices[drug] ?? DRUG_INFO[drug].sellRange[0]) *
                                5 *
                                JAIL_SELL_PRICE_MULTIPLIER
                        )} €, riskant)`,
                        action: () => sellDrugsInJail(drug),
                    })),
                    ...ALCOHOL_TYPES.filter(
                        (a) => (alcoholInventory[a.key] ?? 0) > 0
                    ).map((a) => ({
                        text: `🍺 ${a.label} verticken (${JAIL_SELL_ALCOHOL_PRICE} €, riskant)`,
                        action: () => sellAlcoholInJail(a.key),
                    })),
                    {
                        text: "⬅ Zurück in den Knast-Flur",
                        action: () => go("knast"),
                    },
                ]
                break
            case "revier":
                buttons = [
                    {
                        text:
                            strafzettelDebt > 0
                                ? `🎫 Strafzettel bezahlen (${strafzettelDebt} €)`
                                : "🎫 Keine offenen Strafzettel",
                        action: payStrafzettel,
                        disabled:
                            strafzettelDebt <= 0 || money < strafzettelDebt,
                    },
                    { text: "⬅ Straße", action: () => go("street") },
                ]
                break
            case "revierzelle":
                buttons = [
                    {
                        text: `🔒 Warte auf die Verhandlung (Gericht öffnet Mo–Fr ${pad(
                            GERICHT_OPEN_START
                        )}:00 Uhr)`,
                        action: () => {},
                        disabled: true,
                    },
                    { text: "🍔 Essen (30min)", action: revierZelleEat },
                    {
                        text: "🏋️ Ein bisschen Sport (30min)",
                        action: revierZelleSport,
                    },
                    {
                        text: "😴 Schlafen (bis zur Öffnung)",
                        action: revierZelleSleep,
                    },
                ]
                break
            case "bus":
            case "auto": {
                // Zweistufig: erst Stadtteil wählen, dann die konkrete Straße
                const byCar = location === "auto"
                const travelTo = (dest: string) =>
                    byCar ? driveCarTo(dest) : rideBusTo(dest)
                const priceLabel = byCar ? "kostenlos" : `${BUS_FARE} €`
                const icon = byCar ? "🚗" : "🚌"
                const affordable = byCar || money >= BUS_FARE
                const chosen = DISTRICTS.find((d) => d.id === travelDistrict)

                buttons = chosen
                    ? [
                          ...DISTRICT_SPOTS.filter(
                              (s) => s.districtId === chosen.id
                          ).map((spot) => {
                              const banned =
                                  day < (districtBanUntilDay[chosen.id] ?? 0)
                              return {
                                  text: banned
                                      ? `🚫 ${spot.name} (verjagt, ab morgen)`
                                      : `${icon} ${spot.name} (${priceLabel})`,
                                  action: () => travelTo(spot.id),
                                  disabled: banned || !affordable,
                              }
                          }),
                          {
                              text: "⬅ Andere Stadtteile",
                              action: () => setTravelDistrict(null),
                          },
                      ]
                    : [
                          {
                              text: `🏠 Nordweststadt – Straße (${priceLabel})`,
                              action: () => travelTo("street"),
                              disabled: !affordable,
                          },
                          {
                              text: `🏬 Nordwestzentrum (${priceLabel})`,
                              action: () => travelTo("nwzug"),
                              disabled: !affordable,
                          },
                          {
                              text: `✈️ Flughafen (${priceLabel})`,
                              action: () => travelTo("flughafen"),
                              disabled: !affordable,
                          },
                          ...DISTRICTS.filter((d) => !d.isHome).map((d) => {
                              const banned =
                                  day < (districtBanUntilDay[d.id] ?? 0)
                              const mine = isDistrictControlled(d.id)
                              return {
                                  text: banned
                                      ? `🚫 ${d.name} (verjagt, ab morgen)`
                                      : `📍 ${d.name} ${mine ? "(dein Gebiet)" : `(${d.gangName})`}`,
                                  action: () => setTravelDistrict(d.id),
                                  disabled: banned,
                              }
                          }),
                      ]
                break
            }
            case "nordwestzentrum":
                // Nach Themen sortiert statt nur nach Hallen-Buchstaben
                buttons =
                    shopSubCategory === "nwz_mode"
                        ? [
                              {
                                  text: "🛍 Fetzenkiste (günstig)",
                                  action: () => go("hallea_budget"),
                              },
                              {
                                  text: "🛍 Stilwerk (mittel)",
                                  action: () => go("hallea_mid"),
                              },
                              {
                                  text: "🛍 Boulevard Couture (edel)",
                                  action: () => go("hallea_premium"),
                              },
                              {
                                  text: "💎 Diamantino (Schmuck & Uhren)",
                                  action: () => go("halleb_schmuck"),
                              },
                              {
                                  text: "🧴 Duftbar (Parfüm)",
                                  action: () => go("halleb_parfuem"),
                              },
                              {
                                  text: "⬅ Zurück",
                                  action: () => setShopSubCategory(null),
                              },
                          ]
                        : shopSubCategory === "nwz_technik"
                          ? [
                                {
                                    text: "📺 ElectroWelt (Fernseher)",
                                    action: () => go("hallec_tv"),
                                },
                                {
                                    text: "🎮 GameZone (Konsolen)",
                                    action: () => go("hallec_konsole"),
                                },
                                {
                                    text: "🧊 KüchenKing (Küchengeräte)",
                                    action: () => go("hallec_kuehl"),
                                },
                                {
                                    text: "⬅ Zurück",
                                    action: () => setShopSubCategory(null),
                                },
                            ]
                          : shopSubCategory === "nwz_essen"
                            ? [
                                  {
                                      text: "🥙 Ali's Döner Palast",
                                      action: () => go("nwzug_doener"),
                                  },
                                  {
                                      text: "🍔 Burger Boss",
                                      action: () => go("nwzug_burger"),
                                  },
                                  {
                                      text: "🍣 Sushi Sensei",
                                      action: () => go("nwzug_sushi"),
                                  },
                                  {
                                      text: "⬅ Zurück",
                                      action: () => setShopSubCategory(null),
                                  },
                              ]
                            : [
                                  {
                                      text: "👕 Mode & Schmuck",
                                      action: () =>
                                          setShopSubCategory("nwz_mode"),
                                  },
                                  {
                                      text: "📺 Technik & Haushalt",
                                      action: () =>
                                          setShopSubCategory("nwz_technik"),
                                  },
                                  {
                                      text: "🍽 Essen & Trinken",
                                      action: () =>
                                          setShopSubCategory("nwz_essen"),
                                  },
                                  {
                                      text: "🅰️ Halle A",
                                      action: () => go("hallea"),
                                  },
                                  {
                                      text: "🅱️ Halle B",
                                      action: () => go("halleb"),
                                  },
                                  {
                                      text: "🅲️ Halle C",
                                      action: () => go("hallec"),
                                  },
                                  {
                                      text: "⬇️ Untergeschoss",
                                      action: () => go("nwzug"),
                                  },
                                  {
                                      text: "⬅ Straße",
                                      action: () => go("street"),
                                  },
                              ]
                break
            case "hallea":
                buttons = [
                    {
                        text: "🛍 Fetzenkiste",
                        action: () => go("hallea_budget"),
                    },
                    { text: "🛍 Stilwerk", action: () => go("hallea_mid") },
                    {
                        text: "🛍 Boulevard Couture",
                        action: () => go("hallea_premium"),
                    },
                    { text: "🅱️ Halle B", action: () => go("halleb") },
                    { text: "🅲️ Halle C", action: () => go("hallec") },
                    { text: "⬇️ Untergeschoss", action: () => go("nwzug") },
                    { text: "⬅ Zentrum", action: () => go("nordwestzentrum") },
                ]
                break
            case "halleb":
                buttons = [
                    {
                        text: "💎 Diamantino",
                        action: () => go("halleb_schmuck"),
                    },
                    { text: "🧴 Duftbar", action: () => go("halleb_parfuem") },
                    { text: "🅰️ Halle A", action: () => go("hallea") },
                    { text: "🅲️ Halle C", action: () => go("hallec") },
                    { text: "⬇️ Untergeschoss", action: () => go("nwzug") },
                    { text: "⬅ Zentrum", action: () => go("nordwestzentrum") },
                ]
                break
            case "hallec":
                buttons = [
                    { text: "📺 ElectroWelt", action: () => go("hallec_tv") },
                    { text: "🎮 GameZone", action: () => go("hallec_konsole") },
                    { text: "🧊 KüchenKing", action: () => go("hallec_kuehl") },
                    { text: "🅰️ Halle A", action: () => go("hallea") },
                    { text: "🅱️ Halle B", action: () => go("halleb") },
                    { text: "⬇️ Untergeschoss", action: () => go("nwzug") },
                    { text: "⬅ Zentrum", action: () => go("nordwestzentrum") },
                ]
                break
            case "nwzug":
                buttons = [
                    {
                        text: "🥙 Ali's Döner Palast",
                        action: () => go("nwzug_doener"),
                    },
                    {
                        text: "🍔 Burger Boss",
                        action: () => go("nwzug_burger"),
                    },
                    {
                        text: "🍣 Sushi Sensei",
                        action: () => go("nwzug_sushi"),
                    },
                    { text: "🅰️ Halle A", action: () => go("hallea") },
                    { text: "🅱️ Halle B", action: () => go("halleb") },
                    { text: "🅲️ Halle C", action: () => go("hallec") },
                    { text: "🚌 Bus", action: () => go("bus") },
                    ...(ownsAnyCar
                        ? [{ text: "🚗 Auto fahren", action: () => go("auto") }]
                        : []),
                    { text: "⬅ Zentrum", action: () => go("nordwestzentrum") },
                ]
                break
            case "garage":
                buttons = [
                    ...(ownsAnyCar
                        ? [{ text: "🚗 Auto fahren", action: () => go("auto") }]
                        : []),
                    ...(ownsAnyCar
                        ? [
                              {
                                  text: "🔄 Auto-Position zurücksetzen",
                                  action: resetCarPositions,
                              },
                          ]
                        : []),
                    ...(ownedCarLegit
                        ? (() => {
                              const item = CAR_TYPES.find(
                                  (c) => c.key === ownedCarLegit.key
                              )
                              if (!item) return []
                              return [
                                  {
                                      text: `${item.emoji} ${item.label} verkaufen (${item.sellValue} €)`,
                                      action: () => sellCar(false),
                                  },
                              ]
                          })()
                        : CAR_TYPES.map((item) => ({
                              text: `${item.emoji} ${item.label} kaufen (${item.price} €)`,
                              action: () => buyCar(item.key),
                              disabled: money < item.price,
                          }))),
                    ...(ownedCarStolen
                        ? (() => {
                              const item = CAR_TYPES.find(
                                  (c) => c.key === ownedCarStolen.key
                              )
                              if (!item) return []
                              const payout = Math.round(
                                  item.sellValue * FENCE_RATE
                              )
                              return [
                                  {
                                      text: `${item.emoji} ${item.label} (heiß) verkaufen (${payout} €)`,
                                      action: () => sellCar(true),
                                  },
                              ]
                          })()
                        : []),
                    { text: "⬅ Flur", action: () => go("flur") },
                ]
                break
            case "freunde_chillen":
                buttons = [
                    {
                        text: `🌀 Joint rauchen (${carrying.hashish ?? 0}g Piece)`,
                        action: smokeJoint,
                        disabled: (carrying.hashish ?? 0) < JOINT_PIECE_AMOUNT,
                    },
                    {
                        text: "⬅ Nordwestzentrum-Untergeschoss",
                        action: () => go("nwzug"),
                    },
                ]
                break
            case "flughafen":
                buttons = [
                    {
                        text: `✈️ Nach Miami fliegen (${MIAMI_TICKET_PRICE} €, ~10,5h Flug)`,
                        action: flyToMiami,
                        disabled: money < MIAMI_TICKET_PRICE,
                    },
                    { text: "🚌 Bus", action: () => go("bus") },
                    ...(ownsAnyCar
                        ? [{ text: "🚗 Auto fahren", action: () => go("auto") }]
                        : []),
                    { text: "⬅ Straße", action: () => go("street") },
                ]
                break
            case "miami_flughafen":
                buttons = [
                    {
                        text: "🚶 Miami erkunden",
                        action: () => go("miami_strasse"),
                    },
                    {
                        text: `✈️ Rückflug nach Frankfurt buchen (${MIAMI_TICKET_PRICE} €, ~10,5h Flug)`,
                        action: bookReturnFlightFromMiami,
                        disabled: money < MIAMI_TICKET_PRICE,
                    },
                ]
                break
            case "miami_strasse":
                buttons = [
                    { text: "🏨 Hotel", action: () => go("miami_hotel") },
                    {
                        text: "🏖 Miami Beach",
                        action: () => go("miami_strand"),
                    },
                    {
                        text: "🎉 Ocean Drive (Partymeile)",
                        action: () => go("miami_party"),
                    },
                    {
                        text: "🛍 Einkaufsstraße",
                        action: () => go("miami_laden"),
                    },
                    {
                        text: "✈️ Zurück zum Airport",
                        action: () => go("miami_flughafen"),
                    },
                ]
                break
            case "miami_hotel":
                buttons = [
                    ...(hasMiamiRoom
                        ? [
                              {
                                  text: "🔑 Auf dein Zimmer",
                                  action: () => go("miami_zimmer"),
                              },
                          ]
                        : [
                              {
                                  text: `🔑 Zimmer buchen (${MIAMI_ROOM_PRICE} €)`,
                                  action: bookMiamiRoom,
                                  disabled: money < MIAMI_ROOM_PRICE,
                              },
                          ]),
                    {
                        text: `🛏 Übernachten & Ausruhen (${MIAMI_HOTEL_PRICE} €, 4h)`,
                        action: miamiHotelRelax,
                        disabled: money < MIAMI_HOTEL_PRICE,
                    },
                    { text: "⬅ Zurück", action: () => go("miami_strasse") },
                ]
                break
            case "miami_zimmer":
                buttons = [
                    {
                        text: "🛏 Schlafzimmer",
                        action: () => go("miami_zimmer_schlaf"),
                    },
                    {
                        text: "🌴 Balkon",
                        action: () => go("miami_zimmer_balkon"),
                    },
                    { text: "📺 Fernsehen (2h)", action: watchMovie },
                    ...(miamiGuestDoorbellActive
                        ? [
                              {
                                  text: "🚪 Tür öffnen (es klingelt)",
                                  action: openDoorForMiamiGuest,
                              },
                          ]
                        : []),
                    ...SNACK_ITEMS.filter(
                        (item) => (snackInventory[item.key] ?? 0) > 0
                    ).map((item) => ({
                        text: `${item.emoji} ${item.label} essen (${snackInventory[item.key]})`,
                        action: () => eatSnack(item.key),
                    })),
                    { text: "⬅ Hotel-Lobby", action: () => go("miami_hotel") },
                ]
                break
            case "miami_zimmer_schlaf":
                buttons = [
                    { text: "😴 Schlafen (8h)", action: sleep },
                    {
                        text: "👕 Umziehen",
                        action: () => setCharacterViewOpen(true),
                    },
                    ...sparklyMatches
                        .filter((m) => m.metInPerson)
                        .map((m) => ({
                            text: `💕 ${m.name} aufs Zimmer holen`,
                            action: () => inviteToMiamiRoom(m.name),
                            disabled: miamiGuestOrdered,
                        })),
                    { text: "⬅ Wohnraum", action: () => go("miami_zimmer") },
                ]
                break
            case "miami_zimmer_balkon":
                buttons = [
                    {
                        text: "🌅 Aussicht genießen (1h)",
                        action: miamiBalconyView,
                    },
                    {
                        text: `🚬 Rauchen (${cigarettes})`,
                        action: smoke,
                        disabled: cigarettes <= 0,
                        imageKey: "smoke",
                    },
                    { text: "⬅ Wohnraum", action: () => go("miami_zimmer") },
                ]
                break
            case "miami_strand":
                buttons = [
                    {
                        text: "🏖 Liegestuhl nehmen",
                        action: () => go("miami_liegestuhl"),
                    },
                    {
                        text: "🏊 Ins Meer gehen",
                        action: () => go("miami_meer"),
                    },
                    {
                        text: `🍹 Cocktail trinken (${MIAMI_COCKTAIL_PRICE} €)`,
                        action: miamiDrinkCocktail,
                        disabled: money < MIAMI_COCKTAIL_PRICE,
                    },
                    { text: "⬅ Zurück", action: () => go("miami_strasse") },
                ]
                break
            case "miami_liegestuhl":
                buttons = [
                    { text: "🏖 Sonnen (2h)", action: miamiSunbathe },
                    {
                        text: `🍹 Cocktail trinken (${MIAMI_COCKTAIL_PRICE} €)`,
                        action: miamiDrinkCocktail,
                        disabled: money < MIAMI_COCKTAIL_PRICE,
                    },
                    { text: "⬅ Strand", action: () => go("miami_strand") },
                ]
                break
            case "miami_meer":
                buttons = [
                    { text: "🏊 Schwimmen (1h)", action: miamiSwim },
                    { text: "⬅ Strand", action: () => go("miami_strand") },
                ]
                break
            case "miami_club":
                buttons = [
                    {
                        text: `🪩 Durchfeiern (${MIAMI_CLUB_PRICE} €, 3h)`,
                        action: miamiClubbing,
                        disabled: money < MIAMI_CLUB_PRICE,
                    },
                    {
                        text: "💃 Tanzen (1,5h)",
                        action: danceAtClub,
                        disabled: energy < 18,
                    },
                    { text: "💘 Jemanden anmachen", action: flirtInMiami },
                    { text: "⬅ Partymeile", action: () => go("miami_party") },
                ]
                break
            case "miami_beachparty":
                buttons = [
                    {
                        text: `🏖️ Mitfeiern (${MIAMI_BEACHPARTY_PRICE} €, 3h)`,
                        action: miamiBeachParty,
                        disabled: money < MIAMI_BEACHPARTY_PRICE,
                    },
                    {
                        text: "💃 Tanzen (1,5h)",
                        action: danceAtClub,
                        disabled: energy < 18,
                    },
                    { text: "💘 Jemanden anmachen", action: flirtInMiami },
                    { text: "⬅ Partymeile", action: () => go("miami_party") },
                ]
                break
            case "miami_rooftop":
                buttons = [
                    {
                        text: `🌆 Drinks mit Aussicht (${MIAMI_ROOFTOP_PRICE} €, 2h)`,
                        action: miamiRooftopBar,
                        disabled: money < MIAMI_ROOFTOP_PRICE,
                    },
                    { text: "💘 Jemanden anmachen", action: flirtInMiami },
                    { text: "⬅ Partymeile", action: () => go("miami_party") },
                ]
                break
            case "miami_livemusic":
                buttons = [
                    {
                        text: `🎤 Konzert genießen (${MIAMI_LIVEMUSIC_PRICE} €, 2h)`,
                        action: miamiLiveMusic,
                        disabled: money < MIAMI_LIVEMUSIC_PRICE,
                    },
                    { text: "💘 Jemanden anmachen", action: flirtInMiami },
                    { text: "⬅ Partymeile", action: () => go("miami_party") },
                ]
                break
            case "miami_restaurant":
                buttons = [
                    {
                        text: `🍽 Essen gehen (${MIAMI_MEAL_PRICE} €)`,
                        action: miamiEatOut,
                        disabled: money < MIAMI_MEAL_PRICE,
                    },
                    { text: "⬅ Partymeile", action: () => go("miami_party") },
                ]
                break
            case "miami_bar":
                buttons = [
                    {
                        text: `🍸 Cocktail (${MIAMI_BARCOCKTAIL_PRICE} €)`,
                        action: miamiBarCocktail,
                        disabled: money < MIAMI_BARCOCKTAIL_PRICE,
                    },
                    { text: "💘 Jemanden anmachen", action: flirtInMiami },
                    { text: "⬅ Partymeile", action: () => go("miami_party") },
                ]
                break
            case "miami_party":
                buttons =
                    shopSubCategory === "feiern"
                        ? [
                              {
                                  text: "🪩 Club Ocean Drive",
                                  action: () => go("miami_club"),
                              },
                              {
                                  text: "🏖️ Beach-Party",
                                  action: () => go("miami_beachparty"),
                              },
                              {
                                  text: "🌆 Rooftop-Bar",
                                  action: () => go("miami_rooftop"),
                              },
                              {
                                  text: "🎤 Live-Musik-Bar",
                                  action: () => go("miami_livemusic"),
                              },
                              {
                                  text: "⬅ Zurück",
                                  action: () => setShopSubCategory(null),
                              },
                          ]
                        : shopSubCategory === "essen"
                          ? [
                                {
                                    text: "🍽 Restaurant",
                                    action: () => go("miami_restaurant"),
                                },
                                {
                                    text: "🍸 Cocktail-Bar",
                                    action: () => go("miami_bar"),
                                },
                                {
                                    text: "⬅ Zurück",
                                    action: () => setShopSubCategory(null),
                                },
                            ]
                          : [
                                {
                                    text: "🎉 Feiern",
                                    action: () => setShopSubCategory("feiern"),
                                },
                                {
                                    text: "🍽 Essen & Trinken",
                                    action: () => setShopSubCategory("essen"),
                                },
                                {
                                    text: "⬅ Zurück",
                                    action: () => go("miami_strasse"),
                                },
                            ]
                break
            case "miami_laden":
                buttons = isClosedAtHour(
                    hour,
                    MIAMI_LADEN_CLOSED_START,
                    MIAMI_LADEN_CLOSED_END
                )
                    ? [
                          {
                              text: `🔒 Geschlossen (${pad(MIAMI_LADEN_CLOSED_START)}:00–${pad(
                                  MIAMI_LADEN_CLOSED_END
                              )}:00 Uhr)`,
                              action: () => {},
                              disabled: true,
                          },
                          {
                              text: "⬅ Zurück",
                              action: () => go("miami_strasse"),
                          },
                      ]
                    : [
                          {
                              text: `🛍 Shopping-Trip (${MIAMI_SHOPPING_PRICE} €)`,
                              action: miamiShopping,
                              disabled: money < MIAMI_SHOPPING_PRICE,
                          },
                          {
                              text: "⬅ Zurück",
                              action: () => go("miami_strasse"),
                          },
                      ]
                break
            default:
                buttons = []
        }
    }

    // Kunde wartet an einem stadtweiten Treffpunkt – Verkaufs-Button überall
    // dort anzeigen, wo er noch nicht ohnehin schon eingebaut ist
    if (
        customerRequest &&
        customerRequestAccepted &&
        isAtMeetingSpot &&
        currentDistrictSpot === undefined &&
        !JAIL_LOCATIONS.includes(location)
    ) {
        buttons = [
            {
                text: `💰 ${customerDealGrams}g ${DRUG_INFO[customerDealDrug].emoji} ${DRUG_INFO[customerDealDrug].label} verkaufen`,
                action: () => startSellGame(customerDealDrug),
                disabled: (carrying[customerDealDrug] ?? 0) < customerDealGrams,
                imageKey: "sellPackage",
            },
            {
                text: `🤝 Auf Pump verkaufen (+25 %, ${CREDIT_DAYS} Tage Frist)`,
                action: () => startSellGame(customerDealDrug, true),
                disabled: (carrying[customerDealDrug] ?? 0) < customerDealGrams,
            },
            ...buttons,
        ]
    }

    // Legaler Nebenjob, wo einer angeboten wird
    if (SIDE_JOBS[location] && !isCurrentShopClosed) {
        const job = SIDE_JOBS[location]
        const done = jobCountToday(location)
        buttons = [
            ...buttons,
            {
                text:
                    done >= JOB_MAX_PER_DAY
                        ? `💼 ${job.label} (heute erledigt)`
                        : `${job.label} (${job.hours}h, ca. ${Math.round(
                              job.basePay *
                                  (1 +
                                      (charismaLevel - 1) *
                                          JOB_PAY_PER_CHARISMA +
                                      (strengthLevel - 1) *
                                          JOB_PAY_PER_STRENGTH)
                          )} €)`,
                action: () => workSideJob(location),
                disabled: done >= JOB_MAX_PER_DAY || energy < job.energy,
            },
        ]
    }

    // Mit der Begleitung reden – und Vorschläge annehmen oder ablehnen
    if (companions.length > 0) {
        const suggestion = COMPANION_SUGGESTIONS.find(
            (s) => s.id === companionSuggestion
        )
        buttons = [
            {
                text: `💬 Mit ${companions.map(companionName).join(" & ")} reden`,
                action: () => setTalkOpen(true),
            },
            ...(suggestion
                ? [
                      {
                          text: `✅ Vorschlag annehmen: ${LOCATION_NAMES[suggestion.id] ?? suggestion.id}`,
                          action: () => go(suggestion.id),
                      },
                      {
                          text: "❌ Vorschlag ablehnen",
                          action: () => {
                              setCompanionSuggestion(null)
                              boostCompanions(-COMPANION_DECLINE_PENALTY)
                              showNotice(
                                  `😕 ${companions
                                      .map(companionName)
                                      .join(" & ")}: „Schade, okay.“`
                              )
                          },
                      },
                  ]
                : []),
            ...buttons,
        ]
    }

    // Date-Aktionen: Wunsch anzeigen, Geschenke, nach Hause gehen
    if (companions.some((k) => k.startsWith("date:"))) {
        const dateNames = companions
            .filter((k) => k.startsWith("date:"))
            .map((k) => k.slice(5))
            .join(" & ")
        buttons = [
            ...(currentDateWish && !dateWishDone
                ? [
                      {
                          text: `💭 ${dateNames} möchte: „${currentDateWish.text}“`,
                          action: () => {},
                          disabled: true,
                      },
                  ]
                : []),
            ...(dateWantsToLeave
                ? [
                      {
                          text: `🏠 ${dateNames} mit zu dir nehmen`,
                          action: takeDateHome,
                      },
                  ]
                : []),
            ...DATE_GIFTS.filter((g) => !dateGiftsGiven.includes(g.key)).map(
                (g) => ({
                    text: `${g.label} (${g.price} €)`,
                    action: () => giveDateGift(g.key),
                    disabled: money < g.price,
                })
            ),
            ...buttons,
        ]
    }

    // Gezielt Leute ansprechen – an öffentlichen Orten
    if (
        (OUTSIDE_LOCATIONS.includes(location) ||
            currentDistrictSpot !== undefined ||
            MALL_HUB_LOCATIONS.includes(location)) &&
        shopSubCategory === null
    ) {
        buttons = [
            ...buttons,
            { text: "👋 Leute ansprechen (30min)", action: approachPeople },
        ]
    }

    if (!JAIL_LOCATIONS.includes(location)) {
        const ownedAlcohol = ALCOHOL_TYPES.filter(
            (item) => (alcoholInventory[item.key] ?? 0) > 0
        )
        if (ownedAlcohol.length > 0) {
            buttons = [
                ...buttons,
                ...ownedAlcohol.map((item) => ({
                    text: `${item.emoji} ${item.label} trinken (${alcoholInventory[item.key]})`,
                    action: () => drinkAlcohol(item.key),
                })),
            ]
        }
    }

    // =====================================================
    // 11 TAG/NACHT-BERECHNUNG
    // =====================================================
    const hourDistanceFromNoon = Math.min(
        Math.abs(hour - 12),
        24 - Math.abs(hour - 12)
    )
    const nightProgress = hourDistanceFromNoon / 12
    const darkness = Math.pow(nightProgress, 1.5) * NIGHT_MAX_DARKNESS

    // =====================================================
    // 12 SCENE-AUSWAHL
    // =====================================================
    // Beim Einbruch ist man im Laden – dann das Innen-Bild zeigen statt der
    // geschlossenen Fassade
    const breakingIn = breakinGameActive || breakinEntryActive
    const Scene =
        (location === "kiosk" && breakingIn && EinbruchKiosk) ||
        (breakingIn && SCENES[location]) ||
        (isCurrentShopClosed && CLOSED_SCENES[location]) ||
        SCENES[location] ||
        Flur

    const NightScene = NIGHT_SCENES[location] ?? null
    const minutesOfDay = hour * 60 + minute
    const nightCurtainOpacity = getNightCurtainOpacity(minutesOfDay)
    const showNightImage = shouldShowNightImage(minutesOfDay)

    // =====================================================
    // 13 OBERFLÄCHE (RENDER)
    // =====================================================
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                boxSizing: "border-box",
            }}
        >
            {/* Hintergrund-Raum */}
            {MIAMI_ROOM_IMAGES[location] ? (
                (() => {
                    const room = MIAMI_ROOM_IMAGES[location]
                    const missing = failedImages[room.image]
                    return (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "#0d0d0d",
                            }}
                        >
                            {!showNightImage && (
                                <img
                                    src={`${DISTRICT_SPOT_IMAGE_BASE}${room.image}`}
                                    alt=""
                                    onError={() => markImageFailed(room.image)}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: missing ? "none" : "block",
                                    }}
                                />
                            )}
                            {showNightImage && (
                                <img
                                    src={`${DISTRICT_SPOT_IMAGE_BASE}${room.nightImage}`}
                                    alt=""
                                    onError={() => markImageFailed(room.image)}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: missing ? "none" : "block",
                                    }}
                                />
                            )}
                            {missing && (
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 10,
                                        padding: 24,
                                        textAlign: "center",
                                        background:
                                            "linear-gradient(160deg, #2a2a3a 0%, #14141c 100%)",
                                    }}
                                >
                                    <div style={{ fontSize: 44 }}>🏨</div>
                                    <div
                                        style={{
                                            color: "white",
                                            fontWeight: 700,
                                            fontSize: 15,
                                        }}
                                    >
                                        {LOCATION_NAMES[location]}
                                    </div>
                                    <div
                                        style={{ color: "#888", fontSize: 11 }}
                                    >
                                        Bild fehlt: images/{room.image}
                                    </div>
                                </div>
                            )}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "black",
                                    opacity: nightCurtainOpacity,
                                    transition: "opacity 1.5s ease",
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                    )
                })()
            ) : currentDistrictSpot ? (
                (() => {
                    const spotDistrict = DISTRICTS.find(
                        (d) => d.id === currentDistrictSpot.districtId
                    )!
                    const spotShopForBg = DISTRICT_SPOT_SHOPS[location]
                    const spotClosedForBg =
                        !!spotShopForBg &&
                        !spotShopForBg.alwaysOpen &&
                        isClosedAtHour(
                            hour,
                            spotShopForBg.closedStart,
                            spotShopForBg.closedEnd
                        )
                    // Beim Einbruch ist man IM Laden, also auch dann das
                    // Innenraum-Bild zeigen (nicht die Straße)
                    const insideShop =
                        !!spotShopForBg &&
                        ((shopSubCategory === "spot_shop" &&
                            !spotClosedForBg) ||
                            breakinGameActive ||
                            breakinEntryActive)
                    if (insideShop) {
                        const interiorFile = spotShopForBg!.interiorImage
                        const interiorMissing = failedImages[interiorFile]
                        return (
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "#0d0d0d",
                                }}
                            >
                                <img
                                    src={`${DISTRICT_SPOT_IMAGE_BASE}${interiorFile}`}
                                    alt=""
                                    onError={() =>
                                        markImageFailed(interiorFile)
                                    }
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: interiorMissing
                                            ? "none"
                                            : "block",
                                    }}
                                />
                                {interiorMissing && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 10,
                                            padding: 24,
                                            textAlign: "center",
                                            background:
                                                "linear-gradient(160deg, #2a2a2a 0%, #141414 100%)",
                                        }}
                                    >
                                        <div style={{ fontSize: 44 }}>🏪</div>
                                        <div
                                            style={{
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: 15,
                                            }}
                                        >
                                            {spotShopForBg!.shopName}
                                        </div>
                                        <div
                                            style={{
                                                color: "#888",
                                                fontSize: 11,
                                            }}
                                        >
                                            Bild fehlt: images/{interiorFile}
                                        </div>
                                    </div>
                                )}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 12,
                                        left: 12,
                                        padding: "6px 12px",
                                        borderRadius: 10,
                                        background: "rgba(0,0,0,0.55)",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        color: "white",
                                    }}
                                >
                                    🛍 {spotShopForBg!.shopName}
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "#0d0d0d",
                            }}
                        >
                            {/* Tagbild nur zeigen, wenn kein Nachtbild aktiv ist –
                                sonst blitzt es beim Betreten kurz auf */}
                            {!showNightImage && (
                                <img
                                    src={`${DISTRICT_SPOT_IMAGE_BASE}${currentDistrictSpot.image}`}
                                    alt=""
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                            {showNightImage && (
                                <img
                                    src={`${DISTRICT_SPOT_IMAGE_BASE}${currentDistrictSpot.nightImage}`}
                                    alt=""
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "black",
                                    opacity: nightCurtainOpacity,
                                    transition: "opacity 1.5s ease",
                                    pointerEvents: "none",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 12,
                                    left: 12,
                                    padding: "6px 12px",
                                    borderRadius: 10,
                                    background: "rgba(0,0,0,0.55)",
                                    fontWeight: 700,
                                    fontSize: 12,
                                    color: spotDistrict.color,
                                }}
                            >
                                {isDistrictControlled(spotDistrict.id)
                                    ? "unter deiner Kontrolle"
                                    : spotDistrict.gangName}
                            </div>
                        </div>
                    )
                })()
            ) : (
                <Scene />
            )}

            {location === "garage" && (ownedCarLegit || ownedCarStolen) && (
                <>
                    {ownedCarLegit && (
                        <img
                            src={
                                CAR_TYPES.find(
                                    (c) => c.key === ownedCarLegit.key
                                )?.image
                            }
                            alt=""
                            onPointerDown={(e) => carPointerDown("legit", e)}
                            style={{
                                position: "absolute",
                                left: ownedCarStolen ? "28%" : "50%",
                                bottom: "-28%",
                                transform: `translate(calc(-50% + ${carLegitOffset.x}px), ${carLegitOffset.y}px)`,
                                width: ownedCarStolen ? "95%" : "160%",
                                maxWidth: ownedCarStolen ? 480 : 860,
                                zIndex: 1,
                                touchAction: "none",
                                cursor: "grab",
                            }}
                        />
                    )}
                    {ownedCarStolen && (
                        <img
                            src={
                                CAR_TYPES.find(
                                    (c) => c.key === ownedCarStolen.key
                                )?.image
                            }
                            alt=""
                            onPointerDown={(e) => carPointerDown("stolen", e)}
                            style={{
                                position: "absolute",
                                left: ownedCarLegit ? "72%" : "50%",
                                bottom: "-28%",
                                transform: `translate(calc(-50% + ${carStolenOffset.x}px), ${carStolenOffset.y}px)`,
                                width: ownedCarLegit ? "95%" : "160%",
                                maxWidth: ownedCarLegit ? 480 : 860,
                                zIndex: 1,
                                touchAction: "none",
                                cursor: "grab",
                            }}
                        />
                    )}
                </>
            )}

            {/* Nachtbild liegt klar über dem Tagbild, damit es nicht von
                eigenen z-Index-Werten der Szenen verdeckt wird */}
            {NightScene && showNightImage && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        pointerEvents: "none",
                    }}
                >
                    <NightScene />
                </div>
            )}

            {NightScene && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        background: "black",
                        opacity: nightCurtainOpacity,
                        transition: "opacity 1.5s ease",
                        pointerEvents: "none",
                    }}
                />
            )}

            {!NightScene &&
                !currentDistrictSpot &&
                !MIAMI_ROOM_IMAGES[location] && (
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 0,
                            background: `rgba(${NIGHT_COLOR}, ${darkness})`,
                            pointerEvents: "none",
                            transition: "background 1s ease",
                        }}
                    />
                )}

            {/* Rausch-Filter liegen über dem Tag- und Nachtbild, aber unter dem
                Menü – sonst wären sie nicht sichtbar */}
            <style>{`
                @keyframes drunkSway {
                    0%, 100% { transform: translateX(0) rotate(0deg); }
                    25% { transform: translateX(4px) rotate(0.4deg); }
                    75% { transform: translateX(-4px) rotate(-0.4deg); }
                }
                @keyframes highPulse {
                    0%, 100% { opacity: 0.75; }
                    50% { opacity: 1; }
                }
            `}</style>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "rgba(140, 140, 140, 0.45)",
                    opacity: smokeEffect ? 1 : 0,
                    pointerEvents: "none",
                    transition: "opacity 1.5s ease",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "rgba(255, 190, 80, 0.3)",
                    backdropFilter: isDrunk
                        ? "blur(3px) saturate(1.5)"
                        : "none",
                    opacity: isDrunk ? 1 : 0,
                    pointerEvents: "none",
                    transition: "opacity 1s ease",
                    animation: isDrunk
                        ? "drunkSway 5s ease-in-out infinite"
                        : "none",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "rgba(120, 220, 150, 0.28)",
                    backdropFilter: isHigh
                        ? "blur(2px) hue-rotate(25deg) saturate(1.4)"
                        : "none",
                    opacity: isHigh ? 1 : 0,
                    pointerEvents: "none",
                    transition: "opacity 1s ease",
                    animation: isHigh
                        ? "highPulse 4s ease-in-out infinite"
                        : "none",
                }}
            />

            {transitionText && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 4,
                        background: "#000",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        fontWeight: 700,
                        textAlign: "center",
                        padding: 24,
                        boxSizing: "border-box",
                        pointerEvents: "none",
                        opacity: transitionVisible ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                >
                    {transitionText}
                </div>
            )}

            {actionImageUrl && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.6)",
                        pointerEvents: "none",
                        opacity: actionImageVisible ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                >
                    <img
                        src={actionImageUrl}
                        style={{
                            maxWidth: "80%",
                            maxHeight: "60%",
                            borderRadius: 16,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                        }}
                    />
                </div>
            )}

            {phoneMessage && phoneOn && (
                <div
                    style={{
                        position: "absolute",
                        top: 70,
                        left: 16,
                        right: 16,
                        zIndex: 2,
                        background: "rgba(20,90,180,0.92)",
                        color: "white",
                        padding: 12,
                        borderRadius: 12,
                        fontWeight: 700,
                        textAlign: "center",
                        opacity: phoneNotifVisible ? 1 : 0,
                        transition: "opacity 0.4s ease",
                        pointerEvents: "none",
                    }}
                >
                    {phoneMessage}
                </div>
            )}

            {(escortDoorbellActive ||
                dateVisitDoorbellActive ||
                foodDoorbellActive) &&
                location !== "flur" && (
                    <div
                        style={{
                            position: "absolute",
                            top: 70,
                            left: 16,
                            right: 16,
                            zIndex: 2,
                            background: "rgba(160,44,95,0.92)",
                            color: "white",
                            padding: 12,
                            borderRadius: 12,
                            fontWeight: 700,
                            textAlign: "center",
                            pointerEvents: "none",
                        }}
                    >
                        🔔 Es klingelt an der Tür – geh zum Flur und mach auf!
                    </div>
                )}

            {notice && (
                <div
                    style={{
                        position: "absolute",
                        top: phoneMessage ? 122 : 70,
                        left: 16,
                        right: 16,
                        zIndex: 2,
                        background: "rgba(180,20,20,0.9)",
                        color: "white",
                        padding: 12,
                        borderRadius: 12,
                        fontWeight: 700,
                        textAlign: "center",
                    }}
                >
                    {notice}
                </div>
            )}

            {/* HUD */}
            <div
                style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    right: 16,
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                }}
            >
                <button
                    onClick={() => setStatsMenuOpen((open) => !open)}
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 26,
                        border: "none",
                        fontSize: 22,
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    {statsMenuOpen ? "✕" : "📊"}
                </button>

                <button
                    onClick={() => setHomeMenuOpen((open) => !open)}
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 26,
                        border: "none",
                        fontSize: 22,
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    {homeMenuOpen ? "✕" : "🏠"}
                </button>

                <button
                    onClick={() => setInventoryMenuOpen((open) => !open)}
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 26,
                        border: "none",
                        fontSize: 22,
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    {inventoryMenuOpen ? "✕" : "🎒"}
                </button>

                <div
                    style={{
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: 12,
                        borderRadius: 12,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 2,
                    }}
                >
                    <span>
                        📅 {weekdayName} · 🕐 {pad(hour)}:{pad(minute)}
                    </span>
                    {companions.length > 0 && (
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 400,
                                color: "#9cf",
                            }}
                        >
                            👥 mit {companions.map(companionName).join(", ")}
                        </span>
                    )}
                </div>
            </div>

            {homeMenuOpen && (
                <div
                    onClick={() => setHomeMenuOpen(false)}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 3,
                        background: "rgba(0,0,0,0.55)",
                        display: "flex",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxHeight: "80%",
                            overflowY: "auto",
                            background: "#1f1f1f",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            padding: 16,
                            paddingTop: 84,
                            display: "flex",
                            flexDirection: "column",
                            gap: 14,
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                        >
                            🏠 Spielstände
                        </div>
                        {[1, 2, 3].map((slot) => (
                            <div
                                key={slot}
                                style={{
                                    display: "flex",
                                    gap: 10,
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: 15,
                                        width: 90,
                                    }}
                                >
                                    Speicherplatz {slot}
                                </div>
                                <button
                                    onClick={() => saveToSlot(slot)}
                                    style={{
                                        flex: 1,
                                        padding: 14,
                                        borderRadius: 12,
                                        border: "none",
                                        fontSize: 15,
                                        fontWeight: 700,
                                        background: "#333333",
                                        color: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    💾 Speichern
                                </button>
                                <button
                                    onClick={() => loadFromSlot(slot)}
                                    disabled={!slotHasSave(slot)}
                                    style={{
                                        flex: 1,
                                        padding: 14,
                                        borderRadius: 12,
                                        border: "none",
                                        fontSize: 15,
                                        fontWeight: 700,
                                        background: slotHasSave(slot)
                                            ? "#333333"
                                            : "#3a3a3a",
                                        color: slotHasSave(slot)
                                            ? "white"
                                            : "#999",
                                        cursor: slotHasSave(slot)
                                            ? "pointer"
                                            : "default",
                                    }}
                                >
                                    📂 Laden
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={restartGame}
                            style={{
                                width: "100%",
                                padding: 16,
                                borderRadius: 12,
                                border: "none",
                                fontSize: 16,
                                fontWeight: 700,
                                background: "#5a1f1f",
                                color: "white",
                                cursor: "pointer",
                                marginTop: 8,
                            }}
                        >
                            🔄 Spiel neu starten
                        </button>
                    </div>
                </div>
            )}

            {statsMenuOpen && (
                <div
                    onClick={() => {
                        setStatsMenuOpen(false)
                        setOpenStatusCategory(null)
                    }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 3,
                        background: "rgba(0,0,0,0.55)",
                        display: "flex",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxHeight: "70%",
                            overflowY: "auto",
                            background: "#1f1f1f",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            padding: 16,
                            paddingTop: 84,
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            boxSizing: "border-box",
                        }}
                    >
                        {(() => {
                            const allKeys = [
                                ...STATUS_KEYS,
                                ...(HOME_LOCATIONS.includes(location)
                                    ? HOME_STATUS_KEYS
                                    : []),
                            ]
                            const grouped: Record<string, string[]> = {}
                            for (const key of allKeys) {
                                const cat =
                                    STATUS_KEY_CATEGORY[key] ?? "gesundheit"
                                if (!grouped[cat]) grouped[cat] = []
                                grouped[cat].push(key)
                            }
                            const availableCats = STATUS_CATEGORY_ORDER.filter(
                                (cat) => grouped[cat] && grouped[cat].length > 0
                            )

                            const renderValue = (key: string) => {
                                let display: string
                                if (key === "heat") {
                                    display =
                                        "🚨".repeat(heat) +
                                        "▫️".repeat(MAX_HEAT - heat)
                                } else if (key === "level") {
                                    display = `${level}`
                                } else if (key === "weapon") {
                                    display = ownedWeapon
                                        ? (WEAPON_TYPES.find(
                                              (w) => w.key === ownedWeapon
                                          )?.label ?? "Ja")
                                        : "Keine"
                                } else if (key === "mask") {
                                    display = hasMask ? "Ja" : "Nein"
                                } else if (key === "apartment") {
                                    display = hasApartment
                                        ? "Ja"
                                        : "Nein (obdachlos)"
                                } else if (key === "dealers") {
                                    display = `${hiredDealers} / ${maxDealers}`
                                } else if (key === "strengthLevel") {
                                    display = `${strengthLevel} (${strengthXP % STRENGTH_XP_PER_LEVEL}/${STRENGTH_XP_PER_LEVEL} XP)`
                                } else if (key === "charismaLevel") {
                                    display = `${charismaLevel} (${charismaXP % CHARISMA_XP_PER_LEVEL}/${CHARISMA_XP_PER_LEVEL} XP)`
                                } else if (key === "styleLevel") {
                                    display = `${styleLevel} (Rabatt: ${Math.round(styleDiscount * 100)}%)`
                                } else if (key === "territories") {
                                    const count = DISTRICTS.filter((d) =>
                                        isDistrictControlled(d.id)
                                    ).length
                                    display = `${count} / ${DISTRICTS.length}`
                                } else if (key === "homeStash") {
                                    display =
                                        DRUG_TYPES.map(
                                            (d) =>
                                                `${DRUG_INFO[d].emoji}${homeStash[d] ?? 0}g`
                                        ).join(" ") || "0g"
                                } else if (key === "carrying") {
                                    display =
                                        DRUG_TYPES.map(
                                            (d) =>
                                                `${DRUG_INFO[d].emoji}${carrying[d] ?? 0}g`
                                        ).join(" ") || "0g"
                                } else {
                                    const values: Record<string, number> = {
                                        money,
                                        energy,
                                        hunger,
                                        mood,
                                        cigarettes,
                                        moneySafe,
                                        fridgeStock,
                                    }
                                    const suffix =
                                        key === "money" || key === "moneySafe"
                                            ? " €"
                                            : ""
                                    display = `${values[key]}${suffix}`
                                }
                                return display
                            }

                            if (openStatusCategory === null) {
                                return availableCats.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() =>
                                            setOpenStatusCategory(cat)
                                        }
                                        style={{
                                            width: "100%",
                                            padding: 16,
                                            borderRadius: 12,
                                            border: "none",
                                            fontSize: 16,
                                            fontWeight: 700,
                                            background: "#333333",
                                            color: "white",
                                            cursor: "pointer",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <span>
                                            {STATUS_CATEGORY_INFO[cat].emoji}{" "}
                                            {STATUS_CATEGORY_INFO[cat].label}
                                        </span>
                                        <span
                                            style={{
                                                color: "#999",
                                                fontWeight: 400,
                                            }}
                                        >
                                            ›
                                        </span>
                                    </button>
                                ))
                            }

                            const activeKeys = grouped[openStatusCategory] ?? []
                            return (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenStatusCategory(null)
                                        }
                                        style={{
                                            width: "100%",
                                            padding: 12,
                                            borderRadius: 10,
                                            border: "none",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            background: "#2a2a2a",
                                            color: "#ccc",
                                            cursor: "pointer",
                                            marginBottom: 4,
                                        }}
                                    >
                                        ⬅{" "}
                                        {
                                            STATUS_CATEGORY_INFO[
                                                openStatusCategory
                                            ].emoji
                                        }{" "}
                                        {
                                            STATUS_CATEGORY_INFO[
                                                openStatusCategory
                                            ].label
                                        }
                                    </button>
                                    {activeKeys.map((key) => (
                                        <div
                                            key={key}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                color: "white",
                                                fontSize: 16,
                                                fontWeight: 700,
                                            }}
                                        >
                                            <span>
                                                {STAT_ICON[key]}{" "}
                                                {STAT_LABEL[key]}
                                            </span>
                                            <span>{renderValue(key)}</span>
                                        </div>
                                    ))}
                                </>
                            )
                        })()}
                    </div>
                </div>
            )}

            {characterViewOpen && (
                <div
                    onClick={() => setCharacterViewOpen(false)}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 16,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 16,
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 16,
                            }}
                        >
                            🪞 Style-Score: {styleScore}
                        </div>
                        <div
                            style={{
                                position: "relative",
                                width: 220,
                                height: 380,
                            }}
                        >
                            <img
                                src={`${CHARACTER_IMAGE_BASE}${
                                    OUTFITS.find((o) => o.id === equippedOutfit)
                                        ?.image ?? "outfit_budget.PNG"
                                }`}
                                alt=""
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <button
                            onClick={openOutfitPicker}
                            style={{
                                width: "100%",
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 13,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            👕 Outfit wechseln ({ownedOutfits.length}/
                            {OUTFITS.length} im Besitz)
                        </button>
                        <button
                            onClick={() => setCharacterViewOpen(false)}
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#3a3a3a",
                                color: "#ccc",
                                cursor: "pointer",
                                width: "100%",
                            }}
                        >
                            Schließen
                        </button>
                    </div>
                </div>
            )}

            {outfitPickerOpen && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 20,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        {outfitPickerSeason
                            ? `${OUTFIT_SEASON_INFO[outfitPickerSeason].emoji} ${OUTFIT_SEASON_INFO[outfitPickerSeason].label}-Outfits`
                            : "🗓 Für welche Jahreszeit?"}
                    </div>
                    {!outfitPickerSeason ? (
                        <>
                            {HOME_OUTFIT_SEASONS.map((season) => (
                                <button
                                    key={season}
                                    onClick={() =>
                                        selectOutfitPickerSeason(season)
                                    }
                                    style={{
                                        width: "100%",
                                        maxWidth: 320,
                                        padding: 16,
                                        borderRadius: 14,
                                        border: "none",
                                        fontSize: 16,
                                        fontWeight: 700,
                                        background: "#333333",
                                        color: "white",
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span>
                                        {OUTFIT_SEASON_INFO[season].emoji}{" "}
                                        {OUTFIT_SEASON_INFO[season].label}
                                    </span>
                                    <span
                                        style={{
                                            color: "#999",
                                            fontWeight: 400,
                                        }}
                                    >
                                        ›
                                    </span>
                                </button>
                            ))}
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => setOutfitPickerSeason(null)}
                                style={{
                                    width: "100%",
                                    maxWidth: 320,
                                    padding: 12,
                                    borderRadius: 10,
                                    border: "none",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    background: "#2a2a2a",
                                    color: "#ccc",
                                    cursor: "pointer",
                                }}
                            >
                                ⬅ Andere Jahreszeit
                            </button>
                            {(() => {
                                const outfit =
                                    HOME_OUTFIT_SEASON_OUTFITS[
                                        browsingOutfitIndex
                                    ]
                                const owned = ownedOutfits.includes(outfit.id)
                                const equipped = equippedOutfit === outfit.id
                                return (
                                    <>
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 180,
                                                height: 300,
                                            }}
                                        >
                                            <img
                                                src={`${CHARACTER_IMAGE_BASE}${outfit.image}`}
                                                alt=""
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 20,
                                            }}
                                        >
                                            <button
                                                onClick={() => cycleOutfit(-1)}
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 24,
                                                    border: "none",
                                                    fontSize: 22,
                                                    background: "#333333",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                ◀
                                            </button>
                                            <div
                                                style={{
                                                    color: "white",
                                                    fontWeight: 700,
                                                    fontSize: 18,
                                                    textAlign: "center",
                                                    minWidth: 160,
                                                }}
                                            >
                                                {outfit.name}
                                                <br />
                                                <span
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                    }}
                                                >
                                                    {owned
                                                        ? "im Besitz"
                                                        : "nicht im Besitz"}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => cycleOutfit(1)}
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 24,
                                                    border: "none",
                                                    fontSize: 22,
                                                    background: "#333333",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                ▶
                                            </button>
                                        </div>
                                        <button
                                            onClick={() =>
                                                equipOwnedOutfit(outfit.id)
                                            }
                                            disabled={equipped || !owned}
                                            style={{
                                                width: "100%",
                                                maxWidth: 320,
                                                padding: 16,
                                                borderRadius: 14,
                                                border: "none",
                                                fontSize: 16,
                                                fontWeight: 700,
                                                background:
                                                    equipped || !owned
                                                        ? "#3a3a3a"
                                                        : "#1f1f1f",
                                                color:
                                                    equipped || !owned
                                                        ? "#999"
                                                        : "white",
                                                cursor:
                                                    equipped || !owned
                                                        ? "default"
                                                        : "pointer",
                                            }}
                                        >
                                            {equipped
                                                ? "✅ Wird schon getragen"
                                                : owned
                                                  ? "👕 Anziehen"
                                                  : "🔒 Nur im Laden kaufbar"}
                                        </button>
                                    </>
                                )
                            })()}
                        </>
                    )}
                    <button
                        onClick={closeOutfitPicker}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 14,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Schließen
                    </button>
                </div>
            )}

            {clothingShopPickerOpen && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 20,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        {clothingShopSeason
                            ? `${OUTFIT_SEASON_INFO[clothingShopSeason].emoji} ${OUTFIT_SEASON_INFO[clothingShopSeason].label}-Outfits`
                            : "🗓 Für welche Jahreszeit?"}
                    </div>
                    {!clothingShopSeason ? (
                        <>
                            {CLOTHING_SHOP_SEASONS.map((season) => (
                                <button
                                    key={season}
                                    onClick={() =>
                                        selectClothingShopSeason(season)
                                    }
                                    style={{
                                        width: "100%",
                                        maxWidth: 320,
                                        padding: 16,
                                        borderRadius: 14,
                                        border: "none",
                                        fontSize: 16,
                                        fontWeight: 700,
                                        background: "#333333",
                                        color: "white",
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span>
                                        {OUTFIT_SEASON_INFO[season].emoji}{" "}
                                        {OUTFIT_SEASON_INFO[season].label}
                                    </span>
                                    <span
                                        style={{
                                            color: "#999",
                                            fontWeight: 400,
                                        }}
                                    >
                                        ›
                                    </span>
                                </button>
                            ))}
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => setClothingShopSeason(null)}
                                style={{
                                    width: "100%",
                                    maxWidth: 320,
                                    padding: 12,
                                    borderRadius: 10,
                                    border: "none",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    background: "#2a2a2a",
                                    color: "#ccc",
                                    cursor: "pointer",
                                }}
                            >
                                ⬅ Andere Jahreszeit
                            </button>
                            {(() => {
                                const outfit =
                                    CLOTHING_SHOP_OUTFITS[
                                        browsingClothingShopIndex
                                    ]
                                const owned = ownedOutfits.includes(outfit.id)
                                const equipped = equippedOutfit === outfit.id
                                return (
                                    <>
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 180,
                                                height: 300,
                                            }}
                                        >
                                            <img
                                                src={`${CHARACTER_IMAGE_BASE}${outfit.image}`}
                                                alt=""
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 20,
                                            }}
                                        >
                                            <button
                                                onClick={() =>
                                                    cycleClothingShop(-1)
                                                }
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 24,
                                                    border: "none",
                                                    fontSize: 22,
                                                    background: "#333333",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                ◀
                                            </button>
                                            <div
                                                style={{
                                                    color: "white",
                                                    fontWeight: 700,
                                                    fontSize: 18,
                                                    textAlign: "center",
                                                    minWidth: 160,
                                                }}
                                            >
                                                {outfit.name}
                                                <br />
                                                <span
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                    }}
                                                >
                                                    {owned
                                                        ? "im Besitz"
                                                        : `${discountedPrice(outfit.price)} €`}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    cycleClothingShop(1)
                                                }
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 24,
                                                    border: "none",
                                                    fontSize: 22,
                                                    background: "#333333",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                ▶
                                            </button>
                                        </div>
                                        <button
                                            onClick={() =>
                                                buyAndEquipOutfit(
                                                    outfit.id,
                                                    outfit.price
                                                )
                                            }
                                            disabled={
                                                equipped ||
                                                (!owned &&
                                                    money <
                                                        discountedPrice(
                                                            outfit.price
                                                        ))
                                            }
                                            style={{
                                                width: "100%",
                                                maxWidth: 320,
                                                padding: 16,
                                                borderRadius: 14,
                                                border: "none",
                                                fontSize: 16,
                                                fontWeight: 700,
                                                background: equipped
                                                    ? "#3a3a3a"
                                                    : "#1f1f1f",
                                                color: equipped
                                                    ? "#999"
                                                    : "white",
                                                cursor: equipped
                                                    ? "default"
                                                    : "pointer",
                                            }}
                                        >
                                            {equipped
                                                ? "✅ Wird schon getragen"
                                                : owned
                                                  ? "👕 Anziehen"
                                                  : `🛍 Kaufen & Anziehen (${discountedPrice(outfit.price)} €)`}
                                        </button>
                                    </>
                                )
                            })()}
                        </>
                    )}
                    <button
                        onClick={closeClothingShopPicker}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 14,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Schließen
                    </button>
                </div>
            )}

            {watchShopPickerOpen && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 20,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        ⌚ Uhr wählen
                    </div>
                    {(() => {
                        const watch = WATCH_SHOP_OUTFITS[browsingWatchShopIndex]
                        const owned = ownedOutfits.includes(watch.id)
                        const requirementMet = ownedOutfits.includes(
                            watch.requiresOutfit!
                        )
                        return (
                            <>
                                <div
                                    style={{
                                        position: "relative",
                                        width: 220,
                                        height: 220,
                                    }}
                                >
                                    <img
                                        src={`${CHARACTER_IMAGE_BASE}${watch.shopImage}`}
                                        alt=""
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            borderRadius: 12,
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                    }}
                                >
                                    <button
                                        onClick={() => cycleWatchShop(-1)}
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 24,
                                            border: "none",
                                            fontSize: 22,
                                            background: "#333333",
                                            color: "white",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ◀
                                    </button>
                                    <div
                                        style={{
                                            color: "white",
                                            fontWeight: 700,
                                            fontSize: 18,
                                            textAlign: "center",
                                            minWidth: 160,
                                        }}
                                    >
                                        {watch.name}
                                        <br />
                                        <span
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 400,
                                            }}
                                        >
                                            {owned
                                                ? "im Besitz"
                                                : !requirementMet
                                                  ? "Outfit fehlt noch"
                                                  : `${discountedPrice(watch.price)} €`}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => cycleWatchShop(1)}
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 24,
                                            border: "none",
                                            fontSize: 22,
                                            background: "#333333",
                                            color: "white",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ▶
                                    </button>
                                </div>
                                <button
                                    onClick={() => buyWatchOutfit(watch.id)}
                                    disabled={
                                        owned ||
                                        !requirementMet ||
                                        money < discountedPrice(watch.price)
                                    }
                                    style={{
                                        width: "100%",
                                        maxWidth: 320,
                                        padding: 16,
                                        borderRadius: 14,
                                        border: "none",
                                        fontSize: 16,
                                        fontWeight: 700,
                                        background: owned
                                            ? "#3a3a3a"
                                            : "#1f1f1f",
                                        color: owned ? "#999" : "white",
                                        cursor: owned ? "default" : "pointer",
                                    }}
                                >
                                    {owned
                                        ? "✅ Schon im Besitz"
                                        : !requirementMet
                                          ? "🔒 Brauchst erst das passende Outfit"
                                          : `🛍 Kaufen (${discountedPrice(watch.price)} €)`}
                                </button>
                            </>
                        )
                    })()}
                    <button
                        onClick={closeWatchShopPicker}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 14,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Schließen
                    </button>
                </div>
            )}

            {phoneHomeOpen && !phoneAppOpen && (
                <div
                    onClick={closePhone}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background: "rgba(0,0,0,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 280,
                            aspectRatio: "9 / 19.5",
                            background: "#0a0a12",
                            borderRadius: 40,
                            border: "6px solid #050508",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
                            display: "flex",
                            flexDirection: "column",
                            padding: "14px 14px 8px 14px",
                            boxSizing: "border-box",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 8,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: 70,
                                height: 18,
                                borderRadius: 9,
                                background: "#000",
                                zIndex: 2,
                            }}
                        />
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 13,
                                textAlign: "center",
                                marginTop: 26,
                                marginBottom: 18,
                            }}
                        >
                            🕐 {pad(hour)}:{pad(minute)} · {weekdayName}
                        </div>
                        {!phoneOn && (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 6,
                                    padding: 8,
                                    borderRadius: 10,
                                    background: "rgba(90,20,20,0.5)",
                                    color: "#ff9a9a",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    marginBottom: 10,
                                }}
                            >
                                📴 Lautlos – keine neuen Anfragen von Kryptor
                                oder Freunden
                            </div>
                        )}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                gap: 18,
                                flex: 1,
                            }}
                        >
                            {PHONE_APPS.map((app) => (
                                <button
                                    key={app.key}
                                    onClick={() => {
                                        if (app.key === "karte") {
                                            closePhone()
                                            openTerritoryMap()
                                        } else {
                                            setPhoneAppOpen(app.key)
                                        }
                                    }}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 5,
                                        padding: 0,
                                        border: "none",
                                        background: "transparent",
                                        color: "white",
                                        cursor: "pointer",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 46,
                                            height: 46,
                                            borderRadius: 13,
                                            background: app.color,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 22,
                                            boxShadow:
                                                "0 2px 6px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        {app.emoji}
                                    </div>
                                    <span
                                        style={{
                                            fontSize: 10,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {app.label}
                                    </span>
                                    {((app.key === "kryptor" &&
                                        customerRequest &&
                                        !customerRequestNpc) ||
                                        (app.key === "chatwave" &&
                                            customerRequest &&
                                            customerRequestNpc)) && (
                                        <span
                                            style={{
                                                position: "absolute",
                                                top: -2,
                                                right: 8,
                                                width: 11,
                                                height: 11,
                                                borderRadius: 6,
                                                background: "#e5484d",
                                                border: "2px solid #0a0a12",
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={togglePhone}
                            style={{
                                padding: 10,
                                borderRadius: 12,
                                border: "none",
                                fontSize: 12,
                                fontWeight: 700,
                                background: phoneOn ? "#3a1414" : "#1f6b3f",
                                color: phoneOn ? "#ff8a8a" : "white",
                                cursor: "pointer",
                                marginBottom: 6,
                            }}
                        >
                            {phoneOn ? "🔌 Ausschalten" : "🔌 Einschalten"}
                        </button>
                        <div
                            style={{
                                width: 100,
                                height: 4,
                                borderRadius: 2,
                                background: "#555",
                                alignSelf: "center",
                            }}
                        />
                    </div>
                </div>
            )}

            {phoneAppOpen === "kryptor" && (
                <div
                    onClick={closePhone}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background: "rgba(10,10,20,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            maxHeight: "70vh",
                            overflowY: "auto" as const,
                            background: "#1f1f1f",
                            borderRadius: 16,
                            padding: 20,
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                        >
                            🔒 Kryptor
                            {kryptorTab !== null && (
                                <span
                                    style={{
                                        color: "#888",
                                        fontSize: 13,
                                        fontWeight: 400,
                                    }}
                                >
                                    {" · "}
                                    {
                                        {
                                            anfragen: "Anfragen",
                                            dealer: "Dealer",
                                            exdealer: "Ex-Dealer",
                                            kunden: "Kunden",
                                            knast: "Knast",
                                            auftraege: "Aufträge",
                                        }[kryptorTab]
                                    }
                                </span>
                            )}
                        </div>

                        {/* ---- Hauptmenü ---- */}
                        {kryptorTab === null && (
                            <>
                                {(
                                    [
                                        [
                                            "anfragen",
                                            "📩 Anfragen",
                                            customerRequest ? "1 neu" : "keine",
                                            "#1f6b52",
                                        ],
                                        [
                                            "dealer",
                                            "🧑‍💼 Deine Dealer",
                                            `${activeCrew.length} aktiv`,
                                            "#2c5a8a",
                                        ],
                                        [
                                            "exdealer",
                                            "🚫 Ex-Dealer",
                                            `${crew.filter((m) => m.traitor).length} offen`,
                                            "#6b4a1f",
                                        ],
                                        [
                                            "kunden",
                                            "💳 Kunden auf Pump",
                                            `${totalDebt} € offen`,
                                            "#5a4a8a",
                                        ],
                                        [
                                            "knast",
                                            "⛓ Knast-Kontakte",
                                            `${
                                                INMATE_CONTACTS.filter((i) =>
                                                    unlockedContacts.includes(
                                                        i.key
                                                    )
                                                ).length
                                            } bekannt`,
                                            "#4a4a4a",
                                        ],
                                        [
                                            "auftraege",
                                            "🩸 Aufträge",
                                            pendingHunt ? "läuft" : "bereit",
                                            "#5a1f1f",
                                        ],
                                    ] as const
                                ).map(([key, label, sub, color]) => (
                                    <button
                                        key={key}
                                        onClick={() => setKryptorTab(key)}
                                        style={{
                                            padding: 14,
                                            borderRadius: 10,
                                            border: "none",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            background: color,
                                            color: "white",
                                            cursor: "pointer",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span>{label}</span>
                                        <span
                                            style={{
                                                fontSize: 11,
                                                fontWeight: 400,
                                                opacity: 0.85,
                                            }}
                                        >
                                            {sub}
                                        </span>
                                    </button>
                                ))}
                            </>
                        )}

                        {/* ---- Anfragen ---- */}
                        {kryptorTab === "anfragen" && (
                            <>
                                {customerRequest && !customerRequestNpc ? (
                                    <>
                                        <div
                                            style={{
                                                color: "#ddd",
                                                fontSize: 15,
                                            }}
                                        >
                                            Kunde will {customerDealGrams}g{" "}
                                            {DRUG_INFO[customerDealDrug].emoji}{" "}
                                            {DRUG_INFO[customerDealDrug].label}{" "}
                                            kaufen.
                                        </div>
                                        <div
                                            style={{
                                                color: "#f0c060",
                                                fontSize: 13,
                                            }}
                                        >
                                            📍{" "}
                                            {LOCATION_NAMES[
                                                customerMeetingSpot ?? ""
                                            ] ?? "unbekannt"}
                                            {customerMeetingSpot
                                                ? ` – ${describeSpotTerritory(customerMeetingSpot)}`
                                                : ""}
                                        </div>
                                        {customerRequestAccepted ? (
                                            <div
                                                style={{
                                                    color: "#7fd97f",
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                ✅ Angenommen – noch{" "}
                                                {Math.max(
                                                    Math.ceil(
                                                        ((customerDealDeadline ??
                                                            0) -
                                                            gameMinutes) /
                                                            60
                                                    ),
                                                    0
                                                )}{" "}
                                                Std. Zeit
                                                <button
                                                    onClick={() => {
                                                        cancelCustomerDeal()
                                                        closePhone()
                                                    }}
                                                    style={{
                                                        marginTop: 10,
                                                        width: "100%",
                                                        padding: 12,
                                                        borderRadius: 10,
                                                        border: "none",
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        background: "#5a1f1f",
                                                        color: "white",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    ❌ Deal absagen
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        acceptCustomerRequest()
                                                        closePhone()
                                                    }}
                                                    style={{
                                                        padding: 14,
                                                        borderRadius: 10,
                                                        border: "none",
                                                        fontSize: 15,
                                                        fontWeight: 700,
                                                        background: "#2c6b2c",
                                                        color: "white",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    ✅ Annehmen (2h Zeit)
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        declineCustomerRequest()
                                                        closePhone()
                                                    }}
                                                    style={{
                                                        padding: 14,
                                                        borderRadius: 10,
                                                        border: "none",
                                                        fontSize: 15,
                                                        fontWeight: 700,
                                                        background: "#5a1f1f",
                                                        color: "white",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    ❌ Ablehnen
                                                </button>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <div
                                        style={{ color: "#888", fontSize: 14 }}
                                    >
                                        Keine neuen Nachrichten.
                                    </div>
                                )}
                            </>
                        )}

                        {/* ---- Deine Dealer ---- */}
                        {kryptorTab === "dealer" && (
                            <>
                                {activeCrew.length === 0 && (
                                    <div
                                        style={{ color: "#888", fontSize: 13 }}
                                    >
                                        Noch keine Dealer. Heuer welche im Park
                                        an oder sprich freigelassene
                                        Knast-Kontakte an.
                                    </div>
                                )}
                                {traitorKey && (
                                    <div
                                        style={{
                                            background: "#5a1f1f",
                                            borderRadius: 10,
                                            padding: 10,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 6,
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: 13,
                                            }}
                                        >
                                            😡{" "}
                                            {
                                                crew.find(
                                                    (m) => m.key === traitorKey
                                                )?.name
                                            }{" "}
                                            hat dich abgezogen ({traitorLoot} €)
                                        </div>
                                        <button
                                            onClick={() => {
                                                huntTraitorSelf()
                                                closePhone()
                                            }}
                                            style={{
                                                padding: 10,
                                                borderRadius: 8,
                                                border: "none",
                                                fontSize: 12,
                                                fontWeight: 700,
                                                background: "#8a2020",
                                                color: "white",
                                                cursor: "pointer",
                                            }}
                                        >
                                            🏃 Selbst jagen (2h, sofort)
                                        </button>
                                        <div
                                            style={{
                                                color: "#ccc",
                                                fontSize: 11,
                                            }}
                                        >
                                            Oder unter „Ex-Dealer“ jemanden
                                            beauftragen (dauert{" "}
                                            {ORDER_HUNT_DAYS} Tage).
                                        </div>
                                    </div>
                                )}
                                {activeCrew.map((member) => {
                                    const district = DISTRICTS.find(
                                        (d) => d.id === member.districtId
                                    )
                                    return (
                                        <div
                                            key={member.key}
                                            style={{
                                                background: "#242424",
                                                borderRadius: 12,
                                                padding: 12,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 8,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    color: "white",
                                                    fontWeight: 700,
                                                    fontSize: 14,
                                                }}
                                            >
                                                <span>
                                                    🧑‍💼 {member.name}
                                                    {district
                                                        ? ` · ${district.name}`
                                                        : ""}
                                                </span>
                                                <span
                                                    style={{
                                                        fontWeight: 400,
                                                        color: "#cde",
                                                    }}
                                                >
                                                    🤝 {member.loyalty}
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: 6,
                                                }}
                                            >
                                                <button
                                                    onClick={() => {
                                                        goOutWithCrew(
                                                            member.key
                                                        )
                                                        closePhone()
                                                    }}
                                                    style={{
                                                        flex: 1,
                                                        padding: 10,
                                                        borderRadius: 8,
                                                        border: "none",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        background: "#2c5a8a",
                                                        color: "white",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    🍻 Weggehen
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        fireCrewMember(
                                                            member.key
                                                        )
                                                    }
                                                    style={{
                                                        padding: 10,
                                                        borderRadius: 8,
                                                        border: "none",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        background: "#5a1f1f",
                                                        color: "white",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    👋 Feuern
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                                {jailedCrew.length > 0 && (
                                    <>
                                        <div
                                            style={{
                                                color: "#888",
                                                fontSize: 12,
                                                marginTop: 6,
                                            }}
                                        >
                                            Sitzen gerade:
                                        </div>
                                        {jailedCrew.map((m) => (
                                            <div
                                                key={m.key}
                                                style={{
                                                    background: "#242424",
                                                    borderRadius: 10,
                                                    padding: 10,
                                                    color: "#bbb",
                                                    fontSize: 13,
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                <span>🔒 {m.name}</span>
                                                <span>
                                                    {m.jailUntilDay! - day}T
                                                </span>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </>
                        )}

                        {/* ---- Ex-Dealer ---- */}
                        {kryptorTab === "exdealer" && (
                            <>
                                {pendingHunt && (
                                    <div
                                        style={{
                                            background: "#3a2a1a",
                                            borderRadius: 10,
                                            padding: 10,
                                            color: "#f0c060",
                                            fontSize: 13,
                                        }}
                                    >
                                        🕵️ Suche nach {pendingHunt.targetName}{" "}
                                        läuft – noch{" "}
                                        {Math.max(pendingHunt.dueDay - day, 0)}{" "}
                                        Tage.
                                    </div>
                                )}
                                {exDealers.length === 0 && !pendingHunt && (
                                    <div
                                        style={{ color: "#888", fontSize: 13 }}
                                    >
                                        Keine offenen Rechnungen. Gut so.
                                    </div>
                                )}
                                {exDealers.map((exd) => (
                                    <div
                                        key={exd.key}
                                        style={{
                                            background: "#2a1a1a",
                                            borderRadius: 10,
                                            padding: 10,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 6,
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "white",
                                                fontSize: 13,
                                                fontWeight: 700,
                                            }}
                                        >
                                            {exd.name}
                                            {exd.key === traitorKey &&
                                            traitorLoot > 0
                                                ? ` · schuldet dir ${traitorLoot} €`
                                                : ""}
                                        </div>
                                        {(
                                            [
                                                ["verjagen", "🏃 Vertreiben"],
                                                [
                                                    "verpruegeln",
                                                    "🥊 Verprügeln",
                                                ],
                                                [
                                                    "ausschalten",
                                                    "🩸 Ausschalten",
                                                ],
                                            ] as const
                                        ).map(([kind, label]) => {
                                            const exec = activeCrew.find(
                                                (m) =>
                                                    m.loyalty >=
                                                        ORDER_MIN_LOYALTY[
                                                            kind
                                                        ] && m.key !== exd.key
                                            )
                                            const price = ORDER_PRICES[kind]
                                            const ok =
                                                !!exec &&
                                                money >= price &&
                                                !pendingHunt
                                            return (
                                                <button
                                                    key={kind}
                                                    onClick={() => {
                                                        if (!exec) return
                                                        orderOn(
                                                            kind,
                                                            exd.name,
                                                            exec.key,
                                                            exd.key
                                                        )
                                                        closePhone()
                                                    }}
                                                    disabled={!ok}
                                                    style={{
                                                        padding: 9,
                                                        borderRadius: 8,
                                                        border: "none",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        background: ok
                                                            ? "#5a1f1f"
                                                            : "#2a2a2a",
                                                        color: ok
                                                            ? "white"
                                                            : "#777",
                                                        cursor: ok
                                                            ? "pointer"
                                                            : "default",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {label} ({price} €)
                                                    {exec
                                                        ? ` · ${exec.name}`
                                                        : " · niemand loyal genug"}
                                                </button>
                                            )
                                        })}
                                    </div>
                                ))}
                            </>
                        )}

                        {/* ---- Kunden auf Pump ---- */}
                        {kryptorTab === "kunden" && (
                            <>
                                {debtors.length === 0 && (
                                    <div
                                        style={{ color: "#888", fontSize: 13 }}
                                    >
                                        Niemand steht bei dir in der Kreide.
                                    </div>
                                )}
                                {debtors.map((d) => {
                                    const daysLeft = d.dueDay - day
                                    const overdue = daysLeft < 0
                                    return (
                                        <div
                                            key={d.name}
                                            style={{
                                                background: overdue
                                                    ? "#3a1a1a"
                                                    : "#242424",
                                                borderRadius: 10,
                                                padding: 10,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 6,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    color: "white",
                                                    fontSize: 13,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                <span>{d.name}</span>
                                                <span>{d.amount} €</span>
                                            </div>
                                            <div
                                                style={{
                                                    color: overdue
                                                        ? "#ff8080"
                                                        : "#bbb",
                                                    fontSize: 11,
                                                }}
                                            >
                                                {overdue
                                                    ? `⚠️ ${-daysLeft} Tage überfällig`
                                                    : `⏳ noch ${daysLeft} Tage`}
                                            </div>
                                            <button
                                                onClick={() => {
                                                    collectDebt(d.name)
                                                    closePhone()
                                                }}
                                                style={{
                                                    padding: 10,
                                                    borderRadius: 8,
                                                    border: "none",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    background: "#6b4a1f",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                💪 Eintreiben lassen (2h)
                                            </button>
                                        </div>
                                    )
                                })}
                            </>
                        )}

                        {/* ---- Knast-Kontakte ---- */}
                        {kryptorTab === "knast" && (
                            <>
                                {!INMATE_CONTACTS.some((i) =>
                                    unlockedContacts.includes(i.key)
                                ) && (
                                    <div
                                        style={{ color: "#888", fontSize: 13 }}
                                    >
                                        Noch keine Kontakte. Freunde dich in der
                                        Knast-Kantine an.
                                    </div>
                                )}
                                {INMATE_CONTACTS.filter(
                                    (i) =>
                                        unlockedContacts.includes(i.key) &&
                                        !deletedContacts.includes(i.key)
                                ).map((inmate) => {
                                    const free = isContactAvailable(inmate.key)
                                    return (
                                        <div
                                            key={inmate.key}
                                            style={{
                                                background: "#242424",
                                                borderRadius: 12,
                                                padding: 12,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 8,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    color: "white",
                                                    fontWeight: 700,
                                                    fontSize: 14,
                                                }}
                                            >
                                                <span>
                                                    {inmate.emoji} {inmate.name}
                                                </span>
                                                <span
                                                    style={{
                                                        fontWeight: 400,
                                                        color: "#cde",
                                                    }}
                                                >
                                                    {free
                                                        ? "🔓 draußen"
                                                        : `🔒 ${Math.max(
                                                              (inmateFreeDay[
                                                                  inmate.key
                                                              ] ?? day) - day,
                                                              0
                                                          )}T`}
                                                </span>
                                            </div>
                                            {free && (
                                                <button
                                                    onClick={() =>
                                                        hireInmateAsDealer(
                                                            inmate.key
                                                        )
                                                    }
                                                    disabled={
                                                        hiredDealers >=
                                                        maxDealers
                                                    }
                                                    style={{
                                                        padding: 10,
                                                        borderRadius: 8,
                                                        border: "none",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        background:
                                                            hiredDealers >=
                                                            maxDealers
                                                                ? "#3a3a3a"
                                                                : "#6b4a1f",
                                                        color:
                                                            hiredDealers >=
                                                            maxDealers
                                                                ? "#888"
                                                                : "white",
                                                        cursor:
                                                            hiredDealers >=
                                                            maxDealers
                                                                ? "default"
                                                                : "pointer",
                                                    }}
                                                >
                                                    🤝 Als Dealer anheuern
                                                </button>
                                            )}
                                        </div>
                                    )
                                })}
                                {crew
                                    .filter(
                                        (m) =>
                                            m.traitor &&
                                            m.jailUntilDay &&
                                            day < m.jailUntilDay
                                    )
                                    .map((m) => (
                                        <button
                                            key={m.key}
                                            onClick={() =>
                                                orderJailBeating(m.key)
                                            }
                                            style={{
                                                padding: 10,
                                                borderRadius: 8,
                                                border: "none",
                                                fontSize: 12,
                                                fontWeight: 700,
                                                background: "#8a2020",
                                                color: "white",
                                                cursor: "pointer",
                                            }}
                                        >
                                            📨 {m.name} im Knast besuchen lassen
                                            ({JAIL_HIT_PRICE} €)
                                        </button>
                                    ))}
                            </>
                        )}

                        {/* ---- Aufträge gegen normale Personen ---- */}
                        {kryptorTab === "auftraege" && (
                            <>
                                {activeCrew.length === 0 && (
                                    <div
                                        style={{ color: "#888", fontSize: 13 }}
                                    >
                                        Du brauchst erst Dealer, die so etwas
                                        für dich erledigen.
                                    </div>
                                )}
                                {activeCrew.length > 0 && (
                                    <div
                                        style={{ color: "#888", fontSize: 12 }}
                                    >
                                        Vertreiben ab{" "}
                                        {ORDER_MIN_LOYALTY.verjagen} Loyalität ·
                                        Verprügeln ab{" "}
                                        {ORDER_MIN_LOYALTY.verpruegeln} ·
                                        Ausschalten ab{" "}
                                        {ORDER_MIN_LOYALTY.ausschalten}
                                    </div>
                                )}
                                {[
                                    ...ALL_CONTACTS.map((f) => f.name),
                                    ...sparklyMatches.map((m) => m.name),
                                ]
                                    .filter((n, i, arr) => arr.indexOf(n) === i)
                                    .map((name) => (
                                        <div
                                            key={name}
                                            style={{
                                                background: "#242424",
                                                borderRadius: 10,
                                                padding: 10,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 6,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    color: "white",
                                                    fontSize: 13,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {name}
                                            </div>
                                            {(
                                                [
                                                    [
                                                        "verjagen",
                                                        "🏃 Vertreiben",
                                                    ],
                                                    [
                                                        "verpruegeln",
                                                        "🥊 Verprügeln",
                                                    ],
                                                    [
                                                        "ausschalten",
                                                        "🩸 Ausschalten",
                                                    ],
                                                ] as const
                                            ).map(([kind, label]) => {
                                                const exec = activeCrew.find(
                                                    (m) =>
                                                        m.loyalty >=
                                                        ORDER_MIN_LOYALTY[kind]
                                                )
                                                const price = ORDER_PRICES[kind]
                                                const ok =
                                                    !!exec && money >= price
                                                return (
                                                    <button
                                                        key={kind}
                                                        onClick={() => {
                                                            if (!exec) return
                                                            orderOn(
                                                                kind,
                                                                name,
                                                                exec.key
                                                            )
                                                            closePhone()
                                                        }}
                                                        disabled={!ok}
                                                        style={{
                                                            padding: 9,
                                                            borderRadius: 8,
                                                            border: "none",
                                                            fontSize: 12,
                                                            fontWeight: 700,
                                                            background: ok
                                                                ? "#5a1f1f"
                                                                : "#2a2a2a",
                                                            color: ok
                                                                ? "white"
                                                                : "#777",
                                                            cursor: ok
                                                                ? "pointer"
                                                                : "default",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        {label} ({price} €)
                                                        {exec
                                                            ? ` · ${exec.name}`
                                                            : " · niemand loyal genug"}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    ))}
                            </>
                        )}

                        <button
                            onClick={() =>
                                kryptorTab === null
                                    ? setPhoneAppOpen(null)
                                    : setKryptorTab(null)
                            }
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "#ccc",
                                cursor: "pointer",
                            }}
                        >
                            ⬅ Zurück
                        </button>
                    </div>
                </div>
            )}

            {phoneAppOpen === "chatwave" && (
                <div
                    onClick={closePhone}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background: "rgba(10,10,20,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            maxHeight: "70vh",
                            overflowY: "auto" as const,
                            background: "#1f1f1f",
                            borderRadius: 16,
                            padding: 20,
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                        >
                            💬 ChatWave
                            {chatOpenWith && (
                                <span
                                    style={{
                                        color: "#888",
                                        fontSize: 13,
                                        fontWeight: 400,
                                    }}
                                >
                                    {" · "}
                                    {chatOpenWith.startsWith("date:")
                                        ? chatOpenWith.slice(5)
                                        : ALL_CONTACTS.find(
                                              (f) => f.key === chatOpenWith
                                          )?.name}
                                </span>
                            )}
                        </div>

                        {/* ---- Offener Chat ---- */}
                        {chatOpenWith && (
                            <>
                                <div
                                    style={{
                                        background: "#141414",
                                        borderRadius: 12,
                                        padding: 10,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 6,
                                        maxHeight: 260,
                                        overflowY: "auto" as const,
                                    }}
                                >
                                    {(chatLog[chatOpenWith] ?? []).length ===
                                        0 && (
                                        <div
                                            style={{
                                                color: "#666",
                                                fontSize: 12,
                                            }}
                                        >
                                            Schreib einfach los – sie reagiert
                                            auf das, was du sagst.
                                        </div>
                                    )}
                                    {(chatLog[chatOpenWith] ?? []).map(
                                        (msg, i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    alignSelf:
                                                        msg.from === "me"
                                                            ? "flex-end"
                                                            : "flex-start",
                                                    background:
                                                        msg.from === "me"
                                                            ? "#2c6b5c"
                                                            : "#333333",
                                                    color: "white",
                                                    padding: "8px 12px",
                                                    borderRadius: 14,
                                                    fontSize: 13,
                                                    maxWidth: "80%",
                                                    textAlign: "left",
                                                }}
                                            >
                                                {msg.text}
                                            </div>
                                        )
                                    )}
                                </div>
                                <div style={{ display: "flex", gap: 6 }}>
                                    <input
                                        value={chatInput}
                                        onChange={(e) =>
                                            setChatInput(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter")
                                                sendChatMessage()
                                        }}
                                        placeholder="Nachricht schreiben…"
                                        style={{
                                            flex: 1,
                                            padding: 12,
                                            borderRadius: 10,
                                            border: "1px solid #444",
                                            background: "#1a1a1a",
                                            color: "white",
                                            fontSize: 16,
                                        }}
                                    />
                                    <button
                                        onClick={sendChatMessage}
                                        style={{
                                            padding: "12px 16px",
                                            borderRadius: 10,
                                            border: "none",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            background: "#2c9c5c",
                                            color: "white",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ➤
                                    </button>
                                </div>
                                <button
                                    onClick={() => setChatOpenWith(null)}
                                    style={{
                                        padding: 12,
                                        borderRadius: 10,
                                        border: "none",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        background: "#2a2a2a",
                                        color: "#ccc",
                                        cursor: "pointer",
                                    }}
                                >
                                    ⬅ Zurück zur Liste
                                </button>
                            </>
                        )}

                        {!chatOpenWith && (
                            <>
                                {companions.length > 0 && (
                                    <div
                                        style={{
                                            background: "#2c5a8a",
                                            borderRadius: 12,
                                            padding: 12,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 8,
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: 13,
                                            }}
                                        >
                                            👥 Unterwegs mit{" "}
                                            {companions
                                                .map(companionName)
                                                .join(", ")}
                                        </div>
                                        <div
                                            style={{
                                                color: "#cde",
                                                fontSize: 12,
                                            }}
                                        >
                                            Seit{" "}
                                            {(() => {
                                                const mins = Math.max(
                                                    gameMinutes -
                                                        (companionSince ??
                                                            gameMinutes),
                                                    0
                                                )
                                                return mins >= 60
                                                    ? `${Math.floor(mins / 60)}h ${mins % 60}min`
                                                    : `${mins}min`
                                            })()}
                                        </div>
                                        <button
                                            onClick={() => {
                                                sayGoodbyeToCompanion()
                                                closePhone()
                                            }}
                                            style={{
                                                padding: 12,
                                                borderRadius: 10,
                                                border: "none",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                background: "#1f3f5f",
                                                color: "white",
                                                cursor: "pointer",
                                            }}
                                        >
                                            👋 Verabschieden
                                        </button>
                                    </div>
                                )}
                                <button
                                    onClick={groupHangout}
                                    style={{
                                        padding: 12,
                                        borderRadius: 10,
                                        border: "none",
                                        fontSize: 13,
                                        fontWeight: 700,
                                        background: "#3a5a2c",
                                        color: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    👥 Alle gemeinsam treffen (2h)
                                </button>
                                <div style={{ display: "flex", gap: 8 }}>
                                    {(["alle", "favoriten"] as const).map(
                                        (f) => (
                                            <button
                                                key={f}
                                                onClick={() =>
                                                    setChatwaveFilter(f)
                                                }
                                                style={{
                                                    flex: 1,
                                                    padding: 10,
                                                    borderRadius: 10,
                                                    border: "none",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    background:
                                                        chatwaveFilter === f
                                                            ? "#2c9c5c"
                                                            : "#2a2a2a",
                                                    color:
                                                        chatwaveFilter === f
                                                            ? "white"
                                                            : "#aaa",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {f === "alle"
                                                    ? `Alle (${ALL_CONTACTS.length})`
                                                    : `⭐ Favoriten (${favoriteContacts.length})`}
                                            </button>
                                        )
                                    )}
                                </div>
                                {visibleContacts.length === 0 && (
                                    <div
                                        style={{ color: "#888", fontSize: 13 }}
                                    >
                                        {chatwaveFilter === "favoriten"
                                            ? "Noch keine Favoriten markiert."
                                            : "Keine Kontakte."}
                                    </div>
                                )}
                                {visibleContacts.map((friend) => {
                                    const hasRequest =
                                        customerRequest &&
                                        customerRequestNpc === friend.key
                                    const isFav = favoriteContacts.includes(
                                        friend.key
                                    )
                                    return (
                                        <div
                                            key={friend.key}
                                            style={{
                                                background: "#242424",
                                                borderRadius: 12,
                                                padding: 12,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 8,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                    color: "white",
                                                    fontWeight: 700,
                                                    fontSize: 14,
                                                }}
                                            >
                                                <span>
                                                    {isFav ? "⭐ " : ""}
                                                    {friend.emoji} {friend.name}
                                                </span>
                                                <span
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 8,
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: 400,
                                                            color: "#cde",
                                                        }}
                                                    >
                                                        {isContactAvailable(
                                                            friend.key
                                                        )
                                                            ? `❤️ ${npcFriendship[friend.key] ?? 0}`
                                                            : `🔒 frei in ${Math.max(
                                                                  (inmateFreeDay[
                                                                      friend.key
                                                                  ] ?? day) -
                                                                      day,
                                                                  0
                                                              )}T`}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            toggleFavoriteContact(
                                                                friend.key
                                                            )
                                                        }
                                                        style={{
                                                            padding: "4px 8px",
                                                            borderRadius: 6,
                                                            border: "none",
                                                            fontSize: 12,
                                                            background: isFav
                                                                ? "#6b5a1f"
                                                                : "#3a3a3a",
                                                            color: "white",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {isFav ? "★" : "☆"}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            deleteContact(
                                                                friend.key
                                                            )
                                                        }
                                                        style={{
                                                            padding: "4px 8px",
                                                            borderRadius: 6,
                                                            border: "none",
                                                            fontSize: 12,
                                                            background:
                                                                "#5a1f1f",
                                                            color: "white",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        🗑
                                                    </button>
                                                </span>
                                            </div>
                                            {hasRequest && (
                                                <div
                                                    style={{
                                                        background: "#2a2a2a",
                                                        borderRadius: 8,
                                                        padding: 10,
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 6,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            color: "#ddd",
                                                            fontSize: 13,
                                                        }}
                                                    >
                                                        {customerRequestAccepted
                                                            ? `✅ Angenommen – noch ${Math.max(
                                                                  Math.ceil(
                                                                      ((customerDealDeadline ??
                                                                          0) -
                                                                          gameMinutes) /
                                                                          60
                                                                  ),
                                                                  0
                                                              )} Std. Zeit – Treffpunkt: ${LOCATION_NAMES[customerMeetingSpot ?? ""] ?? "unbekannt"} (${describeSpotTerritory(customerMeetingSpot ?? "")})`
                                                            : `Will ${customerDealGrams}g ${DRUG_INFO[customerDealDrug].emoji} ${DRUG_INFO[customerDealDrug].label} kaufen.\n📍 ${LOCATION_NAMES[customerMeetingSpot ?? ""] ?? "unbekannt"} – ${describeSpotTerritory(customerMeetingSpot ?? "")}`}
                                                    </div>
                                                    {customerRequestAccepted && (
                                                        <button
                                                            onClick={
                                                                cancelCustomerDeal
                                                            }
                                                            style={{
                                                                padding: 10,
                                                                borderRadius: 8,
                                                                border: "none",
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                background:
                                                                    "#5a1f1f",
                                                                color: "white",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            ❌ Deal absagen
                                                        </button>
                                                    )}
                                                    {!customerRequestAccepted && (
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                gap: 6,
                                                            }}
                                                        >
                                                            <button
                                                                onClick={() => {
                                                                    acceptCustomerRequest()
                                                                }}
                                                                style={{
                                                                    flex: 1,
                                                                    padding: 10,
                                                                    borderRadius: 8,
                                                                    border: "none",
                                                                    fontSize: 12,
                                                                    fontWeight: 700,
                                                                    background:
                                                                        "#2c6b2c",
                                                                    color: "white",
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                ✅ Annehmen
                                                            </button>
                                                            <button
                                                                onClick={
                                                                    declineCustomerRequest
                                                                }
                                                                style={{
                                                                    flex: 1,
                                                                    padding: 10,
                                                                    borderRadius: 8,
                                                                    border: "none",
                                                                    fontSize: 12,
                                                                    fontWeight: 700,
                                                                    background:
                                                                        "#5a1f1f",
                                                                    color: "white",
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                ❌ Ablehnen
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: 6,
                                                }}
                                            >
                                                <button
                                                    onClick={() =>
                                                        setChatOpenWith(
                                                            friend.key
                                                        )
                                                    }
                                                    style={{
                                                        flex: 1,
                                                        padding: 10,
                                                        borderRadius: 8,
                                                        border: "none",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        background: "#2c6b6b",
                                                        color: "white",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    💬 Schreiben
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        meetFriend(friend.key)
                                                    }
                                                    disabled={
                                                        !isContactAvailable(
                                                            friend.key
                                                        )
                                                    }
                                                    style={{
                                                        flex: 1,
                                                        padding: 10,
                                                        borderRadius: 8,
                                                        border: "none",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        background: "#3a5a2c",
                                                        color: "white",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    🤝 Treffen
                                                </button>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: 6,
                                                }}
                                            >
                                                {(npcFriendship[friend.key] ??
                                                    0) >=
                                                    FLIRT_MIN_FRIENDSHIP &&
                                                    !sparklyMatches.some(
                                                        (m) =>
                                                            m.name ===
                                                            friend.name
                                                    ) && (
                                                        <button
                                                            onClick={() => {
                                                                startFlirt(
                                                                    friend.name
                                                                )
                                                                closePhone()
                                                            }}
                                                            style={{
                                                                flex: 1,
                                                                padding: 10,
                                                                borderRadius: 8,
                                                                border: "none",
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                background:
                                                                    "#a02c5f",
                                                                color: "white",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            💘 Anmachen
                                                        </button>
                                                    )}
                                                {favoriteContacts.includes(
                                                    friend.key
                                                ) && (
                                                    <button
                                                        onClick={() => {
                                                            hangOutWithFriend(
                                                                friend.key
                                                            )
                                                            closePhone()
                                                        }}
                                                        style={{
                                                            flex: 1,
                                                            padding: 10,
                                                            borderRadius: 8,
                                                            border: "none",
                                                            fontSize: 12,
                                                            fontWeight: 700,
                                                            background:
                                                                "#2c5a8a",
                                                            color: "white",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        🎉 Zusammen weggehen
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                                {sparklyMatches.filter((m) => m.metInPerson)
                                    .length > 0 && (
                                    <div
                                        style={{
                                            borderTop: "1px solid #333",
                                            paddingTop: 10,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 10,
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "#888",
                                                fontSize: 13,
                                                textAlign: "left",
                                            }}
                                        >
                                            Deine Dates:
                                        </div>
                                        {sparklyMatches
                                            .filter((m) => m.metInPerson)
                                            .map((match) => (
                                                <div
                                                    key={match.name}
                                                    style={{
                                                        background: "#242424",
                                                        borderRadius: 12,
                                                        padding: 12,
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                            color: "white",
                                                            fontWeight: 700,
                                                            fontSize: 14,
                                                        }}
                                                    >
                                                        <span>
                                                            💕 {match.name}
                                                        </span>
                                                        <span
                                                            style={{
                                                                fontWeight: 400,
                                                                color: "#e8b",
                                                            }}
                                                        >
                                                            Lvl {match.level}
                                                        </span>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            gap: 6,
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                setChatOpenWith(
                                                                    `date:${match.name}`
                                                                )
                                                            }
                                                            style={{
                                                                flex: 1,
                                                                padding: 10,
                                                                borderRadius: 8,
                                                                border: "none",
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                background:
                                                                    "#7a2c58",
                                                                color: "white",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            💬 Schreiben
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                inviteDateHome(
                                                                    match.name
                                                                )
                                                            }
                                                            disabled={
                                                                dateVisitOrdered ||
                                                                escortOrdered
                                                            }
                                                            style={{
                                                                flex: 1,
                                                                padding: 10,
                                                                borderRadius: 8,
                                                                border: "none",
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                background:
                                                                    dateVisitOrdered ||
                                                                    escortOrdered
                                                                        ? "#3a3a3a"
                                                                        : "#3a5a2c",
                                                                color:
                                                                    dateVisitOrdered ||
                                                                    escortOrdered
                                                                        ? "#999"
                                                                        : "white",
                                                                cursor:
                                                                    dateVisitOrdered ||
                                                                    escortOrdered
                                                                        ? "default"
                                                                        : "pointer",
                                                            }}
                                                        >
                                                            🏠 Einladen
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            goOutWithDate(
                                                                match.name
                                                            )
                                                            closePhone()
                                                        }}
                                                        style={{
                                                            padding: 10,
                                                            borderRadius: 8,
                                                            border: "none",
                                                            fontSize: 12,
                                                            fontWeight: 700,
                                                            background:
                                                                "#2c5a8a",
                                                            color: "white",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        🎉 Zusammen ausgehen
                                                    </button>
                                                    {match.relationship ? (
                                                        <button
                                                            onClick={() =>
                                                                endRelationship(
                                                                    match.name
                                                                )
                                                            }
                                                            style={{
                                                                padding: 10,
                                                                borderRadius: 8,
                                                                border: "none",
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                background:
                                                                    "#5a1f1f",
                                                                color: "white",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            💔 Schluss machen
                                                            (ihr seid zusammen)
                                                        </button>
                                                    ) : (
                                                        match.level >=
                                                            RELATIONSHIP_MIN_LEVEL &&
                                                        !currentPartner && (
                                                            <button
                                                                onClick={() =>
                                                                    startRelationship(
                                                                        match.name
                                                                    )
                                                                }
                                                                style={{
                                                                    padding: 10,
                                                                    borderRadius: 8,
                                                                    border: "none",
                                                                    fontSize: 12,
                                                                    fontWeight: 700,
                                                                    background:
                                                                        "#a02c5f",
                                                                    color: "white",
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                💍 Beziehung
                                                                eingehen
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </>
                        )}
                        <button
                            onClick={() => setPhoneAppOpen(null)}
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "#ccc",
                                cursor: "pointer",
                            }}
                        >
                            ⬅ Zurück
                        </button>
                    </div>
                </div>
            )}

            {phoneAppOpen === "pixgram" && (
                <div
                    onClick={closePhone}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background: "rgba(10,10,20,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            maxHeight: "70vh",
                            overflowY: "auto" as const,
                            background: "#1f1f1f",
                            borderRadius: 16,
                            padding: 20,
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 18,
                                }}
                            >
                                📸 PixGram
                            </span>
                            <span
                                style={{
                                    color: "#e8a",
                                    fontSize: 13,
                                    fontWeight: 700,
                                }}
                            >
                                {followers} Follower
                            </span>
                        </div>

                        {/* Eigene Posts */}
                        <div
                            style={{
                                color: "#888",
                                fontSize: 12,
                                textAlign: "left",
                            }}
                        >
                            {canPost
                                ? "Was willst du posten?"
                                : `Nächster Post in ${Math.ceil(
                                      (PIXGRAM_POST_COOLDOWN -
                                          (gameMinutes - lastPostMinute)) /
                                          60
                                  )} Std.`}
                        </div>
                        {PIXGRAM_POST_TYPES.map((t) => (
                            <button
                                key={t.key}
                                onClick={() => postToPixgram(t.key)}
                                disabled={
                                    !canPost || (t.needsCar && !ownsAnyCar)
                                }
                                style={{
                                    padding: 12,
                                    borderRadius: 10,
                                    border: "none",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    background:
                                        canPost && (!t.needsCar || ownsAnyCar)
                                            ? "#a83279"
                                            : "#2a2a2a",
                                    color:
                                        canPost && (!t.needsCar || ownsAnyCar)
                                            ? "white"
                                            : "#777",
                                    cursor:
                                        canPost && (!t.needsCar || ownsAnyCar)
                                            ? "pointer"
                                            : "default",
                                    textAlign: "left",
                                }}
                            >
                                {t.label}
                                {t.risky ? " (riskant)" : ""}
                            </button>
                        ))}

                        {/* Werbedeals ab genug Followern */}
                        {followers >= PIXGRAM_SPONSOR_THRESHOLD && (
                            <button
                                onClick={claimSponsorDeal}
                                disabled={sponsorDayClaimed === day}
                                style={{
                                    padding: 12,
                                    borderRadius: 10,
                                    border: "none",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    background:
                                        sponsorDayClaimed === day
                                            ? "#2a2a2a"
                                            : "#2c6b2c",
                                    color:
                                        sponsorDayClaimed === day
                                            ? "#777"
                                            : "white",
                                    cursor:
                                        sponsorDayClaimed === day
                                            ? "default"
                                            : "pointer",
                                }}
                            >
                                💼 Werbedeal annehmen (1h)
                            </button>
                        )}
                        {followers < PIXGRAM_SPONSOR_THRESHOLD && (
                            <div
                                style={{
                                    color: "#666",
                                    fontSize: 11,
                                    textAlign: "left",
                                }}
                            >
                                Ab {PIXGRAM_SPONSOR_THRESHOLD} Followern kommen
                                Werbedeals rein.
                            </div>
                        )}

                        {/* Feed */}
                        <div
                            style={{
                                borderTop: "1px solid #333",
                                paddingTop: 10,
                                color: "#888",
                                fontSize: 12,
                                textAlign: "left",
                            }}
                        >
                            Feed:
                        </div>
                        {ALL_CONTACTS.slice(0, 3).map((friend, idx) => (
                            <div
                                key={friend.key}
                                style={{
                                    background: "#2a2a2a",
                                    borderRadius: 12,
                                    padding: 12,
                                    textAlign: "left",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8,
                                }}
                            >
                                <div
                                    style={{
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: 14,
                                    }}
                                >
                                    {friend.emoji} {friend.name}
                                </div>
                                <div style={{ color: "#aaa", fontSize: 13 }}>
                                    {
                                        PIXGRAM_CAPTIONS[
                                            idx % PIXGRAM_CAPTIONS.length
                                        ]
                                    }
                                </div>
                                <button
                                    onClick={() => likePixgramPost(friend.key)}
                                    style={{
                                        padding: 10,
                                        borderRadius: 8,
                                        border: "none",
                                        fontSize: 12,
                                        fontWeight: 700,
                                        background: "#6b2c5f",
                                        color: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    ❤️ Liken
                                </button>
                            </div>
                        ))}

                        <button
                            onClick={() => setPhoneAppOpen(null)}
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "#ccc",
                                cursor: "pointer",
                            }}
                        >
                            ⬅ Zurück
                        </button>
                    </div>
                </div>
            )}

            {phoneAppOpen === "sparkly" && (
                <div
                    onClick={closePhone}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background: "rgba(10,10,20,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            maxHeight: "70vh",
                            overflowY: "auto" as const,
                            background: "#1f1f1f",
                            borderRadius: 16,
                            padding: 20,
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                        >
                            💕 Sparkly
                        </div>
                        <div style={{ color: "#888", fontSize: 14 }}>
                            Style-Score: {styleScore} – guter Style erhöht deine
                            Match-Chance.
                        </div>
                        <button
                            onClick={useSparkly}
                            style={{
                                padding: 14,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 15,
                                fontWeight: 700,
                                background: "#a02c5f",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            💕 Swipen (20min)
                        </button>
                        {sparklyMatches.length > 0 && (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8,
                                    borderTop: "1px solid #333",
                                    paddingTop: 10,
                                }}
                            >
                                <div
                                    style={{
                                        color: "#888",
                                        fontSize: 13,
                                        textAlign: "left",
                                    }}
                                >
                                    Deine Matches:
                                </div>
                                {sparklyMatches.map((match) => (
                                    <div
                                        key={match.name}
                                        style={{
                                            background: "#5a2040",
                                            borderRadius: 10,
                                            padding: 10,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 6,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: 14,
                                            }}
                                        >
                                            <span>💕 {match.name}</span>
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    color: "#e8b",
                                                }}
                                            >
                                                Lvl {match.level}
                                            </span>
                                        </div>
                                        <div
                                            style={{ display: "flex", gap: 6 }}
                                        >
                                            <button
                                                onClick={() =>
                                                    goOnDate(match.name)
                                                }
                                                style={{
                                                    flex: 1,
                                                    padding: 10,
                                                    borderRadius: 8,
                                                    border: "none",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    background: "#7a2c58",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                📅 Date
                                            </button>
                                            <button
                                                onClick={() =>
                                                    inviteDateHome(match.name)
                                                }
                                                disabled={
                                                    dateVisitOrdered ||
                                                    escortOrdered
                                                }
                                                style={{
                                                    flex: 1,
                                                    padding: 10,
                                                    borderRadius: 8,
                                                    border: "none",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    background:
                                                        dateVisitOrdered ||
                                                        escortOrdered
                                                            ? "#3a3a3a"
                                                            : "#3a5a2c",
                                                    color:
                                                        dateVisitOrdered ||
                                                        escortOrdered
                                                            ? "#999"
                                                            : "white",
                                                    cursor:
                                                        dateVisitOrdered ||
                                                        escortOrdered
                                                            ? "default"
                                                            : "pointer",
                                                }}
                                            >
                                                🏠 Einladen
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteMatch(match.name)
                                                }
                                                style={{
                                                    padding: "10px 12px",
                                                    borderRadius: 8,
                                                    border: "none",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    background: "#5a1f1f",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                🗑
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            onClick={() => setPhoneAppOpen(null)}
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "#ccc",
                                cursor: "pointer",
                            }}
                        >
                            ⬅ Zurück
                        </button>
                    </div>
                </div>
            )}

            {phoneAppOpen === "webgo" && (
                <div
                    onClick={closePhone}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background: "rgba(10,10,20,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            maxHeight: "70vh",
                            overflowY: "auto" as const,
                            background: "#1f1f1f",
                            borderRadius: 16,
                            padding: 20,
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                        >
                            🌐 WebGo
                            {webgoSection && (
                                <span
                                    style={{
                                        color: "#888",
                                        fontSize: 13,
                                        fontWeight: 400,
                                    }}
                                >
                                    {" · "}
                                    {
                                        WEBGO_SECTIONS.find(
                                            (s) => s.key === webgoSection
                                        )?.label
                                    }
                                </span>
                            )}
                        </div>

                        {/* Startseite */}
                        {!webgoSection && (
                            <>
                                <div
                                    style={{
                                        background: "#2a2a2a",
                                        borderRadius: 10,
                                        padding: 12,
                                        color: "#ddd",
                                        fontSize: 13,
                                        textAlign: "left",
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "#888",
                                            fontSize: 11,
                                            marginBottom: 4,
                                        }}
                                    >
                                        Schlagzeile des Tages
                                    </div>
                                    {currentNews.text}
                                </div>
                                {WEBGO_SECTIONS.map((s) => (
                                    <button
                                        key={s.key}
                                        onClick={() => setWebgoSection(s.key)}
                                        style={{
                                            padding: 13,
                                            borderRadius: 10,
                                            border: "none",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            background: "#2c6fa8",
                                            color: "white",
                                            cursor: "pointer",
                                            textAlign: "left",
                                        }}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </>
                        )}

                        {/* Marktpreise */}
                        {webgoSection === "preise" && (
                            <>
                                <div
                                    style={{
                                        color: "#888",
                                        fontSize: 12,
                                        textAlign: "left",
                                    }}
                                >
                                    Aktuelle Preise pro Gramm diese Woche:
                                </div>
                                {DRUG_TYPES.map((drug) => (
                                    <div
                                        key={drug}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            color: "white",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            background: "#2a2a2a",
                                            padding: 10,
                                            borderRadius: 8,
                                        }}
                                    >
                                        <span>
                                            {DRUG_INFO[drug].emoji}{" "}
                                            {DRUG_INFO[drug].label}
                                        </span>
                                        <span
                                            style={{
                                                fontWeight: 400,
                                                color: "#aaa",
                                            }}
                                        >
                                            EK {buyPrices[drug]}€ · VK{" "}
                                            {sellPrices[drug]}€
                                        </span>
                                    </div>
                                ))}
                            </>
                        )}

                        {/* Nachrichten */}
                        {webgoSection === "news" && (
                            <>
                                {WEBGO_NEWS.map((n, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background:
                                                i === newsIndex
                                                    ? "#33445a"
                                                    : "#2a2a2a",
                                            borderRadius: 10,
                                            padding: 12,
                                            color:
                                                i === newsIndex
                                                    ? "white"
                                                    : "#999",
                                            fontSize: 13,
                                            textAlign: "left",
                                        }}
                                    >
                                        {i === newsIndex ? "🔴 " : ""}
                                        {n.text}
                                    </div>
                                ))}
                            </>
                        )}

                        {/* Kleinanzeigen */}
                        {webgoSection === "kleinanzeigen" && (
                            <>
                                <div
                                    style={{
                                        color: "#888",
                                        fontSize: 12,
                                        textAlign: "left",
                                    }}
                                >
                                    Gebraucht und günstig – wechselt alle paar
                                    Tage:
                                </div>
                                {WEBGO_CLASSIFIEDS.map((item) => {
                                    const gone = boughtClassifieds.includes(
                                        item.key
                                    )
                                    return (
                                        <button
                                            key={item.key}
                                            onClick={() =>
                                                buyClassified(item.key)
                                            }
                                            disabled={
                                                gone || money < item.price
                                            }
                                            style={{
                                                padding: 12,
                                                borderRadius: 10,
                                                border: "none",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                background:
                                                    gone || money < item.price
                                                        ? "#2a2a2a"
                                                        : "#3a6b8a",
                                                color:
                                                    gone || money < item.price
                                                        ? "#777"
                                                        : "white",
                                                cursor:
                                                    gone || money < item.price
                                                        ? "default"
                                                        : "pointer",
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <span>{item.label}</span>
                                            <span>
                                                {gone
                                                    ? "verkauft"
                                                    : `${item.price} €`}
                                            </span>
                                        </button>
                                    )
                                })}
                            </>
                        )}

                        {/* Anzeigen (Escort) */}
                        {webgoSection === "anzeigen" && (
                            <>
                                <div
                                    style={{
                                        color: "#888",
                                        fontSize: 12,
                                        textAlign: "left",
                                    }}
                                >
                                    Anzeigen in deiner Nähe:
                                </div>
                                <button
                                    onClick={orderEscort}
                                    disabled={
                                        escortOrdered || money < ESCORT_PRICE
                                    }
                                    style={{
                                        padding: 14,
                                        borderRadius: 10,
                                        border: "none",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        background:
                                            escortOrdered ||
                                            money < ESCORT_PRICE
                                                ? "#2a2a2a"
                                                : "#a02c5f",
                                        color:
                                            escortOrdered ||
                                            money < ESCORT_PRICE
                                                ? "#888"
                                                : "white",
                                        cursor:
                                            escortOrdered ||
                                            money < ESCORT_PRICE
                                                ? "default"
                                                : "pointer",
                                    }}
                                >
                                    {escortOrdered
                                        ? "🌹 Bestellung unterwegs..."
                                        : `🌹 Begleitung bestellen (${ESCORT_PRICE} €)`}
                                </button>
                            </>
                        )}

                        {/* Wetter */}
                        {webgoSection === "wetter" && (
                            <>
                                {WEATHER_TYPES.map((w, i) => {
                                    const today =
                                        day % WEATHER_TYPES.length === i
                                    return (
                                        <div
                                            key={w.key}
                                            style={{
                                                background: today
                                                    ? "#33445a"
                                                    : "#2a2a2a",
                                                borderRadius: 10,
                                                padding: 12,
                                                color: today ? "white" : "#999",
                                                fontSize: 14,
                                                fontWeight: today ? 700 : 400,
                                                textAlign: "left",
                                            }}
                                        >
                                            {today ? "📍 Heute: " : ""}
                                            {w.label}
                                        </div>
                                    )
                                })}
                            </>
                        )}

                        <button
                            onClick={() =>
                                webgoSection
                                    ? setWebgoSection(null)
                                    : setPhoneAppOpen(null)
                            }
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "#ccc",
                                cursor: "pointer",
                                marginTop: 4,
                            }}
                        >
                            ⬅ Zurück
                        </button>
                    </div>
                </div>
            )}

            {phoneAppOpen === "foodo" && (
                <div
                    onClick={closePhone}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background: "rgba(10,10,20,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                            width: "100%",
                            maxWidth: 320,
                            maxHeight: "70vh",
                            overflowY: "auto" as const,
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                        >
                            🍔 Foodo
                        </div>
                        {foodOrdered ? (
                            <div
                                style={{
                                    color: "#ccc",
                                    fontSize: 14,
                                    textAlign: "center",
                                }}
                            >
                                🛵 Unterwegs zu dir – klingelt in etwa{" "}
                                {Math.max(
                                    Math.ceil(
                                        ((foodArrivalMinutes ?? 0) -
                                            gameMinutes) /
                                            10
                                    ) * 10,
                                    10
                                )}{" "}
                                Minuten.
                            </div>
                        ) : deliveredMeal ? (
                            <div
                                style={{
                                    color: "#ccc",
                                    fontSize: 14,
                                    textAlign: "center",
                                }}
                            >
                                🍽 Deine Lieferung wartet im Wohnzimmer auf
                                dich.
                            </div>
                        ) : (
                            FOODO_MENU.map((meal) => (
                                <button
                                    key={meal.key}
                                    onClick={() =>
                                        orderFood(meal.key, meal.price)
                                    }
                                    disabled={money < meal.price}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: 14,
                                        borderRadius: 10,
                                        border: "none",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        background:
                                            money < meal.price
                                                ? "#3a3a3a"
                                                : "#c9432c",
                                        color:
                                            money < meal.price
                                                ? "#999"
                                                : "white",
                                        cursor:
                                            money < meal.price
                                                ? "default"
                                                : "pointer",
                                    }}
                                >
                                    <span>{meal.name}</span>
                                    <span>{meal.price} €</span>
                                </button>
                            ))
                        )}
                        <button
                            onClick={() => setPhoneAppOpen(null)}
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "#ccc",
                                cursor: "pointer",
                            }}
                        >
                            ⬅ Zurück
                        </button>
                    </div>
                </div>
            )}

            {amountPanelMode && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 16,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        {amountPanelMode === "take" && "📦 Ware mitnehmen"}
                        {amountPanelMode === "buy" && "🛒 Ware kaufen"}
                        {amountPanelMode === "supply" && "📦 Bunker befüllen"}
                        {amountPanelMode === "withdraw" &&
                            "📤 Aus Bunker holen"}
                    </div>
                    {DRUG_TYPES.map((drug) => {
                        const available =
                            amountPanelMode === "take"
                                ? (homeStash[drug] ?? 0)
                                : amountPanelMode === "supply"
                                  ? (carrying[drug] ?? 0)
                                  : amountPanelMode === "withdraw"
                                    ? (dealerStash[drug] ?? 0)
                                    : null
                        return (
                            <div
                                key={drug}
                                style={{
                                    width: "100%",
                                    maxWidth: 320,
                                    background: "#242424",
                                    borderRadius: 12,
                                    padding: 12,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: 14,
                                    }}
                                >
                                    <span>
                                        {DRUG_INFO[drug].emoji}{" "}
                                        {DRUG_INFO[drug].label}
                                    </span>
                                    <span
                                        style={{
                                            color: "#aaa",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {amountPanelMode === "buy"
                                            ? `${buyPrices[drug]}€/g`
                                            : `verfügbar: ${available}g`}
                                    </span>
                                </div>
                                <div style={{ display: "flex", gap: 8 }}>
                                    <input
                                        type="number"
                                        min={0}
                                        value={amountPanelInputs[drug]}
                                        onChange={(e) =>
                                            setAmountPanelInputs((inputs) => ({
                                                ...inputs,
                                                [drug]: e.target.value,
                                            }))
                                        }
                                        placeholder="Gramm"
                                        style={{
                                            flex: 1,
                                            padding: 10,
                                            borderRadius: 8,
                                            border: "1px solid #444",
                                            background: "#1a1a1a",
                                            color: "white",
                                            // 16px verhindert das Auto-Zoomen auf iPhone/iPad
                                            fontSize: 16,
                                        }}
                                    />
                                    <button
                                        onClick={() => confirmAmountPanel(drug)}
                                        style={{
                                            padding: "10px 16px",
                                            borderRadius: 8,
                                            border: "none",
                                            fontSize: 13,
                                            fontWeight: 700,
                                            background: "#2c6b2c",
                                            color: "white",
                                            cursor: "pointer",
                                        }}
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <button
                        onClick={closeAmountPanel}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 14,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Schließen
                    </button>
                </div>
            )}

            {moneyPanelMode && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 16,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        {moneyPanelMode === "deposit"
                            ? "🏦 Geld einzahlen"
                            : "🏦 Geld abheben"}
                    </div>
                    <div style={{ color: "#aaa", fontSize: 14 }}>
                        {moneyPanelMode === "deposit"
                            ? `Dabei: ${money} €`
                            : `Im Safe: ${moneySafe} €`}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 8,
                            width: "100%",
                            maxWidth: 320,
                        }}
                    >
                        <input
                            type="number"
                            min={0}
                            value={moneyPanelInput}
                            onChange={(e) => setMoneyPanelInput(e.target.value)}
                            placeholder="Betrag in €"
                            style={{
                                flex: 1,
                                padding: 12,
                                borderRadius: 8,
                                border: "1px solid #444",
                                background: "#1a1a1a",
                                color: "white",
                                // 16px verhindert das Auto-Zoomen auf iPhone/iPad
                                fontSize: 16,
                            }}
                        />
                        <button
                            onClick={confirmMoneyPanel}
                            style={{
                                padding: "12px 18px",
                                borderRadius: 8,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2c6b2c",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            OK
                        </button>
                    </div>
                    <button
                        onClick={closeMoneyPanel}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 14,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Schließen
                    </button>
                </div>
            )}

            {inventoryMenuOpen && (
                <div
                    onClick={() => setInventoryMenuOpen(false)}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 3,
                        background: "rgba(0,0,0,0.55)",
                        display: "flex",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxHeight: "70%",
                            overflowY: "auto",
                            background: "#1f1f1f",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            padding: 16,
                            paddingTop: 84,
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "white",
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            <span>💰 Geld dabei</span>
                            <span>{money} €</span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "white",
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            <span>🎒 Ware dabei</span>
                            <span>
                                {DRUG_TYPES.map(
                                    (d) =>
                                        `${DRUG_INFO[d].emoji}${carrying[d] ?? 0}g`
                                ).join(" ")}
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "white",
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            <span>🕵️ Diebesgut</span>
                            <span>{stolenGoods}</span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "white",
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            <span>🚬 Zigaretten</span>
                            <span>{cigarettes}</span>
                        </div>
                        {SNACK_ITEMS.filter(
                            (item) => (snackInventory[item.key] ?? 0) > 0
                        ).map((item) => (
                            <div
                                key={item.key}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    color: "white",
                                    fontSize: 15,
                                    fontWeight: 700,
                                }}
                            >
                                <span>
                                    {item.emoji} {item.label}
                                </span>
                                <span>{snackInventory[item.key]}</span>
                            </div>
                        ))}
                        {ALCOHOL_TYPES.filter(
                            (item) => (alcoholInventory[item.key] ?? 0) > 0
                        ).map((item) => (
                            <div
                                key={item.key}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    color: "white",
                                    fontSize: 15,
                                    fontWeight: 700,
                                }}
                            >
                                <span>
                                    {item.emoji} {item.label}
                                </span>
                                <span>{alcoholInventory[item.key]}</span>
                            </div>
                        ))}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "white",
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            <span>🔫 Waffe</span>
                            <span>
                                {ownedWeapon
                                    ? WEAPON_TYPES.find(
                                          (w) => w.key === ownedWeapon
                                      )?.label
                                    : "Keine"}
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "white",
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            <span>🎭 Maske</span>
                            <span>{hasMask ? "Ja" : "Nein"}</span>
                        </div>
                    </div>
                </div>
            )}

            {territoryMapOpen && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background:
                            "linear-gradient(180deg, #1a2436 0%, #0f1622 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: 16,
                            marginBottom: 12,
                            textAlign: "center",
                        }}
                    >
                        🗺 Frankfurt – deine Reviere
                    </div>

                    <div
                        style={{
                            position: "relative",
                            width: "min(92vw, 380px)",
                            aspectRatio: "16 / 9",
                            borderRadius: 14,
                            overflow: "hidden",
                            background: "#e8e8e8",
                            boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)",
                        }}
                    >
                        <img
                            src={STADTKARTE_IMAGE_URL}
                            alt=""
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                        {DISTRICTS.map((district) => {
                            const controlled = isDistrictControlled(district.id)
                            return (
                                <div
                                    key={district.id}
                                    onClick={() =>
                                        setSelectedDistrict(district.id)
                                    }
                                    style={{
                                        position: "absolute",
                                        left: `${district.mapX}%`,
                                        top: `${district.mapY}%`,
                                        transform: "translate(-50%, -50%)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div
                                        style={{
                                            width:
                                                selectedDistrict === district.id
                                                    ? 22
                                                    : 16,
                                            height:
                                                selectedDistrict === district.id
                                                    ? 22
                                                    : 16,
                                            borderRadius: "50%",
                                            background: controlled
                                                ? district.color
                                                : `${district.color}aa`,
                                            border:
                                                selectedDistrict === district.id
                                                    ? "3px solid white"
                                                    : "2px solid rgba(255,255,255,0.8)",
                                            boxShadow: `0 0 10px 3px ${district.color}88`,
                                            transition: "all 0.2s ease",
                                        }}
                                    />
                                    <span
                                        style={{
                                            marginTop: 3,
                                            fontSize: 10,
                                            fontWeight: 700,
                                            color: "#111",
                                            background:
                                                "rgba(255,255,255,0.85)",
                                            padding: "1px 5px",
                                            borderRadius: 6,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {district.name}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

                    {selectedDistrict &&
                        (() => {
                            const district = DISTRICTS.find(
                                (d) => d.id === selectedDistrict
                            )!
                            const controlled = isDistrictControlled(district.id)
                            return (
                                <div
                                    style={{
                                        width: "min(84vw, 340px)",
                                        marginTop: 14,
                                        background: "rgba(255,255,255,0.06)",
                                        borderRadius: 12,
                                        padding: 14,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 8,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 14,
                                                height: 14,
                                                borderRadius: 7,
                                                background: district.color,
                                            }}
                                        />
                                        <div
                                            style={{
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: 15,
                                            }}
                                        >
                                            {district.name}
                                        </div>
                                    </div>
                                    <div
                                        style={{ color: "#bbb", fontSize: 13 }}
                                    >
                                        {controlled
                                            ? district.isHome
                                                ? "Dein Heimat-Kiez"
                                                : "Unter deiner Kontrolle"
                                            : `Kontrolliert von: ${district.gangName}`}
                                    </div>
                                    <div
                                        style={{ color: "#bbb", fontSize: 13 }}
                                    >
                                        {(districtDealers[district.id] ?? 0) > 0
                                            ? `💰 ${district.incomePerHour * (districtDealers[district.id] ?? 0)} €/h durch ${districtDealers[district.id]} Dealer`
                                            : "💤 Keine Dealer hier – kein Einkommen"}
                                    </div>
                                    {(districtEarnings[district.id] ?? 0) >
                                        0 && (
                                        <div
                                            style={{
                                                color: "#7fd97f",
                                                fontSize: 13,
                                            }}
                                        >
                                            💵 {districtEarnings[district.id]} €
                                            warten dort auf dich
                                        </div>
                                    )}
                                    {!controlled && (
                                        <>
                                            <div
                                                style={{
                                                    color: "#e0a020",
                                                    fontSize: 12,
                                                }}
                                            >
                                                Nötig:{" "}
                                                {DISTRICT_MIN_DEALERS_REQUIRED}+
                                                eigene Dealer ({hiredDealers}/
                                                {DISTRICT_MIN_DEALERS_REQUIRED})
                                                & eine Waffe (
                                                {ownedWeapon
                                                    ? "vorhanden"
                                                    : "fehlt"}
                                                ) – Waffe geht beim Angriff
                                                kaputt.
                                            </div>
                                            <button
                                                onClick={() =>
                                                    attackDistrict(district.id)
                                                }
                                                disabled={
                                                    hiredDealers <
                                                        DISTRICT_MIN_DEALERS_REQUIRED ||
                                                    !ownedWeapon
                                                }
                                                style={{
                                                    marginTop: 6,
                                                    padding: 14,
                                                    borderRadius: 10,
                                                    border: "none",
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    background:
                                                        hiredDealers <
                                                            DISTRICT_MIN_DEALERS_REQUIRED ||
                                                        !ownedWeapon
                                                            ? "#3a3a3a"
                                                            : "#8a2020",
                                                    color:
                                                        hiredDealers <
                                                            DISTRICT_MIN_DEALERS_REQUIRED ||
                                                        !ownedWeapon
                                                            ? "#888"
                                                            : "white",
                                                    cursor:
                                                        hiredDealers <
                                                            DISTRICT_MIN_DEALERS_REQUIRED ||
                                                        !ownedWeapon
                                                            ? "default"
                                                            : "pointer",
                                                }}
                                            >
                                                ⚔️ Angreifen
                                            </button>
                                        </>
                                    )}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 6,
                                            marginTop: 10,
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "#888",
                                                fontSize: 12,
                                            }}
                                        >
                                            Orte hier betreten:
                                        </div>
                                        {DISTRICT_SPOTS.filter(
                                            (s) => s.districtId === district.id
                                        ).map((spot) => {
                                            const banned =
                                                day <
                                                (districtBanUntilDay[
                                                    district.id
                                                ] ?? 0)
                                            return (
                                                <button
                                                    key={spot.id}
                                                    onClick={() => {
                                                        enterDistrictSpot(
                                                            spot.id
                                                        )
                                                        closeTerritoryMap()
                                                    }}
                                                    disabled={banned}
                                                    style={{
                                                        padding: 12,
                                                        borderRadius: 10,
                                                        border: "none",
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        background: banned
                                                            ? "#2a2a2a"
                                                            : "#333333",
                                                        color: banned
                                                            ? "#777"
                                                            : "white",
                                                        cursor: banned
                                                            ? "default"
                                                            : "pointer",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {banned ? "🚫 " : "🚶 "}
                                                    {spot.name}
                                                    {banned
                                                        ? " (verjagt, ab morgen wieder)"
                                                        : ""}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })()}

                    <div
                        style={{
                            width: "min(84vw, 340px)",
                            marginTop: 14,
                            padding: 10,
                            borderRadius: 10,
                            background: "rgba(255,255,255,0.06)",
                            color: "#bbb",
                            fontSize: 12,
                            textAlign: "center",
                        }}
                    >
                        💡 Dein Geld liegt bei deinen Dealern – fahr hin und hol
                        es persönlich ab.
                    </div>
                    <button
                        onClick={closeTerritoryMap}
                        style={{
                            width: "min(84vw, 340px)",
                            marginTop: 10,
                            padding: 14,
                            borderRadius: 12,
                            border: "none",
                            fontSize: 14,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Schließen
                    </button>
                </div>
            )}

            {territoryFightActive &&
                (() => {
                    const district = DISTRICTS.find(
                        (d) => d.id === selectedDistrict
                    )
                    return (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 7,
                                background:
                                    "radial-gradient(circle at 50% 20%, rgba(180,30,30,0.25) 0%, transparent 55%), linear-gradient(180deg, #241414 0%, #140a0a 60%, #0a0505 100%)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 20,
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 15,
                                    textAlign: "center",
                                    marginBottom: 10,
                                    textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                                }}
                            >
                                ⚔️ Kampf um {district?.name} gegen die{" "}
                                {district?.gangName} ({territoryFightTimeLeft}s)
                            </div>
                            <div
                                style={{
                                    position: "relative",
                                    width: "min(84vw, 340px)",
                                    aspectRatio: "1 / 1",
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    background:
                                        "repeating-linear-gradient(90deg, #2a2222 0px, #2a2222 18px, #241d1d 18px, #241d1d 36px)",
                                    boxShadow: "inset 0 0 60px rgba(0,0,0,0.6)",
                                }}
                            >
                                {/* Kämpfer-Icons, animiert */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "14%",
                                        bottom: "10%",
                                        fontSize: 40,
                                        animation:
                                            "fightBounceL 0.5s ease-in-out infinite alternate",
                                    }}
                                >
                                    🥷
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        right: "14%",
                                        bottom: "10%",
                                        fontSize: 40,
                                        animation:
                                            "fightBounceR 0.5s ease-in-out infinite alternate",
                                    }}
                                >
                                    🥊
                                </div>
                                <style>{`
                                    @keyframes fightBounceL {
                                        from { transform: translateY(0) rotate(-4deg); }
                                        to { transform: translateY(-6px) rotate(4deg); }
                                    }
                                    @keyframes fightBounceR {
                                        from { transform: translateY(0) rotate(4deg); }
                                        to { transform: translateY(-6px) rotate(-4deg); }
                                    }
                                `}</style>

                                {fightTargetVisible && (
                                    <button
                                        onClick={tapTerritoryFight}
                                        style={{
                                            position: "absolute",
                                            left: `${fightTargetPos.x}%`,
                                            top: `${fightTargetPos.y}%`,
                                            transform: "translate(-50%, -50%)",
                                            width: 56,
                                            height: 56,
                                            borderRadius: 28,
                                            border: "2px solid rgba(255,255,255,0.7)",
                                            fontSize: 26,
                                            background: "#c9432c",
                                            color: "white",
                                            cursor: "pointer",
                                            boxShadow:
                                                "0 0 16px rgba(255,80,40,0.7)",
                                        }}
                                    >
                                        👊
                                    </button>
                                )}
                            </div>
                            <div
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    marginTop: 14,
                                }}
                            >
                                Treffer: {territoryFightTapsDone}/
                                {territoryFightTapsNeeded}
                            </div>
                        </div>
                    )
                })()}

            {(dealerRobberyActive || revengeDefenseActive) &&
                (() => {
                    const isRobbery = dealerRobberyActive
                    const gang = DISTRICTS.find(
                        (d) =>
                            d.id ===
                            (isRobbery
                                ? dealerRobberyDistrict
                                : revengeDefenseGang)
                    )
                    const timeLeft = isRobbery
                        ? dealerRobberyTimeLeft
                        : revengeDefenseTimeLeft
                    const tapsDone = isRobbery
                        ? dealerRobberyTapsDone
                        : revengeDefenseTapsDone
                    const tapsNeeded = isRobbery
                        ? DEALER_ROBBERY_TAPS_NEEDED
                        : REVENGE_DEFENSE_TAPS_NEEDED
                    return (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 7,
                                background: isRobbery
                                    ? "radial-gradient(circle at 50% 20%, rgba(200,120,20,0.25) 0%, transparent 55%), linear-gradient(180deg, #241a10 0%, #140d06 60%, #0a0603 100%)"
                                    : "radial-gradient(circle at 50% 20%, rgba(30,120,60,0.25) 0%, transparent 55%), linear-gradient(180deg, #142418 0%, #0a1a0e 60%, #050a06 100%)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 20,
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 15,
                                    textAlign: "center",
                                    marginBottom: 10,
                                    textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                                }}
                            >
                                {isRobbery
                                    ? `🔪 Zieh die Dealer der ${gang?.gangName ?? "Gang"} ab! (${timeLeft}s)`
                                    : `🛡 Die ${gang?.gangName ?? "Gang"} überfallen dich! (${timeLeft}s)`}
                            </div>
                            <div
                                style={{
                                    position: "relative",
                                    width: "min(84vw, 340px)",
                                    aspectRatio: "1 / 1",
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    background: isRobbery
                                        ? "repeating-linear-gradient(90deg, #2a2018 0px, #2a2018 18px, #241b14 18px, #241b14 36px)"
                                        : "repeating-linear-gradient(90deg, #1f2a20 0px, #1f2a20 18px, #1a241b 18px, #1a241b 36px)",
                                    boxShadow: "inset 0 0 60px rgba(0,0,0,0.6)",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "14%",
                                        bottom: "10%",
                                        fontSize: 40,
                                        animation:
                                            "fightBounceL 0.5s ease-in-out infinite alternate",
                                    }}
                                >
                                    {isRobbery ? "🔪" : "🛡"}
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        right: "14%",
                                        bottom: "10%",
                                        fontSize: 40,
                                        animation:
                                            "fightBounceR 0.5s ease-in-out infinite alternate",
                                    }}
                                >
                                    {isRobbery ? "💰" : "🔪"}
                                </div>
                                {fightTargetVisible && (
                                    <button
                                        onClick={
                                            isRobbery
                                                ? tapDealerRobbery
                                                : tapRevengeDefense
                                        }
                                        style={{
                                            position: "absolute",
                                            left: `${fightTargetPos.x}%`,
                                            top: `${fightTargetPos.y}%`,
                                            transform: "translate(-50%, -50%)",
                                            width: 56,
                                            height: 56,
                                            borderRadius: 28,
                                            border: "2px solid rgba(255,255,255,0.7)",
                                            fontSize: 26,
                                            background: isRobbery
                                                ? "#c98a2c"
                                                : "#2c8a4a",
                                            color: "white",
                                            cursor: "pointer",
                                            boxShadow: isRobbery
                                                ? "0 0 16px rgba(255,180,60,0.7)"
                                                : "0 0 16px rgba(60,220,120,0.7)",
                                        }}
                                    >
                                        {isRobbery ? "💰" : "🛡"}
                                    </button>
                                )}
                            </div>
                            <div
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    marginTop: 14,
                                }}
                            >
                                {tapsDone}/{tapsNeeded}
                            </div>
                        </div>
                    )
                })()}

            {raidDefenseActive &&
                (() => {
                    const district = DISTRICTS.find(
                        (d) => d.id === raidDefenseDistrict
                    )
                    return (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 7,
                                background:
                                    "radial-gradient(circle at 50% 20%, rgba(30,120,60,0.25) 0%, transparent 55%), linear-gradient(180deg, #142418 0%, #0a1a0e 60%, #050a06 100%)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 20,
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 15,
                                    textAlign: "center",
                                    marginBottom: 10,
                                    textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                                }}
                            >
                                🛡 Verteidige {district?.name} gegen die{" "}
                                {district?.gangName}! ({raidDefenseTimeLeft}s)
                            </div>
                            <div
                                style={{
                                    position: "relative",
                                    width: "min(84vw, 340px)",
                                    aspectRatio: "1 / 1",
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    background:
                                        "repeating-linear-gradient(90deg, #1f2a20 0px, #1f2a20 18px, #1a241b 18px, #1a241b 36px)",
                                    boxShadow: "inset 0 0 60px rgba(0,0,0,0.6)",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "14%",
                                        bottom: "10%",
                                        fontSize: 40,
                                        animation:
                                            "fightBounceL 0.5s ease-in-out infinite alternate",
                                    }}
                                >
                                    🛡
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        right: "14%",
                                        bottom: "10%",
                                        fontSize: 40,
                                        animation:
                                            "fightBounceR 0.5s ease-in-out infinite alternate",
                                    }}
                                >
                                    🔪
                                </div>
                                {fightTargetVisible && (
                                    <button
                                        onClick={tapRaidDefense}
                                        style={{
                                            position: "absolute",
                                            left: `${fightTargetPos.x}%`,
                                            top: `${fightTargetPos.y}%`,
                                            transform: "translate(-50%, -50%)",
                                            width: 56,
                                            height: 56,
                                            borderRadius: 28,
                                            border: "2px solid rgba(255,255,255,0.7)",
                                            fontSize: 26,
                                            background: "#2c8a4a",
                                            color: "white",
                                            cursor: "pointer",
                                            boxShadow:
                                                "0 0 16px rgba(60,220,120,0.7)",
                                        }}
                                    >
                                        🛡
                                    </button>
                                )}
                            </div>
                            <div
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    marginTop: 14,
                                }}
                            >
                                Abgewehrt: {raidDefenseTapsDone}/
                                {RAID_DEFENSE_TAPS_NEEDED}
                            </div>
                        </div>
                    )
                })()}

            {/* Aktions-Menü unten */}
            <div
                style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: 10,
                }}
            >
                <button
                    onClick={() => {
                        setMenuOpen((open) => !open)
                        setOpenMenuCategory(null)
                    }}
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                        border: "none",
                        fontSize: 24,
                        background: "rgba(0,0,0,0.75)",
                        color: "white",
                        cursor: "pointer",
                        flexShrink: 0,
                    }}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
                <button
                    onClick={openPhone}
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                        border: "none",
                        fontSize: 24,
                        background: "rgba(0,0,0,0.75)",
                        color: "white",
                        cursor: "pointer",
                        flexShrink: 0,
                    }}
                >
                    📱
                </button>
            </div>

            {menuOpen && (
                <div
                    onClick={() => {
                        setMenuOpen(false)
                        setOpenMenuCategory(null)
                    }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        background: "rgba(0,0,0,0.55)",
                        display: "flex",
                        alignItems: "flex-end",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxHeight: "70%",
                            overflowY: "auto",
                            background: "#1f1f1f",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 16,
                            paddingBottom: 90,
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            boxSizing: "border-box",
                        }}
                    >
                        {(() => {
                            const SUBCATEGORY_LOCATIONS = [
                                "kiosk",
                                "supermarkt",
                                "miami_party",
                                "bus",
                                "auto",
                                "street",
                                "miami_strand",
                                "miami_strasse",
                            ]
                            const isShopNav =
                                shopSubCategory !== null ||
                                currentMallShop !== undefined ||
                                MALL_HUB_LOCATIONS.includes(location) ||
                                SUBCATEGORY_LOCATIONS.includes(location) ||
                                currentDistrictSpot !== undefined

                            const grouped: Record<string, typeof buttons> = {}
                            for (const btn of buttons) {
                                const cat = categorizeButtonText(
                                    btn.text,
                                    btn.action
                                )
                                if (!grouped[cat]) grouped[cat] = []
                                grouped[cat].push(btn)
                            }
                            const availableCats = MENU_CATEGORY_ORDER.filter(
                                (cat) => grouped[cat] && grouped[cat].length > 0
                            )

                            if (openMenuCategory === null) {
                                return availableCats.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setOpenMenuCategory(cat)}
                                        style={{
                                            width: "100%",
                                            padding: 16,
                                            borderRadius: 12,
                                            border: "none",
                                            fontSize: 16,
                                            fontWeight: 700,
                                            background: "#333333",
                                            color: "white",
                                            cursor: "pointer",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <span>
                                            {MENU_CATEGORY_INFO[cat].emoji}{" "}
                                            {MENU_CATEGORY_INFO[cat].label}
                                        </span>
                                        <span
                                            style={{
                                                color: "#999",
                                                fontWeight: 400,
                                            }}
                                        >
                                            ›
                                        </span>
                                    </button>
                                ))
                            }

                            // Innerhalb der Kategorie sinnvoll sortieren:
                            // Zurück-Buttons zuletzt, deaktivierte ans Ende,
                            // Bewegen-Buttons nach Stadtteil gruppiert
                            const rank = (t: string) => {
                                if (t.startsWith("⬅")) return 90
                                if (t.startsWith("🚌") || t.startsWith("🚗"))
                                    return 80
                                return 10
                            }
                            // Reihenfolge der Untergruppen je Kategorie
                            const SUBGROUP_ORDER: Record<string, string[]> = {
                                bewegen: [
                                    "Orte",
                                    "In der Nähe",
                                    "Reisen",
                                    "Zurück",
                                ],
                                bedurfnisse: [
                                    "Essen, Trinken & Genuss",
                                    "Körper & Pflege",
                                    "Leute",
                                    "Freizeit",
                                ],
                                handeln: [
                                    "Einkaufen",
                                    "Bank & Safe",
                                    "Arbeit",
                                    "Wohnen",
                                ],
                                kriminelles: [
                                    "Geschäft",
                                    "Ausrüstung",
                                    "Aktionen",
                                ],
                                sonstiges: ["Sonstiges"],
                            }
                            const subOrder =
                                SUBGROUP_ORDER[openMenuCategory] ?? []
                            const subIndex = (t: string) => {
                                const g = buttonSubGroup(t, openMenuCategory)
                                const i = subOrder.indexOf(g)
                                return i === -1 ? 99 : i
                            }
                            const activeButtons = [
                                ...(grouped[openMenuCategory] ?? []),
                            ].sort((a, b) => {
                                const sa = subIndex(a.text)
                                const sb = subIndex(b.text)
                                if (sa !== sb) return sa - sb
                                const da = a.disabled ? 1 : 0
                                const db = b.disabled ? 1 : 0
                                if (da !== db) return da - db
                                const ra = rank(a.text)
                                const rb = rank(b.text)
                                if (ra !== rb) return ra - rb
                                return a.text.localeCompare(b.text, "de")
                            })
                            return (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenMenuCategory(null)
                                        }
                                        style={{
                                            width: "100%",
                                            padding: 12,
                                            borderRadius: 10,
                                            border: "none",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            background: "#2a2a2a",
                                            color: "#ccc",
                                            cursor: "pointer",
                                            marginBottom: 4,
                                        }}
                                    >
                                        ⬅{" "}
                                        {
                                            MENU_CATEGORY_INFO[openMenuCategory]
                                                .emoji
                                        }{" "}
                                        {
                                            MENU_CATEGORY_INFO[openMenuCategory]
                                                .label
                                        }
                                    </button>
                                    {activeButtons.map((btn, i) => {
                                        const myGroup = buttonSubGroup(
                                            btn.text,
                                            openMenuCategory
                                        )
                                        const prevGroup =
                                            i > 0
                                                ? buttonSubGroup(
                                                      activeButtons[i - 1].text,
                                                      openMenuCategory
                                                  )
                                                : null
                                        const showHeader =
                                            activeButtons.length > 4 &&
                                            myGroup !== prevGroup
                                        return (
                                            <React.Fragment key={i}>
                                                {showHeader && (
                                                    <div
                                                        style={{
                                                            color: "#888",
                                                            fontSize: 11,
                                                            fontWeight: 700,
                                                            letterSpacing: 0.5,
                                                            textTransform:
                                                                "uppercase",
                                                            marginTop:
                                                                i === 0 ? 2 : 8,
                                                            marginBottom: 2,
                                                        }}
                                                    >
                                                        {myGroup}
                                                    </div>
                                                )}
                                                <button
                                                    onClick={() => {
                                                        btn.action()
                                                        if (btn.imageKey)
                                                            showActionImage(
                                                                btn.imageKey
                                                            )
                                                        if (!isShopNav) {
                                                            setMenuOpen(false)
                                                            setOpenMenuCategory(
                                                                null
                                                            )
                                                        }
                                                    }}
                                                    disabled={btn.disabled}
                                                    style={{
                                                        width: "100%",
                                                        padding: 16,
                                                        borderRadius: 12,
                                                        border: "none",
                                                        fontSize: 15,
                                                        fontWeight: 700,
                                                        background: btn.disabled
                                                            ? "#2a2a2a"
                                                            : "#333333",
                                                        color: btn.disabled
                                                            ? "#777"
                                                            : "white",
                                                        cursor: btn.disabled
                                                            ? "default"
                                                            : "pointer",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {btn.text}
                                                </button>
                                            </React.Fragment>
                                        )
                                    })}
                                </>
                            )
                        })()}
                    </div>
                </div>
            )}

            {confirmationIcon && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                    }}
                >
                    <div style={{ fontSize: 80 }}>
                        {confirmationIcon === "success" ? "✅" : "❌"}
                    </div>
                </div>
            )}

            {sellGameActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        👋 Übergib die Ware! ({sellTimeLeft}s)
                    </div>
                    <button
                        onClick={tapSell}
                        style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            border: "none",
                            fontSize: 40,
                            background: "#2c6b2c",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        {sellTapsDone}/{SELL_GAME_TAPS_NEEDED}
                    </button>
                </div>
            )}

            {ueberfallGameActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(120,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: 700,
                            textAlign: "center",
                        }}
                    >
                        🥊 Überfall! Wehr dich! ({ueberfallTimeLeft}s)
                    </div>
                    <button
                        onClick={reactToUeberfall}
                        style={{
                            width: 180,
                            height: 60,
                            borderRadius: 30,
                            border: "none",
                            fontSize: 18,
                            fontWeight: 700,
                            background: "#c9432c",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        🥊 Wehren!
                    </button>
                </div>
            )}

            {robberyGameActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.7)",
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            right: 16,
                            color: "white",
                            fontWeight: 700,
                            fontSize: 16,
                            textAlign: "center",
                        }}
                    >
                        🔫 Kassiere ab! ({robberyTimeLeft}s) – {robberyCaught}x
                        geschafft
                    </div>
                    {robberyTargetVisible && (
                        <button
                            onClick={catchRobberyTarget}
                            style={{
                                position: "absolute",
                                left: `${robberyTargetPos.x}%`,
                                top: `${robberyTargetPos.y}%`,
                                transform: "translate(-50%, -50%)",
                                width: 64,
                                height: 64,
                                borderRadius: 32,
                                border: "none",
                                fontSize: 28,
                                background: "#c9432c",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            💰
                        </button>
                    )}
                    <button
                        onClick={leaveRobberyEarly}
                        style={{
                            position: "absolute",
                            bottom: 24,
                            left: "50%",
                            transform: "translateX(-50%)",
                            padding: "14px 24px",
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        🏃 Jetzt raus
                    </button>
                </div>
            )}

            {breakinEntryActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        🔓 Schloss knacken! ({breakinEntryTimeLeft}s)
                    </div>
                    <button
                        onClick={tapBreakinEntry}
                        style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            border: "none",
                            fontSize: 40,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        {breakinEntryTapsDone}/{BREAKIN_ENTRY_TAPS_NEEDED}
                    </button>
                </div>
            )}

            {breakinGameActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            right: 16,
                            color: "white",
                            fontWeight: 700,
                            fontSize: 16,
                            textAlign: "center",
                            textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                        }}
                    >
                        📦 Schnapp dir die Ware! ({breakinTimeLeft}s) –{" "}
                        {breakinCaught}x
                    </div>
                    {breakinTargetVisible && (
                        <button
                            onClick={catchBreakinTarget}
                            style={{
                                position: "absolute",
                                left: `${breakinTargetPos.x}%`,
                                top: `${breakinTargetPos.y}%`,
                                transform: "translate(-50%, -50%)",
                                width: 64,
                                height: 64,
                                borderRadius: 32,
                                border: "none",
                                fontSize: 28,
                                background: "#2c6b2c",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            📦
                        </button>
                    )}
                    <button
                        onClick={leaveBreakInEarly}
                        style={{
                            position: "absolute",
                            bottom: 24,
                            left: "50%",
                            transform: "translateX(-50%)",
                            padding: "14px 24px",
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        🏃 Jetzt raus
                    </button>
                </div>
            )}

            {intimacyActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 8,
                        background:
                            "radial-gradient(circle at 50% 40%, rgba(200,40,110,0.35) 0%, transparent 65%), linear-gradient(180deg, #2a0a1a 0%, #12040a 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        padding: 24,
                        boxSizing: "border-box",
                        textAlign: "center",
                    }}
                >
                    <style>{`
                        @keyframes heartBeat {
                            0%, 100% { transform: scale(1); }
                            50% { transform: scale(1.12); }
                        }
                    `}</style>
                    <div
                        style={{
                            color: "white",
                            fontSize: 17,
                            fontWeight: 700,
                        }}
                    >
                        💞 Zeit mit {intimacyPartner} ({intimacyTimeLeft}s)
                    </div>
                    <div
                        style={{
                            color: "#e8a0c0",
                            fontSize: 12,
                            maxWidth: 300,
                        }}
                    >
                        Bleib im Rhythmus – je besser du bist, desto stärker
                        wird eure Beziehung.
                    </div>
                    <button
                        onClick={tapIntimacy}
                        style={{
                            width: 170,
                            height: 170,
                            borderRadius: 85,
                            border: "none",
                            fontSize: 34,
                            background: "#c02a63",
                            color: "white",
                            cursor: "pointer",
                            boxShadow: "0 0 30px rgba(220,60,140,0.7)",
                            animation: "heartBeat 0.7s ease-in-out infinite",
                        }}
                    >
                        ❤️
                        <div style={{ fontSize: 18, marginTop: 4 }}>
                            {intimacyTapsDone}/{INTIMACY_TAPS_NEEDED}
                        </div>
                    </button>
                    <div
                        style={{
                            width: "min(80vw, 300px)",
                            height: 8,
                            borderRadius: 4,
                            background: "rgba(255,255,255,0.15)",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: `${Math.min((intimacyTapsDone / INTIMACY_TAPS_NEEDED) * 100, 100)}%`,
                                height: "100%",
                                background: "#ff5fa2",
                                transition: "width 0.15s linear",
                            }}
                        />
                    </div>
                </div>
            )}

            {actionGame && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 8,
                        background:
                            "radial-gradient(circle at 50% 35%, rgba(60,120,200,0.25) 0%, transparent 60%), linear-gradient(180deg, #16202e 0%, #0a0f18 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        padding: 24,
                        boxSizing: "border-box",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 17,
                            fontWeight: 700,
                        }}
                    >
                        {ACTION_GAMES[actionGame].emoji}{" "}
                        {ACTION_GAMES[actionGame].label} ({actionTimeLeft}s)
                    </div>
                    <div style={{ color: "#9bd", fontSize: 12 }}>
                        {ACTION_GAMES[actionGame].hint}
                        {companions.length > 0
                            ? ` · mit ${companions.map(companionName).join(" & ")}`
                            : ""}
                    </div>
                    <button
                        onClick={tapAction}
                        style={{
                            width: 170,
                            height: 170,
                            borderRadius: 85,
                            border: "none",
                            fontSize: 44,
                            background: "#2c5a8a",
                            color: "white",
                            cursor: "pointer",
                            boxShadow: "0 0 26px rgba(60,140,255,0.5)",
                        }}
                    >
                        {ACTION_GAMES[actionGame].emoji}
                    </button>
                    <div
                        style={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: 15,
                        }}
                    >
                        {actionTaps}/{ACTION_GAMES[actionGame].taps}
                    </div>
                    <div
                        style={{
                            width: "min(80vw, 300px)",
                            height: 8,
                            borderRadius: 4,
                            background: "rgba(255,255,255,0.15)",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: `${Math.min(
                                    (actionTaps /
                                        ACTION_GAMES[actionGame].taps) *
                                        100,
                                    100
                                )}%`,
                                height: "100%",
                                background: "#5aa0ff",
                                transition: "width 0.15s linear",
                            }}
                        />
                    </div>
                </div>
            )}

            {talkOpen && companions.length > 0 && (
                <div
                    onClick={() => setTalkOpen(false)}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 8,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 340,
                            maxHeight: "75vh",
                            background: "#1f1f1f",
                            borderRadius: 16,
                            padding: 18,
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 16,
                            }}
                        >
                            💬 {companions.map(companionName).join(" & ")}
                        </div>
                        <div
                            style={{
                                background: "#141414",
                                borderRadius: 12,
                                padding: 10,
                                display: "flex",
                                flexDirection: "column",
                                gap: 6,
                                maxHeight: 280,
                                overflowY: "auto" as const,
                            }}
                        >
                            {talkLog.length === 0 && (
                                <div style={{ color: "#666", fontSize: 12 }}>
                                    Sag was – z.B. ein Kompliment, eine Frage,
                                    oder „lass uns gehen“.
                                </div>
                            )}
                            {talkLog.map((msg, i) => (
                                <div
                                    key={i}
                                    style={{
                                        alignSelf:
                                            msg.from === "me"
                                                ? "flex-end"
                                                : "flex-start",
                                        background:
                                            msg.from === "me"
                                                ? "#2c6b5c"
                                                : "#333333",
                                        color: "white",
                                        padding: "8px 12px",
                                        borderRadius: 14,
                                        fontSize: 13,
                                        maxWidth: "80%",
                                        textAlign: "left",
                                    }}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: 6 }}>
                            <input
                                value={talkInput}
                                onChange={(e) => setTalkInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") sayToCompanion()
                                }}
                                placeholder="Was sagst du?"
                                style={{
                                    flex: 1,
                                    padding: 12,
                                    borderRadius: 10,
                                    border: "1px solid #444",
                                    background: "#1a1a1a",
                                    color: "white",
                                    fontSize: 16,
                                }}
                            />
                            <button
                                onClick={sayToCompanion}
                                style={{
                                    padding: "12px 16px",
                                    borderRadius: 10,
                                    border: "none",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    background: "#2c9c5c",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >
                                ➤
                            </button>
                        </div>
                        <button
                            onClick={() => setTalkOpen(false)}
                            style={{
                                padding: 12,
                                borderRadius: 10,
                                border: "none",
                                fontSize: 14,
                                fontWeight: 700,
                                background: "#2a2a2a",
                                color: "#ccc",
                                cursor: "pointer",
                            }}
                        >
                            Schließen
                        </button>
                    </div>
                </div>
            )}

            {flirtActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        background:
                            "radial-gradient(circle at 50% 25%, rgba(220,60,140,0.3) 0%, transparent 60%), linear-gradient(180deg, #2a1020 0%, #16060f 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 18,
                        padding: 24,
                        boxSizing: "border-box",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 17,
                            fontWeight: 700,
                        }}
                    >
                        💘 Mach {flirtTarget} an! ({flirtTimeLeft}s)
                    </div>
                    <div
                        style={{
                            color: "#e8a0c0",
                            fontSize: 12,
                            maxWidth: 300,
                        }}
                    >
                        Je öfter du tippst, desto charmanter wirkst du – Style
                        und Charisma helfen zusätzlich.
                    </div>
                    <button
                        onClick={tapFlirt}
                        style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            border: "none",
                            fontSize: 40,
                            background: "#a02c5f",
                            color: "white",
                            cursor: "pointer",
                            boxShadow: "0 0 24px rgba(220,60,140,0.6)",
                        }}
                    >
                        {flirtTapsDone}/{FLIRT_TAPS_NEEDED}
                    </button>
                </div>
            )}

            {policeChaseActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background:
                            "linear-gradient(180deg, #12172b 0%, #0a0e1c 55%, #05070f 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                        boxSizing: "border-box",
                        overflow: "hidden",
                    }}
                >
                    {/* Blaulicht, das wie eine Sirene kommt und geht */}
                    <style>{`
                        @keyframes sirenPulse {
                            0%   { opacity: 0.05; }
                            35%  { opacity: 0.45; }
                            50%  { opacity: 0.12; }
                            85%  { opacity: 0.40; }
                            100% { opacity: 0.05; }
                        }
                        @keyframes sirenSweep {
                            0%   { transform: translateX(-60%); }
                            100% { transform: translateX(160%); }
                        }
                        @keyframes copBlink {
                            0%, 100% { box-shadow: 0 0 14px 6px rgba(80,150,255,0.9); background: #4d8fff; }
                            50%      { box-shadow: 0 0 14px 6px rgba(255,60,60,0.9); background: #ff3c3c; }
                        }
                    `}</style>
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(circle at 50% 20%, rgba(60,120,255,0.55) 0%, transparent 60%)",
                            animation: "sirenPulse 1.6s ease-in-out infinite",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            width: "35%",
                            background:
                                "linear-gradient(90deg, transparent, rgba(90,160,255,0.35), transparent)",
                            animation: "sirenSweep 2.4s linear infinite",
                            pointerEvents: "none",
                        }}
                    />

                    <div
                        style={{
                            position: "relative",
                            color: "white",
                            fontWeight: 700,
                            fontSize: 15,
                            textAlign: "center",
                            marginBottom: 12,
                            textShadow: "0 1px 8px rgba(0,0,0,0.9)",
                        }}
                    >
                        🚨 Lauf weg! Versteck dich zwischen den Hochhäusern!
                    </div>

                    <div
                        style={{
                            position: "relative",
                            width: "min(86vw, 350px)",
                            aspectRatio: "1 / 1",
                            borderRadius: 12,
                            overflow: "hidden",
                            background: "#0b1020",
                            boxShadow: "inset 0 0 60px rgba(0,0,0,0.7)",
                        }}
                    >
                        {/* Straßenlinien zwischen benachbarten Wegfeldern */}
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {CHASE_MAZE.map((row, y) =>
                                row.split("").map((cell, x) => {
                                    if (cell !== ".") return null
                                    const step = 100 / CHASE_GRID_SIZE
                                    const cx = (x + 0.5) * step
                                    const cy = (y + 0.5) * step
                                    const segs: React.ReactNode[] = []
                                    if (chaseIsStreet(x + 1, y)) {
                                        segs.push(
                                            <line
                                                key={`h${x}-${y}`}
                                                x1={cx}
                                                y1={cy}
                                                x2={cx + step}
                                                y2={cy}
                                                stroke="rgba(150,190,255,0.5)"
                                                strokeWidth={2.5}
                                                strokeLinecap="round"
                                            />
                                        )
                                    }
                                    if (chaseIsStreet(x, y + 1)) {
                                        segs.push(
                                            <line
                                                key={`v${x}-${y}`}
                                                x1={cx}
                                                y1={cy}
                                                x2={cx}
                                                y2={cy + step}
                                                stroke="rgba(150,190,255,0.5)"
                                                strokeWidth={2.5}
                                                strokeLinecap="round"
                                            />
                                        )
                                    }
                                    return segs
                                })
                            )}
                        </svg>

                        {/* Hochhäuser dazwischen */}
                        {CHASE_MAZE.map((row, y) =>
                            row.split("").map((cell, x) => {
                                if (cell !== "#") return null
                                const step = 100 / CHASE_GRID_SIZE
                                const towers = ["🏢", "🏬", "🏗", "🏨"]
                                return (
                                    <div
                                        key={`b${x}-${y}`}
                                        style={{
                                            position: "absolute",
                                            left: `${(x + 0.5) * step}%`,
                                            top: `${(y + 0.5) * step}%`,
                                            transform: "translate(-50%, -50%)",
                                            fontSize: `min(7vw, 30px)`,
                                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
                                            opacity: 0.95,
                                        }}
                                    >
                                        {
                                            towers[
                                                (x * 3 + y * 5) % towers.length
                                            ]
                                        }
                                    </div>
                                )
                            })
                        )}

                        {/* Polizei mit Blaulicht-Blinken */}
                        <div
                            style={{
                                position: "absolute",
                                left: `${((chasePolicePos.x + 0.5) / CHASE_GRID_SIZE) * 100}%`,
                                top: `${((chasePolicePos.y + 0.5) / CHASE_GRID_SIZE) * 100}%`,
                                transform: "translate(-50%, -50%)",
                                width: 18,
                                height: 18,
                                borderRadius: 9,
                                animation: "copBlink 0.6s ease-in-out infinite",
                                transition: "left 0.9s ease, top 0.9s ease",
                            }}
                        />

                        {/* Spieler */}
                        <div
                            style={{
                                position: "absolute",
                                left: `${((chasePlayerPos.x + 0.5) / CHASE_GRID_SIZE) * 100}%`,
                                top: `${((chasePlayerPos.y + 0.5) / CHASE_GRID_SIZE) * 100}%`,
                                transform: "translate(-50%, -50%)",
                                width: 30,
                                height: 30,
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "2px solid rgba(255,255,255,0.9)",
                                boxShadow: "0 0 12px rgba(255,255,255,0.7)",
                                transition: "left 0.18s ease, top 0.18s ease",
                            }}
                        >
                            <img
                                src={`${CHARACTER_IMAGE_BASE}${
                                    OUTFITS.find((o) => o.id === equippedOutfit)
                                        ?.image ?? "outfit_budget.PNG"
                                }`}
                                alt=""
                                style={{
                                    width: "180%",
                                    height: "180%",
                                    objectFit: "cover",
                                    objectPosition: "50% 8%",
                                    marginLeft: "-40%",
                                }}
                            />
                        </div>
                    </div>

                    {/* Steuerkreuz */}
                    <div
                        style={{
                            position: "relative",
                            display: "grid",
                            gridTemplateColumns: "56px 56px 56px",
                            gridTemplateRows: "56px 56px 56px",
                            gap: 6,
                            marginTop: 16,
                        }}
                    >
                        <div />
                        <button
                            onClick={() => moveChasePlayer(0, -1)}
                            style={{
                                borderRadius: 12,
                                border: "1px solid rgba(120,170,255,0.35)",
                                fontSize: 20,
                                background: "rgba(40,80,160,0.25)",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            ⬆️
                        </button>
                        <div />
                        <button
                            onClick={() => moveChasePlayer(-1, 0)}
                            style={{
                                borderRadius: 12,
                                border: "1px solid rgba(120,170,255,0.35)",
                                fontSize: 20,
                                background: "rgba(40,80,160,0.25)",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            ⬅️
                        </button>
                        <div
                            style={{
                                borderRadius: 12,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 18,
                            }}
                        >
                            🏃
                        </div>
                        <button
                            onClick={() => moveChasePlayer(1, 0)}
                            style={{
                                borderRadius: 12,
                                border: "1px solid rgba(120,170,255,0.35)",
                                fontSize: 20,
                                background: "rgba(40,80,160,0.25)",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            ➡️
                        </button>
                        <div />
                        <button
                            onClick={() => moveChasePlayer(0, 1)}
                            style={{
                                borderRadius: 12,
                                border: "1px solid rgba(120,170,255,0.35)",
                                fontSize: 20,
                                background: "rgba(40,80,160,0.25)",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            ⬇️
                        </button>
                        <div />
                    </div>

                    {/* Zeitleiste */}
                    <div
                        style={{
                            position: "relative",
                            width: "min(86vw, 350px)",
                            height: 6,
                            borderRadius: 3,
                            background: "rgba(255,255,255,0.15)",
                            marginTop: 16,
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: `${(chaseTimeLeft / CHASE_DURATION_SECONDS) * 100}%`,
                                height: "100%",
                                background: "#5aa0ff",
                                transition: "width 1s linear",
                            }}
                        />
                    </div>
                </div>
            )}

            {dealerFightActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        🥊 Schnapp ihn dir! ({dealerFightTimeLeft}s)
                    </div>
                    <button
                        onClick={tapDealerFight}
                        style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            border: "none",
                            fontSize: 40,
                            background: "#c9432c",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        {dealerFightTapsDone}/{DEALER_FIGHT_TAPS_NEEDED}
                    </button>
                </div>
            )}

            {courtActive && !courtDefenseActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        padding: 24,
                        boxSizing: "border-box",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: 700,
                        }}
                    >
                        ⚖️ Du stehst vor Gericht
                    </div>
                    <div style={{ color: "#ccc", fontSize: 14 }}>
                        Richter-Laune:{" "}
                        {judgeMood === "gut"
                            ? "😊 gut"
                            : judgeMood === "neutral"
                              ? "😐 neutral"
                              : "😠 schlecht"}
                    </div>
                    <button
                        onClick={() => chooseCourtOption(true)}
                        disabled={money < LAWYER_PRICE}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 16,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background:
                                money < LAWYER_PRICE ? "#2a2a2a" : "#2c6b6b",
                            color: money < LAWYER_PRICE ? "#777" : "white",
                            cursor:
                                money < LAWYER_PRICE ? "default" : "pointer",
                        }}
                    >
                        👩‍⚖️ Anwalt engagieren ({LAWYER_PRICE} €)
                    </button>
                    <button
                        onClick={() => chooseCourtOption(false)}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 16,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        🗣 Selbst verteidigen
                    </button>
                </div>
            )}

            {courtDefenseActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        🗣 Überzeug den Richter! ({courtDefenseTimeLeft}s)
                    </div>
                    <button
                        onClick={tapCourtDefense}
                        style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            border: "none",
                            fontSize: 40,
                            background: "#2c6b6b",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        {courtDefenseTapsDone}/{COURT_DEFENSE_TAPS_NEEDED}
                    </button>
                </div>
            )}

            {collapseSceneActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 9,
                        background: "rgba(120,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        animation:
                            "pulseCollapse 0.6s ease-in-out infinite alternate",
                    }}
                >
                    <style>{`
                        @keyframes pulseCollapse {
                            from { background-color: rgba(120,0,0,0.4); }
                            to { background-color: rgba(180,0,0,0.7); }
                        }
                    `}</style>
                    <div
                        style={{
                            color: "white",
                            fontSize: 22,
                            fontWeight: 700,
                            textAlign: "center",
                        }}
                    >
                        😵 AUSSER GEFECHT
                    </div>
                </div>
            )}

            {escortSceneActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {inMiami ? <MiamiHotel /> : <Hochhaus />}
                </div>
            )}

            {dateVisitSceneActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {inMiami ? <MiamiHotel /> : <Hochhaus />}
                </div>
            )}

            {carTheftActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        🔧 Kurzschließen! ({carTheftTimeLeft}s)
                    </div>
                    <button
                        onClick={tapCarTheft}
                        style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            border: "none",
                            fontSize: 40,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        {carTheftTapsDone}/{CAR_THEFT_TAPS_NEEDED}
                    </button>
                </div>
            )}

            {jailFightActive && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        padding: 24,
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        👊 Kampf! ({jailFightTimeLeft}s)
                    </div>
                    <button
                        onClick={tapJailFight}
                        style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            border: "none",
                            fontSize: 40,
                            background: "#c9432c",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        {jailFightTapsDone}/{JAIL_FIGHT_TAPS_NEEDED}
                    </button>
                </div>
            )}

            {policeEncounter && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 6,
                        background: "rgba(0,0,40,0.85)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        padding: 24,
                        boxSizing: "border-box",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: 700,
                        }}
                    >
                        🚨 Polizeikontrolle!
                    </div>
                    <button
                        onClick={fleeAttempt}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 16,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        🏃 Fliehen
                    </button>
                    <button
                        onClick={surrender}
                        style={{
                            width: "100%",
                            maxWidth: 320,
                            padding: 16,
                            borderRadius: 14,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "#333333",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        🙋 Ergeben
                    </button>
                    {canCallDealerForHelp && (
                        <button
                            onClick={callDealerForHelp}
                            style={{
                                width: "100%",
                                maxWidth: 320,
                                padding: 16,
                                borderRadius: 14,
                                border: "none",
                                fontSize: 15,
                                fontWeight: 700,
                                background: "#2c6b2c",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            🆘 Dealer rufen
                        </button>
                    )}
                </div>
            )}

            {flightPhase && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // Schwarz bleibt durchgehend liegen und blendet erst
                        // ganz am Ende sanft weg – so blitzt nichts durch
                        background: "black",
                        opacity: flightPhase === "fadeout" ? 0 : 1,
                        transition: "opacity 1.6s ease",
                        pointerEvents: (flightPhase === "fadeout"
                            ? "none"
                            : "auto") as React.CSSProperties["pointerEvents"],
                    }}
                >
                    <img
                        src={MIAMI_WELCOME_IMAGE}
                        alt=""
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                            opacity: flightPhaseVisible ? 1 : 0,
                            transition: "opacity 1s ease",
                        }}
                    />
                </div>
            )}
        </div>
    )
}
