import { merge } from 'lodash';
import userQueries from './user.query';
import chatQueries from './chat.query';

const merged = merge(userQueries, chatQueries);

export default merged;
