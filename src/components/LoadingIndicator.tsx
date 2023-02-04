import React from "react";
import "./LoadingIndicator.css";
export const LoadingIndicator = () => {
  return (
    <div className="loading_overlay">
      <div className="animate-ring"></div>
      <span className="loading-text">&nbsp;&thinsp;Loading...</span>
    </div>
  );
};
