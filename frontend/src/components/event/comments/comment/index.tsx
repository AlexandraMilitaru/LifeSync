import Avatar from "../../../avatar";
import DateUtils from "../../../../utils/date-utils";
import { BiSolidLike } from "react-icons/bi";
import { CommentProps } from "./types";
import {
    Name,
    Date,
    Text,
    Title,
    LikeCount,
    MainContainer,
    UserContainer,
    LikeContainer,
    LikeIconButton,
    CommentContainer,
    ActionsContainer,
} from "./styles";

function Comment(props: CommentProps) {
    const { title, text, postedAt, member } = props;

    const { firstName, lastName, avatarUri } = member;

    return (
        <MainContainer>
            <UserContainer>
                <Avatar size={54} name={`${firstName} ${lastName}`} imageUri={avatarUri} />
                <Name>{`${firstName} ${lastName}`}</Name>
                <Date>{DateUtils.formatDate(postedAt)}</Date>
            </UserContainer>
            <CommentContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <ActionsContainer>
                    <LikeContainer>
                        <LikeIconButton size="small" color="primary">
                            <BiSolidLike />
                        </LikeIconButton>
                        <LikeCount>0</LikeCount>
                    </LikeContainer>
                </ActionsContainer>
            </CommentContainer>
        </MainContainer>
    )
}

export default Comment;