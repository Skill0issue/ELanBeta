import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import "swiper/css/bundle";
import ImageGrid from "./Grid";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import image2 from '../assets/Sponsors/abhibus.png';
import image3 from '../assets/Sponsors/Barbeque_Nation_New_Logo.jpg';
import image4 from '../assets/Sponsors/BlogAdda.png';
import image5 from '../assets/Sponsors/Centro.png';
import image6 from '../assets/Sponsors/DRVadiya.png';
import image7 from '../assets/Sponsors/EaseMyTrip.png';
import image8 from '../assets/Sponsors/Eenadu.png';
import image9 from '../assets/Sponsors/ETV.png';
import image10 from '../assets/Sponsors/Fashion Gerald.jpg';
import image11 from '../assets/Sponsors/GrabOn.png';
import image12 from '../assets/Sponsors/Groovenexus Logo (1).png';
import image13 from '../assets/Sponsors/Interview buddy.png';
import image14 from '../assets/Sponsors/KnowAfest.png';
import image15 from '../assets/Sponsors/LIC.png';
import image16 from '../assets/Sponsors/MERHYD.jpg';
import image17 from '../assets/Sponsors/museeMusical.png';
import image18 from '../assets/Sponsors/Notivebard Logo.png';
import image19 from '../assets/Sponsors/NTPC.png';
import image20 from '../assets/Sponsors/OLD TOWN SODA-01.jpg';
import image21 from '../assets/Sponsors/PenguinBooks.jpg';
import image22 from '../assets/Sponsors/plum_body_lovin.png';
import image23 from '../assets/Sponsors/RageCoffee.png';
import image24 from '../assets/Sponsors/ScaryHouse.jpg';
import image25 from '../assets/Sponsors/Sea Lord Ent.png';
import image26 from '../assets/Sponsors/Sirona.jpg';
import image27 from '../assets/Sponsors/Telangana-Today-News-1.jpg';
import image28 from '../assets/Sponsors/wow_momo.jpeg';
import image29 from '../assets/Sponsors/Youth Incorportated.jpg';


const Home = () => {
  const sponsors = [
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
    { id: 12, src: image12 },
    { id: 13, src: image13 },
    { id: 14, src: image14 },
    { id: 15, src: image15 },
    { id: 16, src: image16 },
    { id: 17, src: image17 },
    { id: 18, src: image18 },
    { id: 19, src: image19 },
    { id: 20, src: image20 },
    { id: 21, src: image21 },
    { id: 22, src: image22 },
    { id: 23, src: image23 },
    { id: 24, src: image24 },
    { id: 25, src: image25 },
    { id: 26, src: image26 },
    { id: 27, src: image27 },
    { id: 28, src: image28 },
    { id: 29, src: image29 },
  ];
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
        <Navbar home={true}/>
        <section className="w-screen h-[55vh] md:h-screen md:m-0 pt-24 overflow-hidden">
          <div className="bg-[inherit] w-screen h-[90%] flex flex-col items-center justify-center">
            <div className={`bg-[url('/assets/elan.png')] logo-image`}></div>
            <div className="heading-border">
              <span className="heading-1">Elan & ηVision</span>
            </div>
            <Link to="/Workshops" className="border-register hover:bg-[#EE6983] group">
              <span className="link-register group-hover:text-white">REGISTER FOR WORKSHOPS</span>
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

            <div className="overflow-hidden text-xl leading-snug md:text-3xl font-MoulPali">
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
              Fundamentally, Elan and ηVision function as high-level forums
              where students can showcase their skills, share thought-provoking
              concepts, and explore the unexplored territories of human
              potential. The celebration has evolved into a popular occasion
              that is felt throughout the entire region and is no longer limited
              to the grounds of IIT Hyderabad. Its importance extends beyond the
              walls of academic institutions, drawing participants, experts, and
              enthusiasts from various fields and backgrounds.
              <br />
              <br />
              Elan, the cultural feast, opens out into a vivid tapestry of
              artistic manifestations. Elan symbolizes innovation and artistic
              virtuosity in everything from dance performances that elegantly
              weave storylines via graceful movements to musical renditions that
              span a wide range of genres. The stage transforms into a large
              canvas on which individuals paint their stories, presenting the
              audience with an enthralling mosaic of ethnic diversity.
              <br />
              <br />
              On the other hand, ηVision explores the frontiers of innovation
              and technology. It acts as a testing ground for aspiring
              engineers, tech enthusiasts, and visionaries to present their
              ideas, inventions, and answers to practical problems. This part is
              characterized by workshops, hackathons, and technical exhibitions
              that offer an enticing peek into the future of technological
              marvels. The exceptional ability of Elan and ηVision to skillfully
              combine these apparently unrelated worlds into a beautiful and
              melodious celebration is what makes them stand out.
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
        <section className="flex flex-col justify-center h-auto p-4 md:p-32 items-centerreen item">
          <div className="flex flex-col py-8">
            <h1 className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-4 mb-6 mx-auto self-center overflow-hidden">
              SPONSORS
            </h1>
            <Box
              sx={{ width: "100%" }}
              className="h-full overflow-hidden md:w-[80vw] w-[90%] md:p-8 mx-auto justify-center"
            >
              <Masonry
                columns={7}
                rows={4}
                spacing={2}
                className="justify-center items-centeruto item"
              >
                {sponsors.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.src}
                      alt={item.id}
                      className="justify-center object-contain h-16 rounded-xl aspect-square"
                      loading="lazy"
                      style={{
                        display: "flex",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </Masonry>
            </Box>
          </div>
          <div
            className={`after-movie flex flex-col justify-center items-center gap-6`}
          >
            <h1 className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl md:p-4 sm:p-1 mb-6 overflow-hidden">
              AFTER MOVIE
            </h1>
            <div className={`aftermovie relative`}>
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
