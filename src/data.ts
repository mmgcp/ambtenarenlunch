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
        description: 'Ruim grand café aan de Amstel met een van de grootste terrassen van de stad. Alleen voor lange lunches.',
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
        description: 'Even de metro in duiken voor één van de beste tentjes van Amsterdam - goed voor een regenachtige dag en een goede lunch.',
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
        description: 'Traiteur met lekkere belegde broodjes waar je ook snel fles wijn kan halen voor die ene verjaardag die je die avond hebt',
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
    lat: 52.3567,  // ✓ Nominatim
    lng: 4.9309,
    zoom: 15,
    restaurants: [
      {
        name: 'VanOost Restaurant',
        address: 'Mauritskade 61',
        description: 'Bekroond restaurant in hotel Pillows aan het Oosterpark. Rustige lunches met uitzicht op het park.',
        walkingTime: 13,
        busyness: 'Rustig op weekdagen',
        busynessLevel: 'quiet',
        recommend: 'Daglunch of seizoensgerecht',
        price: '€€€',
        lat: 52.3614,
        lng: 4.9155,
      },
      {
        name: 'BLEND Coffee & Wine',
        address: 'Oranje-Vrijstaatkade 21',
        description: 'Canal-side café vlak naast het kantoor. Ontbijt, lunch en koffie in een rustige omgeving.',
        walkingTime: 3,
        busyness: 'Rustig',
        busynessLevel: 'quiet',
        recommend: 'Dagsandwich of avocadotoast',
        price: '€€',
        lat: 52.3612,
        lng: 4.9258,
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
      {
        name: "Brouwerij 't IJ",
        address: 'Funenkade 7',
        description: 'Beroemde brouwerij in een windmolen aan het Funenpark. De lunch is ook uitstekend.',
        walkingTime: 14,
        busyness: 'Druk in de middag',
        busynessLevel: 'medium',
        recommend: 'Dagsandwich of borrelhapjes',
        price: '€€',
        lat: 52.3667,
        lng: 4.9263,
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
    name: 'Stadsbank van leningen',
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
  },
];
