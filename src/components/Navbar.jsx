import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {FaBarsStaggered} from 'react-icons/fa6';
const Navbar = () => {
    const [displayLinks,setDisplayLinks] = useState(false);
    const handleNavbar = ()=>{
     setDisplayLinks(!displayLinks);   
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width > 768) {
                setDisplayLinks(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    
  return (
    <>
      <div className="flex justify-between">
        <img src="/assets/elan.png" alt="elan.png" className="w-16 h-16 sm:ml-8" />
        <div className={`links justify-evenly w-screen sm:w-[90%] sm:text-xl text-md md:pr-8 font-bold ${displayLinks ? 'flex flex-col mt-16 ' : 'hidden'} md:flex`}>
          <Link to="/Events" className="bg-[#F68989] p-2 my-2">
            Events
          </Link>
          <Link to="/Competitions" className="bg-[#F68989] p-2 my-2">
            Compettitons
          </Link>
          <Link to="/Workshops" className="bg-[#F68989] p-2 my-2">
            Workshops
          </Link>
          <Link to="/Social Cause" className="bg-[#F68989] p-2 my-2">
            Social Cause
          </Link>
          <Link to="/Team" className="bg-[#F68989] p-2 my-2">
            Team
          </Link>
        </div>
      <div className="flex h-16 p-6 cursor-pointer md:hidden " onClick={handleNavbar}>
        <FaBarsStaggered size={32} />
      </div>
      </div>
    </>
  );
};

export default Navbar;
