import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import WorkshopCard from './WorkshopCard';

const Workshops = () => {
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen overflow-clip md:h-[60rem] md:m-0 pt-24">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              style={{ marginLeft: '10px' }}
            />
          </Link>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-snug font-Prompt font-bold lg:ml-10 lg:mr-10 xl:ml-16 xl:mr-16" style={{ marginLeft: '3rem', marginRight: '3rem' }}>
            Workshops are an essential part of our fest. They are intended for hands-on experiential learning. Our workshops are designed and planned in such a way that they improve students' critical thinking skills. Some of our key workshops include
            <ul>
              <li>Ethical Hacking and Cyber Security</li>
              <li>Facial and Emotional Recognition with Deep Learning</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Introduction to Computer-aided Engineering</li>
              <li>Website Design development</li>
            </ul>
          </div>
          <div className="text-3xl p-4 mb-6 overflow-hidden text-[#850E35] font-bold flex flex-col items-center">
            <span className="inline-block overflow-hidden">
              UPCOMING WORKSHOPS
            </span>
            <WorkshopCard
              title={"Sample Event"}
              description={"Just Trying out this sample Just Trying out this sample "}
              img={""}
              registration={""}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Workshops;
