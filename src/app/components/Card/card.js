import React from "react";
import "./style.css";
function card(data, key) {
  return (
    <div className="card">
      <img src={data.data.links.mission_patch_small} />
      <div className="flex">
        <h2>
          {data.data.mission_name} #{data.data.flight_number}
        </h2>
      </div>

      <div className="">
        <span> Mission Ids: </span>&nbsp;
        <ul>
      {data.data.mission_id>0 ?  data.data.mission_id.map((item,i)=>{
       return  <li>item</li>
      }) :   <li className="value">None</li>
       } </ul>
    </div>
    
      <div className="flex">
        <span> Launch Year: </span>&nbsp;
        <p className="value">{data.data.launch_year}</p>
      </div>
      <div className="flex">
        <span> Successful Launch:</span>&nbsp;
        <p className="value">{`${data.data.launch_success}`}</p>
      </div>
      <div className="flex">
        <span>Successful Landing:</span>&nbsp;<p className="value">N.A.</p>
      </div>
    </div>
  );
}

export default card;
