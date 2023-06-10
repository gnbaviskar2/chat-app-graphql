import { User } from '@prisma/client';
import base64 from 'base-64';
import bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-core';
import { userSignUpData } from '../interface';
import { userRepo } from '../repos/index';
import { userValidator } from '../helpers/validators';
import { userConstants } from '../core/constants';

const userLoginController = async (
  email: string,
  password: string
): Promise<User | null> => {
  const isValidInput = userValidator.validateUserLoginPayload(email, password);
  if (isValidInput.error) {
    throw new ApolloError(isValidInput.error.message);
  }

  const claimedUser = await userRepo.getUserByEmail(email);
  if (!claimedUser) {
    throw new ApolloError(userConstants.userErrorMessages.userNotFound);
  }
  // decode password
  password = base64.decode(password);

  const isRightUser = await bcrypt.compare(password, claimedUser.password);
  if (!isRightUser) {
    throw new ApolloError(userConstants.userErrorMessages.userNotFound);
  }
  return claimedUser;
};

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
      throw new ApolloError(
        userConstants.userErrorMessages.emailAlreadyRegistered
      );
    }
    throw error;
  }
};

const getUsersController = async (
  take: number,
  cursor: number
): Promise<User[] | null> => {
  const users = await userRepo.getUsers(take, cursor);
  if (users && users.length > 1) {
    users.slice(1, -1);
    return users;
  }
  return users;
};

export { userSignUpController, getUsersController, userLoginController };
