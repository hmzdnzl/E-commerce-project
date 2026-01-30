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

  useEffect(() => {
    if (!state) {
      history.push("/shopping-cart");
    }
  }, [state, history]);

  function handleShowHideAddressForm(event) {
    event.preventDefault();
    setAddressShowHideForm((prev) => !prev);
  }

  function handleShowHideCardForm(event) {
    event.preventDefault();
    setCardShowHideForm((prev) => !prev);
  }

  function handleAddress(event) {
    event.preventDefault();
    setAddressAndCartData(false);
  }

  function handlePaymentDetail(event) {
    event.preventDefault();
    setAddressAndCartData(true);
  }

  const onOrderSubmit = async (data) => {
    if (!selectedAddressId) {
      alert("Please select an address.");
      return;
    }
    if (!selectedCardId) {
      alert("Please select a credit card.");
      return;
    }
    if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
      alert("Please select at least one product.");
      return;
    }
    const selectedCard = cards.find((card) => card.id === selectedCardId);
    if (!selectedCard) {
      alert("Selected card not found.");
      return;
    }
    const selectedProducts = cart
      .filter((item) => selectedItems.includes(item.id))
      .map((item) => ({
        product_id: item.id,
        count: item.quantity,
        detail: item.selectedOptions || "",
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
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/order",
        payload,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      const orderedIds = selectedItems;
      const newCart = cart.filter((item) => !orderedIds.includes(item.id));
      dispatch({ type: "SET_CART", payload: newCart });
      alert("Order placed successfully!");
      window.location.reload();
    } catch (error) {
      alert("Error occurred while placing the order!");
    }
  };

    useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

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
              <div className="gap-x-2 mt-2 flex justify-end w-[260px]">
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
                <div className="gap-x-2 mt-2 flex justify-end w-[260px]">
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
                <CreditCardInfos
                  selectedCardId={selectedCardId}
                  setSelectedCardId={setSelectedCardId}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="orderSummaryField"
        className=" font-montserrat md:w-[20%] w-[100%] mt-5 flex flex-col "
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
          <div className="gap-x-4 flex w-full justify-center px-2 py-4">
            <form className="w-full flex justify-center" onSubmit={handleSubmit(onOrderSubmit)} action="">
              <button
                type="submit"
                disabled={
                  !Array.isArray(selectedItems) || selectedItems.length === 0
                }
                className={`border md:w-full w-[50%] border-[#252B42] p-2 rounded-lg ${
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
      </div>
    </section>
  );
}

export default withRouter(OrderPage);
