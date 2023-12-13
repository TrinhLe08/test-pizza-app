import httpRequestApi from "./api-request";

const createToppings = async (informationToppings) => {
  try {
    const response = await httpRequestApi.post("/toppings", informationToppings);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateToppings = async (ToppingsId) => {       
  try {
    const response = await httpRequestApi.put(`/toppings/${ToppingsId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allToppings = async () => {
  try {
    const response = await httpRequestApi.get("/toppings/get/all");
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteToppings = async (ToppingsId) => {
  try {
    const response = await httpRequestApi.delete(`/toppings/${ToppingsId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const ToppingsApi = {
    createToppings,
    updateToppings,
    allToppings,
    deleteToppings
}