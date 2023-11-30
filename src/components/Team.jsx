import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ProfileCard from './ProfileCard'
import ProfileCoord from './ProfileCoord'
import himanshu from '../assets/profile/himanshu.jpeg'
import armaan from '../assets/profile/armaan.jpeg'
import nihar from '../assets/profile/nihar.jpeg'
import sadhika from '../assets/profile/sadhika.jpeg'
import dhruv from '../assets/profile/dhruv.jpg'
import dhruva from '../assets/profile/dhruva.png'
import lakshya from '../assets/profile/lakshya.jpg'
import vildaan from '../assets/profile/vildaan.jpg'
import tanmay from '../assets/profile/tanmay.jpg'
import meet from '../assets/profile/meet.jpeg'
import anek from '../assets/profile/anek.jpg'
import shivanand from '../assets/profile/shivanand.jpeg'
import naman from '../assets/profile/naman.jpeg'
import adityavs from '../assets/profile/adityavs.jpg'
import uday from '../assets/profile/uday.jpg'
import kartikeya from '../assets/profile/kartikeya.jpg'
import ananya from '../assets/profile/ananya.jpg'
import chetana from '../assets/profile/chetana.jpg'
import aryansr from '../assets/profile/aryansr.jpg'
import vighnesh from '../assets/profile/vighnesh.jpeg'
import aryanb from '../assets/profile/aryanb.jpeg'
import mehul from '../assets/profile/mehul.jpg'
import rishitha from '../assets/profile/rishitha.jpg'
import adityav from '../assets/profile/adityav.jpeg'
import aashrita from '../assets/profile/aashrita.jpg'
import saketh from '../assets/profile/saketh.jpeg'
import aryanj from '../assets/profile/aryanj.jpg'
import varshini from '../assets/profile/varshini.jpg'
import antalene from '../assets/profile/antalene.jpg'
import syed from '../assets/profile/syed.jpg'
import sumukha from '../assets/profile/sumukha.jpg'
import bhavesh from '../assets/profile/bhavesh.jpeg'
import paav from '../assets/profile/paav.jpg'
import deekshitha from '../assets/profile/deekshitha.jpg'
import vishnup from '../assets/profile/vishnup.jpg'
import shreyab from '../assets/profile/shreyab.jpg'
import umair from '../assets/profile/umair.jpeg'
import puran from '../assets/profile/puran.jpg'
import shreevel from '../assets/profile/shreevel.jpg'
import shreeyak from '../assets/profile/shreeyak.jpg'
import snehil from '../assets/profile/snehil.jpg'
import asritha from '../assets/profile/asritha.jpg'
import sahil from '../assets/profile/sahil.jpg'
import radhika from '../assets/profile/radhika.jpg'
import ankita from '../assets/profile/ankita.jpg'
import anirudh from '../assets/profile/anirudh.jpg'
import agam from '../assets/profile/agam.jpg'
import arjun from '../assets/profile/arjun.jpg'
import ram from '../assets/profile/ram.jpg'
import anand from '../assets/profile/anand.jpg'
import abhay from '../assets/profile/abhay.jpg'
import edward from '../assets/profile/edward.jpg'
import shruti from '../assets/profile/shruti.jpeg'
import hari from '../assets/profile/hari.jpeg'
import edara from '../assets/profile/edara.jpeg'
import adityas from '../assets/profile/adityas.jpg'
import suddhodhan from '../assets/profile/suddhodhan.jpg'
import anurag from '../assets/profile/anurag.jpg'
import vishnus from '../assets/profile/vishnus.jpeg'
import yash from '../assets/profile/yash.jpeg'
import monish from '../assets/profile/monish.jpg'
import shees from '../assets/profile/shees.jpg'
import madhurima from '../assets/profile/madhurima.jpg'
import saikumar from '../assets/profile/saikumar.jpg'
import sreevas from '../assets/profile/sreevas.jpeg'
import kamya from '../assets/profile/kamya.jpeg'
import vaishnavi from '../assets/profile/vaishnavi.jpeg'


