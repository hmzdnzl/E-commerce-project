import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAddresses } from "../store/thunks/addressThunk";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddressInfos({
  showRadio = true,
  showButton = false,
  selectedAddressId,
  setSelectedAddressId,
}) {
  const addresses = useSelector((state) => state.address.addresses);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  function editPageRoute(event) {
    const id = event.target.value;
    setSelectedAddressId(id);
    history.push("/edit-address", { addressId: id });
  }

  function deleteAddress(event) {
    const addressId = event.target.value;
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://workintech-fe-ecommerce.onrender.com/user/address/${addressId}`,
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {});
  }

  return (
    <div className="flex p-2 flex-col">
      {Array.isArray(addresses) && addresses.length > 0 ? (
        addresses.map((address, idx) => (
          <div className="flex justify-between w-[280px]" key={idx}>
            <div className="flex flex-col gap-y-1 w-full" key={idx}>
              <div className="gap-x-1 flex justify-between pt-2">
                <input
                  type="radio"
                  name="address"
                  value={address.id}
                  hidden={!showRadio}
                  checked={selectedAddressId === address.id}
                  onChange={() => setSelectedAddressId(address.id)}
                />
                <p>{address.title}</p>
                <div className="flex gap-2 w-full justify-end ">
                  <button
                    className="text-blue-900 font-bold"
                    hidden={!showButton}
                    onClick={editPageRoute}
                    value={address.id}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-700 font-semibold"
                    hidden={!showButton}
                    value={address.id}
                    onClick={deleteAddress}
                  >
                    Delete
                  </button>
                </div>
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
         
            </div>
          </div>
        ))
      ) : (
        <p>Address not found.</p>
      )}
    </div>
  );
}
