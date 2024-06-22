import RequestUtils from '../../utils/request-utils';
import { AddCommentRequestPayload } from './types';

const COMMENTS_API_BASE_URL = '/api/comments';

const add = async (requestPayload: AddCommentRequestPayload) => {
    return RequestUtils.post(`${COMMENTS_API_BASE_URL}`, requestPayload);
}

export const commentsService = {
    add
}