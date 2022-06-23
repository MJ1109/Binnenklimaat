import * as React from "react";

function Line(props) {
  return (
    <svg
      width="100%"
      height="50px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color= {props.color}
      viewBox="0 0 404 2"
    >
      <path stroke="#57CC99" d="M403.001.5l-403 1" />
    </svg>
  );
}

export default Line;