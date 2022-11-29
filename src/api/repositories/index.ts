import * as data from "../db/results.json";

export const fetchAirlines = (): Promise<Record<string, string>> => {
  return Promise.resolve(data.airlines);
};

export const fetchFlights = () => {
  return Promise.resolve(data.flights);
};
