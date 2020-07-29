import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectShopCollectionsForPreview} from "../../redux/shop/shop.selector";
import "./collection-overview.style.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
