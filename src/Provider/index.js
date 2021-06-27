// this file will handle state 
import React, { Component } from 'react';

class index extends Component {
    constructor() {
        super();
        this.state= {
            allBooks: [],
            wantToRead: [],
            read: [],
            currentlyReading: [],
            addBooks: allBooks => {
            const read = allBooks.filter(book => book.Shelf === "read");

            const wantToRead = allBooks.filter(book => book.Shelf === 'wantToRead');

            const currentlyReading = allBooks.filter(book => book.Shelf === "currentlyReading");

            this.setState({ allBooks, wantToRead, read, currentlyReading });

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