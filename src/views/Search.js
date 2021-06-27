import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../BooksAPI';
import { getAll } from '../BooksAPI';
import {search} from '../BooksAPI';

class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            query: "",
            books: []
        }
    }

    async componentDidMount() {
        try {
            const books = await getAll();
            this.props.addBooks(books);

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = async e => {
        try {

            const query = e.target.value;
            this.setState({ query });

            if (query.trim()) {
                
                const results = await search(query);
                if (results.error) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books: results })
                }
            } else {
                this.setState({ books: [] });
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to={"/"}>Back</Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>);
    }
}

export default Search;