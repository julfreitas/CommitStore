import { getAuth } from "@clerk/nextjs/server";
import authSeller from "@/middlewares/authSeller";
import { NextResponse } from "next/server";
import imagekit from "@/config/imageKit";
import prisma from "@/lib/prisma";

//Adicionar um novo produto
export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const storeId = await authSeller(userId);

    if (!storeId) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    //obter os dados do formulário
    const formData = await request.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const mrp = Number(formData.get("mrp"));
    const price = Number(formData.get("price"));
    const category = formData.get("category");
    const images = formData.getAll("images");

    if (
      !name ||
      !description ||
      !mrp ||
      !price ||
      !category ||
      images.length === 0
    ) {
      return NextResponse("Campos obrigatórios do produto faltando", {
        status: 400,
      });
    }

    //fazer upload das imagens do produto para o imagekit
    const imagesUrls = await Promise.all(
      images.map(async (image) => {
        const buffer = Buffer.from(await image.arrayBuffer());
        const response = await imagekit.upload({
          file: buffer,
          fileName: image.name,
          folder: "products",
        });
        const url = imagekit.url({
          path: response.filePath,
          transformation: [
            { quality: "auto" },
            { format: "webp" },
            { width: "1024" },
          ],
        });
        return url;
      })
    );

    //Cria um novo prodto no bd, associando-o à loja do vendedor
    await prisma.product.create({
      data: {
        name,
        description,
        mrp,
        price,
        category,
        images: imagesUrls,
        storeId,
      },
    });

    return NextResponse.json({ mensage: "Produto adicionado com sucesso" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}

//listar todos os produtos da loja do vendedor
export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    const storeId = await authSeller(userId);

    if (!storeId) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    //buscar todos os produtos da loja do vendedor
    const products = await prisma.product.findMany({
      where: {
        storeId,
      },
    });

    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
