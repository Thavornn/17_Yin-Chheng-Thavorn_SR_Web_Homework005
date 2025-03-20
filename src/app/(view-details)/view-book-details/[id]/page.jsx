import React from "react";
import { getBookById } from "@/service/bookService";
import { getCartoonById } from "@/service/cartoonService";
import BookDetail from "@/app/component/BookDetail";
import CartoonComponent from "@/app/component/CartoonComponent";

const ReadFullArticlePage = async ({ params, searchParams }) => {
  const id = params.id;
  const { type } = await searchParams;

  if (type === "book") {
    const { payload: book } = await getBookById(id);
    return (
      <div>
        <BookDetail book={book} />
      </div>
    );
  } else if (type === "cartoon") {
    const { payload: cartoon } = await getCartoonById(id);
    console.log("cartoon", cartoon);
    return <CartoonComponent cartoon={cartoon} />;
  }
};

export default ReadFullArticlePage;
