import React, { useState } from "react";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-8">My To-Do List</h1>
        <Form setData={setData} />
        <div className="mt-8">
          {data.map((item) => (
            <Card setData={setData} key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
