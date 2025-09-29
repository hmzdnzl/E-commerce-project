import React from "react";
import { Phone, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="w-full flex md:justify-center">
      <section
        id="contact-info"
        className="hidden md:flex md:justify-between md:w-full font-bold items-center md:bg-[#252B42] "
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
          <span className="hidden md:flex text-white ">Follow us :</span>
          
          <FontAwesomeIcon className="hidden md:flex h-4 w-4 text-white mx-2" icon={faFacebook} size="lg" />
          <FontAwesomeIcon className="hidden md:flex h-3 w-4 text-white mx-2" icon={faTwitter} size="lg" />
          <FontAwesomeIcon className="hidden md:flex h-4 w-4 text-white mx-2" icon={faInstagram} size="lg" />        
          <FontAwesomeIcon className="hidden md:flex h-3 w-4 text-white mx-2"  icon={faYoutube} size="lg" />
        </div>
      </section>
      <h1>HEADER HERE</h1>
      <a href="/">Bandage</a>
      <a href="/">Home</a> | <a href="/about">About</a>
      <div className="flex md:hidden">Mobilde görünür</div>
      <div className="hidden md:flex">Desktopta görünür</div>
    </div>
  );
}
