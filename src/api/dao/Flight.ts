export interface Price {
  currency: string;
  amount: string;
  price_raw: number;
}

export interface BaggageOption {
  unit: string;
  value: number;
}

export interface ItineraryService {
  full_description: string;
  alt_text: string;
  code: string;
  description: string;
  title: string;
  default: string;
  solution: string;
  value: string;
  icon: string;
}

export interface Segment {
  origin: string;
  airport_dest: string;
  arr_time_iso: Date;
  dep_terminal: string;
  dep_time_iso: Date;
  carrier_name: string;
  stop_locations: any[];
  dest_code: string;
  airport_dest_terminal: string;
  equipment: string;
  flight_num: string;
  stops: number;
  airport_origin: string;
  cabin: string;
  dep_time: string;
  dest: string;
  origin_code: string;
  baggage_options: BaggageOption[];
  arr_time: string;
  plane: string;
  services: ItineraryService;
  fare_basis_code: string;
  airport_origin_terminal: string;
  arr_terminal: string;
  carrier: string;
  fare_seats: number;
}

export interface Itinerary {
  dep_date: string;
  hash: string;
  dir_index: number;
  price: Price;
  layovers: number[];
  arr_date: string;
  allowed_offers: any[];
  carrier_name: string;
  is_meta: boolean;
  segments: Segment[];
  stops: number;
  carrier: string;
  refundable: boolean;
  traveltime: number;
}

interface PriceDetails {
  base_raw: number;
  modifiers: string;
  modifiers_raw: number;
  taxes: string;
  base: string;
  taxes_raw: number;
}

interface Service {
  full_description: string;
  alt_text: string;
  code: string;
  description: string;
  title: string;
  default: string;
  solution: string;
  value: string;
  icon: string;
}

type ServiceType = "20KG";

export interface FlightDao {
  itineraries: Itinerary[][];
  price_details: PriceDetails;
  price: string;
  currency: string;
  bonus_usage: boolean;
  services: Record<ServiceType, Service>;
  price_raw: number;
  validating_carrier: string;
  id: string;
  has_meta: boolean;
  has_offers: boolean;
  best_time: number;
  bonus_accrual: boolean;
  provider: string;
  refundable: boolean;
  provider_class: string;
}
