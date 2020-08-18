import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import withSpinner from "../withSpinner/withspinner.component";
import {selectIsFetchingCollections} from "../../redux/shop/shop.selector";
import {compose} from 'redux';
import collectionOverview from "./collection-overview.component";


const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingCollections
})

export const CollectionOverviewContainer = compose(connect(mapStateToProps), withSpinner)(collectionOverview);