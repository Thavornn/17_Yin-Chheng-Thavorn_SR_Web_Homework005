"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { allCartoonAction } from "../action/cartoonAction";
import { allBookAction } from "../action/bookAction";

const HeaderComponent = () => {
  const pathName = usePathname();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filter, setFilter] = useState();
  const [bookfilter, setbookfilter] = useState();
  const router = useRouter();

  const routeTitles = {
    "/": "Homepage",
    "/book": "All Books",
    "/cartoon": "Old School Cartoons",
  };

  const pageTitle = routeTitles[pathName] || "Unknown Page";

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    console.log("selected value : ", selectedValue);
    setSelectedFilter(selectedValue);

    router.push(`${pathName}?query=${selectedValue}`);
  };

  const filterbyCategory = async () => {
    const filter = await allCartoonAction();
    setFilter(filter);
  };

  const bookfilterbyCategory = async () => {
    const bookfilter = await allBookAction();
    setbookfilter(bookfilter);
  };

  useEffect(() => {
    if (pathName === `/cartoon`) {
      filterbyCategory();
    } else {
      console.log("cartoon");
    }
  }, [pathName]);

  useEffect(() => {
    if (pathName === `/book`) {
      bookfilterbyCategory();
    } else {
      console.log("book");
    }
  }, [pathName]);

  return (
    <main>
      <div className="flex justify-between items-center pb-5 border-b-2 border-blue-500">
        {/* Dynamically display the page title */}
        <h2 className="text-lg font-semibold bg-gray-100 p-3 rounded-full">
          {pageTitle}
        </h2>

        {/* Conditionally render filters based on the route */}
        {pathName !== "/" && (
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="px-4 py-2 border text-blue-500 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {/* Default option */}
            <option value="all">Filter By Category</option>

            {/* Conditional options based on the route */}
            {pathName === "/book" && (
              <>
                <option>hi</option>
                {bookfilter?.payload.map((bookCategory) => (
                  <option key={bookCategory.id} value={bookCategory.id}>
                    {bookCategory.book_cate_name}
                  </option>
                ))}
              </>
            )}

            {pathName === "/cartoon" && (
              <>
                {filter?.payload.map((cartoonCategory) => (
                  <option key={cartoonCategory.id} value={cartoonCategory.id}>
                    {cartoonCategory.cartoon_genre}
                  </option>
                ))}
              </>
            )}
          </select>
        )}
      </div>
    </main>
  );
};

export default HeaderComponent;
