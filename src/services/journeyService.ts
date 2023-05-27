import { Journey } from "@prisma/client";
import prisma from "../prisma";

export const createJourney = async (journey: Journey) => {
  const newJourney = await prisma.journey.create({
    data: { ...journey },
  });
  return newJourney;
};
