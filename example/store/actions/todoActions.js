import {ADD_ITEM, REMOVE_ITEM} from '../types/todoTypes';

const addItem = value => {
  return async dispatch => {
    dispatch({
      type: ADD_ITEM,
      payload: value,
    });
  };
};

const removeItem = value => {
  return async dispatch => {
    dispatch({
      type: REMOVE_ITEM,
      payload: value,
    });
  };
};

export {addItem, removeItem};
