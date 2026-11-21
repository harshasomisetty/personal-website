// Places for /been. id = ISO 3166 numeric code (the world-atlas map ids).
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
    'Kansas City', 'Columbus',
  ] },
  { name: 'Canada', id: '124', flag: '🇨🇦', region: 'North America' },
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

// Trips from photo GPS data (2019 on), oldest first in this list. places = country, territory,
// or city names from the lists above, in visit order. US drives near home are left out.
export const trips: { when: string; year: number; places: string[] }[] = [
  { year: 2019, when: 'Aug', places: ['United Kingdom', 'Belgium', 'Germany', 'Switzerland', 'Italy', 'France'] },
  { year: 2020, when: 'Jun', places: ['Atlanta', 'Houston'] },
  { year: 2020, when: 'Aug', places: ['Houston'] },
  { year: 2021, when: 'Aug', places: ['Hawaii'] },
  { year: 2022, when: 'Mid', places: ['Canada'] },
  { year: 2022, when: 'Nov', places: ['Portugal'] },
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

// Travel that Flighty does not have, for the route replay on /been: the place lights up on
// the date, and a boat trip also draws a line ([lon, lat] points, approximate).
export const voyages: { date: string; place: string; boat?: [number, number][] }[] = [
  { date: '2022-07-01', place: 'Canada' },
  { date: '2024-12-10', place: 'Antarctica', boat: [[-68.3, -54.9], [-63.5, -64.6]] }, // Ushuaia to the Peninsula
  { date: '2026-06-14', place: 'Svalbard', boat: [[15.6, 78.25], [11.9, 78.9], [12.5, 80.0]] }, // north from Longyearbyen
];

export const countryCount = places.filter((p) => !p.territory).length;
export const continentCount = new Set(places.map((p) => p.region)).size;

