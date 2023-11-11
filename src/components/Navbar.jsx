import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Navbar = () => {
  const [displayLinks, setDisplayLinks] = useState(false);
  const [isOpen, setIsOpen] =useState(true);
  const handleNavbar = () => {
    setDisplayLinks(!displayLinks);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
        if (window.screen.width > 950) {
          setDisplayLinks(false);
          setIsOpen(true);
        } else {
          setIsOpen(true); 
          setDisplayLinks(false);
        }
      };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`w-screen md:bg-[#FFF5E4] ${displayLinks?'bg-[#EE6983] h-screen':'bg-[transparent]'} flex flex-col md:h-16 items-center  justify-between fixed top-0`}>
        <div className="flex flex-row-reverse items-center justify-between w-screen p-4 cursor-pointer md:hidden">
          <div id="nav-icon4" className={isOpen ? '':'open'} onClick={handleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/">
          <img className="w-20 h-20 aspect-square" src={'/assets/elan.png'}/>
          </Link>
        </div>
        <div className={`${displayLinks?'flex flex-col color-white w-screen':'hidden'} md:flex md:w-screen links justify-evenly md:flex-row md:h-16 h-[80%] items-center`}>
          {/* <Link to="/">Home</Link> */}
          <Link to="/Events">Events</Link>
          <Link to="/Competitions">Competitions</Link>
          <Link to='/SocialCause'>SocialCause</Link>
          <Link to="Workshops">Workshops</Link>
          <Link to="/Team">Team</Link>
        </div>
        <div className={`${displayLinks?'flex':'hidden'} flex-row w-screen gap-2 p-4 md:hidden mb-4`}>
          <AiOutlineInstagram size={64} color="white"/>
          <AiOutlineYoutube size={64} color='white' />
          <AiFillLinkedin size={64} color='white' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
