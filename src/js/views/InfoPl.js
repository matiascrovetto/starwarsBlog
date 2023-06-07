import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import InfoPlanets from "../component/InfoPlanets";
import { useParams } from "react-router";

export const InfoPl = () => {
  const { uid } = useParams();
  console.log(uid);

  const { store, actions } = useContext(Context);
  console.log(JSON.stringify(store) + " " + "estos son los resultados");

  const [planets, setplanets] = useState(null);

  const getPlanet = () => {
    fetch("https://www.swapi.tech/api/planets/" + uid)
      .then((res) => res.json())
      .then((data) => setplanets(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPlanet();
  }, [uid]);

  return (
    <>
      <div className="bg-black vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            {planets && (
              <InfoPlanets
                name={planets.result.properties.name}
                population={planets.result.properties.population}
                terrain={planets.result.properties.terrain}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
