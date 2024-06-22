import CircularSpinner from '../../circular-spinner';
import { LoadingProps } from './types';
import {
    Main,
    Container
} from '../../../styles/auth/styles';

function Loading(props: LoadingProps) {
    console.log('RENDER AUTH LOADING COMPONENT');

    const { isLoading } = props;

    return (
        <Main>
            <Container>
                {
                    isLoading
                        ? <CircularSpinner size={75} color="#fff" />
                        : undefined
                }
            </Container>
        </Main>
    )
}

export default Loading;