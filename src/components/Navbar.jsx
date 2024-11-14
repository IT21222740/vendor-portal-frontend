import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  Select,
  MenuItem,
  Typography,
  FormControl,
} from "@mui/material";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("admin");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "logout") {
      console.log("Logging out...");
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 20px" }}>
        {/* Right side - Select dropdown and circular photo */}
        <Box display="flex" alignItems="center" gap="10px">
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              displayEmpty
              sx={{
                "& .MuiSelect-select": {
                  padding: "0px 8px",
                  fontSize: 16,
                },
                "&:before, &:after": {
                  borderBottom: "none",
                },
                "&:hover:before, &:hover:after, &:focus:before, &:focus:after":
                  {
                    borderBottom: "none",
                  },
              }}
            >
              <MenuItem value="admin">
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Admin
                </Typography>
              </MenuItem>
              <MenuItem value="logout">
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Logout
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>

          <Avatar
            alt="User Photo"
            src="https://via.placeholder.com/150" // replace with actual photo link
            sx={{
              width: 58,
              height: 58,
              border: "2px solid #ccc",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
