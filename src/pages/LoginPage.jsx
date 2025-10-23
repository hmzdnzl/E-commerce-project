import {useForm} from 'react-hook-form';
import { setUser } from "../reducers/clientReducer";
import { loginUserThunk } from "../store/thunks/clientThunks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import clientReducer from "../reducers/clientReducer";

export default function LoginPage() {
  const user = useSelector(state => state.client.user);
console.log(user);
   const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(loginUserThunk(data.email, data.password));
  // window.location.reload();
  };

  return (
    <div className='flex flex-col items-center justify-center font-montserrat '>
    <form className='flex  flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
    <label className='flex justify-between' htmlFor="">Email:<input className='bg-blue-100' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" /></label>
           
      {errors.email && <span className='text-red-600'>Lütfen geçerli bir email adresi giriniz.</span>}
      <label htmlFor="">Password:<input type='password' className="bg-blue-100 justify-between" {...register("password", { required: true, minLength: 6 })} placeholder="Password" /></label>

      {errors.password && <span className='text-red-600'>Parola en az 6 karakter olmalı</span>}
      <button className="w-[150px] h-[50px] bg-blue-400 text-white rounded-[10px]" type="submit">Login</button>
    </form>
    </div>
  );
}
