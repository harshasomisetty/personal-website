// Places for /been. id = ISO 3166 numeric code (the world-atlas map ids).
// dot = [lon, lat] for places too small to see on the map.
export type Place = {
  name: string;
  id: string;
  flag: string;
  region: string;
  territory?: string; // the country it belongs to; not counted as a country
  note?: string;
  cities?: string[]; // 2+ cities open as a list; 1 city shows as gray text
  dot?: [number, number];
};

export const regions = ['North America', 'South America', 'Europe', 'Asia', 'Antarctica'];

export const places: Place[] = [
  { name: 'United States', id: '840', flag: '🇺🇸', region: 'North America', cities: ['New York', 'Chicago', 'St. Louis', 'Houston', 'Miami', 'Fort Lauderdale', 'San Francisco'] },
  { name: 'Canada', id: '124', flag: '🇨🇦', region: 'North America' },
  { name: 'Mexico', id: '484', flag: '🇲🇽', region: 'North America' },
  { name: 'Panama', id: '591', flag: '🇵🇦', region: 'North America' },
  { name: 'Costa Rica', id: '188', flag: '🇨🇷', region: 'North America' },
  { name: 'Dominican Republic', id: '214', flag: '🇩🇴', region: 'North America', cities: ['Punta Cana', 'Puerto Plata'] },
  { name: 'The Bahamas', id: '044', flag: '🇧🇸', region: 'North America', dot: [-77.4, 25.0] },
  { name: 'St. Kitts and Nevis', id: '659', flag: '🇰🇳', region: 'North America', dot: [-62.7, 17.3] },
  { name: 'Puerto Rico', id: '630', flag: '🇵🇷', region: 'North America', territory: 'United States', dot: [-66.5, 18.2] },
  { name: 'Peru', id: '604', flag: '🇵🇪', region: 'South America' },
  { name: 'Argentina', id: '032', flag: '🇦🇷', region: 'South America' },
  { name: 'Brazil', id: '076', flag: '🇧🇷', region: 'South America', cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Florianópolis', 'Recife'] },
  { name: 'United Kingdom', id: '826', flag: '🇬🇧', region: 'Europe', cities: ['London'] },
  { name: 'Netherlands', id: '528', flag: '🇳🇱', region: 'Europe', cities: ['Amsterdam'] },
  { name: 'Belgium', id: '056', flag: '🇧🇪', region: 'Europe', cities: ['Brussels'] },
  { name: 'Germany', id: '276', flag: '🇩🇪', region: 'Europe', cities: ['Black Forest'] },
  { name: 'Portugal', id: '620', flag: '🇵🇹', region: 'Europe' },
  { name: 'France', id: '250', flag: '🇫🇷', region: 'Europe' },
  { name: 'Switzerland', id: '756', flag: '🇨🇭', region: 'Europe' },
  { name: 'Italy', id: '380', flag: '🇮🇹', region: 'Europe' },
  { name: 'Norway', id: '578', flag: '🇳🇴', region: 'Europe' },
  { name: 'Svalbard', id: '744', flag: '🇸🇯', region: 'Europe', territory: 'Norway', note: 'Arctic', dot: [16.0, 78.2] },
  { name: 'Finland', id: '246', flag: '🇫🇮', region: 'Europe', cities: ['Helsinki'] },
  { name: 'Turkey', id: '792', flag: '🇹🇷', region: 'Asia', cities: ['Istanbul'] },
  { name: 'United Arab Emirates', id: '784', flag: '🇦🇪', region: 'Asia', cities: ['Dubai'] },
  { name: 'India', id: '356', flag: '🇮🇳', region: 'Asia', cities: ['Delhi', 'Varanasi', 'Kolkata', 'Ahmedabad', 'Mumbai', 'Hyderabad', 'Tirupati', 'Chennai', 'Madurai', 'Tiruchendur', 'Kochi'] },
  { name: 'China', id: '156', flag: '🇨🇳', region: 'Asia', cities: ['Shenzhen', 'Beijing', 'Tibet'] },
  { name: 'Hong Kong', id: '344', flag: '🇭🇰', region: 'Asia', territory: 'China', dot: [114.17, 22.3] },
  { name: 'Japan', id: '392', flag: '🇯🇵', region: 'Asia' },
  { name: 'Thailand', id: '764', flag: '🇹🇭', region: 'Asia' },
  { name: 'Malaysia', id: '458', flag: '🇲🇾', region: 'Asia', cities: ['Kuala Lumpur', 'Johor'] },
  { name: 'Singapore', id: '702', flag: '🇸🇬', region: 'Asia', dot: [103.8, 1.35] },
  { name: 'Indonesia', id: '360', flag: '🇮🇩', region: 'Asia', cities: ['Bali'] },
  { name: 'Antarctica', id: '010', flag: '🇦🇶', region: 'Antarctica', territory: 'no country' },
];

// Trips from photo GPS data (2019 on). places = country names above, in visit order.
export const trips: { when: string; year: number; places: string[] }[] = [
  { year: 2019, when: 'Aug', places: ['United Kingdom', 'Belgium', 'Germany', 'Switzerland', 'Italy', 'France'] },
  { year: 2022, when: 'Nov', places: ['Portugal'] },
  { year: 2023, when: 'Jan – Feb', places: ['Turkey'] },
  { year: 2023, when: 'Oct – Nov', places: ['Netherlands'] },
  { year: 2024, when: 'Mar', places: ['Dominican Republic'] },
  { year: 2024, when: 'Aug – Sep', places: ['Costa Rica'] },
  { year: 2024, when: 'Sep', places: ['Thailand', 'Singapore', 'Japan'] },
  { year: 2024, when: 'Nov', places: ['St. Kitts and Nevis'] },
  { year: 2024, when: 'Dec', places: ['Panama', 'Argentina', 'Antarctica'] },
  { year: 2025, when: 'Mar', places: ['Brazil'] },
  { year: 2025, when: 'Mar', places: ['Dominican Republic'] },
  { year: 2025, when: 'Mar – Apr', places: ['Norway', 'Switzerland', 'France', 'Italy'] },
  { year: 2025, when: 'Jul', places: ['The Bahamas', 'Puerto Rico', 'Dominican Republic'] },
  { year: 2025, when: 'Sep', places: ['China', 'Hong Kong'] },
  { year: 2025, when: 'Sep – Oct', places: ['India'] },
  { year: 2025, when: 'Nov', places: ['Mexico'] },
  { year: 2025, when: 'Dec', places: ['United Arab Emirates'] },
  { year: 2026, when: 'Jan – Mar', places: ['Argentina', 'Brazil', 'Peru'] },
  { year: 2026, when: 'Apr – May', places: ['India', 'Malaysia', 'Singapore'] },
  { year: 2026, when: 'Jun', places: ['Japan'] },
  { year: 2026, when: 'Jun', places: ['Finland', 'Svalbard'] },
  { year: 2026, when: 'Jun – Jul', places: ['France'] },
  { year: 2026, when: 'Jul', places: ['United Kingdom'] },
  { year: 2026, when: 'Jul – Aug', places: ['China', 'Japan'] },
  { year: 2026, when: 'Aug – Sep', places: ['Indonesia'] },
  { year: 2026, when: 'Sep – Oct', places: ['India'] },
  { year: 2026, when: 'Nov', places: ['Puerto Rico'] },
].reverse();

// UN member states (193) + the two observer states.
const worldCountries = 195;
export const countryCount = places.filter((p) => !p.territory).length;
export const worldPercent = Math.round((countryCount / worldCountries) * 100);
export const continentCount = new Set(places.map((p) => p.region)).size;
