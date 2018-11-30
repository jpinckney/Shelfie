import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      name: '',
      price: []
    }
    // this.handleUpdateImage_Url = this.handleUpdateImage_Url.bind(this);
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleUpdatePrice = this.handleUpdatePrice.bind(this);
  }


  // updateImage_Url(event) {
  //   this.setState({
  //     image_url: event.target.value
  //   });
  // }
  handleUpdateName(productName) {
    this.setState({ name: productName })
  }

  handleUpdatePrice(productPrice) {
    this.setState({ price: productPrice })
  }
  render() {
    return (
      <div>
        {/* <h5>Image url: <input value={ this.props.updateImage_Url } onChange={ event => this.props.updateImage_Url(event) }></input></h5> */}
        <h5>Name: <input onChange={ event => this.handleUpdateName(event.target.value) } type='text' /></h5>
        <h5>Price: <input onChange={ event => this.handleUpdatePrice(event.target.value) } type='text'></input></h5>
      </div>
    );
  }
}

export default Input;