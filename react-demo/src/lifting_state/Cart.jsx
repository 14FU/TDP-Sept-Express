import { useState } from 'react';
// 10 create the new component
//13 add th declaration to the fucntion to deconstrcut the object 
const Cart = (items) => {
    const Display = ({itemName,i}) => <li>{itemName}</li>
    return(
        <ul>
            {items.map((itemName,i)(
                <Display key = {i} itemName={itemName}/>
            ))}
        </ul>
    )
}

export default Cart;