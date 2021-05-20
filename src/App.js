import React, {useEffect} from "react";
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Product from './Components/Product';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import Orders from './Components/Orders';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";


function App() {
    
    const [{ user }, dispatch] = useStateValue();
    
	useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="App">
      <Router>
	      <Switch>
	          <Route path="/login">
	            <Login/>
	          </Route>
            <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route path="/payment">
            <Header />
              <Payment />
          </Route>
		      <Route path='/'>
		         <Header/>
		         <Home/>
		      </Route>
	      </Switch>
      </Router>
    </div>
  );
}

export default App;
