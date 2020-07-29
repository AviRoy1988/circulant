import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => (
  <div className="shop-name">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionID`} component={CollectionPage}/>
  </div>
);

export default ShopPage;
