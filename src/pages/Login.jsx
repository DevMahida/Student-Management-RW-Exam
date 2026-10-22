import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginTeacher } from "../reducers/teacher.slice";

function Login() {

   const dispatch = useDispatch();
   const navigate = useNavigate();


   const initialData = {
      email: "",
      password: "",
   };

   const [loginData, setLoginData] = useState(initialData);

   const handleLoginData = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
   };

   const submitData = async(e) => {
      e.preventDefault();

      let data={
         email:loginData.email,
         password:loginData.password
      }
      
      let res = await dispatch(loginTeacher(data));

      navigate('/dashboard');

   }

   return (
      <>
         <div className="m-auto form mt-5 rounded-5 p-3">
            <Link className="text-black h2 text-decoration-none" to={`/`}>
               <i className="ri-arrow-left-s-line"></i>
            </Link>
            {/* title */}
            <div className="text-center">
               <h1>Login Form</h1>
               <span>
                  <strong>Get access to Dashboard</strong>
               </span>
            </div>

            {/* form */}
            <form onSubmit={submitData} className="mt-4">
               <div className="mt-3">
                  <label className="form-label" htmlFor="email">
                     Email:
                  </label>
                  <input
                     className="form-control"
                     type="email"
                     name="email"
                     value={loginData.email}
                     onChange={handleLoginData}
                     id="email"
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
                     value={loginData.password}
                     onChange={handleLoginData}
                  />
               </div>

               <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                     Login
                  </button>
               </div>
            </form>
         </div>
      </>
   );
}

export default Login;
