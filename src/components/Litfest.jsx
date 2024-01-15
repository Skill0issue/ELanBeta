import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Litfest = () => {
    return (
        <>
            <div className="w-full min-h-screen h-auto bg-[#FFF5E4]">
                <Navbar />
                <section className="flex flex-col justify-start w-screen h-auto px-8 pt-24 md:m-0">
                    <Link to="/">
                        <AiOutlineArrowLeft
                            size={60}
                            color={'#874356'}
                            className="w-6 h-6 md:w-14 md:h-12 ml-2 sm:ml-1 md:ml-8 lg:ml-4"
                        />
                    </Link>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default Litfest;
