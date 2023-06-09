import { journeySchema, stationSchema } from "./validationSchema";
import { JourneyParsingResult, StationParsingResult } from "./validationTypes";

export const parseJourney = (rawJourney: string[]): JourneyParsingResult => {
  const journeyInput = {
    departureTime: rawJourney[0],
    returnTime: rawJourney[1],
    departureStationId: rawJourney[2],
    departureStationName: rawJourney[3],
    returnStationId: rawJourney[4],
    returnStationName: rawJourney[5],
    coveredDistanceInMeters: rawJourney[6],
    durationInSeconds: rawJourney[7],
  };
  const result = journeySchema.required().safeParse(journeyInput);
  if (!result.success) {
    return {
      valid: false,
      error: result.error,
    };
  } else {
    return {
      valid: true,
      data: result.data,
    };
  }
};

export const parseStation = (rawStation: string[]): StationParsingResult => {
  const stationInput = {
    fid: rawStation[0],
    stationId: rawStation[1],
    name: rawStation[2],
    nameSwe: rawStation[3],
    nameEn: rawStation[4],
    address: rawStation[5],
    addressSwe: rawStation[6],
    city: rawStation[7],
    citySwe: rawStation[8],
    operator: rawStation[9],
    capacity: rawStation[10],
    latitude: rawStation[11],
    longitude: rawStation[12],
  };

  const result = stationSchema.required().safeParse(stationInput);

  if (!result.success) {
    return {
      valid: false,
      error: result.error,
    };
  } else {
    return {
      valid: true,
      data: result.data,
    };
  }
};
