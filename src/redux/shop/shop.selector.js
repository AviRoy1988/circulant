import { createSelector } from "reselect";
import memoize  from "lodash.memoize";


const selectShop = (state) => state.shop;

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectShopCollection = memoize((shopCategoryFromUrl) =>
  createSelector([selectShopCollections], (collections) =>
    collections[shopCategoryFromUrl]
  )
);

export default selectShopCollections;
