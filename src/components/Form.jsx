import React, { useState } from "react";

export const Form = ({ setData, defaultValue, editedItem }) => {
  const [userName, setUserName] = useState(defaultValue || "");

  const submit = (e) => {
    e.preventDefault();
    if (defaultValue) {
      editedItem(userName);
      return;
    }
    setData((state) => [...state, { name: userName, id: Date.now() }]);
    setUserName("");
  };

  return (
    <form onSubmit={submit} className="mb-4">
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="text"
        name="userName"
        className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your task..."
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        {defaultValue ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};
