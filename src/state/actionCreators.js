
import * as types from "./actionTypes";

export function add_Feature(feature) {
    return {type: types.ADD_FEATURE, payload: feature}
}

export function remove_Feature(feature) {
    return {type: types.REMOVE_FEATURE, payload: feature}
}