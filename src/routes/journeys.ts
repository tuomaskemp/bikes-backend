import express, { Request, Response } from "express";
import prisma from "../prisma";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const result = await prisma.journey.findMany({
      include: {
        departureStation: true,
        returnStation: true,
      },
      take: 100,
    });
    res.status(200).json(result);
  } catch (error: unknown) {
    res.status(404);
  }
});

export { router as journeysRouter };
