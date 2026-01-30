import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance.js";

export default function RegisterPage() {
  const [role, setRole] = useState([]);
  const [selectedRole, setSelectedRole] = useState(3);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRole(response.data);
        setSelectedRole(response.data[2].id);
      })
      .catch((error) => {});
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    delete data.passwordConfirm;
    data.role_id = Number(selectedRole);
    if (selectedRole === 2) {
      data.store = {
        name: data.storeName,
        phone: data.phone,
        tax_no: data.taxId,
        bank_account: data.bankAccount,
      };
      delete data.storeName;
      delete data.phone;
      delete data.taxId;
      delete data.bankAccount;
    } else {
      delete data.storeName;
      delete data.phone;
      delete data.taxId;
      delete data.bankAccount;
    }

    try {
      const response = await axiosInstance.post("/signup", data);
      alert("You need to click link in email to activate your account!");
      window.history.back();
    } catch (err) {
      setApiError(err?.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  function roleChoice(event) {
    setSelectedRole(Number(event.target.value));
  }

  return (
    <section className="font-montserrat">
      <div className="flex flex-col items-center justify-center mx-auto gap-y-5">
        <h1>Register</h1>

        <form
          className="flex flex-col gap-4 mt-4 justify-between "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex justify-between" htmlFor="">
            Role{" "}
            <select
              value={selectedRole}
              onChange={roleChoice}
              className="bg-blue-100 w-[50%]"
              name=""
              id=""
            >
              {role.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex justify-between">
            Name:
            <input
              type="text"
              {...register("name", { required: true, minLength: 3 })}
              name="name"
              className="bg-blue-100"
            />
          </label>
          {errors.name && <span>Name en az 3 karakter olmalı</span>}
          <label className="flex justify-between">
            Email:
            <input
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              name="email"
              className="bg-blue-100"
            />
          </label>
          {errors.email && <span>Geçerli bir email girin</span>}
          <label className="flex justify-between">
            Password:
            <input
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              })}
              name="password"
              className="bg-blue-100"
            />
          </label>
          {errors.password && (
            <span>
              Şifre en az 8 karakter, sayı, büyük/küçük harf ve özel karakter
              içermeli
            </span>
          )}
          <label className="flex justify-between">
            Password Confirmation:
            <input
              type="password"
              {...register("passwordConfirm", {
                required: true,
                validate: (val) => val === watch("password"),
              })}
              name="passwordConfirm"
              className="bg-blue-100 ml-2"
            />
          </label>
          {errors.passwordConfirm && <span>Şifreler eşleşmeli</span>}
          <label
            className={`flex justify-between ${
              selectedRole === 2 ? "" : "hidden"
            }`}
          >
            Store Name:
            <input
              type="text"
              {...register("storeName", {
                required: selectedRole === 2,
                minLength: 3,
              })}
              name="storeName"
              className="bg-blue-100 ml-2"
            />
          </label>
          {errors.storeName && <span>Store adı en az 3 karakter olmalı</span>}
          <label
            className={`flex justify-between ${
              selectedRole === 2 ? "" : "hidden"
            }`}
          >
            Store Phone:
            <input
              type="text"
              {...register("phone", {
                required: selectedRole === 2,
                pattern: /^(\+90|0)?[1-9][0-9]{9}$/,
              })}
              name="phone"
              className="bg-blue-100 ml-2"
            />
            {errors.phone && <span>Geçerli bir telefon numarası girin</span>}
          </label>
          <label
            className={`flex justify-between ${
              selectedRole === 2 ? "" : "hidden"
            }`}
          >
            Store Tax-ID:
            <input
              type="text"
              {...register("taxId", {
                required: selectedRole === 2,
                minLength: 10,
                pattern: /T\d{4}V\d{6}/,
              })}
              name="taxId"
              className="bg-blue-100 ml-2"
            />
          </label>
          {errors.taxId && <span>Tax-ID en az 10 karakter olmalı</span>}
          <label
            className={`flex justify-between ${
              selectedRole === 2 ? "" : "hidden"
            }`}
          >
            Store Bank-Account:
            <input
              type="text"
              {...register("bankAccount", {
                required: selectedRole === 2,
                minLength: 26,
                pattern: /^TR\\d{2}\\d{5}\\d{16}$/,
              })}
              name="bankAccount"
              className="bg-blue-100 ml-2"
            />
            {errors.bankAccount && (
              <span>Bank Account en az 26 karakter olmalı</span>
            )}
          </label>
          <button
            type="submit"
            className="w-[150px] h-[50px] bg-blue-400 text-white rounded-[10px]"
            disabled={loading}
          >
            Register
          </button>
        </form>
        {apiError && (
          <div className="text-red-500 mt-2 text-center">
            {typeof apiError === "string" ? apiError : JSON.stringify(apiError)}
          </div>
        )}
      </div>
    </section>
  );
}
