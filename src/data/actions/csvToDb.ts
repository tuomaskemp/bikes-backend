import fs from "fs";
import { parse } from "csv-parse";
import { validateJourney } from "../validation";

const csvFilesToImport = [
  {
    path: "../../data-import/2021-05.csv",
    content: "journeys",
  },
  {
    path: "../../data-import/2021-06.csv",
    content: "journeys",
  },
  {
    path: "../../data-import/2021-07.csv",
    content: "journeys",
  },
  {
    path: "../../data-import/stations.csv",
    content: "stations",
  },
];

for (const fileImport of csvFilesToImport) {
  fs.createReadStream(fileImport.path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", (row: string[]) => {
      const isValid: Error = validateJourney(row);
      console.log(isValid);
    })
    .on("end", () => {
      console.log("finished");
    })
    .on("error", (error: Error) => {
      console.error(error.message);
    });
}
