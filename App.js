import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div", {id: "child"},
            [
                React.createElement("h1", {}, "Direct Div creation in App.js!!"),
                React.createElement("h2",{},"Array of Children!!")
            ]
        ),
        React.createElement(
            "div", {id: "child2"},
            [
                React.createElement("h1", {}, "Div2 Data"),
                React.createElement("h2",{},"Array of Children in Div2!!")
            ]
        )
    ]
);


// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World from React!!"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

//console.log(root);
root.render(parent);