import React from 'react';

const AfterMovie = ({ className, ...props }) => {
  return (
    <div className={"w-[826px] h-[450px] relative " + className}>
      <div className="bg-[#850e35] absolute right-[3.87%] left-[0%] w-[96.13%] bottom-[0%] top-[8.22%] h-[91.78%]"></div>
      <div className="bg-[#f68989] absolute right-[0%] left-[3.87%] w-[96.13%] bottom-[8.22%] top-[0%] h-[91.78%]"></div>
      <iframe
        className="absolute right-[5.93%] left-[9.93%] w-[84.14%] bottom-[16.67%] top-[8.67%] h-[74.67%]"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7RWJMat8JM4?si=lbrFwodVsj4Tx40j"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default AfterMovie;
