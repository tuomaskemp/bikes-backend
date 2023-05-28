import fs from "fs";
import { parse } from "csv-parse";
import { parseStation } from "../validation";
import { createStation } from "../../services/stationService";

const stationCsvFilesToImport = ["./data-import/stations.csv"];

const stationsToDb = () => {
  for (const fileImport of stationCsvFilesToImport) {
    fs.createReadStream(fileImport)
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (row: string[]) => {
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
      })
      .on("end", () => {
        console.log("finished");
      })
      .on("error", (error: Error) => {
        console.error(error.message);
      });
  }
};

stationsToDb();
