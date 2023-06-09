import { Square } from './Square'

export const Board = ({ board, updateBoard, winner }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <section className="grid grid-cols-3">
        {
          board.map((el, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
                winner={winner}
                >
                  {board[index]}
                </Square>
            )
          })
        }
      </section>
    </div>
  )
}
