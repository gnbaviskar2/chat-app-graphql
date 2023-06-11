import { User } from '@prisma/client';
import { userController } from '../../controllers';

const userQuery = {
  Query: {
    getUsers: (
      _parent: User,
      args: { take: number; cursor: number }
    ): Promise<User[] | null> =>
      userController.getUsersController(args.take, args.cursor),
  },
};

export default userQuery;
