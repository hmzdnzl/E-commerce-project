import aboutİmg from "../assets/aboutPage/aboutimg.png";
import videoİmg from "../assets/aboutPage/videoimg.jpg";
import workwithusimg from "../assets/aboutPage/workwusimg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import MeetOurTeam from "../layout/meetOurTeam";
import Brands from "../layout/Brands";

export default function AboutPage() {
  const aboutData = useSelector((state) => state.about);

  return (
    <div className="overflow-x-hidden font-montserrat">
      <main className="flex flex-col font-montserrat items-center justify-center mt-20 md:mt-[-150px] md:gap-y-5 gap-y-14">
        <div className="flex flex-col md:flex md:flex-row md:w-[60%] md:justify-between md:px-5">
          <section className="flex flex-col items-center justify-center mb-10">
            <div className="md:flex md:flex-col md:text-left md:items-start md:mt-[10px] md:h-[481px] font-montserrat text-center items-center gap-y-10 flex flex-col">
              <h1 className="md:flex hidden font-bold text-[16px] md:text-[24px] text-[#252B42]">
                ABOUT COMPANY
              </h1>
              <h1 className="font-bold text-[40px] md:text-[60px] text-[#252B42]">
                ABOUT US
              </h1>

              <p className="font-[400] leading-[30px] text-[20px] md:text-[30px] tracking-[0.2px] md:w-[496px] w-[275px]  text-[#737373]">
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </p>
              <button className="bg-[#23A6F0] text-white text-[14px] md:text-[21px] w-[193px] md:w-[285px] h-[52px] md:h-[78px] px-4 py-2 rounded font-bold">
                Get Quote Now
              </button>
            </div>
          </section>
          <section className=" flex flex-col items-center">
            <div className="flex">
              <section className="flex flex-col items-center z-0">
                <div className="w-[77.39px] h-[77.39px] md:mt-[200px] md:mr-[-125px] mr-[-35px] mt-[29px] bg-[#FFE9EA] rounded-full"></div>
                <div className="md:w-[14.78px] md:h-[14.78px] md:mt-[330px] md:mr-[-65px]  w-[9.02px] h-[9.02px] mr-[-5px] mt-[200.97px] bg-[#977DF4] rounded-full"></div>
              </section>
              <section className="">
                <img
                  className="md:w-[571px] md:h-[828px] md:-translate-x-[250px] md:-translate-y-[305px] mt-[-150px] relative z-10 w-[425px] h-[499px] object-cover 
              left-1/2 top-1/2 -translate-x-[245px] -translate-y-[210px]"
                  src={aboutİmg}
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
                <div className=" md:w-[30.25px] md:h-[30.25px] md:mt-[170px] md:ml-[-10px] w-[18.48px] h-[18.48px] bg-[#FFE9EA] mt-[79.9px] ml-[-90px]  rounded-full"></div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <div className="w-[90%] md:w-[52%] flex flex-col items-center md:mt-[-150px] mb-[200px] mx-auto text-center">
        <h1 className="text-[#E74040] md:w-full md:text-left text-[14px] mb-10">
          Problems trying
        </h1>
        <section className="flex flex-col md:gap-x-10 gap-y-20 md:flex md:flex-row md:justify-between md:w-[1018px] ">
          <p className="text-[#252B42] text-[24px] mx-auto  w-[70%] md:w-[394px] md:text-left  font-bold ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
          <p className="text-[#737373] text-[14px] mx-auto w-[60%] md:w-[545px]  text-left">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </section>
      </div>
      <section className=" flex flex-col mt-20 mx-auto items-center">
        <div className="md:flex md:flex-row md:gap-x-[140px] flex flex-col gap-y-20 pb-20">
          {aboutData.map((item) => (
            <div key={item.id} className="flex flex-col items-center ">
              <h1 className="font-bold text-[58px] text-[#252B42]">
                {item.number}
              </h1>
              <span className="text-[#737373] text-[16px] font-bold">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className=" flex justify-center pt-10 relative">
        <img
          className="md:w-[989px] md:h-[540px] w-[306px] h-[316px] rounded-[10px]"
          src={videoİmg}
          alt=""
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-[#23A6F0] md:h-[92px] md:w-[92px] h-[56px] w-[56px] rounded-full p-4 shadow-lg">
          <FontAwesomeIcon
            icon={faPlay}
            className="text-white text-[14px] md:text-[24px]"
          />
        </span>
      </section>
      <MeetOurTeam />
      <section className="flex flex-col  bg-[#FAFAFA] items-center pt-20 mt-20">
        <h1 className="font-bold text-[40px] md:w-[526px] w-[277px] flex text-center mb-10">
          Big Companies Are Here
        </h1>
        <p className="text-[#737373] text-[14px] md:w-[547px] w-[328px] mb-[-80px] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <Brands />
      </section>
      <section className="md:flex md:flex-row md:w-[70%] mx-auto">
        <div className="bg-[#2A7CC7] w-full items-center justify-center text-center p-20 md:p-40">
          <div className="text-white md:flex md:w-[498px] md:flex-col md:items-start md:text-left flex flex-col items-center gap-y-7">
            <h1 className=" text-[16px]  font-bold">WORK WITH US</h1>
            <h2 className=" w-[274px] md:w-[460px] font-bold text-[40px]">
              Now Let’s grow Yours
            </h2>
            <p className="text-[14px] w-[257px] md:w-[460px]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="border border-[#FAFAFA] w-[130px] rounded h-[52px]">
              Button
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          <img className="w-[790px] " src={workwithusimg} alt="" />
        </div>
      </section>
    </div>
  );
}
