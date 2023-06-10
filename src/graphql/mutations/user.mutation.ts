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
  },
};

export default userMutations;
