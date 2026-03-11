"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {

const { cart, setCart } = useContext(CartContext);

// Demo products if cart empty
const demoProducts = [
{ name: "Amaron Car Battery", price: 4500 },
{ name: "Exide Bike Battery", price: 1500 },
{ name: "Luminous Inverter Battery", price: 7200 }
];

const items = cart?.length ? cart : demoProducts;


// Remove item
const removeItem = (index) => {
const updated = [...items];
updated.splice(index, 1);
setCart(updated);
};


// Total items
const totalCount = items.length;


// Total price
const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
// empty cart UI
if(items.length === 0){
return(

<div className="p-10 text-center">

<h1 className="text-3xl font-bold mb-4">
🛒 Your Cart
</h1>

<p className="text-gray-500">
Your cart is empty
</p>

</div>

);
}

return (

<div className="p-10 min-h-screen bg-gray-100">

<h1 className="text-3xl font-bold mb-6">
🛒 Shopping Cart
</h1>


{/* CART ITEMS */}



<div className="grid gap-4">

{items.map((item, i) => (

<div
key={i}
className="bg-white shadow p-4 rounded-lg flex justify-between items-center"
>

<div>
<h2 className="font-semibold">{item.name}</h2>
<p className="text-gray-600">₹{item.price}</p>
</div>

<button
onClick={() => removeItem(i)}
className="bg-yellow-400 px-4 py-1 rounded hover:bg-yellow-500"
>
Remove
</button>

</div>

))}

</div>


{/* CART SUMMARY */}

<div className="mt-8 bg-white p-6 rounded-lg shadow flex justify-between items-center">

<div className="text-lg font-semibold">
Items: {totalCount}
</div>

<div className="text-xl font-bold">
Total: ₹{totalPrice}

<button className="bg-yellow-400 px-6 py-2 rounded font-semibold">
Checkout
</button>
</div>

</div>

{/* PAGINATION */}

{/* <div className="flex justify-center gap-3 mt-10">

{Array.from({length:totalPages},(_,i)=>(

<button
key={i}
onClick={()=>setCurrentPage(i+1)}
className={`px-4 py-2 rounded shadow ${
currentPage===i+1
? "bg-yellow-400"
: "bg-white"
}`}
>

{i+1}

</button>

))}

</div> */}


</div>

);

}