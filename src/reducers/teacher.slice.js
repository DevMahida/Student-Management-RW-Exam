import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   teacher: null,
   teachers: [],
   error: null,
   loading: null,
};

export const RegisterTeacher = createAsyncThunk(
   "teacher/registerTeacher",
   async (data, { rejectWithValue }) => {
      try {
         let res = await axios.post("http://localhost:3001/teachers", data);

         return res.data;
      } catch (error) {
         return rejectWithValue("Error:- ", error.message);
      }
   },
);

export const loginTeacher = createAsyncThunk(
   "teacher/loginTeacher",
   async (data, { rejectWithValue }) => {
      
      try {
         let res = await axios.get(
            `http://localhost:3001/teachers?email=${(data.email)}`,
         );
         
         // console.log("login:-",res);
         if (res.data.length == 0) {
            alert("No Teacher data found");
            return;
         }

         if (data.password != res.data[0].password) {
            alert("Password Doesn't match");
            return;
         }

         return res.data[0];
      } catch (error) {
         return rejectWithValue("Error:- ", error.message)
      }
   },
);

const TeacherSlice = createSlice({
   name: "teacher",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(RegisterTeacher.pending, (state) => {
            state.loading = true;
            state.error = false;
         })
         .addCase(RegisterTeacher.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.teachers.push(action.payload);
         })
         .addCase(RegisterTeacher.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(loginTeacher.pending, (state) => {
            state.loading = true;
            state.error = false;
         })
         .addCase(loginTeacher.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.teacher = action.payload;
         });
   },
});

export default TeacherSlice.reducer;
