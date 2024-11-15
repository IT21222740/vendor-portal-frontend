import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoritesSlice";
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
import favouriteIcon from "../assets/starred.svg";

const TableFav = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items); // Only favorite products

  // Handle adding/removing product to/from favorites
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
          {/* Display only favorite products */}
          {favorites.map((favorite) => (
            <TableRow key={favorite._id}>
              <TableCell>
                <Typography variant="h3" color="highlight">
                  {favorite.sku}
                </Typography>
              </TableCell>
              <TableCell>
                {favorite.images && favorite.images.length > 0 ? (
                  <img
                    src={favorite.images[0]}
                    alt={favorite.name}
                    width={50}
                  />
                ) : (
                  <img
                    src="/path/to/placeholder-image.png"
                    alt="Placeholder"
                    width={50}
                  />
                )}
              </TableCell>
              <TableCell>
                <Typography variant="h3">{favorite.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h3">{favorite.qty}</Typography>
              </TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 3,
                }}
              >
                <IconButton aria-label="delete">
                  <img src={deleteIcon} alt="Delete" width="25" height="25" />
                </IconButton>
                <IconButton aria-label="edit">
                  <img src={editIcon} alt="Edit" width="25" height="25" />
                </IconButton>
                <IconButton onClick={() => handleFavoriteClick(favorite)}>
                  <img
                    src={
                      favorites.some((item) => item._id === favorite._id)
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
    </TableContainer>
  );
};

export default TableFav;
