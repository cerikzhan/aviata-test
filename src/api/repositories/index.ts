import * as json from "../db/results.json";
import { Airline } from "@/entities/Airline";
import { mapFlightDaoToFlightEntity } from "@/api/mappers/mapFlightDaoToFlightEntity";
import { FlightDao } from "@/api/dao/Flight";

export const fetchAirlines = (): Promise<Airline[]> => {
  const data = Object.entries(json.airlines).map((airline, index) => ({
    id: index + 1,
    short: airline[0],
    title: airline[1],
  }));
  return Promise.resolve(data);
};

export const fetchFlights = () => {
  const data = json.flights as unknown as FlightDao[];
  return Promise.resolve(data.map(mapFlightDaoToFlightEntity));
};
