import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Grid2, Box } from "@mui/material";

import theme from "./theme/theme";
import Navbar from "./components/Navbar";

import MainPage from "./pages/MainPage";
import FavouriteItems from "./pages/FavouriteItems";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid2 container sx={{ height: "100vh" }}>
          {/* Navbar - Fixed on the Right side */}
          <Grid2
            item
            xs={2}
            sx={{ position: "fixed", top: 0, right: 0, height: "100vh" }}
          >
            <Navbar />
          </Grid2>

          <Grid2 item xs={12} sx={{ left: 181, width: "100%" }}>
            {/* Content Section */}
            <Box sx={{ flex: 1, overflow: "auto" }}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/favourites" element={<FavouriteItems />} />
                <Route path="/edit-product" element={<EditProduct />} />
                <Route path="/add-product" element={<AddProduct />} />
              </Routes>
            </Box>
          </Grid2>
        </Grid2>
      </Router>
    </ThemeProvider>
  );
}

export default App;
