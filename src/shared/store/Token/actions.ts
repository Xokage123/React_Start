import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootReducer";

export const SAVING_TOKEN = 'SAVING_TOKEN';
export type tokenRequest = {
  type: typeof SAVING_TOKEN;
}

export const tokenRequest: ActionCreator<tokenRequest> = () => ({
  type: SAVING_TOKEN,
});

export const SAVING_TOKEN_SUCCES = 'SAVING_TOKEN_SUCCES';
export type tokenRequestSuccess = {
  type: typeof SAVING_TOKEN_SUCCES;
  token: string;
}

export const tokenRequestSuccess: ActionCreator<tokenRequestSuccess> = (token) => ({
  type: SAVING_TOKEN_SUCCES,
  token,
});

export const SAVING_TOKEN_ERROR = 'SAVING_TOKEN_ERROR';
export type tokenRequestError = {
  type: typeof SAVING_TOKEN_ERROR;
  error: string;
}

export const tokenRequestError: ActionCreator<tokenRequestError> = (error) => ({
  type: SAVING_TOKEN_ERROR,
  error,
})

export const tokenRequestSync = (token: string): ThunkAction< void, RootState, unknown, Action<string>> => (dispatch, _getState) => {
  if(token == 'undefined') return;
  dispatch(tokenRequest())
  if(token) {
    dispatch(tokenRequestSuccess(token))
  } else {
    dispatch(tokenRequestError(String(token)))
  }
} 

