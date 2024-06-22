import Loading from '../../../components/loading';
import { useLogoutHook } from '../../../features/auth/hooks';

function Logout() {
    const { isLoading } = useLogoutHook();

    return (
        <Loading isLoading={isLoading} />
    )
}

export default Logout;