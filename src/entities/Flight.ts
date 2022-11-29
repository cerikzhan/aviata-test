export interface Flight {
  id: string;
  price: string;
  currency: string;
  refundable: boolean;
  stops: number;
  carrier: {
    name: string;
    short: string;
  };
  originCode: string;
  destinationCode: string;
  travelTime: number;
}
