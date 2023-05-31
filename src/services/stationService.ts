import { Prisma, Station } from "@prisma/client";
import prisma from "../prisma";

export const createStation = async (station: Prisma.StationCreateInput) => {
  const newStation = await prisma.station.create({
    data: { ...station },
  });
  return newStation;
};

export const getSingleStation = async (id: string) => {
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

export const getStations = async () => {
  const result = await prisma.station.findMany({
    take: 100,
  });
  return result;
};
