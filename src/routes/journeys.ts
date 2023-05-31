import express, { Request, Response } from "express";
import { getJourneys } from "../services/journeyService";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const result = await getJourneys();
    res.status(200).json(result);
  } catch (error: unknown) {
    res.status(404);
  }
});

export { router as journeysRouter };
