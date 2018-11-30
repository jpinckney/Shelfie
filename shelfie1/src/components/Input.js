import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      name: '',
      price: []
    }
    // this.updateName = this.updateName.bind(this);
    // this.updatePrice = this.updatePrice.bind(this);
    // this.updateImage_Url = this.updateImage_Url.bind(this);
  }


  // updateImage_Url(event) {
  //   this.setState({
  //     image_url: event.target.value
  //   });
  // }
  handleUpdateName(prodcutName) {
    this.setState({name: prodcutName})}

  // updatePrice(event) {
  //   this.setState({
  //     price: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <h5>Image url: <input value={ this.props.updateImage_Url } onChange={ event => this.props.updateImage_Url(event) }></input></h5>
        <h5>Name: <input onChange={ event => this.handleUpdateName(event.target.value) } type='text'> </input></h5>
        <h5>Price: <input value={ this.props.updatePrice } onChange={ event => this.props.updatePrice(event) }></input></h5>
      </div>
    );
  }
}

export default Input;