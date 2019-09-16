import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import SearchResults from "./components/SearchResults";
import CategoryResults from "./components/CategoryResults";
import Movie from "./components/Movie";
import Modal from "./components/Modal";

class App extends Component {
  //los componenetes de funcion no pueden pasar info a sus hijos, por eso hay q crear un componente de clase.

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleQuery = q => {
    //la peli está guardad en queryparam, se la queremos pasar a searchresults. la peli que escribieron en el input
    this.setState({
      //el estado son datos que voy a guardar, son parametros que voy a ir pasando entre componentes
      searchedMovie: q,
      searchedCategory: ""
    });
  };

  handleCategory = q => {
    this.setState({
      searchedCategory: q,
      searchedMovie: ""
    });
  };

  handlePhoto = q => {
    this.setState({
      touchedMovie: q
    });
  };

  getId = id => {
    console.log(id);
    this.setState({
      id: id
    });
  };

  render() {
    return (
      //se pueden utilizar operadores ternarios
      <div className="App">
        {this.state.id ? <Modal id={this.state.id} /> : ""}
        <Navbar //app le pasa esta funcion a navbar. Una vez que navbar posee una peli en el input entonces existe query
          handleQuery={this.handleQuery}
        />
        <Sidebar handleCategory={this.handleCategory} />

        {/* {this.state.query || this.state.category ? (
          <SearchResults
            query={this.state.query}
            category={this.state.category}
          />
        ) : (
          <Main getId={this.getId} />
        )} */}
        <Movie handlePhoto={this.handlePhoto} />
        {this.state.searchedMovie ? (
          <SearchResults query={this.state.searchedMovie} />
        ) : (
          ""
        )}
        {/* si existe thisstatesearchedmovie muestra searchresults sino main */}
        {this.state.searchedCategory ? (
          <CategoryResults category={this.state.searchedCategory} />
        ) : (
          ""
        )}
        {!this.state.searchedCategory && !this.state.searchedMovie ? (
          <Main getId={this.getId} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
