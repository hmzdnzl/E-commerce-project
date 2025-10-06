import familyshop from "../assets/about/familyshop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,  
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Send } from "lucide-react";
import { Phone } from "lucide-react";

export default function AboutPage() {
  const contactEmail = useSelector((state) => state.contact.contactEmail);
  return (
    <main className="flex flex-col font-montserrat items-center justify-center mt-20 gap-y-14">
      <section className="flex flex-col items-center justify-center mb-10">
        <div className="font-montserrat text-center items-center gap-y-10 flex flex-col">
          <h1 className="font-bold text-[16px] text-[#252B42]">CONTACT US</h1>
          <h2 className="font-bold text-center flex text-[40px] w-[330px] text-[#252B42]">
            Get in touch today!
          </h2>
          <p className="font-[400] leading-[30px] text-[20px] tracking-[0.2px] w-[275px]  text-[#737373]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
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
            <div className="w-[77.39px] h-[77.39px] mr-[-35px] mt-[29px] bg-[#FFE9EA] rounded-full"></div>
            <div className="w-[9.02px] h-[9.02px] mr-[-5px] mt-[200.97px] bg-[#977DF4] rounded-full"></div>
          </section>
          <section className="">
            <img
              className=" mt-[-150px] relative z-10 w-[425px] h-[499px] object-cover 
              left-1/2 top-1/2 -translate-x-[245px] -translate-y-[210px]"
              src={familyshop}
              alt=""
            />
            <div
              className="relative w-[295.65px] h-[295.65px] mt-[35.26px] bg-[#FFE9EA] 
            left-1/2 top-1/2 -translate-x-[190px] -translate-y-[710px] overflow-visible 
            rounded-full flex items-center justify-center"
            ></div>
          </section>
          <section className="z-0 ">
            <div className="w-[9.02px] h-[9.02px] bg-[#977DF4] mt-[107.6px] ml-[-80px] rounded-full"></div>
            <div className="w-[18.48px] h-[18.48px] bg-[#FFE9EA] mt-[69.9px] ml-[-100px]  rounded-full"></div>
          </section>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#FAFAFA] gap-y-10 w-full ">
        <header className="flex flex-col items-center text-center">
          <h1 className="font-bold text-[14px] text-[#252B42]">
            VISIT OUR OFFICE
          </h1>
          <h2 className="font-bold w-[300px] flex flex-wrap text-[40px] text-[#252B42]">
            We help small businesses with big ideas
          </h2>
        </header>
        <div className="bg-white w-[85%] h-[333px] pt-10 flex flex-col gap-y-5 items-center">
          <nav>
            <Phone size={72} color="#23A6F0" />
          </nav>
          <nav className="flex flex-col items-center mt-2 gap-y-2 text-[#252B42] text-[14px] font-bold">
            <p>{contactEmail[0].email1}</p>
            <p>{contactEmail[0].email2}</p>
          </nav>
          <nav className="flex flex-col font-bold text-[16px] text-[#252B42] items-center mt-5 gap-y-5">
            <p>Get Support</p>
            <button className=" text-[#23A6F0] font-bold w-[161px] rounded-[5px] h-[44px] border border-[#23A6F0]">
              Submit Request
            </button>
          </nav>          
        </div>
         <div className="bg-[#252B42] w-[85%] h-[393px] flex flex-col gap-y-5 justify-center items-center">
          <nav>
            <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "72px" }} color="#23A6F0" />
          </nav>
          <nav className="flex flex-col items-center mt-2 gap-y-2 text-[#FFFFFF] text-[14px] font-bold">
            <p>{contactEmail[0].email1}</p>
            <p>{contactEmail[0].email2}</p>
          </nav>
          <nav className="flex flex-col font-bold text-[16px] text-[#FFFFFF] items-center mt-5 gap-y-5">
            <p>Get Support</p>
            <button className=" text-[#23A6F0] font-bold w-[161px] rounded-[5px] h-[44px] border border-[#23A6F0]">
              Submit Request
            </button>
          </nav>          
        </div>
         <div className="bg-white w-[85%] h-[393px] flex flex-col gap-y-5 justify-center items-center">
          <nav>
            
            <Send size={72} color="#23A6F0" />
          </nav>
          <nav className="flex flex-col items-center mt-2 gap-y-2 text-[#252B42] text-[14px] font-bold">
            <p>{contactEmail[0].email1}</p>
            <p>{contactEmail[0].email2}</p>
          </nav>
          <nav className="flex flex-col font-bold text-[16px] text-[#252B42] items-center mt-5 gap-y-5">
            <p>Get Support</p>
            <button className=" text-[#23A6F0] font-bold w-[161px] rounded-[5px] h-[44px] border border-[#23A6F0]">
              Submit Request
            </button>
          </nav>          
        </div>
      </section>
    </main>
  );
}
