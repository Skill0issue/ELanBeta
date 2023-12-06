import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const SocialCause = () => {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#FFF5E4]">
        <Navbar />
        <section className="w-full pt-24 md:m-0">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color="#874356"
              style={{ marginLeft: "10px" }}
            />
          </Link>
          <h1 className='font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-8 mb-6 md:ml-4 overflow-hidden'>
            IKSHANA-LOVE ANIMALS
          </h1>
          <img src="/src/assets/socialCause/feedDog.jpg" alt="IKSHANA IMG" className='w-[40vw] h-auto aspect-video object-cover rounded-xl mx-auto' />
          <div className="p-4 mx-4 mt-8 mb-8 overflow-hidden text-lg leading-snug md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-MoulPali md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            Perusing articles on environmental issues, it becomes evident that animals often suffer due to human activities, despite their rightful place on Earth. This shared planet gives every species an inherent right to its resources. Acknowledging this, “Elan & ηVision” introduces the initiative "IKSHANA - LOVE ANIMALS" this year.

            Our aim is to raise awareness about the challenges animals face and emphasize their importance in the ecosystem. These creatures, many of whom are vulnerable due to various factors, warrant our attention and care. Through our initiative, we hope to create a platform where discussions about animal welfare take precedence. From conservation efforts to promoting kindness towards animals, we aspire to make a positive change. Let's work together to ensure a harmonious coexistence with all Earth's inhabitants.
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default SocialCause;
