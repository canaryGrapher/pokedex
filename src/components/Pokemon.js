import React from 'react';

function Pokemon(props) {
    return (
        <div className="card col-12 col-xs-6 col-sm-4 col-md-3 col-lg-2 pt-2 bg-partial-white">
            <img className="card-img-top" src={props.image} alt={props.name} onClick={props.clickEvent} height="60%" />
            <div className="card-body">
                <h4 className="card-text">{props.name}</h4>
            </div>
        </div>
    )
}

export default Pokemon