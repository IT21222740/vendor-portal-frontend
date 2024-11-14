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
