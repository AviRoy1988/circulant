import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertSnapshotToCollectionMap,
} from "../../components/firebase/firebase.utils";
import { UpdateShopCollection } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const {updateCollection} = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertSnapshotToCollectionMap(snapshot);
      updateCollection(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-name">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(UpdateShopCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
