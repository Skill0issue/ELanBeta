import React from "react";

const ProfileCoord = ({ name, domain, profilePhoto, className, ...props }) => {
  return (
    <div
      className={`bg-[rgba(255,255,255,0.00)] w-[13.5rem] h-[22.18rem] relative overflow-hidden ${className}`}
      style={{ marginLeft: '2rem', marginRight: '2rem', marginBottom: '2rem'}}
    >
      <div className="bg-[#850e35] rounded-[15.2rem] absolute right-[5.88%] left-[0%] w-[94.12%] bottom-[-0.05%] top-[1.8%] h-[98.25%]"></div>
      <div className="bg-[#ee6983] rounded-[15.2rem] absolute right-[0%] left-[5.88%] w-[94.12%] bottom-[1.75%] top-[0%] h-[98.25%]"></div>
      <div
        className="text-[#ffffff] text-center absolute right-[1.73%] left-[6.57%] w-[91.7%] bottom-[31.94%] top-[59.68%] h-[8.38%] flex items-center justify-center"
        style={{ font: "700 24px 'RoundedMplus1CBold-Bold', sans-serif" }}
      >
        {name}
      </div>
      <div
        className="text-[#ffffff] text-center absolute right-[14.65%] left-[20.53%] w-[64.82%] bottom-[23.71%] top-[69%] h-[9%] flex items-center justify-center overflow-hidden"
        style={{
          font: "600 italic 1rem 'OpenSans-SemiBoldItalic', sans-serif",
        }}
      >
        {domain}
        <br/>
        COORDINATOR
      </div>

      <img
        className={`rounded-[279.5px] absolute right-[8.3%] left-[13.84%] w-[77.85%] bg-auto bottom-[43.47%] top-[5.86%] h-[50.68%] object-cover object-center ${name === 'AGAM' || name === 'AASHRITA'? 'object-top':'object-center'}`}
        src={profilePhoto}
        alt={`Profile of ${name}`}
      />
    </div>
  );
};

export default ProfileCoord;
