import HeaderComponent from "@/app/component/HeaderComponent";
import { getAllBooks } from "@/app/service/bookService";

import React from "react";

const BookPage = async () => {
  const book = await getAllBooks();
  const { payload } = book;

  // Log the fetched data for debugging
  console.log("Fetched Books:", book);

  return (
    <main>
      {/* Header Component */}
      <HeaderComponent />

      {/* Two-column vertical grid layout */}
      <div className="grid grid-cols-2 gap-[50px] p-[50px] mt-5 overflow-y-auto h-screen">
        {payload?.map((bookItem) => (
          <div
            key={bookItem.id}
            className=" ml-[80px] w-[500px] h-[250px] mt-[150px] bg-[#F5F7F8] rounded-3xl shadow-lg flex flex-col relative p-6 border border-gray-200"
          >
            {/* Book Image */}
            {bookItem.image && (
              <img
                className="absolute -top-[220px] ml-[20px] mt-[50px] w-[200px] h-[300px] object-cover rounded-3xl mb-4"
                alt={bookItem.book_title || "Book Cover"}
                src={bookItem.image}
              />
            )}

            {/* Book Title */}
            <h2 className="text-lg pl-[250px] font-semibold text-[#0B3954] line-clamp-1">
              {bookItem.book_title || "Untitled Book"}
            </h2>

            {/* Book Description */}
            <p className="mt-2 pl-[250px] text-sm text-[#0B3954] line-clamp-3">
              {bookItem.description || "No description available."}
            </p>

            {/* Read Full Article Button */}
            <a
              href={`/read-full-article/${
                bookItem.id
              }?type=book&name=${encodeURIComponent(
                bookItem.book_title || ""
              )}&title=${encodeURIComponent(bookItem.book_title || "")}`}
              className="mt-10 uppercase  bg-[#BED6E9] text-center px-4 py-2 rounded-full w-full hover:bg-deep-teal hover:text-ghost-white transition duration-300 ease-in-out"
            >
              Read Full Article
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BookPage;
