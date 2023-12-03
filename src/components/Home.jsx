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
          <div className="w-screen flex justify-evenly h-auto py-8 followers bg-[#EE6983] items-center overflow-auto">
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
        <section className="flex items-center justify-center w-screen h-autoitems ">
          <div className=" flex flex-col items-center justify-center tex-center h-full w-[90%] md:w-[70%] p-4">
            <div className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-4 mb-6 overflow-hidden">
              ABOUT US
            </div>

            <div className="overflow-hidden text-3xl leading-snug font-MoulPali">
              Elan and ηVision, the annual techno-cultural gala of the Indian
              Institute of Technology (IIT) Hyderabad, stand as vibrant pillars
              that epitomize creativity, innovation, and community engagement.
              This grand celebration, widely recognized as one of the largest
              festivals in South India, adeptly merges cultural richness with
              technological prowess, uniting a diverse array of talents and
              ideas. Elan, representing the cultural facet, and ηVision,
              embodying the technological dimension, collaboratively craft an
              immersive experience for both participants and attendees.
              <br />
              <br />
              At its core, Elan and ηVision serve as elevated platforms for
              students to unfurl their talents, exchange profound ideas, and
              pioneer the uncharted realms of human potential. The festivity has
              metamorphosed into a hallmark event, not confined merely to the
              precincts of IIT Hyderabad but resonating across the broader
              expanse of the region. Its significance transcends the academic
              corridors, beckoning participants, professionals, and aficionados
              from diverse backgrounds and disciplines.
              <br />
              <br />
              The cultural extravaganza, Elan, unfurls as a vibrant kaleidoscope
              of artistic expressions. From dance performances that eloquently
              weave narratives through graceful movements to musical renditions
              traversing the spectrum of genres, Elan embodies the essence of
              creativity and artistic virtuosity. The stage metamorphoses into
              an expansive canvas, where participants paint their narratives,
              treating the audience to a mesmerizing tapestry of cultural
              diversity.
              <br />
              <br />
              Conversely, ηVision delves into the cutting edge of technology and
              innovation. It serves as a crucible for budding engineers, tech
              enthusiasts, and visionaries to showcase their projects,
              inventions, and solutions to real-world challenges. Workshops,
              hackathons, and technical exhibitions characterize this segment,
              providing a tantalizing glimpse into the future of technological
              marvels. What sets Elan and ηVision apart is their unparalleled
              ability to seamlessly integrate these seemingly disparate realms
              into a symphony of elegance and harmonious celebration.
              <br />
              <br />
            </div>
          </div>
        </section>
        <section className="items-center w-screen h-auto text-center ">
          <div className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-4 overflow-hidden">
            HIGHLIGHTS
          </div>
          <ImageGrid />
        </section>
        <section className="flex flex-col justify-center w-screen h-screen">
          <div
            className={`after-movie flex flex-col justify-center items-center gap-6`}
          >
            <h1 className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-4 mb-6 overflow-hidden">
              AFTER MOVIE
            </h1>
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
