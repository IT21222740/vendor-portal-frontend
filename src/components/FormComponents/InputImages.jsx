import React from "react";
import { Box, Grid2, Typography, Button } from "@mui/material";

const InputImages = ({ images, setImages }) => {
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    // Update images state with selected files (not URLs)
    setImages((prevImages) => [...prevImages, ...files]);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid2 container alignItems="flexStart">
        {/* Product Images title */}
        <Grid2 item md={2} xs={12} textAlign="left">
          <Typography variant="h3">Product Images</Typography>
          <Typography variant="body2" color="textSecondary">
            JPEG, PNG, SVG, or GIF
            <br />
            (Maximum file size 50MB)
          </Typography>
        </Grid2>

        {/* Add Images button */}
        <Grid2
          item
          md={4}
          xs={12}
          textAlign="left"
          marginRight={2}
          marginLeft={2}
        >
          <Button
            variant="text"
            color="secondary"
            component="label"
            sx={{ textDecoration: "underline" }}
          >
            Add Images
            <input
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleImageChange}
            />
          </Button>
        </Grid2>

        {/* Display selected image thumbnails */}
        {images.length > 0 && (
          <Grid2 item xs={12} sx={{ marginTop: 2 }}>
            <Grid2 container spacing={2}>
              {images.map((file, index) => (
                <Grid2 item key={index}>
                  {/* Display thumbnail using the URL.createObjectURL */}
                  <Box
                    component="img"
                    src={URL.createObjectURL(file)}
                    alt={`Selected image ${index + 1}`}
                    sx={{
                      width: 85,
                      height: 85,
                      objectFit: "cover",
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
};

export default InputImages;
