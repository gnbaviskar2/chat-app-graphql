import { User } from '@prisma/client';
import { userSignUpData } from '../interface';
import prisma from '../database/prisma';

const createUser = (userSignUpPayload: userSignUpData): Promise<User> =>
  prisma.user.create({
    data: userSignUpPayload,
  });

export { createUser };
