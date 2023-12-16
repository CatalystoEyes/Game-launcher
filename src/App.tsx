import { useState } from "react";
import GameItem from "./Components/GameItem"
import CreateGame from "./Components/forms/CreateGame";
import Header from "./Components/header/Header";
import User from "./Components/user/User";
import { useGetGamesQuery } from "./store/api/api";
import Footer from "./Components/Footer/Footer";

function App() {
  const [queryTerm, setQueryTerm] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { isLoading, data } = useGetGamesQuery(queryTerm /*undefined, {
    skip: !userId
  }*/)
  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }

  return (
    <>
      <div className="sticky z-10 top-0 navbar bg-neutral left-0 right-0" data-theme="sunset">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl mr-1" href="https://github.com/CatalystoEyes/Game-launcher" target="_blank">Game launcher</a>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="search" className="input input-bordered w-full max-w-xs bg-base-100" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Enter search game" />
            </div>
          </div>
          <button onClick={handleSearch} className="btn btn-outline mx-2">Find</button>
        </div>
        <User />
      </div>
      <div className="relative text-slate-300">
        <Header />
        {isLoading ? <div className="text-center text-3xl mt-4">Loading...</div>
          : data ? <div>
            <section>
              <h1 className="text-center text-3xl mt-5">Recently releases</h1>
              {data.map(games =>
                <GameItem key={games.id} game={games} />)}
            </section>
            <Footer />
          </div>
            : <div className="text-center text-3xl mt-4">Not found</div>}
      </div>
    </>
  )
}

export default App
