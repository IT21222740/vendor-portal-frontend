import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Container, Grid2 } from "@mui/material";
import ArrowIcon from "../assets/arrow.svg";
import FormInput from "../components/FormComponents/FormInput";
import FormInputDescription from "../components/FormComponents/FormInputDescription";
import EditedImages from "../components/FormComponents/EditedImages";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct, fetchProducts } from "../features/productsSlice";

function EditProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const dispatch = useDispatch(); // Hook to dispatch actions

  // Initialize state with product data (or empty if no product)
  const [sku, setSku] = useState(product?.sku || "");
  const [name, setName] = useState(product?.name || "");
  const [qty, setQty] = useState(product?.qty || "");
  const [description, setDescription] = useState(product?.description || "");
  const [images, setImages] = useState(product?.images || []);
  console.log(images);

  useEffect(() => {
    // If product data is available, set the state values accordingly
    if (product) {
      setSku(product.sku);
      setName(product.name);
      setQty(product.qty);
      setDescription(product.description);
      setImages(product.images);
    }
  }, [product]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("sku", sku);
    formData.append("name", name);
    formData.append("qty", qty);
    formData.append("description", description);
    // Log images before appending them to formData
    images.forEach((image) => {
      console.log("Appending image:", image);
      formData.append("images", image); // Append each image under the 'images' field
    });

    try {
      console.log(formData);
      await dispatch(
        updateProduct({ productId: product._id, productData: formData })
      );
      dispatch(fetchProducts());
      navigate("/");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
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
          Edit Product
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
          onSubmit={handleUpdateProduct}
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
              onChange={(e) => setName(e.target.value)}
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
            <FormInputDescription
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Grid2>

          <Grid2 size={12} alignItems="center" marginTop={8}>
            <EditedImages images={images} setImages={setImages} />{" "}
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
                <Typography variant="h3">Update Product</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
}

export default EditProduct;
