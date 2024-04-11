import { ADD_PHOTO } from './actionTypes';

const initialState = {
    isPhoto: null,
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...state,
                isPhoto: action.payload,
            };
        default:
            return state;
    }
};

export default myReducer;