const Team = () => {
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar />
        <section className="w-screen h-auto pt-24 md:h-auto md:m-0">
          <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={"#874356"}
              style={{ marginLeft: '10px' }} // Adjust the margin value as needed
            />
          </Link>
          <div className="text-3xl p-4 mb-6 text-[#850E35] font-bold flex flex-col items-center justify-evenly">
            <span className="inline-block mb-8 text-4xl">
              PR, WEB & INFORMALS
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"SUMEDH"} position={"HEAD"} profilePhoto={""}/>
            <ProfileCoord name={"HIMANSHU"} domain={"WEB"} profilePhoto={himanshu}/>
            <ProfileCoord name={"ARMAAN"} domain={"WEB"} profilePhoto={armaan}/>
            <ProfileCoord name={"NIHAR"} domain={"WEB"} profilePhoto={nihar}/>
            <ProfileCoord name={"SADHIKA"} domain={"PR"} profilePhoto={sadhika}/>
            <ProfileCoord name={"DHRUV S."} domain={"PR"} profilePhoto={dhruv}/>
            <ProfileCoord name={"LAKSHYA"} domain={"PR"} profilePhoto={lakshya}/>
            <ProfileCoord name={"VILDAAN"} domain={"INFORMALS"} profilePhoto={vildaan}/>
            <ProfileCoord name={"MADHURIMA"} domain={"INFORMALS"} profilePhoto={madhurima}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              TECHY & WORKSHOPS
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"ADITYA S."} position={"HEAD"} profilePhoto={adityas}/>
            <ProfileCoord name={"VAISHNAVI"} domain={"TECHY"} profilePhoto={vaishnavi}/>
            <ProfileCoord name={"YASWANTH"} domain={"TECHY"} profilePhoto={edara}/>
            <ProfileCoord name={"ANIRUDH"} domain={"TECHY"} profilePhoto={anirudh}/>
            <ProfileCoord name={"MEET"} domain={"WORKSHOPS"} profilePhoto={meet}/>
            <ProfileCoord name={"SHRUTI"} domain={"WORKSHOPS"} profilePhoto={shruti}/>
            <ProfileCoord name={"K.J. ABHAY"} domain={"WORKSHOPS"} profilePhoto={abhay}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              PRODUCTION, PRONITES & SECURITY
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"GAURANG"} position={"HEAD"} profilePhoto={""}/>
            <ProfileCoord name={"TANMAY"} domain={"PRODUCTION"} profilePhoto={tanmay}/>
            <ProfileCoord name={"SHEES"} domain={"PRODUCTION"} profilePhoto={shees}/>
            <ProfileCoord name={"AGAM"} domain={"SECURITY"} profilePhoto={agam}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              SPONSORSHIP
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"YASH"} position={"HEAD"} profilePhoto={yash}/>
            <ProfileCoord name={"ADITYA V.S."} domain={"SPONSORSHIP"} profilePhoto={adityavs}/>
            <ProfileCoord name={"SHIVANAND"} domain={"SPONSORSHIP"} profilePhoto={shivanand}/>
            <ProfileCoord name={"NAMANPREET"} domain={"SPONSORSHIP"} profilePhoto={naman}/>
            <ProfileCoord name={"ANEK"} domain={"SPONSORSHIP"} profilePhoto={anek}/>
            <ProfileCoord name={"SREEVAS"} domain={"SPONSORSHIP"} profilePhoto={sreevas}/>
            <ProfileCoord name={"VISHNU S."} domain={"SPONSORSHIP"} profilePhoto={vishnus}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              PUBLICITY
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"VIGHNESH"} position={"HEAD"} profilePhoto={vighnesh}/>
            <ProfileCard name={"ARYAN S."} position={"HEAD"} profilePhoto={aryansr}/>
            <ProfileCoord name={"UDAY"} domain={"PUBLICITY"} profilePhoto={uday}/>
            <ProfileCoord name={"KARTIKEYA"} domain={"PUBLICITY"} profilePhoto={kartikeya}/>
            <ProfileCoord name={"ANANYA S."} domain={"PUBLICITY"} profilePhoto={ananya}/>
            <ProfileCoord name={"N. CHETANA"} domain={"PUBLICITY"} profilePhoto={chetana}/>
            <ProfileCoord name={"SUDDHODHAN"} domain={"PUBLICITY"} profilePhoto={suddhodhan}/>
            <ProfileCoord name={"SAIKUMAR"} domain={"PUBLICITY"} profilePhoto={saikumar}/>
            <ProfileCoord name={"RAM"} domain={"PUBLICITY"} profilePhoto={ram}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              FINANCE
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"HARTHIK"} position={"HEAD"} profilePhoto={""}/>
            <ProfileCoord name={"ARYAN B."} domain={"FINANCE"} profilePhoto={aryanb}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              HOSPITALITY, INFRA & TRANSPORT
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"MEHUL S."} position={"HEAD"} profilePhoto={mehul}/>
            <ProfileCard name={"RISHITHA"} position={"HEAD"} profilePhoto={rishitha}/>
            <ProfileCoord name={"ARYAN J."} domain={"HOSPITALITY"} profilePhoto={aryanj}/>
            <ProfileCoord name={"AASHRITA"} domain={"HOSPITALITY"} profilePhoto={aashrita}/>
            <ProfileCoord name={"ADITYA V."} domain={"HOSPITALITY"} profilePhoto={adityav}/>
            <ProfileCoord name={"K.S. VARSHINI"} domain={"HOSPITALITY"} profilePhoto={varshini}/>
            <ProfileCoord name={"ANTALENE J."} domain={"HOSPITALITY"} profilePhoto={antalene}/>
            <ProfileCoord name={"SYED M."} domain={"INFRA"} profilePhoto={syed}/>
            <ProfileCoord name={"SAKETH"} domain={"INFRA"} profilePhoto={saketh}/>
            <ProfileCoord name={"SUMUKHA"} domain={"INFRA"} profilePhoto={sumukha}/>
            <ProfileCoord name={"ANAND"} domain={"INFRA"} profilePhoto={anand}/>
            <ProfileCoord name={"BHAVESH"} domain={"TRANSPORT"} profilePhoto={bhavesh}/>
            <ProfileCoord name={"C.V.P. REDDY"} domain={"TRANSPORT"} profilePhoto={paav}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              CULTI & BIGGIES, EML, LITR, SOCIAL CAUSE
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"ANUSHKA"} position={"HEAD"} profilePhoto={""}/>
            <ProfileCoord name={"DEEKSHITHA"} domain={"CULTI & BIGGIES"} profilePhoto={deekshitha}/>
            <ProfileCoord name={"VISHNU P."} domain={"CULTI & BIGGIES"} profilePhoto={vishnup}/>
            <ProfileCoord name={"SHREYA B."} domain={"CULTI & BIGGIES"} profilePhoto={shreyab}/>
            <ProfileCoord name={"DHRUV A."} domain={"CULTI & BIGGIES"} profilePhoto={dhruva}/>
            <ProfileCoord name={"MONISH"} domain={"EML"} profilePhoto={monish}/>
            <ProfileCoord name={"UMAIR"} domain={"Litr"} profilePhoto={umair}/>
            <ProfileCoord name={"PURAN"} domain={"Litr"} profilePhoto={puran}/>
            <ProfileCoord name={"EDWARD"} domain={"Litr"} profilePhoto={edward}/>
            <ProfileCoord name={"ASRITHA"} domain={"SOCIAL CAUSE"} profilePhoto={asritha}/>
            </div>

            <span className="inline-block mb-8 text-4xl">
              CREATIVES & MULTIMEDIA
            </span>
            <div className="flex flex-row flex-wrap justify-evenly">
            <ProfileCard name={"AAYUSH"} position={"HEAD"} profilePhoto={""}/>
            <ProfileCard name={"HARSH"} position={"HEAD"} profilePhoto={""}/>
            <ProfileCoord name={"SHREEVEL"} domain={"CREATIVES"} profilePhoto={shreevel}/>
            <ProfileCoord name={"SHREEYA K."} domain={"CREATIVES"} profilePhoto={shreeyak}/>
            <ProfileCoord name={"ANKITA"} domain={"CREATIVES"} profilePhoto={ankita}/>
            <ProfileCoord name={"RADHIKA"} domain={"CREATIVES"} profilePhoto={radhika}/>
            <ProfileCoord name={"HARI"} domain={"CREATIVES"} profilePhoto={hari}/>
            <ProfileCoord name={"KAMYA R."} domain={"CREATIVES"} profilePhoto={kamya}/>
            <ProfileCoord name={"SAHIL"} domain={"MULTIMEDIA"} profilePhoto={sahil}/>
            <ProfileCoord name={"SNEHIL"} domain={"MULTIMEDIA"} profilePhoto={snehil}/>
            <ProfileCoord name={"ANURAG"} domain={"MULTIMEDIA"} profilePhoto={anurag}/>
            <ProfileCoord name={"ARJUN"} domain={"MULTIMEDIA"} profilePhoto={arjun}/>
            </div>


          </div>
          
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Team
