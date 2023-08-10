import React from "react";

export default function Photos06(props) {
    if (props.photos) {
        return (
            <div className="photos">
                <section >
                    <div className="row">
                        {props.photos.map(function (photo, index) {
                            return (
                                <div className="col-sm-4" key={index}  >
                                        <img src={photo.src.landscape} alt="pic" className="img-fluid" />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        )
    } else {
        return null;
    }
} 