import { Status } from '../../enums/status-enum';
import { useEffect } from 'react';
import { getAllCategories } from './thunks';
import { CategoriesFunctionality } from './constants';
import { selectStatusByFunctionality } from './slice';
import {
    useAppDispatch,
    useAppSelector
} from '../../store';

const useCategoriesStatus = (categoriesFunc: CategoriesFunctionality) => {
    const status = useAppSelector((state) => selectStatusByFunctionality(state, categoriesFunc));

    const isIdle = status === Status.Idle;
    const isError = status === Status.Rejected;
    const isLoading = status === Status.Pending;
    const isSuccess = status === Status.Fulfilled;

    return { isIdle, isLoading, isError, isSuccess };
};

export const useGetAllCategories = () => {
    const dispatch = useAppDispatch();

    const categories = useAppSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])

    return { categories, ...useCategoriesStatus(CategoriesFunctionality.GetAll) };
}