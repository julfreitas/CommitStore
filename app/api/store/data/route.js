import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//obter informações da loja e produtos da loja
export async function GET(request) {
  try {
    //obter o nome de usuário da loja a partir dos query params
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username").toLowerCase();

    if (!username) {
      return NextResponse.json(
        { error: "Nome de usuário faltando(username)" },
        { status: 400 }
      );
    }

    //obter informações da loja e prodotos em estque incluindo suas classificações
    const store = await prisma.store.findUnique({
      where: { username },
      include: { Product: { include: { ratings: true } } },
    });

    if (!store) {
      return NextResponse.json(
        { error: "Loja não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json({ store });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
