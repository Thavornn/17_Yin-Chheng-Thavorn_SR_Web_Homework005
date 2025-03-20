import Link from "next/link";
import React from "react";

const BodyComponent = () => {
  return (
    <>
      {/* Dynamic Page Section */}

      {/* Header with Dynamic Title */}
      {/* <div className="flex justify-between items-center pb-2 border-b-2 border-blue-500">
          <h2 className="text-lg bg-gray-200 p-2 text-blue-400 font-semibold">
            HomePage
          </h2> */}

      {/* Dropdown for filtering categories */}
      {/* </div> */}

      {/* Dynamic Content from Page */}
      {/* <div className="flex-grow">{children}</div> */}
      <div className="flex gap-6  justify-around pt-[100px] overflow-y-auto h-screen pb-[100px]">
        <Link
          href="/book"
          className="relative transition-all duration-300 cursor-pointer group overflow-hidden rounded-[20px]"
        >
          <Link href="/book">
            <img
              className="w-[350px] h-[450px]  rounded-[20px] transition-all duration-300"
              src="https://i.pinimg.com/736x/6e/8d/47/6e8d47386ec45db5f8380dbc83848df0.jpg"
              alt="image description"
            />
          </Link>

          {/*  hover */}
          <div className="absolute top-0 left-0 w-full h-[450px] bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

          {/*  text */}
          <p className="absolute top-[200px] text-4xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View All <br /> Available <br /> Books
          </p>

          {/* Book tag */}
          <div className="absolute top-3 leading-[10px] left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md">
            📘 Book
          </div>
        </Link>

        <Link
          href="/cartoon"
          className="relative  transition-all duration-300 cursor-pointer group overflow-hidden rounded-[20px]"
        >
          <Link href="/cartoon">
            <img
              className="w-[350px] h-[450px] rounded-[20px] transition-all duration-300"
              src="https://i.pinimg.com/736x/78/e5/b9/78e5b942255686dc9f7e0f028809c2fa.jpg"
              alt="image description"
            />
          </Link>

          {/*  hover */}
          <div className="absolute top-0 left-0 w-full h-[450px] bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

          {/* text */}
          <p className="absolute top-[200px] text-4xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View All <br /> Available <br /> Books
          </p>

          {/* Book tag */}
          <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md">
            📘 Book
          </div>
        </Link>
      </div>
    </>
  );
};

export default BodyComponent;
