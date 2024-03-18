import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="250"
        viewBox="0 0 250 250"
      >
        <circle cx="125" cy="125" r="120" fill="#121212" />

        <line
          x1="50"
          y1="40"
          x2="210"
          y2="210"
          stroke="#757575"
          strokeWidth="2"
        />
        <line
          x1="30"
          y1="110"
          x2="220"
          y2="90"
          stroke="#757575"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="20"
          x2="230"
          y2="180"
          stroke="#757575"
          strokeWidth="2"
        />
        <line
          x1="170"
          y1="10"
          x2="60"
          y2="230"
          stroke="#757575"
          strokeWidth="2"
        />

        <line
          x1="50"
          y1="50"
          x2="210"
          y2="210"
          stroke="#757575"
          strokeWidth="1.5"
        />
        <line
          x1="30"
          y1="120"
          x2="220"
          y2="100"
          stroke="#757575"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="30"
          x2="230"
          y2="190"
          stroke="#757575"
          strokeWidth="1.5"
        />
        <line
          x1="170"
          y1="20"
          x2="60"
          y2="240"
          stroke="#757575"
          strokeWidth="1.5"
        />

        <circle cx="60" cy="100" r="30" fill="#212121" />
        <circle cx="190" cy="80" r="50" fill="#424242" />
        <circle cx="150" cy="150" r="40" fill="#757575" />
        <circle cx="90" cy="190" r="60" fill="#9e9e9e" />
        <circle cx="220" cy="190" r="30" fill="#bdbdbd" />
        <circle cx="40" cy="170" r="20" fill="#e0e0e0" />

        <circle
          cx="125"
          cy="125"
          r="120"
          fill="transparent"
          stroke="transparent"
        >
          <animate
            attributeName="stroke"
            values="#ffffff;#ffffff;transparent;#ffffff"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Home;
