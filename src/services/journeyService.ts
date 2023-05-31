import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const createManyJourney = async (
  journeys: Omit<Prisma.JourneyCreateManyInput, "id">[]
) => {
  const allStations = await prisma.station.findMany();
  const existingStationIds = allStations.map((station) => station.stationId);

  const validatedJourneys = journeys.filter(
    (journey) =>
      existingStationIds.includes(journey.departureStationId) &&
      existingStationIds.includes(journey.returnStationId)
  );
  const journeyData = validatedJourneys.map((journey) => {
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

export const getJourneys = async () => {
  const result = await prisma.journey.findMany({
    include: {
      departureStation: true,
      returnStation: true,
    },
    take: 100,
  });
  return result;
};
