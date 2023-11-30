import React from "react";

// Import your image assets
import image1 from "../assets/profile/ram.jpg";
import image2 from "../assets/profile/anand.jpg";
import image3 from "../assets/profile/abhay.jpg";
import image4 from "../assets/profile/edward.jpg";

const ImageGrid = () => {
  const images = [
    { id: 1, src: image1, width: 1, height: 1 },
    { id: 2, src: image2, width: 2, height: 1 },
    { id: 3, src: image3, width: 1, height: 2 },
    { id: 4, src: image4, width: 2, height: 2 },
    { id: 1, src: image1, width: 1, height: 1 },
    { id: 2, src: image2, width: 2, height: 1 },
    { id: 3, src: image3, width: 1, height: 2 },
    { id: 4, src: image4, width: 2, height: 2 },
    { id: 1, src: image1, width: 1, height: 1 },
    { id: 2, src: image2, width: 2, height: 1 },
    { id: 3, src: image3, width: 1, height: 2 },
    { id: 4, src: image4, width: 2, height: 2 },
    { id: 1, src: image1, width: 1, height: 1 },
    { id: 2, src: image2, width: 2, height: 1 },
    { id: 3, src: image3, width: 1, height: 2 },
    { id: 4, src: image4, width: 2, height: 2 },
    { id: 1, src: image1, width: 1, height: 1 },
    { id: 2, src: image2, width: 2, height: 1 },
    { id: 3, src: image3, width: 1, height: 2 },
    { id: 4, src: image4, width: 2, height: 2 },
    // Add more images with different widths and heights
  ];

  return (
    <div className="flex justify-center w-full h-full">
      <div className="grid auto-rows-[192px] grid-cols-7 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`row-span-${image.height} col-span-${image.width} rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900`}
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="object-cover w-full h-full aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
