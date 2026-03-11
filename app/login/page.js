"use client";
import { useState } from "react";

export default function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const login = ()=>{
alert("Login Success");
};

return(

<div className="flex min-h-screen">

{/* LEFT IMAGE */}

<div className="hidden md:flex w-1/2 h-screen overflow-hidden relative">

<img
src="https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
className="w-full h-full object-cover"
/>

{/* Dark overlay */}

<div className="absolute inset-0 bg-black/50 flex items-center justify-center">

<h1 className="text-white text-4xl font-bold">
OMCO Battery
</h1>

</div>

</div>


{/* RIGHT LOGIN FORM */}

<div className="flex w-full md:w-1/2 h-screen items-center justify-center bg-gray-100">

<div className="bg-white shadow-xl rounded-xl p-8 w-96">

<h2 className="text-3xl font-bold text-center mb-6">
Login
</h2>


{/* EMAIL */}

<input
type="email"
placeholder="Enter Email"
className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


{/* PASSWORD */}

<input
type="password"
placeholder="Enter Password"
className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


{/* REMEMBER */}

<div className="flex justify-between text-sm mb-4">

<label className="flex items-center gap-2">
<input type="checkbox"/>
Remember me
</label>

<a href="#" className="text-yellow-500 hover:underline">
Forgot password?
</a>

</div>


{/* LOGIN BUTTON */}

<button
onClick={login}
className="bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-lg font-semibold"
>
Login
</button>


{/* SIGNUP */}

<p className="text-center text-sm mt-4">
Don't have an account?
<a href="/signup" className="text-yellow-500 ml-1 hover:underline">
Signup
</a>
</p>

</div>

</div>

</div>

);

}