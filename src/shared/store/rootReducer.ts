import { Reducer } from 'redux';
import { SAVING_TOKEN, SAVING_TOKEN_ERROR, SAVING_TOKEN_SUCCES } from './Token/actions';
import { tokenReducer, TokenState } from './Token/reducer';
export const initialState = {
  setToken: { 
    loading: false,
    error: '',
    token: '',
   }
}

export type RootState = {
  setToken: TokenState;
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case SAVING_TOKEN:
    case SAVING_TOKEN_SUCCES:
    case SAVING_TOKEN_ERROR:
      return {
        ...state,
        setToken: tokenReducer(state.setToken, action),
      };
    default:
      return state;
  }
};