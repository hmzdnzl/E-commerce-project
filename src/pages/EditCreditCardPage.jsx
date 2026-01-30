import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../api/axiosInstance";
import axios from "axios";
import { updateCard, fetchCards } from "../store/thunks/cardThunk";
import { useLocation } from "react-router-dom";

export default function EditCreditCardPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const cardId = location.state?.cardId;
  const dispatch = useDispatch();

  const onCardSubmit = async (data) => {
    try {
      const payload = {
        id: cardId,
        card_no: data.card_no,
        expire_month: Number(data.expire_month),
        expire_year: Number(data.expire_year),
        name_on_card: data.name_on_card,
      };
      await dispatch(updateCard(payload));
      alert("Card updated successfully!");
      dispatch(fetchCards());
      window.location.href = "/profile";
    } catch (error) {
      alert("Error occurred while updating card!");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col flex-wrap pl-2 pt-2 gap-y-1 w-[90%]"
        onSubmit={handleSubmit(onCardSubmit)}
      >
        <div className="flex flex-col gap-2 justify-between">
          <p>Card No</p>
          <input
            className="border w-[75%] border-black"
            {...register("card_no", {
              required: true,
              minLength: 16,
              maxLength: 16,
            })}
            placeholder="Card Number"
          />
          {errors.card_no && (
            <span className="text-red-500">Card Number is required</span>
          )}
          {errors.card_no?.type === "minLength" && (
            <span className="text-red-500">Card Number must be 16 digits</span>
          )}
          {errors.card_no?.type === "maxLength" && (
            <span className="text-red-500">Card Number must be 16 digits</span>
          )}
        </div>

        <section className="flex flex-wrap justify-between w-full md:w-[75%]">
          <div className="flex flex-col justify-around border w-full">
            <section className="flex gap-10 flex-wrap w-full">
              <div className="flex flex-col gap-2">
                <p>Expiration Month</p>
                <select
                  className="border text-center w-full border-black"
                  {...register("expire_month", { required: true })}
                  placeholder="Month"
                >
                  <option value="">Month</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                {errors.expire_month && (
                  <span className="text-red-500">Month is required</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-center">Expiration Year</p>
                <select
                  className="border text-center w-full border-black"
                  {...register("expire_year", { required: true })}
                  placeholder="Year"
                >
                  <option value="">Year</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                </select>
                {errors.expire_year && (
                  <span className="text-red-500">Year is required</span>
                )}
              </div>
              <div className="flex flex-col gap-2 items-center">
                <p className="flex text-center">CVV</p>
                <input
                  className="border w-[75%] border-black"
                  {...register("card_ccv", { required: true })}
                  placeholder="Card CVV"
                />
                {errors.card_ccv && (
                  <span className="text-red-500">CVV Number is required</span>
                )}
              </div>
              <div className="border flex gap-2 flex-col items-center">
                <p>Name on Card</p>
                <input
                  className="border w-[70%] md:w-[100%] border-black"
                  {...register("name_on_card", { required: true })}
                  placeholder="Name on Card"
                />
                {errors.name_on_card && (
                  <span className="text-red-500">Name on Card is required</span>
                )}
              </div>
            </section>
          </div>
        </section>

        <div className="flex mt-2 justify-end">
          <button
            className="border border-[#252B42] bg-[#252B42] w-[30%]  rounded-md h-7 text-white"
            type="submit"
          >
            Save Card
          </button>
        </div>
      </form>
    </div>
  );
}
