export const getAllBooks = async () => {
  const booklist = await fetch(
    "https://nextjs-homework005.vercel.app/api/book"
  );
  const res = await booklist.json();
  return res;
};

export const getBookById = async (id) => {
  const book = await fetch(
    `https://nextjs-homework005.vercel.app/api/book/${id}`
  );
  const res = await book.json();
  return res;
};
export const getCartoonById = async (cartoonId) => {
  const cartoon = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon/${cartoonId}`
  );
  const res = await cartoon.json();
  return res;
};

export const getAllBookCategory = async () => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category`
    );
    const bookCategory = await res.json();
    return bookCategory;
  } catch (error) {
    console.log(error);
  }
};

export const getBookCategoryById = async (bookCategoryId) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category/${bookCategoryId}`
    );
    const bCategoryId = await res.json();
    return bCategoryId;
  } catch (error) {
    console.log(error);
  }
};
