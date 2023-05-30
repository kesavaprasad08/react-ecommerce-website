import React from "react";
import "./App.css";
import {Route } from "react-router-dom";

import HomePage from "./pages/Home";
import StorePage from "./pages/Store";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductsPage from "./pages/products/ProductsPage";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/store", element: <StorePage /> },
//   { path: "/about", element: <AboutPage />},
//   { path: "/contactus", element: <ContactUs />},
//   { path: "/colors", element: <Colors/>}

//   //<RouterProvider router={router}></RouterProvider>
// ]);

const App = () => {
  return <div>
    <Switch>
    <Route path='/' exact>
      <HomePage/>
    </Route>
    <Route path='/store' exact>
      <StorePage />
    </Route>
    <Route path='/about'>
      <AboutPage />
    </Route>
    <Route path='/contactus'>
      <ContactUs />
    </Route>
    <Route path='/store/:productId'>
      <ProductsPage/>
    </Route>
    </Switch>
  </div>;
};

export default App;
