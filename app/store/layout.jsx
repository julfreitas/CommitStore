import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "CommitStore. - Painel da Loja",
    description: "CommitStore. - Painel da Loja",
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
