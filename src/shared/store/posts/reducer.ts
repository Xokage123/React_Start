import { Reducer } from "react";
import { ICardProps } from "../../CardList/Card";
import { afterRequest, afterRequestError, afterRequestSuccess, postsRequest, postsRequestError, postsRequestSuccess, SAVING_AFTER, SAVING_AFTER_ERROR, SAVING_AFTER_SUCCES, SAVING_POSTS, SAVING_POSTS_ERROR, SAVING_POSTS_SUCCES } from "./actions";


export type PostsState = {
  loading: boolean;
  error: string;
  postsData: ICardProps[];
}

type PostsAction = postsRequest | postsRequestSuccess | postsRequestError;
export const postsReducer: Reducer<PostsState, PostsAction> = (state, action) => {
  switch(action.type) {
    case SAVING_POSTS:
      return { 
        ...state, 
        loading: true,
      };
    default: 
      return state;
    case SAVING_POSTS_ERROR: 
      return {
        ...state,
        error: action.error,
        loading: false,
      };
      case SAVING_POSTS_SUCCES: 
      return {
        ...state,
        postsData: state.postsData.concat(action.posts),
        loading: false,
      };
  }
}


export type AfterState = {
  loading: boolean;
  error: string;
  after: string;
}

type AfterAction = afterRequest | afterRequestSuccess | afterRequestError;
export const afterReducer: Reducer<AfterState, AfterAction> = (state, action) => {
  switch(action.type) {
    case SAVING_AFTER:
      return { 
        ...state, 
        loading: true,
      };
    default: 
      return state;
    case SAVING_AFTER_ERROR: 
      return {
        ...state,
        error: action.error,
        loading: false,
      };
      case SAVING_AFTER_SUCCES: 
      return {
        ...state,
        after: action.after,
        loading: false,
      };
  }
}