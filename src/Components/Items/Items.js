import React from 'react';
 import SingleItem from  './SingleItem.js';

const Items = (props) => {
    console.log(props.itemArray)
    return (
        <>
        <div>
         {props.itemArray.map((elt)=>(<h1><SingleItem element={elt}/></h1>))} 
        </div>

 </>
    )
}

export default Items
