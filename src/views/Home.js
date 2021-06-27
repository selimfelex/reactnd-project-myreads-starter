import React, { Component } from 'react';
import Shelf from '../components/Shelf';
// we nned to import getall function from the API
import {getAll} from '../BooksAPI';


class Home extends Component {
    
    state = {

      }
    // make Async request to get all books and add them to the shelf view
    async  componentDidMount()  {  try {
        const allBooks = await getAll();
        console.log(allBooks);
        this.props.addBooks(allBooks);

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
            <Shelf title='Currently Reading' />
            <Shelf title='Want To Read'/>
            <Shelf title='Read'/>


          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>  );
    }
}
 
export default Home;