import { IGame } from '../Types/games.types'

interface IGameProps {
    game: IGame
    modalId: IGame
}
const Modal = ({ game, modalId }: IGameProps) => {
    return (
        <>
            <div>
                <button
                    className="btn btn-outline my-1 mt-2"
                    onClick={() => document.getElementById(modalId)?.showModal()}
                >
                    More about
                </button>
                <dialog id={modalId} className="modal">
                    <div className="modal-box">
                        <div>
                            <div>
                                <h3 className="font-bold text-lg">{game.name}</h3>
                                <p className="py-4">{game.description}</p>
                                <p className='text-xl text-green-400'>${game.price}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Modal
