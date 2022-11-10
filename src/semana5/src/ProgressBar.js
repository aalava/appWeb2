import React from "react";
import './ProgressBar.css';

function ProgressBar(){
  return (
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
  );
}

export default ProgressBar;