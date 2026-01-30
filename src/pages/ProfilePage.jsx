import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import { useDispatch } from "react-redux";
import AddressInfos from "../layout/AddressInfos";
import CreditCardInfos from "../layout/CreditCardInfos";

export default function ProfilePage() {
  const [showSection, setShowSection] = useState("1");
  const [orderData, setOrderData] = useState([]);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showHideOrderDetails, setShowHideOrderDetails] = useState("");
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
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/user/address", {
        headers: {
          Authorization: axiosInstance.defaults.headers.common["Authorization"],
        },
      })
      .then((response) => {
        setSavedAddresses(response.data);
      })
      .catch((error) => {});
  }, []);

  function deneme() {
    const token = localStorage.getItem("token");
    axios
      .put(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        {
          id: "4",
          title: "Ev",
          name: "kisi",
          surname: "Yılmaz",
          phone: "5555555555",
          city: "İstanbul",
          district: "Kadıköy",
          neighborhood: "Moda",
          address: "Sokak 1, No:654654654564",
        },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((response) => {})
      .catch((error) => {});
  }

  function bringAddressTitleById(addressId) {
    let foundAddressTitle = "";
    savedAddresses.filter((address) => {
      if (address.id === addressId) {
        foundAddressTitle = address.title;
      }
    });
    return foundAddressTitle;
  }

  function bringAddressCityById(addressId) {
    let foundAddressCity = "";
    savedAddresses.filter((address) => {
      if (address.id === addressId) {
        foundAddressCity = address.city;
      }
    });
    return foundAddressCity;
  }

  function bringAddressDistrictById(addressId) {
    let foundAddressDistrict = "";
    savedAddresses.filter((address) => {
      if (address.id === addressId) {
        foundAddressDistrict = address.district;
      }
    });
    return foundAddressDistrict;
  }

  function handleShowHideOrderDetails(event) {
    event.preventDefault();
    const orderId = event.currentTarget.value;
    setShowHideOrderDetails((prev) => (prev === orderId ? "" : orderId));
  }

  function handleSectionChange(event) {
    event.preventDefault();
    setShowSection(event.target.value);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/order", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="flex flex-col font-montserrat">
      <div className="flex flex-col px-4 gap-y-4">
        <section className="flex flex-col items-center mx-auto font-montserrat border border-gray-400 px-8 gap-y-3">
          <h1 className="[#252B42] font-bold">User Information</h1>
          <div className="flex flex-col gap-y-2 text-gray-600 font-bold">
            <div className="flex">
              <span>Name: </span>
              <span>{userState.name}</span>
            </div>
            <div>
              <span>Email: </span>
              <span>{userState.email}</span>
            </div>
            <div>
              <span>Role: </span>
              <span>{RoleShown()}</span>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap items-center justify-center">
          <button
            className="border p-2"
            onClick={handleSectionChange}
            value="1"
          >
            Saved Addresses
          </button>
          <button
            className="border p-2"
            onClick={handleSectionChange}
            value="2"
          >
            Saved Payment Methods
          </button>
          <button
            className="border p-2"
            onClick={handleSectionChange}
            value="3"
          >
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
        <div className={"" + (showSection === "3" ? "block" : "hidden")}>
          <section className="flex flex-col justify-center w-full items-center ">
            <p hidden={orderData.length !== 0}>
              There is no recent orders found.
            </p>
            {orderData.map((order) => (
              <div key={order.id} className="border border-gray-300 pt-4 px-2 mb-4 w-full">
                <button
                  onClick={handleShowHideOrderDetails}
                  value={order.id}
                  className=" flex flex-wrap justify-between w-full font-bold text-[#152e92]"
                >
                  <div className="w-[240px]">
                    Order Date:{" "}
                    {new Date(order.order_date).toLocaleString("tr-TR", { dateStyle: "short", timeStyle: "short" })}
                  </div>
                  <div className="w-[150px] ">Total: {order.price.toFixed(2)} ₺</div>
                </button>
                {showHideOrderDetails === String(order.id) && (
                  <section className="mt-4 flex flex-col gap-y-2">
                    <div>
                      <p className="text-[#214bc0] font-semibold">
                        Order Items:
                      </p>
                      <div>
                        {order.products.map((item, index) => {
                          return (
                            <div key={index} className="flex justify-between pr-10">
                              <p>
                                {item.name} (x{item.count})
                              </p>
                              <p>
                                {(
                                  Number(item.price) * Number(item.count)
                                ).toFixed(2)}{" "}
                                ₺
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p>Shipping Address:</p>
                      <p>{bringAddressTitleById(order.address_id)}</p>
                      <p>
                        {bringAddressDistrictById(order.address_id) +
                          "/" +
                          bringAddressCityById(order.address_id)}
                      </p>
                      <p></p>
                    </div>
                    <div>
                      <p>Card Information:</p>
                      <p>{order.card_name}</p>
                      <p>
                        {String(order.card_no)[0] +
                          String(order.card_no)[1] +
                          "** **** **** **" +
                          String(order.card_no)[
                            String(order.card_no).length - 2
                          ] +
                          String(order.card_no)[
                            String(order.card_no).length - 1
                          ]}
                      </p>
                    </div>
                  </section>
                )}
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
