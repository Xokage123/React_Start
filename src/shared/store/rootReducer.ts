import { Reducer } from 'redux';
import { SET_TOKEN } from './Token/actions';

export const initialState = {
  setToken: ''
}

export type RootState = {
  setToken: string;
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        setToken: action.text
      };
    default:
      return state;
  }
};
