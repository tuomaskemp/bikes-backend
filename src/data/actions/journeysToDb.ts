import fs from "fs";
import { parse } from "csv-parse";
import { parseJourney } from "../validation";
import { createJourney } from "../../services/journeyService";

const journeyCsvFilesToImport = [
  "./data-import/2021-05.csv",
  "./data-import/2021-06.csv",
  "./data-import/2021-07.csv",
];

const processJourneyFile = async (fileImport: string) => {
  const stream = fs
    .createReadStream(fileImport)
    .pipe(parse({ delimiter: ",", from_line: 2 }));

  for await (const row of stream) {
    const journey = parseJourney(row);

    if (!journey.valid) {
      /* console.error(
        "Invalid journey. Error details:\n\n ",
        journey.error?.errors.map((error) => error.message)
      ); */
    }

    if (journey.valid && journey.data) {
      try {
        await createJourney(
          journey.data,
          journey.data.departureStationId,
          journey.data.returnStationId
        );
      } catch (error: unknown) {
        console.error("Journey creation failed. Error: ", error);
      }
    }
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
