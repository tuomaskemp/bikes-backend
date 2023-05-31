import { Prisma, Station } from "@prisma/client";
import prisma from "../prisma";

export const createStation = async (station: Prisma.StationCreateInput) => {
  const newStation = await prisma.station.create({
    data: { ...station },
  });
  return newStation;
};

interface SingleStation extends Station {
  totalJourneysDeparting: number;
  totalJourneysReturning: number;
}

export const getSingleStation = async (
  id: string
): Promise<SingleStation | undefined> => {
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
    return {
      ...singleStation,
      totalJourneysDeparting,
      totalJourneysReturning,
    };
  }
};
