import Loading from '../../../components/loading';
import UrlUtils from '../../../utils/url-utils';
import { useActivateHook } from '../../../features/auth/hooks';

function Activate() {
    const token = UrlUtils.getTokenFromUrl();

    const { isLoading } = useActivateHook(token);

    return (
        <Loading isLoading={isLoading} />
    )
}

export default Activate;