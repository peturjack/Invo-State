import React from "react";
import { DisplayProps } from "../types/types";
import { FaTrash } from "react-icons/fa";

const DisplayItems = ({ items, onClick }: DisplayProps) => {
  return (
    <>
      <h1 className="text-2xl mb-4">Items</h1>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            className="border-l-4 border-orange-500 bg-orange-500/5 rounded py-2 px-4 "
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">{item.name}</div>
              <div className="flex-1">Qty - {item.qty}</div>
              <div className="flex-1">Price - ${item.price}</div>
              <div className="flex-1">Amount - ${item.amount}</div>
              <button value={item.name} onClick={onClick}>
                <FaTrash className="text-gray-500 hover:text-red-800 hover:size-5 duration-200 cursor-pointer" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DisplayItems;
