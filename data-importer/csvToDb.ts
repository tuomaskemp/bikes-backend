const fs = require("fs");
const { parse } = require("csv-parse");

const csvFilesToImport = [
    {
        name: "../data-import/2021-05.csv",
        content: "journeys"
    }, 
    {
        name: "../data-import/2021-06.csv",
        content: "journeys"
    }, 
    {
        name: "../data-import/2021-07.csv",
        content: "journeys"
    },
    {
        name: "../data-import/stations.csv",
        content: "stations"
    }
]


for (const fileImport of csvFilesToImport) {
    fs.createReadStream(fileImport.name)
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (row: string[]) => {
        console.log(row);
      })
      .on("end", function () {
        console.log("finished");
      })
      .on("error", function (error: { message: any; }) {
        console.error(error.message);
      });
}
