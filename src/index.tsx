import React from "react";
import ReactDOM from "react-dom";

// location
var location = document.getElementById("root");

// time module
var time = new Date(2025, 12, 12, 13);

// current time
var hour = time.getHours();

var greeting1 = "Good Morning";
var greeting2 = "Good Afternoon";
var greeting3 = "Good Night";

var greeting = "";
if (hour < 12) {
  greeting = greeting1;
} else if (hour >= 12 && hour < 18) {
  greeting = greeting2;
} else {
  greeting = greeting3;
}
var heading;

if (greeting == greeting1) {
  heading = {
    color: "red",
  };
} else if (greeting == greeting2) {
  heading = {
    color: "green",
  };
} else {
  heading = {
    color: "blue",
  };
}

// code
var code = (
  <div>
    <h1 style={heading}>{greeting}</h1>
  </div>
);

ReactDOM.render(code, location);
