import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
  title: "GoCart. - Administrador",
  description: "GoCart. - Administrador",
};

export default function RootAdminLayout({ children }) {

  return (
    <>
      <AdminLayout>
        {children}
      </AdminLayout>
    </>
  );
}
