import React, { useState } from "react";
import { Years } from "../../Util/apiConstant";
import "./Style.css";

function Filter({ initial, clickfilter }) {

  const [active, setActive] = useState(initial);

  const filterUpdate = (key, value) => {
    console.log("filter update " + key + value);
    setActive({ ...active, [key]: value });
    clickfilter(key, value);
  };

  return (
    <div className="FilterList">
      <div>
        <h2>Filters</h2>
      </div>
      <div className="heading">Launch Year</div>

      <div className="tiles">
        {Years.map((year, i) => {
          return (
            <div key={i} className={`chip ${active["launch_year"] === year ? "active" : "" }`}onClick={() => {filterUpdate("launch_year", year);}}>
              {year}
            </div>
          );
        })}
      </div>

      <div className="heading">Successful Launch </div>

      <div className="tiles">
        {["true", "false"].map((isLaunched, i) => {
          return (
            <div key={i} className={`chip ${active["launch_success"] == isLaunched ? "active" : "" }`} onClick={() => {filterUpdate("launch_success", isLaunched);}} >
              {isLaunched.toUpperCase()}
            </div>
          );
        })}
      </div>

      <div className="heading">Successful Landing </div>

      <div className="tiles">
        {["true", "false"].map((isLanded, i) => {
          return (
            <div key={i} className={`chip ${active["land_year"] == isLanded ? "active" : ""}`}onClick={() => { filterUpdate("land_year", isLanded); }} >
              {isLanded.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
