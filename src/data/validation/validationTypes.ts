import { z } from "zod";
import { journeySchema, stationSchema } from "./validationSchema";

export type Journey = z.infer<typeof journeySchema>;
export type Station = z.infer<typeof stationSchema>;
