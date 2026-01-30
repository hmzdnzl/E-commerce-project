import React from "react";
import {
  Phone,
  Mail,
  User,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  ChevronDown,
  Trash,
  LogOut,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu, openMenu, closeMenu } from "../actions/action.jsx";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Gravatar from "react-gravatar";
import { increaseProductInCartThunk } from "../store/thunks/increaseProductInCartThunk";
import { decreaseProductInCartThunk } from "../store/thunks/decreaseProductInCartThunk";
import { removeProductInCartThunk } from "../store/thunks/removeProductInCartThunk";

function logoutHandler() {
  localStorage.setItem("isLoggedIn", "false");
  sessionStorage.setItem("isLoggedIn", "false");
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  window.location.reload();
}
export default function Header() {
  const categories = useSelector((state) => state.category.categories) || [];
  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");
  const cart = useSelector((state) => state.shoppingCart.cart);
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
  };


  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const handleShopDropdownToggle = (e) => {
    e.preventDefault();
    setShopDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!shopDropdownOpen) return;
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('shop-dropdown-menu');
      const chevron = document.getElementById('shop-dropdown-chevron');
      if (
        dropdown &&
        !dropdown.contains(event.target) &&
        chevron &&
        !chevron.contains(event.target)
      ) {
        setShopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shopDropdownOpen]);

  function increaseQuantity(item) {
    dispatch(increaseProductInCartThunk(item.id));
  }

  function decreaseQuantity(item) {
    dispatch(decreaseProductInCartThunk(item.id));
  }

  function removeItem(item) {
    dispatch(removeProductInCartThunk(item.id));
  }

  function handleGoCartPage() {
    window.location.href = "/shopping-cart";
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
            <span className="text-white font-montserrat hidden md:flex break-all">
              michelle.rivera@example.com
            </span>
          </div>
        </div>
        <p className="hidden md:flex text-white  font-montserrat text-sm">
          Follow Us and get a chance to win 80% off
        </p>
        <div id="social-icons" className="hidden md:flex items-center ">
          <span className="hidden md:flex text-white ">Follow Us :</span>

          <FontAwesomeIcon
            className="hidden md:flex h-4 w-4 text-white mx-2"
            icon={faFacebook}
            size="lg"
          />
          <FontAwesomeIcon
            className="hidden md:flex h-3 w-4 text-white mx-2"
            icon={faTwitter}
            size="lg"
          />
          <FontAwesomeIcon
            className="hidden md:flex h-4 w-4 text-white mx-2"
            icon={faInstagram}
            size="lg"
          />
          <FontAwesomeIcon
            className="hidden md:flex h-3 w-4 text-white mx-2"
            icon={faYoutube}
            size="lg"
          />
        </div>
      </section>
      <header>
        <section className="flex justify-between items-center px-10 py-5">
          <a className="text-[#252B42] text-[24px] font-bold" href="/">
            Bandage
          </a>
          <nav className="space-x-4 hidden text-[14px] md:flex items-center font-montserrat font-bold  text-[#737373]">
            <a className="hover:text-[#252B42]" href="/">
              Home
            </a>
            <div className="relative inline-block">
              <a
                className="hover:text-[#252B42] flex items-center cursor-pointer"
                href="/shop"
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                Shop
                <span
                  id="shop-dropdown-chevron"
                  onClick={handleShopDropdownToggle}
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={shopDropdownOpen}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </a>
              {shopDropdownOpen && (
                <div
                  id="shop-dropdown-menu"
                  className="absolute left-0 top-full w-80 bg-white shadow-lg rounded z-50 flex flex-row gap-6 p-4"
                  style={{ minWidth: '200px' }}
                >
                  <div className="flex flex-col min-w-[100px]">
                    <span className="font-bold text-[#252B42] px-2 mb-2">
                      Kadın
                    </span>
                    {womenCategories.length === 0 && (
                      <span className="px-2 text-sm text-gray-400">
                        Kategori yok
                      </span>
                    )}
                    {womenCategories.map((cat) => (
                      <a
                        key={cat.id}
                        href={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
                        className="px-2 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                      >
                        {cat.img && (
                          <img
                            src={cat.img}
                            alt={cat.title}
                            className="w-6 h-6"
                          />
                        )}
                        {cat.title}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col min-w-[100px]">
                    <span className="font-bold text-[#252B42] px-2 mb-2">
                      Erkek
                    </span>
                    {menCategories.length === 0 && (
                      <span className="px-2 text-sm text-gray-400">
                        Kategori yok
                      </span>
                    )}
                    {menCategories.map((cat) => (
                      <a
                        key={cat.id}
                        href={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
                        className="px-2 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                      >
                        {cat.img && (
                          <img
                            src={cat.img}
                            alt={cat.title}
                            className="w-6 h-6"
                          />
                        )}
                        {cat.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a className="hover:text-[#252B42]" href="/about">
              About
            </a>
            <a className="hover:text-[#252B42]" href="/blog">
              Blog
            </a>
            <a className="hover:text-[#252B42]" href="/contact">
              Contact
            </a>
            <a className="hover:text-[#252B42]" href="/prices">
              Prices
            </a>
          </nav>
          <section className="flex gap-6">
            <div className=" hidden md:flex items-center gap-2 font-montserrat">
              {isLoggedIn && userState.email && (
                <Gravatar
                  email={userState.email}
                  size={40}
                  className="rounded-full"
                />
              )}
              <a
                className={`${isLoggedIn ? "" : "hidden"} text-[#23A6F0]`}
                href="/profile"
              >
                {userState.name}
              </a>
              <a
                className={` ${isLoggedIn ? "hidden" : ""} flex text-[#23A6F0] items-center gap-2`}
                href="/login"
              >
                <User size={24} className="text-[#23A6F0] h-4 w-4" />
                Login
              </a>
              <span className="text-[#23A6F0]">/</span>
              <a
                className={` ${isLoggedIn ? "hidden" : ""} text-[#23A6F0]`}
                href="/signup"
              >
                Register
              </a>
              <button
                onClick={logoutHandler}
                className={` ${isLoggedIn ? "" : "hidden"} text-[#23A6F0]`}
              >
                Logout
              </button>
            </div>
            <div className="flex items-center">
              <a href="/profile">
                {" "}
                <User
                  size={24}
                  className="md:hidden flex h-4 w-4 text-[#23A6F0] mr-4"
                />
              </a>

              <Search size={24} className="h-4 w-4 text-[#23A6F0]" />
              <div className="relative group inline-block">
                <a
                  className="hover:text-[#252B42] flex items-center cursor-pointer"
                  href="/shopping-cart"
                >
                  <ShoppingCart
                    onClick={handleGoCartPage}
                    size={24}
                    className="h-4 w-4 text-[#23A6F0] ml-4"
                  />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                      {cart.length}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4" />
                </a>
                <div
                  className="absolute right-0 top-full w-80 bg-white shadow-lg rounded z-50 flex flex-row gap-6 p-4
    opacity-0 group-hover:opacity-100 hover:opacity-100
    pointer-events-none group-hover:pointer-events-auto hover:pointer-events-auto
    transition-opacity duration-200"
                >
                  <div className="flex flex-col m-auto w-auto px-3 gap-1 h-auto">
                    <span className="font-bold text-[#252B42] text-center mb-2">
                      Shopping Cart
                    </span>
                    {cart.length === 0 && (
                      <span className="px-2 text-sm text-gray-400">
                        Your cart is empty
                      </span>
                    )}
                    <section>
                      <div className="flex flex-col gap-5">
                        {cart.map((item) => (
                          <div
                            className="flex flex-row justify-between gap-x-3"
                            key={item.id}
                          >
                            <div>
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
                              <p>{item.name}</p>
                              <p>
                                {item.quantity} x{" "}
                                {(item.price * item.quantity).toFixed(2)} ₺
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => increaseQuantity(item)}
                                className="border border-black w-6 h-6 flex items-center justify-center font-bold text-center rounded text-xs leading-none p-0"
                              >
                                +
                              </button>
                              <p>{item.quantity}</p>
                              <button
                                onClick={() =>
                                  item.quantity > 1
                                    ? decreaseQuantity(item)
                                    : item.quantity
                                }
                                className="border border-black w-6 h-6 flex items-center justify-center font-bold text-center rounded text-xs leading-none p-0"
                              >
                                -
                              </button>
                              <button onClick={() => removeItem(item)}>
                                <Trash size={20} color="#FF0000" />
                              </button>
                            </div>
                          </div>
                        ))}
                        {cart.length !== 0 && (
                          <div className="gap-x-2 gap-y-2 flex flex-col">
                            <div className="mt-4 font-bold text-right font-montserrat flex justify-start">
                              <p className="text-[20px] font-montserrat">
                                Total:{" "}
                                {cart
                                  .reduce(
                                    (total, item) =>
                                      +total + item.price * item.quantity,
                                    0,
                                  )
                                  .toFixed(2)}{" "}
                                ₺
                              </p>
                            </div>
                            <nav className="flex gap-x-2">
                              <button
                                onClick={handleGoCartPage}
                                className="border border-black p-2 rounded-lg"
                              >
                                Go to Cart
                              </button>
                              <button className="border border-[#252B42] text-white bg-[#252B42] p-2 rounded-lg">
                                Complete Purchase
                              </button>
                            </nav>
                          </div>
                        )}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <Heart
                size={24}
                className="md:flex hidden h-4 w-4 text-[#23A6F0] ml-4"
              />
              <button onClick={toggleMenuHandler}>
                <Menu
                  size={24}
                  className="md:hidden flex h-4 w-4 text-[#23A6F0] ml-4"
                />
              </button>
              {isLoggedIn && (
                <button onClick={logoutHandler} title="Logout">
                  <LogOut size={24} className="h-4 md:hidden w-4 text-[red] ml-4" />
                </button>
              )}
            </div>
          </section>
        </section>
        {isOpen && (
          <nav className="flex flex-col items-center space-y-4 py-4  md:hidden">
            <a className="text-[#737373]" href="/">
              Home
            </a>
            <a className="text-[#737373]" href="/about">
              Product
            </a>
            <a className="text-[#737373]" href="/prices">
              Pricing
            </a>
            <a className="text-[#737373]" href="/contact">
              Contact
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}
