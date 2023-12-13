import httpRequestApi from "./api-request";

const createCategories = async (informationCategories) => {
  try {
    const response = await httpRequestApi.post("/categories", informationCategories);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateCategories = async (categoriesId) => {       
  try {
    const response = await httpRequestApi.put(`/categories/${categoriesId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allCategories = async () => {
  try {
    const response = await httpRequestApi.get("/categories/get/all");
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteCategories = async (categoriesId) => {
  try {
    const response = await httpRequestApi.delete(`/categoriess/${categoriesId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const categoriesApi = {
    createCategories,
    updateCategories,
    allCategories,
    deleteCategories
}