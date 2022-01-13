import { useState, useEffect } from "react"
import { CreateStage } from "../GameHelpers"

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(CreateStage());

    useEffect(() => {
        const updateStage = prevStage => {
            //flush the stage
            const newStage = prevStage.map(row => {
                return row.map(cell => {
                    return (cell[1] === "clear") ? [0, "clear"] : cell
                })
            })

            //draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`]
                    }
                })
            })

            if(player.collided) {
                resetPlayer();
            }
            return newStage;
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])

    return [stage, setStage];
}