import { Station } from "@prisma/client";
import prisma from "../prisma";

export const createStation = async (station: Station) => {
  const newStation = await prisma.station.create({
    data: { ...station },
  });
  return newStation;
};
