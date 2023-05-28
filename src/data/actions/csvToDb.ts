import fs from "fs";
import { parse } from "csv-parse";
import { parseJourney, parseStation } from "../validation";
import { createJourney } from "../../services/journeyService";
import { createStation } from "../../services/stationService";

const csvFilesToImport = [
  {
    path: "./data-import/stations.csv",
    content: "stations",
  },
  {
    path: "./data-import/2021-05.csv",
    content: "journeys",
  },
  {
    path: "./data-import/2021-06.csv",
    content: "journeys",
  },
  {
    path: "./data-import/2021-07.csv",
    content: "journeys",
  },
];

const csvToDb = () => {
  for (const fileImport of csvFilesToImport) {
    fs.createReadStream(fileImport.path)
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (row: string[]) => {
        if (fileImport.content === "journeys") {
          const journey = parseJourney(row);
          if (!journey.valid) {
            console.error(
              "Invalid journey. Error details:\n\n ",
              journey.error?.errors.map((error) => error.message)
            );
          }
          if (journey.valid && journey.data) {
            (async () => {
              try {
                if (journey.data) {
                  await createJourney(
                    journey.data,
                    journey.data.departureStationId,
                    journey.data.returnStationId
                  );
                }
              } catch (error: unknown) {
                console.error("Journey creation failed. Error: ", error);
              }
            })();
          }
        }
        if (fileImport.content === "stations") {
          const station = parseStation(row);
          if (!station.valid) {
            console.log(
              "Invalid station. Error details:\n\n ",
              station.error?.errors.map((error) => error.message)
            );
          }
          if (station.valid) {
            (async () => {
              try {
                if (station.data) {
                  await createStation(station.data);
                }
              } catch (error: unknown) {
                console.error("Journey creation failed. Error: ", error);
              }
            })();
          }
        }
      })
      .on("end", () => {
        console.log("finished");
      })
      .on("error", (error: Error) => {
        console.error(error.message);
      });
  }
};

csvToDb();
