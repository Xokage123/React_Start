import { Reducer } from "react";
import { IUserData } from "../../../hooks/useUserData";
import { meRequest, meRequestError, meRequestSuccess, SAVING_ME, SAVING_ME_ERROR, SAVING_ME_SUCCES } from "./actions";


export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
}

type MeAction = meRequest | meRequestSuccess | meRequestError;
export const meReducer: Reducer<MeState, MeAction> = (state, action) => {
  switch(action.type) {
    case SAVING_ME:
      return { 
        ...state, 
        loading: true,
      };
    default: 
      return state;
    case SAVING_ME_ERROR: 
      return {
        ...state,
        error: action.error,
        loading: false,
      };
      case SAVING_ME_SUCCES: 
      return {
        ...state,
        data: action.data,
        loading: false,
      };
  }
}