"use client";
import {
  ArrowBigRight,
  BookOpenText,
  BookText,
  Eye,
  House,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function BreadcrumbComponent({
  title,
  image,
  author,
  description,
  type,
  view_count,
  published_year,
  name,
}) {
  return (
    <div
      role="presentation"
      className="p-4 bg-gray-100 rounded-lg shadow-md h-full w-full flex flex-col"
      // onClick={handleClick}
    >
      <nav
        aria-label="breadcrumb"
        className="flex items-center p-4 gap-5"
        // onClick={handleClick}
      >
        <Link
          href="/"
          className="text-blue-700 hover:text-blue-900  transition-colors flex gap-3"
        >
          <House />
          Home
        </Link>
        <span className="text-gray-500">
          <ArrowBigRight />
        </span>
        <Link
          href={`/${name?.replaceAll("+", "-")}`}
          className="text-blue-700 hover:text-blue-900 transition-colors flex gap-3 capitalize"
        >
          <BookText />
          {name?.replaceAll("+", " ")}
        </Link>
        <span className="text-gray-500">
          <ArrowBigRight />
        </span>
        <span className="text-red-500 capitalize font-bold flex gap-3">
          <BookOpenText />
          {title}
        </span>
      </nav>
      <div className="flex-1 ">
        <div className="w-full h-full mt-[130px] ml-[30px] bg-[#F5F7F8] rounded-4xl shadow-lg flex relative p-6 border border-gray-200">
          <img
            className="w-[300px] h-[460px] object-cover rounded-3xl absolute -top-25 right-20"
            alt="Book Cover"
            src={image}
          />
          <div className=" flex flex-col w-full gap-y-2 mt-80 text-justify mx-12">
            <h2 className=" text-2xl font-bold text-[#0B3954]">{title}</h2>
            <h3 className="text-xl font-semibold ">
              by <span className="text-teal-600">{author}</span>
            </h3>
            {type === "cartoon" && (
              <div className="flex items-center text-1xl text-[#087E8B] gap-3 font-semibold">
                <Eye />
                {view_count} times | {published_year}
              </div>
            )}
            <p className="mb-8 text-base text-[#0B3954] ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
