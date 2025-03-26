"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  // const stock = 4

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const { addItem, isLoading } = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-base"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-base"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-xs sm:text-base">
              Only{" "}
              <span className="text-red-700 font-bold">
                {stockNumber} items
              </span>{" "}
              left! <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading}
          className="w-36 text-sm rounded-3xl ring-2 ring-primaryColor text-primaryColor py-2 px-4 hover:bg-primaryColor hover:text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:ring-0 disabled:text-white disabled:ring-none transition-colors font-medium"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Add;
