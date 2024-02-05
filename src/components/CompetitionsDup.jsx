import Navbar from "./Navbar";
import "./CompetitionsDup.scss";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import LitfestCard from "./LitfestCard";

//Culty Images
import rhymes from '../assets/litfest/rhymes.png'
import whatif from '../assets/litfest/whatif.png'
import shakespear from '../assets/litfest/shakespear.png'
import memo from '../assets/litfest/memo.png'
import book from '../assets/litfest/book.png'
import btf from '../assets/litfest/btf.png'
import campa from '../assets/litfest/campa.png'
import ded from '../assets/litfest/ded.png'
import dia from '../assets/litfest/dia.png'
import begen from '../assets/litfest/begen.png'

const CompetitionsDup = () => {
  const [culty, setCulty] = useState(1);
  const cultiCompetitions = [
    {
      title: "Dead men do tell Tales",
      description:
        "A famous dead personality vs 5 questions. Who do you think would win?Write to find out. In this challenge, you can choose a famous dead personality and frame five questions you would ask them, if you had the chance. ",
      img: ded,
      registration:
        "https://forms.gle/i9JS6ciyJBcjt88f6",
      submission: true,
      over: true,
    },
    {
      title: "A few lines of Rhymes",
      description:
        "'Good,better,best. Never let it rest. Till your good is better and your better is best.' <br />-Lindsey Fairhurst <br />Put your poetry skills to display by writing a poem based on the given prompt.This time around, you will be given a theme and you’re  expected to construct the rhyme around that theme.",
      img: rhymes,
      registration:
        "https://forms.gle/9ChkVdS3ZFabAXSV7",
      submission: true,
      over: true,
    },
    {
      title: "Bookish Breakdown",
      description:
        "You are to imagine that you’re the author of your favorite book , and now try to tell the audience about your book in a way they buy it.",
      img: book,
      registration:
        "https://forms.gle/CVH55JCmS5igw8LF6",
      submission: true,
      over: true,
    },
    {
      title: "What If…?",
      description:
        "A fanfiction writing contest where you will have to create a crossover of two different fictional universes. “What if… Sherlock Holmes went to Game of Thrones?”  You’ll have to come up with one such theory. And in the story, you have to ponder and speculate how things in that universe would have turned out if the character they had chosen were present in it.",
      img: whatif,
      registration:
        "https://forms.gle/V43WsvysCNKSAcuDA",
      submission: true,
      over: true,
    },
    {
      title: "The Beginning of the End",
      description:
        "It’s the last day on Earth and you’re still alive. Write about what you feel,do and feel free to add in whatever you want.  ",
      img: begen,
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSe1S84fsj5emq4bMX41JrqaFZk4nV57r05PJi2nIUuDULgNkw/viewform?usp=sf_link",
      submission: false,
      over: false,
    },
    {
      title: "Who wants to be a (budget) Shakespeare",
      description: "“A monologue speaks at people, not with people.”",
      img: shakespear,
      registration:
        "https://forms.gle/qFAcTvyAomNbmqUB7",
      submission: true,
      over: false,
    },
    {
      title: "Back to the future",
      description:
        "'The greatest art in the world is the art of storytelling.'<br />- Cecil B. DeMile <br />Unleash the hidden storyteller in you by writing a short yet enthralling story based on one of the timeline you get sent to. Don’t worry we got you , we will give a specific timeline which will be filled with events",
      img: btf,
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSd8TtiMtZrXIgj5LuL-OWJD-HIZh16fU2sSSEmsXn3HaZXgug/viewform?usp=sf_link",
      submission: false,
      over: false,
    },
    {
      title: "Dialogue Rewind",
      description:
        "'I Know What I Have to Do But I Don't Know If I Have the Strength To Do It' <br />- Kylo Ren, Star Wars Ep VII <br />Are you a cinephile who wishes to express their love for their favorite dialogue of all time? Then this event is the place to do it! Choose your favorite dialogue (which is no easy task to begin with, there’s so many to pick from) and write away!",
      img: dia,
      registration:
        "https://forms.gle/JB3tshZfGxzN3Jhn6",
      submission: true,
      over: false,
    },
    {
      title: "A Walk down Memory Lane",
      description:
        "'In three words I can sum up everything I've learned about life: it goes on.'<br />- Robert Frost<br />We all have those days. ‘Core memories’, significant events in our lives. <br />We’d like you to write about one such noteworthy incident in your life and how it shaped your personality and perspective on things.",
      img: memo,
      registration:
        "https://forms.gle/WrofKutEuTfjAZyw5",
      submission: true,
      over: true,
    },
    {
      title: "Campus Anonymous (Intra IITH)",
      description:
        "As a part of the Online Litfest, an online event- Campus Anonymous will be conducted exclusively for IITH Students.",
      img: campa,
      registration:
        "https://forms.gle/av1TMXxDbvnEYBJU8",
      submission: true,
      over: true,
    },
  ];

  return (
    <>
      <div className="w-screen min-h-screen h-auto bg-[#FFF5E4]">
        <Navbar />
        <section className="flex flex-col items-center justify-start w-screen h-auto px-8 pt-24 md:m-0">
          {/* <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              className="w-6 h-6 md:w-14 md:h-12 ml-2 sm:ml-1 md:ml-8 lg:ml-4"
            />
          </Link> */}
          <a href="https://docs.google.com/document/d/1K3MuGOdPOkkvGMg0gL8JysO4sZkv9tb6tJJHifLS7hQ/edit?usp=sharing" target="_blank">
            <Button style={{ backgroundColor: "#874356", width: "fit-content", borderRadius: "4px", fontSize: "1.6rem" }} ripple="light" className="rounded-full text-lg md:text-base px-4 md:px-3 py-2 md:py-1">RULE BOOK & THEMES</Button>
          </a>

          <div id="competitions">
            <div className="competitions cultiCompetitions">
              {culty == 1 &&
                cultiCompetitions.map((eachData) => (
                  <div
                    key={eachData}
                    className="h-full"
                  >
                    <LitfestCard
                      info={eachData}
                      title={eachData.title}
                      description={eachData.description}
                      img={eachData.img}
                      registration={eachData.registration}
                      submission={eachData.submission}
                      over={eachData.over}
                    />
                    {console.log(eachData.over)}
                  </div>
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
