import { StyledCell } from "./style"
import { TETROMINOS } from "../../Tetrominos"

const Cell = ({ type }) => {
    return (
        <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
    )
}

export default Cell