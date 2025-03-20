"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const SelectComponent = ({
  bookCategories,
  cartoonCategories,
  setTitleState,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);

  const handleSelectedCategories = (event) => {
    const value = event.target.value;
    console.log("VALUE: ", value);
    if (pathname === "/book-categories") {
      setTitleState(
        bookCategories.find((e) => e.id == event.target.value).book_cate_name
      );
    } else if (pathname === "/old-school-cartoons") {
      setTitleState(
        cartoonCategories.find((e) => e.id == event.target.value).cartoon_genre
      );
    }
    router.push(`${pathname}?query=${value}`);
  };
  // console.log("object");
  return (
    <div>
      {pathname !== "/" && (
        <form className="flex justify-center">
          <label
            htmlFor="countries"
            className="text-sm font-medium text-gray-900 dark:text-white leading-3 mr-2"
          ></label>
          <select
            id="countries"
            onChange={handleSelectedCategories}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {pathname === "/book-categories"
              ? bookCategories?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.book_cate_name}
                  </option>
                ))
              : cartoonCategories?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.cartoon_genre}
                  </option>
                ))}
          </select>
        </form>
      )}
    </div>
  );
};

export default SelectComponent;
