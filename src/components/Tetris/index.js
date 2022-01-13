import { CreateStage } from "../../GameHelpers"

import Stage from "../Stage"
import Display from "../Display"
import StartButton from "../StartButton"

import { StyledTetrisWrapper, StyledTetris } from "./style"

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={CreateStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Row" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris