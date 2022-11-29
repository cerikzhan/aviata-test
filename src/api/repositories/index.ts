import * as json from "../db/results.json";
import { Airline } from "@/entities/Airline";
import { mapFlightDaoToFlightEntity } from "@/api/mappers/mapFlightDaoToFlightEntity";
import { FlightDao } from "@/api/dao/Flight";

export interface FlightParams {
  page: number;
  perPage: number;
  tariffs: string[] | null;
  airlines: string[] | null;
}

export const fetchAirlines = (): Promise<Airline[]> => {
  const data = Object.entries(json.airlines).map((airline, index) => ({
    id: index + 1,
    short: airline[0],
    title: airline[1],
  }));
  return Promise.resolve(data);
};

export const fetchFlights = (params: FlightParams) => {
  const data = json.flights as unknown as FlightDao[];

  let flights = data.map(mapFlightDaoToFlightEntity);

  if (params.airlines) {
    const airlines = params.airlines.filter((airline) => airline !== "ALL");

    if (airlines.length) {
      flights = flights.filter((flight) =>
        airlines.includes(flight.carrier.short)
      );
    }
  }

  if (params.tariffs) {
    const st = params.tariffs.find((tariff) => tariff === "ST");
    if (st) {
      flights = flights.filter((flight) => flight.stops === 0);
    }

    const bg = params.tariffs.find((tariff) => tariff === "BG");
    if (bg) {
      flights = flights.filter((flights) => flights.baggage);
    }

    const rf = params.tariffs.find((tariff) => tariff === "RF");
    if (rf) {
      flights = flights.filter((flight) => flight.refundable);
    }
  }

  const start =
    flights.length > params.perPage ? (params.page - 1) * params.perPage : 0;

  return Promise.resolve({
    data: flights.slice(start, start + params.perPage),
    meta: {
      page: params.page,
      perPage: params.perPage,
      total: flights.length,
      lastPage: Math.ceil(flights.length / params.perPage),
    },
  });
};
