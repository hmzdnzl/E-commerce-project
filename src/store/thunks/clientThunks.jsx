import axiosInstance from "../../api/axiosInstance.js";
import { setRoles, setUser } from "../../reducers/clientReducer";
import { toast } from "react-toastify";


export function fetchRoles() {
  return async function(dispatch) {
    try {
      const response = await axiosInstance.get("/roles");
      dispatch(setRoles(response.data));
      console.log("Roller alındı:", response.data);
    } catch (error) {
      console.error("Roller alınamadı:", error);    
    }
    
  };  
}

export function loginUserThunk(email, password) {
  return async function(dispatch) {
    console.log("Thunk çalıştı:", email, password);
    try {
      const response = await axiosInstance.post("/login", { email, password });
      dispatch(setUser(response.data));
      localStorage.setItem("isLoggedIn", "true");
      console.log("Login durumu:", true);
      //window.history.back();
    } catch (error) {
      localStorage.setItem("isLoggedIn", "false");
      console.log("Login durumu:", false);
      console.error("Login failed:", error);
      toast.error("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
    }
  };
}

