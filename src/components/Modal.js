import React, { Component } from "react";

class Modal extends Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <h1>{this.props.id}</h1>
      </div>
    );
  }
}

export default Modal;
