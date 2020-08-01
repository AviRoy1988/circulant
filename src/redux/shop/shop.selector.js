import { createSelector } from "reselect";
import memoize  from "lodash.memoize";


const selectShop = (state) => state.shop;

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCollection = memoize((shopCategoryFromUrl) =>
  createSelector([selectShopCollections], (collections) =>
    collections ?  collections[shopCategoryFromUrl] : null
  )
);

export default selectShopCollections;
