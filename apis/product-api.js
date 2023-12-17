import httpRequestApi from "./api-request";

const createProduct = async (informationProduct) => {
  try {
    const response = await httpRequestApi.post("/products", informationProduct);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateProduct = async (ProductId) => {       
  try {
    const response = await httpRequestApi.put(`/products/${ProductId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allProduct = async () => {
  try {
    const response = await httpRequestApi.get("/products/get/all");
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteProduct = async (ProductId) => {
  try {
    const response = await httpRequestApi.delete(`/products/${ProductId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const ProductApi = {
    createProduct,
    updateProduct,
    allProduct,
    deleteProduct
}