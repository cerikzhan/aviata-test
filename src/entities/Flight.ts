export interface Flight {
  id: string;
  price: string;
  currency: string;
  refundable: boolean;
  stops: number;
  baggage: boolean;
  carrier: {
    name: string;
    short: string;
  };
  originCode: string;
  destinationCode: string;
  travelTime: number;
}
