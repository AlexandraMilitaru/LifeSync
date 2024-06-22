import Navbar from "../../../components/navbar";
import Toastr from "../../../components/toastr";
import Sidebar from "../../../components/sidebar";
import { reset } from "../../../features/navigation/slice";
import {
    Outlet,
    useNavigate
} from "react-router-dom";
import {
    Fragment,
    useEffect
} from "react";
import {
    useAppDispatch,
    useAppSelector
} from "../../../store";
import {
    MainContainer,
    ContentWrapper,
    InnerContainer
} from "./styles";

function Global() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const url = useAppSelector(state => state.navigation.url);

    useEffect(() => {
        if (url) {
            navigate(url);
            dispatch(reset());
        }
    }, [url, navigate]);

    return (
        <Fragment>
            <MainContainer>
                <Sidebar />
                <InnerContainer>
                    <Navbar />
                    <ContentWrapper>
                        <Outlet />
                    </ContentWrapper>
                </InnerContainer>
            </MainContainer>
            <Toastr />
        </Fragment>
    )
}

export default Global;