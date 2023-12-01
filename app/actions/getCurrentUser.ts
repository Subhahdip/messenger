import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    console.log('Session image is ' + session?.user?.image);

    if (!session?.user?.image) {
      return null;
    }

    const currentUser = await prisma.user.findFirst({
      where: {
        image: session.user.image as string
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
