import { getAuth } from "@clerk/nextjs/server";
import authSeller from "@/middlewares/authSeller";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//alternar estoque de um produto
export async function PUT(request) {
    try {
        const { userId } = getAuth(request);
        const {productId} = await request.json();

        if (!productId) {
            return NextResponse.json({error: "ID do produto faltando(productId"}, { status: 400 });
        }

        const storeId = await authSeller(userId);

        if (!storeId) {
            return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
        }

        //verificar se o produto existe na loja do vendedor
        const product = await prisma.product.findFirst({
            where: {
                id: productId,
                storeId: storeId,
            },
        });

        if (!product) {
            return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
        }

        //alternar o estoque do produto
        await prisma.product.update({
            where: { id: productId },
            data: { inStock: !product.inStock },
        });
        return NextResponse.json({ message: "Estoque do produto atualizado com sucesso" });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: error.code || error.message },
            { status: 400 }
        );
        
    }
}
