import React from "react";

function CenterLayout({ children }) {
  return (
    <div className="container">
      <children />
    </div>
  );
}

export default CenterLayout;
