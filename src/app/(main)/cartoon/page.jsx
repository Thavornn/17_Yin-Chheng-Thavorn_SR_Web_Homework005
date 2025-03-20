import CartoonComponent from "@/app/component/CartoonComponent";
import HeaderComponent from "@/app/component/HeaderComponent";
import { getAllCartoons } from "@/app/service/cartoonService";
import React from "react";

const CartoonPage = async () => {
  const cartoonlist = await getAllCartoons();
  const { payload } = cartoonlist;
  console.log("gasdf", cartoonlist);
  return (
    <main>
      <HeaderComponent />

      <div className="grid grid-cols-3">
        {payload?.map((cartoon, index) => (
          <div key={index} className=" ">
            <CartoonComponent cartoon={cartoon} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CartoonPage;
