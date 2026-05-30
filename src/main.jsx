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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

     
      <Route index element={<Home />} />

  
      <Route path="home" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);