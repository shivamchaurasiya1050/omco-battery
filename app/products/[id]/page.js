export default function ProductDetail({params}){

return(

<div className="p-10">

<h1 className="text-3xl font-bold">
Battery Details
</h1>

<p className="mt-4">
Product ID: {params.id}
</p>

<img
src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f"
className="w-64 mt-6"
/>

<button className="mt-6 bg-yellow-400 px-6 py-2 rounded">
Add to Cart
</button>

</div>

);

}