import React from "react";
import { Grid2, TextField, Typography } from "@mui/material";

function FormInputDescription({ value, onChange }) {
  return (
    <>
      <Grid2 marginBottom={2}>
        <Typography variant="h3"> Product Description</Typography>
      </Grid2>

      <Grid2 size={12} sx={{ textAlign: "left" }}>
        <Typography variant="secTextMed" color="highlight">
          A small description about the product
        </Typography>
      </Grid2>

      <Grid2 size={12} marginTop={0}>
        <TextField
          fullWidth
          size="small"
          multiline
          rows={4}
          sx={{ marginTop: 1 }}
          value={value}
          onChange={onChange}
        />
      </Grid2>
    </>
  );
}

export default FormInputDescription;
