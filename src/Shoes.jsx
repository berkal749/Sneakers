import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";


function Shoes() {
  const [url, setUrl] = useState("Shoes/Shoes1XL.png");
  const pics = [
    {
      minImg: "/Shoes/Shoes4.png",
      bigImg: "/Shoes/Shoes4XL.png",
    },
    {
      minImg: "/Shoes/Shoes3.png",
      bigImg: "/Shoes/Shoes3XL.png",
    },
    {
      minImg: "/Shoes/Shoes2.png",
      bigImg: "/Shoes/Shoes2XL.png",
    },
    {
      minImg: "/Shoes/Shoes1.png",
      bigImg: "/Shoes/Shoes1XL.png",
    },
  ];

  return (
    
    <div className=" flex flex-col items-center justify-between w-5/11 left-0  gap-2 h-95/100 ml-4">
      <div className=" flex  h-14/17 w-17/19">
        <PhotoProvider>
          <PhotoView src={url}>
            <img
              className="h-full w-full rounded-lg"
              src={url}
              alt="Shoses-display"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className=" flex   h-9/17 w-17/19">
        {pics.map((element) => (
          <img
            className="h-full ml-1 w-full rounded-lg"
            src={element.minImg}
            alt="Shoses-display"
            onClick={() => setUrl(element.bigImg)}
          />
        ))}
      </div>
    </div>
  );
}
export default Shoes;
