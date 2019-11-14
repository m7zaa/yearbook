import React from "react";
import PropTypes from "prop-types";

function Student(props) {

  var imageStyle = {
    width: "200",
    // maxHeight: "150px",
    backgroundColor: "grey",
  };

  var galleryStyle = {
    margin: "0 auto 0 auto",
    backgroundColor: "grey"
  };

  var studentStyle = {
    width: "500px",
    height: "500px",
    textAlign: "center",
    padding: "15",
  };

  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1% 1%",
  };


  return (
    <div style={contentStyle}>
      <div style={galleryStyle} className="card">
        <div style={studentStyle} className="flex-item">
          <h3>{props.name}</h3>
          <p>Starting Tribe: {props.startTribe}</p>
          <p>Age: {props.age}</p>
          <p>Finsh: {props.place}</p>
            
          <img style={imageStyle}src={props.photo}/>
        </div>
              
      </div>
    </div>
  );
}


Student.propTypes = {
  name: PropTypes.string,
  startTribe: PropTypes.string,
  age: PropTypes.string,
  place: PropTypes.string,
  photo: PropTypes.string,
};

export default Student;