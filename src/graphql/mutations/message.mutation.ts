import { Message } from '@prisma/client';
import { createMessageInput } from '../../interface';
import { messageController } from '../../controllers';

const userMutations = {
  Mutation: {
    createMessage: (
      _parent: unknown,
      args: { createMessagePayload: createMessageInput }
    ): Promise<Message | null> =>
      messageController.createMessageController(args.createMessagePayload),
  },
};

export default userMutations;
