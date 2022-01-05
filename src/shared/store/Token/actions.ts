import { Action, ActionCreator, AnyAction } from "redux";

const SAVING_TOKEN = 'SAVING_TOKEN';
export type tokenRequest = {
  type: typeof SAVING_TOKEN;
}

export const tokenRequest: ActionCreator<AnyAction> = () => ({
  type: SAVING_TOKEN,
});

const SAVING_TOKEN_SUCCES = 'SAVING_TOKEN_SUCCES';
export type tokenRequestSuccess = {
  type: typeof SAVING_TOKEN_SUCCES;
  token: string;
}

export const tokenRequestSuccess: ActionCreator<tokenRequestSuccess> = (token) => ({
  type: SAVING_TOKEN_SUCCES,
  token,
});

const SAVING_TOKEN_ERROR = 'SAVING_TOKEN_ERROR';
export type tokenRequestError = {
  type: typeof SAVING_TOKEN_ERROR;
  error: string;
}

export const tokenRequestError: ActionCreator<tokenRequestError> = (error) => ({
  type: SAVING_TOKEN_ERROR,
  error,
})

