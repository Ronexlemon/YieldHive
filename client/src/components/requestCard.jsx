import React from "react";
import { useState } from "react";

const RequestCard = () => {
  const [request, setRequest] = useState(false);
  const details = [
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 },
    { "name": "Ronex", "age": 4 }
  ];

  return (
    <div className="flex justify-center mt-10 h-3/4">
      <div className="w-3/4 p-6 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end items-end">
          <button className="bg-orange-400 rounded-sm">
            Create Request
          </button>
        </div>

        <div className="text-white flex justify-evenly">
          <p>Loan</p>
          <p>Collateral</p>
          <p>Interest</p>
          <p>Term</p>
          <p>Status</p>
          <p></p>
        </div>

        <div className="text-white text-sm   h-96 overflow-y-scroll">
          {details.map((element, index) => (
            <div
              key={index}
              className="border border-blue-200 flex justify-around mt-4 rounded h-10 items-center"
            >
              <p>{element.name}</p>
              <p>{element.age}</p>
              <p>{element.name}</p>
              <p>{element.name}</p>
              <p>{element.age}</p>
              <button>Lend</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
