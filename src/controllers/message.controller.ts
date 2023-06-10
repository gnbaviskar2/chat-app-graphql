import { createMessageInput, getMessagesByUserIdInput } from '../interface';
import { messageRepo } from '../repos';

const createMessageController = (createMessagePayload: createMessageInput) =>
  messageRepo.createMessage(createMessagePayload);

const getMessagesByUserIdController = (
  getMessagesByUserIdPayload: getMessagesByUserIdInput
) => messageRepo.getMessagesByUserId(getMessagesByUserIdPayload);

export { createMessageController, getMessagesByUserIdController };
