import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("station");
});

export { router as stationsRouter };
