import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import logo from "/assets/elan.png"
import navLogo from "../assets/nav-logo.svg"

const Navbar = ({ home, ...props }) => {
  const [displayLinks, setDisplayLinks] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 950)
  const location = useLocation()
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
  }, [window.screen.width]);
  useEffect(() => {
    const handleLogo = () => {
      if (window.scrollY < window.innerHeight / 3) {
        setLogoVisible(false);
      } else {
        setLogoVisible(true);
      }
    };
    window.addEventListener('scroll', handleLogo);
    return () => {
      window.removeEventListener('scroll', handleLogo);
    }
  }, [window.scrollY]);

  //For the Desktop Navbar Logo
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1030)
      // console.log(isSmallScreen)
    };
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, []);


  return (
    <>
      <div className={`w-screen md:bg-[#FFF5E4] ${displayLinks ? 'bg-[#EE6983] h-screen' : 'bg-[#FFF5E3]'} flex flex-col md:h-16 items-center z-50 justify-between fixed top-0`}>
        <div className="flex flex-row-reverse items-center justify-between w-screen p-4 cursor-pointer md:hidden">
          <div id="nav-icon4" className={isOpen ? '' : 'open'} onClick={handleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/">
            <img className={`w-10 h-10 aspect-square ${logoVisible || !home ? 'inherit' : 'hidden'}`} src={logo} />
          </Link>
        </div>

        {/* Desktop Navbar animated logo */}
        <div className={`${isSmallScreen? 'hidden': 'web-logo-container'}`}>
          <Link to="/">
            <img className="w-15 h-30" src={navLogo} alt="Web Logo" style={{ zIndex: 2 }} />
          </Link>
        </div>

        <div className={`${displayLinks ? 'flex flex-col color-white w-screen' : 'hidden'} md:flex md:w-screen links justify-evenly md:flex-row md:h-16 h-[80%] items-center`}>
          {/* <Link to="/">Home</Link> */}
          <Link to="/Events" className={`nav-link ${location.pathname === "/Events" ? "text-white" : "hover:text-white hover:transform hover:translate-x-4 hover:translate-y-[-4px] transition-transform duration-300 ease-in-out"} `}>
            <span>
              Events
            </span>
          </Link>
          <Link to="/Competitions" className={`nav-link ${location.pathname === "/Competitions" ? "text-white" : "hover:text-white hover:transform hover:translate-x-4 hover:translate-y-[-4px] transition-transform duration-300 ease-in-out"} `}>
            Competitions
          </Link>
          <Link to="/Litfest" className={`nav-link ${location.pathname === "/Litfest" ? "text-white" : "hover:text-white hover:transform hover:translate-x-4 hover:translate-y-[-4px] transition-transform duration-300 ease-in-out"} `}>
            Litfest
          </Link>
          <Link to='/SocialCause' className={`nav-link ${location.pathname === "/SocialCause" ? "text-white" : "hover:text-white hover:transform hover:translate-x-4 hover:translate-y-[-4px] transition-transform duration-300 ease-in-out"} `}>
            SocialCause
          </Link>
          <Link to="/Workshops" className={`nav-link ${location.pathname === "/Workshops" ? "text-white" : "hover:text-white hover:transform hover:translate-x-4 hover:translate-y-[-4px] transition-transform duration-300 ease-in-out"} `}>
            Workshops
          </Link>
          <Link to="/Team" className={`nav-link ${location.pathname === "/Team" ? "text-white" : "hover:text-white hover:transform hover:translate-x-4 hover:translate-y-[-4px] transition-transform duration-300 ease-in-out"} `}>
            Team
          </Link>
        </div>
        <div className={`${displayLinks ? 'flex' : 'hidden'} flex-row w-screen gap-2 p-4 md:hidden mb-4`}>
          <a href="https://www.instagram.com/elan_nvision.iith" target="_blank">
            <AiOutlineInstagram size={64} color="white" />
          </a>
          <a href="https://youtube.com/@ElanIITHyderabad" target="_blank">
            <AiOutlineYoutube size={64} color='white' />
          </a>
          <a href="https://in.linkedin.com/company/elan-nvision-iith" target="_blank">
            <AiFillLinkedin size={64} color='white' />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
