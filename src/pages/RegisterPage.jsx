import { useState } from "react"; 

export default function RegisterPage() {
    const [role, setRole] = useState("customer");

    function roleChoice(event) {
        setRole(event.target.value);
    }
    console.log(role);

  return (
    <section className="font-montserrat">
<div className="flex flex-col items-center justify-center mx-auto gap-y-5">
      <h1>Register</h1>

      
      
      <form className="flex flex-col gap-4 mt-4 justify-between ">
        <label className="flex justify-between" htmlFor="">Role <select onChange={roleChoice} className="bg-blue-100 w-[50%]" name="" id="">
        <option value="customer">Customer</option>
        <option value="store">Store</option>
        <option value="admin">Admin</option>
      </select></label>
        <label className="flex justify-between">
          Name:
          <input type="text" name="name" className="bg-blue-100"/>
        </label>
        <label className="flex justify-between">
          Email:
          <input type="email" name="email" className="bg-blue-100"/>
        </label>
        <label className="flex justify-between">
          Phone:
          <input type="text" name="phone" className="bg-blue-100"/>
        </label>
        <label className="flex justify-between">
          Password:
          <input type="password" name="password" className="bg-blue-100"/>
        </label>
         <label className="flex justify-between">
          Password Confirmation:
          <input type="password" name="password" className="bg-blue-100 ml-2"/>
        </label>
        <label className={`flex justify-between ${role === "store" ? "" : "hidden"}`}>
          Store Tax-ID:
          <input type="text" name="taxId" className="bg-blue-100 ml-2"/>
        </label>
        <label className={`flex justify-between ${role === "store" ? "" : "hidden"}`}>
          Store Bank-Account:
          <input type="text" name="bankAccount" className="bg-blue-100 ml-2"/>
        </label>
      </form>
      <button type="submit" className="w-[150px] h-[50px] bg-blue-400 text-white rounded-[10px]">Register</button>
    </div>
    </section>
  );
}
