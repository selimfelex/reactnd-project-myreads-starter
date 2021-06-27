import React, { Component } from 'react';
import Shelf from '../components/Shelf';
// we nned to import getall function from the API
import {getAll} from '../BooksAPI';


class Home extends Component {
    

    // make Async request to get all books and add them to the shelf view
    async  componentDidMount()  {
        try {
        const books = await getAll();
        console.log(books);
        this.props.addBooks(books);

    } catch (error) {
        console.log(error);
    }}
    // filter shelfs by shelfCategory

    render() { 
        return (<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf title='Currently Reading' 
            books={this.props.currentlyReading}
            moveBook={this.props.moveBook}/>

            <Shelf title='Want To Read'
            books={this.props.wantToRead}
            moveBook={this.props.moveBook}/>

            <Shelf title='Read'
            books={this.props.read}
            moveBook={this.props.moveBook}/>


          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>  );
    }
}
 
export default Home;