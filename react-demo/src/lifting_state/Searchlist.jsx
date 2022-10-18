import { useState } from 'react';
import AddProduct from './AddProduct';
import Cart from './Cart';

// 1- create the product list 

const Products = () => {
    // 2- create two states oen that stores the products one stores names
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
};
//3-  create another component (in another file)- addproduct. jsx 

// 4 - creating a fuction which has deconstrcuted parameter 
//call the setItemName and pass in the target.value 
const newItem = ({target}) => {
    setItemName (target.value);
}// 5- need to link the new item a a prop to the AddProduct
return (<AddProduct newItem= {newItem}/>);
// 5- head to AddProduct.jsx to continue the props 

// 6&7 - create two fucntions one for array to save in
//and one for if theres any errors 

const submitForm=(event)=> {event.preventDefault();}
const handleAdd=()=>{setItems(items =>[...items,itemName])}




export default Products;