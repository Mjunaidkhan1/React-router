import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import  "./App.css";
import Product from "./Components/Product";
import ProductDetail from "./Components/ProductDetail";
import Error from "./Components/404";

export default function App() {
  return (
    <Router >
    

        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
           
        
          {/* <Route path="/about" component={About} /> */}
          <Route path="/products" component={Product} />
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          {/* <Route path="" component={Error} /> */}
           <Error />
         
        </Switch>
    </Router>
  );
}