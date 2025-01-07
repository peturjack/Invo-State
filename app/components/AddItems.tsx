"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import PrimaryInput from "./PrimaryInput";
import DisplayItems from "./DisplayItems";
import { NewItemProps } from "../types/types";
import { ChangeEvent } from "react";

const AddItems = () => {
  //this is the inputValue from
  const [items, setItems] = useState<NewItemProps[]>([]);
  const [newItem, setNewItem] = useState<NewItemProps>({
    name: "",
    qty: 0,
    amount: 0,
    price: 0,
  });

  useEffect(() => {
    const storedItems = localStorage.getItem("invo_items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("invo_items", JSON.stringify(items));
  }, [items]);

  const handleNewItem = (e: React.FormEvent) => {
    e.preventDefault();

    setItems([...items, newItem]);
    setNewItem({ name: "", amount: 0, price: 0, qty: 0 });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewItem({
      ...newItem,
      [name]: value,
      amount: newItem.qty * newItem.price,
    });
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const itemName = e.currentTarget.value;

    setItems(items.filter((item) => item.name !== itemName));
  };

  return (
    <>
      <h1 className="text-4xl mb-10 cursor-pointer"> Invo </h1>

      <form
        onSubmit={handleNewItem}
        className="flex items-center justify-center gap-4"
      >
        <PrimaryInput
          name="name"
          value={newItem.name}
          onChange={handleChange}
          isNumber={false}
          label="Name"
          placeholder="name..."
          disabled={false}
        />
        <PrimaryInput
          name="qty"
          value={newItem.qty}
          onChange={handleChange}
          isNumber={true}
          label="Qty"
          placeholder="Qty..."
          disabled={false}
        />
        <PrimaryInput
          name="price"
          value={newItem.price}
          onChange={handleChange}
          isNumber={true}
          label="Price"
          placeholder="Price..."
          disabled={false}
        />
        <PrimaryInput
          name="amount"
          value={newItem.amount}
          onChange={handleChange}
          isNumber={true}
          label="Amount"
          placeholder="Amount..."
          disabled={true}
        />

        <button
          className="border border-orange-500
        bg-orange-500/20 px-4 py-2 rounded
         hover:bg-orange-500/50 duration-200"
          type="submit"
        >
          Add Item
        </button>
      </form>
      <DisplayItems onClick={handleDelete} items={items} />
    </>
  );
};

export default AddItems;
