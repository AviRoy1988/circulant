import { ShopActionTypes } from "./shop-action-types";
import {
  firestore,
  convertSnapshotToCollectionMap,
} from "../../components/firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsAsyncStart = () => {
  return (despatch) => {
    const collectionRef = firestore.collection("collections");
    despatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertSnapshotToCollectionMap(snapshot);
        despatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => despatch(fetchCollectionsFailure(error.message)));
  };
};

export const fetchCollectionsFailure = (errormessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errormessage,
  isFetching: false,
});
