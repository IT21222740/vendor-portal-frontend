import React from "react";
import TableFav from "../components/TableFav";
import { Link } from "react-router-dom";
import { Button, Container, Box, Typography, Grid2 } from "@mui/material";
import SearchBar from "../components/SearchBar";
import favouriteIcon from "../assets/starred.svg";

function FavouriteItems() {
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box
        sx={{
          marginBottom: 4,
          marginTop: 6,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h1" sx={{ color: "inherit" }}>
            Products
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start", // Align the form to the left
          width: "100%",
        }}
      >
        <Grid2
          container
          spacing={2}
          alignItems="center"
          sx={{
            width: "80%",
            marginBottom: 4,
          }}
        >
          <Grid2>
            <SearchBar />
          </Grid2>
        </Grid2>
        <Grid2 marginTop={1}>
          <Link to="/add-product">
            <Button
              size="large"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                height: "49px",
                width: "249px", // Set the button width here
              }}
            >
              New Product
            </Button>
          </Link>
        </Grid2>
        <Grid2 marginTop={1}>
          <Link to="/favourites">
            <Button
              variant="outlined"
              color="secondary"
              sx={{ minWidth: "49px", height: "49px", marginLeft: 5 }}
            >
              {/* Adjust the button size here */}
              <img src={favouriteIcon} alt="Star" width="25" height="25" />
            </Button>
          </Link>
        </Grid2>
      </Box>
      {/* Product Table */}
      <TableFav />
    </Container>
  );
}

export default FavouriteItems;
