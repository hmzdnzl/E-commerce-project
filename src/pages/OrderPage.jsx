import axios from "axios";
import { use, useEffect } from "react";
import axiosInstance from "./../api/axiosInstance";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../store/thunks/addressThunk";
import { useForm } from "react-hook-form";
import { fetchCards, createCard } from "../store/thunks/cardThunk";
import { withRouter } from "react-router-dom";
import AddressForm from "../layout/AddressForm";
import CreditCardForm from "../layout/CreditCardForm";
import AddressInfos from "../layout/AddressInfos";
import CreditCardInfos from "../layout/CreditCardInfos";
import { CreditCard } from "lucide-react";

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
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const [deneme, setDeneme] = useState(false);

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
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/user/address", {
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
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/user/card", {
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

  useEffect(() => {
    console.log("Selected address id:", selectedAddressId);
  }, [selectedAddressId]);

  useEffect(() => {
    console.log("Selected card id:", selectedCardId);
  }, [selectedCardId]);

  useEffect(() => {
    console.log("SEÇİLİ ÜRÜNLER:", selectedItems);
    console.log("CART İÇERİĞİ:", cart);
  }, [selectedItems]);


  


  function handleDeneme() {
    const token = localStorage.getItem("token"); // veya başka bir yerde tutuluyorsa oradan al
    axios
      .post(
        "https://workintech-fe-ecommerce.onrender.com/order",
        {
          address_id: 1,
          order_date: "2024-01-10T14:18:30",
          card_no: 1234123412341234,
          card_name: "Ali Baş",
          card_expire_month: 12,
          card_expire_year: 2026,
          card_ccv: 321,
          price: 1919,
          products: [
            {
              product_id: 12,
              count: 1,
              detail: "açık mavi - xl",
            },
            {
              product_id: 13,
              count: 2,
              detail: "siyah - lg",
            },
          ],
        },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((response) => {
        console.log("Sipariş verisi:", response.data);
      })
      .catch((error) => {
        console.error("Sipariş verisi alınırken hata oluştu:", error);
      });
  }

  function handleDeneme2() {
    const token = localStorage.getItem("token");
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/order", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("Sipariş verisi:", response.data);
      })
      .catch((error) => {
        console.error("Sipariş verisi alınırken hata oluştu:", error);
      });
  }

  const onOrderSubmit = async (data) => {
    if (!selectedAddressId) {
      alert("Lütfen bir adres seçin.");
      return;
    }
    if (!selectedCardId) {
      alert("Lütfen bir kredi kartı seçin.");
      return;
    }
    if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
      alert("Lütfen en az bir ürün seçin.");
      return;
    }
    const selectedCard = cards.find(card => card.id === selectedCardId);
    if (!selectedCard) {
      alert("Seçili kart bulunamadı.");
      return;
    }
    const selectedProducts = cart.filter(item => selectedItems.includes(item.id)).map(item => ({
      product_id: item.id,
      count: item.quantity,
      detail: item.selectedOptions || ""
    }));
    const token = localStorage.getItem("token");
    const payload = {
      address_id: selectedAddressId,
      order_date: new Date().toISOString(),
      card_no: selectedCard.card_no,
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: selectedCard.ccv,
      price: total,
      products: selectedProducts,
    };
    try {
      const response = await axios.post("https://workintech-fe-ecommerce.onrender.com/order", payload, {
        headers: {
          Authorization: token
        }
      });
      const orderedIds = selectedItems;
      const newCart = cart.filter(item => !orderedIds.includes(item.id));
      dispatch({ type: "SET_CART", payload: newCart });
      alert("Sipariş başarıyla oluşturuldu!");
      window.location.reload();
    } catch (error) {
      alert("Sipariş oluşturulurken hata oluştu!");
      console.error("Order error:", error);
    }
  };

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
          <div
            id="addressField"
            className={`border-gray-500 flex flex-col w-full ${
              addressAndCartData ? "hidden" : "border"
            }`}
          >
            <div
              id="addAddressAndBackButton"
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

            <section
              id="addressForm"
              className={` flex ${addressShowHideForm ? "block" : "hidden"}`}
            >
              <AddressForm />
            </section>
            <div id="addresssesInfos" className="border w-[40%] pl-2">
              <AddressInfos
                selectedAddressId={selectedAddressId}
                setSelectedAddressId={setSelectedAddressId}
              />
            </div>
          </div>
          <div
            id="cardField"
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

              <section
                id="cardForm"
                className={` flex ${cardShowHideForm ? "block" : "hidden"}`}
              >
                <CreditCardForm />
              </section>
              <div id="cardsInfos">
                <CreditCardInfos  selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="orderSummaryField"
        className=" font-montserrat mt-5 flex flex-col "
      >
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
              <form
               onSubmit={handleSubmit(onOrderSubmit)}
              action="">
               <button
               type="submit"
              disabled={
                !Array.isArray(selectedItems) || selectedItems.length === 0
              }
         
              className={`border w-full border-[#252B42] p-2 rounded-lg ${
                !Array.isArray(selectedItems) || selectedItems.length === 0
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-[#252B42] text-white"
              }`}
            >
              Complete Purchase
            </button>
              </form>
          
           
          </div>
        )}
        {/* <button onClick={handleDeneme} className="border w-full border-[#252B42] p-2 rounded-lg bg-green-500 text-white">
              deneme
            </button> */}
        <button
          onClick={handleDeneme}
          className="border w-full border-[#252B42] p-2 rounded-lg bg-green-500 text-white"
        >
          deneme
        </button>
        <button
          onClick={handleDeneme2}
          className="border w-full border-[#252B42] p-2 rounded-lg bg-green-500 text-white"
        >
          deneme2
        </button>
      </div>
    </section>
  );
}

export default withRouter(OrderPage);
