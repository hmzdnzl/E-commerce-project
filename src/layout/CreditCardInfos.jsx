import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCards } from "../store/thunks/cardThunk";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function CreditCardInfos({
  showRadio = true,
  showButton = false,
}) {
  const cards = useSelector((state) => state.card.cards);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  function editPageRoute(event) {
    const id = event.target.value;
    history.push("/edit-credit-card", { cardId: id });
  }

  function deleteCard(event) {
    const cardId = event.target.value;
    const token = localStorage.getItem("token"); // veya başka bir yerde tutuluyorsa oradan al
    axios
      .delete(
        `https://workintech-fe-ecommerce.onrender.com/user/card/${cardId}`,
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((response) => {
        console.log("Adres verisi:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Adres verisi alınırken hata oluştu:", error);
      });
  }

  return (
    <div className="flex flex-col mx-auto">
      {Array.isArray(cards) && cards.length > 0 ? (
        cards.map((card) => (
          <div
            key={card.card_no}
            className="gap-y-2 items-start p-2 flex justify-between"
          >
            <div className="flex border items-start gap-y-1 w-full">
              <input
                type="radio"
                name="card"
                className="mt-1 ml-1 mr-2"
                value={card.id}
                hidden={!showRadio}
              />
              <div className="gap-y-2 w-full">
                <div className="flex gap-2 justify-between w-full">
                  <div className="">
                    {/* <p>Card Owner Name:</p> */}
                    <p>{card.name_on_card}</p>
                  </div>

                  <div className="flex gap-2 w-[50%] justify-end ">
                    <button
                      className="text-blue-900 font-bold"
                      hidden={!showButton}
                      onClick={editPageRoute}
                      value={card.id}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-700 font-semibold"
                      hidden={!showButton}
                      value={card.id}
                      onClick={deleteCard}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p>Card No:</p>
                  <p>{card.card_no}</p>
                </div>
                <div className="flex gap-2">
                  <p>Expiration Date:</p>
                  <p>
                    {card.expire_month} / {card.expire_year}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No saved cards.</p>
      )}
    </div>
  );
}
