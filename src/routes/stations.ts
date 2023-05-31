import express, { Request, Response } from "express";
import { getSingleStation, getStations } from "../services/stationService";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const result = await getStations();
  res.status(200).json(result);
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params["id"];
    const station = await getSingleStation(id);
    res.status(200).json(station);
  } catch (error: unknown) {
    res.status(404);
  }
});

export { router as stationsRouter };
