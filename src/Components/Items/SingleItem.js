import React from "react";

const SingleItem = (props) => {
  console.log(props);
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img src={props.element.imgSrc} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-title">{props.element.name}</h5>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default SingleItem;
