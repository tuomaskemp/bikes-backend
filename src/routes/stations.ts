import express, { Request, Response } from "express";
import prisma from "../prisma";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const result = await prisma.station.findMany({
    take: 100,
  });
  res.status(200).json(result);
});

export { router as stationsRouter };
