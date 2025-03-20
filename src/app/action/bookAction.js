"use server";

import {
  getAllBookCategory,
  getBookCategoryById,
} from "../service/bookService";

export const allBookAction = async () => {
  const allBookList = await getAllBookCategory();
  return allBookList;
};

export const bookAction = async (bookCategoryId) => {
  const bookList = await getBookCategoryById(bookCategoryId);
  return bookList;
};
