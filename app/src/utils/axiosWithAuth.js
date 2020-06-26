import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://expat-journal-4.herokuapp.com/",
  });
};
export default axiosWithAuth;
