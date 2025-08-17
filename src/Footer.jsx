function Footer() {
  return (
    <div className="bg-[hsl(220,16%,35%)] text-white mt-20 h-4/10  flex flex-col justify-center items-center">
      <div className="w-full h-8/10 flex justify-center items-center  text-white">
      <div className="w-3/6   h-1/2 flex flex-col justify-around shadow-2xs shadow-gray-300">
        <div className="font-bold text-4xl "> ARE YOU INTERSTED ?</div>
        <div >
          Discover the best sneakers from top brands. Walk with comfort and
          style.
        </div>
      </div>

      <div className="w-2/5 shadow-2xs h-1/2 shadow-gray-300">
        <div className="text-2xl mb-5">Follow Us</div>
        <div className="flex gap-7 text-3xl h-1/2 ">
          <img  src="icons/facebook.svg" alt="" />
          <img src="icons/pen-off.svg" alt="" />
          <img  src="icons/instagram.svg" alt="" />
          <img  src="icons/linkedin.svg" alt="" />
        </div>
      </div>
</div>

      <div>
        © 2025 Sneaker shoes sales. All rights reserved.
      </div>
    </div>
  );
}
export default Footer;
