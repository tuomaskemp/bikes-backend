import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const createJourney = async (
  journey: Omit<
    Prisma.JourneyCreateInput,
    "departureStation" | "returnStation"
  >,
  departureStationId: number,
  returnStationId: number
) => {
  const newJourney = await prisma.journey.create({
    data: {
      departureTime: journey.departureTime,
      returnTime: journey.returnTime,
      departureStation: {
        connect: { stationId: departureStationId },
      },
      returnStation: {
        connect: { stationId: returnStationId },
      },
      coveredDistanceInMeters: journey.coveredDistanceInMeters,
      durationInSeconds: journey.durationInSeconds,
    },
  });
  return newJourney;
};
