import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  const handleSearch = () => {
    // Here you can handle the search logic, e.g., filter data or call an API
    console.log("Searching for:", searchTerm);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {/* Input field for the search term */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the state with the input value
        sx={{ flex: 1 }}
      />

      {/* Search button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch} // Trigger search on button click
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
