import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Brands from "../layout/Brands";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function PricingPage() {
  const pricingFAQs = useSelector((state) => state.pricing);
  const priceOptions = [
    { id: 1, title: "FREE", price: 0 },
    { id: 2, title: "STANDARD", price: 9.99, annualPrice: 89.91 },
    { id: 3, title: "PREMIUM", price: 19.99, annualPrice: 179.91 },
  ];
  const [isYearly, setIsYearly] = useState(false);

  function handleYearlyChange(event) {
    setIsYearly(event.target.checked);
  }

  return (
    <div className=" font-montserrat">
      <section className="flex flex-col items-center pt-20 pb-20">
        <h1 className="text-[#737373] font-bold text-[16px]">PRICES</h1>
        <h2 className="text-[#252B42] font-bold text-[40px]">Simple Pricing</h2>
        <div className="items-center flex gap-x-4 mt-2 mb-10">
          <a href="/" className="font-bold text-[#252B42]">
            Home
          </a>
          <span className="text-[#BDBDBD] gap-x-4 flex">
            {">"} <span className="text-[#BDBDBD] font-bold">Prices</span>
          </span>
        </div>
      </section>
      <section className=" flex flex-col items-center text-center bg-[#FAFAFA] pt-20 ">
        <div className="flex flex-col items-center gap-y-6">
          <h1 className="font-bold text-[40px] text-[#252B42]">Pricing</h1>
          <p className="text-[#737373] text-[14px] w-[70%] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="flex flex-row items-center gap-x-3 justify-center">
            <span className="font-bold text-[16px] text-[#252B42]">
              Monthly
            </span>
            <label className="pl relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={handleYearlyChange}
                value=""
                className="sr-only peer"
              />
              <div
                className="w-11 h-6 bg-gray-200 border border-[#23A6F0] rounded-full peer peer-focus:ring-4
             dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
               after:content-[''] after:absolute after:top-[2px] 
              after:start-[2px] after:bg-[#D0D0D0] 
              after:rounded-full after:h-5 after:w-5 after:transition-all
               peer-checked:bg-[#252B42]"
              ></div>
            </label>
            <span className="font-bold text-[16px] text-[#252B42]">Yearly</span>
            <span className="bg-[#B2E3FF] flex items-center justify-center text-[#23A6F0] text-[14px] font-bold w-[108px] h-[44px] rounded-[37px]">
              Save 25%
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-row md:items-end md:gap-x-[2px] flex flex-col gap-y-5 mt-20">
          <div
            id="free"
            className="w-[327px] h-[664px] md:rounded-[10px] border border-[#23A6F0] flex flex-col items-center gap-y-10 pt-10"
          >
            <h1 className="font-bold text-[24px] text-[#252B42]">FREE</h1>
            <p className="font-bold text-[#737373] text-[16px] w-[50%] ">
              Organize across all apps by hand
            </p>
            <nav className="flex gap-x-3">
              <div className="text-[#23A6F0] font-bold text-[40px] flex items-center justify-center">
                {priceOptions[0].price}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[24px] text-[#23A6F0]">$</span>
                <span className="font-[600] text-[14px] text-[#8EC2F2]">
                  Per Month
                </span>
              </div>
            </nav>
            <ul className="flex flex-col gap-y-5 items-start">
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Unlimited product updates
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Unlimited product updates
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Unlimited product updates
                </span>
              </li>

              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#BDBDBD"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  1GB Cloud storage
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#BDBDBD"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Email and community support
                </span>
              </li>
            </ul>
            <button className="bg-[#23A6F0] text-white font-bold w-[246px] h-[52px] rounded-[5px]">
              Try for free
            </button>
          </div>
          <div
            id="standard"
            className="w-[335px] h-[724px] md:h-[704px] md:w-[327px] md:rounded-[10px] border border-[#23A6F0] bg-[#252B42] flex flex-col items-center gap-y-10 pt-10"
          >
            <h1 className="font-bold text-[24px] text-white">STANDARD</h1>
            <p className="font-bold text-white text-[16px] w-[50%] ">
              Organize across all apps by hand
            </p>
            <nav className="flex gap-x-3">
              <div className="text-[#23A6F0] font-bold text-[40px] w-[100px] flex items-center justify-center">
                {isYearly ? priceOptions[1].annualPrice : priceOptions[1].price}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[24px] text-[#23A6F0]">$</span>
                <span className="font-[600] text-[14px] text-[#8EC2F2]">
                  Per {isYearly ? "Year" : "Month"}
                </span>
              </div>
            </nav>
            <ul className="flex flex-col gap-y-5 items-start">
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-white pl-2">
                  Unlimited product updates
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-white pl-2">
                  Unlimited product updates
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-white pl-2">
                  Unlimited product updates
                </span>
              </li>

              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#BDBDBD"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-white pl-2">
                  1GB Cloud storage
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#BDBDBD"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-white pl-2">
                  Email and community support
                </span>
              </li>
            </ul>
            <button className="bg-[#23A6F0] text-white font-bold w-[246px] h-[52px] rounded-[5px]">
              Try for free
            </button>
          </div>
          <div
            id="premium"
            className="w-[327px] h-[664px] md:rounded-[10px] border border-[#23A6F0] flex flex-col items-center gap-y-10 pt-10"
          >
            <h1 className="font-bold text-[24px] text-[#252B42]">PREMIUM</h1>
            <p className="font-bold text-[#737373] text-[16px] w-[50%] ">
              Organize across all apps by hand
            </p>
            <nav className="flex gap-x-3">
              <div className="text-[#23A6F0] font-bold text-[40px] w-[100px] flex items-center justify-center">
                {isYearly ? priceOptions[2].annualPrice : priceOptions[2].price}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[24px] text-[#23A6F0]">$</span>
                <span className="font-[600] text-[14px] text-[#8EC2F2]">
                  Per {isYearly ? "Year" : "Month"}
                </span>
              </div>
            </nav>
            <ul className="flex flex-col gap-y-5 items-start">
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Unlimited product updates
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Unlimited product updates
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#2DC071"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Unlimited product updates
                </span>
              </li>

              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#BDBDBD"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  1GB Cloud storage
                </span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#BDBDBD"
                  size="2xl"
                />
                <span className="font-bold text-[14px] text-[#252B42] pl-2">
                  Email and community support
                </span>
              </li>
            </ul>
            <button className="bg-[#23A6F0] text-white font-bold w-[246px] h-[52px] rounded-[5px]">
              Try for free
            </button>
          </div>
        </div>
      </section>
      <div className="mt-0 pt-20 bg-[#FAFAFA]">
        <div className="text-[20px] pt-10 mb-[-80px] text-[#252B42] flex items-center justify-center">
          <p className="w-[70%] text-center">
            Trusted By Over 4000 Big Companies
          </p>
        </div>
        <Brands />
      </div>
      <section className="flex flex-col items-center text-center pt-20">
        <div className="flex flex-col gap-y-3 text-center items-center mb-10">
          <h1 className="font-bold text-[#252B42] text-[40px]">Pricing FAQs</h1>
          <p className="text-[#252B42] text-[14px] w-[50%] text-center">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="mt-10 md:flex md:flex-row md:justify-center md:gap-x-10 md:flex-wrap gap-y-10 w-[80%]">
          {pricingFAQs.map((faq) => (
            <div
              key={faq.id}
              className=" py-4 pl-10 flex flex-col w-[90%] md:w-[40%] text-left"
            >
              <div className=" font-bold md:ml-[-30px] text-[#252B42]">
                <span className="text-[#23A6F0] md:mr-5 hidden md:inline-block">
                  {">"}
                </span>
                {faq.title}
              </div>
              <p className="text-[#252B42] mb-10 md:w-[408px]">
                {faq.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[20px] text-[#737373] md:mt-10 mt-20 w-[70%] mb-10">
          Haven’t got your answer? Contact our support
        </p>
      </section>
      <section className="flex flex-col items-center justify-center text-center gap-y-10 mt-20 w-[90%] mx-auto">
        <h1 className="text-[#252B42] text-[40px] font-bold">
          Start your 14 days free trial
        </h1>
        <p className="text-[#737373] md:w-[30%] text-[14px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-[#23A6F0] text-white text-[14px] font-bold w-[186px] rounded-[5px] h-[52px]">
          Try it free now
        </button>
        <nav className="flex flex-row pt-2 ">
          <FontAwesomeIcon
            className="h-[30px] w-[30px] text-[#21A6DF] mx-3"
            icon={faTwitter}
            size="lg"
          />
          <FontAwesomeIcon
            className="h-[30px] w-[30px] text-[#335BF5] mx-3"
            icon={faFacebook}
            size="lg"
          />
          <FontAwesomeIcon
            className="h-[30px] w-[30px] text-[#E51F5A] mx-3"
            icon={faInstagram}
            size="lg"
          />
          <FontAwesomeIcon
            className="h-[30px] w-[30px] text-[#0A66C2]  mx-3"
            icon={faLinkedin}
            size="lg"
          />
        </nav>
      </section>
    </div>
  );
}
