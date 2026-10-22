import React from "react";
import { Link } from "react-router";

function Home() {
   return (
      <>
         <header>
            <div className="container text-bg-primary p-3 mt-3 rounded-pill">
               <div className="d-flex justify-content-between">
                  <h2 className="m-0">StudyHard</h2>

                  <ul class="nav">
                     <li class="nav-item">
                        <Link
                           class="nav-link text-white fw-bold"
                           aria-current="page"
                           to={`/`}
                           >
                           Home
                        </Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link text-white fw-bold" to={`/register`}>
                           Register
                        </Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link text-white fw-bold" to={`/login`}>
                           Login
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </header>

         <main>
            <div className="container">
               <section className="hero mt-5 rounded-4 py-5 px-4 d-flex flex-column justify-content-around">
                  {/* title */}
                  <div className="">
                     <h1>Welcome to StudyHard</h1>
                     <p className="fw-medium">
                        Your own student management System
                     </p>
                  </div>

                  <div className="row g-3">
                     <div className="col-4">
                        <div className="Card p-4 text-white fw-medium rounded-4">
                           <span>
                              <strong>Step-1:</strong>
                           </span>
                           <p className="m-0">Click on Register for registering as a teacher</p>
                        </div>
                     </div>
                     <div className="col-4">
                        <div className="Card p-4 text-white fw-medium rounded-4">
                           <span>
                              <strong>Step-2:</strong>
                           </span>
                           <p className="m-0">Fill the form to get registered</p>
                        </div>
                     </div>
                     <div className="col-4">
                        <div className="Card p-4 text-white fw-medium rounded-4">
                           <span>
                              <strong>Step-3:</strong>
                           </span>
                           <p className="m-0">Login Through Login Tab</p>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </main>
      </>
   );
}

export default Home;
