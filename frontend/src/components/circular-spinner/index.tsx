import { CircularProgress } from "./styles";
import { CircularSpinnerProps } from "./types";

function CircularSpinner(props: CircularSpinnerProps) {
    const { size, color } = props;

    return (
        <CircularProgress size={size} customColor={color} />
    )
}

export default CircularSpinner;