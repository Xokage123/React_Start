import axios from "axios";
import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { IUserData } from "../../../hooks/useUserData";
import { RootState } from "../rootReducer";



export const SAVING_ME = 'SAVING_ME';
export type meRequest = {
  type: typeof SAVING_ME;
}

export const meRequest: ActionCreator<meRequest> = () => ({
  type: SAVING_ME,
});

export const SAVING_ME_SUCCES = 'SAVING_ME_SUCCES';
export type meRequestSuccess = {
  type: typeof SAVING_ME_SUCCES;
  data: IUserData;
}

export const meRequestSuccess: ActionCreator<meRequestSuccess> = (data: IUserData) => ({
  type: SAVING_ME_SUCCES,
  data,
});

export const SAVING_ME_ERROR = 'SAVING_ME_ERROR';
export type meRequestError = {
  type: typeof SAVING_ME_ERROR;
  error: string;
}

export const meRequestError: ActionCreator<meRequestError> = (error) => ({
  type: SAVING_ME_ERROR,
  error,
})

export const meRequestAsync = (): ThunkAction< void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${getState().setToken.token}`}
    })
      .then((resp) => {
        let userData = resp.data;
        dispatch(meRequestSuccess({ name:userData.name, iconImg: userData.icon_img }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(String(error)));
      });
} 