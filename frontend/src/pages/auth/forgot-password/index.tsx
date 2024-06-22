import { Url } from "../../../enums/url-enum";
import { setPage } from "../../../features/router/slice";
import { useAppDispatch } from "../../../store";
import {
    useState,
    FormEvent,
    useEffect,
    ChangeEvent
} from "react";
import {
    Form,
    Title,
    InputField,
    LinkDivider,
    SubmitButton,
    RegisterLink,
    MainContainer,
    FieldsContainer,
    LinkDividerWrapper,
    LoadingSubmitButton,
    SubmitButtonWrapper
} from "./styles";

function ForgotPassword() {
    const dispatch = useAppDispatch();

    const isLoading = false;

    const [data, setData] = useState({
        email: ''
    });

    const [errors, setErrors] = useState({
        email: ''
    });

    const disabled = Object.values(errors).some(error => error !== '') || Object.values(data).some(value => value === '');

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            email: e.target.value
        });

        if (e.target.value === '') {
            setErrors({
                ...errors,
                email: 'Email is required!'
            });
            return;
        }

        setErrors({
            ...errors,
            email: ''
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(setPage('Forgot password'))
    }, [])

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <Title>
                    Forgot password
                </Title>
                <FieldsContainer>
                    <InputField
                        size="small"
                        name='email'
                        type='email'
                        label='Email'
                        value={data.email}
                        error={errors.email !== ''}
                        helperText={errors.email}
                        onChange={handleChangeEmail}
                    />
                </FieldsContainer>
                <SubmitButtonWrapper>
                    {
                        isLoading ?
                            <LoadingSubmitButton />
                            :
                            <SubmitButton type='submit' variant="contained" disabled={disabled}>
                                Find password
                            </SubmitButton>
                    }
                </SubmitButtonWrapper>
                <LinkDividerWrapper>
                    <LinkDivider>
                        <RegisterLink to={Url.Login}>
                            Remembered your password?
                        </RegisterLink>
                    </LinkDivider>
                </LinkDividerWrapper>
            </Form>
        </MainContainer>
    )
}
export default ForgotPassword;