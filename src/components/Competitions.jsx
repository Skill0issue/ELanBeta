import Navbar from './Navbar'
import './Competitions.scss'
import Footer from './Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CompetitionsBox from './subcomponents/competitionsBox/CompetitionsBox'

const Competitions = () => {
  const [culty, setCulty] = useState(1);
  const cultiCompetitions = [
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
  ]
  const techyCompetitions = [
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
    {
      title: "Glitz & Glamour",
      description: "Glitz & Glamour is a thrilling spectacle where aspiring models and designers come together to showcase their talents and creativity. It's an exhilarating fusion of glamour, artistry, and self-expression that captivates both the participants and the audience, celebrating fashion and serving as a platform for talent to shine."
    },
  ]
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-[55vh] md:h-screen md:m-0 pt-24">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              style={{ marginLeft: "10px" }} // Adjust the margin value as needed
            />
          </Link>
          <div id="competitions">
            <div className="flex justify-center items-center">
              <div className="armButtonGroup">
                <div
                  onClick={() => setCulty(1)}
                  className={`culti ${culty && "bg-rose-200"}`}
                >
                  CULTI
                </div>
                <div className="divider"></div>
                <div
                  onClick={() => setCulty(0)}
                  className={`techy ${!culty && "bg-rose-200"}`}
                >
                  TECHY
                </div>
              </div>
            </div>
            <div className="competitions cultiCompetitions">
              {culty==1 &&
                cultiCompetitions.map((eachData) => (
                  <CompetitionsBox key={eachData} info={eachData} />
                ))}
            </div>
            <div className="competitions techyCompetitions">
              {culty==0 &&
                techyCompetitions.map((eachData) => (
                  <CompetitionsBox key={eachData} info={eachData} />
                ))
              }
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Competitions
