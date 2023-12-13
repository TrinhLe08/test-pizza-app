import httpRequestApi from "./api-request";

const createCrusts = async (informationCrusts) => {
  try {
    const response = await httpRequestApi.post("/crusts", informationCrusts);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateCrusts = async (CrustsId) => {       
  try {
    const response = await httpRequestApi.put(`/crusts/${CrustsId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allCrusts = async () => {
  try {
    const response = await httpRequestApi.get("/crusts/get/all");
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteCrusts = async (CrustsId) => {
  try {
    const response = await httpRequestApi.delete(`/crusts/${CrustsId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const CrustsApi = {
    createCrusts,
    updateCrusts,
    allCrusts,
    deleteCrusts
}