import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
const Home = () => {
  const handleScrollDown = ()=>{
    //scroll the page by 100vh
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-screen ">
          <div className="bg-[inherit] w-screen h-[90vh] flex flex-col items-center justify-center">
            <div className={`bg-[url('/assets/elan.png')] logo-image`}></div>
            <div className="heading-border">
              <span className="heading-1">Elan & ηVision</span>
            </div>
            <Link to="/Workshops" className="border-register">
              <span className="link-register">REGISTER FOR WORKSHOPS</span>
            </Link>
          </div>
          <div id="scroll-down" className="flex justify-center">
            <div className="flex cursor-pointer "  onClick={handleScrollDown}>
            <AiOutlineArrowDown size={64} />
            </div>
          </div>
        </section>
        <section className="w-screen h-screen">
          
        </section>
        <section></section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
