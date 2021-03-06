
import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist';
import Shelf from './Components/Shelf';
import Data from './data'

class App extends Component{
 constructor(){
   super()
 
  this.state={
    books:[<Data/>],
    shelf:[]
  }
// this.filterN=this.clearSearch.bind(this)  
// this.addToShelf=this.addToShelf.bind(this);
// this.clearShelf=this.clearShelf.bind(this);
// this.reset=this.reset.bind(this);



}
 render(){
  return (
    <div className="App">
      <header className="App-header">
       <Header/> 
      </header>
      <section className='apple'>
      <Booklist books={this.state.books}/>
      <Shelf/>
      </section>
    </div>
  );
}
}
export default App;
