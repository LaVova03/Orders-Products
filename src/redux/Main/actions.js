import { ADD_PHOTO } from './actionTypes';

export const addPhoto = (isCategoryRedux) => ({
    type: ADD_PHOTO,
    payload: isCategoryRedux,
})
