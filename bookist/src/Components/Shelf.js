import React, { Component } from 'react';


class Shelf extends React.Component {
    render() {
        var mappedBooks = this.props.books.map((book, index) => {
            return (<div
                onClick={() => this.props.onClick(book)}>
               
                <b>{book.title}</b><br />
              
            </div>
            );
        });

        return (
            <div className='shelf'>
                
                <h3>Shelf</h3>
                <div>
                    {mappedBooks}
                </div >
            </div>
        );
    }
};
export default Shelf