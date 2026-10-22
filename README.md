# StudyHard — Student Management System

StudyHard is a React-based student management system for teachers. It provides a simple landing page, teacher registration and login flows, a protected dashboard, and a student list backed by a local JSON Server API.

## Features

- Teacher registration with name, email, mobile number, and password
- Teacher login using the local API
- Dashboard access control that redirects unauthenticated users to the login page
- Student data filtered by the logged-in teacher
- Client-side routing with React Router
- Global state management with Redux Toolkit
- Local REST API powered by JSON Server
- Bootstrap-based layout and styling

## Tech stack

- React 19
- Vite
- React Router
- Redux Toolkit and React Redux
- Axios
- Bootstrap 5
- JSON Server

## Requirements

- Node.js 18 or newer
- npm

## Getting started

1. Clone the repository and enter the project directory:

   ```bash
   git clone <repository-url>
   cd StudentManagementSystem
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the JSON Server API in a separate terminal:

   ```bash
   npm run server
   ```

   The API runs at `http://localhost:3001` and uses [`db.json`](./db.json) as its data source.

4. Start the Vite development server:

   ```bash
   npm run dev
   ```

5. Open the URL shown by Vite, usually `http://localhost:5173`.

The frontend expects the JSON Server API to be available on port `3001`. Start both processes during local development.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start JSON Server on port `3001` using `db.json` |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Application routes

| Route | Description |
| --- | --- |
| `/` | Landing page with registration and login links |
| `/register` | Teacher registration form |
| `/login` | Teacher login form |
| `/dashboard` | Teacher dashboard; redirects to `/login` when no teacher is logged in |
| `/dashboard/student` | Student list for the logged-in teacher; redirects to `/login` when needed |

## API resources

The local JSON Server database contains two resources:

- `teachers` — teacher profile and authentication records
- `students` — student records associated with a teacher through `teacherID`

Useful endpoints include:

```text
GET  http://localhost:3001/teachers?email=<email>
POST http://localhost:3001/teachers
GET  http://localhost:3001/students?teacherID=<teacher-id>
```

`db.json` is intended for local development. Do not use its sample data or this client-side authentication approach as-is for production: passwords should be handled by a secure backend and stored using a password-hashing strategy.

## Project structure

```text
.
├── db.json
├── public/
├── src/
│   ├── components/
│   │   └── DashboardHeader.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Student.jsx
│   │   └── home.jsx
│   ├── reducers/
│   │   ├── student.slice.js
│   │   └── teacher.slice.js
│   ├── store/
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Development notes

- Redux state is configured in [`src/store/store.js`](./src/store/store.js).
- Teacher registration and login requests are implemented in [`src/reducers/teacher.slice.js`](./src/reducers/teacher.slice.js).
- Student fetching is implemented in [`src/reducers/student.slice.js`](./src/reducers/student.slice.js).
- The current student page fetches and stores the teacher's students; additional student CRUD controls can be added there as the project evolves.
- The current login state is held in memory and is cleared when the page is reloaded.

## Production considerations

Before deploying, replace the JSON Server backend with a production API and add:

- Secure authentication and session management
- Password hashing and credential validation on the server
- Server-side authorization for teacher/student access
- Environment-based API URL configuration
- Form validation and user-facing request error states
