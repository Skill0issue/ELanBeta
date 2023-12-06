import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import CompetitionsBox from './subcomponents/competitionsBox/CompetitionsBox'
import './Events.scss'
//Images imports
import tech1 from "../assets/events/tech1.jpg"
import tech2 from "../assets/events/tech2.jpg"
import tech3 from "../assets/events/tech3.jpg"
import culti1 from "../assets/events/culti1.jpg"
import culti2 from "../assets/events/culti2.jpg"
import culti3 from "../assets/events/culti3.jpg"
import pro1 from "../assets/events/pro1.jpg"
import pro2 from "../assets/events/pro2.jpg"
import pro3 from "../assets/events/pro3.jpg"

const Events = () => {
  const [display, setDisplay] = useState('p');

  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-auto px-8 pt-24 md:m-0">
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
              {/* <h1>EVENTS</h1> */}
            </div>
            {display == "p" && (
              <div className='data'>
                <div className='font-Moul text-[#850E35] font-light text-4xl mt-3'>PRONITES</div>
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
                <div className='flex flex-row flex-wrap gap-2 justify-evenly mb-16 mt-16 px-4 sm:px-0'>
                  <img src={pro1} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                  <img src={pro2} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                  <img src={pro3} className='md:w-[16rem] md:h-[20rem] sm:w-[14rem] sm:h-[18rem]'/>
                </div>
              </div>
            )}
            {display == "c" && (
              <div className='data'>
                <div className='font-Moul text-[#850E35] font-light text-4xl mt-3'>CULTI</div>
                <p>
                  Dedicated to captivating the audience, CULTI vows to mesmerize
                  with a collection of extraordinary performances, offering a
                  platform for consistent and extensive visibility. This
                  commitment includes coordinating diverse cultural events and
                  competitions, allowing participants to showcase their talents.
                </p>
                <div className='flex flex-row flex-wrap gap-2 justify-evenly mb-16 mt-16 px-4 sm:px-0'>
                  <img src={culti1} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                  <img src={culti2} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                  <img src={culti3} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                </div>
              </div>
            )}
            {display == "t" && (
              <div className='data'>
                <div className='font-Moul text-[#850E35] font-light text-4xl mt-3'>TECHY</div>
                <p>
                  At the heart of our narratives, technology becomes the
                  campfire where time stands still, and contestants skillfully
                  craft their enchanting stories. Whether it is participating in
                  Hackathons or creating intricate CAD models, we offer a
                  comprehensive range of experiences!
                </p>
                <div className='flex flex-row flex-wrap gap-2 justify-evenly mb-16 mt-16 px-4 sm:px-0'>
                  <img src={tech1} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                  <img src={tech2} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                  <img src={tech3} className='aftermovie md:w-[25rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]'/>
                </div>
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
