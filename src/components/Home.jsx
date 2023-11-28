import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import AfterMovie from "./AfterMovie";

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
        <section className="w-screen h-screen">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectCoverflow,
              Autoplay,
            ]}
            className="h-auto mySwiper"
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            // centeredSlides={true}
            loopAdditionalSlides={4}
            coverflowEffect={{
              rotate: 50,
              stretch: -20,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, DynamicBullets: true }}
            scrollbar={{ draggable: true, hide: true }}
            onSlideChange={() => console.log("slide changed")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>slide 1</SwiperSlide>
            <SwiperSlide>slide 2</SwiperSlide>
            <SwiperSlide>slide 3</SwiperSlide>
            <SwiperSlide>slide 4</SwiperSlide>
            <SwiperSlide>slide 5</SwiperSlide>
            <SwiperSlide>slide 6</SwiperSlide>
            <SwiperSlide>slide 7</SwiperSlide>
            <SwiperSlide>slide 8</SwiperSlide>
          </Swiper>
        </section>
        <section className="w-screen h-screen">
          <div className={`after-movie flex justify-center items-center`}>
            <AfterMovie />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
