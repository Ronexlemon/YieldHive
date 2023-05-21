import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import DashBoardCard from "../components/dashboardCard";

const DashBoard = ()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black">
           <NavBar/>
           <DashBoardCard/>

           <Footer/>
          

        </div>

    )
}
export default DashBoard;