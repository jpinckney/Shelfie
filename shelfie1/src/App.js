import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import Buttons from './components/Buttons'
import Logo from './components/Logo'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Product from './components/Product'
import Header from './components/Header'


class App extends Component {
  
  render() {
    return (
      <div>
        <div className='inputContainer'>
          <Logo />
          <Input />
          <Buttons />
        </div>
        <div>
          <Dashboard />
          <Product />
        </div>
        <Form />
        <Header />
      </div>
    );
  }
}
/** need to make sure state is changing with input and get the buttons to have an onclick */
export default App;
