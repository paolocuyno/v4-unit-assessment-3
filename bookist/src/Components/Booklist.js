import React from 'react';
import SearchBar from './SearchBar';

class BookList extends React.Component {
  
        render() {
            var mappedBooks = this.props.books.map((book, index) => {
                return (<div 
                    onClick={() => this.props.onClick(book)}>
                    <img src={book.img}/>
                    {book.title}<br />
                    {book.author}<br />
                </div>
                );
            });
    
            return (
                <div className='map'>
                <SearchBar classname='search'/>
                <div className='bookshelf'>
                    {mappedBooks}</div>
                </div >
            );
        }
    };
    export default BookList