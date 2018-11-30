import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import Buttons from './components/Buttons'


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     image_url: '',
  //     name: '',
  //     price: 
  //   }
  // }

  // updateImage_Url() {

  // }
  // updateName() {

  // }
  // updatePrice() {

  // }

  render() {
    return (
      <div>
        <div className='inputContainer'>
          <Input />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
