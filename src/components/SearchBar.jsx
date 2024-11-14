import React from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "680px",
        height: "64px",
        borderRadius: "50px",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      <TextField
        placeholder="Search for products"
        variant="outlined"
        fullWidth
        InputProps={{
          sx: {
            height: "100%",
            paddingRight: "0", // Removes padding to align with button
            borderRadius: "50px 0 0 50px", // Rounded corners on the left
            backgroundColor: "transparent",
          },
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: "50px",
                  height: "45px",
                  padding: "0 24px",
                  color: "#fff",
                  boxShadow: "none",
                  width: "180px",
                  marginRight: 1,
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;
