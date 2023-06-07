import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";

function Planets (props) {
  const { store, actions } = useContext(Context);

  const handleAddFavorite = () => {
    actions.addFavorite(props.name);
  };

  return (
    <div className="card bg-dark my-4" style={{ width: "18rem" }}>
      <img
        src="https://www.purecostumes.com/mm5/graphics/infographic/Info-Star-Wars-Planets.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-white rounded-bottom">
        <h5 className="card-title">{props?.name}</h5>
        <p className="card-text my-0">Population: {props?.population}</p>
        <p className="card-text my-0">Terrain: {props?.terrain}</p>
        <div className="d-flex justify-content-between mt-4">
        <Link to={`/planets/${props?.uid}`} className="btn btn-outline-warning">
            Learn More!
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            disabled={store.favorites.includes(props.name)}
            onClick={handleAddFavorite}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}

checkPropTypes = {
  name: checkPropTypes.string,
  population: checkPropTypes.string,
  terrain: checkPropTypes.string,
  uid: checkPropTypes.string,
};

export default Planets;
