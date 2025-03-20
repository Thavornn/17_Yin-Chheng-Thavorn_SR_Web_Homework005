"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const AllBookComponent = ({ book }) => {
  const { payload } = book;
  const searchParams = useSearchParams();

  const bookfilterID = searchParams.get("query")?.toLowerCase() || "";

  console.log("Query Parameter:", bookfilterID);
  console.log("Payload Data:", payload);

  const bookItem =
    bookfilterID == null || bookfilterID === "all"
      ? payload
      : payload?.filter(
          (book) =>
            String(book.id) === bookfilterID || // Match by ID
            book.book_title.toLowerCase().includes(bookfilterID) // Match by title
        );

  return (
    <main>
      <div className="w-[527px] h-[225px] mt-[130px] ml-[30px] bg-[#F5F7F8]   rounded-3xl shadow-lg flex relative p-6 border border-gray-200">
        {bookItem?.map((book) => (
          <div>
            <img
              className="w-[176px] h-[260px] object-cover rounded-3xl absolute -top-25 left-6"
              alt="Book Cover"
              src={book.image}
            />
            <div className="ml-[220px] flex flex-col justify-center">
              <h2 className=" text-lg line-clamp-1 font-semibold text-[#0B3954]">
                {book.book_title}
              </h2>
              <p className="mt-2 line-clamp-6 text-sm text-[#0B3954]">
                {book.description}
              </p>
            </div>
            <Link
              href={`/read-full-article/${book.id}?type=book&name=old+school+cartoons&title=Tom+%26+Jerry`}
              className="uppercase bg-[#BED6E9]  mb-3 absolute text-center bottom-0 px-2.5 py-2.5 rounded-full w-45 hover:bg-deep-teal hover:text-ghost-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
            >
              Read Full Article
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllBookComponent;
