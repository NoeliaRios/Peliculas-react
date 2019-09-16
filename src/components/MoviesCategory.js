import React, {Component} from 'react';
import Movie from './Movie';
import './moviesCategory.css';

const API_KEY = 'a70dbfe19b800809dfdd3e89e8532c9e';

class MoviesCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //creamos el estado
            movies: [],            
        }
    }

    componentDidMount() { //se escuta una vez que el componente se muestre
        // const category = this.props.category;
        const { props: { category} } = this; //DESTRUCTURING

        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies: data.results.slice(0,5)            
            })

        })
    }
    

    render(){
        console.log(this.state.movies)
        return(
            <div>
                <h2>{this.props.title}</h2>

                <div className = "movies">
                    {/* {this.state.movies.map( m => <p>{m.original_title}</p>)} */}

                    {this.state.movies.map( m => 
                    <Movie getId ={this.props.getId} data = {m} />)}
                    
                </div>
            </div>
        )
    }
}

export default MoviesCategory;