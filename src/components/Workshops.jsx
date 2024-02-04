import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import WorkshopCard from "./WorkshopCard";
import MMWS from '../assets/workshops/poster copy-2.png'

const Workshops = () => {
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar home={false} />
        <section className="w-screen h-auto px-8 pt-24 md:m-0">
          {/* <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={'#874356'}
              className="w-6 h-6 ml-2 md:w-14 md:h-12 sm:ml-1 md:ml-8 lg:ml-4"
            />
          </Link> */}
          <h1 className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-6 mb-6 md:ml-4 overflow-hidden">
            About Our Workshops
          </h1>
          <div
            className="text-base font-bold leading-snug sm:p-2 md:p-8 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-Prompt sm:mx-4 md:mx-6 lg:mx-10 xl:mx-16"
            style={{
              marginLeft: "2rem",
              marginRight: "2rem",
              "@media (max-width: 450px)": { margin: "1rem" },
            }}
          >
            Workshops are an essential part of our fest. They are intended for
            hands-on experiential learning. Our workshops are designed and
            planned in such a way that they improve students&apos; critical thinking
            skills. Some of our key workshops include
            <ul className="text-[#874356] lg:text-xl mg:text-lg sm:text-base">
              <li>Ethical Hacking and Cyber Security</li>
              <li>Facial and Emotional Recognition with Deep Learning</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Introduction to Computer-aided Engineering</li>
              <li>Website Design development</li>
            </ul>
          </div>
          <div className="h-auto text-3xl p-4 mb-6 overflow-hidden text-[#850E35] font-bold flex flex-col items-center">
            {/* <span className="inline-block overflow-hidden text-center">NO UPCOMING WORKSHOPS</span>
            <span className="inline-block overflow-hidden text-center">Stay tuned for further updates :)</span> */}
            <WorkshopCard
              title={"Market Mastery Workshop Series"}
              description={
                "This workshop covers all aspects essential for a strong foundation in stock trading, making it ideal for beginners.  Learn from experienced professionals in the field who will share practical insights and valuable tips. Whether you aspire to build long-term wealth or generate additional income, this workshop empowers you to take control of your financial future through informed stock trading. "
              }
              img={MMWS}
              timefrom={"24th Feb"}
              timeto={"25th Feb"}
              mode = {"online"}
              registration={
                "https://unstop.com/workshops-webinars/market-mastery-workshop-series-elan-ivision-2024-iit-hyderabad-882942"
              }
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Workshops;
