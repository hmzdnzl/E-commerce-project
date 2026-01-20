import axios from "axios";
import { useEffect } from "react";
import axiosInstance from "./../api/axiosInstance";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../store/thunks/addressThunk";
import { useForm } from "react-hook-form";
import { fetchCards, createCard } from "../store/thunks/cardThunk";
import { withRouter } from "react-router-dom";
import AddressForm from "../layout/AddressForm";
import CreditCardForm from "../layout/CreditCardForm";

function OrderPage(props) {
  const [responseData, setResponseData] = useState({});
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.addresses);
  const cards = useSelector((state) => state.card.cards);
  const [addressShowHideForm, setAddressShowHideForm] = useState(false);
  const [cardShowHideForm, setCardShowHideForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state } = props.location || {};
  const history = props.history;
  const { total, shippingCost, selectedItems, cart } = state || {};
  const [addressAndCartData, setAddressAndCartData] = useState(false);
  const[orderSubmitRequest,setOrderSubmitRequest]=useState({
  address_id: null,
  order_date: new Date().toISOString(),
  card_no: "",
  card_name: "",
  card_expire_month: "",
  card_expire_year: "",
  card_ccv: "",
  price: 0,
  products: []
});

  const[deneme,setDeneme]=useState(false);

  useEffect(() => {
    if (!state) {
      history.push("/shopping-cart");
    }
  }, [state, history]);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);



/*   function handleDeneme(){
    if(deneme===false){
      setDeneme(true);
    }else{
      setDeneme(false);
    }
  }
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
  }, [deneme]); */

  //console.log(deneme+" MEVCUT TOKEN: " + localStorage.getItem("token"));

