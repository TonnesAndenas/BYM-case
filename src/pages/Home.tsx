import { Grid } from "@mui/material";
import Banner from "../components/Banner";
import DataTable from "../components/DataTable";

export default function Home() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ minHeight: "100%", minWidth: "100%" }}
    >
      <Banner />
      <DataTable />
    </Grid>
  );
}
