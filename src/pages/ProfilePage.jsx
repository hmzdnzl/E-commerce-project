import { useState,useEffect } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import { useDispatch } from "react-redux";
import AddressInfos from "../layout/AddressInfos";
import CreditCardInfos from "../layout/CreditCardInfos";

 

export default function ProfilePage() {
    const[showSection, setShowSection] = useState("1");
    const dispatch = useDispatch();
  const userState =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user")) ||
    {};

function RoleShown() {
    if (userState.role_id == "1") {
        return "Admin";
    } else if (userState.role_id == "2") {
        return "Seller";
    } else if (userState.role_id == "3") {
        return "Customer";
    }
}



/*   useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]); */

    useEffect(() => {
    axios.get("https://workintech-fe-ecommerce.onrender.com/user/address", {
      headers: {
        Authorization: axiosInstance.defaults.headers.common["Authorization"],
      },
    })
    .then((response) => {
      console.log("Adres verisi:", response.data);
    })
    .catch((error) => {
      console.error("Adres verisi alınırken hata oluştu:", error);
    });
  }, []);

  function deneme() {
    const token = localStorage.getItem("token");
    axios.put(
    "https://workintech-fe-ecommerce.onrender.com/user/address",
    { id: "4",
      title: "Ev",
      name: "kisi",
      surname: "Yılmaz",
      phone: "5555555555",
      city: "İstanbul",
      district: "Kadıköy",
      neighborhood: "Moda",
      address: "Sokak 1, No:654654654564"
    },
    {
      headers: {
        Authorization: token,
      }
    }
  )
  .then((response) => {
    console.log("Adres verisi:", response.data);
  })
  .catch((error) => {
    console.error("Adres verisi alınırken hata oluştu:", error);
  });
  }

  

function handleSectionChange(event) {
    event.preventDefault();
 setShowSection(event.target.value);
}

console.log("Showing section:", showSection);

  return (
    <div className="flex flex-col font-montserrat">
 <div className="flex flex-col px-4 gap-y-4">
        <section className="flex flex-col items-center mx-auto font-montserrat border border-gray-400 px-8 gap-y-3">
          <h1 className="[#252B42] font-bold">User Information</h1>
          <div className="flex flex-col gap-y-2 text-gray-600 font-bold">
            
        <div className="flex">
            <span>Name: </span><span>{userState.name}</span>           
        </div>
        <div>
            <span>Email: </span><span>{userState.email}</span>
        </div>
        <div>
            <span>Role: </span><span>{RoleShown()}</span>
        </div>
        </div>
        </section>
        <section className="flex flex-wrap items-center justify-center">
            <button className="border p-2" onClick={handleSectionChange} value="1">
               Saved Addresses               
            </button>
            <button className="border p-2" onClick={handleSectionChange} value="2">
                Saved Payment Methods
            </button>
            <button className="border p-2" onClick={handleSectionChange} value="3">
               Recent Orders
            </button>
            
        </section>
    </div>
    <section className="px-4 flex flex-col items-center justify-center">
<div className={` border ${showSection === "1" ? "flex" : "hidden"}`}>
<AddressInfos showRadio={false} showButton={true} />
</div>
<div className={showSection === "2" ? "block" : "hidden"}>
<CreditCardInfos showRadio={false} showButton={true} />
</div>
<div className={showSection === "3" ? "block" : "hidden"}>orders</div>
    </section>
    </div>
   
  );
}