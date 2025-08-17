function leftCall() {
  return (
    <div className="flex flex-col ">
      <div className="text-3xl font-bold mb-7">Get in Touch</div>
      <div className="text-neutral-600 mb-7 w-6/7">
        Have questions? Reach out to us anytime, we’re here to help you.
      </div>

      <div className="mb-8">
        <div className="flex">
          <img className="mr-2" src="public/icons/mail.svg" alt="mail.svg" />
          <p className="font-bold">Email</p>
        </div>
        <p className="ml-7.5 text-neutral-500 ">support@sneakerstore.com</p>
      </div>

      <div className="mb-8">
        <div className="flex ">
          <img className="mr-2" src="public/icons/phone.svg" alt="phone.svg" />
          <p className="font-bold">Phone</p>
        </div>
        <p className="ml-7.5 text-neutral-500">+1 234 567 8900</p>
      </div>

      <div className="mb-8">
        <div className="flex   ">
          <img
            className="mr-2"
            src="public/icons/map-pin.svg"
            alt="map-pin.svg"
          />
          <p className="font-bold">Adress</p>
        </div>
        <p className="ml-7.5 text-neutral-500">
          123 Sneaker Street, Shoe City, Country
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold">Follow Us</p>

        <div className="flex gap-3">
          <img src="/icons/facebook.svg" alt="facebook.svg" />
          <img src="public/icons/pen-off.svg" alt="X.svg" />
          <img src="/icons/instagram.svg" alt="instagram.svg" />
          <img src="public/icons/linkedin.svg" alt="linkdin.svg" />
        </div>
      </div>
    </div>
  );
}
export default leftCall;
