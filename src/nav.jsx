function Nav() {
  return (
    <div className="flex justify-around items-center w-full h-1/10 pt-5 pb-5 shadow-gray-300 shadow-xs sticky">
      <div className="flex justify-between w-3/7 ">
        <img src="/Nav-pics/sneakers.png" alt="sneakers.img" />
        <nav className="flex justify-around w-3/5">
          <a className=" text-neutral-600 hover:text-neutral-200" href="">Shop</a>
          <a className=" text-neutral-600 hover:text-neutral-200" href="">Home</a>

          <a className=" text-neutral-600 hover:text-neutral-200" href="">About Us</a>
          <a className=" text-neutral-600 hover:text-neutral-200" href="">Blog</a>
          <a className=" text-neutral-600 hover:text-neutral-200" href="">Contact</a>
        </nav>
      </div>

      <div className="flex justify-end w-3/7">
        <img src="/Nav-pics/shopping-cart.svg" alt="shoppingcart" />
        <button className="ml-5  text-neutral-600 hover:text-neutral-200">Sign in</button>
      </div>
    </div>
  );
}
export default Nav;
