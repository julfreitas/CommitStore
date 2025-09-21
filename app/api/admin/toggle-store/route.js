import prisma from "@/lib/prisma";
import authAdmin from "@/middlewares/authAdmin";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//// Ativa ou desativa a loja conforme o status atual
export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const isAdmin = await authAdmin(userId);

    if (!isAdmin) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { storeId } = await request.json();

    if (!storeId) {
      return NextResponse.json({ error: "storeId ausente" }, { status: 400 });
    }

    //encontrar a loja
    const store = await prisma.store.findUnique({ where: { id: storeId } });

    if (!store) {
      return NextResponse.json(
        { error: "loja não encontrada" },
        { status: 400 }
      );
    }

    await prisma.store.update({
        where: {id: storeId},
        data: {isActive: !store.isActive }
    })

    return NextResponse.json({message: "Loja atualizada com sucesso"})

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
