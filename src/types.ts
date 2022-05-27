// Station Information @ https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json

export interface StationInformationRoot {
  last_updated: number;
  ttl: number;
  version: string;
  data: StationInformationData;
}

export interface StationInformationData {
  stations: StationInformation[];
}

export interface StationInformation {
  station_id: string;
  name: string;
  address: string;
  rental_uris: RentalUris;
  lat: number;
  lon: number;
  capacity: number;
}

export interface RentalUris {
  android: string;
  ios: string;
}



// Station Status @ https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json

export interface StationStatusRoot {
  last_updated: number;
  ttl: number;
  version: string;
  data: StationStatusData;
}

export interface StationStatusData {
  stations: StationStatus[];
}

export interface StationStatus {
  station_id: string;
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  num_bikes_available: number;
  num_docks_available: number;
}
