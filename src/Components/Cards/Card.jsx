import React from "react";
import { Link } from "react-router";

function card({Title='Title here', Img, Msg='Image here'}) {
  return (
    <div className="container mt-2">
      <div className="card" style={{ width: "15rem"}}>
        <img src={Img} className="card-img-top" alt={Msg} />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}

export default card;
