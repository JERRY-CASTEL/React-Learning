import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id: "child1"}, 
            [React.createElement("h1",{}, "Hey I am inside H1 tag !"), React.createElement("h2",{}, "Hey I am inside H2 tag !")]
        ),
        React.createElement("div",{id: "child2"}, 
            [React.createElement("h1",{}, "Hey I am inside H1 tag !"), React.createElement("h2",{}, "Hey I am inside H2 tag !")]
        )
    ]
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

 
