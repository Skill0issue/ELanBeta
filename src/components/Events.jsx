import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CompetitionsBox from './subcomponents/competitionsBox/CompetitionsBox'
import './Events.scss'

const Events = () => {
  const [display, setDisplay] = useState('p');

  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-[55vh] md:h-screen md:m-0 pt-24 px-8">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              style={{ marginLeft: "10px" }} // Adjust the margin value as needed
            />
          </Link>
          <div id="events">
            <div className="buttonGroupPapa">
              <div className="armButtonGroup">
                <div
                  onClick={() => setDisplay("p")}
                  className={`pronites ${display == "p" && "bg-rose-200"}`}
                >
                  PRONITES
                </div>
                <div className="divider"></div>
                <div
                  onClick={() => setDisplay("c")}
                  className={`culti ${display == "c" && "bg-rose-200"}`}
                >
                  CULTI
                </div>
                <div className="divider"></div>
                <div
                  onClick={() => setDisplay("t")}
                  className={`techy ${display == "t" && "bg-rose-200"}`}
                >
                  TECHY
                </div>
              </div>
            </div>
            <div className="text-3xl">
              <h1>EVENTS</h1>
            </div>
            {display == "p" && (
              <div className='data'>
                <h1>Pronites</h1>
                <p>
                  Aside from the competitions, our festival consistently
                  delights attendees with entertaining and thrilling
                  performances. Massive speakers amplify the transition from
                  sweet melodies to the intense growls of electric guitars,
                  accompanied by psychedelic lights that captivate the audience,
                  encouraging them to move to the rhythm. As done in past, we
                  guarantee a memorable night filled with countless
                  unforgettable moments.
                  <ul>
                    <li>Sunburn - Lost Stories, Anand Bhaskar Collectives</li>
                    <li>Gajendra Verma</li>
                    <li>Zakir Khan</li>
                    <li>Darshan Raval</li>
                    <li>Kailash Kher</li>
                  </ul>
                </p>
              </div>
            )}
            {display == "c" && (
              <div className='data'>
                <h1>Culty</h1>
                <p>
                  Dedicated to captivating the audience, CULTI vows to mesmerize
                  with a collection of extraordinary performances, offering a
                  platform for consistent and extensive visibility. This
                  commitment includes coordinating diverse cultural events and
                  competitions, allowing participants to showcase their talents.
                </p>
              </div>
            )}
            {display == "t" && (
              <div className='data'>
                <h1>Techy</h1>
                <p>
                  At the heart of our narratives, technology becomes the
                  campfire where time stands still, and contestants skillfully
                  craft their enchanting stories. Whether it is participating in
                  Hackathons or creating intricate CAD models, we offer a
                  comprehensive range of experiences!
                </p>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Events
