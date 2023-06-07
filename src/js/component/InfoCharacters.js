import React from 'react';
import { checkPropTypes } from "prop-types";


function InfoCharacters (props) {


    return (
        <>
            <figure className="figure col-md-6">
                <img src="https://carve850.com.uy/wp-content/uploads/2023/01/src_600x338star-wars-filmleri-hangi-sirayla-izlenir-star-wars-izleme-sirasi.jpg" style={{ width: "40rem" }} className="figure-img img-fluid rounded" alt="..." />
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
                                <td><strong>EYE COLOR</strong></td>
                                <td><span>{props?.eye_color}</span></td>
                            </tr>
                            <tr>
                                <td><strong>HAIR COLOR</strong></td>
                                <td><span>{props?.hair_color}</span></td>
                            </tr>
                            <tr>
                                <td><strong>GENDER</strong></td>
                                <td><span>{props?.gender}</span></td>
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
    eye_color: checkPropTypes.string,
    hair_color: checkPropTypes.string,
    gender: checkPropTypes.string,
};

export default InfoCharacters