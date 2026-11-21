// Places for /passport. id = ISO 3166 numeric code (the world-atlas map ids).
// dot = [lon, lat] for places too small to see on the map.
export type Place = {
  name: string;
  id: string;
  flag: string;
  region: string;
  territory?: string; // the country it belongs to; not counted as a country
  iso2?: string; // territories: ISO alpha-2, so Flighty airports there map to the territory
  note?: string;
  cities?: string[]; // 2+ cities open as a list; 1 city shows as gray text
  dot?: [number, number];
};

export const regions = ['North America', 'South America', 'Europe', 'Asia', 'Antarctica'];

export const places: Place[] = [
  { name: 'United States', id: '840', flag: '🇺🇸', region: 'North America', cities: [
    'New York', 'Philadelphia', 'Washington, DC', 'Baltimore', 'Chicago', 'St. Louis', 'Nashville', 'Atlanta',
    'Miami', 'Fort Lauderdale', 'Key West', 'Orlando', 'Tampa', 'Houston', 'Grand Canyon', 'Las Vegas',
    'Yellowstone', 'San Diego', 'Los Angeles', 'San Francisco', 'Seattle', 'Hawaii', 'Smoky Mountains',
    'Kansas City', 'Columbus', 'Alaska',
  ] },
  { name: 'Canada', id: '124', flag: '🇨🇦', region: 'North America', cities: ['Victoria'] },
  { name: 'Mexico', id: '484', flag: '🇲🇽', region: 'North America', cities: ['Mexico City'] },
  { name: 'Panama', id: '591', flag: '🇵🇦', region: 'North America' },
  { name: 'Costa Rica', id: '188', flag: '🇨🇷', region: 'North America' },
  { name: 'Dominican Republic', id: '214', flag: '🇩🇴', region: 'North America', cities: ['Punta Cana', 'Puerto Plata'] },
  { name: 'The Bahamas', id: '044', flag: '🇧🇸', region: 'North America', cities: ['Nassau'], dot: [-77.4, 25.0] },
  { name: 'St. Kitts and Nevis', id: '659', flag: '🇰🇳', region: 'North America', dot: [-62.7, 17.3] },
  { name: 'Puerto Rico', id: '630', flag: '🇵🇷', region: 'North America', territory: 'United States', iso2: 'PR', dot: [-66.5, 18.2] },
  { name: 'Peru', id: '604', flag: '🇵🇪', region: 'South America', cities: ['Lima', 'Cusco'] },
  { name: 'Argentina', id: '032', flag: '🇦🇷', region: 'South America', cities: ['Buenos Aires', 'Córdoba', 'Iguazú', 'Ushuaia'] },
  { name: 'Brazil', id: '076', flag: '🇧🇷', region: 'South America', cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Florianópolis', 'Recife'] },
  { name: 'United Kingdom', id: '826', flag: '🇬🇧', region: 'Europe', cities: ['London'] },
  { name: 'Netherlands', id: '528', flag: '🇳🇱', region: 'Europe', cities: ['Amsterdam'] },
  { name: 'Belgium', id: '056', flag: '🇧🇪', region: 'Europe', cities: ['Brussels'] },
  { name: 'Germany', id: '276', flag: '🇩🇪', region: 'Europe', cities: ['Black Forest'] },
  { name: 'Portugal', id: '620', flag: '🇵🇹', region: 'Europe', cities: ['Lisbon'] },
  { name: 'France', id: '250', flag: '🇫🇷', region: 'Europe', cities: ['Paris', 'Nice', 'Évian'] },
  { name: 'Switzerland', id: '756', flag: '🇨🇭', region: 'Europe', cities: ['Geneva', 'Zermatt'] },
  { name: 'Italy', id: '380', flag: '🇮🇹', region: 'Europe', cities: ['Rome', 'Milan', 'Venice'] },
  { name: 'Norway', id: '578', flag: '🇳🇴', region: 'Europe', cities: ['Oslo', 'Flåm'] },
  { name: 'Svalbard', id: '744', flag: '🇸🇯', region: 'Europe', territory: 'Norway', iso2: 'SJ', note: 'Arctic', dot: [16.0, 78.2] },
  { name: 'Finland', id: '246', flag: '🇫🇮', region: 'Europe', cities: ['Helsinki'] },
  { name: 'Turkey', id: '792', flag: '🇹🇷', region: 'Asia', cities: ['Istanbul'] },
  { name: 'United Arab Emirates', id: '784', flag: '🇦🇪', region: 'Asia', cities: ['Dubai', 'Abu Dhabi'] },
  { name: 'India', id: '356', flag: '🇮🇳', region: 'Asia', cities: ['Delhi', 'Varanasi', 'Kolkata', 'Ahmedabad', 'Mumbai', 'Hyderabad', 'Tirupati', 'Chennai', 'Madurai', 'Tiruchendur', 'Kochi', 'Bangalore', 'Kerala', 'Ladakh', 'Rameswaram', 'Kanchipuram'] },
  { name: 'China', id: '156', flag: '🇨🇳', region: 'Asia', cities: ['Shenzhen'] },
  { name: 'Hong Kong', id: '344', flag: '🇭🇰', region: 'Asia', territory: 'China', iso2: 'HK', dot: [114.17, 22.3] },
  { name: 'Japan', id: '392', flag: '🇯🇵', region: 'Asia', cities: ['Tokyo', 'Kyoto', 'Osaka', 'Kanazawa'] },
  { name: 'Thailand', id: '764', flag: '🇹🇭', region: 'Asia', cities: ['Bangkok'] },
  { name: 'Malaysia', id: '458', flag: '🇲🇾', region: 'Asia', cities: ['Kuala Lumpur', 'Johor'] },
  { name: 'Singapore', id: '702', flag: '🇸🇬', region: 'Asia', dot: [103.8, 1.35] },
  { name: 'Indonesia', id: '360', flag: '🇮🇩', region: 'Asia', cities: ['Bali'] },
  { name: 'Antarctica', id: '010', flag: '🇦🇶', region: 'Antarctica', territory: 'no country' },
];

// Trips from photo GPS data (2019 on) and Flighty, oldest first in this list. places = country, territory,
// or city names from the lists above, in visit order. US drives near home are left out.
export const trips: { when: string; year: number; places: string[] }[] = [
  { year: 2017, when: 'Jul – Aug', places: ['United Arab Emirates', 'India'] }, // from Flighty: Dubai Jul 29 – Aug 1, then Hyderabad
  { year: 2018, when: 'Jul', places: ['Seattle', 'Alaska', 'Victoria'] }, // from Flighty; no GPS photos
  { year: 2019, when: 'Aug', places: ['United Kingdom', 'Belgium', 'Germany', 'Switzerland', 'Italy', 'France'] },
  { year: 2020, when: 'Jun', places: ['Atlanta', 'Houston'] },
  { year: 2020, when: 'Aug', places: ['Houston'] },
  { year: 2021, when: 'Aug', places: ['Hawaii'] },
  { year: 2022, when: 'Jan', places: ['Chicago'] }, // AA EWR-ORD Jan 10, ORD-EWR Jan 14 (emails)
  { year: 2022, when: 'May', places: ['Chicago'] }, // Lyft airport ride May 15, Uber rides to May 29 (Gmail)
  { year: 2022, when: 'Jul', places: ['Canada'] },
  { year: 2022, when: 'Jul – Aug', places: ['Chicago'] }, // AA 1211 EWR-ORD, Hyatt House, Divvy rides Jul 28 – Aug 20
  { year: 2022, when: 'Nov', places: ['Portugal'] },
  { year: 2023, when: 'Jan', places: ['Chicago'] }, // UA PHL-ORD Jan 9, ORD-EWR Jan 14
  { year: 2023, when: 'Jan – Feb', places: ['Turkey'] },
  { year: 2023, when: 'Apr', places: ['Miami', 'Tampa'] },
  { year: 2023, when: 'Oct – Nov', places: ['Netherlands'] },
  { year: 2023, when: 'Nov', places: ['Las Vegas', 'Grand Canyon'] },
  { year: 2024, when: 'Feb', places: ['San Francisco'] },
  { year: 2024, when: 'Mar', places: ['Dominican Republic'] },
  { year: 2024, when: 'Apr', places: ['Chicago'] },
  { year: 2024, when: 'Apr – May', places: ['San Diego', 'San Francisco'] },
  { year: 2024, when: 'Jun', places: ['Atlanta'] },
  { year: 2024, when: 'Aug – Sep', places: ['Costa Rica'] },
  { year: 2024, when: 'Sep', places: ['Thailand', 'Singapore', 'Japan'] },
  { year: 2024, when: 'Oct', places: ['Nashville', 'Smoky Mountains', 'Chicago'] },
  { year: 2024, when: 'Nov', places: ['St. Kitts and Nevis'] },
  { year: 2024, when: 'Dec', places: ['Panama', 'Argentina', 'Antarctica'] },
  { year: 2024, when: 'Dec', places: ['Kansas City'] },
  { year: 2025, when: 'Mar', places: ['Brazil'] },
  { year: 2025, when: 'Mar', places: ['Chicago'] },
  { year: 2025, when: 'Mar', places: ['Dominican Republic'] },
  { year: 2025, when: 'Mar – Apr', places: ['Norway', 'Switzerland', 'France', 'Italy'] },
  { year: 2025, when: 'Jun', places: ['Atlanta'] },
  { year: 2025, when: 'Jul', places: ['Tampa'] },
  { year: 2025, when: 'Jul', places: ['The Bahamas', 'Puerto Rico', 'Dominican Republic'] },
  { year: 2025, when: 'Sep', places: ['China', 'Hong Kong'] },
  { year: 2025, when: 'Sep – Oct', places: ['India'] },
  { year: 2025, when: 'Nov', places: ['Mexico'] },
  { year: 2025, when: 'Dec', places: ['United Arab Emirates'] },
  { year: 2025, when: 'Dec', places: ['Columbus'] },
  { year: 2026, when: 'Jan – Mar', places: ['Argentina', 'Brazil', 'Peru'] },
  { year: 2026, when: 'Mar', places: ['Key West'] },
  { year: 2026, when: 'Apr – May', places: ['India', 'Malaysia', 'Singapore'] },
  { year: 2026, when: 'Jun', places: ['Japan'] },
  { year: 2026, when: 'Jun', places: ['Finland', 'Svalbard'] },
  { year: 2026, when: 'Jun – Jul', places: ['France'] },
  { year: 2026, when: 'Jul', places: ['Yellowstone'] },
  { year: 2026, when: 'Jul', places: ['United Kingdom'] },
  { year: 2026, when: 'Aug – Sep', places: ['Indonesia'] },
  { year: 2026, when: 'Sep – Oct', places: ['India'] },
  { year: 2026, when: 'Nov', places: ['Puerto Rico'] },
].reverse();

// Travel that Flighty does not have, for the route replay on /passport: the place lights up on
// the date, and a boat trip also draws a line ([lon, lat] points, approximate).
export const voyages: { date: string; places: string[]; boat?: [number, number][] }[] = [
  // Alaska cruise, a loop from Seattle: north outside Vancouver Island to Juneau, Skagway,
  // Ketchikan, then back down the coast to Victoria, BC, and Seattle (approximate path).
  { date: '2018-07-30', places: ['United States', 'Canada'], boat: [
    [-122.4, 47.6], [-124.8, 48.45], [-128.5, 49.6], [-132.8, 52.6], [-136.0, 56.4],
    [-134.4, 58.3], [-135.3, 59.45], [-134.9, 58.4], [-131.6, 55.3], [-129.4, 52.6],
    [-127.3, 50.6], [-124.4, 49.3], [-123.37, 48.42], [-122.4, 47.6],
  ] },
  { date: '2022-07-01', places: ['Canada'] },
  // Antarctica cruise from Ushuaia and back, Dec 11–20 (route from photo GPS): Drake Passage, South Shetlands,
  // stops down the Peninsula to the Lemaire Channel area, north again, Drake Passage, Beagle Channel.
  { date: '2024-12-11', places: ['Antarctica'], boat: [
    [-68.3, -54.8], [-66.9, -54.95], [-63.9, -57.9], [-61.7, -60.3], [-59.74, -62.41], [-59.98, -62.96],
    [-62.67, -64.81], [-63.06, -64.74], [-64.06, -65.11], [-64.44, -64.98], [-61.76, -64.5], [-61.23, -63.87],
    [-63.52, -59.95], [-65.1, -55.86], [-66.9, -54.95], [-68.3, -54.8],
  ] },
  // Caribbean cruise from Fort Lauderdale and back (between the Jul 11 and Jul 21 flights).
  { date: '2025-07-13', places: ['The Bahamas', 'Puerto Rico', 'Dominican Republic'], boat: [
    [-80.1, 26.1], [-77.35, 25.1], [-72.0, 22.6], [-66.1, 18.5], [-70.7, 19.85], [-74.5, 23.2], [-80.1, 26.1],
  ] },
  // Svalbard cruise from Longyearbyen and back, Jun 15–22 (route from photo GPS): up the west coast, along the
  // north coast to Hinlopen Strait, north to the pack ice (80.7° N), Edgeøya, around Sørkapp to Hornsund, home.
  { date: '2026-06-15', places: ['Svalbard'], boat: [
    [15.6, 78.23], [13.6, 78.12], [12.97, 78.16], [11.4, 78.6], [11.7, 79.34], [11.85, 79.12], [12.72, 79.61],
    [12.42, 79.52], [13.5, 79.85], [16.0, 79.95], [17.5, 79.85], [18.46, 79.59], [16.71, 80.03], [14.5, 80.71],
    [17.5, 80.1], [18.6, 79.75], [21.08, 79.33], [21.06, 78.21], [20.82, 78.09], [19.5, 77.6], [17.0, 76.3],
    [15.6, 76.4], [15.3, 77.0], [15.99, 77.08], [14.0, 77.5], [13.3, 78.0], [13.84, 78.21], [15.6, 78.23],
  ] },
];

export const countryCount = places.filter((p) => !p.territory).length;
export const continentCount = new Set(places.map((p) => p.region)).size;

