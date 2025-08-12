import React from "react";
import ReactDOM from "react-dom/client"

//createElement is the Object and not the html tag
const heading = React.createElement("h1",{id : "heading" , color : "red"}, "Namasate!");

const root = ReactDOM.createRoot(document.getElementById("root"));

// In the render stage the object will be converted into the html tag
root.render(heading);

// JSX is not the html
// JSX is different and HTML is different 
const JSXHeading = <h1 id = "heading" color = "red">Namasate React using JSX</h1>

console.log(heading);
console.log(JSXHeading);
