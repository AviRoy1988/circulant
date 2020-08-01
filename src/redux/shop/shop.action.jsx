import {ShopActionTypes} from './shop-action-types'

export const UpdateShopCollection= collectionMap => ({
    type : ShopActionTypes.UPDATE_SHOP_COLLECTION,
    payload : collectionMap
})