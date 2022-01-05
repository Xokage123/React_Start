import { Reducer } from "react";
import { SAVING_TOKEN, SAVING_TOKEN_ERROR, SAVING_TOKEN_SUCCES, tokenRequest, tokenRequestError, tokenRequestSuccess } from "./actions";

export type TokenState = {
  loading: boolean;
  error: string;
  token: string;
}

type TokenAction = tokenRequest | tokenRequestSuccess | tokenRequestError;
export const tokenReducer: Reducer<TokenState, TokenAction> = (state, action) => {
  switch(action.type) {
    case SAVING_TOKEN:
      return { 
        ...state, 
        loading: true,
      };
    default: 
      return state;
    case SAVING_TOKEN_ERROR: 
      return {
        ...state,
        error: action.error,
        loading: false,
      };
      case SAVING_TOKEN_SUCCES: 
      return {
        ...state,
        token: action.token,
        loading: false,
      };
  }
}