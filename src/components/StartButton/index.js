import { StyledStartButton } from "./style"

const StartButton = ({ callBack }) => {
    return (
        <StyledStartButton onClick={callBack}>
            Start Game
        </StyledStartButton>
    )
}

export default StartButton