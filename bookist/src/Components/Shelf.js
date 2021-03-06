import React from 'react';


const Shelf=(props)=> {
    const {data,index}=props
    return(
        <div>
           <h4>Your Shelf</h4>
           {/* <section>img src='{data[index].img}'</section> */}
            <button onClick={props.clearShelf}>Clear Shelf</button>

        </div>
    )
}
export default Shelf