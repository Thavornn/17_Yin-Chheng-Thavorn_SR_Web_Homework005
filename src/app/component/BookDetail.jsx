import Link from "next/link";
import React from "react";

const BookDetail = async ({ book }) => {
  return (
    <main className="flex bg-gray-100 h-[910px] ">
      <div className="ml-15">
        <nav className="flex items-center space-x-2 mt-15 font-bold text-gray-600 ml-30">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <span className="text-xl mr-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>

            <span className="text-blue-950">Home</span>
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            href="/book"
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <span className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            <span className="text-blue-950">Book Categories</span>
          </Link>
          <span className="text-gray-400">›</span>
          <span className="flex items-center space-x-1 text-red-600 font-semibold">
            <span className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </span>
            <span>{book?.book_title}?</span>
          </span>
        </nav>
        <div className=" ml-30 w-[85%] mx-auto bg-white mt-45   rounded-t-4xl p-15 shadow-md h-[71%] absolute">
          <div className="mt-26 ">
            <h1 className="font-bold text-blue-950 text-2xl">
              {book?.book_title}
            </h1>
            <br />
            <p className="text-green-900 text-2xl">{book?.book_author}</p>
            <br />
            <p className="text-blue-950 line-clamp-6 ">{book?.description}</p>
            <img
              className="absolute rounded-3xl w-[250px] -top-36 h-[340px] ml-300  "
              src={book?.image}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetail;
