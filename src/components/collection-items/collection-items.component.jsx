import React from "react";
import "./collection-items.style.scss";

const CollectionItems = ({ name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span class="name">{name}</span>
        <span class="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItems;
