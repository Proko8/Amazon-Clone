import React, { useEffect } from "react";
import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout"
import Login from "./Components/Login"
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: "SET__USER",
          user: authUser,
        })
      }else{
        dispatch({
          type: "SET__USER",
          user: null,
         })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
