import prisma from "@/lib/prisma";

//middleware para verificar se o user é um vendedor (se tem uma loja aprovada)
const authSeller = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { store: true },
    });

    if (user.store) {
      if (user.store.status === "aprovado") {
        return user.store.id;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default authSeller;
