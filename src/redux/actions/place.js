import { ACTION } from "../constants/actionType";

export const actSavePlaces = (Places) => {
    return {
        type: ACTION.SAVE_PLACES,
        Places
    }
}
export const actSaveFromPlace = (FromPlace) => {
    return {
        type: ACTION.SAVE_FROM_PLACE,
        FromPlace
    }
}
export const actRemoveFromPlace = () => {
    return {
        type: ACTION.REMOVE_FROM_PLACE
    }
}
export const actSaveToPlaces = (ToPlaces) => {
    return {
        type: ACTION.SAVE_TO_PLACES,
        ToPlaces
    }
}
export const actRemoveToPlaces = () => {
    return {
        type: ACTION.REMOVE_TO_PLACES
    }
}