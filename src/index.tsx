import React from "react";
import ReactDOM from "react-dom";

var time = new Date();
var hour = time.getHours();

var heading = {
  color: "",
};

var greeting;
if (hour < 12) {
  greeting = "Good Morning";
  heading.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  heading.color = "green";
} else {
  greeting = "Good Night";
  heading.color = "blue";
}

ReactDOM.render(<h1 style={heading}>{greeting}</h1>, document.getElementById("root"));
