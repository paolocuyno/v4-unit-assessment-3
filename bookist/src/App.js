
import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist';
import Shelf from './Components/Shelf';
import books from './books'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books,
      shelf: [],
    }
  }

  addToShelf(book) {
    var updatedShelf = this.state.shelf
    updatedShelf.push(book);
    this.setState({
      shelf: updatedShelf,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Booklist books={this.state.books} onClick={this.addToShelf.bind(this)} />
        <Shelf className='shelf' books={this.state.shelf} />
      </div>
    );
  }
}


export default App;