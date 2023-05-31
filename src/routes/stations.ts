import express, { Request, Response } from "express";
import prisma from "../prisma";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const result = await prisma.station.findMany({
    take: 100,
  });
  res.status(200).json(result);
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params["id"];
    const singleStation = await prisma.station.findUniqueOrThrow({
      where: { stationId: Number(id) },
    });
    if (singleStation) {
      const totalJourneysDeparting = await prisma.journey.count({
        where: {
          departureStationId: singleStation.id,
        },
      });
      const totalJourneysReturning = await prisma.journey.count({
        where: {
          returnStationId: singleStation.id,
        },
      });
      res.status(200).json({
        ...singleStation,
        totalJourneysDeparting,
        totalJourneysReturning,
      });
    }
  } catch (error: unknown) {
    res.status(404);
  }
});

export { router as stationsRouter };
