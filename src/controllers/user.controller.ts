import { User } from '@prisma/client';
import { userSignUpData } from '../interface';
import { userRepo } from '../repos';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userSignUpController = async (userSignUpPayload: userSignUpData) => {
  const user = await userRepo.default.createUser(userSignUpPayload);
  return user;
};

export { userSignUpController };
