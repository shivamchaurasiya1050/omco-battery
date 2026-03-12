"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [cartCount,setCartCount] = useState(2);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">

      <div className="flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          OMCO Battery
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg">

          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-yellow-400 transition">
            Products
          </Link>
<Link href="/wishlist">
❤️ Wishlist
</Link>

<Link href="/cart" className="relative">

🛒 Cart

<span className="absolute -top-2 -right-3 bg-yellow-400 text-black px-2 text-sm rounded-full">
{cartCount}
</span>

</Link>
          <Link href="/service" className="hover:text-yellow-400 transition">
            Service
          </Link>

          <Link
            href="/register"
            className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
         Request Service
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{open && (
  <div className="md:hidden flex flex-col space-y-4 px-8 pb-6 text-lg">

    <Link href="/" onClick={()=>setOpen(false)}>
      Home
    </Link>

    <Link href="/products" onClick={()=>setOpen(false)}>
      Products
    </Link>

    <Link href="/wishlist" onClick={()=>setOpen(false)}>
      ❤️ Wishlist
    </Link>

    <Link href="/cart" className="relative" onClick={()=>setOpen(false)}>

      🛒 Cart

      <span className="absolute -top-2 left-14 bg-yellow-400 text-black px-2 text-sm rounded-full">
        {cartCount}
      </span>

    </Link>

    <Link href="/service" onClick={()=>setOpen(false)}>
      Service
    </Link>

    <Link
      href="/register"
      onClick={()=>setOpen(false)}
      className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold w-fit"
    >
      Request Service
    </Link>

  </div>
)}

    </nav>
  );
}