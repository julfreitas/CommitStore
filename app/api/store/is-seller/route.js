import { getAuth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import authSeller from "@/middlewares/authSeller";
import { NextResponse } from "next/server";

//verifica se o usuário autenticado é um vendedor(Auth Seller) e, caso seja, retorna informações da loja vinculada a ele
export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    const isSeller = await authSeller(userId);

    if (!isSeller) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const storeInfo = await prisma.store.findUnique({
      where: { userId },
    });

    return NextResponse.json({ isSeller, storeInfo });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
