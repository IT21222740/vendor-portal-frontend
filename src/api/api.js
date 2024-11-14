import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchProducts = async () => {
  try {
    const response = await api.get("/products"); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    throw error; // Throw error to be caught in the Redux slice
  }
};

// Add a product
export const addProduct = async (productData) => {
  try {
    const response = await api.post("/products/add", productData, {
      headers: {
        "Content-Type": "multipart/form-data", // To handle file uploads
      },
    });
    return response.data; // Return the added product response
  } catch (error) {
    throw error; // Throw error to be caught in Redux slice
  }
};
