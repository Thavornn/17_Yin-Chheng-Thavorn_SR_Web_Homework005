export const getAllCartoons = async () => {
  const cartoonlist = await fetch(
    "https://nextjs-homework005.vercel.app/api/cartoon"
  );
  const resp = cartoonlist.json();
  return resp;
};
// export const getCartoonById = async (id) => {
//   const cartoonId = await fetch(
//     `https://nextjs-homework005.vercel.app/api/cartoon/${id}`
//   );
//   const resp = cartoonId.json();
//   return resp;
// };
export const getAllCartoonCategory = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre"
    );
    const categoryAll = await res.json();
    return categoryAll;
  } catch (error) {
    console.log(error);
  }
};

export const getCartoonByCategory = async (cateId) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?genre=${cateId}`
    );
    const categoryCartoon = await res.json();
    return categoryCartoon;
  } catch (error) {
    console.log(error);
  }
};
