import { useSelector } from "react-redux";
import { useState } from "react";
import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { increaseProductInCartThunk } from "../store/thunks/increaseProductInCartThunk";
import { decreaseProductInCartThunk } from "../store/thunks/decreaseProductInCartThunk";
import { removeProductInCartThunk } from "../store/thunks/removeProductInCartThunk";

export default function OrderSummary() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const shippingCost = 39.99;

  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const total = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  function increaseQuantity(item) {
    dispatch(increaseProductInCartThunk(item.id));
  }

  function decreaseQuantity(item) {
    dispatch(decreaseProductInCartThunk(item.id));
  }

  function removeItem(item) {
    dispatch(removeProductInCartThunk(item.id));
  }

  function handleCheckAll(event) {
    const checked = event.target.checked;
    setAllSelected(checked);
    if (checked) {
      setSelectedItems(cart.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  }

  function handleSelectItem(itemId) {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  }

  function handleCompletePurchase() {
    window.location.href = "/order";
  }
  return (
    <div className="w-full font-montserrat mt-5 flex flex-col ">
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
            className={`w-[60%] flex flex-wrap h-auto ${parseFloat(total) > 150 ? "" : "hidden"}`}
          >
            Free shipping on purchases over 150₺
          </span>
          <p className={`font-bold ${parseFloat(total) > 150 ? "" : "hidden"}`}>
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
      {cart.length !== 0 && (
        <div className="gap-x-4 flex w-full justify-end px-2 py-4">
          <button
            disabled={selectedItems.length === 0}
            onClick={handleCompletePurchase}
            className={`border w-full border-[#252B42] p-2 rounded-lg ${
              selectedItems.length === 0
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-[#252B42] text-white"
            }`}
          >
            Complete Purchase
          </button>
        </div>
      )}
    </div>
  );
}
