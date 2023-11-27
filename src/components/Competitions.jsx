import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Competitions = () => {
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-[55vh] md:h-screen md:m-0 pt-24">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              style={{ marginLeft: '10px' }} // Adjust the margin value as needed
            />
          </Link>
          
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Competitions
