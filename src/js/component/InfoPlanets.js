import React from 'react'
import { checkPropTypes } from "prop-types";

function infoPlanets(props) {

    return (
        <>
            <figure className="figure col-md-6">
                <img src="https://www.purecostumes.com/mm5/graphics/infographic/Info-Star-Wars-Planets.jpg" style={{ width: "40rem" }} className="figure-img img-fluid rounded" alt="..." />
            </figure>
            <div className='col-md-6 text-white'>
                <div className="text-center">
                    <h1>{props?.name}</h1>
                    
                </div>
                <div className="text-center text-white table-white border border-secondary">
                    <table className="table table-borderless text-white">
                        <tbody>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td><span>{props?.name}</span></td>
                            </tr>
                            <tr>
                                <td><strong>POPULATION</strong></td>
                                <td><span>{props?.population}</span></td>
                            </tr>
                            <tr>
                                <td><strong>TERRAIN</strong></td>
                                <td><span>{props?.terrain}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </>

    )
}

checkPropTypes = {
    name: checkPropTypes.string,
    population: checkPropTypes.string,
    terrain: checkPropTypes.string,
  };

export default infoPlanets