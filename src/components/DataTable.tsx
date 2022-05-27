import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import { getStationInformation, getStationStatus } from "../fetchBysykkelData";
import { StationInformation, StationStatus } from "../types";

export default function DataTable() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Station ID", width: 120 },
    { field: "name", headerName: "Name", width: 280 },
    {
      field: "num_bikes_available",
      headerName: "Available Bikes",
      type: "number",
      width: 160,
    },
    {
      field: "num_docks_available",
      headerName: "Available Docks",
      type: "number",
      width: 160,
    },
  ];

  interface BikeInterface {
    id: string;
    name: string;
    num_bikes_available: number;
    num_docks_available: number;
  }

  const [stationInformation, setStationInformation] =
    React.useState<StationInformation[]>();

  const [stationStatus, setStationStatus] = React.useState<StationStatus[]>();

  React.useEffect(() => {
    getStationInformation().then((dataStnInf) => {
      if (dataStnInf) setStationInformation(dataStnInf);
    });
    getStationStatus().then((dataStnSta) => {
      if (dataStnSta) setStationStatus(dataStnSta);
    });
  }, []);

  const formattedData = (
    stnInf: StationInformation[],
    stnStatus: StationStatus[]
  ) => {
    return stnInf.map((station) => {
      const currentStation: StationStatus | undefined = stnStatus.find(
        (status) => station.station_id === status.station_id
      );
      let data: BikeInterface = {
        id: station.station_id,
        name: station.name,
        num_bikes_available: NaN,
        num_docks_available: NaN,
      };
      if (currentStation) {
        data.num_bikes_available = currentStation.num_bikes_available;
        data.num_docks_available = currentStation.num_docks_available;
      }
      return data;
    });
  };

  return (
    <Grid item sm={12} md={6} sx={{ minHeight: "100%" }}>
      {stationInformation && stationStatus && (
        <DataGrid
          autoHeight={true}
          rows={formattedData(stationInformation, stationStatus)}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          sx={{ minHeight: "640px", minWidth: "100%" }}
        />
      )}
    </Grid>
  );
}
