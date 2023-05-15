import fs from "fs";
import { parse } from "csv-parse";

const csvFilesToImport = [
  {
    name: "../data-import/2021-05.csv",
    content: "journeys",
  },
  {
    name: "../data-import/2021-06.csv",
    content: "journeys",
  },
  {
    name: "../data-import/2021-07.csv",
    content: "journeys",
  },
  {
    name: "../data-import/stations.csv",
    content: "stations",
  },
];

for (const fileImport of csvFilesToImport) {
  fs.createReadStream(fileImport.name)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", (row: string[]) => {
      console.log(row);
    })
    .on("end", () => {
      console.log("finished");
    })
    .on("error", (error: Error) => {
      console.error(error.message);
    });
}
