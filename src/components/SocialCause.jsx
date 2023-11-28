import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SocialCause = () => {
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen md:m-0 pt-24">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              style={{ marginLeft: '10px' }} // Adjust the margin value as needed
            />
          </Link>
          <div className="text-4xl leading-snug font-MoulPali w-[60rem] h-screen mt-8 mb-8" style={{marginLeft: '3.75rem'}}>
            Perusing articles on environmental issues, it becomes evident that animals often suffer due to human activities, despite their rightful place on Earth. This shared planet gives every species an inherent right to its resources. Acknowledging this, “Elan & ηVision” introduces the initiative "IKSHANA - LOVE ANIMALS" this year.

            Our aim is to raise awareness about the challenges animals face and emphasize their importance in the ecosystem. These creatures, many of whom are vulnerable due to various factors, warrant our attention and care. Through our initiative, we hope to create a platform where discussions about animal welfare take precedence. From conservation efforts to promoting kindness towards animals, we aspire to make a positive change. Let's work together to ensure a harmonious coexistence with all Earth's inhabitants.
          </div>
        </section>
        <Footer />
      </div>
    </>

  )
}

export default SocialCause
