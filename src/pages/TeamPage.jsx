import teambig from "../assets/teamPage/teamb.jpg";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function TeamPage() {
  const teamPage1 = useSelector((state) => state.teamPage.teamPage1);
  const teamPage2 = useSelector((state) => state.teamPage.teamPage2);

  return (
    <div className="font-montserrat">
      <header className="flex flex-col items-center pt-20">
        <h1 className="text-[#737373] text-[16px] font-bold">WHAT WE DO</h1>
        <h2 className="font-bold text-[58px] text-[#252B42] text-center">
          Innovation tailored for you
        </h2>
        <div className="items-center flex gap-x-4 mt-2 mb-10">
          <a href="/" className="font-bold text-[#252B42]">
            Home
          </a>
          <span className="text-[#BDBDBD] gap-x-4 flex">{">"} </span>
          <a href="/about" className="font-bold text-[#252B42]">
            About
          </a>
          <span className="text-[#BDBDBD] gap-x-4 flex">
            {">"} <span className="text-[#BDBDBD] font-bold">Team</span>
          </span>
        </div>
      </header>
      <section className="flex flex-col md:flex md:flex-row md:gap-x-5">
        <div>
          <img className="w-full" src={teambig} alt="" />
        </div>
        <div className="flex flex-row flex-wrap justify-between items-start gap-y-5 w-full ">
          {teamPage1.map((member) => (
            <div
              key={member.id}
              className="flex flex-wrap w-[49%] border h-[260px] md:h-[49%] justify-center items-center md:mt-0 md:mb-0 mt-2 mb-2"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>
      </section>
      <section className="flex flex-col  items-center justify-center mt-10 pb-20">
        <h1 className="font-bold text-[40px] text-[#252B42] text-center mb-5 md:w-full w-[300px]">
          Meet Our Team
        </h1>
        <div className=" md:flex md:flex-row md:flex-wrap md:gap-x-5 md:justify-between flex flex-col gap-y-10 md:w-[52%]">
          {teamPage2.map((member) => (
            <div key={member.id} className="flex flex-col items-center gap-y-5">
              <img
                src={member.image}
                alt={member.name}
                className="w-[316px] h-[231px] "
              />
              <div className="flex flex-col items-center gap-y-3">
                <h2 className="font-bold text-[18px] text-[#252B42]">
                  {member.name}
                </h2>
                <p className="text-[#737373] text-[14px]">
                  {member.profession}
                </p>
                <nav className="flex flex-row pt-2 ">
                  <FontAwesomeIcon
                    className="h-[24px] w-[24px] text-[#335BF5] mx-2"
                    icon={faFacebook}
                    size="lg"
                  />
                  <FontAwesomeIcon
                    className="h-[24px] w-[24px] text-[#21A6DF] mx-2"
                    icon={faTwitter}
                    size="lg"
                  />
                  <FontAwesomeIcon
                    className="h-[24px] w-[24px] text-[#E51F5A] mx-2"
                    icon={faInstagram}
                    size="lg"
                  />
                </nav>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-y-7 mt-20">
        <h1 className="font-bold text-[40px] text-center text-[#252B42] md:w-auto w-[322px] mx-auto ">
          Start your 14 days free trial
        </h1>
        <p className="text-[14px] text-[#737373] text-center md:w-[400px] w-[85%] mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-[#23A6F0] text-[14px] rounded w-[186px] h-[52px]  text-white ">
          Try it free now
        </button>
        <nav className="flex flex-row pt-2 ">
          <FontAwesomeIcon
            className="h-[24px] w-[24px] text-[#21A6DF] mx-2"
            icon={faTwitter}
            size="lg"
          />
          <FontAwesomeIcon
            className="h-[24px] w-[24px] text-[#335BF5] mx-2"
            icon={faFacebook}
            size="lg"
          />
          <FontAwesomeIcon
            className="h-[24px] w-[24px] text-[#E51F5A] mx-2"
            icon={faInstagram}
            size="lg"
          />
          <FontAwesomeIcon
            className="h-[24px] w-[24px] text-[#0A66C2]  mx-2"
            icon={faLinkedin}
            size="lg"
          />
        </nav>
      </section>
    </div>
  );
}
