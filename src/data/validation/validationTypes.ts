import { ZodError, z } from "zod";
import { journeySchema, stationSchema } from "./validationSchema";

export type Journey = z.infer<typeof journeySchema>;
export type Station = z.infer<typeof stationSchema>;
export interface JourneyParsingResult {
  valid: boolean;
  data?: Journey;
  error?: ZodError;
}
export interface StationParsingResult {
  valid: boolean;
  data?: Station;
  error?: ZodError;
}
