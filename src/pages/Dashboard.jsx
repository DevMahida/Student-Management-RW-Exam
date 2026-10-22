import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import DashboardHeader from "../components/DashboardHeader";

function Dashboard() {
   const navigate = useNavigate();

   const { teacher } = useSelector((state) => state.teacher);

   //  console.log("teacher", teacher);

   useEffect(() => {
      if (teacher == null) {
         navigate("/login");
      }
   }, [teacher]);

   return (
      <>
         <DashboardHeader/>

         <main>
            <div className="container">
               <div className="mt-5">
                  <h1>Welcome {teacher.name}</h1>
               </div>

               <h2 className="mt-5">Get Strated:</h2>

               <div className="row">
                  <div className="col-4">
                     <div className="Card p-4 text-white fw-medium rounded-4">
                        <span>
                           <strong>Step-1:</strong>
                        </span>
                        <p className="m-0">Go to the student page</p>
                     </div>
                  </div>
                  <div className="col-4">
                     <div className="Card p-4 text-white fw-medium rounded-4">
                        <span>
                           <strong>Step-2:</strong>
                        </span>
                        <p className="m-0">Add Student</p>
                     </div>
                  </div>
                  <div className="col-4">
                     <div className="Card p-4 text-white fw-medium rounded-4">
                        <span>
                           <strong>Step-3:</strong>
                        </span>
                        <p className="m-0">Maintain Student List </p>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </>
   );
}

export default Dashboard;
