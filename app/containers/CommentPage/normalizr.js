import { normalize, schema } from 'normalizr';

const commentSchema = new schema.Entity('comments');
const commentListSchema = [commentSchema];

const normalizeComments = (data) => normalize(data, commentListSchema);

export default normalizeComments;
