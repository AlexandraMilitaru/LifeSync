import CreateEventMap from "../../../components/member/create-event/map";
import { FaTimes } from "react-icons/fa";
import { setPage } from "../../../features/router/slice";
import { Severity } from "../../../enums/severity-enum";
import { showToastr } from "../../../features/toastr/slice";
import { useDropzone } from "react-dropzone";
import { createEvent } from "../../../features/events/thunks";
import { useAppDispatch } from "../../../store";
import { useGetAllCategories } from "../../../features/categories/hooks";
import {
    useState,
    useEffect,
    ChangeEvent
} from "react";
import {
    MenuItem,
    InputLabel,
    SelectChangeEvent
} from "@mui/material";
import {
    Form,
    Text,
    Title,
    Input,
    Image,
    InputField,
    MapWrapper,
    SelectField,
    GalleryImage,
    SubmitButton,
    MainContainer,
    FormContainer,
    ImageContainer,
    InputsContainer,
    DragAndDropZone,
    FormControlField,
    CancelIconButton,
    GalleryContainer,
    SubmitButtonWrapper,
    GalleryImageContainer
} from "./styles";

interface Data extends Record<string, any> {
    spent: number;
    title: string;
    endDate: string;
    startDate: string;
    categoryId: string;
    description: string;
}

const defaultData = {
    spent: 0,
    title: '',
    endDate: '',
    startDate: '',
    categoryId: '',
    description: '',
}

const defaultErrors = {
    spent: '',
    title: '',
    endDate: '',
    startDate: '',
    categoryId: '',
    description: '',
}

