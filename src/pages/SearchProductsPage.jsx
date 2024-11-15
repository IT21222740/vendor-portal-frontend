import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Box, Typography, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import favouriteIcon from "../assets/starred.svg";

function SearchProductsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query"); // Get the search query from the URL
  const products = useSelector((state) => state.products.items); // Get all products from the Redux store
  const [filteredProducts, setFilteredProducts] = useState(products); // State to store the filtered products

  // Filter products based on the query
  useEffect(() => {
    if (query) {
      const filtered = products.filter(
        (product) => product.name.toLowerCase().includes(query.toLowerCase()) // Filter by product name
      );
      setFilteredProducts(filtered); // Update filtered products state
      console.log(filteredProducts);
    } else {
      setFilteredProducts(products); // If no query, show all products
    }
  }, [query, products]); // Re-run the effect when query or products change

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
      <Box>
        <Typography variant="h2" color="highlight">
          {filteredProducts.length} results found for {query}
        </Typography>
        {filteredProducts.length > 0 ? (
          <Grid2 marginTop={4}>
            {filteredProducts.map((product, index) => (
              <Grid2
                item
                xs={12}
                key={index}
                sx={{
                  width: "994.71px", // Set product wrapper width
                  marginBottom: "20px", // Add space between products
                  display: "flex", // Use flexbox for alignment
                  flexDirection: "column", // Stack the rows vertically
                  alignItems: "flex-start", // Align items to the left
                }}
              >
                {/* SKU Row */}
                <Grid2
                  sx={{
                    width: "100%",
                    marginBottom: "5px",
                    marginLeft: "10px",
                  }}
                >
                  <Typography variant="h3" color="secondary">
                    #{product.sku}
                  </Typography>
                </Grid2>

                {/* Name Row */}
                <Grid2
                  sx={{
                    width: "100%",
                    marginBottom: "5px",
                    marginLeft: "10px",
                  }}
                >
                  <Typography variant="h2">{product.name}</Typography>
                </Grid2>

                {/* Name Row */}
                <Grid2
                  sx={{
                    width: "100%",
                    marginBottom: "5px",
                    marginLeft: "10px",
                  }}
                >
                  <Typography variant="h2" fontSize={13} color="highlight">
                    {" "}
                    {product.description}
                  </Typography>
                </Grid2>

                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "2px solid #969191",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                />
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <p>No products found</p>
        )}
      </Box>
    </Container>
  );
}

export default SearchProductsPage;
