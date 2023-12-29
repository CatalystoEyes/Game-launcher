import { BsBookmarkHeartFill } from "react-icons/bs"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useFavourites } from "../../hooks/useFavorites"

const User = () => {
  const { favourites } = useFavourites()
  const { isLoading, error, user } = useTypedSelector(state => state.user)
  const { getUserById } = useActions()

  const logOut = () => {

  }

  return (
    <div className="flex items-center flex-wrap">
      {isLoading
        ? <div>Loading...</div>
        : error ? <div>{error.message}</div>
          : user?.name ? <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.image} alt="" />
                </div>
              </div>
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li tabIndex={0}><button onClick={() => logOut()}>Logout</button></li>
              </ul>
            </div>
            <div className="flex items-center">
              <h1 className="mr-4">{user.name}</h1>
              <header className="flex items-center">
                <BsBookmarkHeartFill className="mr-1" size={24} />
                <span>{favourites.length}</span>
              </header>
            </div>
          </>
            : <div>
              User not found
              <button className="btn btn-outline mx-1" onClick={() => getUserById(1)}>Log in</button>
            </div>}
    </div>
  )
}

export default User
