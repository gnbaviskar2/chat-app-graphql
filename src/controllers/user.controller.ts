import { User } from '@prisma/client';
import base64 from 'base-64';
import bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-core';
import { userSignUpData } from '../interface';
import { userRepo } from '../repos/index';
import { userValidator } from '../helpers/validators';

const userSignUpController = async (
  userSignUpPayload: userSignUpData
): Promise<User | null> => {
  const isValidInput =
    userValidator.validateUserSignUpPayload(userSignUpPayload);
  if (isValidInput.error) {
    throw new ApolloError(isValidInput.error.message);
  }

  // decode
  userSignUpPayload.password = base64.decode(userSignUpPayload.password);
  // hash
  userSignUpPayload.password = await bcrypt.hash(
    userSignUpPayload.password,
    10
  );

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

const getUsersController = (
  take: number,
  cursor: number
): Promise<User[] | null> => userRepo.getUsers(take, cursor);

export { userSignUpController, getUsersController };
