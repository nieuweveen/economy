const DATA = {
    economySettings: [
        { setting: "Startgeld", value: 55000, notes: "Geld dat spelers ontvangen bij eerste join" },
        { setting: "Revive Kosten", value: 2500, notes: "Ambulance revive" },
        { setting: "Verbanddoos", value: 1000, notes: "Kleine healing" },
        { setting: "Medikit", value: 2000, notes: "Grote healing" },
        { setting: "NPC Dokter Revive", value: 5000, notes: "Revive als er geen ambulance online is" },
        { setting: "Respawn Boete", value: 2500, notes: "Penalty bij doodgaan (respawn)" },
        { setting: "Wegenwacht Pas", value: 10000, notes: "Abonnement voor pechhulp" },
        { setting: "Voertuig Verzekering", value: 5000, notes: "Verzekering premie" },
        { setting: "Voertuig Keuring (APK)", value: 1000, notes: "Verplichte keuring" },
        { setting: "Volle Tank Benzine (~65L)", value: 975, notes: "Prijs op € 15/L" }
    ],
    jobPayouts: [
        { job: "Werkloos", rank: "nvt", multiplier: 0.01 },
        { job: "Tuinier", rank: "nvt", multiplier: 0.05 },
        { job: "Houthakker", rank: "nvt", multiplier: 0.05 },
        { job: "Trucker", rank: "nvt", multiplier: 0.06 },
        { job: "Mijnwerker", rank: "nvt", multiplier: 0.04 },
        { job: "Pizzabezorger", rank: "nvt", multiplier: 0.03 },
        { job: "Stadsbeheer", rank: "nvt", multiplier: 0.04 },
        { job: "Taxi Chauffeur", rank: "nvt", multiplier: 0.07 },
        { job: "Airport Professional", rank: "nvt", multiplier: 0.09 }
    ],
    weapons: [
        { id: "pistol", name: "Pistol", cat: "Pistol", access: "Public", price: 390000 },
        { id: "pistol50", name: "Pistol .50", cat: "Pistol", access: "Public", price: 450000 },
        { id: "snspistol", name: "SNS Pistol", cat: "Pistol", access: "Public", price: 320000 },
        { id: "vintagepistol", name: "Vintage Pistol", cat: "Pistol", access: "Public", price: 400000 },
        { id: "smg_mk2", name: "SMG MK2", cat: "SMG", access: "Public", price: 750000 },
        { id: "gusenberg", name: "Gusenberg", cat: "SMG", access: "Public", price: 780000 },
        { id: "minismg", name: "Skorpion", cat: "SMG", access: "Public", price: 680000 },
        { id: "microsmg", name: "Micro Uzi", cat: "SMG", access: "Public", price: 620000 },
        { id: "machinepistol", name: "Machine Pistol", cat: "SMG", access: "Public", price: 720000 },
        { id: "assaultrifle", name: "Assault Rifle", cat: "Rifle", access: "Public", price: 880000 },
        { id: "assaultrifle_mk2", name: "Assault Rifle MK2", cat: "Rifle", access: "Public", price: 900000 },
        { id: "compactrifle", name: "Compact Rifle", cat: "Rifle", access: "Public", price: 860000 },
        { id: "dbshotgun", name: "Double Barrel Shotgun", cat: "Shotgun", access: "Public", price: 820000 },
        { id: "sawnoffshotgun", name: "Sawn-off Shotgun", cat: "Shotgun", access: "Public", price: 650000 },
        { id: "doubleaction", name: "Double Barrel Revolver", cat: "Revolver", access: "Public", price: 850000 },
        { id: "dagger", name: "Dagger", cat: "Melee", access: "Public", price: 120000 },
        { id: "switchblade", name: "Switchblade", cat: "Melee", access: "Public", price: 150000 },
        // Gang
        { id: "pistol", name: "Pistol", cat: "Pistol", access: "Gang", price: 350000 },
        { id: "pistol50", name: "Pistol .50", cat: "Pistol", access: "Gang", price: 380000 },
        { id: "snspistol", name: "SNS Pistol", cat: "Pistol", access: "Gang", price: 280000 },
        { id: "vintagepistol", name: "Vintage Pistol", cat: "Pistol", access: "Gang", price: 350000 },
        { id: "smg_mk2", name: "SMG MK2", cat: "SMG", access: "Gang", price: 680000 },
        { id: "gusenberg", name: "Gusenberg", cat: "SMG", access: "Gang", price: 700000 },
        { id: "minismg", name: "Skorpion", cat: "SMG", access: "Gang", price: 600000 },
        { id: "microsmg", name: "Micro Uzi", cat: "SMG", access: "Gang", price: 550000 },
        { id: "machinepistol", name: "Machine Pistol", cat: "SMG", access: "Gang", price: 650000 },
        { id: "assaultrifle", name: "Assault Rifle", cat: "Rifle", access: "Gang", price: 800000 },
        { id: "assaultrifle_mk2", name: "Assault Rifle MK2", cat: "Rifle", access: "Gang", price: 850000 },
        { id: "compactrifle", name: "Compact Rifle", cat: "Rifle", access: "Gang", price: 780000 },
        { id: "dbshotgun", name: "Double Barrel Shotgun", cat: "Shotgun", access: "Gang", price: 720000 },
        { id: "sawnoffshotgun", name: "Sawn-off Shotgun", cat: "Shotgun", access: "Gang", price: 550000 },
        { id: "doubleaction", name: "Double Barrel Revolver", cat: "Revolver", access: "Gang", price: 780000 },
        { id: "dagger", name: "Dagger", cat: "Melee", access: "Gang", price: 90000 },
        { id: "switchblade", name: "Switchblade", cat: "Melee", access: "Gang", price: 120000 }
    ],
    ammo: [
        { type: "sniper_ammo", access: "Public", price: 150000 },
        { type: "shotgun_ammo", access: "Public", price: 1000 },
        { type: "smg_ammo", access: "Public", price: 250 },
        { type: "rifle_ammo", access: "Public", price: 650 },
        { type: "pistol_ammo", access: "Public", price: 500 },
        { type: "mg_ammo", access: "Public", price: 600 },
        { type: "shotgun_ammo", access: "Gang", price: 800 },
        { type: "smg_ammo", access: "Gang", price: 125 },
        { type: "rifle_ammo", access: "Gang", price: 350 },
        { type: "pistol_ammo", access: "Gang", price: 300 },
        { type: "mg_ammo", access: "Gang", price: 300 }
    ],
    services: [
        { name: "Revive", price: 2500 },
        { name: "Bandage", price: 1000 },
        { name: "Medikit", price: 2000 },
        { name: "NPC Doctor Revive", price: 5000 },
        { name: "Respawn Fine", price: 2500 },
        { name: "Roadside Assistance Pass", price: 10000 },
        { name: "Insurance", price: 5000 },
        { name: "Vehicle Inspection", price: 1000 },
        { name: "Fuel (Volle tank, 65L)", price: 975 },
        { name: "Jetski Huur", price: 2500 },
        { name: "Motorboot Huur", price: 5000 },
        { name: "Zeilboot Huur", price: 15000 },
        { name: "Taxi Rit (Minimaal)", price: 250 },
        { name: "Taxi Rit (Landelijk, ±5KM)", price: 12500 }
    ],
    jobItems: [
        { name: "Lumberjack Start", job: "Lumberjack", price: 400 },
        { name: "Pickaxe Normal", job: "Miner", price: 150 },
        { name: "Pickaxe Copper", job: "Miner", price: 300 },
        { name: "Pickaxe Iron", job: "Miner", price: 750 },
        { name: "Pickaxe Silver", job: "Miner", price: 1500 },
        { name: "Pickaxe Gold", job: "Miner", price: 3000 }
    ],
    drugs: [
        { name: "Zakje Wiet", item: "weed_pooch", price: 445, notes: "Straatwaarde per stuk" },
        { name: "Cocaine", item: "coke", price: 750, notes: "Straatwaarde per stuk" },
        { name: "LSD", item: "lsd", price: 900, notes: "Straatwaarde per stuk" },
        { name: "Heroïne Spuit", item: "heroin", price: 1350, notes: "Straatwaarde per stuk" },
        { name: "Cokebag (2G)", item: "cokebag2", price: 9500, notes: "Verkoopwaarde per volle zak (2 gram)" },
        { name: "Methbag (2G)", item: "methbag2", price: 7500, notes: "Verkoopwaarde per volle zak (2 gram)" },
        { name: "Lab Methbag (1G)", item: "drugslabmethbag", price: 2750, notes: "Geproduceerd in het drugslab (snelle cyclus)" },
        { name: "Gewassen paddos", item: "mushroom-washed2", price: 1250, notes: "Verkoopwaarde na verwerking" }
    ],
    production: [
        { activity: "Loods Level 1 (Klein)", cost: 3500000, time: "N/A", yield: 10, note: "Instapmodel, 10 sleutel slots" },
        { activity: "Loods Level 2 (Medium)", cost: 6000000, time: "N/A", yield: 25, note: "Middelgrote loods, 25 sleutel slots" },
        { activity: "Loods Level 3 (Groot)", cost: 9000000, time: "N/A", yield: 50, note: "Grote loods voor actieve groepen, 50 sleutel slots" },
        { activity: "Loods Level 4 (Elite)", cost: 12500000, time: "N/A", yield: 75, note: "De grootste loods in de stad, 75 sleutel slots" },
        { activity: "StashHouse Upgrade (Loods 4)", cost: 15000000, time: "N/A", yield: "Bonus", note: "Speciale upgrade voor Level 4 loodsen (StashHouse functionaliteit)" },
        { activity: "Drugslab Cyclus (Bulk)", cost: 1500, time: "1.5 Min", yield: 1, targetItem: "drugslabmethbag", simple: "Het proces: In het drugslab doorloop je 4 snelle stappen van elk 12 seconden. Het hele proces duurt ongeveer 1.5 minuut per zakje. De winst is € 1.250 per ronde (ongeveer € 833 per minuut). Dit is de perfecte instap-stap voor nieuwe criminelen." },
        { 
            activity: "Paddo's Wassen (Sessie)", 
            cost: 200, 
            time: "2 Min", 
            yield: 4, 
            targetItem: "mushroom-washed2", 
            simple: "Het proces: Je haalt paddo's (pluk- en wastijd in de containers). Het plukken én wassen kost rond de 30 seconden per stuk (ongeveer 1 minuut totaal per klaargemaakt zakje solo werk). De waarde is verhoogd naar € 950 per theezakje. Met dit lange grindproces verdien je zo'n € 79.000 netto winst per uur. Het kost je ruwweg 12 uur strak grinden om in je eentje 1000 gewassen paddo's te plukken én wassen ($950.000)." 
        },
        { 
            activity: "Coke Verpakken (Sessie)", 
            cost: 5000, 
            time: "4 Min", 
            yield: 2, 
            targetItem: "cokebag2", 
            simple: "Het proces: Je produceert ruwe coke (100s) en verpakt het daarna (100s). Binnen 4 minuten heb je 2 zakjes van 2 gram klaar. De baas vangt aan het einde van de dag dus € 19.000 per ronde. Na aftrek van kosten hou je € 14.000 winst over (€ 3.500 per minuut)." 
        },
        { 
            activity: "MDMA/Meth Cyclus", 
            cost: 4500, 
            time: "3 Min", 
            yield: 2, 
            targetItem: "methbag2", 
            simple: "Het proces: Het koken en verwerken van MDMA/Meth (75s + 75s). Binnen 3 minuten heb je 2 volle zakjes van 2 gram klaar. De dagwaarde per ronde is € 15.000. Je winst is € 10.500 per ronde (€ 3.500 per minuut)." 
        }
    ],
    drugTransfer: [
        { type: "Cocaïne", buyPrice: 30900, sellPrice: 42500, profit: 11600, time: "5m", hourly: 139200, note: "Prijs per kilo. Verwerkingstijd per kilo." },
        { type: "Meth", buyPrice: 32300, sellPrice: 45000, profit: 12700, time: "5m", hourly: 152400, note: "Prijs per kilo. Hoogste winstmarges." },
        { type: "Wiet", buyPrice: 27500, sellPrice: 38000, profit: 10500, time: "5m", hourly: 126000, note: "Prijs per kilo. Stabiele instapper." },
        { type: "Loods Aankoop", buyPrice: 1200000, sellPrice: 0, profit: 0, time: "—", hourly: 0, note: "Eenmalige investering voor drugstransfer toegang (Warehouse)." },
    ],
    garageCosts: [
        { item: "Voertuig Reparatie (Garage)", cost: 1500, note: "Standaard prijs voor motor/body herstel." },
        { item: "Algemene Impound (Terugkoop)", cost: 750, note: "Kosten als auto op straat is blijven staan." },
        { item: "Politie Beslag (Beslag-koop)", cost: 15000, note: "Kosten voor voertuigen in POL-beslag (Shared.Config.PoliceImpound)." },
    ],
    civilianJobs: [
        { job: "Vissen (Gemiddeld)", income: "± € 300 / vis", cost: "Worm: € 25", yield: "± € 2.500 / 10 min", note: "Laagdrempelig, winstgevend voor beginners." },
        { job: "Vissen (Zeldzaam - Haai)", income: "€ 15.000 - € 25.000", cost: "Titanium Rod: € 25k", yield: "High Risk / Reward", note: "Vereist geduld en dure uitrusting." },
    ],
    // ─── BURGER JOBS ────────────────────────────────────────────
    gardening: [
        { item: "Per Maaipunt", payout: 200, time: "15s", hourly: 48000, note: "Vaste vergoeding per marker. ~24 markers per route." },
        { item: "Volledige route (24 punten)", payout: 4800, time: "6m", hourly: 48000, note: "Lage drempel, geen kosten." },
    ],
    lumberjack: [
        { item: "Hout verkopen", payout: 3500, time: "10m", hourly: 18600, note: "Per houtlading ingeleverd." },
        { item: "Startkosten missie", payout: -400, time: "0m", hourly: 0, note: "Betaling bij starten missie." },
        { item: "Netto per sessie", payout: 3100, time: "10m", hourly: 18600, note: "Na aftrek startkosten." },
    ],
    trucking: [
        { item: "Trucking bezorging (normaal)", payout: 1500, time: "8m", hourly: 11250, note: "Geschat gemiddelde per rit." },
        { item: "Trucking bezorging (lang)", payout: 2500, time: "12m", hourly: 12500, note: "Langere routes geven meer." },
        { item: "Eenmalige huurkosten Werknemer", payout: -1500, time: "0m", hourly: 0, note: "Kosten liggen tussen €1.000 en €2.000." },
        { item: "Netto opbrengst Werknemer", payout: 175, time: "20m", hourly: 525, note: "Brengt per ritt tussende €100 - €250 op (excl. skill bonus)." },
        { item: "Cooldown Werknemer rit", payout: 0, time: "20m", hourly: 0, note: "Slechts 1 rit per 20 minuten per ingehuurde werknemer." },
    ],
    deurwaarder: [
        { item: "Uitbetaling (min)", payout: 4229, time: "8m", hourly: 31717, note: "Minimale beloning per voltooide actie." },
        { item: "Uitbetaling (max)", payout: 6500, time: "10m", hourly: 39000, note: "Maximale beloning. Auto terugbrengen naar opslagplek." },
        { item: "Cooldown", payout: 0, time: "5m", hourly: 0, note: "5 minuten cooldown tussen jobs." },
    ],
    mijnwerker: [
        { item: "Pickaxe (normaal)", cost: 150, payout: 0, time: "12m", hourly: 0, note: "Slijt na ~100 erts." },
        { item: "Koper erts", cost: 0, payout: 60, time: "10s", hourly: 21600, note: "Verkoopprijs per stuk." },
        { item: "Steenkool erts", cost: 0, payout: 40, time: "10s", hourly: 14400, note: "Verkoopprijs per stuk." },
        { item: "IJzer erts", cost: 0, payout: 100, time: "10s", hourly: 36000, note: "Verkoopprijs per stuk." },
        { item: "Zilver erts", cost: 0, payout: 225, time: "10s", hourly: 81000, note: "Verkoopprijs per stuk." },
        { item: "Goud erts", cost: 0, payout: 450, time: "10s", hourly: 162000, note: "Verkoopprijs per stuk." },
    ],
    pizzajob: [
        { item: "Bezorging (min)", payout: 105, time: "1m", hourly: 6300, note: "Minimale beloning per bezorging." },
        { item: "Bezorging (max)", payout: 135, time: "1m", hourly: 8100, note: "Maximale beloning per bezorging." },
        { item: "Volledige sessie (10 ritten, max)", payout: 1350, time: "12m", hourly: 6750, note: "10 bezorgingen × €135." },
    ],
    stadsbeheer: [
        { item: "Taak (min)", payout: 150, time: "1.5m", hourly: 6000, note: "Minimale beloning per stadswerkpunt." },
        { item: "Taak (max)", payout: 275, time: "1.5m", hourly: 11000, note: "Maximale beloning per stadswerkpunt." },
        { item: "Sessie (10 taken, max)", payout: 2750, time: "15m", hourly: 11000, note: "10 taken × €275." },
    ],
    airport: [
        { item: "Beloning per landing (min)", payout: 3000, time: "5m", hourly: 36000, note: "Afhankelijk van route en type vliegtuig." },
        { item: "Beloning per landing (max)", payout: 5500, time: "5m", hourly: 66000, note: "Maximale beloning per landing." },
        { item: "Cooldown", payout: 0, time: "30s", hourly: 0, note: "30 seconden tussen landingen." },
    ],
    jobSalaries: [
        // police — start 8k, +1k per rang
        { job: "Politie", rank: "Aspirant",                   grade: 1,  salary: 8000,  tier: "police" },
        { job: "Politie", rank: "Surveillant",                grade: 2,  salary: 9000,  tier: "police" },
        { job: "Politie", rank: "Agent",                      grade: 3,  salary: 10000, tier: "police" },
        { job: "Politie", rank: "Hoofdagent",                 grade: 4,  salary: 11000, tier: "police" },
        { job: "Politie", rank: "Brigadier",                  grade: 5,  salary: 12000, tier: "police" },
        { job: "Politie", rank: "Inspecteur",                 grade: 6,  salary: 13000, tier: "police" },
        { job: "Politie", rank: "Hoofdinspecteur",            grade: 7,  salary: 14000, tier: "police" },
        { job: "Politie", rank: "Commissaris",                grade: 8,  salary: 15000, tier: "police" },
        { job: "Politie", rank: "Hoofdcommissaris",           grade: 9,  salary: 16500, tier: "police" },
        { job: "Politie", rank: "Eerste Hoofdcommissaris",    grade: 10, salary: 18500, tier: "police" },
        // kmar — start 7.5k, +1k per rang
        { job: "KMar", rank: "Marechaussee 3e kl.",          grade: 1,  salary: 7500,  tier: "kmar" },
        { job: "KMar", rank: "Marechaussee 2e kl.",          grade: 2,  salary: 8500,  tier: "kmar" },
        { job: "KMar", rank: "Marechaussee 1e kl.",          grade: 3,  salary: 9500,  tier: "kmar" },
        { job: "KMar", rank: "Wachtmeester",                 grade: 4,  salary: 10500, tier: "kmar" },
        { job: "KMar", rank: "Wachtmeester 1e kl.",          grade: 5,  salary: 11500, tier: "kmar" },
        { job: "KMar", rank: "Opperwachtmeester",            grade: 6,  salary: 12500, tier: "kmar" },
        { job: "KMar", rank: "Adjudant Onderofficier",       grade: 7,  salary: 13500, tier: "kmar" },
        { job: "KMar", rank: "Tweede Luitenant",             grade: 8,  salary: 14500, tier: "kmar" },
        { job: "KMar", rank: "Eerste Luitenant",             grade: 9,  salary: 15500, tier: "kmar" },
        { job: "KMar", rank: "Kapitein",                     grade: 10, salary: 16500, tier: "kmar" },
        { job: "KMar", rank: "Majoor",                       grade: 11, salary: 17500, tier: "kmar" },
        { job: "KMar", rank: "Luitenant-Kolonel",            grade: 12, salary: 18500, tier: "kmar" },
        { job: "KMar", rank: "Kolonel",                      grade: 13, salary: 19500, tier: "kmar" },
        { job: "KMar", rank: "Brigadegeneraal",              grade: 14, salary: 20500, tier: "kmar" },
        { job: "KMar", rank: "Generaal-Majoor",              grade: 15, salary: 22000, tier: "kmar" },
        { job: "KMar", rank: "Luitenant-Generaal",           grade: 16, salary: 24000, tier: "kmar" },
        // marsof — start 10k, +1.5k per rang
        { job: "Marsof", rank: "Korporaal",                  grade: 1,  salary: 10000, tier: "marsof" },
        { job: "Marsof", rank: "Korporaal 1e kl.",           grade: 2,  salary: 11500, tier: "marsof" },
        { job: "Marsof", rank: "Sergent",                    grade: 3,  salary: 13000, tier: "marsof" },
        { job: "Marsof", rank: "Sergent-Majoor",             grade: 4,  salary: 14500, tier: "marsof" },
        { job: "Marsof", rank: "Adjudant-Onderofficier",     grade: 5,  salary: 16000, tier: "marsof" },
        { job: "Marsof", rank: "Opperwachtmeester",          grade: 6,  salary: 17500, tier: "marsof" },
        { job: "Marsof", rank: "Luitenant",                  grade: 7,  salary: 19000, tier: "marsof" },
        { job: "Marsof", rank: "Kapitein",                   grade: 8,  salary: 21000, tier: "marsof" },
        { job: "Marsof", rank: "Majoor",                     grade: 9,  salary: 23000, tier: "marsof" },
        { job: "Marsof", rank: "Commandant",                 grade: 10, salary: 26000, tier: "marsof" },
        // mechanic — start 6k, +1.5k per rang
        { job: "Mechanic", rank: "In Opleiding",             grade: 1,  salary: 6000,  tier: "mechanic" },
        { job: "Mechanic", rank: "Monteur",                  grade: 2,  salary: 7500,  tier: "mechanic" },
        { job: "Mechanic", rank: "Eerste Monteur",           grade: 3,  salary: 9000,  tier: "mechanic" },
        { job: "Mechanic", rank: "Hoofd Monteur",            grade: 4,  salary: 10500, tier: "mechanic" },
        { job: "Mechanic", rank: "Wegbeheer Leiding",        grade: 5,  salary: 12000, tier: "mechanic" },
        { job: "Mechanic", rank: "Wegbeheer",                grade: 6,  salary: 13500, tier: "mechanic" },
        { job: "Mechanic", rank: "Leermeester",              grade: 7,  salary: 15000, tier: "mechanic" },
        { job: "Mechanic", rank: "Manager",                  grade: 8,  salary: 17000, tier: "mechanic" },
        { job: "Mechanic", rank: "Directeur",                grade: 9,  salary: 20000, tier: "mechanic" },
        // aoe_esi — start 12k, +2k per rang
        { job: "AOE — ESI", rank: "In Opleiding",           grade: 1,  salary: 12000, tier: "aoe" },
        { job: "AOE — ESI", rank: "Medewerker",             grade: 2,  salary: 14000, tier: "aoe" },
        { job: "AOE — ESI", rank: "Afdelingscommandant",    grade: 3,  salary: 16000, tier: "aoe" },
        { job: "AOE — ESI", rank: "Commandant",             grade: 4,  salary: 19000, tier: "aoe" },
        // aoe_klu — start 12k, +2k per rang
        { job: "AOE — KLU", rank: "In Opleiding",           grade: 1,  salary: 12000, tier: "aoe" },
        { job: "AOE — KLU", rank: "Medewerker",             grade: 2,  salary: 14000, tier: "aoe" },
        { job: "AOE — KLU", rank: "Afdelingscommandant",    grade: 3,  salary: 16000, tier: "aoe" },
        { job: "AOE — KLU", rank: "Commandant",             grade: 4,  salary: 19000, tier: "aoe" },
        // aoe_recherche — start 12k, +2k per rang
        { job: "AOE — Recherche", rank: "In Opleiding",     grade: 1,  salary: 12000, tier: "aoe" },
        { job: "AOE — Recherche", rank: "Medewerker",       grade: 2,  salary: 14000, tier: "aoe" },
        { job: "AOE — Recherche", rank: "Afdelingscommandant", grade: 3, salary: 16000, tier: "aoe" },
        { job: "AOE — Recherche", rank: "Commandant",       grade: 4,  salary: 19000, tier: "aoe" },
        // aoe_at — start 14k, +2.5k per rang
        { job: "AOE — AT", rank: "In Opleiding",            grade: 1,  salary: 14000, tier: "aoe" },
        { job: "AOE — AT", rank: "Medewerker",              grade: 2,  salary: 16500, tier: "aoe" },
        { job: "AOE — AT", rank: "Afdelingscommandant",     grade: 3,  salary: 19000, tier: "aoe" },
        { job: "AOE — AT", rank: "Commandant",              grade: 4,  salary: 22000, tier: "aoe" },
        // hrb — start 10k, +2k per rang
        { job: "HRB", rank: "Wachtmeester",                 grade: 0,  salary: 10000, tier: "hrb" },
        { job: "HRB", rank: "Opperwachtmeester",            grade: 1,  salary: 12000, tier: "hrb" },
        { job: "HRB", rank: "Adjudant-onderofficier",       grade: 2,  salary: 14000, tier: "hrb" },
        { job: "HRB", rank: "Luitenant",                    grade: 3,  salary: 16500, tier: "hrb" },
        { job: "HRB", rank: "Kapitein",                     grade: 4,  salary: 19500, tier: "hrb" },
        // advocaat — start 8k, +2k per rang
        { job: "Advocaat", rank: "Stagiair",                grade: 0,  salary: 8000,  tier: "civilian" },
        { job: "Advocaat", rank: "Advocaat",                grade: 1,  salary: 10000, tier: "civilian" },
        { job: "Advocaat", rank: "Senior Advocaat",         grade: 2,  salary: 12500, tier: "civilian" },
        { job: "Advocaat", rank: "Partner",                 grade: 3,  salary: 15500, tier: "civilian" },
        { job: "Advocaat", rank: "Eigenaar",                grade: 4,  salary: 19000, tier: "civilian" },
        // ambulance — start 8k, +1k per rang
        { job: "Ambulance", rank: "In Opleiding",           grade: 1,  salary: 8000,  tier: "ambulance" },
        { job: "Ambulance", rank: "Ambulancier",            grade: 2,  salary: 9000,  tier: "ambulance" },
        { job: "Ambulance", rank: "Verpleegkundige",        grade: 3,  salary: 10000, tier: "ambulance" },
        { job: "Ambulance", rank: "Medisch Specialist",     grade: 4,  salary: 11000, tier: "ambulance" },
        { job: "Ambulance", rank: "Arts in Opleiding",      grade: 5,  salary: 12000, tier: "ambulance" },
        { job: "Ambulance", rank: "Arts",                   grade: 6,  salary: 13000, tier: "ambulance" },
        { job: "Ambulance", rank: "Senior Arts",            grade: 7,  salary: 14500, tier: "ambulance" },
        { job: "Ambulance", rank: "Teamleider",             grade: 8,  salary: 16000, tier: "ambulance" },
        { job: "Ambulance", rank: "Manager",                grade: 9,  salary: 18000, tier: "ambulance" },
        { job: "Ambulance", rank: "Directie",               grade: 10, salary: 21000, tier: "ambulance" },
    ],
    weaponCrafting: [
        { name: "Wapenloods Aankoop", type: "Investering", cost: 20000000, market: 0, note: "Prijzen nu boven de laatste drugs upgrade (15M)." },
        { name: "Machine Upgrade", type: "Upgrade", cost: 1500000, market: 0, note: "Nodig voor metaal snijden of koperdraad trekken." },
        { name: "Werktafel", type: "Station", cost: 1000000, market: 0, note: "Basis werktafel voor productie per wapentype." },
        { name: "Metalen Veer", type: "Onderdeel", cost: 35000, market: 0, note: "Inkoop bij NPC. Ongeveer 0.6x startgeld." },
        { name: "Wapen Trekker", type: "Onderdeel", cost: 35000, market: 0, note: "Inkoop bij NPC. Ongeveer 0.6x startgeld." },
        { name: "Wapen Onderdelen (Grip/Mag/etc)", type: "Onderdeel", cost: 10000, market: 0, note: "Losse onderdelen voor afwerking." },
        { name: "M1911 Pistol", type: "Wapen (Eindproduct)", cost: 250000, market: 750000, note: "Goede instapper. Vereist veel missies voor Aluminium/Plastic." },
        { name: "Micro SMG", type: "Wapen (Eindproduct)", cost: 450000, market: 1250000, note: "Serieus wapen voor gangs." },
        { name: "Pistol .50 / Assault", type: "Wapen (Eindproduct)", cost: 650000, market: 1850000, note: "Zwaarder kaliber, hoge winstmarge door risico." }
    ],
    vehicleTuning: [
        { name: "Motor Upgrade Lvl 1", type: "Performance", cost: 20000, old: 10000, note: "Basis motor tuning." },
        { name: "Motor Upgrade Lvl 2", type: "Performance", cost: 25000, old: 15000, note: "1.25x multiplier (was 1.5x)." },
        { name: "Motor Upgrade Lvl 3", type: "Performance", cost: 31250, old: 22500, note: "Stuk toegankelijker voor spelers." },
        { name: "Motor Upgrade Lvl 4", type: "Performance", cost: 39062, old: 33750, note: "Top performance voor een eerlijke prijs." },
        { name: "Turbo", type: "Performance", cost: 25000, old: 10000, note: "Acceleratie boost." },
        { name: "Transmissie Lvl 4", type: "Performance", cost: 29296, old: 33750, note: "Schakelen op topniveau." },
        { name: "Remmen Lvl 4", type: "Performance", cost: 24414, old: 33750, note: "Goede remkracht voor minder geld." },
        { name: "Spoiler", type: "Optisch", cost: 7500, old: 3500, note: "Optische tuning basis." },
        { name: "Front/Rear Bumper", type: "Optisch", cost: 3500, old: 1500, note: "Nieuwe bumpers." },
        { name: "Motorkappen (Hood)", type: "Optisch", cost: 5000, old: 3000, note: "Visuele aanpassing." },
        { name: "Livery (Bestickering)", type: "Optisch", cost: 8500, old: 4500, note: "Voertuig wrappen." },
        { name: "Window Tint (Ramen)", type: "Optisch", cost: 5500, old: 5000, note: "Privacy en stijl (alle types)." },
        { name: "Neon / Xenon verlichting", type: "Verlichting", cost: 1500, old: 500, note: "Verlichting rondom voertuig." },
        { name: "Sport/Tuner Velgen", type: "Wielen", cost: 2500, old: 150, note: "Aftermarket velgen." },
        { name: "Benny's Exclusief", type: "Wielen", cost: 9500, old: 150, note: "Custom velgen (exclusief)." }
    ],
    heists: [
        { name: "Winkeloverval (Lido)", police: 1, payout: 105000, cooldown: "30m", tier: "Tier 1 (Easy)" },
        { name: "Juwelier (Snel)", police: 1, payout: 250000, cooldown: "30m", tier: "Tier 1 (Easy)" },
        { name: "Fleeca Bank", police: 2, payout: 300000, cooldown: "30m", tier: "Tier 2 (Medium)" },
        { name: "Vangelico Heist", police: 3, payout: 650000, cooldown: "1u", tier: "Tier 3 (Hard)" },
        { name: "Hume Labs", police: 4, payout: 1250000, cooldown: "2u", tier: "Tier 4 (Expert)" },
        { name: "Roxwood Heist", police: 5, payout: 2000000, cooldown: "3u", tier: "Tier 5 (Extreme)" },
        { name: "Pacific Heist", police: 6, payout: 5500000, cooldown: "4u", tier: "Tier 6 (Legendary)" }
    ],
    houseRobberyItems: [
        { name: "Televisie", item: "Televisie", price: 15000, rarity: "High-End" },
        { name: "Laptop", item: "Laptop2", price: 12500, rarity: "High-End" },
        { name: "Ring", item: "Ring", price: 8500, rarity: "High-End" },
        { name: "Coke Bag", item: "cokebag2", price: 9500, rarity: "Mid-Tier" },
        { name: "Speaker", item: "Speaker", price: 6500, rarity: "High-End" },
        { name: "Saffraan", item: "Saffraan", price: 3500, rarity: "Mid-Tier" },
        { name: "Loterij-Ticket", item: "Loterij-Ticket", price: 2500, rarity: "Mid-Tier" },
        { name: "Kortingsbon", item: "Kortingsbon", price: 500, rarity: "Low-Tier" },
        { name: "Boek", item: "Boek", price: 400, rarity: "Low-Tier" },
        { name: "Tandpasta", item: "Tandpasta", price: 250, rarity: "Low-Tier" }
    ],
    houseInteriors: [
        { name: "Woonwagen (Trailer)", price: 85000, level: "Entry Level" },
        { name: "Standaard Motel", price: 150000, level: "Starter" },
        { name: "Modern Hotel Room", price: 350000, level: "Comfort" },
        { name: "Middenklasse Appartement", price: 650000, level: "Middle Class" },
        { name: "LC Luxe Appartement", price: 1250000, level: "Luxe" },
        { name: "Modern Herenhuis", price: 2500000, level: "Premium" },
        { name: "Industriële Loft", price: 4500000, level: "Elite" },
        { name: "Modern Loft", price: 6000000, level: "High-End" },
        { name: "Designer Villa", price: 8500000, level: "Ultra Luxe" },
        { name: "Ultra Luxe Mansion", price: 10000000, level: "God Tier" }
    ],
    vehicles: [
        // Sedans
        { name: "scharmann", class: "Sedans", price: 21000 },
        { name: "scheisser", class: "Sedans", price: 18000 },
        { name: "raidenz", class: "Sedans", price: 89000 },
        { name: "blistacr", class: "Sedans", price: 13000 },
        { name: "argento", class: "Sedans", price: 120000 },
        { name: "hyargento", class: "Sedans", price: 240000 },
        { name: "cypherct", class: "Sedans", price: 90000 },
        { name: "niobetour", class: "Sedans", price: 195000 },
        { name: "rhinehart", class: "Sedans", price: 150000 },
        { name: "sentinelmk4", class: "Sedans", price: 90000 },
        { name: "nebula2", class: "Sedans", price: 27000 },
        { name: "remustwo", class: "Sedans", price: 40000 },
        { name: "harnebulass", class: "Sedans", price: 60000 },
        { name: "harmann", class: "Sedans", price: 220000 },
        { name: "la_prestige", class: "Sedans", price: 250000 },
        { name: "oraclelwb", class: "Sedans", price: 90000 },
        { name: "revolutions", class: "Sedans", price: 45000 },
        { name: "schafter3rs", class: "Sedans", price: 50000 },
        { name: "komodai", class: "Sedans", price: 260000 },
        { name: "komodafr", class: "Sedans", price: 245000 },
        { name: "polycypher", class: "Sedans", price: 290000 },

        // Muscle
        { name: "gauntletstx", class: "Muscle", price: 95000 },
        { name: "vd_buffalo4", class: "Muscle", price: 123000 },
        { name: "ellie", class: "Muscle", price: 1120000 },
        { name: "gstdomgt7", class: "Muscle", price: 310000 },
        { name: "domgt", class: "Muscle", price: 110000 },
        { name: "hellfirelastcall", class: "Muscle", price: 90000 },
        { name: "domgtcoupe", class: "Muscle", price: 95000 },
        { name: "rrdominator9vert", class: "Muscle", price: 160000 },

        // SUVs
        { name: "ncavalcade", class: "SUVs", price: 340000 },
        { name: "rrseminalhawkx", class: "SUVs", price: 370000 },
        { name: "l35l", class: "SUVs", price: 10000 },
        { name: "RhinehartC", class: "SUVs", price: 1800000 },
        { name: "blackfang", class: "SUVs", price: 435000 },
        { name: "SSG_BallerSTD", class: "SUVs", price: 390000 },
        { name: "galatt2", class: "SUVs", price: 650000 },
        { name: "everonb", class: "SUVs", price: 495000 },
        { name: "beretta", class: "SUVs", price: 320000 },
        { name: "reblax6", class: "SUVs", price: 660000 },
        { name: "jogger", class: "SUVs", price: 45000 },
        { name: "PuffPuffVan", class: "SUVs", price: 55000 },
        { name: "yougav12", class: "SUVs", price: 35000 },
        { name: "aleutianxl", class: "SUVs", price: 240000 },
        { name: "contenderc", class: "SUVs", price: 290000 },
        { name: "gstsadlt1", class: "SUVs", price: 480000 },
        { name: "tgrcara", class: "SUVs", price: 488000 },
        { name: "mxls", class: "SUVs", price: 330000 },
        { name: "nscout", class: "SUVs", price: 490000 },
        { name: "brutus4", class: "SUVs", price: 210000 },
        { name: "fpdbe", class: "SUVs", price: 350000 },
        { name: "caracaran", class: "SUVs", price: 210000 },
        { name: "slam4x4", class: "SUVs", price: 90000 },
        { name: "rebgthr", class: "SUVs", price: 3900000 },

        // Sports
        { name: "euros", class: "Sports", price: 670000 },
        { name: "zr390", class: "Sports", price: 650000 },
        { name: "schlagensl", class: "Sports", price: 560000 },
        { name: "wolf", class: "Sports", price: 550000 },
        { name: "seven70", class: "Sports", price: 800000 },
        { name: "italisuv", class: "Sports", price: 850000 },
        { name: "kurumahyc", class: "Sports", price: 500000 },
        { name: "kurumar", class: "Sports", price: 740000 },
        { name: "s96", class: "Sports", price: 600000 },
        { name: "corsita", class: "Sports", price: 800000 },
        { name: "sunrise1", class: "Sports", price: 730000 },
        { name: "ninef", class: "Sports", price: 400000 },
        { name: "omnisegt", class: "Sports", price: 650000 },
        { name: "oshadow", class: "Sports", price: 840000 },
        { name: "estancia", class: "Sports", price: 1500000 },
        { name: "tenf2", class: "Sports", price: 2300000 },
        { name: "gsttoros1", class: "Sports", price: 950000 },
        { name: "Osiris", class: "Sports", price: 650000 },
        { name: "cometr", class: "Sports", price: 840000 },
        { name: "neonsuv", class: "Sports", price: 850000 },
        { name: "pace_SP1", class: "Sports", price: 700000 },
        { name: "mf1", class: "Sports", price: 1200000 },
        { name: "t20", class: "Sports", price: 960000 },
        { name: "nero2", class: "Sports", price: 800000 },
        { name: "oraclestd", class: "Sports", price: 500000 },
        { name: "oracxsle", class: "Sports", price: 700000 },
        { name: "sentinel5", class: "Sports", price: 1400000 },
        { name: "strikertour", class: "Sports", price: 900000 },
        { name: "turismocs", class: "Sports", price: 990000 },
        { name: "sentinel_rts", class: "Sports", price: 700000 },
        { name: "SSG_Comet6", class: "Sports", price: 1100000 },
        { name: "gstast1", class: "Sports", price: 970000 },
        { name: "jestgpr", class: "Sports", price: 100000 },
        { name: "growlerc", class: "Sports", price: 300000 },
        { name: "gstasp2", class: "Sports", price: 150000 },
        { name: "elegyrh7", class: "Sports", price: 220000 },
        { name: "S2kLB", class: "Sports", price: 300000 },
        { name: "vaccar", class: "Sports", price: 250000 },
        { name: "elegyx", class: "Sports", price: 400000 },
        { name: "schlagenstr", class: "Sports", price: 1500000 },
        { name: "la_schlagensl", class: "Sports", price: 400000 },
        { name: "GLLore10f", class: "Sports", price: 1900000 },
        { name: "rrflashwidebody", class: "Sports", price: 930000 },
        { name: "la_mirage", class: "Sports", price: 300000 },
        { name: "sheavas", class: "Sports", price: 600000 },
        { name: "rhinenim", class: "Sports", price: 1100000 },
        { name: "2aic811", class: "Sports", price: 1300000 },
        { name: "ST_LoreE60", class: "Sports", price: 700000 },
        { name: "coqvr", class: "Sports", price: 1600000 },
        { name: "osirisfr", class: "Sports", price: 2000000 },
        { name: "cypherwbs", class: "Sports", price: 690000 },

        // Super
        { name: "Krieger", class: "Super", price: 600000 },
        { name: "gstban1k2", class: "Super", price: 360000 },
        { name: "kriegerty2", class: "Super", price: 1500000 },
        { name: "vagner", class: "Super", price: 1000000 },
        { name: "cheetah", class: "Super", price: 200000 },
        { name: "turismos", class: "Super", price: 1900000 },
        { name: "pace_DGT", class: "Super", price: 1000000 },
        { name: "tempestaes", class: "Super", price: 2000000 },
        { name: "rrcorquettecustom", class: "Super", price: 1000000 },
        { name: "gstxp41", class: "Super", price: 2000000 },
        { name: "nerossmk2", class: "Super", price: 700000 },
        { name: "italigto", class: "Super", price: 600000 },
        { name: "widekitprogen750", class: "Super", price: 3000000 },
        { name: "pace_coquette", class: "Super", price: 870000 },
        { name: "turismo3", class: "Super", price: 600000 },
        { name: "visione", class: "Super", price: 700000 },
        { name: "nerops", class: "Super", price: 800000 },
        { name: "osirisr", class: "Super", price: 300000 },
        { name: "zentornoc", class: "Super", price: 1600000 },
        { name: "estancia", class: "Super", price: 300000 },
        { name: "italigton", class: "Super", price: 250000 },
        { name: "kriegeropen", class: "Super", price: 700000 },
        { name: "severo", class: "Super", price: 550000 },
        { name: "ST_Turismo3", class: "Super", price: 800000 },
        { name: "widekitcvh", class: "Super", price: 1300000 },
        { name: "zentorno2", class: "Super", price: 1200000 },
        { name: "neoncs", class: "Super", price: 500000 },
        { name: "auroras", class: "Super", price: 300000 },
        { name: "celeste", class: "Super", price: 435000 },
        { name: "emerus", class: "Super", price: 560000 },
        { name: "gp1", class: "Super", price: 200000 },
        { name: "ITALIGTB2", class: "Super", price: 230000 },
        { name: "t20gtr", class: "Super", price: 1000000 },
        { name: "adders", class: "Super", price: 890000 },
        { name: "thrax", class: "Super", price: 700000 },
        { name: "fmj", class: "Super", price: 560000 },
        { name: "sc_infernusx", class: "Super", price: 230000 },
        { name: "quantum", class: "Super", price: 500000 },
        { name: "hurricane", class: "Super", price: 200000 },
        { name: "coquette4c", class: "Super", price: 700000 },
        { name: "audace", class: "Super", price: 590000 },
        { name: "fmjb", class: "Super", price: 100000 },
        { name: "infernus2se", class: "Super", price: 120000 },
        { name: "DRcGT63x", class: "Super", price: 230000 },
        { name: "schlagenstr2", class: "Super", price: 3100000 },
        { name: "widekitbenevi", class: "Super", price: 3500000 },
        { name: "gstt203", class: "Super", price: 2600000 },

        // Offroad
        { name: "Hellion", class: "Offroad", price: 200000 },
        { name: "gstbisxl3", class: "Offroad", price: 120000 },
        { name: "kamacho", class: "Offroad", price: 340000 },
        { name: "Terminus4x4", class: "Offroad", price: 500000 },
        { name: "gstyosemite1", class: "Offroad", price: 480000 },
        { name: "mesaxl", class: "Offroad", price: 200000 },
        { name: "caracara2baja", class: "Offroad", price: 260000 },

        // Coupes
        { name: "issi7", class: "Coupes", price: 150000 },
        { name: "quail", class: "Coupes", price: 60000 },

        // Classics
        { name: "elegyh", class: "Classics", price: 100000 },
        { name: "kawaii", class: "Classics", price: 60000 },
        { name: "s230", class: "Classics", price: 65000 },
        { name: "zr", class: "Classics", price: 50000 },
        { name: "rrb30", class: "Classics", price: 90000 },
        { name: "jester5", class: "Classics", price: 150000 },
        { name: "nexus", class: "Classics", price: 40000 },
        { name: "sultan3", class: "Classics", price: 43000 },
        { name: "ardent", class: "Classics", price: 87000 },
        { name: "sentinelsg4", class: "Classics", price: 90000 },
        { name: "zr350hyc", class: "Classics", price: 500000 },
        { name: "seraph3", class: "Classics", price: 110000 },
        { name: "vorstand", class: "Classics", price: 60000 },
        { name: "gb200", class: "Classics", price: 90000 },
        { name: "roxanne", class: "Classics", price: 120000 },
        { name: "deimos", class: "Classics", price: 50000 },
        { name: "coqvice", class: "Classics", price: 100000 },
        { name: "cometold", class: "Classics", price: 30000 },
        { name: "majimagt", class: "Classics", price: 70000 },
        { name: "jester3c", class: "Classics", price: 120000 },
        { name: "cheetahfel", class: "Classics", price: 150000 },
        { name: "schnell", class: "Classics", price: 240000 },
        { name: "sultan2r", class: "Classics", price: 210000 },
        { name: "sentineldtm", class: "Classics", price: 180000 },
        { name: "mesos", class: "Classics", price: 120000 },
        { name: "gstzinc1", class: "Classics", price: 50000 },
        { name: "elegysanshi", class: "Classics", price: 70000 },
        { name: "feltzer9", class: "Classics", price: 150000 },
        { name: "widekitm63", class: "Classics", price: 130000 },

        // Motorcycles
        { name: "enduromk2", class: "Motorcycles", price: 20000 },
        { name: "gobi600", class: "Motorcycles", price: 25000 },
        { name: "xp1", class: "Motorcycles", price: 30000 },
        { name: "bati901", class: "Motorcycles", price: 42000 },
        { name: "bf900", class: "Motorcycles", price: 80000 },
        { name: "bhhigh", class: "Motorcycles", price: 100000 },
        { name: "bhlow", class: "Motorcycles", price: 110000 },
        { name: "powersurge", class: "Motorcycles", price: 20000 },
        { name: "sumosanchez", class: "Motorcycles", price: 9000 },
        { name: "sg1150", class: "Motorcycles", price: 50000 },

        // Eiland
        { name: "Baikal", class: "Eiland", price: 90000 },
        { name: "rrbuggy", class: "Eiland", price: 500000 },
        { name: "RUMPO3", class: "Eiland", price: 3000000 },
        { name: "peacemaker", class: "Eiland", price: 100000 },
        { name: "coyote", class: "Eiland", price: 80000 },
        { name: "KarinOutlander", class: "Eiland", price: 300000 },
        { name: "prally", class: "Eiland", price: 200000 },

        // Water/Lucht
        { name: "gfboat", class: "Boten", price: 5000000 },
        { name: "rboat", class: "Boten", price: 3000000 },
        { name: "suntrap", class: "Boten", price: 1000000 },
        { name: "toro", class: "Boten", price: 5000000 },
        { name: "BUZZARD2", class: "Helikopters", price: 7000000 },
        { name: "HAVOK", class: "Helikopters", price: 5000000 },
        { name: "HELLDRAGON", class: "Helikopters", price: 8000000 },
        { name: "maverick2", class: "Helikopters", price: 10000000 },
        { name: "maverickv", class: "Helikopters", price: 12000000 },
        { name: "seasparrow", class: "Helikopters", price: 8000000 },
        { name: "supervolito2", class: "Helikopters", price: 10000000 },
        { name: "SWIFT", class: "Helikopters", price: 15000000 },
        { name: "VOLATUS", class: "Helikopters", price: 12000000 },
        { name: "dodoold", class: "Vliegtuigen", price: 10000000 },
    ],
    blackMarket: [
        { name: "Hamer", item: "hammer", cost: 80000, use: "Zwak slagwapen" },
        { name: "Honkbalknuppel", item: "bat", cost: 80000, use: "Sterk slagwapen" },
        { name: "Lockpick", item: "lockpick", cost: 2500, use: "Deuren / Voertuigen" },
        { name: "Overvaltas", item: "bag", cost: 500, use: "Buit meenemen" },
        { name: "Glassnijder", item: "cutter", cost: 10000, use: "Juwelier Kraak" },
        { name: "Boormachine", item: "drill", cost: 15000, use: "Fleeca / Pacific" },
        { name: "Thermiet", item: "thermite_bomb", cost: 12500, use: "Deuren smelten" },
        { name: "Hacking Laptop", item: "laptop", cost: 25000, use: "Computers hacken" },
        { name: "Crypto USB", item: "hack_usb", cost: 7500, use: "Data diefstal" },
        { name: "C4 Explosief", item: "c4_bomb", cost: 50000, use: "Kluizen opblazen" }
    ],
    prisonBreak: [
        { name: "Uitbraak Hack Starten", cost: "- € 150.000", item: "Hacking Laptop", notes: "Kosten om de security systemen open te breken" }
    ],
    taxes: [
        { min: 0, max: 1000000, percentage: 0, label: "Burgers Safe (Geen Belasting)" },
        { min: 1000001, max: 2500000, percentage: 0.5, label: "Licht" },
        { min: 2500001, max: 5000000, percentage: 1.0, label: "Merkbaar" },
        { min: 5000001, max: 7500000, percentage: 1.5, label: "Rijk" },
        { min: 7500001, max: 10000000, percentage: 2.5, label: "Elite" },
        { min: 10000001, max: 999999999, percentage: 4.0, label: "Money Sink" }
    ]
};

