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
};

export deafult Products;