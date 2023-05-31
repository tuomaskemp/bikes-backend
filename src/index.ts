import express from "express";
import { stationsRouter } from "./routes/stations";
import { journeysRouter } from "./routes/journeys";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/stations", stationsRouter);
app.use("/api/journeys", journeysRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
