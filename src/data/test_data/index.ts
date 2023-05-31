export const journeys = [
  {
    id: 1,
    departureTime: new Date("2021-05-31T23:57:25.000Z"),
    returnTime: new Date("2021-06-01T00:05:46.000Z"),
    departureStationId: 94,
    returnStationId: 100,
    coveredDistanceInMeters: 2043,
    durationInSeconds: 500,
    departureStation: {
      id: 200,
      fid: 204,
      stationId: 94,
      name: "Laajalahden aukio",
      nameSwe: "Bredviksplatsen",
      nameEn: "Laajalahden aukio",
      address: "Munkkiniemen puistotie 21",
      addressSwe: "Munksnäs allén 21",
      city: " ",
      citySwe: " ",
      operator: " ",
      capacity: 20,
      latitude: 24.8763012644261,
      longitude: 60.1978706012264,
    },
    returnStation: {
      id: 203,
      fid: 209,
      stationId: 100,
      name: "Teljäntie",
      nameSwe: "Täljevägen",
      nameEn: "Teljäntie",
      address: "Ulvilantie 21",
      addressSwe: "Ulfsbyvägen 21",
      city: " ",
      citySwe: " ",
      operator: " ",
      capacity: 12,
      latitude: 24.8686567195812,
      longitude: 60.209690428765,
    },
  },
  {
    id: 2,
    departureTime: new Date("2021-05-31T23:56:59.000Z"),
    returnTime: new Date("2021-06-01T00:07:14.000Z"),
    departureStationId: 82,
    returnStationId: 113,
    coveredDistanceInMeters: 1870,
    durationInSeconds: 611,
    departureStation: {
      id: 195,
      fid: 192,
      stationId: 82,
      name: "Töölöntulli",
      nameSwe: "Tölötull",
      nameEn: "Töölöntulli",
      address: "Mannerheimintie 112",
      addressSwe: "Mannerheimvägen 112",
      city: " ",
      citySwe: " ",
      operator: " ",
      capacity: 16,
      latitude: 24.912893019047,
      longitude: 60.1909233737999,
    },
    returnStation: {
      id: 222,
      fid: 221,
      stationId: 113,
      name: "Pasilan asema",
      nameSwe: "Böle station",
      nameEn: "Pasila railway station",
      address: "Pasilan asema-aukio",
      addressSwe: "Böle station",
      city: " ",
      citySwe: " ",
      operator: " ",
      capacity: 40,
      latitude: 24.932799079033,
      longitude: 60.1982108580315,
    },
  },
];

export const station = {
  id: 105,
  fid: 112,
  stationId: 2,
  name: "Laivasillankatu",
  nameSwe: "Skeppsbrogatan",
  nameEn: "Laivasillankatu",
  address: "Laivasillankatu 14",
  addressSwe: "Skeppsbrogatan 14",
  city: " ",
  citySwe: " ",
  operator: " ",
  capacity: 12,
  latitude: 24.9565097715858,
  longitude: 60.1609890692806,
  totalJourneysDeparting: 9170,
  totalJourneysReturning: 9374,
};