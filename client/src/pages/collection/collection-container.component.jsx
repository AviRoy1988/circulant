import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import CollectionPage from "./collection.component";
import withSpinner from "../../components/withSpinner/withspinner.component";
import {selectIsLoadingCollections} from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
    isLoading: state=> !selectIsLoadingCollections(state)
})


const CollectionPageContainer = compose(connect(mapStateToProps),withSpinner)(CollectionPage);

export default CollectionPageContainer;