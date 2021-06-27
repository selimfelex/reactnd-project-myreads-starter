//this component will handle the search buttom render nad route 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Srch extends Component {
    render() {
        return (
            <div className="open-search">
                <Link to={"/search"}><button></button></Link>
            </div>
        );
    }
}