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
      title: "Breakfree",
      description: `Are you passionate about dancing? Let the rhythm of your dreams come to life
      in our electrifying Breakfree Competition! This is your moment to shine, regardless of your 
      dance style or background. Whether you're a solo performer, part of a dynamic duo, a 
      synchronized trio, or a group ready to set the stage ablaze, we welcome you to showcase 
      your dance talent and passion.`
    },
    {
      title: "Nrityanjali",
      description:  `Step into the enchanting world of tradition and grace with Nrityanjali. This 
      prestigious event is a celebration of the timeless art of classical dance, where performers 
      embody centuries of culture and refinement in their movements. Each performance is a
      captivating experience that pays homage to the rich legacy of classical dance, where every 
      step is a testament to the enduring allure of this art form.`
    },
    {
      title: "Octave",
      description: `Immerse yourself in the harmonious world of music as we present to you, Octaves. 
      This event is a celebration of the instrumental virtuosos, a stage where musicians of all 
      genres and backgrounds can showcase their talents. Whether you're a maestro of strings, a 
      percussion prodigy, or a wind instrument wizard, this competition welcomes you to share 
      your musical mastery.`
    },
    {
      title: "Campus Idol",
      description: `Step into the limelight and let your voice soar. This electrifying event is a stage 
      where vocal talents from all backgrounds and genres can shine. Get ready to make your mark 
      in the world of music and leave a lasting impression with your extraordinary singing talent.`
    },
    {
      title: "DJ Wars",
      description: `Prepare to experience an electrifying clash of beats and rhythms. This high-energy 
      event is a battleground for the most talented DJs, where music takes center stage, providing
      a thrilling musical experience that celebrates innovation, creativity, and the electrifying 
      power of electronic music.`
    },
    {
      title: "Rap Battle",
      description: `This electrifying event pits wordsmiths and lyricists against each other in an 
      intense and rhythmic clash of wits. With rapid-fire rhymes and clever wordplay, participants 
      engage in a verbal duel, showcasing their storytelling skills, creativity, and ability to capture 
      the essence of hip-hop culture.`
    },
    {
      title: "Stand Up",
      description: `Get ready to laugh your heart out! This uproarious event is a showcase of 
      humour, wit, and the art of making people burst into laughter. As comedians take the stage 
      to share their hilarious anecdotes, observations, and quirky perspectives on life, the 
      audience is treated to a night of side-splitting entertainment.`
    },
    {
      title: "Irshaad",
      description: `Irshaad is a tribute to the art of words, where wordsmiths and poets of all 
      backgrounds can unfurl their verses; an inspiring literary experience that celebrates 
      creativity, expression, and the magic of poetry, where the verses resonate with the hearts 
      and minds of both the audience and discerning judges. `
    },
    {
      title: "Natyakram",
      description: `Natyakram is an exhilarating showcase of theatrical talent, where drama and 
      creativity collide on the grand stage. As actors and playwrights come together to vie for the 
      audience's attention and critical acclaim, the atmosphere crackles with anticipation, making 
      this stage play competition an unforgettable celebration of the performing arts.`
    },
    {
      title: "Art Attack",
      description: `Embracing the belief that painting transcends the mere depiction of visual 
      reality, this theme-based painting competition beckons artists to explore the realms of 
      imagination and translate their innermost visions onto canvas. It encourages artists to reach 
      beyond the surface and make viewers see not just what is painted, but the intricate tapestry 
      of thoughts and emotions behind every stroke.`
    },
    {
      title: "Paint the Screen",
      description: `In a world driven by digitalization, Elan and Nvision invite you to unleash 
      your boundless imagination in a theme-based digital painting competition. By merging the 
      realms of art and technology, this competition promises to be a celebration of innovation 
      and artistic expression in the digital age, uniting participants in a vibrant digital art journey.`
    },
    {
      title: "Doodle Art",
      description: `Doodling, known for its therapeutic qualities and the ability to tap into your 
      subconscious creativity, is more than just a stress-reliever; it's an art form waiting to be 
      showcased. Prepare to exhibit your doodling talents in our exciting competition, where your 
      unique creations can shine.`
    },
    {
      title: "Picelectric",
      description: `Photography, often referred to as an austere and blazing poetry of the real, has 
      the power to evoke emotions, tell stories, and unveil the beauty hidden in the ordinary. With 
      your camera poised, we encourage you to embrace the art form's true essence by capturing 
      the perfect moment that reflects your unique perspective and creative talent.`
    },
    {
      title: "Filmfare Fiesta",
      description: `This short film making competition buzzes with creative energy as aspiring 
      filmmakers from diverse backgrounds come together to showcase their talents and 
      storytelling prowess. With every frame, the competition becomes a canvas where dreams, 
      emotions, and innovative visions are painted, captivating viewers and reaffirming the power 
      of storytelling in the world of cinema.`
    },
  ]
  const techyCompetitions = [
    {
      title: "MACHINA DOCTRINA",
      description: "If making machines learn is your forté, this is the perfect event for you. Test and hone your skills in ML and Data Analytics by participating in Machina doctrinas, one of the coolest events in the fest!"
    },
    {
      title: "PROQUEST",
      description: "Experience the Competitive Programming Competition , for all participants of all levels of expertise. This event ensures that even an absolute beginner is able to solve something."
    },
    {
      title: "Enigma",
      description: "Find the mysterious secret techniques to decrypt the given texts/messages. Clear all the levels in the allotted time to become the ultimate cryptacker. It's a pen and paper event. Each team has to decode a series of encrypted messages."
    },
    {
      title: "APP DEVELOPMENT",
      description: "This competition challenges participants to create innovative applications on mobile platforms - Android, iOS and Windows Phone. Grab the chance to Influence with creativity and innovation by designing a peculiar app."
    },
    {
      title: "WEB DEVELOPMENT",
      description: "An event that empowers the creative and technically proficient future Web professionals.Participants can Innovate and Inspire by designing a creative Website in this competition."
    },
    {
      title: "QUADCOPTER CHALLENGE",
      description: `Drones are the objects that the world is looking up to, literally!
      Design a drone and compete to see if it has got the moves to dance past all the obstacles.`
    },
    {
      title: "CIRCUIT BUILDING",
      description: `The aim of this competition is to judge the problem solving skills and understanding of the basic circuit designing concepts of the students. Each team has to build a circuit as per the requirement keeping in mind the efficiency factor.`
    },
    {
      title: "ROBO WARS",
      description: `The main challenge of the competition is to immobilize the other bot within a stipulated time under certain constraints. A minacious cunning mind that could design a bot under given constraints in a way that maximizes the opponent's damage and minimizes its own would emerge as the champion.`
    },
    {
      title: "CAD PRO",
      description: `Contrive a way to outsmart your opponents in designing a CAD model.An on-the-spot designing round to show off your expertise in designing.`
    },
    {
      title: "HACKATHON",
      description: ` A unique hackathon on emerging digital technologies to engage with tech enthusiasts. It offers an array of challenges across multiple levels.`
    },
    {
      title: "GAME JAM",
      description: `Developing a game is the new meta. Game Jam is an event that enables one to create a game from scratch and within the time barrier.`
    },
    {
      title: "PAPER PRESENTATION",
      description: `In this event, contestants prepare a presentation that showcases and effectively presents new ideas related to any field or even an entire business plan. The main idea of the event is to analyze a topic and think with a new bent.`
    },
    {
      title: "DEEPN",
      description: `If technology had a face now, it would be ‘AI’. An on-spot challenge that would test your understanding of Deep Learning.`
    },
    {
      title: "SHARK TANK",
      description: `Bring out your inner entrepreneur with our Shark Tank event. Pitch in your start-up ideas and convince the judges to invest their virtual money.`
    },
  ]
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-[55vh] md:h-screen md:m-0 pt-24 px-8 flex flex-col justify-start">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              style={{ marginLeft: "10px" }} // Adjust the margin value as needed
            />
          </Link>
          <div id="competitions">
            <div className="flex items-center justify-center">
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
