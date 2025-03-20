"use server";

import {
  getAllCartoonCategory,
  getCartoonByCategory,
} from "../service/cartoonService";

export const allCartoonAction = async () => {
  const listAllCartoon = await getAllCartoonCategory();
  return listAllCartoon;
};

export const cartoonAction = async (cateId) => {
  const listCartoon = await getCartoonByCategory(cateId);
  return listCartoon;
};
