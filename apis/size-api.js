import httpRequestApi from "./api-request";

const createSizes = async (informationSizes) => {
  try {
    const response = await httpRequestApi.post("/sizes", informationSizes);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateSizes = async (SizesId) => {       
  try {
    const response = await httpRequestApi.put(`/sizes/${SizesId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allSizes = async () => {
  try {
    const response = await httpRequestApi.get("/sizes/get/all");
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteSizes = async (SizesId) => {
  try {
    const response = await httpRequestApi.delete(`/sizes/${SizesId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const SizesApi = {
    createSizes,
    updateSizes,
    allSizes,
    deleteSizes
}