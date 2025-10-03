import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="font-montserrat">
      <section className="flex flex-col gap-y-3 md:flex-row md:gap-x-4 bg-[#FAFAFA] md:justify-between font-bold px-[14%] py-10 mt-10">
        <span className="text-[#252B42]">Bandage</span>
        <div className="flex gap-4">
          <FontAwesomeIcon className="text-[#23A6F0]" size="lg" icon={faFacebook} />
          <FontAwesomeIcon className="text-[#23A6F0]" size="lg" icon={faTwitter} />
          <FontAwesomeIcon className="text-[#23A6F0]" size="lg" icon={faInstagram} />
        </div>
      </section>
      <section className="flex flex-col gap-y-6 md:flex-row md:gap-x-8 justify-between px-[14%] py-10">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[#252B42] font-bold">Company Info</h1>
          <a className="text-[#737373]" href="#">
            About Us
          </a>
          <a className="text-[#737373]" href="#">
            Carrier
          </a>
          <a className="text-[#737373]" href="#">
            We are hiring
          </a>
          <a className="text-[#737373]" href="#">
            Blog
          </a>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[#252B42] font-bold">Legal</h1>
          <a className="text-[#737373]" href="#">
            About Us
          </a>
          <a className="text-[#737373]" href="#">
            Carrier
          </a>
          <a className="text-[#737373]" href="#">
            We are hiring
          </a>
          <a className="text-[#737373]" href="#">
            Blog
          </a>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[#252B42] font-bold">Features</h1>
          <a className="text-[#737373]" href="#">
            Bussiness Marketing
          </a>
          <a className="text-[#737373]" href="#">
            User Analytic
          </a>
          <a className="text-[#737373]" href="#">
            Live Chat
          </a>
          <a className="text-[#737373]" href="#">
            Unlimited Support
          </a>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[#252B42] font-bold">Resources</h1>
          <a className="text-[#737373]" href="#">
            IOS & Android
          </a>
          <a className="text-[#737373]" href="#">
            Watch a Demo
          </a>
          <a className="text-[#737373]" href="#">
            Customers
          </a>
          <a className="text-[#737373]" href="#">
            API
          </a>
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="text-[#252B42] font-bold">Get In Touch</h1>
          <form className="flex border border-[#E6E6E6] bg-[#F9F9F9] w-[80%]">
            <input className="w-[80%]" type="email" placeholder="Your Email" />
            <button className="bg-[#23A6F0] p-2.5 text-white" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <section className="flex items-center px-[14%] text-[#737373] bg-[#FAFAFA] py-5 mt-10 ">
        <p>© 2025 Bandage. All rights reserved.</p>
      </section>
    </div>
  );
}
