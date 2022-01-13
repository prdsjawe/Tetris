import { CreateStage } from "../../GameHelpers"

import Stage from "../Stage"
import Display from "../Display"
import StartButton from "../StartButton"

const Tetris = () => {
    return (
        <div>
            <Stage stage={CreateStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Row" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris