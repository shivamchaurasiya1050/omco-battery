"use client"
import { useState } from "react";

export default function Service(){

const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [problem,setProblem] = useState("");

const submit = ()=>{
alert("Service Request Submitted");
};

return(

<div className="min-h-screen bg-gray-100">

{/* HERO IMAGE */}

<div className="relative h-[220px] w-full overflow-hidden">

<img
src="https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
className="w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/50 flex items-center justify-center">

<h1 className="text-white text-4xl font-bold">
Battery Service
</h1>

</div>

</div>


{/* SERVICE FORM */}

<div className="flex justify-center mt-12 px-4">

<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

<h2 className="text-3xl font-bold text-center mb-6">
Service Request
</h2>

<input
className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<textarea
className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
placeholder="Describe your battery problem"
value={problem}
onChange={(e)=>setProblem(e.target.value)}
/>

<button
className="bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-lg font-semibold"
onClick={submit}
>
Request Service
</button>

</div>

</div>

</div>
);

}