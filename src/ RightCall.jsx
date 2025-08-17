function RightCall() {
  return (
    <>
      <div
        style={{
          boxShadow: "1px 1px 10px rgb(213, 212, 212)",
        }}
        className="  w-15/24 flex flex-col pb-20 h-160  items-start  text-sm  "
      >
        <div className="w-7/10 h-9/10  border-b-blue-600 ml-7 mt-10">
          <div className="text-3xl font-bold mb-11">Send a Message</div>
          <form className="flex flex-col gap-4 " action="">
            <div className="w-full flex flex-col  ">
              <label htmlFor="">
                Name <span className="text-red-500 ">*</span>
              </label>
              <input
                style={{
                  boxShadow: "0px 1px 10px rgb(232, 231, 231)",
                  borderColor: "rgb(199, 199, 199)",
                  borderWidth: "1px",
                }}
                className=" rounded-md h-5/5 p-3 "
                placeholder="Your name"
                type="text"
              />
            </div>

            <div className="flex h-1/10 items-center justify-between ">
              <div className="">
                <div className="flex flex-col">
                  <label htmlFor="">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    style={{
                      boxShadow: "0px 1px 10px rgb(232, 231, 231)",
                      borderColor: "rgb(199, 199, 199)",
                      borderWidth: "1px",
                    }}
                    className="  rounded-md p-3 "
                    placeholder="Your email"
                    type="email"
                  />
                </div>
              </div>
              <div className=" ">
                <div className="flex flex-col">
                  <label htmlFor="">
                    Phone-number <span className="text-red-500">*</span>
                  </label>
                  <input
                    style={{
                      boxShadow: "0px 1px 10px rgb(232, 231, 231)",
                      borderColor: "rgb(199, 199, 199)",
                      borderWidth: "1px",
                    }}
                    placeholder="Phone number"
                    className=" rounded-md p-3"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="">
                Address<span className="text-red-500">*</span>
              </label>
              <input
                style={{
                  boxShadow: "0px 1px 10px rgb(232, 231, 231)",
                  borderColor: "rgb(199, 199, 199)",
                  borderWidth: "1px",
                }}
                placeholder="Your address"
                className=" rounded-md  p-3 text-base "
                type="url"
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="">
                Meassge <span className="text-red-500">*</span>
              </label>
              <input
                style={{
                  boxShadow: "0px 1px 10px rgb(232, 231, 231)",
                  borderColor: "rgb(199, 199, 199)",
                  borderWidth: "1px",
                }}
                className=" rounded-md text-base   shadow-gray-300 shadow-sm  border-neutral-500 pt-3 pl-3 pb-28"
                type="text"
                placeholder="Your meassge..."
              />
            </div>
            <button className=" h-12 text-base bg-orange-500 text-amber-50 font-bold rounded-md mb-40 hover:bg-orange-600">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RightCall;
