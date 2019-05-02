import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Waiter from './Components/meseroScreen/menuBlock';
import About from './Components/chefScreen/ordersToCook';

const App = () => (
  <Router>
    <div className="App">
      <div className="image">
        <Waiter />
        {/* <Link to="/about/">About</Link> */}
      </div>
    </div>
    {/* <Route path="/about/" component={About} /> */}
  </Router>
);
export default App;
