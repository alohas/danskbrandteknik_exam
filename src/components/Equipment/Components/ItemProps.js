import React from "react";

//Styles
import "./ItemProps.scss";

function ItemProps({ name, fact1, fact2, fact3, children }) {
  return (
    <div id="ItemProps">
      <div className="icon-wrap">{children}</div>
      <h4 className="cat-name">{name}</h4>
      <ul className="list">
        <li className="l-item">{fact1}</li>
        <li className="l-item">{fact2}</li>
        <li className="l-item">{fact3}</li>
      </ul>
    </div>
  );
}

export default ItemProps;
