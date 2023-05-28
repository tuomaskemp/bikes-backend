import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const createStation = async (station: Prisma.StationCreateInput) => {
  const newStation = await prisma.station.create({
    data: { ...station },
  });
  return newStation;
};
