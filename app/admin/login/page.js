'use client'
import { useRouter } from "next/navigation";

export default function AdminLogin(){

  const router = useRouter();

  const login = ()=>{
    router.push("/admin/dashboard");
  };

  return(

    <div className="flex justify-center items-center h-screen">

      <div className="border p-6 w-96">

        <h2 className="text-2xl mb-4">
          Admin Login
        </h2>

        <button
          className="bg-black text-white p-2 w-full"
          onClick={login}
        >
          Login
        </button>

      </div>

    </div>

  );
}