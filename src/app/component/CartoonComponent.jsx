import Link from "next/link";
import React from "react";

const CartoonComponent = ({ cartoon }) => {
  console.log("fds", cartoon);
  const { payload } = cartoon;
  return (
    <main>
      <div className="w-[314px] mb-[150px] ml-[40px] h-[398px] rounded-[1px] p-4">
        {/* Image */}
        <Link
          href={`/read-full-article/${
            cartoon.id
          }?type=cartoon&name=${encodeURIComponent(
            cartoon.created_at
          )}&title=${encodeURIComponent(cartoon.ct_title)}`}
          passHref
        >
          <img
            className="w-[314px]   mt-[40px] text-[24px] h-[398px] object-cover rounded-lg"
            src={cartoon.image}
            alt=""
          />

          {/* Title */}
          <h2 className="mt-3 text-[18px] font-semibold line-clamp-1 text-[#0B3954]">
            {cartoon.ct_title}
          </h2>

          {/* Views & Year */}

          <div className="flex items-center text-[#087E8B] font-bold text-[15px] mt-1">
            <div className=" h-4 mr-1 text-gray-500" />
            <svg
              className="w-[25px] h-[25px] mr-1"
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span className="">{cartoon.view_count} times</span>
            <span className=" text-[#087E8B] text-[18px] ml-1">
              | {cartoon.published_year}
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default CartoonComponent;
