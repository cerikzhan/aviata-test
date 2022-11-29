import { FlightDao } from "@/api/dao/Flight";
import { Flight } from "@/entities/Flight";

export const mapFlightDaoToFlightEntity = (flight: FlightDao): Flight => {
  const itinerary = flight.itineraries[0][0];
  return {
    id: flight.id,
    price: flight.price,
    currency: flight.currency,
    refundable: flight.refundable,
    stops: itinerary.stops,
    baggage: !!flight.services["20KG"],
    carrier: {
      name: itinerary.carrier_name,
      short: itinerary.carrier,
    },
    travelTime: itinerary.traveltime,
    originCode: itinerary.segments[0].origin_code,
    destinationCode: itinerary.segments[0].dest_code,
  };
};
