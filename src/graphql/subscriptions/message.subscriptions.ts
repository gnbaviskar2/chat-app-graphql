import pubsub from './subscriptions';
import { messageConstants } from '../../core/constants';

const messageSubscriptions = {
  Subscription: {
    messageCreated: {
      subscribe: () =>
        pubsub.asyncIterator(messageConstants.messageEvents.MESSAGE_CREATED),
    },
  },
};

export default messageSubscriptions;
