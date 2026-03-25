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
  // ─── Achtergracht 4-22 ──────────────────────────────────────────
  {
    id: 'achtergracht',
    name: 'Achtergracht',
    address: 'Achtergracht 4–22, Centrum',
    lat: 52.361125822089726,  // ✓ manually checked
    lng: 4.901475126771981,
    zoom: 16,
    restaurants: [],
  },

  // ─── Amstel 1 ────────────────────────────────────────────────────
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
        description: 'Gezellige bruine kroeg direct aan de Amstel met een knus interieur en een paar tafeltjes buiten, die vaak bezet zijn.',
        walkingTime: 4,
        busyness: 'Druk op vrijdagmiddag',
        busynessLevel: 'busy',
        recommend: 'Fluitje in de zon',
        price: '€',
        lat: 52.36654505775529,
        lng: 4.901766103642083,
      },
      {
        name: 'De Sluyswacht',
        address: 'Jodenbreestraat 1',
        description: 'Iconische bruine kroeg. Mooi terras, en binnen te reserveren voor grotere groepen. Acoustiek is binnen slecht als het vol is = hard praten.',
        walkingTime: 5,
        busyness: 'Vaak vol!',
        busynessLevel: 'busy',
        recommend: 'Biertje in de zon',
        price: '€',
        lat: 52.36998767945813,
        lng: 4.902220224394675,
      },
      {
        name: 'Café Katoen',
        address: 'Oude Turfmarkt 153',
        description: 'Laid-back café-bar met terras waar je mensen kan kijken met lekker aanbod aan drank. Vriendelijke bediening.',
        walkingTime: 9,
        busyness: 'Vol als de zon schijnt',
        busynessLevel: 'medium',
        recommend: 'Home-made iced tea of cocktail',
        price: '€€',
        lat: 52.367802978252676,
        lng: 4.894158747908757,
      },
      {
        name: "Mulligan's Irish Music Bar",
        address: 'Amstel 100',
        description: 'Authentieke Ierse pub aan de Amstel met Ierse live muziek, veel bieren on tap en een warme stamkroeg-sfeer. Split the G.',
        walkingTime: 6,
        busyness: 'Stampvol op vrijdag en zaterdag',
        busynessLevel: 'busy',
        recommend: 'Guinness',
        price: '€',
        lat: 52.367140149950316,
        lng: 4.896704853758478,
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

  // ─── Anton de Komplein 150 ───────────────────────────────────────
  {
    id: 'antonkomplein',
    name: 'Stadsloket Zuidoost',
    address: 'Anton de Komplein 150, Zuidoost',
    lat: 52.31616943546332,  // ✓ manual check
    lng: 4.957711328112956,
    zoom: 16,
    borrelVenues: [],
    restaurants: [],
  },

  // ─── Bos en Lommerplein 250 ──────────────────────────────────────
  {
    id: 'boslommer',
    name: 'Stadsloket West',
    address: 'Bos en Lommerplein 250, West',
    lat: 52.37815315997885,  // ✓ manual check
    lng: 4.845668793318594,
    zoom: 16,
    borrelVenues: [],
    restaurants: [],
  },

  // ─── Buikslotermeerplein 2000 ────────────────────────────────────
  {
    id: 'buikslotermeer',
    name: 'Stadsloket Noord',
    address: 'Buikslotermeerplein 2000, Noord',
    lat: 52.40100956829417,  // ✓ manual check
    lng: 4.933015403106139,
    zoom: 16,
    borrelVenues: [],
    restaurants: [],
  },

  // ─── Cruquiusweg 5 ───────────────────────────────────────────────
  {
    id: 'cruquiusweg5',
    name: 'Cruquiusweg 5',
    address: 'Cruquiusweg 5, Oost',
    lat: 52.3691488587527,  // ✓ manual check
    lng: 4.934819094007374,
    zoom: 16,
    borrelVenues: [
      {
        name: 'Boulevard Café',
        address: 'Cruquiusweg 3',
        description: 'Gezellige kroeg met aardig personeel en lekker bruin fruit om de werkdag af te sluiten',
        walkingTime: 1,
        busyness: 'Kan zelfs gereserveerd worden',
        busynessLevel: 'medium',
        recommend: 'Fluitje aan de bar',
        price: '€',
        lat: 52.368623084126256,
        lng: 4.934513431160074,
      },
      {
        name: 'Pompstation',
        address: 'Zeeburgerdijk 52',
        description: 'Restaurant in een oud pompstation waar soms live muziek is, met een terras achter. Kom voor een glas wijn of een cocktail, blijf evt. hangen voor eten (weinig vega!).',
        walkingTime: 7,
        busyness: 'Wisselend',
        busynessLevel: 'quiet',
        recommend: 'Cocktail buiten',
        price: '€€€',
        lat: 52.36603955412276, 
        lng: 4.933936354054379,
      },
      {
        name: 'Brouwerij \'t IJ',
        address: 'Zeeburgererstraat 1',
        description: 'Leef met je kop omhoog na een werkdag bij deze Amsterdamse Brouwerij.',
        walkingTime: 12,
        busyness: 'Wisselend',
        busynessLevel: 'medium',
        recommend: 'IJwit in de zon',
        price: '€€',
        lat: 52.366977682830466, 
        lng: 4.926423049647451, 
      }
    ],
    restaurants: [],
  },

  // ─── Daniel Goedkoopstraat 7-9 ───────────────────────────────────
  {
    id: 'danielgoedkoop',
    name: 'Daniël Goedkoopstraat',
    address: 'Daniël Goedkoopstraat 7–9, Zuid',
    lat: 52.335650311851914,  // ✓ manual check
    lng: 4.9206224552165505,
    zoom: 16,
    borrelVenues: [
      {
        name: 'tHuis aan de Amstel',
        address: 'Zeeburgererstraat 1',
        description: 'Café in wat voorheen de ambtswoning was van de directeur van de Zuidergasfabriek. Sfeervol en met mooie tuin.',
        walkingTime: 15,
        busyness: 'Wisselend',
        busynessLevel: 'medium',
        recommend: '...',
        price: '€€',
        lat: 52.339632830731695, 
        lng: 4.915490839851669,
      }
    ],
    restaurants: [
      {
        name: 'tHuis aan de Amstel',
        address: 'Zeeburgererstraat 1',
        description: 'Café in wat voorheen de ambtswoning was van de directeur van de Zuidergasfabriek. Sfeervol en met mooie tuin, als je tijd hebt voor een lange lunch.',
        walkingTime: 15,
        busyness: 'Wisselend',
        busynessLevel: 'medium',
        recommend: '...',
        price: '€€',
        lat: 52.339632830731695, 
        lng: 4.915490839851669,
      },
       {
        name: 'Fetch',
        address: 'Daniël Goedkoopstraat 8',
        description: 'Tegenover even snel een broodje en goeie koffie halen, voor als je snel doormoet.',
        walkingTime: 15,
        busyness: 'Soms wat drukker rond de lunch',
        busynessLevel: 'quiet',
        recommend: '...',
        price: '€',
        lat: 52.33502865389017, 
        lng: 4.922170467078357, 
      }
    ],
  },

  // ─── Entrada 600 ─────────────────────────────────────────────────
  // Confirmed as "Entrada 600", postcode 1114 AA, Amsterdam-Duivendrecht
  {
    id: 'entrade600',
    name: 'Entrada 600',
    address: 'Entrada 600, Duivendrecht',
    lat: 52.330037476488336,  // ~ manual check
    lng: 4.931923828232873,
    zoom: 16,
    restaurants: [],
  },

  // ─── Jan van Galenstraat 323 ─────────────────────────────────────
  {
    id: 'janvangalen',
    name: 'Jan van Galenstraat',
    address: 'Jan van Galenstraat 323, West',
    lat: 52.3717497186532,  // ~ manual check
    lng: 4.844604110840266,
    zoom: 16,
    restaurants: [],
  },

  // ─── Klaprozenweg 91 ─────────────────────────────────────────────
  {
    id: 'klaprozenweg',
    name: 'Klaprozenweg',
    address: 'Klaprozenweg 91, Noord',
    lat: 52.405970911481496,  // ~ manual check
    lng: 4.891000724531664,
    zoom: 15,
    borrelVenues: [
      {
        name: "Helling7",
        address: "tt. Melissaweg 57",
        description: "Geniet op het terras met zicht op de hele stad, goede wijnkaart en lekker eten voor als het laat wordt.",
        walkingTime: 8,
        busyness: "",
        busynessLevel: "medium",
        recommend: "Glas wijn in de zon",
        price: "€€",
        lat: 52.40363790057515, 
        lng: 4.895178920198377, 
      }
    ],
    restaurants: [
      {
        name: 'Kometen brood & café',
        address: 'Ms. van Riemsdijkweg 2',
        description: 'Broodbakker die tijdens corona zijn roeping heeft gevonden. Afhalen of zitten. Lekkere broodjes!',
        walkingTime: 5,
        busyness: 'Soms wat drukker rond de lunch',
        busynessLevel: 'medium',
        recommend: 'Anything goes + een glas melk.',
        price: '€€',
        lat: 52.405918684668684, 
        lng: 4.885019038158919, 
      },
      {
        name: 'Kebec corner',
        address: 'Tt. Melaniaweg 12',
        description: 'Fantastisch lekkere broodjes & pizza\'s die je per stuk haalt met hele sympathieke eigenaar.',
        walkingTime: 4,
        busyness: 'Soms wat drukker rond de lunch, maar gaat snel',
        busynessLevel: 'quiet',
        recommend: 'Pizza Valentino + evt. glas witte wijn (shhh!)',
        price: '€',
        lat: 52.403656223323566, 
        lng: 4.892101331966502,
      },
      {
        name: 'Bagels & Beans',
        address: 'Mt. Lincolnweg 16',
        description: 'Klassieker die er nog altijd is. Vaak wel even wachten, maar je kan afhaal doen.',
        walkingTime: 2,
        busyness: 'Soms wat drukker rond de lunch',
        busynessLevel: 'medium',
        recommend: 'Bagel cream cheese blijft goed',
        price: '€€',
        lat: 52.40467849030255,
        lng: 4.890367796734401, 
      }
    ],
  },

  // ─── Nieuwe Achtergracht 100 ─────────────────────────────────────
  {
    id: 'nieuweachtergracht',
    name: 'GGD Amsterdam',
    address: 'Nieuwe Achtergracht 100, Centrum',
    lat: 52.362538187767875,  // ~ manual check
    lng: 4.909289040988535,
    zoom: 16,
    restaurants: [],
  },

  // ─── Nieuwstraat 70A (Weesp) ─────────────────────────────────────
  {
    id: 'weesp41',
    name: 'Stadsloket Weesp',
    address: 'Nieuwstraat 70A, Weesp',
    lat: 52.306588812186746,  // ~ manual check
    lng: 5.042867284842718,
    zoom: 16,
    restaurants: [],
  },

  // ─── Oranje-Vrijstaatplein 2 ─────────────────────────────────────
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
        description: 'Brouwerij in de stad met groot terras en ruimte binnen om te reserveren voor die ene afscheidsborrel. Voor ieder wat wils!',
        walkingTime: 12,
        busyness: 'Groot terras en grote ruimte - vaak nog wel plek',
        busynessLevel: 'medium',
        recommend: 'Little smullings,
        price: '€',
        lat: 52.357840034639786, 
        lng: 4.936261903620158,
      },
      {
        name: 'Restaurant Elixir',
        address: 'Batjanstraat 1a',
        description: 'Gezellige kroeg in de buurt - ook te huren voor hele dagen. Goed voor wie even wil ontsnappen aan de drukte.',
        walkingTime: 9,
        busyness: 'Rustig tot 19u',
        busynessLevel: 'quiet',
        recommend: '-',
        price: '€€',
        lat: 52.359591306277984, 
        lng: 4.9386922489934015,
      },
      {
        name: 'De Vergulden Eenhoorn',
        address: 'Ringdijk 58',
        description: 'Tuin midden in de stad. Soms leuke ludieke acties zoals oester maandag, en je kan er petanque spelen.',
        walkingTime: 7,
        busyness: 'Rustig doordeweeks',
        busynessLevel: 'medium',
        recommend: 'Fluitje',
        price: '€€',
        lat: 52.351264687221196, 
        lng: 4.921364234306341,
      },
      {
        name: 'Louie Louie',
        address: 'Linnaeusstraat 11a',
        description: 'Levendige café-bar op de Linnaeusstraat met een groot terras met heaters, en lekkere hapjes.',
        walkingTime: 5,
        busyness: 'Druk maar gezellig',
        busynessLevel: 'busy',
        recommend: 'Biertje met wat hapjes',
        price: '€€',
        lat: 52.3631306913638, 
        lng: 4.924159247142869,
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
      }
    ],
  },

  // ─── Osdorpplein 946 ─────────────────────────────────────────────
  {
    id: 'osdorpplein',
    name: 'Stadsloket Nieuw-West',
    address: 'Osdorpplein 946, Nieuw-West',
    lat: 52.35802129125829,  // ✓ manual check
    lng: 4.805348781678481,
    zoom: 16,
    restaurants: [
    ],
  },

  // ─── Oudezijds Voorburgwal 300 ───────────────────────────────────
  {
    id: 'oudezijds',
    name: 'Stadsbank van Leningen',
    address: 'Oudezijds Voorburgwal 300, Centrum',
    lat: 52.37056625214323,  // ~ manual check
    lng: 4.894381351962248,
    zoom: 16,
    borrelVenues: [
      { name: 'Bar Jones',
        address: 'Nes 33',
        description: 'Geweldige kroeg in het centrum met goede biertjes op de tap en cocktails en woonkamer achtige sfeer.',
        walkingTime: 1,
        busyness: 'Druk maar gezellig',
        busynessLevel: 'medium',
        recommend: 'Fluitje Maneblusser of een negroni',
        price: '€€',
        lat: 52.371840578584695, 
        lng: 4.893734466725462}
    ],
    restaurants: [],
  },

  // ─── Plein '40-'45 nr.1 ──────────────────────────────────────────
  {
    id: 'plein4045',
    name: "(Tuinstadhuis) Plein '40-'45",
    address: "Plein '40-'45 nr.1, Nieuw-West",
    lat: 52.37912608530431,  // ~ manual check
    lng: 4.821023941050391,
    zoom: 16,
    restaurants: [],
  },

  // ─── President Kennedylaan 923 ───────────────────────────────────
  {
    id: 'kennedylaan',
    name: 'Stadsloket Zuid',
    address: 'President Kennedylaan 923, Zuid',
    lat: 52.3405,  // ✓ Nominatim
    lng: 4.8940,
    zoom: 16,
    restaurants: [
    ],
  },

  // ─── Theemsweg 28 ────────────────────────────────────────────────
  // Confirmed postcode 1043 BJ → Sloterdijk bedrijventerrein
  {
    id: 'theemsweg',
    name: 'Theemsweg',
    address: 'Theemsweg 28, Sloterdijk',
    lat: 52.38996629736025,  // ~ manual check
    lng: 4.811529207494663,
    zoom: 15,
    restaurants: [],
  },

  // ─── Vijzelstraat 32 ─────────────────────────────────────────────
  {
    id: 'vijzelstraat',
    name: 'Stadsarchief',
    address: 'Vijzelstraat 32 / Herengracht 482, Centrum',
    lat: 52.36455895684436,  // ~ manual check
    lng: 4.892308841565936,
    zoom: 16,
    restaurants: [],
  },

  // ─── Weesperplein 8 ──────────────────────────────────────────────
  {
    id: 'weesperplein',
    name: 'Weesperplein',
    address: 'Weesperplein 8, Centrum',
    lat: 52.36168070513284,  // ~ manual check
    lng: 4.907024126381902,
    zoom: 16,
    restaurants: [],
    borrelVenues: [
      {
        name: 'Bar Lempicka',
        address: 'Sarphatistraat 23',
        description: 'Sfeervol café-bar met nog lange avondzon. Reserveren mogelijk!',
        walkingTime: 3,
        busyness: 'Rustig tot 19u',
        busynessLevel: 'quiet',
        recommend: 'Fluitje in de zon',
        price: '€€',
        lat: 52.3607790915973, 
        lng: 4.905252635500947,
      },
      {
        name: 'Café Noir',
        address: 'Weesperplein 19',
        description: 'Vaste prik van de GGD en R&E. Plek voor een goed glas bier en een goed gesprek.',
        walkingTime: 1,
        busyness: 'Rustig, ook na werk',
        busynessLevel: 'quiet',
        recommend: 'Fluitje',
        price: '€',
        lat: 52.36184471048771, 
        lng: 4.90832556611235,
      },
      {
        name: 'Café Koosje',
        address: 'Plantage Middenlaan 37',
        description: 'Gezellig café in de Plantagebuurt met buiten ook plek, als je geluk hebt.',
        walkingTime: 10,
        busyness: 'Klein terras, groot binnen',
        busynessLevel: 'medium',
        recommend: 'Fluitje',
        price: '€',
        lat: 52.36683940431849, 
        lng: 4.9121705459490395,
      },
      {
        name: 'Zoku',
        address: 'Weesperstraat 105',
        description: 'Rooftop bar van hotel Zoku met uitzicht over de stad. Duurder maar het uitzicht en de sfeer zijn de moeite waard voor een bijzondere borrel.',
        walkingTime: 3,
        busyness: 'Rustig doordeweeks',
        busynessLevel: 'quiet',
        recommend: 'Cocktail!',
        price: '€€€',
        lat: 52.36402832591215, 
        lng: 4.907382191978702,
      },
      {
        name: 'Café de Magere Brug',
        address: 'Kerkstraat 1',
        description: 'Knusse bruine kroeg naast de iconische Magere Brug. Heerlijk terras langs de Amstel, vaak vol op zonnige dagen.',
        walkingTime: 10,
        busyness: 'Rustig na werk',
        busynessLevel: 'quiet',
        recommend: 'Fluitje',
        price: '€',
        lat: 52.36389912046211, 
        lng: 4.903257119501098,
      },
    ],
  },
];
