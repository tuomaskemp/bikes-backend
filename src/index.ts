import express from "express";
import { stationsRouter } from "./routes/stations";
import { journeysRouter } from "./routes/journeys";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/stations", stationsRouter);
app.use("/api/journeys", journeysRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
