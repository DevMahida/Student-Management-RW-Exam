import React from "react";
import { Link } from "react-router";

function DashboardHeader() {
   return (
      <header>
         <div className="container text-bg-primary p-3 mt-3 rounded-pill">
            <div className="d-flex justify-content-between">
               <h2 className="m-0">StudyHard</h2>

               <ul class="nav">
                  <li class="nav-item">
                     <Link
                        class="nav-link text-white fw-bold"
                        aria-current="page"
                        to={`/dashboard`}
                     >
                        Dashboard
                     </Link>
                  </li>
                  <li class="nav-item">
                     <Link
                        class="nav-link text-white fw-bold"
                        to={`/dashboard/student`}
                     >
                        Students
                     </Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link text-white fw-bold" to={`/`}>
                        Logout
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default DashboardHeader;
