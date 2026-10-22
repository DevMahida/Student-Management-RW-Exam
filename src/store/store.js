import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../reducers/student.slice";
import TeacherSlice from '../reducers/teacher.slice';

const store = configureStore({
   reducer: {
      student: StudentSlice,
      teacher: TeacherSlice
   },
});

export default store;
