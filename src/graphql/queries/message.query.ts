import { getMessagesByUserIdInput } from '../../interface';
import { messageController } from '../../controllers';

const chatQuery = {
  Query: {
    getMessagesByUserId: async (
      _parent: unknown,
      args: { getMessagesByUserIdPayload: getMessagesByUserIdInput }
    ) => {
      const messages = await messageController.getMessagesByUserIdController(
        args.getMessagesByUserIdPayload
      );
      return messages;
    },
  },
};

export default chatQuery;
