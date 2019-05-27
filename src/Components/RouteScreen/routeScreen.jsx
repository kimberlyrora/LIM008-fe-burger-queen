import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const RouteScreen = () => (
<div>
<button>
	<Link to="/Waiter">MESERX</Link>
</button>
<button>
	<Link to="/Chef">CHEF</Link>
</button>
</div>
)
export default RouteScreen;
