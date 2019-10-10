
import * as types from "./actionTypes";

export function buy_Item(feature) {
    return {type: types.BUY_ITEM, payload: feature}
}

export function remove_Feature(feature) {
    return {type: types.REMOVE_FEATURE, payload: feature}
}