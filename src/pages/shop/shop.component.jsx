import React from "react";
import {CollectionOverviewContainer} from "../../components/collection-overview/collection-overview-container.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPageContainer from "../collection/collection-container.component";
import { fetchCollectionsAsyncStart } from "../../redux/shop/shop.action";



class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsAsyncStart} = this.props;
    fetchCollectionsAsyncStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-name">
        <Route exact path={`${match.path}`} 
        component={CollectionOverviewContainer} 
        />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsyncStart: () =>
    dispatch(fetchCollectionsAsyncStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
