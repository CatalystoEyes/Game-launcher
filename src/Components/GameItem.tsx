import { useActions } from '../hooks/useActions'
import { useFavourites } from '../hooks/useFavorites'
import { IGame } from '../Types/games.types'
import Modal from './Modal'

interface IGameProps {
  game: IGame
}

const GameItem = ({ game }: IGameProps) => {
  const { favourites } = useFavourites()

  const { ToggleFavourites } = useActions()

  const isExists = favourites.some(g => g.id === game.id)
  const modalId = `game_modal_${game.id}`

  return (
    <div className='block relative m-auto bg-base-300 pb-3 rounded w-4/5 my-8' data-theme="sunset">
      <img src={game.image} alt={game.name} className='w-full rounded my-5' />
      <h2 className='text-2xl text-center'>{game.name}</h2>
      <div>
        <p className='text-center px-4'>{game.description}</p>
      </div>
      <div className='flex justify-center items-center my-1'>
        <button className="btn btn-outline my-1 mt-2 mx-2" onClick={() => ToggleFavourites(game)}>{isExists ? 'Remove from ' : 'Add to '}favorites</button>
        <Modal game={game} modalId={modalId} />
      </div>
    </div>
  )
}

export default GameItem
