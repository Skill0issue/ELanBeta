import React from 'react';
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
  const itemData  = [
    { id: 1, src: image1, width: 1, height: 1 },
    { id: 3, src: image3, width: 1, height: 2 },  
    { id: 9, src: image9, width: 1, height: 1 },
    { id: 11, src: image11, width: 1, height: 2 },
    { id: 8, src: image8, width: 2, height: 2 },
    { id: 2, src: image2, width: 2, height: 1 },
    { id: 4, src: image4, width: 2, height: 2 },
    { id: 5, src: image5, width: 1, height: 1 },
    { id: 10, src: image10, width: 2, height: 1 },
    { id: 7, src: image7, width: 1, height: 2 },
    { id: 6, src: image6, width: 2, height: 1 },
    { id: 12, src: image12, width: 2, height: 2 },
    { id: 13, src: image13, width: 1, height: 1 },
    { id: 14, src: image14, width: 2, height: 1 },
    { id: 15, src: image15, width: 1, height: 2 },
    { id: 16, src: image16, width: 2, height: 2 },
    { id: 17, src: image17, width: 1, height: 1 },
    { id: 18, src: image18, width: 2, height: 1 },
    { id: 19, src: image19, width: 1, height: 2 },
    { id: 20, src: image20, width: 2, height: 2 },
    // Add more images with different widths and heights
  ];
  return (
    <Box sx={{ width: '100%', minHeight: 829 }} className='h-full overflow-hidden w-[90%] p-4'>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              src={item.src}
              alt={item.id}
              loading="lazy"
              className='rounded-xl'
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
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
