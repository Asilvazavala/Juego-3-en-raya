import { winnerCombo } from './logic'

export const Square = ({ children, updateBoard, index, winner }) => {  
  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div 
      onClick={handleClick} 
      className={`w-24 h-24 grid items-center justify-center cursor-pointer text-3xl
      border-2 border-red-maroon md:w-28 md:h-28 md:text-5xl ${winner && winnerCombo.includes(index) && 'bg-red-900'}`}>
      {children}
    </div>
  )
}
