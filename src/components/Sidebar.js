import React, { Component } from 'react';
import './sidebar.css';
import Movie from './Movie';

const API_KEY = 'a70dbfe19b800809dfdd3e89e8532c9e';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    handleClick = e => {
        let titulo = e.target.id
        this.props.handleCategory(titulo)

    }


    render() {
        
        return (
            <div className="nav_box">

                <div className="category_wrapper">
                    <div id="popular" onClick={this.handleClick}>Popular</div>

                    <div id="top_rated" onClick={this.handleClick}>Top Rated</div>

                    <div id="upcoming" onClick={this.handleClick}>Upcoming</div>

                    <div id="now_playing" onClick={this.handleClick}>Now Playing</div>
                </div>




            </div>
        )

    }

}

export default Sidebar;


