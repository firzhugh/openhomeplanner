
export class Region {
  id: number;
  name: string;
  district: District[];
}

export class District {
  name: string;
  suburb: Suburb[];
}

export class Suburb {
  name: string;
}

export class Address {
  street: string;
  city: string;
  postcode: number;
  suburb: Suburb;
  region: Region;
}

export class Property {
  id: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  address: Address;
  openHomeFromTime: Date;
  openHomeToTime: Date;
  openHomeDate: Date;
  image: string;
  title: string;
  description: string;
}

export class SearchCriteria{
  minBedrooms: any;
  maxBedrooms: any;
  minPrice: any;
  maxPrice: any;
  openHomeDate: any;
  region: string[];
  district: number[];
  propertyType: number[];
  suburb: number[];
  minBathrooms: any;
  maxBathrooms: any;
}
 