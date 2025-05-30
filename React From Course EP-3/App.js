import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (
  <h2 className="head" tabIndex={1}>
    This is a heading !
  </h2>
);

// This is Component composition
function HeadingComponent() {
  return (
    <>
      {Heading}
      <h2>This is the heading from Heading Component</h2>;
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
