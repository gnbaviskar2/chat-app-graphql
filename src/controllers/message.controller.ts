import { Message } from '@prisma/client';
import { createMessageInput, getMessagesByUserIdInput } from '../interface';
import { messageRepo } from '../repos';
import pubsub from '../graphql/mutations/subscriptions';
import { messageConstants } from '../core/constants';

const createMessageController = async (
  createMessagePayload: createMessageInput
): Promise<Message | null> => {
  const message = await messageRepo.createMessage(createMessagePayload);
  pubsub.publish(messageConstants.messageEvents.MESSAGE_CREATED, {
    messageCreated: message,
  });
  return message;
};

const getMessagesByUserIdController = (
  getMessagesByUserIdPayload: getMessagesByUserIdInput
) => messageRepo.getMessagesByUserId(getMessagesByUserIdPayload);

export { createMessageController, getMessagesByUserIdController };
