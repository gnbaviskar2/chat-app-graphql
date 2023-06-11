import { Message } from '@prisma/client';
import { createMessageInput } from '../../interface';
import { messageController } from '../../controllers';
import pubsub from './subscriptions';
import { messageConstants } from '../../core/constants';

const userMutations = {
  Mutation: {
    createMessage: (
      _parent: unknown,
      args: { createMessagePayload: createMessageInput }
    ): Promise<Message | null> =>
      messageController.createMessageController(args.createMessagePayload),
  },
  Subscription: {
    messageCreated: {
      subscribe: () =>
        pubsub.asyncIterator(messageConstants.messageEvents.MESSAGE_CREATED),
    },
  },
};

export default userMutations;
