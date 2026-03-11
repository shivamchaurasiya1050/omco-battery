import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-60 bg-black text-white h-screen p-6">

      <h2 className="text-xl mb-6">Admin Panel</h2>

      <ul className="space-y-3">

        <li>
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/admin/products">Products</Link>
        </li>

        <li>
          <Link href="/admin/orders">Orders</Link>
        </li>

        <li>
          <Link href="/admin/services">Services</Link>
        </li>

      </ul>

    </div>
  );
}