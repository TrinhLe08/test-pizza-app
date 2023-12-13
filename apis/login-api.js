import httpRequest from "./axios-http-request";

const logiUsers = async (informationUser) => {
  try {
    const response = await httpRequest.post("/users/login", informationUser);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const loginApi = {
    logiUsers,
}