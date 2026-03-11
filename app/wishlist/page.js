"use client";

import { useState } from "react";

export default function Wishlist(){
    const [selectedProduct,setSelectedProduct] = useState(null);

const [wishlistProducts,setWishlistProducts] = useState([

{
id:1,
name:"Amaron Car Battery",
price:4500,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},

{
id:2,
name:"Exide Bike Battery",
price:1800,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},

{
id:3,
name:"Luminous Inverter Battery",
price:7200,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},

{
id:4,
name:"Amaron Bike Battery",
price:1900,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},

{
id:5,
name:"Exide Car Battery",
price:5200,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
}

]);

const [currentPage,setCurrentPage] = useState(1);

const productsPerPage = 4;

const indexOfLast = currentPage * productsPerPage;
const indexOfFirst = indexOfLast - productsPerPage;

const currentProducts = wishlistProducts.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(wishlistProducts.length / productsPerPage);


const removeFromWishlist = (id)=>{

const updated = wishlistProducts.filter((p)=>p.id !== id);
setWishlistProducts(updated);

};


const addToCart = (product)=>{

alert(product.name + " added to cart 🛒");

};


return(

<div className="p-10">

<h1 className="text-3xl mb-8 font-bold">
❤️ Wishlist
</h1>


<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">

{currentProducts.map((product)=>(
    
<div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">

<img
src={product.image}
className="w-full h-48 object-cover"
/>

<div className="p-4">

<h2 className="font-semibold text-lg">
{product.name}
</h2>

<p className="text-gray-600 mt-1">
₹{product.price}
</p>

<div className="flex justify-between mt-3">

<button
onClick={()=>addToCart(product)}
className="bg-yellow-400 px-4 py-2 rounded"
>
🛒 Add
</button>
<button
onClick={()=>setSelectedProduct(product)}
className="bg-blue-500 text-white px-4 py-2 rounded"
>
View
</button>
<button
onClick={()=>removeFromWishlist(product.id)}
className="bg-yellow-400 px-4 py-2 rounded"
>
Remove
</button>

</div>

</div>

</div>

))}

</div>


{/* PAGINATION */}

<div className="flex justify-center gap-3 mt-10">

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

</div>
{selectedProduct && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">

<div className="bg-white p-6 rounded-lg w-96">

<img
src={selectedProduct.image}
className="w-full h-48 object-cover rounded"
/>

<h2 className="text-xl font-bold mt-4">
{selectedProduct.name}
</h2>

<p className="text-gray-600 mt-2">
Price: ₹{selectedProduct.price}
</p>

<p className="text-gray-500 mt-2">
High performance battery with long life.
</p>

<button
onClick={()=>setSelectedProduct(null)}
className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded"
>
Close
</button>

</div>

</div>

)}

</div>

);

}