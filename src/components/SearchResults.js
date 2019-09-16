import React, { Component } from "react";
// import Main from './Main';
import Movie from "./Movie";
import "./searchResults.css";

const API_KEY = "a70dbfe19b800809dfdd3e89e8532c9e";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  // componentDidMount() {
  //   let direccionDeBusqueda = "";
  //   if (this.props.query) {
  //     direccionDeBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.props.query}&page=1`;
  //   } else if (this.props.category) {
  //     direccionDeBusqueda = `https://api.themoviedb.org/3/movie/${this.props.category}?api_key=${API_KEY}&language=en-US&page=1`;
  //   }
  //   fetch(direccionDeBusqueda)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         movies: data.results
  //       });
  //     });
  // }

  componentDidMount() {
    this.getMovies(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getMovies(nextProps);
  }

  getMovies = data => {
    let direccionDeBusqueda = data.query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${data.query}&page=1`
      : `https://api.themoviedb.org/3/movie/${data.category}?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(direccionDeBusqueda)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  };

  // getMovies = data => {
  //     const searchedMovie = this.props.query;
  //     // const { props: { category} } = this; //DESTRUCTURING

  //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.data.query}`)
  //         .then(response => response.json())
  //         .then(data => {
  //             this.setState({
  //                 movies: data.results,
  //             })

  //         })
  // }

  render() {
    return (
      <div className="searched_page">
        <h1>Search Results</h1>
        {/* notemos que aunque este componente no importa el css "movies.css", 
        de todos modos la clase "movies" usa ese estilo (esta en flex)
        Muy importante recordar que el CSS se ejecuta para todos los elementos de nuestro codigo
        que tengan el mismo nombre de clase, aunque no lo importemos explicitamente aqui */}

        <div className="result_movies">
          {this.state.movies.map(m => (
            <Movie data={m} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchResults;
