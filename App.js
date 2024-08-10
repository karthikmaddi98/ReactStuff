import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => ReactElement => JS Object => HTMLElement(render)

// const heading = React.createElement("h1", {id : "heading"}, "Hello World!!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//JSX - is not HTML in JS, its a HTML or XML like syntax
//JSX code is transpiled (converted) before reaches to JS Engine by Parcel -> Babel
//JSX => React.createElement => => ReactElement => JS Object => HTMLElement(render)
//Babel is doing JSX to React.createElement

// React Element
const jsxheading = (
        <h1 className="root" tabIndex="100"> 
        Namaste World using JSX
        </h1>
        );

// React Component
// Class based components - Old way of writing code
// Functional components - New way of writing code

//React Functional Component and start it with capital letter or it throws an error
const RE = <span>React Element</span>

const Title = function () { 
    return (
    <h2 className="root" tabIndex="100"> 
    {RE}

    Namaste World using JSX compoenent inside Heading Component
    </h2>
    )
};

const number = 10000;

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h2>{number}</h2>
        <h2>{100 + 404}</h2>
        {jsxheading}
      <h1 className="heading">Namaster World from Functional Component</h1>
    </div>
);

// const HeadingComponent = () => <h1>Namaster World from Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render
root.render(<HeadingComponent />);