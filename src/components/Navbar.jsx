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
  const [logoVisible,setLogoVisible] = useState(false);
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
  useEffect(()=>{
    const handleLogo = () =>{
      if(window.scrollY<window.innerHeight/3){
        setLogoVisible(false);
      }else{
        setLogoVisible(true);
      }
    };
    window.addEventListener('scroll',handleLogo);
    return()=>{
      window.removeEventListener('scroll',handleLogo);
    }
  },[]);

  return (
    <>
      <div className={`w-screen md:bg-[#FFF5E4] ${displayLinks?'bg-[#EE6983] h-screen':'bg-[#FFF5E3]'} flex flex-col md:h-16 items-center z-50 justify-between fixed top-0`}>
        <div className="flex flex-row-reverse items-center justify-between w-screen p-4 cursor-pointer md:hidden">
          <div id="nav-icon4" className={isOpen ? '':'open'} onClick={handleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/">
          <img className={`w-10 h-10 aspect-square ${logoVisible?'':'hidden'}`} src={'/assets/elan.png'}/>
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
