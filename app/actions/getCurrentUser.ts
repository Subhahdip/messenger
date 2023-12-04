import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    console.log('Session email is ' + session?.user?.email);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findFirst({
      where: {
        email: session.user.email as string
      }
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    console.error("Error in getCurrentUser:", error);
    return null;
  }
};

export default getCurrentUser;