function formatCurrency(val) {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
}

function updateCalculations() {
    const starterMoney = parseFloat(document.getElementById('starterMoney').value) || 1;
    
    // Table 1 - Settings
    const settingsBody = document.getElementById('economy-settings-body');
    settingsBody.innerHTML = DATA.economySettings.map(item => `
        <tr>
            <td>${item.setting}</td>
            <td class="price-val">${formatCurrency(item.value)}</td>
            <td class="notes">${item.notes}</td>
        </tr>
    `).join('');

    // Table 2 - Jobs
    const jobsBody = document.getElementById('job-payouts-body');
    jobsBody.innerHTML = DATA.jobPayouts.map(item => {
        const payout = starterMoney * item.multiplier;
        const equiv = payout / starterMoney;
        return `
            <tr>
                <td>${item.job}</td>
                <td>${item.rank}</td>
                <td>${item.multiplier.toFixed(2)}x</td>
                <td class="payout-val">${formatCurrency(payout)}</td>
                <td><span class="equivalent-pill">${equiv.toFixed(2)}x</span></td>
            </tr>
        `;
    }).join('');

    // Table 3 - Weapons
    const weaponsBody = document.getElementById('weapons-body');
    weaponsBody.innerHTML = DATA.weapons.map(item => {
        const equiv = item.price / starterMoney;
        return `
            <tr>
                <td><code>${item.id}</code></td>
                <td>${item.name}</td>
                <td>${item.cat}</td>
                <td style="color: ${item.access === 'Gang' ? '#ff4444' : '#44ff44'}">${item.access}</td>
                <td class="price-val">${formatCurrency(item.price)}</td>
                <td><span class="equivalent-pill">${equiv.toFixed(2)}x</span></td>
            </tr>
        `;
    }).join('');

    // Table 4 - Ammo
    const ammoBody = document.getElementById('ammo-body');
    ammoBody.innerHTML = DATA.ammo.map(item => {
        const equiv = item.price / starterMoney;
        return `
            <tr>
                <td><code>${item.type}</code></td>
                <td style="color: ${item.access === 'Gang' ? '#ff4444' : '#44ff44'}">${item.access}</td>
                <td class="price-val">${formatCurrency(item.price)}</td>
                <td><span class="equivalent-pill">${equiv.toFixed(2)}x</span></td>
            </tr>
        `;
    }).join('');

    // Table 6 - Services
    const servicesBody = document.getElementById('services-body');
    servicesBody.innerHTML = DATA.services.map(item => {
        const equiv = item.price / starterMoney;
        return `
            <tr>
                <td>${item.name}</td>
                <td class="price-val">${formatCurrency(item.price)}</td>
                <td><span class="equivalent-pill">${equiv.toFixed(2)}x</span></td>
            </tr>
        `;
    }).join('');

    // Table 7 - Job Items
    const jobItemsBody = document.getElementById('job-items-body');
    jobItemsBody.innerHTML = DATA.jobItems.map(item => {
        const equiv = item.price / starterMoney;
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.job}</td>
                <td class="price-val">${formatCurrency(item.price)}</td>
                <td><span class="equivalent-pill">${equiv.toFixed(2)}x</span></td>
            </tr>
        `;
    }).join('');

    // Table 8 - Drugs
    const drugsBody = document.getElementById('drugs-body');
    drugsBody.innerHTML = DATA.drugs.map(item => {
        const equiv = item.price / starterMoney;
        return `
            <tr>
                <td>${item.name}</td>
                <td><code>${item.item}</code></td>
                <td class="price-val" style="color: #00ff88">${formatCurrency(item.price)}</td>
                <td><span class="equivalent-pill">${equiv.toFixed(2)}x</span></td>
                <td class="notes">${item.notes}</td>
            </tr>
        `;
    }).join('');

    // Table 9 - Production
    const prodBody = document.getElementById('production-body');
    prodBody.innerHTML = DATA.production.map(item => {
        let grossProfit = 0;
        let roi = "N/A";
        
        if (item.targetItem) {
            const drug = DATA.drugs.find(d => d.item === item.targetItem);
            if (drug) {
                grossProfit = (drug.price * item.yield) - item.cost;
                roi = `${(item.cost / grossProfit).toFixed(1)} Ronde(s)`;
            }
        } else {
            // It's a warehouse investment
            roi = `${(item.cost / starterMoney).toFixed(1)}x Startgeld`;
        }

        return `
            <tr>
                <td>${item.activity}</td>
                <td class="price-val">${formatCurrency(item.cost)}</td>
                <td>${item.time}</td>
                <td>${item.yield}x</td>
                <td class="payout-val">${grossProfit > 0 ? formatCurrency(grossProfit) : '-'}</td>
                <td><span class="equivalent-pill">${roi}</span></td>
                <td>
                    ${item.simple ? `<button class="help-btn" onclick="openModal('${item.activity}')">Hulp</button>` : `<span class="notes">${item.note}</span>`}
                </td>
            </tr>
        `;
    }).join('');

    // Table 10 - Weapon Crafting
    const weaponBody = document.getElementById('weapon-crafting-body');
    weaponBody.innerHTML = DATA.weaponCrafting.map(item => {
        const equivalent = (item.cost / starterMoney).toFixed(2);
        return `
            <tr>
                <td>${item.name}</td>
                <td><span class="category-pill">${item.type}</span></td>
                <td class="price-val">${formatCurrency(item.cost)}</td>
                <td><span class="equivalent-pill">${equivalent}x</span></td>
                <td class="payout-val">${item.market > 0 ? formatCurrency(item.market) : '-'}</td>
                <td class="notes">${item.note}</td>
            </tr>
        `;
    }).join('');

    // Table 11 - Vehicle Tuning
    const tuningBody = document.getElementById('tuning-body');
    tuningBody.innerHTML = DATA.vehicleTuning.map(item => {
        const equivalent = (item.cost / starterMoney).toFixed(2);
        return `
            <tr>
                <td>${item.name}</td>
                <td><span class="category-pill">${item.type}</span></td>
                <td class="price-val">${formatCurrency(item.cost)}</td>
                <td><span class="equivalent-pill">${equivalent}x</span></td>
                <td class="old-price">${formatCurrency(item.old)}</td>
                <td class="notes">${item.note}</td>
            </tr>
        `;
    }).join('');

    // Table 12 - Heists
    const heistsBody = document.getElementById('heists-body');
    heistsBody.innerHTML = DATA.heists.map(h => `
        <tr>
            <td><strong>${h.name}</strong></td>
            <td style="color: #ff9f43; font-weight: bold;">${h.police} 👮</td>
            <td style="color: #00ff88; font-weight: bold;">${formatCurrency(h.payout)}</td>
            <td>${h.cooldown}</td>
            <td><span class="badge ${h.tier.toLowerCase().includes('easy') ? 'safe' : h.tier.toLowerCase().includes('medium') ? 'warning' : 'danger'}">${h.tier}</span></td>
        </tr>
    `).join('');

    // Table 13 - House Robbery Items
    const houseBody = document.getElementById('house-robbery-body');
    if (houseBody) {
        houseBody.innerHTML = DATA.houseRobberyItems.map(item => `
            <tr>
                <td>${item.name}</td>
                <td><code>${item.item}</code></td>
                <td class="price-val" style="color: #00ff88">${formatCurrency(item.price)}</td>
                <td><span class="badge ${item.rarity.toLowerCase().includes('high') ? 'danger' : item.rarity.toLowerCase().includes('mid') ? 'warning' : 'safe'}">${item.rarity}</span></td>
            </tr>
        `).join('');
    }

    // Table 14 - Housing
    const housingBody = document.getElementById('housing-body');
    const estDailySalary = 20000; // Gemiddeld 4u spelen per dag @ 5k/u
    if (housingBody) {
        housingBody.innerHTML = DATA.houseInteriors.map(h => {
            const factor = (h.price / starterMoney).toFixed(2);
            const days = Math.ceil(h.price / estDailySalary);
            return `
                <tr>
                    <td><strong>${h.name}</strong></td>
                    <td class="price-val">${formatCurrency(h.price)}</td>
                    <td><span class="equivalent-pill">${factor}x Startgeld</span></td>
                    <td style="color: #ffbd00; font-weight: bold;">~ ${days} Dagen</td>
                    <td><span class="badge ${h.price < 200000 ? 'safe' : h.price < 1000000 ? 'warning' : 'danger'}">${h.level}</span></td>
                </tr>
            `;
        }).join('');
    }

    // Table 15 - Black Market
    const bmBody = document.getElementById('blackmarket-body');
    if (bmBody) {
        bmBody.innerHTML = DATA.blackMarket.map(item => `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td><code>${item.item}</code></td>
                <td class="price-val" style="color: #ea5455">${formatCurrency(item.cost)}</td>
                <td class="notes">${item.use}</td>
            </tr>
        `).join('');
    }

    // Table 16 - Prison Break
    const pbBody = document.getElementById('prison-body');
    if (pbBody) {
        pbBody.innerHTML = DATA.prisonBreak.map(item => `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td class="price-val" style="color: #ea5455">${item.cost}</td>
                <td><span class="badge warning">${item.item}</span></td>
                <td class="notes">${item.notes}</td>
            </tr>
        `).join('');
    }

    // Table 17 - Taxes
    const taxBody = document.getElementById('tax-body');
    if (taxBody) {
        taxBody.innerHTML = DATA.taxes.map(tax => {
            const rangeStr = tax.max === 999999999 
                ? `Boven ${formatCurrency(tax.min)}` 
                : `${formatCurrency(tax.min)} - ${formatCurrency(tax.max)}`;
            
            // Bereken een voorbeeld afdracht (midden van de bracket, tenzij het de hoogste is)
            let exampleAmount = 0;
            if (tax.percentage > 0) {
                const sampleBalance = tax.max === 999999999 ? 10000000 : (tax.min + tax.max) / 2;
                exampleAmount = sampleBalance * (tax.percentage / 100);
            }

            return `
                <tr>
                    <td><strong>${rangeStr}</strong></td>
                    <td style="color: #ffbd00; font-weight: bold;">${tax.percentage.toFixed(1)}%</td>
                    <td class="price-val" style="color: #ea5455">${exampleAmount > 0 ? '- ' + formatCurrency(exampleAmount) : 'Geen'}</td>
                    <td><span class="badge ${tax.percentage === 0 ? 'safe' : tax.percentage <= 2 ? 'warning' : 'danger'}">${tax.label}</span></td>
                </tr>
            `;
        }).join('');
    }
}


function openModal(activityName) {
    const item = DATA.production.find(p => p.activity === activityName);
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modal-body');
    
    if (item && item.simple) {
        let calculations = "";
        if (item.targetItem) {
            const drug = DATA.drugs.find(d => d.item === item.targetItem);
            const totalRevenue = drug.price * item.yield;
            calculations = `
                <div class="math">
                    Opbrengst: ${item.yield}x ${formatCurrency(drug.price)} = ${formatCurrency(totalRevenue)}<br>
                    Kosten: - ${formatCurrency(item.cost)}<br>
                    -------------------------<br>
                    WINST: ${formatCurrency(totalRevenue - item.cost)}
                </div>
            `;
        }

        body.innerHTML = `
            <div class="modal-step">
                <h3>Hoe werkt ${item.activity}?</h3>
                <p style="font-size: 1.1rem; margin-bottom: 20px;">${item.simple}</p>
                ${calculations}
            </div>
        `;
        modal.style.display = "block";
    }
}

function closeModal() {
    document.getElementById('infoModal').style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeModal();
    }
}

function renderCivilianJobs() {
    const body = document.getElementById('civilian-body');
    if (!body) return;
    body.innerHTML = DATA.civilianJobs.map(j => `
        <tr>
            <td>${j.job}</td>
            <td>${j.income}</td>
            <td>${j.cost}</td>
            <td>${j.yield}</td>
            <td>${j.note}</td>
        </tr>
    `).join('');
}

function renderJobSalaries() {
    const body = document.getElementById('salary-body');
    if (!body) return;
    const tierColors = {
        police:    '#3b82f6',
        kmar:      '#8b5cf6',
        marsof:    '#ef4444',
        mechanic:  '#f59e0b',
        aoe:       '#ec4899',
        hrb:       '#14b8a6',
        ambulance: '#22c55e',
        civilian:  '#a3e635',
    };
    let lastJob = "";
    body.innerHTML = DATA.jobSalaries.map((s, index) => {
        const color = tierColors[s.tier] || '#94a3b8';
        const bar = Math.round((s.salary / 60000) * 100);
        let borderStyle = "";
        const nextJob = DATA.jobSalaries[index + 1];
        if (nextJob && nextJob.job !== s.job) {
            borderStyle = `border-bottom: 8px solid rgba(0, 0, 0, 0.3);`;
        }

        return `
        <tr>
            <td style="${borderStyle}"><span style="color:${color};font-weight:600;">${s.job}</span></td>
            <td style="${borderStyle}">${s.rank}</td>
            <td style="${borderStyle}font-weight:600;color:#4ade80;">${formatCurrency(s.salary)}</td>
            <td style="${borderStyle}">
                <div style="background:#1e293b;border-radius:4px;height:10px;width:100%;">
                    <div style="background:${color};height:10px;border-radius:4px;width:${bar}%;"></div>
                </div>
            </td>
        </tr>`;
    }).join('');
}

function renderGarageCosts() {
    const body = document.getElementById('garage-body');
    if (!body) return;
    body.innerHTML = DATA.garageCosts.map(row => {
        return `<tr>
            <td style="font-weight:600;">${row.item}</td>
            <td style="color:#f87171;font-weight:600;">${formatCurrency(row.cost)}</td>
            <td style="color:#94a3b8;font-size:0.85rem;">${row.note}</td>
        </tr>`;
    }).join('');
}

function renderDrugTransfer() {
    const body = document.getElementById('drugtransfer-body');
    if (!body) return;
    body.innerHTML = DATA.drugTransfer.map(row => {
        const profitColor = row.profit > 0 ? '#4ade80' : '#94a3b8';
        const hourlyText = row.hourly > 0 ? formatCurrency(row.hourly) : '—';
        return `<tr>
            <td style="font-weight:600;">${row.type}</td>
            <td style="color:#f87171;font-weight:600;">${row.buyPrice > 0 ? formatCurrency(row.buyPrice) : '—'}</td>
            <td style="color:#4ade80;font-weight:600;">${row.sellPrice > 0 ? formatCurrency(row.sellPrice) : '—'}</td>
            <td style="color:${profitColor};font-weight:600;">${row.profit > 0 ? formatCurrency(row.profit) : '—'}</td>
            <td style="color:#6366f1;">${row.time}</td>
            <td style="color:#eab308;font-weight:600;">${hourlyText}</td>
            <td style="color:#94a3b8;font-size:0.85rem;">${row.note}</td>
        </tr>`;
    }).join('');
}

// ── VEHICLE RENDERER ──────────────────────────────────────────
function renderVehicles() {
    const container = document.getElementById('vehicles-container');
    if (!container) return;
    
    // Groepeer voertuigen per categorie
    const grouped = {};
    DATA.vehicles.forEach(v => {
        if (!grouped[v.class]) grouped[v.class] = [];
        grouped[v.class].push(v);
    });

    container.innerHTML = Object.keys(grouped).map(category => {
        const vehicles = grouped[category];
        const categoryId = `cat-${category.replace(/\s+/g, '-').toLowerCase()}`;
        
        return `
            <div class="category-group">
                <div class="category-header" onclick="toggleCategory('${categoryId}')">
                    <span class="category-title">${category}</span>
                    <span class="category-count">${vehicles.length} voertuigen</span>
                    <span class="category-icon" id="icon-${categoryId}">+</span>
                </div>
                <div class="category-content" id="${categoryId}" style="display: none;">
                    <table>
                        <thead>
                            <tr>
                                <th>Naam (Model)</th>
                                <th>Prijs</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${vehicles.map(v => `
                                <tr>
                                    <td style="font-weight:600;color:#6366f1;">${v.name}</td>
                                    <td style="color:#4ade80;font-weight:600;">${formatCurrency(v.price)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');
}

function toggleCategory(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.innerText = '−';
    } else {
        content.style.display = 'none';
        icon.innerText = '+';
    }
}

// ── BURGER JOB RENDERERS ──────────────────────────────────────
function renderSimpleBurgerJob(dataKey, tbodyId) {
    const body = document.getElementById(tbodyId);
    if (!body) return;
    body.innerHTML = DATA[dataKey].map(row => {
        const payoutColor = row.payout > 0 ? '#4ade80' : row.payout < 0 ? '#f87171' : '#94a3b8';
        const payoutText = row.payout === 0 ? '—' : formatCurrency(row.payout);
        const hourlyText = row.hourly > 0 ? formatCurrency(row.hourly) : '—';
        return `<tr>
            <td style="font-weight:600;">${row.item}</td>
            <td style="color:${payoutColor};font-weight:600;">${payoutText}</td>
            <td style="color:#6366f1;">${row.time || '—'}</td>
            <td style="color:#eab308;font-weight:600;">${hourlyText}</td>
            <td style="color:#94a3b8;font-size:0.85rem;">${row.note}</td>
        </tr>`;
    }).join('');
}

function renderMijnwerker() {
    const body = document.getElementById('mijnwerker-body');
    if (!body) return;
    body.innerHTML = DATA.mijnwerker.map(row => {
        const costText = row.cost > 0 ? formatCurrency(row.cost) : '—';
        const payoutText = row.payout > 0 ? formatCurrency(row.payout) : '—';
        const hourlyText = row.hourly > 0 ? formatCurrency(row.hourly) : '—';
        return `<tr>
            <td style="font-weight:600;">${row.item}</td>
            <td style="color:#f87171;font-weight:600;">${costText}</td>
            <td style="color:#4ade80;font-weight:600;">${payoutText}</td>
            <td style="color:#6366f1;">${row.time || '—'}</td>
            <td style="color:#eab308;font-weight:600;">${hourlyText}</td>
            <td style="color:#94a3b8;font-size:0.85rem;">${row.note}</td>
        </tr>`;
    }).join('');
}

// Initial Call
document.addEventListener('DOMContentLoaded', () => {
    updateCalculations();
    renderCivilianJobs();
    renderJobSalaries();
    renderGarageCosts();
    renderDrugTransfer();
    renderVehicles();
    renderSimpleBurgerJob('gardening',   'gardening-body');
    renderSimpleBurgerJob('lumberjack',  'lumberjack-body');
    renderSimpleBurgerJob('trucking',    'trucking-body');
    renderSimpleBurgerJob('deurwaarder', 'deurwaarder-body');
    renderMijnwerker();
    renderSimpleBurgerJob('pizzajob',    'pizzajob-body');
    renderSimpleBurgerJob('stadsbeheer', 'stadsbeheer-body');
    renderSimpleBurgerJob('airport',     'airport-body');
});
