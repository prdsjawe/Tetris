import { StyledDisplay } from "./style"

const Display = ({ gameOver, text }) => {
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    )
}

export default Display