import React from 'react';

function PlaceholderImage({ componentClass, height, width }) {
  let svgComponent;

  if (componentClass === 'circle') {
    svgComponent = (
      <circle cx={width / 2} cy={height / 2} r={width / 2} fill="#F7F5F1" />
    );
  } else {
    svgComponent = <rect width={width} height={height} fill="#F7F5F1" />;
  }

  return (
    <svg
      className="placeholder-image"
      width={width}
      height={height}
      xmlns="https://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none">
      <g>{svgComponent}</g>
    </svg>
  );
}

export default PlaceholderImage;
