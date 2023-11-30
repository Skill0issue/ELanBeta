
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import "swiper/css/bundle";
import ImageGrid from "./Grid";


const Home = () => {
  const handleScrollDown = () => {
    //scroll the page by 100vh
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-[55vh] md:h-screen md:m-0 pt-24 overflow-hidden">
          <div className="bg-[inherit] w-screen h-[90%] flex flex-col items-center justify-center">
            <div className={`bg-[url('/assets/elan.png')] logo-image`}></div>
            <div className="heading-border">
              <span className="heading-1">Elan & ηVision</span>
            </div>
            <Link to="/Workshops" className="border-register">
              <span className="link-register">REGISTER FOR WORKSHOPS</span>
            </Link>
          </div>
          <div id="scroll-down" className="flex justify-center h-auto p-4">
            <div
              className="hidden cursor-pointer md:flex animate-bounce"
              onClick={handleScrollDown}
            >
              <AiOutlineArrowDown size={64} color={"#874356"} />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center w-screen h-[45vh] md:h-[30vh] justify-evenly md:mt-24 ">
          <div className="w-screen flex justify-evenly h-[15rem] followers bg-[#EE6983] items-center overflow-auto">
            <span>
              <h1>250+</h1>
              COLLEGES
            </span>
            <span>
              <h1>10k+</h1>
              FOOTFALL
            </span>
            <span>
              <h1>40+</h1>
              EVENTS
            </span>
          </div>
        </section>
        <section className="flex justify-center w-screen h-[90vh] mt-[-20vh]">
          <div className=" flex flex-col items-center justify-center tex-center h-full w-[90%] md:w-[70%] p-4">
            <div className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-4 mb-6 overflow-hidden">
              ABOUT US
            </div>

            <div className="overflow-hidden text-2xl leading-snug font-MoulPali">
              Elan and ηVision is the annual techno-cultural fest of IIT
              Hyderabad and is one of the largest fests in South India. Elan
              refers to the cultural part and ηVision cites the technological
              part of fest. This fest boasts of several professional and
              semi-professional crowd pulling events and promises to be a grand
              event that exhibits the best of cultural performances, technical
              solutions, and advances from the student community.
            </div>
          </div>
        </section>
        <section className="w-screen h-auto ">

          <ImageGrid/>

        </section>
        <section className="w-screen h-screen">
          <div className={`after-movie flex justify-center items-center`}>
            <div className={`w-[826px] h-[450px] relative  `}>
              <div className="bg-[#850e35] absolute right-[3.87%] left-[0%] w-[96.13%] bottom-[0%] top-[8.22%] h-[91.78%]"></div>
              <div className="bg-[#f68989] absolute right-[0%] left-[3.87%] w-[96.13%] bottom-[8.22%] top-[0%] h-[91.78%]"></div>
              <iframe
                className="absolute right-[5.93%] left-[9.93%] w-[84.14%] bottom-[16.67%] top-[8.67%] h-[74.67%]"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7RWJMat8JM4?si=lbrFwodVsj4Tx40j"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
