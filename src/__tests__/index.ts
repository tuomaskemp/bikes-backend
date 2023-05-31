import { getJourneys } from "../services/journeyService";
import { prismaMock } from "../singleton";
import { journeys, station } from "../data/test_data";
import { getSingleStation } from "../services/stationService";

test("should get journeys", async () => {
  prismaMock.journey.findMany.mockResolvedValue(journeys);
  await expect(getJourneys()).resolves.toEqual(journeys);
});

test("should return fixed amount of journeys", async () => {
  prismaMock.journey.findMany.mockResolvedValue(journeys);
  await expect(getJourneys()).resolves.toHaveLength(2);
});

test("should return single journey", async () => {
  prismaMock.station.findUniqueOrThrow.mockResolvedValue(station);
  await expect(getSingleStation("2")).resolves.toHaveProperty("name");
});
