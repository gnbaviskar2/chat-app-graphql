import { User } from '@prisma/client';
import { userSignUpData } from '../interface';
import prisma from '../database/prisma';

const createUser = (userSignUpPayload: userSignUpData): Promise<User> =>
  prisma.user.create({
    data: userSignUpPayload,
  });

const getUsers = (take: number, cursor: number): Promise<User[] | null> =>
  prisma.user.findMany({
    take,
    cursor: {
      id: cursor,
    },
  });

const getUserByEmail = (email: string): Promise<User | null> =>
  prisma.user.findFirst({
    where: {
      email,
    },
  });

const getUserById = (id: number): Promise<User | null> =>
  prisma.user.findFirst({
    where: {
      id,
    },
  });

export { createUser, getUsers, getUserByEmail, getUserById };
