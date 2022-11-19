import React from "react";
import './ProgressBar.css';


const ProgressBar = ({total, completed}) => {
  let porcentaje = (completed*100/total);

  if (!(porcentaje % 1 === 0)){
    porcentaje = parseFloat(porcentaje).toFixed(2);
  }

  return (
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: porcentaje+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{porcentaje} %</div>
    </div>
  )
}

export default ProgressBar;