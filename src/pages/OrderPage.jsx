import axios from "axios";
import { useEffect } from "react";
import axiosInstance from "./../api/axiosInstance";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddressThunk } from "../store/thunks/addressThunk";

export default function OrderPage() {
    const[responseData, setResponseData] = useState({});
    const dispatch = useDispatch();
    const addresses = useSelector((state) => state.address.addresses);

useEffect(() => {
    dispatch(fetchAddressThunk());
  }, [dispatch]);

  console.log("MEVCUT TOKEN: "+localStorage.getItem("token"));

  return (
    <div>
      <h1 className="py-4 px-12 text-[#252B42] flex flex-col font-montserrat font-bold text-2xl">
        Order Page
      </h1>
      <div>{JSON.stringify(addresses)}aa</div>
    </div>
  );
}