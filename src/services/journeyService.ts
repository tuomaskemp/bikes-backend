import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const createManyJourney = async (
  journeys: Omit<Prisma.JourneyCreateManyInput, "id">[]
) => {
  const journeyData = journeys.map((journey) => {
    return {
      departureTime: journey.departureTime,
      returnTime: journey.returnTime,
      coveredDistanceInMeters: journey.coveredDistanceInMeters,
      durationInSeconds: journey.durationInSeconds,
      departureStationId: journey.departureStationId,
      returnStationId: journey.returnStationId,
    };
  });
  try {
    const newJourney = await prisma.journey.createMany({
      data: journeyData,
      skipDuplicates: false,
    });
    return newJourney;
  } catch (error: unknown) {
    return error;
  }
};
