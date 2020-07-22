import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Data from './data'
import {Router,Route,hashHistory} from 'react-router';
ReactDOM.render(
// <App />,
<Router history ={hashHistory} >
<Route path="/"component={Data} />
<Route path="data/:id" component={App} />
{/* <Route path="location" component={Location}/> */}
</Router>,

document.getElementById('root')
);