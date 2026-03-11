import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">

      <AdminSidebar />

      <div className="p-10 w-full">
        {children}
      </div>

    </div>
  );
}