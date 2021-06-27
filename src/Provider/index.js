// this file will handle state 
import React, { Component } from 'react';

class index extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            wantToRead: [],
            read: [],
            currentlyReading: [],
            addBooks: books => {
            const read = books.filter(book => book.shelf === "read");
            console.log(books)
            console.log(read);

            const wantToRead = books.filter(book => book.shelf === 'wantToRead');

            const currentlyReading = books.filter(book => book.shelf === "currentlyReading");

            this.setState({ books, wantToRead, read, currentlyReading });
            

        },
        moveBook: (book, newShelf, allShelfs) => {
            const newBooks = this.state.books.map(allBooks => {
                const foundID = allShelfs[newShelf].find(
                    bookID => bookID === allBooks.id);
                if (foundID) {
                    allBooks.shelf = newShelf;
                } return allBooks;
            });
            this.state.addBooks(newBooks);
        }
    };
}

        render()
         {
            return (
                <MyContext.Provider value={{ ...this.state }}>
                    {this.props.children}
                </MyContext.Provider>
            );
        }
    }
    export const MyContext = React.createContext();
    export default index;