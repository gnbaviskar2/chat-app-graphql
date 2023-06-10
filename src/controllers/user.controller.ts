import { User } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';
import { userSignUpData } from '../interface';
import { userRepo } from '../repos/index';
import {} from 'express';

const userSignUpController = async (
  userSignUpPayload: userSignUpData
): Promise<User | null> => {
  try {
    const user = await userRepo.createUser(userSignUpPayload);
    return user;
  } catch (error: any) {
    if (error.code) {
      throw new ApolloError('Email already registered with us');
    }
    throw error;
  }
};

export { userSignUpController };
