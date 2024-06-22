import RequestUtils from '../../utils/request-utils';

const CATEGORIES_API_BASE_URL = '/api/categories';

const getAll = async () => {
    return RequestUtils.get(CATEGORIES_API_BASE_URL);
}

export const categoriesService = {
    getAll
}