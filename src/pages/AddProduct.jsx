import React, { useState } from "react";
import { Box, Button, Typography, Container, Grid2 } from "@mui/material";
import ArrowIcon from "../assets/arrow.svg";
import FormInput from "../components/FormComponents/FormInput";
import FormInputDescription from "../components/FormComponents/FormInputDescription";
import InputImages from "../components/FormComponents/InputImages";

const AddProduct = () => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log(sku);
    console.log("Form submitted");
  };
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
        <img
          src={ArrowIcon}
          alt="Arrow"
          style={{ width: 25, height: 25, marginTop: 6 }}
        />
        <Typography
          variant="h2"
          color="secondary"
          sx={{ marginLeft: 1, marginTop: 1 }}
        >
          Add Product
        </Typography>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center the form horizontally
          minHeight: "60vh", // Ensure the form is centered with enough space
          width: "100%",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#ffffff",
            padding: 2,
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Grid2 container spacing={2} alignItems="center">
            <FormInput
              label="SKU"
              onChange={(e) => setSku(e.target.value)}
              value={sku}
            />
          </Grid2>

          <Grid2 container spacing={2} alignItems="center" marginTop={8}>
            <FormInput
              label="Name"
              onChange={(e) => setSku(e.target.value)}
              value={name}
            />
            <FormInput
              label="QTY"
              marginLeftTypo={25}
              marginLeftTextField={24}
              onChange={(e) => setQty(e.target.value)}
              value={qty}
            />
          </Grid2>

          <Grid2 container alignItems="center" marginTop={8}>
            <FormInputDescription />
          </Grid2>

          <Grid2 size={12} alignItems="center" marginTop={8}>
            <InputImages />
          </Grid2>

          <Grid2 size={12} marginTop={8}>
            <Grid2 size={2.5} marginLeft={109}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
                sx={{ height: "56px", width: "249px" }}
              >
                <Typography variant="h3">Add Product</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};

export default AddProduct;
