import httpRequest from "./axios-http-request";

const createUser = async (informationUser) => {
  try {
    const response = await httpRequest.post("/users", informationUser);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateUsers = async (informationUser) => {
  try {
    const response = await httpRequest.put("/users/me", informationUser);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updatePassword = async (newPassword) => {
  try {
    const response = await httpRequest.patch("/users/me", newPassword);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allUser = async () => {
  try {
    const response = await httpRequest.get("/users/all");
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const myInformation = async () => {
  try {
    const response = await httpRequest.get("/users/me");
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await httpRequest.delete(`/users/delete/${userId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const usersApi = {
    createUser,
    updateUsers,
    updatePassword,
    myInformation,
    allUser,
    deleteUser
}