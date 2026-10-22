import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { RegisterTeacher } from "../reducers/teacher.slice";

function Register() {

   const naviagte = useNavigate();

   const dispatch = useDispatch();

   const initialData = {
      name: "",
      email: "",
      mNumber: "",
      password:''
   };

   const [registerData, setRegisterData] = useState(initialData);

   const handleRegisterData = (e) => {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
   };

   const SubmitForm = async(e) => {
      e.preventDefault();

      if (
         registerData.name == "" ||
         registerData.mNumber == "" ||
         registerData.email == "" || 
         registerData.password == ""
      ) {
         alert("Please fill the entire form!!");
         return;
      }

      const data = {
         name: registerData.name,
         email: registerData.email,
         mNumber: registerData.mNumber,
         password:registerData.password
      };

      setRegisterData(initialData);

      let res = await dispatch(RegisterTeacher(data));

      alert("Registration completed");

      naviagte('/login');


   };

   return (
      <>
         <div className="m-auto form mt-5 rounded-5 p-3">
            <Link className="text-black h2 text-decoration-none" to={`/`}>
               <i className="ri-arrow-left-s-line"></i>
            </Link>
            {/* title */}
            <div className="text-center">
               <h1>Registration Form</h1>
               <span>
                  <strong>Register as a teacher</strong>
               </span>
            </div>

            {/* form */}
            <form onSubmit={SubmitForm} className="mt-4" method="post">
               <div>
                  <label className="form-label" htmlFor="name">
                     Name:
                  </label>
                  <input
                     className="form-control"
                     type="text"
                     name="name"
                     value={registerData.name}
                     onChange={handleRegisterData}
                     id="name"
                  />
               </div>
               <div className="mt-3">
                  <label className="form-label" htmlFor="email">
                     Email:
                  </label>
                  <input
                     className="form-control"
                     type="email"
                     name="email"
                     value={registerData.email}
                     onChange={handleRegisterData}
                     id="email"
                  />
               </div>
               <div className="mt-3">
                  <label className="form-label" htmlFor="mNumber">
                     Mobile Number:
                  </label>
                  <input
                     className="form-control"
                     type="text"
                     name="mNumber"
                     id="mNumber"
                     value={registerData.mNumber}
                     onChange={handleRegisterData}
                  />
               </div>
               <div className="mt-3">
                  <label className="form-label" htmlFor="password">
                     Password
                  </label>
                  <input
                     className="form-control"
                     type="password"
                     name="password"
                     id="password"
                     value={registerData.password}
                     onChange={handleRegisterData}
                  />
               </div>

               <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                     Register
                  </button>
               </div>
            </form>
         </div>
      </>
   );
}

export default Register;
