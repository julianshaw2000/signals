export enum BeachAccessType {
  NotRequired,
  OnProperty,
  LessThan1Mile,
  MoreThan1Mile
}

export enum PropertyType {
  Villa,
  Cabin,
  Apartment,
  Bungalow
}

export interface Photo {
  url: string;
  title: string;
  default?: boolean
}



export interface Property {
  id: number;
  ownerId: number;
  pricing: number | null;
  checkin: number;
  checkout: number;
  propertyType: number | null;
  bed: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  area: string;
  generalInfo: string;
  title: string;
  subTitle: string;
  address: string;
  afterBookingAddress: string;
  directions: string;
  afterBookingDirections: string;
  wifiDetails: string;
  town: string;
  wifi: boolean | null;
  pool: boolean;
  ac: boolean;
  parking: boolean;
  gym: boolean;
  restaurant: boolean;
  spa: boolean;
  beachAccessType: BeachAccessType;
}
