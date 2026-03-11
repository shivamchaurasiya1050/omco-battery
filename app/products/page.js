"use client";

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const products = [
{
id:1,
name:"Amaron Car Battery",
price:4500,
category:"car",
rating:4.5,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},
{
id:2,
name:"Exide Bike Battery",
price:1500,
category:"bike",
rating:4.2,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},
{
id:3,
name:"Luminous Inverter Battery",
price:7500,
category:"inverter",
rating:4.8,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},
{
id:4,
name:"Amaron Bike Battery",
price:1800,
category:"bike",
rating:4.1,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},
{
id:5,
name:"Exide Car Battery",
price:5200,
category:"car",
rating:4.4,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},
{
id:6,
name:"Luminous Inverter Battery",
price:7200,
category:"inverter",
rating:4.6,
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
}
];

export default function Products(){

const [search,setSearch]=useState("");
const [category,setCategory]=useState("all");
const [sort,setSort]=useState("default");
const [currentPage,setCurrentPage]=useState(1);
const [price,setPrice]=useState(8000);

const [selectedProduct,setSelectedProduct]=useState(null);
const [cartPopup,setCartPopup]=useState(false);
const [loading,setLoading]=useState(true);

const productsPerPage = 6;

useEffect(()=>{
setTimeout(()=>{
setLoading(false)
},1200)
},[])

let filteredProducts = products.filter((p)=>{

const matchPrice = p.price <= price;
const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
const matchCategory = category==="all" || p.category===category;

return matchSearch && matchCategory && matchPrice;

});


if(sort==="priceLow"){
filteredProducts.sort((a,b)=>a.price-b.price)
}

if(sort==="priceHigh"){
filteredProducts.sort((a,b)=>b.price-a.price)
}

if(sort==="rating"){
filteredProducts.sort((a,b)=>b.rating-a.rating)
}


const indexOfLast = currentPage * productsPerPage;
const indexOfFirst = indexOfLast - productsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

return(

<div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-10">

{/* HEADER */}

<div className="text-center mb-12">

<h1 className="text-5xl font-bold text-gray-800">
Battery Shop
</h1>

<p className="text-gray-500 mt-3 text-lg">
Find best batteries for your vehicle
</p>

</div>


{/* SEARCH */}

<div className="flex justify-center mb-6">

<input
type="text"
placeholder="🔍 Search battery..."
className="p-3 border rounded-lg w-full max-w-[500px] focus:ring-2 focus:ring-yellow-400"
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


{/* FILTER + SORT */}

<div className="flex justify-center gap-6 mb-8">

<select
className="p-3 border rounded-lg w-44"
onChange={(e)=>setCategory(e.target.value)}
>
<option value="all">All</option>
<option value="car">Car Battery</option>
<option value="bike">Bike Battery</option>
<option value="inverter">Inverter Battery</option>
</select>


<select
className="p-3 border rounded-lg w-44"
onChange={(e)=>setSort(e.target.value)}
>
<option value="default">Sort</option>
<option value="priceLow">Price Low → High</option>
<option value="priceHigh">Price High → Low</option>
<option value="rating">Top Rating</option>
</select>

</div>


{/* PRICE */}

<div className="flex flex-col items-center mb-12">

<p className="text-gray-700 font-semibold mb-2">
Max Price: ₹{price}
</p>

<input
type="range"
min="1000"
max="8000"
step="500"
value={price}
className="w-[400px] accent-yellow-500"
onChange={(e)=>setPrice(e.target.value)}
/>

</div>


{/* PRODUCTS */}

{loading ? (

<div className="grid grid-cols-4 gap-6">

{Array.from({length:4}).map((_,i)=>(

<div key={i} className="bg-gray-300 h-60 animate-pulse rounded-lg"></div>

))}

</div>

) : (

<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">

{currentProducts.map((p)=>(
<ProductCard
key={p.id}
product={p}
setSelectedProduct={setSelectedProduct}
setCartPopup={setCartPopup}
/>
))}

</div>

)}


{/* PAGINATION */}

{/* <div className="flex justify-center items-center gap-4 mt-20 mb-10">

<span className="text-gray-600 font-medium">
Page
</span>

{Array.from({length:totalPages},(_,i)=>(

<button
key={i}
onClick={()=>setCurrentPage(i+1)}
className={`w-10 h-10 rounded-full font-semibold shadow ${
currentPage===i+1
? "bg-yellow-400"
: "bg-white hover:bg-gray-100"
}`}
>

{i+1}

</button>

))}

</div> */}

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
{/* {selectedProduct && (

<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

<div className="bg-white rounded-xl w-[400px] p-6 shadow-xl relative">

<img
src={selectedProduct.image}
className="w-full h-[200px] object-cover rounded-lg"
/>

<h2 className="text-xl font-bold mt-4">
{selectedProduct.name}
</h2>

<p className="text-gray-600 mt-2 text-lg">
₹{selectedProduct.price}
</p>

<button
onClick={()=>setSelectedProduct(null)}
className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
>
X
</button>

</div>

</div>

)} */}


{/* ADD TO CART POPUP */}

{cartPopup && (

<div className="fixed bottom-5 right-5 bg-black text-white px-6 py-3 rounded shadow-lg">

Product Added to Cart 🛒

</div>

)}

</div>

);

}