import { useState } from "react"
// 3 - creatign another component 

const AddProduct = ({newItem}) => {// 5 adding the props 
    return (
        <form>
            <input type="text" placeholder="Item Name" onChange={newItem}></input>
            <button type = "button">Add Item </button>
        </form>
    );
}
// 4 head to Seachlist.jsx for step 4 


export default AddProduct;