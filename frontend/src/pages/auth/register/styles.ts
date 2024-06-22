import { styled } from "@mui/material/styles";
import {
    Link,
    LoadingButton
} from "../../../styles/shared/styles";
import {
    Select,
    Button,
    Divider,
    TextField,
    FormControl
} from "@mui/material";

export const MainContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '32px 24px',
    borderRadius: '16px'
})

export const Form = styled('form')({
    width: '500px',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    backgroundColor: '#fff'
})

export const Title = styled('h2')({
    textAlign: 'center',
    fontSize: '20px',
})

export const FieldsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px'
})

export const InputField = styled(TextField)({
    width: '100%'
})

export const FormControlField = styled(FormControl)({
    width: '100%'
});

export const SelectField = styled(Select)({
    width: '100%'
});

export const SubmitButtonWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center'
})

export const LoadingSubmitButton = styled(LoadingButton)({
    height: '32px',
    width: '130px'
})

export const SubmitButton = styled(Button)({
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 0',
    fontSize: '11px'
})

export const LinkDividerWrapper = styled('div')({
})

export const LinkDivider = styled(Divider)(({ theme }) => ({
    '&::before, &::after': {
        borderColor: `${theme.palette.grey[400]}`
    }
}))

export const LoginLink = styled(Link)({
    color: '#000',
    fontSize: '16px'
})