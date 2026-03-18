export interface Restaurant {
  name: string;
  address: string;
  description: string;
  walkingTime: number;
  busyness: string;
  busynessLevel: 'quiet' | 'medium' | 'busy';
  recommend: string;
  price: string;
  lat: number;
  lng: number;
}

export type BorrelVenue = Restaurant;

export interface Office {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  zoom: number;
  restaurants: Restaurant[];
  borrelVenues?: BorrelVenue[];
}

// Coordinate sources:
// ✓ Nominatim/OSM geocoded
// ~ Estimated from postcode / agent research / Amsterdam geography
export const offices: Office[] = [
  // ─── Achtergracht 4-22 ── NEW ───────────────────────────────────
  {
    id: 'achtergracht',
    name: 'Achtergracht',
    address: 'Achtergracht 4–22, Centrum',
    lat: 52.3630,  // ~ postcode 1017, Grachtengordel
    lng: 4.9015,
    zoom: 16,
    restaurants: [],
  },

  // ─── Amstel 1 ── existing ────────────────────────────────────────
  {
    id: 'amstel1',
    name: 'de Stopera',
    address: 'Amstel 1, Centrum',
    lat: 52.3675,  // ✓ research agent
    lng: 4.9013,
    zoom: 16,
    borrelVenues: [
      {
        name: "'t Hooischip",
        address: 'Amstel 53',
        description: 'Gezellige bruine kroeg direct aan de Amstel met een knus interieur en een fijn terras aan het water. Ideaal voor een eerste rondje na werk.',
        walkingTime: 4,
        busyness: 'Druk op vrijdagmiddag',
        busynessLevel: 'busy',
        recommend: 'Pils van de tap of een borrelplankje',
        price: '€',
        lat: 52.3660,
        lng: 4.9013,
      },
      {
        name: 'De Sluyswacht',
        address: 'Jodenbreestraat 1',
        description: 'Iconische scheve bruine kroeg naast het Rembrandthuis. Een van de mooiste terrasjes van Amsterdam, pal aan de gracht.',
        walkingTime: 5,
        busyness: 'Altijd vol, maar de sfeer maakt het goed',
        busynessLevel: 'busy',
        recommend: 'Biertje op het terras',
        price: '€',
        lat: 52.3694,
        lng: 4.9009,
      },
      {
        name: 'Katoen',
        address: 'Utrechtsestraat 52',
        description: 'Laid-back café-bar op de Utrechtsestraat met een fijne wijnkaart en goede borrelhapjes. Rustig en vriendelijk.',
        walkingTime: 9,
        busyness: 'Rustig na werk, voller na 19u',
        busynessLevel: 'quiet',
        recommend: 'Glas wijn of een craft gin-tonic',
        price: '€€',
        lat: 52.3621,
        lng: 4.8992,
      },
      {
        name: "Mulligan's",
        address: 'Amstel 100',
        description: 'Authentieke Ierse pub aan de Amstel met live muziek, veel bieren on tap en een warme stamkroeg-sfeer.',
        walkingTime: 6,
        busyness: 'Stampvol op vrijdag en zaterdag',
        busynessLevel: 'busy',
        recommend: 'Guinness of een Irish whiskey',
        price: '€',
        lat: 52.3638,
        lng: 4.9000,
      },
    ],
    restaurants: [
      {
        name: 'Tokoman',
        address: 'Waterlooplein 327',
        description: 'Legendarisch Surinaams eettentje op de hoek. Altijd een rij, altijd de moeite waard.',
        walkingTime: 4,
        busyness: 'Erg druk met de lunch',
        busynessLevel: 'busy',
        recommend: 'Roti met kip of pom',
        price: '€',
        lat: 52.3669,
        lng: 4.9023,
      },
      {
        name: 'Soup en Zo',
        address: 'Jodenbreestraat 94',
        description: 'Verse soepen en salades, snel klaar. Ideaal als je snel terug moet voor die 13u vergadering.',
        walkingTime: 4,
        busyness: 'Druk maar snel door',
        busynessLevel: 'medium',
        recommend: 'Dagsoep met meergranenbrood',
        price: '€',
        lat: 52.3690,
        lng: 4.9021,
      },
      {
        name: 'Grand Café De Jaren',
        address: 'Nieuwe Doelenstraat 20',
        description: 'Ruim grand café aan de Amstel met een heerlijk terras aan het water. Alleen voor lange lunches.',
        walkingTime: 7,
        busyness: 'Rustig na 13u',
        busynessLevel: 'busy',
        recommend: 'Club sandwich',
        price: '€€',
        lat: 52.3680,
        lng: 4.8954,
      },
      {
        name: 'De Hapjeshoek',
        address: 'Metrostation Waterlooplein',
        description: 'De metro in duiken voor één van de beste tentjes van Amsterdam - goed voor een regenachtige dag en een goede lunch.',
        walkingTime: 2,
        busyness: 'Rij gaat snel',
        busynessLevel: 'medium',
        recommend: 'Roti roll of broodje pom',
        price: '€',
        lat: 52.36758131103344,
        lng: 4.901944812890541,
      },
      {
        name: 'Sterk Staaltje',
        address: 'Staalstraat 12',
        description: 'Traiteur met lekkere belegde broodjes waar je ook nog ff een fles wijn kan halen voor dat diner die je die avond hebt',
        walkingTime: 2,
        busyness: 'Rij gaat snel',
        busynessLevel: 'medium',
        recommend: 'Alles op een foccacia',
        price: '€€',
        lat: 52.36840639230575,
        lng: 4.897014882201792,
      },
    ],
  },

  // ─── Anton de Komplein 150 ── existing ──────────────────────────
  {
    id: 'antonkomplein',
    name: 'Stadsloket Zuidoost',
    address: 'Anton de Komplein 150, Zuidoost',
    lat: 52.3162,  // ✓ Nominatim
    lng: 4.9565,
    zoom: 16,
    restaurants: [
      {
        name: 'Oma Ietje',
        address: 'Heesterveld 3',
        description: 'Bar-restaurant en ontmoetingsplek in Zuidoost met lunch van 11–15:30. Lokaal, laagdrempelig en gezellig.',
        walkingTime: 5,
        busyness: 'Rustig op weekdagen',
        busynessLevel: 'quiet',
        recommend: 'Dagmenu of soep met brood',
        price: '€',
        lat: 52.3170,
        lng: 4.9570,
      },
      {
        name: 'Lebkov & Sons Bijlmer',
        address: 'Hoekenrode 6',
        description: 'Specialty koffie, verse sandwiches en salades vlakbij Bijlmer Arena metro. Snel en kwalitatief.',
        walkingTime: 10,
        busyness: 'Druk in de ochtend en middag',
        busynessLevel: 'medium',
        recommend: 'Sandwich van de dag of salade',
        price: '€€',
        lat: 52.3143,
        lng: 4.9518,
      },
      {
        name: 'Brasserie Hoekenrode',
        address: 'Hoekenrode 2',
        description: 'Grand café bij de Johan Cruyff Arena. Ruime brasserie met internationale kaart, open op weekdagen.',
        walkingTime: 11,
        busyness: 'Rustig op werkdagen',
        busynessLevel: 'quiet',
        recommend: 'Burger of dagschotel',
        price: '€€',
        lat: 52.3143,
        lng: 4.9516,
      },
      {
        name: 'The Traveller',
        address: 'Bijlmerdreef 108',
        description: 'Wereldkeuken restaurant open voor lunch en diner. Multiculturele sfeer, groot terras.',
        walkingTime: 8,
        busyness: 'Rustig overdag',
        busynessLevel: 'quiet',
        recommend: 'Dagsuggestie of rijstgerecht',
        price: '€',
        lat: 52.3155,
        lng: 4.9497,
      },
    ],
  },

  // ─── Bos en Lommerplein 250 ── existing ─────────────────────────
  {
    id: 'boslommer',
    name: 'Stadsloket West',
    address: 'Bos en Lommerplein 250, West',
    lat: 52.3781,  // ✓ Nominatim
    lng: 4.8453,
    zoom: 16,
    restaurants: [
      {
        name: 'Florya Restaurant & Café',
        address: 'Bos en Lommerplantsoen 10',
        description: 'Turks-mediterraan restaurant aan het plantsoen. Heerlijke mezze in een groene omgeving.',
        walkingTime: 4,
        busyness: 'Rustig na 13u',
        busynessLevel: 'quiet',
        recommend: 'Mezze-bord of kebab van de dag',
        price: '€€',
        lat: 52.3753,
        lng: 4.8460,
      },
      {
        name: 'Samen Lunch & Juices',
        address: 'Bos en Lommerweg 72',
        description: 'Gezonde bowls, sandwiches en verse sappen. Licht en snel voor wie bewust bezig is.',
        walkingTime: 7,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Bowl van de dag of verse smoothie',
        price: '€',
        lat: 52.3826,
        lng: 4.8556,
      },
      {
        name: 'Bistro Bos',
        address: 'Bos en Lommerweg 77',
        description: 'Turks culinaire bistro tegenover Samen. Dagverse gerechten in een warme omgeving.',
        walkingTime: 7,
        busyness: 'Druk 12–13u',
        busynessLevel: 'medium',
        recommend: 'Dagsuggestie of turks brood met dips',
        price: '€',
        lat: 52.3825,
        lng: 4.8554,
      },
      {
        name: 'Patel Cafe',
        address: 'Bos en Lommerplein 250',
        description: 'In hetzelfde pand als het stadsloket. Niet makkelijker te bereiken — snelle lunch zonder omweg.',
        walkingTime: 1,
        busyness: 'Wisselend',
        busynessLevel: 'medium',
        recommend: 'Broodje of koffie met iets erbij',
        price: '€',
        lat: 52.3781,
        lng: 4.8453,
      },
    ],
  },

  // ─── Buikslotermeerplein 2000 ── existing ───────────────────────
  {
    id: 'buikslotermeer',
    name: 'Stadsloket Noord',
    address: 'Buikslotermeerplein 2000, Noord',
    lat: 52.4011,  // ✓ Nominatim
    lng: 4.9331,
    zoom: 16,
    restaurants: [
      {
        name: 'Café De Punt',
        address: 'Buikslotermeerplein 10',
        description: 'Direct aan het plein, een vertrouwde buurtcafé met goede dagschotels.',
        walkingTime: 2,
        busyness: 'Rustig overdag',
        busynessLevel: 'quiet',
        recommend: 'Dagsoep of uitsmijter',
        price: '€',
        lat: 52.4013,
        lng: 4.9325,
      },
      {
        name: 'Lunchroom Noorderlicht',
        address: 'Purmerweg 61',
        description: 'Rustige lunchroom met verse broodjes en warme gerechten. Buurtfavoriet.',
        walkingTime: 7,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Broodje geitenkaas of quiche',
        price: '€',
        lat: 52.4042,
        lng: 4.9288,
      },
      {
        name: 'Pizzeria Roma Noord',
        address: 'Mosplein 6',
        description: 'Familierestaurant met Italiaanse keuken. Snel, warm en vriendelijk.',
        walkingTime: 6,
        busyness: 'Druk 12–13u',
        busynessLevel: 'medium',
        recommend: 'Pizza margherita of pasta arrabbiata',
        price: '€',
        lat: 52.4022,
        lng: 4.9360,
      },
      {
        name: 'Bakkerij De Banne',
        address: 'Bernhardplein 4',
        description: 'Ambachtelijke bakkerij met een klein lunchhoek. Verse broodjes, goede koffie.',
        walkingTime: 5,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Broodje rookvlees of croissant',
        price: '€',
        lat: 52.3998,
        lng: 4.9305,
      },
    ],
  },

  // ─── Burgerweeshuispad 54 ── NEW ─────────────────────────────────
  {
    id: 'burgerweeshuispad',
    name: 'Burgerweeshuispad',
    address: 'Burgerweeshuispad 54, Zuidas',
    lat: 52.3400,  // ✓ Nominatim
    lng: 4.8541,
    zoom: 16,
    restaurants: [],
  },

  // ─── Cruquiusweg 5 ── NEW ────────────────────────────────────────
  {
    id: 'cruquiusweg5',
    name: 'Cruquiusweg 5',
    address: 'Cruquiusweg 5, Oost',
    lat: 52.3713,  // ✓ Nominatim
    lng: 4.9543,
    zoom: 16,
    restaurants: [],
  },

  // ─── Daniel Goedkoopstraat 7-9 ── NEW ───────────────────────────
  {
    id: 'danielgoedkoop',
    name: 'Daniel Goedkoopstraat',
    address: 'Daniel Goedkoopstraat 7–9, Zuid',
    lat: 52.3354,  // ✓ Nominatim
    lng: 4.9206,
    zoom: 16,
    restaurants: [],
  },

  // ─── De Entree 300 ── NEW ────────────────────────────────────────
  {
    id: 'deentree',
    name: 'De Entree 300',
    address: 'De Entree 300, Zuidoost',
    lat: 52.3105,  // ✓ Nominatim
    lng: 4.9394,
    zoom: 16,
    restaurants: [],
  },

  // ─── Entrade 600 ── NEW ─────────────────────────────────────────
  // Confirmed as "Entrada 600", postcode 1114 AA, Amsterdam-Duivendrecht
  {
    id: 'entrade600',
    name: 'Entrada 600',
    address: 'Entrada 600, Duivendrecht',
    lat: 52.3120,  // ~ postcode 1114 AA, Duivendrecht
    lng: 4.9450,
    zoom: 16,
    restaurants: [],
  },

  // ─── Jan van Galenstraat 323 ── NEW ─────────────────────────────
  {
    id: 'janvangalen',
    name: 'Jan van Galenstraat',
    address: 'Jan van Galenstraat 323, West',
    lat: 52.3710,  // ~ agent research
    lng: 4.8606,
    zoom: 16,
    restaurants: [],
  },

  // ─── Klaprozenweg 91 ── NEW ──────────────────────────────────────
  {
    id: 'klaprozenweg',
    name: 'Klaprozenweg',
    address: 'Klaprozenweg 91, Noord',
    lat: 52.4036,  // ~ agent research
    lng: 4.8830,
    zoom: 15,
    restaurants: [],
  },

  // ─── Nieuwe Achtergracht 100 ── NEW ─────────────────────────────
  {
    id: 'nieuweachtergracht',
    name: 'Nieuwe Achtergracht',
    address: 'Nieuwe Achtergracht 100, Centrum',
    lat: 52.3620,  // ~ agent research / UvA area
    lng: 4.9100,
    zoom: 16,
    restaurants: [],
  },

  // ─── Nieuwstraat 41 (Weesp) ── NEW ──────────────────────────────
  {
    id: 'weesp41',
    name: 'Nieuwstraat 41 (Weesp)',
    address: 'Nieuwstraat 41, Weesp',
    lat: 52.3092,  // ~ Weesp city centre
    lng: 5.0420,
    zoom: 16,
    restaurants: [],
  },

  // ─── Oranje-Vrijstaatplein 2 ── existing ────────────────────────
  {
    id: 'oranjevrijstaat',
    name: 'Stadsloket Oost',
    address: 'Oranje-Vrijstaatplein 2, Oost',
    lat: 52.356718170108074,  // ✓ manually checked
    lng: 4.931171526725374,
    zoom: 15,
    borrelVenues: [
      {
        name: 'Poesiat & Kater',
        address: 'Polderweg 648',
        description: 'Bruine kroeg aan de Amstel met een uitgebreide bierkaart en een groot zonnig terras. Buurtfavoriet in Oost.',
        walkingTime: 12,
        busyness: 'Vol na vijf uur',
        busynessLevel: 'busy',
        recommend: 'Lokaal craft bier of een jenever',
        price: '€',
        lat: 52.3510,
        lng: 4.9255,
      },
      {
        name: 'Elixir',
        address: 'Eerste Van Swindenstraat 571',
        description: 'Kleine, sfeervolle cocktailbar in de Dapperbuurt. Goed voor wie even wil ontspannen na werk met een goed gemixte cocktail.',
        walkingTime: 9,
        busyness: 'Rustig tot 19u',
        busynessLevel: 'quiet',
        recommend: 'Huiscocktail of een negroni',
        price: '€€',
        lat: 52.3615,
        lng: 4.9265,
      },
      {
        name: 'De Vergulden Eenhoorn',
        address: 'Pretoriusstraat 30',
        description: 'Klassieke Amsterdamse bruine kroeg in de Transvaalbuurt. Geen fratsen, gewoon een goed glas bier en goed gezelschap.',
        walkingTime: 7,
        busyness: 'Rustig doordeweeks',
        busynessLevel: 'quiet',
        recommend: 'Pils van de tap',
        price: '€',
        lat: 52.3535,
        lng: 4.9370,
      },
      {
        name: 'Louie Louie',
        address: 'Linnaeusstraat 11',
        description: 'Levendige café-bar op de Linnaeusstraat met een groot terras, goede muziek en een informele sfeer. Fijn om de week mee af te sluiten.',
        walkingTime: 5,
        busyness: 'Druk maar gezellig',
        busynessLevel: 'busy',
        recommend: 'Bier of een aperol spritz',
        price: '€€',
        lat: 52.3588,
        lng: 4.9290,
      },
    ],
    restaurants: [
      {
        name: 'Tigris en Eufraat',
        address: 'Javastraat 20H',
        description: 'Fantastische afhaal plek op de Javastraat, te combineren met een lekkere wandeling.',
        walkingTime: 13,
        busyness: 'Altijd wel eventjes wachten',
        busynessLevel: 'medium',
        recommend: 'Falafel wrap (met halloumi)',
        price: '€€',
        lat: 52.36339693741338,
        lng: 4.9341741515088,
      },
      {
        name: 'The Cottage Shop & Deli',
        address: 'Linnaeusstraat 76',
        description: 'Een kleine deli, afgesplitst van het restaurant met de gelijksoortige naam',
        walkingTime: 3,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Broodje Ploughman\'s',
        price: '€€€',
        lat: 52.35670849995435,
        lng: 4.927161868234979,
      },
      {
        name: 'Dappermarkt',
        address: 'Dapperstraat',
        description: 'De kleurrijkste markt van Amsterdam met verse hapjes van over de hele wereld.',
        walkingTime: 9,
        busyness: 'Levendig maar snel geholpen',
        busynessLevel: 'medium',
        recommend: 'Shoarma, verse falafel of Surinaams broodje',
        price: '€',
        lat: 52.3622,
        lng: 4.9310,
      },
    ],
  },

  // ─── Osdorpplein 946 ── existing ────────────────────────────────
  {
    id: 'osdorpplein',
    name: 'Stadsloket Nieuw-West',
    address: 'Osdorpplein 946, Nieuw-West',
    lat: 52.3581,  // ✓ Nominatim
    lng: 4.8054,
    zoom: 16,
    restaurants: [
      {
        name: 'Sallora',
        address: 'Osdorpplein 1010',
        description: 'Frans-Libanees restaurant op het Osdorpplein. Verfijnd en verrassend voor het plein.',
        walkingTime: 2,
        busyness: 'Rustig op weekdagen',
        busynessLevel: 'quiet',
        recommend: 'Mezze of salade Libanaise',
        price: '€€',
        lat: 52.3578,
        lng: 4.8065,
      },
      {
        name: 'Westmarket',
        address: 'Osdorpplein 736',
        description: 'Indoor food market met wereldkeukens — Aziatisch streetfood, Midden-Oosters en meer. Elke dag open.',
        walkingTime: 3,
        busyness: 'Wisselend per kraam',
        busynessLevel: 'medium',
        recommend: 'Kies zelf — elke kraam heeft z\'n specialiteit',
        price: '€ / €€',
        lat: 52.3581,
        lng: 4.8072,
      },
      {
        name: 'Coffee Blends',
        address: 'Tussen Meer 52',
        description: 'Café in het Osdorpplein-winkelcentrum met lunch. Goed voor een snelle, betaalbare hap.',
        walkingTime: 5,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Tosti of dagsandwich',
        price: '€',
        lat: 52.3570,
        lng: 4.8118,
      },
      {
        name: 'Red Elephant Thai Food',
        address: 'Slotermeerlaan (Sloterplas)',
        description: 'Thais restaurant met uitzicht op de Sloterplas. Rustig en een welkome verrassing in Nieuw-West.',
        walkingTime: 12,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Pad thai of groene curry',
        price: '€€',
        lat: 52.3625,
        lng: 4.8203,
      },
    ],
  },

  // ─── Oudezijds Voorburgwal 300 ── NEW ───────────────────────────
  {
    id: 'oudezijds',
    name: 'Stadsbank van Leningen',
    address: 'Oudezijds Voorburgwal 300, Centrum',
    lat: 52.3716,  // ~ Centrum, UvA/OV area
    lng: 4.8963,
    zoom: 16,
    restaurants: [],
  },

  // ─── Plein '40-'45 nr.1 ── NEW ──────────────────────────────────
  {
    id: 'plein4045',
    name: "Plein '40-'45",
    address: "Plein '40-'45 nr.1, Nieuw-West",
    lat: 52.3710,  // ~ Slotervaart / Nieuw-West
    lng: 4.8490,
    zoom: 16,
    restaurants: [],
  },

  // ─── President Kennedylaan 923 ── existing ───────────────────────
  {
    id: 'kennedylaan',
    name: 'Stadsloket Zuid',
    address: 'President Kennedylaan 923, Zuid',
    lat: 52.3405,  // ✓ Nominatim
    lng: 4.8940,
    zoom: 16,
    restaurants: [
      {
        name: 'Strandzuid',
        address: 'Europaplein 22',
        description: 'Strandclub en restaurant tussen de RAI en het Beatrixpark. Terras, zon en een ontspannen lunchtafel.',
        walkingTime: 8,
        busyness: 'Rustig op weekdagen',
        busynessLevel: 'quiet',
        recommend: 'Salade of dagsandwich aan het water',
        price: '€€',
        lat: 52.3414,
        lng: 4.8880,
      },
      {
        name: 'Café Schinkelhaven',
        address: 'Amstelveenseweg 126',
        description: 'Gastropub aan de Amstelveenseweg met dagvers lunchmenu. Goed terras, vriendelijke sfeer.',
        walkingTime: 12,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Burger of soep met brood',
        price: '€€',
        lat: 52.3546,
        lng: 4.8552,
      },
      {
        name: 'Bar Bonnie',
        address: 'Amstelveenseweg 226H',
        description: 'Café-bistro-bar op de Amstelveenseweg. Compact, gezellig en met een goede lunchkaart.',
        walkingTime: 10,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Broodje van de dag of dagsalade',
        price: '€€',
        lat: 52.3478,
        lng: 4.8616,
      },
      {
        name: 'Gent aan de Schinkel',
        address: 'Theophile de Bockstraat 1',
        description: 'Casual gastropub aan het Schinkelkanaal, open vanaf 11u. Heerlijk als het wat langer mag duren.',
        walkingTime: 15,
        busyness: 'Rustig op weekdagen',
        busynessLevel: 'quiet',
        recommend: 'Burgers of Belgische bistroklassiekers',
        price: '€€',
        lat: 52.3568,
        lng: 4.8619,
      },
    ],
  },

  // ─── Theemsweg 28 ── NEW ─────────────────────────────────────────
  // Confirmed postcode 1043 BJ → Sloterdijk bedrijventerrein
  {
    id: 'theemsweg',
    name: 'Theemsweg',
    address: 'Theemsweg 28, Sloterdijk',
    lat: 52.3940,  // ~ postcode 1043 BJ, Sloterdijk
    lng: 4.8410,
    zoom: 15,
    restaurants: [],
  },

  // ─── Van Hogendorpstraat 202 ── NEW ─────────────────────────────
  {
    id: 'hogendorpstraat',
    name: 'Van Hogendorpstraat',
    address: 'Van Hogendorpstraat 202, West',
    lat: 52.3795,  // ~ agent research, Landlust/West
    lng: 4.8714,
    zoom: 16,
    restaurants: [],
  },

  // ─── Vijzelstraat 32 (Herengracht 482) ── NEW ───────────────────
  {
    id: 'vijzelstraat',
    name: 'Stadsarchief',
    address: 'Vijzelstraat 32 / Herengracht 482, Centrum',
    lat: 52.3647,  // ~ De Bazel building, Vijzelstraat
    lng: 4.8966,
    zoom: 16,
    restaurants: [],
  },

  // ─── Weesperplein 8 ── NEW ───────────────────────────────────────
  {
    id: 'weesperplein',
    name: 'Weesperplein',
    address: 'Weesperplein 8, Centrum',
    lat: 52.3618,  // ~ Weesperplein metro area
    lng: 4.9090,
    zoom: 16,
    restaurants: [],
    borrelVenues: [
      {
        name: 'Lempicka',
        address: 'Weesperstraat 138',
        description: 'Sfeervol café-bar met een eclectisch interieur, goede wijnen en cocktails. Een fijne plek om de dag op te starten of af te sluiten.',
        walkingTime: 4,
        busyness: 'Rustig tot 19u',
        busynessLevel: 'quiet',
        recommend: 'Glas wijn of een huiscocktail',
        price: '€€',
        lat: 52.3610,
        lng: 4.9075,
      },
      {
        name: 'Café Noir',
        address: 'Weesperstraat 109',
        description: 'Donkere, intieme kroeg in de buurt van het Weesperplein. Geen toeristendrukte, gewoon een goed glas en een goed gesprek.',
        walkingTime: 3,
        busyness: 'Rustig, ook na werk',
        busynessLevel: 'quiet',
        recommend: 'Bier van de tap of een whisky',
        price: '€',
        lat: 52.3614,
        lng: 4.9078,
      },
      {
        name: 'Koosje',
        address: 'Weesperplein 2',
        description: 'Licht en ruim grand café pal op het Weesperplein. Goed terras, brede drankkaart en een ontspannen sfeer.',
        walkingTime: 2,
        busyness: 'Druk op het terras in de zomer',
        busynessLevel: 'medium',
        recommend: 'Bier of een fris glas rosé',
        price: '€€',
        lat: 52.3620,
        lng: 4.9085,
      },
      {
        name: 'Zoku',
        address: 'Weesperplein 26',
        description: 'Rooftop bar van hotel Zoku met uitzicht over de stad. Duurder maar het uitzicht en de sfeer zijn de moeite waard voor een bijzondere borrel.',
        walkingTime: 3,
        busyness: 'Rustig doordeweeks',
        busynessLevel: 'quiet',
        recommend: 'Cocktail of een glas prosecco met uitzicht',
        price: '€€€',
        lat: 52.3622,
        lng: 4.9095,
      },
      {
        name: 'Café de Magere Brug',
        address: 'Kerkstraat 1',
        description: 'Knusse bruine kroeg naast de iconische Magere Brug. Heerlijk terras langs de Amstel, rustig en typisch Amsterdams.',
        walkingTime: 14,
        busyness: 'Rustig na werk',
        busynessLevel: 'quiet',
        recommend: 'Pils op het terras aan de Amstel',
        price: '€',
        lat: 52.3618,
        lng: 4.8985,
      },
    ],
  },
];
