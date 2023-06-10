import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    axios.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (
          (err.response && err.response.status === 401) ||
          err.response.status === 403
        ) {
          await logOut();
          console.log("logout");
          navigate("/login");
        }
        return Promise.reject(err);
      }
    );
  }, [axiosSecure, logOut, navigate]);
  return [axiosSecure];
};
export default useAxiosSecure;
