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

const defaultData = {
    password: '',
    confirmPassword: ''
}

const defaultErrors = {
    password: '',
    confirmPassword: ''
}

function ResetPassword() {
    const dispatch = useAppDispatch();

    const isLoading = false;

    const [data, setData] = useState(defaultData);

    const [errors, setErrors] = useState(defaultErrors);

    const disabled = Object.values(errors).some(error => error !== '') || Object.values(data).some(value => value === '');

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

    const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            confirmPassword: e.target.value
        });

        if (e.target.value === '') {
            setErrors({
                ...errors,
                confirmPassword: 'Confirm password is required!'
            });
            return;
        }

        setErrors({
            ...errors,
            confirmPassword: ''
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(setPage('Reset password'))
    }, [])

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <Title>
                    Reset password
                </Title>
                <FieldsContainer>
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
                    <InputField
                        size="small"
                        name='confirmPassword'
                        type='confirmPassword'
                        label='Confirm password'
                        value={data.confirmPassword}
                        error={errors.confirmPassword !== ''}
                        helperText={errors.confirmPassword}
                        onChange={handleChangeConfirmPassword}
                    />
                </FieldsContainer>
                <SubmitButtonWrapper>
                    {
                        isLoading ?
                            <LoadingSubmitButton />
                            :
                            <SubmitButton type='submit' variant="contained" disabled={disabled}>
                                Reset password
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
export default ResetPassword;