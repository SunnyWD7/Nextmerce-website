import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Component/Layout/Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Blog from "./Component/Blog/Blog.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import SignIn from "./Component/SignIn/SignIn.jsx";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Navbar/Footer WALA Layout - sirf logged in users */}
      <Route path="/" element={<Layout />}>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
      </Route>

      {/* Navbar/Footer NAHI - signin/signup ke liye */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);