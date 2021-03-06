import React from 'react';


const Booklist =(props) => {
    const{data,index}=props
    return(
        <div className='list'>
        <input></input>
        <button>Search</button>
        <button>Clear Search</button>
        {/* <h1>{data[index].books.map(elem =><li>{elem}</li>)}</h1> */}

        </div>
    )
}

export default Booklist