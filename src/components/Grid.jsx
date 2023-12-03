import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

// Import your image assets
import image1 from "../assets/archive/IMG_9462.jpg";
import image2 from "../assets/archive/IMG_9325.jpg";
import image3 from "../assets/archive/IMG_08381.jpg";
import image4 from "../assets/archive/IMG_7492.jpg";
import image5 from "../assets/archive/IMG_0523.jpg";
import image6 from "../assets/archive/IMG_4321.jpg";
import image7 from "../assets/archive/IMG_4439.jpg";
import image8 from "../assets/archive/IMG_9457.jpg";
import image9 from "../assets/archive/IMG_UN.jpg";
import image10 from "../assets/archive/IMG_0423.jpg";
import image11 from "../assets/archive/CCH04690.jpg";
import image12 from "../assets/archive/CCH04702.jpg";
import image13 from "../assets/archive/CCH05034.jpg";
import image14 from "../assets/archive/DSC_0106.jpg";
import image15 from "../assets/archive/DSC_0214.jpg";
import image16 from "../assets/archive/DSC_0405.jpg";
import image17 from "../assets/archive/DSC_9674.jpg";
import image18 from "../assets/archive/DSC0005.jpg";
import image19 from "../assets/archive/IMG_7497.jpg";
import image20 from "../assets/archive/IMG_7007.jpg";

const ImageGrid = () => {
  const [largeDevice,setLargeDevice] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setLargeDevice(window.innerWidth > 950);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const itemData  = [
    { id: 1, src: image1},
    { id: 3, src: image3},  
    { id: 9, src: image9},
    { id: 11, src: image11},
    { id: 8, src: image8},
    { id: 2, src: image2},
    { id: 4, src: image4},
    { id: 5, src: image5},
    { id: 10, src: image10},
    { id: 7, src: image7},
    { id: 6, src: image6},
    { id: 12, src: image12},
    { id: 13, src: image13},
    { id: 14, src: image14},
    { id: 15, src: image15},
    { id: 16, src: image16},
    { id: 17, src: image17},
    { id: 18, src: image18},
    { id: 19, src: image19},
    // Add more images with different widths and heights
  ];
  return (
    <Box sx={{ width: '100%'}} className='h-full overflow-hidden w-[90%] p-4'>
      <Masonry columns={`${largeDevice?5:2}`} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              src={item.src}
              alt={item.id}
              className='rounded-xl'
              loading='fast'
              style={{
                display: 'flex',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default ImageGrid;
