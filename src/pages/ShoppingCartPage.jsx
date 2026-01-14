import { useSelector } from "react-redux";
import { useState } from "react";
import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { increaseProductInCartThunk } from "../store/thunks/increaseProductInCartThunk";
import { decreaseProductInCartThunk } from "../store/thunks/decreaseProductInCartThunk";
import { removeProductInCartThunk } from "../store/thunks/removeProductInCartThunk";
import { useHistory } from "react-router-dom";

export default function ShoppingCartPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const shippingCost = 39.99;
  const history = useHistory();

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
  console.log("Selected Items:", selectedItems);

  function handleCompletePurchase() {
    history.push({
      pathname: "/order",
      state: {
        total,
        shippingCost,
        selectedItems,
        cart
      }
    });
  }

  return (
    <div>
      <h1 className="py-4 px-12 text-[#252B42] flex flex-col font-montserrat font-bold text-2xl">
        Shopping Cart Page
      </h1>
      {cart.length === 0 && (
        <span className="px-2 text-sm text-gray-400">Sepetiniz boş</span>
      )}
      <section className="flex justify-between pr-20">
        <div className="flex flex-col pl-12 gap-5 w-[58%] border ml-4 border-gray-300 pr-5">
          <div>
            <label>
              <input
                type="checkbox"
                checked={
                  selectedItems.length === cart.length && cart.length > 0
                }
                onChange={handleCheckAll}
              />
              <span className="ml-4 font-semibold">Select All</span>
            </label>
          </div>
          {cart.map((item) => (
            <div className="flex flex-row gap-x-[50px]" key={item.id}>
              <div className="flex items-center justify-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
                <img
                  src={
                    item.images && item.images.length > 0
                      ? item.images[0].url
                      : item.image || item.img || ""
                  }
                  alt={item.name}
                  className="w-12 h-16 object-cover rounded"
                />
              </div>
              <div>
                <p className=" h-full w-[150px] flex items-center font-montserrat justify-center text-center">
                  {item.name}
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="flex items-center w-auto h-auto gap-x-10">
                  <section className="flex gap-x-3 border border-gray-500 rounded">
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="border border-black w-10 h-10 flex items-center justify-center font-bold text-center rounded text-[32px] leading-none p-0"
                    >
                      +
                    </button>
                    <p className="flex px-3 items-center justify-center text-[24px]">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? decreaseQuantity(item)
                          : item.quantity
                      }
                      className="border border-black w-10 h-10 flex items-center justify-center font-bold text-center rounded text-[32px]  leading-none p-0"
                    >
                      -
                    </button>
                  </section>
                  <p className="font-semibold w-[90px]">
                    {item.quantity} x {(item.price * item.quantity).toFixed(2)}{" "}
                    ₺
                  </p>
                  <button onClick={() => removeItem(item)}>
                    <Trash size={20} color="#FF0000" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div className="w-[25%] font-montserrat mt-5 flex flex-col ">
          <section className="border border-gray-300 gap-y-3 flex flex-col">
          <p className="p-4 ">ORDER SUMMARY</p>
          <div className="flex justify-between px-4">
            <span className="">Total Price</span>
            <p className="font-bold">{total} ₺</p>
          </div>
          <div className="flex justify-between px-4">
            <span>Shipping Payment</span>
            <p className="font-bold">{parseFloat(total) === 0 ? 0 : shippingCost} ₺</p>
          </div>
          <div className="flex justify-between px-4">
            <span className={`w-[60%] flex flex-wrap h-auto ${parseFloat(total) > 150 ? "" : "hidden"}`}>Free shipping on purchases over 150₺</span>
            <p className={`font-bold ${parseFloat(total) > 150 ? "" : "hidden"}`}>- {shippingCost} ₺</p>
          </div>
          </section>
          <div className="flex justify-between px-4 border border-gray-300 mt-0 p-2">
            <span className="">Grand Total</span>
            <p className="font-bold">
              {parseFloat(total) === 0
                ? "0.00"
                : parseFloat(total) > 150
                  ? (parseFloat(total) - shippingCost).toFixed(2)
                  : (parseFloat(total) + shippingCost).toFixed(2)
              } ₺
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
      </section>
    </div>
  );
}
