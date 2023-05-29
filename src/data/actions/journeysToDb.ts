import fs from "fs";
import { parse } from "csv-parse";
import { parseJourney } from "../validation";
import { createManyJourney } from "../../services/journeyService";
import { Prisma } from "@prisma/client";

const journeyCsvFilesToImport = [
  "./data-import/2021-05.csv",
  "./data-import/2021-06.csv",
  "./data-import/2021-07.csv",
];

const processJourneyFile = async (fileImport: string) => {
  const stream = fs
    .createReadStream(fileImport)
    .pipe(parse({ delimiter: ",", from_line: 2 }));

  let journeyChunk: Prisma.JourneyCreateManyInput[] = [];
  const CHUNK_SIZE = 1000;

  for await (const row of stream) {
    const journey = parseJourney(row);

    if (!journey.valid) {
      /* console.error(
        "Invalid journey. Error details:\n\n ",
        journey.error?.errors.map((error) => error.message)
      ); */
    }

    if (journey.valid && journey.data) {
      journeyChunk.push(journey.data);
      if (journeyChunk.length >= CHUNK_SIZE) {
        await createManyJourney(journeyChunk);
        journeyChunk = [];
      }
    }
  }
  if (journeyChunk.length > 0) {
    await createManyJourney(journeyChunk); // Create the remaining journeys
  }
};

const journeysToDb = async () => {
  try {
    for (const fileImport of journeyCsvFilesToImport) {
      await processJourneyFile(fileImport);
    }
    console.log("All journey files processed.");
  } catch (error: unknown) {
    console.error("Journey processing failed. Error: ", error);
  }
};

journeysToDb();