/*     useEffect(() => {
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

      useEffect(() => {
    axios.get("https://workintech-fe-ecommerce.onrender.com/user/card", {
      headers: {
        Authorization: axiosInstance.defaults.headers.common["Authorization"],
      },
    })
    .then((response) => {
      console.log("Kart verisi:", response.data);
    })
    .catch((error) => {
      console.error("Kart verisi alınırken hata oluştu:", error);
    });
  }, []); */

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

      useEffect(() => {
    axios.get("https://workintech-fe-ecommerce.onrender.com/user/card", {
      headers: {
        Authorization: axiosInstance.defaults.headers.common["Authorization"],
      },
    })
    .then((response) => {
      console.log("Kart verisi:", response.data);
    })
    .catch((error) => {
      console.error("Kart verisi alınırken hata oluştu:", error);
    });
  }, []);

 

  

  function handleShowHideAddressForm(event) {
    event.preventDefault();
    setAddressShowHideForm((prev) => !prev);
    //console.log(addressShowHideForm);
  }

  function handleShowHideCardForm(event) {
    event.preventDefault();
    setCardShowHideForm((prev) => !prev);
    //console.log(cardShowHideForm);
  }

  function handleCompletePurchase() {
    alert("Satın alma işlemi tamamlandı!");
  }

  function handleAddress(event) {
    event.preventDefault();
    setAddressAndCartData(false);
    //console.log(addressAndCartData);
  }

  function handlePaymentDetail(event) {
    event.preventDefault();
    setAddressAndCartData(true);
    //console.log(addressAndCartData);
  }

  function addressIdonChange(event) {
    const selectedAddressId = Number(event.target.value);
    setOrderSubmitRequest((prevState) => ({
      ...prevState,
      address_id: selectedAddressId,
    }));
  }

  function handleDeneme() {
    const token = localStorage.getItem("token"); // veya başka bir yerde tutuluyorsa oradan al
 axios.post(
    "https://workintech-fe-ecommerce.onrender.com/user/address",
    {
      title: "Ev",
      name: "kisi",
      surname: "Yılmaz",
      phone: "5555555555",
      city: "İstanbul",
      district: "Kadıköy",
      neighborhood: "Moda",
      address: "Sokak 1, No:2"
    },
    {
      headers: {
        Authorization: token
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

/* 
 const token = localStorage.getItem("token"); // veya başka bir yerde tutuluyorsa oradan al
  const addressId = 4;
 axios.delete(
    `https://workintech-fe-ecommerce.onrender.com/user/address/${addressId}`,  
    {
      headers: {
        Authorization: token
      }
    }
  )
  .then((response) => {
    console.log("Adres verisi:", response.data);
  })
  .catch((error) => {
    console.error("Adres verisi alınırken hata oluştu:", error);
  });
*/

/*   axios.post(
    "https://workintech-fe-ecommerce.onrender.com/user/address",
    {
      title: "Ev",
      name: "kisi",
      surname: "Yılmaz",
      phone: "5555555555",
      city: "İstanbul",
      district: "Kadıköy",
      neighborhood: "Moda",
      address: "Sokak 1, No:2"
    },
    {
      headers: {
        Authorization: token
      }
    }
  )
  .then((response) => {
    console.log("Adres verisi:", response.data);
  })
  .catch((error) => {
    console.error("Adres verisi alınırken hata oluştu:", error);
  }); */

  const onAddressSubmitSecond = async (data) => {
    console.log("Form submit edildi");
    try {
      const payload = {
        title: data.title,
        phone: data.phone,
        name: data.name,
        surname: data.surname,        
        city: data.city,
        district: data.district,
        neighborhood: data.neighborhood,
        address: data.address,
      };
        const response = await axiosInstance.post("/user/address", payload);
        dispatch(fetchAddresses());
        console.log(localStorage.getItem("token") + " from axiosInstance");
        alert("Address added successfully!");
    } catch (error) {
      alert("Error occurred while adding address!");
      console.error("Address addition error:", error);
       console.log(localStorage.getItem("token")+" from axiosInstance");
    }
    console.log("onSubmit fonksiyonu bitti");
  };

  return (
    <section className="flex justify-center font-montserrat items-center flex-col md:flex md:flex-row px-4 w-full">

      <div className="flex flex-col w-full md:w-[70%]">
        <section id="addressShowCardShowLinks" className="flex justify-between">
          <a
            onClick={handleAddress}
            className="w-[50%] flex items-center justify-center h-12 text-center border border-black"
            href="#"
          >
            Address Info
          </a>
          <a
            onClick={handlePaymentDetail}
            className="w-[50%] flex h-12 items-center justify-center text-center border border-black"
            href="#"
          >
            Payment Detail
          </a>
        </section>
        <section id="addressAndCardFields" className=" flex justify-between">
          <div id="addressField"
            className={`border-gray-500 flex flex-col w-full ${
              addressAndCartData ? "hidden" : "border"
            }`}
          >
            <div id="addAddressAndBackButton"
              className="flex justify-between pr-4"
            >
              <h1 className="py-4 px-12 text-[#252B42] flex flex-col font-montserrat font-bold text-2xl">
                Order Page
              </h1>
              <div className="gap-x-2 mt-2 flex justify-end w-[30%]">
                <button
                  onClick={handleShowHideAddressForm}
                  className="border border-[#252B42] bg-[#252B42] w-[50%]  rounded-md h-7 text-white"
                >
                  +Add Address
                </button>
                <button
                  onClick={() => history.push("/shopping-cart")}
                  className="border border-[#252B42] bg-[#252B42] w-[30%]  rounded-md h-7 text-white"
                >
                  Back
                </button>
              </div>
            </div>

            <section id="addressForm"
              className={` flex ${addressShowHideForm ? "block" : "hidden"}`}
            >
              <AddressForm/>
            </section>
            <div id="addresssesInfos" 
            className="border w-[40%] pl-2"> 
              
              {Array.isArray(addresses) && addresses.length > 0 ? (
    addresses.map((address, idx) => (
      <div key={idx}>
        <div className="flex gap-2">
          <input type="radio" name="address" value={address.id} onChange={addressIdonChange} />
          <p>{address.title}</p>
        </div>
        <div className="flex gap-2">
          <p>Phone:</p>
          <p>{address.phone}</p>
        </div>
        <div className="flex gap-2">
          <p>Name:</p>
          <p> {address.name}</p>
        </div>
        <div className="flex gap-2">
          <p>Surname:</p>
          <p> {address.surname}</p>
        </div>
        <div className="flex gap-2">
          <p>City:</p>
          <p>{address.city}</p>
        </div>
        <div className="flex gap-2">
          <p>District:</p>
          <p>{address.district}</p>
        </div>
        <div className="flex gap-2">
          <p>Neighborhood:</p>
          <p>{address.neighborhood}</p>
        </div>
        <div className="flex gap-2">
          <p>Address:</p>
          <p>{address.address}</p>
        </div>
        <hr />
      </div>
    ))
  ) : (
    <p>Adres bulunamadı.</p>
            )}</div>
          </div>
          <div id="cardField"
            className={`w-full border border-gray-500 ${
              addressAndCartData ? "border" : "hidden"
            }`}
          >
            <div className={`border-gray-500 flex flex-col w-full`}>
              <div
                id="addCardAndBackButton"
                className="flex justify-between pr-4"
              >
                <h1 className="py-4 px-12 text-[#252B42] flex flex-col font-montserrat font-bold text-2xl">
                  Card Info
                </h1>
                <div className="gap-x-2 mt-2 flex justify-end w-[30%]">
                  <button
                    onClick={handleShowHideCardForm}
                    className="border border-[#252B42] bg-[#252B42] w-[50%]  rounded-md h-7 text-white"
                  >
                    +Add Card
                  </button>
                  <button
                    onClick={() => history.push("/shopping-cart")}
                    className="border border-[#252B42] bg-[#252B42] w-[30%]  rounded-md h-7 text-white"
                  >
                    Back
                  </button>
                </div>
              </div>

              <section id="cardForm"
                className={` flex ${cardShowHideForm ? "block" : "hidden"}`}
              >
                <CreditCardForm/>
              </section>
              <div id="cardsInfos">
                {Array.isArray(cards) && cards.length > 0 ? (
                  cards.map(card => (
                    <div key={card.card_no}>
                      <div className="flex gap-2">
                        <p>Card Owner Name:</p>
                        <p>{card.name_on_card}</p>
                      </div>
                      <div className="flex gap-2">
                        <p>Card No:</p>
                        <p>{card.card_no}</p>
                      </div>
                      <div className="flex gap-2">
                        <p>Expiration Date:</p>
                        <p>{card.expire_month} / {card.expire_year} </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No saved cards.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="orderSummaryField" className=" font-montserrat mt-5 flex flex-col ">
        <section className="border border-gray-300 gap-y-3 flex flex-col">
          <p className="p-4 ">ORDER SUMMARY</p>
          <div className="flex justify-between px-4">
            <span className="">Total Price</span>
            <p className="font-bold">{total} ₺</p>
          </div>
          <div className="flex justify-between px-4">
            <span>Shipping Payment</span>
            <p className="font-bold">
              {parseFloat(total) === 0 ? 0 : shippingCost} ₺
            </p>
          </div>
          <div className="flex justify-between px-4">
            <span
              className={`w-[60%] flex flex-wrap h-auto ${
                parseFloat(total) > 150 ? "" : "hidden"
              }`}
            >
              Free shipping on purchases over 150₺
            </span>
            <p
              className={`font-bold ${parseFloat(total) > 150 ? "" : "hidden"}`}
            >
              - {shippingCost} ₺
            </p>
          </div>
        </section>
        <div className="flex justify-between px-4 border border-gray-300 mt-0 p-2">
          <span className="">Grand Total</span>
          <p className="font-bold">
            {parseFloat(total) === 0
              ? "0.00"
              : parseFloat(total) > 150
              ? (parseFloat(total) - shippingCost).toFixed(2)
              : (parseFloat(total) + shippingCost).toFixed(2)}{" "}
            ₺
          </p>
        </div>
        {Array.isArray(cart) && cart.length !== 0 && (
          <div className="gap-x-4 flex w-full justify-end px-2 py-4">
            <button
              disabled={
                !Array.isArray(selectedItems) || selectedItems.length === 0
              }
              onClick={handleCompletePurchase}
              className={`border w-full border-[#252B42] p-2 rounded-lg ${
                !Array.isArray(selectedItems) || selectedItems.length === 0
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-[#252B42] text-white"
              }`}
            >
              Save & Continue
            </button>
          
          </div>
        )}
          {/* <button onClick={handleDeneme} className="border w-full border-[#252B42] p-2 rounded-lg bg-green-500 text-white">
              deneme
            </button> */}
            <button onClick={handleDeneme}  className="border w-full border-[#252B42] p-2 rounded-lg bg-green-500 text-white">
              deneme
            </button>
      </div>
      {/* <form id="addressSubmitSecond"
                className="flex flex-col pl-2 pt-2 gap-y-1 w-full mr-2 md:mr-0 md:w-[90%]"
                onSubmit={handleSubmit(onAddressSubmitSecond)}
              >
                <div className="flex gap-2 justify-between">
                  <p>Address Title:</p>
                  <input
                    className="border w-[75%] pl-1 border-black"
                    name="title"
                    {...register("title", { required: true })}
                    placeholder="Address Title"
                  />
                  {errors.title && (
                    <span className="text-red-500">
                      Address Title is required
                    </span>
                  )}
                </div>
                <div className="flex gap-2 justify-between">
                  <p>Name:</p>
                  <input
                    className="border w-[75%] pl-1 border-black"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>

                <div className="flex gap-2 justify-between">
                  <p>Surname:</p>
                  <input
                    className="border w-[75%] pl-1 border-black"
                    name="surname"
                    {...register("surname", { required: true })}
                    placeholder="Surname"
                  />
                  {errors.surname && (
                    <span className="text-red-500">Surname is required</span>
                  )}
                </div>

                <div className="flex gap-2 justify-between">
                  <p>Phone:</p>
                  <input
                    className="border w-[75%] pl-1 border-black"
                    name="phone"
                    {...register("phone", { required: true })}
                    placeholder="Phone"
                  />
                  {errors.phone && (
                    <span className="text-red-500">Phone is required</span>
                  )}
                </div>

                <div className="flex gap-2 justify-between">
                  <p>City:</p>
                  <select
                    className="border w-[75%] border-black"
                    name="city"
                    {...register("city", { required: true })}
                    placeholder="City"
                  >
                    <option value="">Select a city</option>
                    <option value="Adana">Adana</option>
                    <option value="Adıyaman">Adıyaman</option>
                    <option value="Afyonkarahisar">Afyonkarahisar</option>
                    <option value="Ağrı">Ağrı</option>
                    <option value="Aksaray">Aksaray</option>
                    <option value="Amasya">Amasya</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Ardahan">Ardahan</option>
                    <option value="Artvin">Artvin</option>
                    <option value="Aydın">Aydın</option>
                    <option value="Balıkesir">Balıkesir</option>
                    <option value="Bartın">Bartın</option>
                    <option value="Batman">Batman</option>
                    <option value="Bayburt">Bayburt</option>
                    <option value="Bilecik">Bilecik</option>
                    <option value="Bingöl">Bingöl</option>
                    <option value="Bitlis">Bitlis</option>
                    <option value="Bolu">Bolu</option>
                    <option value="Burdur">Burdur</option>
                    <option value="Bursa">Bursa</option>
                    <option value="Çanakkale">Çanakkale</option>
                    <option value="Çankırı">Çankırı</option>
                    <option value="Çorum">Çorum</option>
                    <option value="Denizli">Denizli</option>
                    <option value="Diyarbakır">Diyarbakır</option>
                    <option value="Düzce">Düzce</option>
                    <option value="Edirne">Edirne</option>
                    <option value="Elazığ">Elazığ</option>
                    <option value="Erzincan">Erzincan</option>
                    <option value="Erzurum">Erzurum</option>
                    <option value="Eskişehir">Eskişehir</option>
                    <option value="Gaziantep">Gaziantep</option>
                    <option value="Giresun">Giresun</option>
                    <option value="Gümüşhane">Gümüşhane</option>
                    <option value="Hakkari">Hakkari</option>
                    <option value="Hatay">Hatay</option>
                    <option value="Iğdır">Iğdır</option>
                    <option value="Isparta">Isparta</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Kahramanmaraş">Kahramanmaraş</option>
                    <option value="Karabük">Karabük</option>
                    <option value="Karaman">Karaman</option>
                    <option value="Kars">Kars</option>
                    <option value="Kastamonu">Kastamonu</option>
                    <option value="Kayseri">Kayseri</option>
                    <option value="Kırıkkale">Kırıkkale</option>
                    <option value="Kırklareli">Kırklareli</option>
                    <option value="Kırşehir">Kırşehir</option>
                    <option value="Kilis">Kilis</option>
                    <option value="Kocaeli">Kocaeli</option>
                    <option value="Konya">Konya</option>
                    <option value="Kütahya">Kütahya</option>
                    <option value="Malatya">Malatya</option>
                    <option value="Manisa">Manisa</option>
                    <option value="Mardin">Mardin</option>
                    <option value="Mersin">Mersin</option>
                    <option value="Muğla">Muğla</option>
                    <option value="Muş">Muş</option>
                    <option value="Nevşehir">Nevşehir</option>
                    <option value="Niğde">Niğde</option>
                    <option value="Ordu">Ordu</option>
                    <option value="Osmaniye">Osmaniye</option>
                    <option value="Rize">Rize</option>
                    <option value="Sakarya">Sakarya</option>
                    <option value="Samsun">Samsun</option>
                    <option value="Siirt">Siirt</option>
                    <option value="Sinop">Sinop</option>
                    <option value="Sivas">Sivas</option>
                    <option value="Şanlıurfa">Şanlıurfa</option>
                    <option value="Şırnak">Şırnak</option>
                    <option value="Tekirdağ">Tekirdağ</option>
                    <option value="Tokat">Tokat</option>
                    <option value="Trabzon">Trabzon</option>
                    <option value="Tunceli">Tunceli</option>
                    <option value="Uşak">Uşak</option>
                    <option value="Van">Van</option>
                    <option value="Yalova">Yalova</option>
                    <option value="Yozgat">Yozgat</option>
                    <option value="Zonguldak">Zonguldak</option>
                  </select>
                  {errors.city && (
                    <span className="text-red-500">City is required</span>
                  )}
                </div>

                <div className="flex gap-2 justify-between">
                  <p>District:</p>
                  <input
                    className="border w-[75%] pl-1 border-black"
                    name="district"
                    {...register("district", { required: true })}
                    placeholder="District"
                  />
                  {errors.district && (
                    <span className="text-red-500">District is required</span>
                  )}
                </div>
                <div className="flex gap-2 justify-between">
                  <p>Neighborhood:</p>
                  <input
                    className="border w-[75%] pl-1 border-black"
                    name="neighborhood"
                    {...register("neighborhood", { required: true })}
                    placeholder="Neighborhood"
                  />
                  {errors.neighborhood && (
                    <span className="text-red-500">
                      Neighborhood is required
                    </span>
                  )}
                </div>
                <div className="flex gap-2  justify-between">
                  <p>Address:</p>
                  <textarea
                    className="border w-[75%] pl-1 h-24 border-black resize-none"
                    name="address"
                    rows={4}
                    {...register("address", { required: true })}
                    placeholder="Adres detayları (Sokak, bina, kapı no vs.)"
                  />
                  {errors.address && (
                    <span className="text-red-500">
                      Address is required
                    </span>
                  )}
                </div>
                <div className="flex mt-2 justify-end">
                  <button
                    className="border border-[#252B42] bg-[#252B42] w-[30%]  rounded-md h-7 text-white"
                    type="submit"
                  >
                  222  Save Address 222
                  </button>
                </div>
              </form> */}
    </section>
  );
}

export default withRouter(OrderPage);
