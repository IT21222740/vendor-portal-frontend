import React, { useState } from "react";
import { Box, TextField, Button, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function SearchBar() {
  const [query, setQuery] = useState(""); // State to hold search query
  const [options, setOptions] = useState([]); // State to hold suggestions
  const navigate = useNavigate(); // Hook for navigation
  const products = useSelector((state) => state.products.items);

  // Handle search
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search-products?query=${query}`); // Navigate to search page with query
    }
  };

  // Update options based on query
  const handleInputChange = (event, value) => {
    setQuery(value);
    // Filter suggestions based on query and ensure uniqueness using Set
    const filteredOptions = products
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      .map((item) => item.name);

    // Create a Set to remove duplicates
    const uniqueOptions = [...new Set(filteredOptions)];
    setOptions(uniqueOptions);
  };

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
      <Autocomplete
        freeSolo
        options={options} // Use the filtered and unique options
        value={query}
        onInputChange={handleInputChange} // Handle input change for filtering
        onChange={(event, value) => setQuery(value || "")} // Set query when an option is selected
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for products"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              sx: {
                height: "100%",
                paddingRight: "0", // Removes padding to align with button
                borderRadius: "50px 0 0 50px", // Rounded corners on the left
                backgroundColor: "transparent",
                width: "470px", // Ensure the text field takes up the full width
              },
            }}
          />
        )}
        renderOption={(props, option) => (
          <li {...props} key={option}>
            {option}
          </li>
        )}
      />

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
          marginLeft: 1,
        }}
        startIcon={<SearchIcon />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
