"use client";

export default function Services(){

const services = [

{
id:1,
title:"Doorstep Battery Delivery",
desc:"Get your battery delivered and installed at your home quickly.",
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},

{
id:2,
title:"Battery Installation",
desc:"Professional battery installation for car, bike and inverter.",
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},

{
id:3,
title:"Old Battery Exchange",
desc:"Exchange your old battery and get the best discount instantly.",
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
},

{
id:4,
title:"Battery Health Check",
desc:"Free battery testing and health check service available.",
image:"https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
}

];


return(

<div className="min-h-screen bg-gray-100 p-10">


{/* PAGE TITLE */}

<div className="text-center mb-12">

<h1 className="text-4xl font-bold">
Our Services
</h1>

<p className="text-gray-500 mt-3">
Reliable battery services for your vehicles and home
</p>

</div>


{/* SERVICES GRID */}

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

{services.map((service)=>(
    
<div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden">

<img
src={service.image}
className="w-full h-42 object-cover"
/>

<div className="p-5">

<h2 className="text-xl font-semibold mb-2">
{service.title}
</h2>

<p className="text-gray-600">
{service.desc}
</p>

</div>

</div>

))}

</div>


</div>

);

}