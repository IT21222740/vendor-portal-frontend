// src/components/ProductTable.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
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
} from "@mui/material";
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";
import starIcon from "../assets/star.svg";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const favorites = useSelector((state) => state.favorites.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

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
            <TableCell></TableCell>
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
              <TableCell sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton aria-label="delete">
                  <img src={deleteIcon} alt="Delete" width="25" height="25" />
                </IconButton>
                <IconButton aria-label="edit">
                  <img src={editIcon} alt="Edit" width="25" height="25" />
                </IconButton>
                <IconButton
                  aria-label="star"
                  onClick={() => handleFavoriteClick(product)} // Trigger favorite action
                  color={
                    favorites.some((item) => item.id === product.id)
                      ? "secondary"
                      : "default"
                  } // Change color if product is a favorite
                >
                  <img src={starIcon} alt="Star" width="25" height="25" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
