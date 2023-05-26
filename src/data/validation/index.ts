import { ZodError, z } from "zod";

const journeySchema = z.object({
  departure: z.coerce.date(),
  return: z.coerce.date(),
  departureStationId: z.coerce.number(),
  departureStationName: z.coerce.string(),
  returnStationId: z.coerce.number(),
  returnStationName: z.coerce.string(),
  coveredDistanceInMeters: z.coerce.number().gte(10),
  durationInSeconds: z.coerce.number().gte(10),
});

const stationSchema = z.object({
  fid: z.coerce.number(),
  stationId: z.coerce.number(),
  name: z.coerce.string(),
  nameSwe: z.coerce.string(),
  nameEn: z.coerce.string(),
  address: z.coerce.string(),
  addressSwe: z.coerce.string(),
  city: z.coerce.string().nullable(),
  citySwe: z.coerce.string().nullable(),
  operator: z.coerce.string().nullable(),
  capacity: z.coerce.number(),
  latitude: z.coerce.number().gte(-90).lte(90),
  longitude: z.coerce.number().gte(-180).lte(180),
});

type Journey = z.infer<typeof journeySchema>;
type Station = z.infer<typeof stationSchema>;

export const parseJourney = (rawJourney: string[]): Journey | ZodError => {
  const journeyInput = {
    departure: rawJourney[0],
    return: rawJourney[1],
    departureStationId: rawJourney[2],
    departureStationName: rawJourney[3],
    returnStationId: rawJourney[4],
    returnStationName: rawJourney[5],
    coveredDistanceInMeters: rawJourney[6],
    durationInSeconds: rawJourney[7],
  };
  const result = journeySchema.required().safeParse(journeyInput);

  if (!result.success) {
    return result.error;
  } else {
    return result.data;
  }
};

export const parseStation = (rawStation: string[]): Station | ZodError => {
  const stationInput = {
    fid: rawStation[0],
    stationId: rawStation[1],
    name: rawStation[2],
    nameSwe: rawStation[3],
    nameEn: rawStation[4],
    address: rawStation[5],
    addressSwe: rawStation[6],
    city: rawStation[7],
    citySwe: rawStation[8],
    operator: rawStation[9],
    capacity: rawStation[10],
    latitude: rawStation[11],
    longitude: rawStation[12],
  };

  const result = stationSchema.required().safeParse(stationInput);

  if (!result.success) {
    return result.error;
  } else {
    return result.data;
  }
};
