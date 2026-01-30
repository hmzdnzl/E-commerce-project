import familyshop from "../assets/contact/familyshop.png";
import Arrow2 from "../assets/contact/Arrow2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Send } from "lucide-react";
import { Phone } from "lucide-react";

export default function AboutPage() {
  const contactEmail = useSelector((state) => state.contact.contactEmail);
  return (
    <main className="flex flex-col font-montserrat items-center justify-center mt-20 md:mt-[-150px] md:gap-y-5 gap-y-14">
      <div className="flex flex-col md:flex md:flex-row md:w-[60%] md:justify-between md:px-5">
        <section className="flex flex-col items-center justify-center mb-10">
          <div className="font-montserrat text-center items-center gap-y-10 flex flex-col">
            <h1 className="font-bold text-[16px] text-[#252B42]">CONTACT US</h1>
            <h2 className="font-bold text-center flex text-[40px] w-[330px] text-[#252B42]">
              Get in touch today!
            </h2>
            <p className="font-[400] leading-[30px] text-[20px] tracking-[0.2px] w-[275px]  text-[#737373]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
            <div className="font-bold text-[24px] text-[#252B42] gap-y-3 flex flex-col">
              <p className="">Phone ; +451 215 215 </p>
              <p className="">Fax : +451 215 215</p>
            </div>
            <nav className="text-[#252B42] flex gap-x-5">
              <FontAwesomeIcon className="" size="2x" icon={faFacebook} />
              <FontAwesomeIcon className="" size="2x" icon={faTwitter} />
              <FontAwesomeIcon className="" size="2x" icon={faInstagram} />
              <FontAwesomeIcon className="" size="2x" icon={faLinkedin} />
            </nav>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div className="flex">
            <section className="flex flex-col items-center z-0">
              <div className="w-[77.39px] h-[77.39px] md:mt-[200px] md:mr-[-125px] mr-[-35px] mt-[29px] bg-[#FFE9EA] rounded-full"></div>
              <div className="md:w-[14.78px] md:h-[14.78px] md:mt-[330px] md:mr-[-65px]  w-[9.02px] h-[9.02px] mr-[-5px] mt-[200.97px] bg-[#977DF4] rounded-full"></div>
            </section>
            <section className="">
              <img
                className="md:w-[571px] md:h-[828px] md:-translate-x-[250px] md:-translate-y-[305px] mt-[-150px] relative z-10 w-[425px] h-[499px] object-cover 
              left-1/2 top-1/2 -translate-x-[245px] -translate-y-[210px]"
                src={familyshop}
                alt=""
              />
              <div
                className="md:w-[484.06px] md:h-[484.06px] md:-translate-x-[220px] md:-translate-y-[1110px] relative w-[295.65px] h-[295.65px] mt-[35.26px] bg-[#FFE9EA] 
            left-1/2 top-1/2 -translate-x-[190px] -translate-y-[710px] overflow-visible 
            rounded-full flex items-center justify-center"
              ></div>
            </section>
            <section className="z-0 mr-[-65px]">
              <div className=" md:w-[14.78px] md:h-[14.78px] md:mt-[310px] md:ml-[15px] w-[9.02px] h-[9.02px] bg-[#977DF4] mt-[107.6px] ml-[-80px]  rounded-full"></div>
              <div className=" md:w-[30.25px] md:h-[30.25px] md:mt-[170px] md:ml-[-10px] w-[18.48px] h-[18.48px] bg-[#FFE9EA] mt-[69.9px] ml-[-100px]  rounded-full"></div>
            </section>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center mt-[-220px] md:pt-0 pt-[130px] md:mt-[-150px] md:bg-[#FFFFFF] bg-[#FAFAFA] gap-y-14 w-full ">
        <header className="flex flex-col items-center text-center">
          <h1 className="font-bold text-[14px] text-[#252B42]">
            VISIT OUR OFFICE
          </h1>
          <h2 className="font-bold md:w-[551px] w-[300px] flex flex-wrap text-[40px] text-[#252B42]">
            We help small businesses with big ideas
          </h2>
        </header>
        <section className="md:flex md:flex-row md:gap-x-0 md:mt-0 flex flex-col gap-y-10 mb-20 items-center">
          <div className=" bg-white md:w-[328px] md:h-[343px] w-[328px] h-[333px] md:pt-8 pt-10 flex flex-col gap-y-5 items-center">
            <nav>
              <Phone size={72} color="#23A6F0" />
            </nav>
            <nav className="flex flex-col items-center mt-2 gap-y-2 text-[#252B42] text-[14px] font-bold">
              <p>{contactEmail[0].email1}</p>
              <p>{contactEmail[0].email2}</p>
            </nav>
            <nav className="flex flex-col font-bold text-[16px] text-[#252B42] items-center mt-5 gap-y-5">
              <p>Get Support</p>
              <button className=" text-[#23A6F0] font-bold w-[161px] rounded-[5px] h-[44px] md:w-[193px] md:h-[54px] md:rounded-[37px] border border-[#23A6F0]">
                Submit Request
              </button>
            </nav>
          </div>
          <div className="bg-[#252B42]  md:w-[328px] md:h-[403px] w-[328px] h-[393px] flex flex-col gap-y-5 justify-center items-center">
            <nav>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "72px" }}
                color="#23A6F0"
              />
            </nav>
            <nav className="flex flex-col items-center mt-2 gap-y-2 text-[#FFFFFF] text-[14px] font-bold">
              <p>{contactEmail[0].email1}</p>
              <p>{contactEmail[0].email2}</p>
            </nav>
            <nav className="flex flex-col font-bold text-[16px] text-[#FFFFFF] items-center mt-5 gap-y-5">
              <p>Get Support</p>
              <button className=" text-[#23A6F0] font-bold w-[161px] rounded-[5px] h-[44px] md:w-[193px] md:h-[54px] md:rounded-[37px] border border-[#23A6F0]">
                Submit Request
              </button>
            </nav>
          </div>
          <div className="bg-white w-[328px] h-[393px] md:w-[328px] md:h-[343px] flex flex-col gap-y-5 justify-center items-center">
            <nav>
              <Send size={72} color="#23A6F0" />
            </nav>
            <nav className="flex flex-col items-center mt-2 gap-y-2 text-[#252B42] text-[14px] font-bold">
              <p>{contactEmail[0].email1}</p>
              <p>{contactEmail[0].email2}</p>
            </nav>
            <nav className="flex flex-col font-bold text-[16px] text-[#252B42] items-center mt-5 gap-y-5">
              <p>Get Support</p>
              <button className=" text-[#23A6F0] font-bold w-[161px] rounded-[5px] h-[44px] md:w-[193px] md:h-[54px] md:rounded-[37px] border border-[#23A6F0]">
                Submit Request
              </button>
            </nav>
          </div>
        </section>
      </section>
      <section className="flex flex-col items-center">
        <nav>
          <img src={Arrow2} alt="" />
        </nav>
        <nav className="flex flex-col items-center gap-y-5 mt-3 mb-20">
          <h1 className="font-bold text-[16px] text-[#252B42]">
            WE Can't WAIT TO MEET YOU
          </h1>
          <h2 className="font-bold text-[58px] text-[#252B42]">Let’s Talk</h2>
          <button className="text-white text-[16px] font-bold bg-[#23A6F0] rounded-[5px] h-[52px] w-[186px]">
            Try it free now
          </button>
        </nav>
      </section>
    </main>
  );
}