function CreateEvent() {
    const dispatch = useAppDispatch();

    const { categories } = useGetAllCategories();

    const [data, setData] = useState<Data>(defaultData);
    const [errors, setErrors] = useState<Record<string, string>>(defaultErrors);

    const [image, setImage] = useState<File | null>(null);
    const [gallery, setGallery] = useState<File[]>([]);
    const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

    const isDisabled = (
        Object.values(errors).some(error => error !== '')
        || markers.length === 0
        || markers.length > 1
        || data.title === ''
        || data.description === ''
        || data.startDate === ''
        || data.categoryId === ''
    );

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            title: e.target.value
        });

        if (e.target.value.length === 0) {
            setErrors({
                ...errors,
                title: 'Title is required'
            });
            return;
        }

        setErrors({
            ...errors,
            title: ''
        });
    }

    const handleChangeCategory = (e: SelectChangeEvent<unknown>) => {
        setData({
            ...data,
            categoryId: e.target.value as string
        });
    }

    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            description: e.target.value
        });

        if (e.target.value.length === 0) {
            setErrors({
                ...errors,
                description: 'Description is required'
            });
            return;
        }

        setErrors({
            ...errors,
            description: ''
        });
    }

    const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            startDate: e.target.value
        });
    }

    const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            endDate: e.target.value
        });
    }

    const handleCancelImage = () => {
        setImage(null);
        setImagePreview('');
    }

    const handleChangeSpent = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            spent: parseInt(e.target.value)
        });
    }

    const handleRemovePreview = (indexToRemove: number) => {
        const newGalleryPreviews = galleryPreviews.filter((_, index) => index !== indexToRemove);
        URL.revokeObjectURL(galleryPreviews[indexToRemove]);
        setGalleryPreviews(newGalleryPreviews);
        setGallery(gallery.filter((_, index) => index !== indexToRemove));
    };

    const handleDropImage = (acceptedFiles: File[]) => {
        const preview = URL.createObjectURL(acceptedFiles[0]);
        setImage(acceptedFiles[0]);
        setImagePreview(preview);
    }

    const handleDropGallery = (acceptedFiles: File[]) => {
        const previews = acceptedFiles.map(file => URL.createObjectURL(file));
        setGallery(acceptedFiles);
        setGalleryPreviews(previews);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!image) {
            dispatch(
                showToastr({
                    message: 'Image is required',
                    severity: Severity.Warning
                })
            );
            return;
        }

        if (markers.length === 0) {
            dispatch(
                showToastr({
                    message: 'At least one location is required',
                    severity: Severity.Warning
                })
            );
            return;
        }

        if (markers.length > 1) {
            dispatch(
                showToastr({
                    message: 'Only one location is allowed',
                    severity: Severity.Warning
                })
            );
            return;
        }

        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('spent', data.spent.toString());
        formData.append('categoryId', data.categoryId);
        formData.append('description', data.description);
        formData.append('startDate', data.startDate);
        formData.append('endDate', data.endDate);
        formData.append('lat', markers[0].lat.toString());
        formData.append('lng', markers[0].lng.toString());
        formData.append('image', image);

        gallery.forEach(galleryImage => {
            formData.append('gallery', galleryImage);
        });

        dispatch(createEvent(formData));

        setData(defaultData);
        setMarkers([]);
        setImage(null);
        setImagePreview('');
        setGallery([]);
        setGalleryPreviews([]);
    };

    useEffect(() => {
        dispatch(setPage('Create event'));
    }, []);

    const { getRootProps: getRootImageProps, getInputProps: getInputImageProps, isDragActive: isDragImageActive } = useDropzone({ onDrop: handleDropImage });
    const { getRootProps: getRootGalleryProps, getInputProps: getInputGalleryProps, isDragActive: isDragGalleryActive } = useDropzone({ onDrop: handleDropGallery });

    if (!categories) {
        return null;
    }

    return (
        <MainContainer>
            <FormContainer>
                <Title>Create event</Title>
                <Form onSubmit={handleFormSubmit}>
                    <InputsContainer>
                        <InputField
                            required
                            size="small"
                            label="Title"
                            variant="outlined"
                            value={data.title}
                            onChange={handleChangeTitle}
                        />
                        <FormControlField required fullWidth size="small">
                            <InputLabel id="category-select-label">Category</InputLabel>
                            <SelectField
                                labelId="category-select-label"
                                id="category-select"
                                value={data.categoryId}
                                label="Category"
                                onChange={handleChangeCategory}
                            >
                                {
                                    categories.map(
                                        (category) => (
                                            <MenuItem key={category.id} value={category.id}>
                                                {category.name}
                                            </MenuItem>
                                        ))
                                }
                            </SelectField>
                        </FormControlField>
                        <InputField
                            required
                            size="small"
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={data.description}
                            onChange={handleChangeDescription}
                        />
                        <InputField
                            required
                            size="small"
                            type="datetime-local"
                            label="Start date"
                            variant="outlined"
                            value={data.startDate || ''}
                            onChange={handleChangeStartDate}
                            InputLabelProps={{ shrink: true }}
                        />
                        <InputField
                            size="small"
                            type="datetime-local"
                            label="End date"
                            variant="outlined"
                            value={data.endDate || ''}
                            onChange={handleChangeEndDate}
                            InputLabelProps={{ shrink: true }}
                        />
                        <InputField
                            size="small"
                            type="number"
                            label="Spent"
                            variant="outlined"
                            value={data.spent}
                            onChange={handleChangeSpent}
                        />
                        <DragAndDropZone {...getRootImageProps()}>
                            <Input {...getInputImageProps()} />
                            {isDragImageActive ? <Text>Drop the event image here ...</Text> : <Text>Drag 'n' drop the event image here, or click to select it</Text>}
                        </DragAndDropZone>
                        {
                            imagePreview && (
                                <ImageContainer>
                                    <Image src={imagePreview} alt="Preview image" />
                                    <CancelIconButton size="small" onClick={handleCancelImage}>
                                        <FaTimes />
                                    </CancelIconButton>
                                </ImageContainer>
                            )
                        }
                        <DragAndDropZone {...getRootGalleryProps()}>
                            <Input {...getInputGalleryProps()} />
                            {isDragGalleryActive ? <Text>Drop the event gallery here ...</Text> : <Text>Drag 'n' drop the event gallery here, or click to select it</Text>}
                        </DragAndDropZone>
                        {
                            galleryPreviews.length > 0 && (
                                <GalleryContainer>
                                    {galleryPreviews.map((preview, index) => (
                                        <GalleryImageContainer key={index}>
                                            <GalleryImage src={preview} alt={`Preview gallery image ${index + 1}`} />
                                            <CancelIconButton onClick={() => handleRemovePreview(index)} size="small">
                                                <FaTimes />
                                            </CancelIconButton>
                                        </GalleryImageContainer>
                                    ))}
                                </GalleryContainer>
                            )
                        }
                        <MapWrapper>
                            <CreateEventMap
                                markers={markers}
                                setMarkers={setMarkers}
                            />
                        </MapWrapper>
                    </InputsContainer>
                    <SubmitButtonWrapper>
                        <SubmitButton variant="contained" size="small" type="submit" disabled={isDisabled}>
                            Create
                        </SubmitButton>
                    </SubmitButtonWrapper>
                </Form>
            </FormContainer>
        </MainContainer>
    );
}

export default CreateEvent;