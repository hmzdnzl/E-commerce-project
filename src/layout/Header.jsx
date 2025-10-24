import React from "react";
import { Phone, Mail, User, Search, ShoppingCart, Heart, Menu, ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from 'react-redux';
import { toggleMenu, openMenu, closeMenu } from '../actions/action.jsx';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Gravatar from 'react-gravatar';



function logoutHandler() {
  localStorage.setItem("isLoggedIn", "false");
  sessionStorage.setItem("isLoggedIn", "false");
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  console.log("Logout durumu:", false);
  window.location.reload();
}
export default function Header() {
  const user = useSelector((state) => state.client.user);
  const [userState, setUserState] = useState({});
  
  const getIsLoggedIn = () => {
    return (
      localStorage.getItem("isLoggedIn") === "true" ||
      sessionStorage.getItem("isLoggedIn") === "true"
    );
  };
  const getUserData = () => {
    return (
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(sessionStorage.getItem("user")) ||
      {}
    );
  };
  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn());
  useEffect(() => {
    setIsLoggedIn(getIsLoggedIn());
    setUserState(getUserData());
  }, []);
 
  useEffect(() => {
    setIsLoggedIn(getIsLoggedIn());
    setUserState(getUserData());
  }, [user]);
  const isOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());

    useEffect(() => {
  console.log("userState değişti:", userState);
}, [userState]);

console.log(userState, "aa");
console.log(JSON.stringify(userState) + "aa");
  }
  return (
    <div className="w-full flex-col flex md:justify-center">
      <section
        id="contact-info"
        className="hidden md:flex md:justify-between md:w-full font-bold font-montserrat items-center py-3 px-10 md:bg-[#252B42] "
      >
        <div id="contact-infos-wrapper" className="hidden md:flex gap-8">
          <div id="phone" className="hidden md:flex md:items-center md:gap-2 ">
            <Phone
              size={24}
              color="white"
              className=" hidden md:flex h-4 w-4"
            />
            <span className="text-white font-montserrat hidden md:flex">
              {" "}
              (225) 555-0118
            </span>
          </div>
          <div id="email" className="hidden md:flex md:items-center md:gap-2 ">
            <Mail size={24} color="white" className=" hidden md:flex h-3 w-4" />
            <span className="text-white font-montserrat hidden md:flex">
              michelle.rivera@example.com
            </span>
          </div>
        </div>
        <p className="hidden md:flex text-white  font-montserrat text-sm">
          Follow Us and get a chance to win 80% off
        </p>
        <div id="social-icons" className="hidden md:flex items-center ">
          <span className="hidden md:flex text-white ">Follow Us :</span>
          
          <FontAwesomeIcon className="hidden md:flex h-4 w-4 text-white mx-2" icon={faFacebook} size="lg" />
          <FontAwesomeIcon className="hidden md:flex h-3 w-4 text-white mx-2" icon={faTwitter} size="lg" />
          <FontAwesomeIcon className="hidden md:flex h-4 w-4 text-white mx-2" icon={faInstagram} size="lg" />        
          <FontAwesomeIcon className="hidden md:flex h-3 w-4 text-white mx-2"  icon={faYoutube} size="lg" />
        </div>
      </section>
      <header>
      <section className="flex justify-between items-center px-10 py-5">
      <a className="text-[#252B42] text-[24px] font-bold" href="/">Bandage</a>
      <nav className="space-x-4 hidden text-[14px] md:flex items-center font-montserrat font-bold  text-[#737373]">
        <a className="hover:text-[#252B42]" href="/">Home</a>
        <div className="relative group inline-block">
          <a className="hover:text-[#252B42] flex items-center cursor-pointer" href="/shop">Shop<ChevronDown className="w-4 h-4" /></a>
          <div className="absolute left-0 top-full w-80 bg-white shadow-lg rounded z-50 flex flex-row gap-6 p-4
            opacity-0 group-hover:opacity-100 hover:opacity-100
            pointer-events-none group-hover:pointer-events-auto hover:pointer-events-auto
            transition-opacity duration-200">
            <div className="flex flex-col min-w-[100px]">
              <span className="font-bold text-[#252B42] px-2 mb-2">Kadın</span>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Bags</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Belts</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Cosmetics</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Bags</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Hats</a>
            </div>
            <div className="flex flex-col min-w-[100px]">
              <span className="font-bold text-[#252B42] px-2 mb-2">Erkek</span>
               <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Bags</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Belts</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Cosmetics</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Bags</a>
              <a href="/shop/" className="px-2 py-2 hover:bg-gray-100 rounded">Hats</a>
            </div>
          </div>
          
        </div>
        <a className="hover:text-[#252B42]" href="/about">About</a>
        <a className="hover:text-[#252B42]" href="/blog">Blog</a>
        <a className="hover:text-[#252B42]" href="/contact">Contact</a>
        <a className="hover:text-[#252B42]" href="/prices">Prices</a>
      </nav>
      <section className="flex gap-6" >
      <div className=" hidden md:flex items-center gap-2 font-montserrat">
        <Gravatar email={userState.email} size={40} className={`${isLoggedIn ? "" : "hidden"} rounded-full`} />
        <a className={`${isLoggedIn ? "" : "hidden"} text-[#23A6F0]`} href="/profile">{userState.name}</a>
        <a className={` ${isLoggedIn ? "hidden" : ""} flex text-[#23A6F0] items-center gap-2`} href="/login">
        <User size={24}  className="text-[#23A6F0] h-4 w-4" />
        Login      
        </a>
        <span className="text-[#23A6F0]">/</span>
        <a className={` ${isLoggedIn ? "hidden" : ""} text-[#23A6F0]`} href="/signup">Register</a>
        <button onClick={logoutHandler} className={` ${isLoggedIn ? "" : "hidden"} text-[#23A6F0]`} >Logout</button>
      </div>
      <div className="flex items-center">
        <a href="/profile"> <User size={24}   className="md:hidden flex h-4 w-4 text-[#23A6F0] mr-4" /></a>
       
        <Search size={24}  className="h-4 w-4 text-[#23A6F0]" />
        <ShoppingCart size={24}  className="h-4 w-4 text-[#23A6F0] ml-4" />
        <Heart size={24}  className="md:flex hidden h-4 w-4 text-[#23A6F0] ml-4" />
        <button onClick={toggleMenuHandler}>
        <Menu size={24} className="md:hidden flex h-4 w-4 text-[#23A6F0] ml-4" />
      
        </button>
         
      </div>
      </section>
      </section>
       {isOpen && (
        <nav className="flex flex-col items-center space-y-4 py-4  md:hidden">
          <a className="text-[#737373]" href="/">Home</a>
          <a className="text-[#737373]" href="/about">Product</a>                  
          <a className="text-[#737373]" href="/prices">Pricing</a>
          <a className="text-[#737373]" href="/contact">Contact</a>
        </nav>
      )}
      </header>
     
    </div>
  );
}
