import {
    styled,
    Select,
    Button,
    TextField,
    IconButton,
    FormControl
} from "@mui/material";

export const MainContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '32px 24px'
})

export const FormContainer = styled('div')({
    width: "600px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)",
    gap: '32px'
});

export const Title = styled('h2')({
    fontSize: '20px'
});

export const Form = styled('form')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
});

export const InputsContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
});

export const FormControlField = styled(FormControl)({
    width: '100%'
});

export const SelectField = styled(Select)({
    width: '100%'
});

export const InputField = styled(TextField)({
});

export const DragAndDropZone = styled('div')({
    border: '2px dashed #ccc',
    padding: '20px',
    textAlign: 'center'
});

export const Input = styled('input')({
});

export const Text = styled('p')({
});

export const ImageContainer = styled('div')({
    border: '2px dashed #ccc',
    padding: '8px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

export const Image = styled('img')({
    width: '100%',
    objectFit: 'cover'
});

export const GalleryContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px'
});

export const GalleryImageContainer = styled('div')({
    position: 'relative'
});

export const GalleryImage = styled(Image)({
    height: '150px'
});

export const CancelIconButton = styled(IconButton)({
    position: 'absolute',
    top: '4px',
    right: '4px',
    backgroundColor: '#fff',
    ":hover": {
        backgroundColor: '#ccc'
    }
});

export const SubmitButtonWrapper = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
});

export const SubmitButton = styled(Button)({
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 0',
    fontSize: '11px'
});

export const MapWrapper = styled('div')({
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});