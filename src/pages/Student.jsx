import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import DashboardHeader from '../components/DashboardHeader';
import { fetchStudent } from '../reducers/student.slice';

function Student() {

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { teacher } = useSelector((state) => state.teacher);
   const {students}  = useSelector((state) => state.student);

   console.log(teacher);
   console.log("student",students);
   


   useEffect(() => {
         if (teacher == null) {
            navigate("/login");
         }
      }, [teacher]);

   useEffect(()=>{
      if (teacher?.id) {
         dispatch(fetchStudent(teacher?.id));
      }
   },[dispatch])
  return (
    <>
      <DashboardHeader/>

      <main >
         <section className=''>
            <div className="container mt-5 text-bg-info p-3 rounded-4">
               <div className=''>
                  <h2>Student List</h2>
               </div>
            </div>
         </section>
      </main>
    </>
  )
}

export default Student