import authReducer from '../features/auth/slice';
import toastrReducer from '../features/toastr/slice';
import routerReducer from '../features/router/slice';
import eventsReducer from '../features/events/slice';
import authMiddleware from '../features/auth/middleware';
import commentsReducer from '../features/comments/slice';
import toastrMiddleware from '../features/toastr/middleware';
import eventsMiddleware from '../features/events/middleware';
import navigationReducer from '../features/navigation/slice';
import categoriesReducer from '../features/categories/slice';
import statisticsReducer from '../features/statistics/slice';
import navigationMiddleware from '../features/navigation/middleware';
import {
    configureStore,
    combineReducers
} from '@reduxjs/toolkit';
import {
    useDispatch,
    useSelector,
    TypedUseSelectorHook
} from 'react-redux';

const rootReducer = combineReducers({
    auth: authReducer,
    toastr: toastrReducer,
    router: routerReducer,
    events: eventsReducer,
    comments: commentsReducer,
    statistics: statisticsReducer,
    categories: categoriesReducer,
    navigation: navigationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware:
        (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(authMiddleware)
                .concat(toastrMiddleware)
                .concat(eventsMiddleware)
                .concat(navigationMiddleware)
})

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;