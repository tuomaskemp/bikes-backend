import { ZodError, z } from "zod";
import { journeySchema, stationSchema } from "./validationSchema";

export type Journey = z.infer<typeof journeySchema>;
export type Station = z.infer<typeof stationSchema>;
export interface ParsingResult {
  valid: boolean;
  data?: Journey | Station;
  error?: ZodError;
}
