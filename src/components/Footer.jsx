import elan from "/assets/elan.png";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" static bottom-0 flex flex-col-reverse md:flex-row md:justify-between justify-center w-screen h-auto bg-[#850E35]">
        <div className="flex flex-col justify-evenly items-center md:w-[30%]">
          <img
            src={elan}
            alt="elan.png"
            className="justify-center hidden w-20 h-20 md:flex aspect-square"
          />
          <div className="inline-flex gap-4 p-4 md:gap-5">
            {/* Change the value if you want to make it more responsive i Cant be bothered with it */}
            <AiFillLinkedin
              size={`${window.screen.innerwidth > 950 ? 64 : 32}`}
              color={"white"}
            />
            <AiOutlineInstagram
              size={`${window.screen.innerwidth > 950 ? 64 : 32}`}
              color={"white"}
            />
            <AiOutlineYoutube
              size={`${window.screen.innerwidth > 950 ? 64 : 32}`}
              color={"white"}
            />
            <AiFillFacebook
              size={`${window.screen.innerwidth > 950 ? 64 : 32}`}
              color={"white"}
            />
          </div>
          <div>
            <span className="font-Mplus md:text-[24px] text-[12px] font-bold text-white hidden md:flex">
              Mail US:{" "}
              <a
                href="mailto:elan@iith.ac.in"
                className="hidden underline md:flex"
              >
                elan@iith.ac.in
              </a>
            </span>
          </div>
        </div>
        <div className="md:w-[40%] w-screen flex jsutify-center flex-col text-white mx-8 py-4 md:mx-4">
          <h2 className="md:text-[30px] text-[16px] py-4 self-center font-Mplus font-bold">
            CONTACT US
          </h2>
          <span className="text-[12px] md:text-xl font-Mplus font-extrabold">
            Manikanta Uppulapu, Overall Coordinator <br /> 77300 06389 <br />{" "}
            Sumedh Kashikar, Head of Public Relations <br /> 76010 41880
          </span>
        </div>
      </div>
      <div className="flex justify-center align-center bg-[#850E35] text-white">
        <span className="p-2 font-bold text-[8px] md:text-xl font-Mplus">
          © 2023, All rights reserved, Elan & ηVision
        </span>
      </div>
    </>
  );
};

export default Footer;
