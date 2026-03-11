"use client";

import { useState } from "react";

export default function ProductCard({ product, setSelectedProduct, setCartPopup }) {

const [liked,setLiked] = useState(false);

return(

<div className="bg-white rounded-x shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group border">

{/* discount badge */}
{product.discount && (
<div className="absolute bg-red-500 text-black text-xs px-2 py-1 rounded top-3 left-3 z-10">
{product.discount}% OFF
</div>
)}




{/* image */}
<div className="w-full h-[220px] overflow-hidden bg-gray-100 flex items-center justify-center">

  <img
    src={product.image}
    alt={product.name}
    className="h-[160px] object-contain"
  />

</div>


{/* content */}
<div className="p-4 flex flex-col gap-2">

{/* name */}
<h2 className="font-semibold text-gray-800 line-clamp-1">
{product.name}
</h2>


{/* rating */}
<div className="flex items-center gap-1 text-yellow-500 text-sm">

{"★★★★★".slice(0,product.rating || 4)}
<span className="text-gray-500 ml-1 text-xs">
({product.rating || 4})
</span>

</div>


{/* price */}
<div className="flex items-center gap-2">

<span className="text-lg font-bold">
₹{product.price}
</span>

{product.originalPrice && (

<span className="text-gray-400 line-through text-sm">
₹{product.originalPrice}
</span>

)}

</div>


{/* stock */}
<div className="text-xs">

{product.stock > 0 ? (
<span className="text-green-600">In Stock</span>
) : (
<span className="text-red-500">Out of Stock</span>
)}

</div>


{/* buttons */}
<div className="flex gap-2 mt-2">

<button
onClick={()=>setCartPopup(true)}
className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded text-sm font-semibold"
>
🛒 Add
</button>
{/* wishlist */}
<button
onClick={()=>setLiked(!liked)}
className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
>
{liked ? "❤️" : "🤍"}
</button>
<button
onClick={()=>setSelectedProduct(product)}
className="border px-3 rounded text-sm hover:bg-gray-100"
>
👁
</button>

</div>

</div>

</div>

);
}