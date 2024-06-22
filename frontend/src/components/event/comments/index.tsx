import Comment from "./comment";
import { useParams } from "react-router-dom";
import { addComment } from "../../../features/comments/thunks";
import { CommentsProps } from "./types";
import { useAddComment } from "../../../features/comments/hooks";
import { useAppDispatch } from "../../../store";
import {
    useState,
    FormEvent,
    ChangeEvent
} from "react";
import {
    Form,
    AddButton,
    InputField,
    MainContainer,
    CommentsContainer
} from "./styles";

const defaultData = {
    title: "",
    text: ""
}

const defaultErrors = {
    title: "",
    text: ""
}

function Comments(props: CommentsProps) {
    const { comments } = props;

    const dispatch = useAppDispatch();

    const { id } = useParams<{ id: string }>();

    const [data, setData] = useState(defaultData);
    const [errors, setErrors] = useState(defaultErrors);

    useAddComment(id);

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            title: e.target.value
        })

        if (e.target.value === "") {
            setErrors({
                ...errors,
                title: "Title is required"
            })
            return;
        }

        setErrors({
            ...errors,
            title: ""
        })
    }

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            text: e.target.value
        })

        if (e.target.value === "") {
            setErrors({
                ...errors,
                text: "Text is required"
            })
            return;
        }

        setErrors({
            ...errors,
            text: ""
        })
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id && dispatch(addComment({ ...data, eventId: id }));
        setData(defaultData);
    }

    return (
        <MainContainer>
            <Form onSubmit={handleFormSubmit}>
                <InputField
                    size="small"
                    placeholder="Add a comment title..."
                    onChange={handleChangeTitle}
                    value={data.title}
                    error={errors.title !== ""}
                    helperText={errors.title}
                />
                <InputField
                    size="small"
                    placeholder="Add a comment text..."
                    multiline
                    rows={4}
                    value={data.text}
                    onChange={handleChangeText}
                    error={errors.text !== ""}
                    helperText={errors.text}
                />
                <AddButton size="small" variant="contained" type="submit">
                    Add comment
                </AddButton>
            </Form>
            <CommentsContainer>
                {comments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))}
            </CommentsContainer>
        </MainContainer>
    )
}

export default Comments;