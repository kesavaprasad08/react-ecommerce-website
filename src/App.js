import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import StorePage from "./pages/Store";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/store", element: <StorePage /> },
  { path: "/about", element: <AboutPage />},
  { path: "/contactus", element: <ContactUs />}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
