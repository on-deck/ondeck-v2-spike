import React from "react";
import Navigation from "../components/Navigation";
import Avatar from "../components/Avatar";

const Index = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              background:
                "linear-gradient(-270deg, #0b1751 0%, #1c114b 53.28%, #2f1529 100%);",
            }}
            className="p-16 animate w-full rounded-xl rounded-t-none"
          >
            <div className="lg:flex md:block">
              <div className="relative w-1/3 px-8">
                <div className="relative z-10 ">
                  <Avatar />
                </div>

                <div
                  style={{
                    top: 20,
                    left: 40,
                    width: 245,
                    height: 245,
                    mixBlendMode: "overlay",
                    background:
                      "linear-gradient(270deg, #E35275 0%, #773FE2 53.28%, #315BE8 100%);",
                  }}
                  className=" animate-pulse duration-700 z-0 absolute rounded-full -mt-10"
                ></div>

                <div
                  style={{
                    top: 0,
                    left: 20,
                    width: 245,
                    height: 245,
                    mixBlendMode: "overlay",
                    background:
                      "linear-gradient(270deg, #E35275 0%, #773FE2 53.28%, #315BE8 100%);",
                  }}
                  className=" animate-pulse delay-200 z-0 absolute rounded-full -mt-10"
                ></div>

                <div
                  style={{
                    top: 31,
                    left: 12,
                    width: 245,
                    height: 245,
                    mixBlendMode: "overlay",
                    background:
                      "linear-gradient(270deg, #E35275 0%, #773FE2 53.28%, #315BE8 100%);",
                  }}
                  className=" animate-pulse delay-300 z-0 absolute rounded-full -mt-10"
                ></div>

                <div style={{ maxWidth: 200 }} className="mt-14">
                  <button
                    style={{ background: "#315CEA" }}
                    className="min-w-full mb-4 rounded-full border-transparent border text-white text-sm px-4 py-2"
                  >
                    Let's talk co-founding
                  </button>
                  <button className="min-w-full mb-4 border-white border-opacity-20 border rounded-full text-white text-sm px-4 py-2">
                    Add to favourites
                  </button>

                  <div className="mt-6 flex justify-center items-center width-full">
                    <svg
                      className="mx-2"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19077 10.4122 3.53013 10.4362 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37367 14.4904 3.49404 15.1393 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z"
                        fill="white"
                      />
                    </svg>

                    <svg
                      className="mx-2"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                        fill="white"
                      />
                    </svg>

                    <svg
                      className="mx-2"
                      width="20"
                      height="10"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C2.40215 9.47322 3.67392 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C16.3261 10 17.5979 9.47322 18.5355 8.53553C19.4732 7.59785 20 6.32608 20 5C20 3.67392 19.4732 2.40215 18.5355 1.46447C17.5979 0.526784 16.3261 0 15 0Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-2/3">
                <h2 className="flex justify-between text-white text-xl font-bold">
                  Jordan Ortez
                  <div className="flex">
                    <a
                      href="#"
                      style={{
                        background: "#E9EAEC",
                        width: 27,
                        height: 27,
                      }}
                      className="ml-2 relative rounded-sm text-center text-black"
                    >
                      <div
                        className="absolute text-center w-full"
                        style={{
                          fontSize: "9px",
                          top: -7,
                        }}
                      >
                        ODF
                      </div>
                      <div
                        className="absolute text-center w-full"
                        style={{
                          fontSize: "12px",
                          top: 5,
                        }}
                      >
                        3
                      </div>
                    </a>

                    <a
                      href="#"
                      style={{
                        background: "#E9EAEC",
                        width: 27,
                        height: 27,
                      }}
                      className="ml-2 relative rounded-sm text-center text-black"
                    >
                      <div
                        className="absolute text-center w-full"
                        style={{
                          fontSize: "9px",
                          top: -7,
                        }}
                      >
                        ODA
                      </div>
                      <div
                        className="absolute text-center w-full"
                        style={{
                          fontSize: "12px",
                          top: 5,
                        }}
                      >
                        19
                      </div>
                    </a>
                  </div>
                </h2>
                <h3 className="text-gray-100 text-sm">Berlin, Germany</h3>
                <h1 className="mt-10 text-white text-2xl font-bold">
                  Full stack engineer, builder of companies, starting <br />
                  something new this year 🤘🤘🤘
                </h1>

                <div className="text-xs mt-10 text-white">
                  <div className="flex my-4">
                    <div
                      style={{ color: "#ADBEF7" }}
                      className="uppercase w-1/5 mr-2"
                    >
                      Primary skillset
                    </div>
                    <div>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        Software engineering
                      </a>
                      <span className="px-2" style={{ color: "#ADBEF7" }}>
                        •
                      </span>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        Product management
                      </a>
                    </div>
                  </div>

                  <div className="flex my-4">
                    <div
                      style={{ color: "#ADBEF7" }}
                      className="uppercase w-1/5 mr-2"
                    >
                      Experienced in
                    </div>
                    <div>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        Crypto/Blockchain
                      </a>
                      <span className="px-2" style={{ color: "#ADBEF7" }}>
                        •
                      </span>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        B2B SaaS
                      </a>
                      <span className="px-2" style={{ color: "#ADBEF7" }}>
                        •
                      </span>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        Fintech
                      </a>
                      <span className="px-2" style={{ color: "#ADBEF7" }}>
                        •
                      </span>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        + 3 more
                      </a>
                    </div>
                  </div>

                  <div className="flex my-4">
                    <div
                      style={{ color: "#ADBEF7" }}
                      className="uppercase w-1/5 mr-2"
                    >
                      Excited about
                    </div>
                    <div>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        Health & Wellness
                      </a>
                      <span className="px-2" style={{ color: "#ADBEF7" }}>
                        •
                      </span>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        Future of work
                      </a>
                      <span className="px-2" style={{ color: "#ADBEF7" }}>
                        •
                      </span>
                      <a
                        href="#"
                        className=" border-b-2 border-dotted border-gray-500"
                      >
                        Fintech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-14 w-full">
            <div className="flex">
              <div className="w-1/3 px-4">
                <textarea
                  className="h-auto bg-transparent w-2/3 border-l-2 pl-4 border-gray-400"
                  placeholder="Add a note (it will only be visible to you)..."
                ></textarea>
              </div>
              <div className="w-2/3">
                <div className="bg-white text-black rounded-lg lg:-mt-48 shadow-sm">
                  <div className="p-10">
                    <h2 className="font-extrabold text-2xl mb-4">Mini bio</h2>
                    <ul className="font-gray-800 text-sm list-disc ml-5">
                      <li className="mb-4">
                        Lived the should Life for a while: college athlete,
                        engineer, early Twitter hire, married college
                        sweetheart.
                      </li>
                      <li className="mb-4">
                        Traveled the world, deep introspection, grew men's
                        emotional Health startup Journeyman on the road 🙏
                      </li>
                      <li className="mb-4">
                        Returned to start something new. Current idea is Gently:
                        a total Health & Wellness concept. Currently iterating
                        and evolving Gently️...{" "}
                        <a className="text-blue-700 font-medium" href="#">
                          See all
                        </a>
                      </li>
                    </ul>
                  </div>

                  <hr />

                  <div className="">
                    <h2 className="font-extrabold px-10 pt-10 pb-1 text-2xl">
                      I can use help with...
                    </h2>
                    <div className="hover:bg-gray-50 px-10 py-1 cursor-pointer">
                      <h4 className="text-sm font-medium mt-4 mb-2">
                        Finding a co-founder
                      </h4>
                      <p className="text-sm font-light">
                        I’m looking for technical co-founder that has experience
                        with Android and is interested in the Health & Wellness
                        space.
                      </p>
                      <button
                        style={{ color: "#315CEA", borderColor: "#315CEA" }}
                        className="my-4  border-opacity-20 border rounded-full text-white text-sm px-4 py-1 "
                      >
                        Offer help
                      </button>
                    </div>

                    <div className="hover:bg-gray-50 px-10 py-1 cursor-pointer">
                      <h4 className="text-sm font-medium mt-4 mb-2">
                        How to raise a seed round
                      </h4>
                      <p className="text-sm font-light">
                        This will be my first fundraising rodeo in this space.
                        Would love to chat to people with experience raising in
                        the sector.
                      </p>
                      <button
                        style={{ color: "#315CEA", borderColor: "#315CEA" }}
                        className="my-4 border-opacity-20 border rounded-full text-white text-sm px-4 py-1"
                      >
                        Offer help
                      </button>
                    </div>
                  </div>

                  <hr className="mt-6" />

                  <div className="">
                    <h2 className="font-extrabold px-10 pt-10 pb-1 text-2xl">
                      What I can help with...
                    </h2>
                    <div className="hover:bg-gray-50 px-10 py-1 cursor-pointer">
                      <h4 className="text-sm font-medium mt-4 mb-2">
                        Software engineering
                      </h4>
                      <p className="text-sm font-light">
                        This is my bread and butter, I’m happy to talk tech
                        stacks, development approaches and provide advice on
                        hiring etc.
                      </p>
                      <button
                        style={{ color: "#315CEA", borderColor: "#315CEA" }}
                        className="my-4  border-opacity-20 border rounded-full text-white text-sm px-4 py-1 "
                      >
                        Schedule a call
                      </button>
                    </div>

                    <div className="hover:bg-gray-50 px-10 py-1 cursor-pointer">
                      <h4 className="text-sm font-medium mt-4 mb-2">
                        Product management
                      </h4>
                      <p className="text-sm font-light">
                        If you need a second opinion on your product strategy,
                        roadmap approach or anything related, I can help you
                        out.
                      </p>
                      <button
                        style={{ color: "#315CEA", borderColor: "#315CEA" }}
                        className="my-4 border-opacity-20 border rounded-full text-white text-sm px-4 py-1"
                      >
                        Schedule a call
                      </button>
                    </div>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
