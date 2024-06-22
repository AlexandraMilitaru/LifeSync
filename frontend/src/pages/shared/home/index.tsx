import { routes } from "../../../constants/route-constants";
import { setPage } from "../../../features/router/slice";
import { useEffect } from "react";
import { useAppDispatch } from "../../../store";
import {
    Main,
    Title,
    Wrapper,
    Subtitle,
    Container,
    LoginLink,
    RegisterLink,
    LinksContainer,
} from "./styles";

function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPage('Home'))
    }, [])

    return (
        <Main>
            <Wrapper>
                <Container>
                    <Title>
                        LifeSync
                    </Title>
                    <Subtitle>
                        Concentrate all your thoughts upon the work in and. The sun's rays do not burn until brought to a focus. Alexander Graham Bell
                    </Subtitle>
                    <LinksContainer>
                        <RegisterLink to={routes.register}>Register</RegisterLink>
                        <LoginLink to={routes.login}>Login</LoginLink>
                    </LinksContainer>
                </Container>
            </Wrapper>
        </Main>
    )
}

export default Home;