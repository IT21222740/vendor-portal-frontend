import { Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

const EditedImages = ({ images, setImages }) => {
  const [imageList, setImageList] = useState(images || []);

  const removeImage = (imageIndex) => {
    const updatedImages = imageList.filter((_, index) => index !== imageIndex);
    setImageList(updatedImages);
    setImages(updatedImages);
  };

  const addImages = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      const updatedImageList = [...imageList, ...files];
      setImageList(updatedImageList);
      setImages(updatedImageList);
    }
  };

  // Cleanup function to revoke object URLs
  useEffect(() => {
    return () => {
      imageList.forEach((image) => {
        if (image instanceof File) {
          URL.revokeObjectURL(image);
        }
      });
    };
  }, [imageList]);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "140px" }}>
          <Typography variant="h3">Product Images</Typography>
          <Typography variant="secTextMed" color="highlight">
            JPEG, PNG, SVG or GIF
          </Typography>
          <Typography variant="secTextMed" color="highlight">
            (Maximum file size 50MB)
          </Typography>
        </div>

        {imageList.length > 0 ? (
          imageList.map((image, index) => {
            let imageSrc;
            // Check if image is a File object or base64 string
            if (image instanceof File) {
              imageSrc = URL.createObjectURL(image);
            } else if (
              typeof image === "string" &&
              image.startsWith("data:image")
            ) {
              imageSrc = image; // base64 string
            } else {
              imageSrc = ""; // Invalid or unknown format
            }

            return (
              <div key={index} style={{ margin: "10px", position: "relative" }}>
                <img
                  src={imageSrc}
                  alt={`Edited ${index}`}
                  style={{
                    width: "85px",
                    height: "85px",
                    objectFit: "cover",
                  }}
                />
                <button
                  onClick={() => removeImage(index)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                >
                  X
                </button>
              </div>
            );
          })
        ) : (
          <p>No images to display</p>
        )}

        <Button
          variant="text"
          color="secondary"
          component="label"
          sx={{ textDecoration: "underline" }}
        >
          <Typography color="secondary" variant="secTextMed">
            Edit Images
          </Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={addImages}
          />
        </Button>
      </div>
    </div>
  );
};

export default EditedImages;
