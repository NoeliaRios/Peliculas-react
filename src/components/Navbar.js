import React, { Component } from "react"; //importo cosas que necesito usar
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({
      query: e.target.value //lo guarda en el estado
    });
  };

  handleSubmit = e => {
    //se ejecuta cuando hacemos enter en el imput.
    e.preventDefault();
    const query = this.state.query;

    this.props.handleQuery(query); //llamamos a la función que habiamos puesto en app, en nuestro "padre" osea app.js ejecutamos el componente q pasó su padre
  };

  render() {
    return (
      <div className="main_pic">
        <img
          src="https://www.pinclipart.com/picdir/big/317-3176087_joker-bat-signal-robin-transprent-png-batsignal-logo.png"
          name="logo"
          alt="Logo"
        />

        <div className="login">Buscador</div>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" />
          {/* //cuando se coloca algo en el input se ejecuta onchange*/}
        </form>
      </div>
    );
  }
}

export default Navbar; //exporto cosas que voy a usar
