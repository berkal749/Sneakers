import { useState } from "react";

function Description() {
  const [count, setCount] = useState(1);
  function Add() {
    setCount((c) => c + 1);
  }
  function Minus() {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  }

  return (
    <div className="w-5/10  h-6/12 flex flex-col justify-between pr-11 pl-10 ">
      <div className="h-2/8  flex flex-col justify-around">
        <div className="text-amber-500 font-bold"> Sneaker Company</div>
        <div className="text-4xl font-bold">Fall Limited Edition Sneakers</div>
      </div>

      <div className=" w-9/10 text-gray-500 font-normal">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer. $125.00 50%
      </div>
      <div>
        <div className="flex justify-between w-3/10  items-center ">
          <div className="text-3xl font-bold">125.00$</div>
          <div className="text-md font-bold">50%</div>
        </div>
        <div className="mt-0 flex justify-center w-1/10  text-gray-500  ml-1.5 line-through">
          250.00$
        </div>
      </div>

      <div className="flex justify-between w-113 h-12">
        <div className="flex h-12 w-34 rounded-lg font-bold text-md text-amber-600  items-center bg-gray-200 justify-around">
          <button onClick={()=>Minus()} className="text-2xl font-extrabold">-</button>
          <p className="text-black">{count}</p>
          <button onClick={()=>Add()} className="text-2xl font-extrabold">+</button>
        </div>

        <button className=" w-md ml-3 rounded-md bg-orange-500 hover:bg-orange-600">
          add to cart
        </button>
      </div>
    </div>
  );
}
export default Description;
