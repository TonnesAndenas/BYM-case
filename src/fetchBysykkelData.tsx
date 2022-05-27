import {
  StationInformationRoot,
  StationStatusRoot,
  StationInformation,
  StationStatus,
} from "./types";

function fetchStationInformation(): Promise<StationInformationRoot> {
  return fetch(
    "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function fetchStationStatus(): Promise<StationStatusRoot> {
  return fetch(
    "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export async function getStationInformation(): Promise<StationInformation[]> {
  return (await fetchStationInformation()).data.stations;
}

export async function getStationStatus(): Promise<StationStatus[]> {
  return (await fetchStationStatus()).data.stations;
}
