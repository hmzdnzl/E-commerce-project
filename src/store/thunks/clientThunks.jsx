import axiosInstance from "../../api/axiosInstance.js";
import { setRoles, setUser } from "../../reducers/clientReducer";
import { toast } from "react-toastify";


export function fetchRoles() {
  return async function(dispatch) {
    try {
      const response = await axiosInstance.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
    }
    
  };  
}

export function loginUserThunk(email, password, rememberMe) {
  return async function(dispatch) {
    try {
      const response = await axiosInstance.post("/login", { email, password });
       if (response.data.token) {
  localStorage.setItem("token", response.data.token);
}
      dispatch(setUser(response.data));      
      if (rememberMe) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("rememberMe", "true");        
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("user");
      } else {       
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        localStorage.setItem("rememberMe", "false");        
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }
      window.history.back();
    } catch (error) {
      localStorage.setItem("isLoggedIn", "false");
      sessionStorage.setItem("isLoggedIn", "false");
      toast.error("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
    }
  };
}

export function verifyUserThunk() {
  return async function(dispatch) {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance.defaults.headers["Authorization"] = token;
      try {
        const response = await axiosInstance.get("/verify");
      
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          axiosInstance.defaults.headers["Authorization"] = response.data.token;
        }
        dispatch(setUser(response.data.user || response.data));
      } catch (error) {
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers["Authorization"];       
      }
    }
  };
}

