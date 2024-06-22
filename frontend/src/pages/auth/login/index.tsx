import { Url } from "../../../enums/url-enum";
import { login } from "../../../features/auth/thunks";
import { setPage } from "../../../features/router/slice";
import { useAppDispatch } from "../../../store";
import {
    useState,
    useEffect,
    FormEvent,
    ChangeEvent,
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
    ForgotPasswordLink,
    LinkDividerWrapper,
    LoadingSubmitButton,
    SubmitButtonWrapper,
    ForgotPasswordLinkWrapper
} from "./styles";

const defaultData = {
    email: '',
    password: ''
}

function Login() {
    const dispatch = useAppDispatch();

    const isLoading = false;

    const [data, setData] = useState(defaultData);

    const [errors, setErrors] = useState(defaultData);

    const disabled = Object.values(data).some(value => value === '') || Object.values(errors).some(error => error !== '');

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

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            password: e.target.value
        });

        if (e.target.value === '') {
            setErrors({
                ...errors,
                password: 'Password is required!'
            });
            return;
        }

        setErrors({
            ...errors,
            password: ''
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login(data));

        setData(defaultData);
    }

    useEffect(() => {
        dispatch(setPage('Login'))
    }, [])

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <Title>
                    Login
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
                    <InputField
                        size="small"
                        name='password'
                        type='password'
                        label='Password'
                        value={data.password}
                        error={errors.password !== ''}
                        helperText={errors.password}
                        onChange={handleChangePassword}
                    />
                </FieldsContainer>
                <ForgotPasswordLinkWrapper>
                    <ForgotPasswordLink to={Url.ForgotPassword}>
                        Forgot password?
                    </ForgotPasswordLink>
                </ForgotPasswordLinkWrapper>
                <SubmitButtonWrapper>
                    {
                        isLoading ?
                            <LoadingSubmitButton />
                            :
                            <SubmitButton type='submit' variant="contained" disabled={disabled}>
                                Login
                            </SubmitButton>
                    }
                </SubmitButtonWrapper>
                <LinkDividerWrapper>
                    <LinkDivider>
                        <RegisterLink to={Url.Register}>
                            Don't have an account?
                        </RegisterLink>
                    </LinkDivider>
                </LinkDividerWrapper>
            </Form>
        </MainContainer>
    )
}
export default Login;