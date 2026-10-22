import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
   students: [],
   error: null,
   loading: null,
};

export const fetchStudent = createAsyncThunk(
   "student/fetchStudent",
   async (id, { rejectWithValue }) => {
      try {
         console.log("res >>>>>>",id, `http://localhost:3001/students?teacherID=${id}`);
         let res = await axios.get(
            `http://localhost:3001/students?teacherID=${id}`
         );
         
         console.log("res",res);
         return res.data;
      } catch (error) {
         console.log(error);
         
         rejectWithValue("Error:- ", error.message);
      }
   },
);

const StudentSlice = createSlice({
   name: "students",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchStudent.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.students = action.payload;
         })
         .addCase(fetchStudent.pending, (state) => {
            state.loading = true;
            state.error = false;
         })
         .addCase(fetchStudent.rejected, (state) => {
            state.loading = false;
            state.error = true;
         });
   },
});

export default StudentSlice.reducer;
