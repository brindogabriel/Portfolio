/* eslint-disable @next/next/no-img-element */
import React from "react";
import "thanks.css";
const thanks = () => {
    return (
        <div className="container gracias">
            <div className="row justify-content-center align-items-center mt-5 w-100">
                <div className="col-md-12">
                    <div className="card border-0 text-bg-dark">
                        <div className="card-body text-center">
                            <img
                                src="./assets/icons/thank-you-envelope.webp"
                                alt="Thank You Envelope"
                                width="200"
                                height="200"
                            />
                            <h2 className="card-title  mt-3 ">
                                ¡Gracias por ponerte en contacto conmigo!
                            </h2>
                            <a href="./" className="btn btn-primary">
                                Volver
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default thanks;
