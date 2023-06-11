import { User } from '@prisma/client';
import { userSignUpData } from '../../interface';
import { userController } from '../../controllers';

const userMutations = {
  Mutation: {
    userSignUp: (
      _parent: unknown,
      args: { userSignUpPayload: userSignUpData }
    ): Promise<User | null> =>
      userController.userSignUpController(args.userSignUpPayload),
    userLogin: (
      _parent: unknown,
      args: { email: string; password: string }
    ): Promise<User | null> =>
      userController.userLoginController(args.email, args.password),
  },
};

export default userMutations;
