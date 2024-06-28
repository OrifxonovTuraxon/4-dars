import React, { useState } from "react";
import { Form } from "./Form";

export const Card = ({ name, id, setData }) => {
  const [show, setShow] = useState(false);

  const deleteItem = () => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const editItem = () => {
    setShow(!show);
  };

  const editedItem = (newValue) => {
    setData((data) =>
      data.map((item) => (item.id === id ? { name: newValue, id } : item))
    );
    setShow(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full">
      {show ? (
        <div className="my-4">
          <Form editedItem={editedItem} defaultValue={name} />
        </div>
      ) : (
        <h1 className="text-xl font-bold">{name}</h1>
      )}
      <div className="flex justify-end mt-4">
        <button
          onClick={deleteItem}
          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={editItem}
          className="px-4 py-2 ml-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
