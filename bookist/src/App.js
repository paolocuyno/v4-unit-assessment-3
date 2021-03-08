
import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist';
import Shelf from './Components/Shelf';
import books from './books'

class App extends Component{
 constructor(){
   super()
 
  this.state={
    books:[]
  }




}
 render(){
  return (
    <div className="App">
      <header className="App-header">
       <Header/> 
      </header>
      <section className='bookshelf'>
      <Booklist books={this.state.books}/>
      <Shelf/>
      </section>
    </div>
  );
}
}
export default App;
