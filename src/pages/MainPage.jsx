import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material"; // Assuming you're using Material UI for the button
import { Container, Box, Typography, Grid2 } from "@mui/material";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";

function MainPage() {
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
        <Typography variant="h1">Products</Typography>
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
          justifyContent="flex-start" // Align the button to the left
        >
          <Grid2>
            <SearchBar />
          </Grid2>
          <Grid2>
            <Link to="/add-product">
              <Button variant="contained" color="secondary">
                New Product
              </Button>
            </Link>
          </Grid2>
        </Grid2>
      </Box>
      {/* Product Table */}
      <ProductTable />
    </Container>
  );
}

export default MainPage;
