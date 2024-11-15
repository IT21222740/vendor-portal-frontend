// src/components/ProductTable.js
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../features/productsSlice";
import { addFavorite, removeFavorite } from "../features/favoritesSlice"; // Import the favorite actions
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Typography,
  Modal,
  Box,
  Button,
} from "@mui/material";
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";
import starIcon from "../assets/star.svg";
import favouriteIcon from "../assets/starred.svg";
import alertIcon from "../assets/alert.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";

const ProductTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const favorites = useSelector((state) => state.favorites.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleDelete = () => {
    if (selectedProduct) {
      dispatch(deleteProduct(selectedProduct.sku)); // Dispatch delete action
      handleClose();
    }
  };

  const handleEditClick = (product) => {
    navigate("/edit-product", { state: { product } }); // Pass product data as state
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, location]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const handleFavoriteClick = (product) => {
    const isFavorite = favorites.some((item) => item._id === product._id);

    if (isFavorite) {
      dispatch(removeFavorite(product)); // Remove from favorites if already in the list
    } else {
      dispatch(addFavorite(product)); // Add to favorites if not already in the list
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h3" color="secondary">
                SKU
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3" color="secondary">
                Image
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3" color="secondary">
                Product Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3" color="secondary">
                Qty
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3" color="secondary"></Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell>
                <Typography variant="h3" color="highlight">
                  {product.sku}
                </Typography>
              </TableCell>
              <TableCell>
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.name} width={50} />
                ) : (
                  <img
                    src="/path/to/placeholder-image.png"
                    alt="Placeholder"
                    width={50}
                  />
                )}
              </TableCell>

              <TableCell>
                <Typography variant="h3">{product.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h3">{product.qty}</Typography>
              </TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 3,
                }}
              >
                <IconButton
                  aria-label="delete"
                  onClick={() => handleOpen(product)}
                >
                  <img src={deleteIcon} alt="Delete" width="25" height="25" />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEditClick(product)}
                >
                  <img src={editIcon} alt="Edit" width="25" height="25" />
                </IconButton>
                <IconButton
                  aria-label="star"
                  onClick={() => handleFavoriteClick(product)} // Trigger favorite action
                >
                  <img
                    src={
                      favorites.some((item) => item._id === product._id)
                        ? favouriteIcon // If product is in favorites
                        : starIcon // If product is not in favorites
                    }
                    alt="Star"
                    width="25"
                    height="25"
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "gray",
            }}
          >
            <CloseIcon />
          </IconButton>
          <img src={alertIcon} alt="Alert" width="50" height="50" />
          <Typography variant="h2" color="primary" sx={{ textAlign: "center" }}>
            ARE YOU SURE?
          </Typography>
          <Typography sx={{ mt: 2, textAlign: "center" }} variant="h3">
            You will not be able to undo this action if you proceed!
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}
          >
            <Button variant="outlined" onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default ProductTable;
