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
  { name: 'The Bahamas', id: '044', flag: '🇧🇸', region: 'North America', dot: [-77.4, 25.0] },
  { name: 'St. Kitts and Nevis', id: '659', flag: '🇰🇳', region: 'North America', dot: [-62.7, 17.3] },
  { name: 'Puerto Rico', id: '630', flag: '🇵🇷', region: 'North America', territory: 'United States', dot: [-66.5, 18.2] },
  { name: 'Peru', id: '604', flag: '🇵🇪', region: 'South America' },
  { name: 'Argentina', id: '032', flag: '🇦🇷', region: 'South America' },
  { name: 'Brazil', id: '076', flag: '🇧🇷', region: 'South America', cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Florianópolis', 'Recife'] },
  { name: 'United Kingdom', id: '826', flag: '🇬🇧', region: 'Europe', cities: ['London'] },
  { name: 'Netherlands', id: '528', flag: '🇳🇱', region: 'Europe', cities: ['Amsterdam'] },
  { name: 'Portugal', id: '620', flag: '🇵🇹', region: 'Europe' },
  { name: 'France', id: '250', flag: '🇫🇷', region: 'Europe' },
  { name: 'Switzerland', id: '756', flag: '🇨🇭', region: 'Europe' },
  { name: 'Italy', id: '380', flag: '🇮🇹', region: 'Europe' },
  { name: 'Norway', id: '578', flag: '🇳🇴', region: 'Europe' },
  { name: 'Svalbard', id: '744', flag: '🇸🇯', region: 'Europe', territory: 'Norway', note: 'The Arctic', dot: [16.0, 78.2] },
  { name: 'Sweden', id: '752', flag: '🇸🇪', region: 'Europe' },
  { name: 'Turkey', id: '792', flag: '🇹🇷', region: 'Asia', cities: ['Istanbul'] },
  { name: 'United Arab Emirates', id: '784', flag: '🇦🇪', region: 'Asia', cities: ['Dubai'] },
  { name: 'India', id: '356', flag: '🇮🇳', region: 'Asia', cities: [
      'Delhi', 'Varanasi', 'Kolkata', 'Ahmedabad', 'Mumbai', 'Hyderabad',
      'Tirupati', 'Chennai', 'Madurai', 'Tiruchendur', 'Kochi',
    ] },
  { name: 'China', id: '156', flag: '🇨🇳', region: 'Asia' },
  { name: 'Japan', id: '392', flag: '🇯🇵', region: 'Asia' },
  { name: 'Thailand', id: '764', flag: '🇹🇭', region: 'Asia' },
  { name: 'Malaysia', id: '458', flag: '🇲🇾', region: 'Asia', cities: ['Kuala Lumpur', 'Johor'] },
  { name: 'Singapore', id: '702', flag: '🇸🇬', region: 'Asia', dot: [103.8, 1.35] },
  { name: 'Indonesia', id: '360', flag: '🇮🇩', region: 'Asia', cities: ['Bali'] },
  { name: 'Antarctica', id: '010', flag: '🇦🇶', region: 'Antarctica', territory: 'no country' },
];

// UN member states (193) + the two observer states.
const worldCountries = 195;
export const countryCount = places.filter((p) => !p.territory).length;
export const territoryCount = places.filter((p) => p.territory && p.id !== '010').length;
export const worldPercent = Math.round((countryCount / worldCountries) * 100);
export const continentCount = new Set(places.map((p) => p.region)).size;
