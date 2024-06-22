// import { CommentRepoDto, CommentServiceDetailsDto } from "../types/comment-types";

import MemberMapper from "./member-mapper";

class CommentMapper {
    // TODO: change any to a proper type
    public static repoToService(comment: any) {
        const { eventId, memberId, ...rest } = comment;

        console.log(comment);

        return {
            ...rest,
            member: MemberMapper.repoToService(comment.member),
        };
    }
}

export default CommentMapper;