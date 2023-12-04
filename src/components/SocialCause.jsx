import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SocialCause = () => {
  return (
    <>
      <div className="w-full bg-[#FFF5E4]">
        <Navbar />
        <section className="w-full md:m-0 pt-24">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color="#874356"
              style={{ marginLeft: '10px' }}
            />
          </Link>
          <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-snug font-MoulPali mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 mt-8 mb-8 md:px-8 lg:px-12 xl:px-16 2xl:px-20 overflow-hidden">
            Perusing articles on environmental issues, it becomes evident that animals often suffer due to human activities, despite their rightful place on Earth. This shared planet gives every species an inherent right to its resources. Acknowledging this, “Elan & ηVision” introduces the initiative "IKSHANA - LOVE ANIMALS" this year.

            Our aim is to raise awareness about the challenges animals face and emphasize their importance in the ecosystem. These creatures, many of whom are vulnerable due to various factors, warrant our attention and care. Through our initiative, we hope to create a platform where discussions about animal welfare take precedence. From conservation efforts to promoting kindness towards animals, we aspire to make a positive change. Let's work together to ensure a harmonious coexistence with all Earth's inhabitants.
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default SocialCause;
