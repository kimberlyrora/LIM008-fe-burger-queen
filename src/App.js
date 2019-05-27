import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Waiter from './Components/meseroScreen/menuBlock';
import About from './Components/chefScreen/ordersToCook';
import ordersToCook from './Components/chefScreen/ordersToCook';
import meseroScreen2 from './Components/meseroScreen/meseroScreen2/meseroScreen2';
import RouteScreen from './Components/RouteScreen/routeScreen';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route path="/" component={RouteScreen} exact />
      <Route path="/Waiter" component={Waiter} />
      <Route path="/Chef" component={ordersToCook} />
        {/* <button><Route to="/Waiter2">Orders to Serve</Link></button>
        <button><Route to="/Chef">Kitchen</Link></button> */}
        {/* <Switch>
          <Route exact path="/Waiter" component={Waiter} />
          <Route exact path="/Waiter2" component={meseroScreen2} />
          <Route exact path="/Chef" component={ordersToCook} />
        </Switch> */}
        {/* <Waiter /> */}
        {/* <Link to="/about/">About</Link> */}
      </div>
    {/* /* <Route path="/about/" component={About} /> */ }
  </BrowserRouter>
);
export default App;
