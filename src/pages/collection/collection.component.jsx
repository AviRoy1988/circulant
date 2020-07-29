import React from "react";
import "./collection.style.scss";
import CollectionItems from "../../components/collection-items/collection-items.component";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
