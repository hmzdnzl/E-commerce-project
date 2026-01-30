import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function MeetOurTeam() {
  const team = useSelector((state) => state.meetOurTeam.meetTeam);

  return (
    <section className="flex flex-col justify-center items-center mx-auto pt-[120px]">
      <div className="flex flex-col text-center items-center gap-y-7">
        <h1 className="font-bold w-[272px] text-center h-[120px] text-[40px] text-[#252B42]">
          Meet Our Team
        </h1>
        <p className="text-[#737373] text-[14px] w-[300px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
          <a className="text-[blue] underline" href="/team">
            Click here
          </a>{" "}
          for more information about our team.
        </p>
      </div>
      <div className=" md:flex md:flex-row md:gap-x-5 flex flex-col gap-y-10">
        {team.map((member) => (
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
              <p className="text-[#737373] text-[14px]">{member.profession}</p>
              <nav className="flex flex-row pt-2">
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
  );
}
