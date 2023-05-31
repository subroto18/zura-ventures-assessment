import axios from "axios";
export default () => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  let Api = axios.create({
    baseURL: "https://zura-venture-assessment-lti1.onrender.com/v1",
  });

  return Api;
};
