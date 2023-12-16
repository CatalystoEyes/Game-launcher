import { FormEvent, useState } from "react"
import { useCreateGameMutation } from "../../store/api/games.api"
import { IGameData } from "../../Types/games.types"
// import './CreateGame.module.css'
const defaultValue: IGameData = {
  name: "",
  image: "",
  description: "",
  price: ""
}

const CreateGame = () => {
  const [game, setGame] = useState<IGameData>(defaultValue)

  const [CreateGame] = useCreateGameMutation({

  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    CreateGame(game).then(() => {
      setGame(defaultValue)
    })
  }

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <label>
          <input className="input input-bordered max-w-xs" type="text" placeholder="Title" value={game.name} onChange={e => setGame({ ...game, name: e.target.value })} />
          <input className="input input-bordered max-w-xs mx-1" type="text" placeholder="Image" value={game.image} onChange={e => setGame({ ...game, image: e.target.value })} />
          <input className="input input-bordered max-w-xs" type="text" placeholder="Description" value={game.description} onChange={e => setGame({ ...game, description: e.target.value })} />
          <input className="input input-bordered max-w-xs" type="text" placeholder="Price" value={game.price} onChange={e => setGame({ ...game, price: e.target.value })} />
          <button type="submit" className="btn btn-outline mx-1">Create</button>
        </label>
      </form>
    </div>
  )
}

export default CreateGame
