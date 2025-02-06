import React from "react";

export const Simple = () => {
  // return (
  //   <div className="simple">
  //     <h1 className="simple-title">Simple React element</h1>
  //   </div>
  // );

  return React.createElement(
    "div",
    { className: "simple" },
    React.createElement("h1", { className: "simple-title" }, "Simple React element")
  );
};
