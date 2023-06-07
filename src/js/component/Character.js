import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";

const Character = (props) => {
  const { store, actions } = useContext(Context);

  const handleAddFavorite = () => {
    actions.addFavorite(props.name);
  };

  return (
    <div className="card my-4 border-0 bg-dark" style={{ width: "18rem" }}>
      <img
        src="https://carve850.com.uy/wp-content/uploads/2023/01/src_600x338star-wars-filmleri-hangi-sirayla-izlenir-star-wars-izleme-sirasi.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-white rounded-bottom">
        <h5 className="card-title">{props?.name}</h5>
        <p className="card-text my-0">Eye color: {props?.eye_color}</p>
        <p className="card-text my-0">Hair color: {props?.hair_color}</p>
        <p className="card-text my-0">Gender: {props?.gender}</p>
        <div className="d-flex justify-content-between mt-4">
          <Link to={`/characters/${props?.uid}`} className="btn btn-outline-warning">
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
};

checkPropTypes = {
  name: checkPropTypes.string,
  eye_color: checkPropTypes.string,
  hair_color: checkPropTypes.string,
  gender: checkPropTypes.string,
  uid: checkPropTypes.string,
};

export default Character;
