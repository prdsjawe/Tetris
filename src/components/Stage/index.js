import Cell from "../Cell"

const Stage = ({ stage }) => {
    return (
        <div>
            {stage.map(row => row.map((cell, x) => {
                return <Cell key={x} type={cell[x]} />
            }))}
        </div>
    )
}

export default Stage