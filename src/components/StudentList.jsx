import React from "react";
import Student from "./Student";
import Christian from "../Assets/Img/Christian.jpg";
import Gabby from "../Assets/Img/Gabby.jpg";
import Mike from "../Assets/Img/Mike.jpg";
import Natalie from "../Assets/Img/Natalie.jpg";
import Davie from "../Assets/Img/Davie.jpg";
import Nick from "../Assets/Img/Nick.jpg";






var MasterStudentList = [
  {
    name: "Chritian Hubecki",
    startTribe: "David",
    age: "32",
    place: "7th",
    photo: Christian
  },
  {
    name: "Davie Rickenbacker",
    startTribe: "David",
    age: "28",
    place: "4th",
    photo: Davie
  },
  {
    name: "Nick Wilson",
    startTribe: "David",
    age: "27",
    place: "Winner",
    photo: Nick
  },
  {
    name: "Mike White",
    startTribe: "Goliath",
    age: "41",
    place: "Runner-Up",
    photo: Mike
  },
  {
    name: "Natalie White",
    startTribe: "Goliath",
    age: "52",
    place: "15th",
    photo: Natalie
  },
  {
    name: "Gabby Pascuzzi",
    startTribe: "Goliath",
    age: "27",
    place: "8th",
    photo: Gabby
  }
];

function StudentList() {

  return (
    <div>
      <hr />
      {MasterStudentList.map((student, index) =>
        <Student name={student.name}
          photo={student.photo}
          age={student.age}
          startTribe={student.startTribe}
          place={student.place} 
          key={index}/> 
      )}
    </div>
  );
}
export default StudentList;