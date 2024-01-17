import Navbar from "./Navbar";
import "./CompetitionsDup.scss";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import LitfestCard from "./LitfestCard";

//Culty Images
// import CompetitionsBox from "./subcomponents/competitionsBox/CompetitionsBox";
// import gng from '/src/assets/competitions/glitz_and_glamour.png'
// import dance from "/src/assets/competitions/dance.jpeg"
// import nritya from "/src/assets/competitions/nrityanjali.jpeg"
// import octave from "/src/assets/competitions/octave.jpeg"
// import idol from "/src/assets/competitions/idol.jpeg"
// import dj from "/src/assets/competitions/dj.jpeg"
// import rap from "/src/assets/competitions/rap_battle.jpg"
// import standup from "/src/assets/competitions/standup_comedy.avif"
// import irshaad from "/src/assets/competitions/irshaad.png"
// import natyakram from "/src/assets/competitions/natyakram.png"
// import art from "/src/assets/competitions/art_attack.png"
// import paint from "/src/assets/competitions/paint_the_screen.jpg"
// import doodle from "/src/assets/competitions/doodling.jpg"
// import pic from "/src/assets/competitions/picelectric.webp"
// import filmfare from "/src/assets/competitions/filmfare_fiest.jpg"


const CompetitionsDup = () => {
  const [culty, setCulty] = useState(1);
  const cultiCompetitions = [
    {
      title: "A few lines of Rhymes",
      description:
        "'Good,better,best. Never let it rest. Till your good is better and your better is best.' <br />-Lindsey Fairhurst <br />Put your poetry skills to display by writing a poem based on the given prompt.This time around, you will be given a theme and you’re  expected to construct the rhyme around that theme.",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "Dead men do tell Tales",
      description:
        "A famous dead personality vs 5 questions. Who do you think would win?Write to find out. In this challenge, you can choose a famous dead personality and frame five questions you would ask them, if you had the chance. ",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "Bookish Breakdown",
      description:
        "You are to imagine that you’re the author of your favorite book , and now try to tell the audience about your book in a way they buy it.",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "What If…?",
      description:
        "A fanfiction writing contest where you will have to create a crossover of two different fictional universes. “What if… Sherlock Holmes went to Game of Thrones?”  You’ll have to come up with one such theory. And in the story, you have to ponder and speculate how things in that universe would have turned out if the character they had chosen were present in it.",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "The Beginning of the End",
      description:
        "It’s the last day on Earth and you’re still alive. Write about what you feel,do and feel free to add in whatever you want.  ",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "Who wants to be a (budget) Shakespeare",
      description: "“A monologue speaks at people, not with people.”",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "Back to the future",
      description:
        "'The greatest art in the world is the art of storytelling.'<br />- Cecil B. DeMile <br />Unleash the hidden storyteller in you by writing a short yet enthralling story based on one of the timeline you get sent to. Don’t worry we got you , we will give a specific timeline which will be filled with events",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "Dialogue Rewind",
      description:
        "'I Know What I Have to Do But I Don't Know If I Have the Strength To Do It' <br />- Kylo Ren, Star Wars Ep VII <br />Are you a cinephile who wishes to express their love for their favorite dialogue of all time? Then this event is the place to do it! Choose your favorite dialogue (which is no easy task to begin with, there’s so many to pick from) and write away!",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "A Walk down Memory Lane",
      description:
        "'In three words I can sum up everything I've learned about life: it goes on.'<br />- Robert Frost<br />We all have those days. ‘Core memories’, significant events in our lives. <br />We’d like you to write about one such noteworthy incident in your life and how it shaped your personality and perspective on things.",
      img: "",
      registration: "https://www.google.com/",
    },
    {
      title: "Campus Anonymous (Intra IITH)",
      description:
        "As a part of the Online Litfest, an online event- Campus Anonymous will be conducted exclusively for IITH Students.",
      img: "",
      registration: "https://www.google.com/",
    },
  ];

  return (
    <>
      <div className="w-screen min-h-screen h-auto bg-[#FFF5E4]">
        <Navbar />
        <section className="flex flex-col justify-start w-screen h-auto px-8 pt-24 md:m-0">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              className="w-6 h-6 md:w-14 md:h-12 ml-2 sm:ml-1 md:ml-8 lg:ml-4"
            />
          </Link>
          <div id="competitions">
            <div className="competitions cultiCompetitions">
              {culty == 1 &&
                cultiCompetitions.map((eachData) => (
                  <LitfestCard
                    key={eachData}
                    info={eachData}
                    title={eachData.title}
                    description={eachData.description}
                    img={eachData.img}
                    registration={eachData.registration}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CompetitionsDup;
