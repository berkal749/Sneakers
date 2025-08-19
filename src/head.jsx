import Shoes from "./Shoes.jsx";
import Description from "./descreption.jsx";
function Head() {
  return (
    <div className=" h-15/10  flex items-start justify-around ml-6 overflow-hidden mt-20">
      <Shoes />
      <Description />
    </div>
  );
}
export default Head;
