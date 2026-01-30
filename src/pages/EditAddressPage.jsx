import axios from "axios";
import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export default function EditAddressPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const addressId = location.state?.addressId;

  const onAddressSubmit = async (data) => {
    const token = localStorage.getItem("token");
    let payload = {};
    try {
      payload = {
        id: addressId,
        title: data.title,
        phone: data.phone,
        name: data.name,
        surname: data.surname,
        city: data.city,
        district: data.district,
        neighborhood: data.neighborhood,
        address: data.address,
      };
      const response = await axios.put(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        payload,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      alert("Address updated successfully!");
      window.location.href = "/profile";
    } catch (error) {
      alert("Error occurred while updating address!");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <form
        id="addressSubmit"
        className="flex flex-col pl-2 pt-2 gap-y-3  w-[70%] mr-2 md:mr-0 md:w-[90%]"
        onSubmit={handleSubmit(onAddressSubmit)}
      >
        <section className="flex flex-col gap-y-1">
          <div className="flex gap-2 justify-between">
            <p>Address Title:</p>
            <input
              className="border w-[75%] pl-1 border-black"
              name="title"
              {...register("title", { required: true })}
              placeholder="Address Title"
            />
          </div>
          {errors.title && (
            <span className="text-red-500">Address Title is required</span>
          )}
        </section>

        <section className="flex flex-col gap-y-1">
          <div className="flex gap-2 justify-between">
            <p>Name:</p>
            <input
              className="border w-[75%] pl-1 border-black"
              name="name"
              {...register("name", { required: true })}
              placeholder="Name"
            />
          </div>
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </section>

        <section className="flex flex-col gap-y-1">
          <div className="flex gap-2 justify-between">
            <p>Surname:</p>
            <input
              className="border w-[75%] pl-1 border-black"
              name="surname"
              {...register("surname", { required: true })}
              placeholder="Surname"
            />
          </div>
          {errors.surname && (
            <span className="text-red-500">Surname is required</span>
          )}
        </section>

        <section className="flex flex-col gap-y-1">
          <div className="flex gap-2 justify-between">
            <p>Phone:</p>
            <input
              className="border w-[75%] pl-1 border-black"
              name="phone"
              {...register("phone", { required: true })}
              placeholder="Phone"
            />
          </div>
          {errors.phone && (
            <span className="text-red-500">Phone is required</span>
          )}
        </section>

        <section className="flex flex-col gap-y-1">
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
          </div>
          {errors.city && (
            <span className="text-red-500">City is required</span>
          )}
        </section>

        <section className="flex flex-col gap-y-1">
          <div className="flex gap-2 justify-between">
            <p>District:</p>
            <input
              className="border w-[75%] pl-1 border-black"
              name="district"
              {...register("district", { required: true })}
              placeholder="District"
            />
          </div>
          {errors.district && (
            <span className="text-red-500">District is required</span>
          )}
        </section>

        <section className="flex flex-col gap-y-1">
          <div className="flex gap-2 justify-between">
            <p>Neighborhood:</p>
            <input
              className="border w-[75%] pl-1 border-black"
              name="neighborhood"
              {...register("neighborhood", { required: true })}
              placeholder="Neighborhood"
            />
          </div>
          {errors.neighborhood && (
            <span className="text-red-500">Neighborhood is required</span>
          )}
        </section>

        <section className="flex flex-col gap-y-1">
          <div className="flex gap-2  justify-between">
            <p>Address:</p>
            <textarea
              className="border w-[75%] pl-1 h-24 border-black resize-none"
              name="address"
              rows={4}
              {...register("address", { required: true })}
              placeholder="Address details (Street, building, door number, etc.)"
            />
          </div>
          {errors.address && (
            <span className="text-red-500">Address is required</span>
          )}
        </section>

        <div className="flex mt-2 justify-end">
          <button
            className="border border-[#252B42] bg-[#252B42] w-[30%]  rounded-md h-7 text-white"
            type="submit"
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
}
