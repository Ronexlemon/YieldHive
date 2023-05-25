import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { LendingYieldContract } from "../ContractAddress/Address";
import LendingAbi from "../Abis/LendingV2.json"
import {useContractWrite,useContractRead} from "wagmi"
import { useAccount } from "wagmi";

const DashBoardCard = () => {
  const {address,isConnected} = useAccount()
  const [request, setRequest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [indexValue,setIndex] = useState();
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

  const handleRepay = (_index) => {
    setIndex(_index)
    setShowModal(true);
  };

  const handleSendRequest = async () => {
    // Logic for sending the request
    
    setShowModal(false);
  };

  const handleCancelRequest = () => {
    setShowModal(false);
  };

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
              <button className="border border-green-100 w-20 rounded">REPAY</button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="absolute bg-white w-1/2 p-6 border border-gray-400 rounded-lg shadow">
       
      
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
