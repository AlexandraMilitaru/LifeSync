import { Url } from "../../../enums/url-enum";
import { setPage } from "../../../features/router/slice";
import { Severity } from "../../../enums/severity-enum";
import { register } from "../../../features/auth/thunks";
import { showToastr } from "../../../features/toastr/slice";
import { useAppDispatch } from "../../../store";
import { useRegisterHook } from "../../../features/auth/hooks";
import {
    useState,
    FormEvent,
    useEffect,
    ChangeEvent
} from "react";
import {
    Form,
    Title,
    LoginLink,
    InputField,
    LinkDivider,
    SubmitButton,
    MainContainer,
    FieldsContainer,
    LinkDividerWrapper,
    LoadingSubmitButton,
    SubmitButtonWrapper
} from "./styles";

const defaultData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function Register() {
    const dispatch = useAppDispatch();

    const { isLoading } = useRegisterHook();

    const [data, setData] = useState(defaultData);

    const [errors, setErrors] = useState(defaultData);

    const disabled = Object.values(errors).some(error => error !== '') || Object.values(data).some(value => value === '');

    const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            firstName: e.target.value
        });

        if (e.target.value === '') {
            setErrors({
                ...errors,
                firstName: 'First name is required!'
            });
            return;
        }

        setErrors({
            ...errors,
            firstName: ''
        });
    }

    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            lastName: e.target.value
        });

        if (e.target.value === '') {
            setErrors({
                ...errors,
                lastName: 'Last name is required!'
            });
            return;
        }

        setErrors({
            ...errors,
            lastName: ''
        });
    }

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

    useEffect(() => {
        dispatch(setPage('Register'))
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data.password !== data.confirmPassword) {
            dispatch(
                showToastr({
                    message: 'Passwords do not match!',
                    severity: Severity.Error,
                })
            );
            return;
        }

        dispatch(register(data))

        setData(defaultData);
    }

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <Title>
                    Register
                </Title>
                <FieldsContainer>
                    <InputField
                        size="small"
                        name='firstName'
                        label='First name'
                        value={data.firstName}
                        error={errors.firstName !== ''}
                        helperText={errors.firstName}
                        onChange={handleChangeFirstName}
                    />
                    <InputField
                        size="small"
                        name='lastName'
                        label='Last name'
                        value={data.lastName}
                        error={errors.lastName !== ''}
                        helperText={errors.lastName}
                        onChange={handleChangeLastName}
                    />
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
                    <InputField
                        size="small"
                        name='confirmPassword'
                        type='password'
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
                                Register
                            </SubmitButton>
                    }
                </SubmitButtonWrapper>
                <LinkDividerWrapper>
                    <LinkDivider>
                        <LoginLink to={Url.Login}>
                            Already have an account?
                        </LoginLink>
                    </LinkDivider>
                </LinkDividerWrapper>
            </Form>
        </MainContainer>
    )
}
export default Register;