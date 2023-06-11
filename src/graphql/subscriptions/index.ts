import { merge } from 'lodash';
import messageSubscriptions from './message.subscriptions';

const merged = merge(messageSubscriptions);

export default merged;
