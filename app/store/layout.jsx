import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "GoCart. - Painel da Loja",
    description: "GoCart. - Painel da Loja",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
