import imagekit from "@/config/imageKit";
import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//criar a loja
export async function POST(request) {
  try {
    const { userId } = getAuth(request);

    console.log("userId", userId);
    if (!userId) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    } //obter os dados do formulário
    const formData = await request.formData();

    const name = formData.get("name");
    const username = formData.get("username");
    const description = formData.get("description");
    const email = formData.get("email");
    const contact = formData.get("contact");
    const address = formData.get("address");
    const image = formData.get("image");

    if (
      !name ||
      !username ||
      !description ||
      !email ||
      !contact ||
      !address ||
      !image
    ) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    //verificar se o user já registrou uma loja
    const store = await prisma.store.findFirst({
      where: {
        userId: userId,
      },
    });

    //se a loja já existir, retornar o status da loja em vez de criar uma nova
    if (store) {
      return NextResponse.json({ status: store.status });
    }

    //verificar se o username já existe
    const isUsernameTaken = await prisma.store.findFirst({
      where: {
        username: username.toLowerCase(),
      },
    });

    if (isUsernameTaken) {
      return NextResponse.json(
        { error: "Este nome de usuário já está em uso" },
        {
          status: 400,
        }
      );
    }
    const buffer = Buffer.from(await image.arrayBuffer());
    const response = await imagekit.upload({
      file: buffer,
      fileName: image.name,
      folder: "logos",
    });

    const optimizedImage = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "web" },
        { width: "512" },
      ],
    });

    //Cria um novo registro da loja no bd
    const newstore = await prisma.store.create({
      data: {
        userId,
        name,
        description,
        username: username.toLowerCase(),
        email,
        contact,
        address,
        logo: optimizedImage,
      },
    });

    //vincular loja criada ao user
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: { store: { connect: { id: newstore.id } } },
    });

    return NextResponse.json({
      mensage: "a loja foi criada e está aguardando aprovação",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}

//verificar se o usuário já registrou uma loja, se sim, enviar o status da loja
export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    //verificar se o user já registrou uma loja
    const store = await prisma.store.findFirst({
      where: {
        userId: userId,
      },
    });

    //se a loja já existir, retornar o status da loja
    if (store) {
      return NextResponse.json({ status: store.status });
    }

    return NextResponse.json({ status: "Não registrado" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
