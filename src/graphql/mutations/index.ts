import { merge } from 'lodash';
import userMutations from './user.mutation';
import messageMutation from './message.mutation';

const merged = merge(userMutations, messageMutation);

export default merged;
