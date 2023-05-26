import { z } from "zod";

export const journeySchema = z.object({
  departureTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  departureStationId: z.coerce.number(),
  departureStationName: z.coerce.string(),
  returnStationId: z.coerce.number(),
  returnStationName: z.coerce.string(),
  coveredDistanceInMeters: z.coerce.number().gte(10),
  durationInSeconds: z.coerce.number().gte(10),
});

export const stationSchema = z.object({
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
