import React from 'react'
import { Route, Switch } from 'react-router-dom';


import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact'
import Error from './pages/Error';
import FaqPage from './pages/FaqPage';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import './Css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <>
      
      
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/faq' exact component={FaqPage} />
        <Route path='/forget-password' exact component={ForgetPassword} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/contact' exact component={Contact} />
        <Route component={Error} />
      </Switch>
      
    </>
  );
}
