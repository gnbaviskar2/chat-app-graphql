import { merge } from 'lodash';
import userMutations from './user.mutation';

const merged = merge(userMutations);

export default merged;
