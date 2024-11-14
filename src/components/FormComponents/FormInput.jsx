import React from "react";
import { Grid2, TextField, Typography } from "@mui/material";

const FormInput = ({
  label,
  value,
  onChange,
  marginLeftTypo = 0,
  marginLeftTextField = 0,
}) => {
  return (
    <>
      <Grid2 size={1}>
        <Grid2>
          <Typography variant="h3" marginLeft={marginLeftTypo}>
            {label}
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2 size={4}>
        <Grid2>
          <TextField
            fullWidth
            size="small"
            value={value}
            onChange={onChange}
            sx={{ marginLeft: marginLeftTextField }}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default FormInput;
