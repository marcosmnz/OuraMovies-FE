import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login/Login.tsx"
import { SignUp } from "./components/Signup/Signup.tsx";
import { AuthProvider } from "./auth/AuthProvider.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import Profile from "./routes/Profile.tsx";

import "./index.css";
import Navbar from "./components/Navbar/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  }, 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: 
        <Navbar>
          <Dashboard />
          </Navbar>,
      },
      {
        path: "/me",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
