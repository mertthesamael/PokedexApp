import { NavLink } from "react-router-dom";
import "./favorites.scss"

const Favorites = (props) => {
    let keygen = require("keygenerator")
    const resetFav = () => {
        localStorage.clear()
    }

    return (
      <div className="favoritespage">
        <div className="favoritespage__favorite-cards">
          {Object.values(localStorage).map(
            (favorite) =>
              favorite.includes("favpoke__name") &&
              favorite.includes("favpoke__img") && (
                <NavLink
                  key={keygen._()}
                  to={"/" + JSON.parse(favorite).favpoke__name}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "default",
                  }}
                >
                  <div className="favoritespage__favorite-cards__item">
                    <h1>{JSON.parse(favorite).favpoke__name}</h1>
                    <img src={JSON.parse(favorite).favpoke__img}></img>
                  </div>
                </NavLink>
              )
          )}
        </div>
        <div className="reset-btn">
          <NavLink to="/" onClick={resetFav} className="reset-btn__reset">
            Reset Favorites !
          </NavLink>
        </div>
      </div>
    );

}

export default Favorites;