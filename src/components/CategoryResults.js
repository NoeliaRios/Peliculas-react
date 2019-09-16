import React, { Component } from "react";
import Movie from "./Movie";

const API_KEY = "a70dbfe19b800809dfdd3e89e8532c9e";

class CategoryResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    //se escuta una vez que el componente se muestre
    const searchedCategory = this.props.category;
    // const { props: { category} } = this; //DESTRUCTURING

    fetch(
      `https://api.themoviedb.org/3/movie/${searchedCategory}?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
          titulo: searchedCategory
        });
      });
  }

  render() {
    console.log("hola", this.props.category);
    return (
      <div className="searched_page">
        <div className="category_results">
          <h1>{this.state.titulo}</h1>
          <div className="result_movies">
            {this.state.movies.map(m => (
              <Movie data={m} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryResults;
