import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";

export default function Banner() {
  return (
    <Grid item minWidth="100%">
      <Paper
        square={true}
        elevation={4}
        sx={{
          marginBottom: "16px",
          minHeight: "96px",
          minWidth: "100%",
          bgcolor: "#f3bd49",
          display: "grid",
        }}
      >
        <Typography variant="h3" sx={{ alignSelf: "center" }}>
          Station overview
        </Typography>
      </Paper>
    </Grid>
  );
}
