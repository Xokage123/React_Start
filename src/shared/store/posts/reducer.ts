import { Reducer } from "react";
import { ICardProps } from "../../CardList/Card";
import { postsRequest, postsRequestError, postsRequestSuccess, SAVING_POSTS, SAVING_POSTS_ERROR, SAVING_POSTS_SUCCES } from "./actions";


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
        postsData: action.posts,
        loading: false,
      };
  }
}