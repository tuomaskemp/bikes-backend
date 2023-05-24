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

type Journey = z.infer<typeof journeySchema>;

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
