import { SAVE_LIST_PLACE, SAVE_FROM_PLACE, REMOVE_FROM_PLACE } from "../constants/actionType";

export const actSavePlaceList = (PlaceList) => {
    return {
        type: SAVE_LIST_PLACE,
        PlaceList
    }
}
export const actSaveFromPlace = (FromPlace) => {
    return {
        type: SAVE_FROM_PLACE,
        FromPlace
    }
}
export const actRemoveFromPlace = () => {
    return {
        type: REMOVE_FROM_PLACE
    }
}