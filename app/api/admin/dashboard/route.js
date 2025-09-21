import prisma from "@/lib/prisma";
import authAdmin from "@/middlewares/authAdmin";
import { auth, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//gerar os dados do painel administrativo (total orders, total stores, total products, total revenue)
export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    const isAdmin = await authAdmin(userId);

    if (!isAdmin) {
      return NextResponse.json({ error: "não autorizado" }, { status: 401 });
    }

    //obter total de pedidos
    const orders = await prisma.order.count();
    //obter total de lojas no sistema
    const stores = await prisma.store.count();
    //obter todos os pedidos incluindo apenas createdAt e total e calcular o faturamento total
    const allOrders = await prisma.order.findMany({
      select: {
        createdAt: true,
        total: true,
      },
    });

    let totalRevenue = 0;
    allOrders.forEach((order) => {
      totalRevenue += order.total;
    });

    const revenue = totalRevenue.toFixed(2);
    //total de produtos no sistema
    const products = await prisma.product.count();
    const dashboardData = {
      orders,
      stores,
      products,
      revenue,
      allOrders,
    };

    return NextResponse.json({ dashboardData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
