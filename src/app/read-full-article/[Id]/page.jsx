import React from "react";

import { getBookById, getCartoonById } from "@/app/service/bookService";
import BookDetail from "@/app/component/BookDetail";
import CartoonDetail from "@/app/component/CartoonDetail";

const BookDetailPage = async ({ params, searchParams }) => {
  var proId = params.Id;
  console.log("dksba", proId);
  var { type } = searchParams;
  console.log("type is :", type);

  if ((type === "book")) {
    const { payload: book } = await getBookById(proId);
    console.log("dhsbka", book);
    return (
      <main>
        <BookDetail book={book}></BookDetail>
      </main>
    );
  } else type === "cartoon";
  const { payload: cartoon } = await getCartoonById(proId);
  console.log("dhsbka", cartoon);
  return (
    <main>
      <CartoonDetail cartoon={cartoon}></CartoonDetail>
    </main>
  );
};
export default BookDetailPage;
