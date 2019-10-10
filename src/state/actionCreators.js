
import * as types from "./actionTypes";

export function buy_Item(selectedItem, newStoreState) {
    return {type: types.BUY_ITEM, payload:{features: selectedItem, store: newStoreState}}
}

export function remove_Feature(selectedItem, newStoreState) {
    return {type: types.REMOVE_FEATURE, payload:{features: selectedItem, store: newStoreState}}
}