import { merge } from 'lodash';
import userQueries from './user.query';
import messageQueries from './message.query';

const merged = merge(userQueries, messageQueries);

export default merged;
