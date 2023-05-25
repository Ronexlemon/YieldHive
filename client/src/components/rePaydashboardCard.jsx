import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { useContractWrite,useContractRead } from "wagmi";
import { useAccount } from "wagmi";
import { LendingYieldContract } from "../ContractAddress/Address";
import LendingAbi from "../Abis/LendingV2.json";

const DashBoardCard = () => {
  const {address}= useAccount();
  const [request, setRequest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //contract reads
  const {data:requests,isError} =  useContractRead({
    address:LendingYieldContract,
    abi: LendingAbi,
    functionName: "getMyRequest",
    args:[address]
  })
  const details = [
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 },
    { name: "Ronex", age: 4 }
  ];

  const handleCreateRequest = () => {
    setShowModal(true);
  };

  const handleSendRequest = async () => {
    // Logic for sending the request
    setShowModal(false);
  };

  const handleCancelRequest = () => {
    setShowModal(false);
  };
  const handleRepayment = (_index)=>{
    setIndex(_index);
    setShowModal(true);

  }

  return (
    <div className="inset-0 flex justify-center mt-10 h-3/4">
      <div className="w-3/4 p-6 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id="open-btn">
       

        <div className="text-white flex justify-evenly">
          <p>Loan</p>
          <p>Collateral</p>
          <p>Interest</p>
          <p>Term</p>
          <p>Status</p>
          <p></p>
        </div>

        <div className="text-white text-sm h-96 overflow-y-scroll">
          {details.map((element, index) => (
            <div
              key={index}
              className="bg-gray-700 flex justify-around mt-4 rounded h-10 items-center"
            >
              <p>{element.name}</p>
              <p>{element.age}</p>
              <p>{element.name}</p>
              <p>{element.name}</p>
              <p>{element.age}</p>
              <button  onClick={handleRepayment(index)} className="border border-green-100 w-20 rounded">REPAY</button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="absolute bg-white w-1/2 p-6 border border-gray-400 rounded-lg shadow">
        <div className="text-sm  flex flex-col gap-2 ">
          <div className="grid grid-cols-3 gap-2 items-center">
            <span>Loan</span>
            <select>
              <option>ADA</option>
              <option>USDC</option>
            </select>
            <input className="border border-gray-400 w-28" type="text" />
          </div>
         

          <div className="grid grid-cols-3 gap-2 items-center">
            <span className="">Collateral</span>
            <select>
              <option>ADA</option>
              <option>USDC</option>
            </select>
            <input className="border border-gray-400 w-28" type="text" />
          </div>
          <div className="grid grid-cols-3 gap-2 items-center">
            <span>Interest</span>
            <select>
              <option>ADA</option>
              <option>USDC</option>
            </select>
            <input className="border border-gray-400 w-28" type="text" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span>Time Period</span>
            <input className="border border-gray-400 w-28" type="date" />
          </div>
          </div>
      
          <div className="flex justify-around mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded " onClick={handleCancelRequest}>
              Decline
            </button>
            <button className="bg-gray-400 text-white py-2 px-4 rounded ml-2" onClick={handleSendRequest}>
              Confirm
            </button>
          </div>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default DashBoardCard;
