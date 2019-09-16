import React, { Component } from 'react';
import Hero from './Hero';
import MoviesCategory from './MoviesCategory';
import './main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { category: "popular", title: "Popular" },
                { category: "top_rated", title: "Top Rated" },
                { category: "upcoming", title: "Upcoming" },
                { category: "now_playing", title: "Now Playing" },
            ]
        }
    }

    render() {
        return (
            <main>

                <Hero />
                {this.state.categories.map(c =>
                    <MoviesCategory
                        getId={this.props.getId}
                        title={c.title}
                        category={c.category} />)}
            </main>
        )
    }
}

export default Main;
