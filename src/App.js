import React,{Suspense} from "react";
import "./App.css";
import {Route } from "react-router-dom";
import { useContext } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import HomePage from "./pages/Home";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
// import Login from "./pages/Login";
import AuthContext from "./store/auth-context";


const StorePage = React.lazy(() => import('./pages/Store'));
const AboutPage= React.lazy(() => import('./pages/About'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const ProductsPage =React.lazy(() => import('./pages/products/ProductsPage'));
const Login = React.lazy(() => import('./pages/Login'));

const App = () => {
const authCtx = useContext(AuthContext);


  return <div>
    <Suspense fallback={<p>Loading...</p>}>
    <Switch>
    <Route path='/' exact>
      <HomePage/>
    </Route>
    {authCtx.isLoggedIn && (<Route path='/store' exact>
      <StorePage />
    </Route>)}
    
    <Route path='/about'>
      <AboutPage />
    </Route>
    <Route path='/contactus'>
      <ContactUs />
    </Route>
    <Route path='/store/:productId'>
      <ProductsPage/>
    </Route>
    {!authCtx.isLoggedIn &&<Route path='/auth'>
<Login/>
    </Route>}
    <Route path='*'>
      <Redirect to='/auth' />
    </Route>
    </Switch>
    </Suspense>
  </div>;
};

export default App;
