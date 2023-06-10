import { User } from '@prisma/client';
import { userSignUpData } from '../interface';
import prisma from '../database/prisma';

const createUser = (userSignUpPayload: userSignUpData): Promise<User> =>
  prisma.user.create({
    data: {
      firstname: 'ghanshyam',
      lastname: 'baviskar',
      email: userSignUpPayload.email,
      password: 'djfhdf',
    },
  });

export default {
  createUser,
};
