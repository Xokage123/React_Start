import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { ICardProps } from "../../CardList/Card";
import { RootState } from "../rootReducer";

export const SAVING_POSTS = 'SAVING_POSTS';
export type postsRequest = {
  type: typeof SAVING_POSTS;
}

export const postsRequest: ActionCreator<AnyAction> = () => ({
  type: SAVING_POSTS,
});

export const SAVING_POSTS_SUCCES = 'SAVING_POSTS_SUCCES';
export type postsRequestSuccess = {
  type: typeof SAVING_POSTS_SUCCES;
  posts: ICardProps[];
}

export const postsRequestSuccess: ActionCreator<postsRequestSuccess> = (posts: ICardProps[]) => ({
  type: SAVING_POSTS_SUCCES,
  posts,
});

export const SAVING_POSTS_ERROR = 'SAVING_POSTS_ERROR';
export type postsRequestError = {
  type: typeof SAVING_POSTS_ERROR;
  error: string;
}

export const postsRequestError: ActionCreator<postsRequestError> = (error: string) => ({
  type: SAVING_POSTS_ERROR,
  error,
});



export const SAVING_AFTER = 'SAVING_AFTER';
export type afterRequest = {
  type: typeof SAVING_AFTER;
}

export const afterRequest: ActionCreator<AnyAction> = () => ({
  type: SAVING_AFTER,
});

export const SAVING_AFTER_SUCCES = 'SAVING_AFTER_SUCCES';
export type afterRequestSuccess = {
  type: typeof SAVING_AFTER_SUCCES;
  after: string;
}

export const afterRequestSuccess: ActionCreator<afterRequestSuccess> = (after: string) => ({
  type: SAVING_AFTER_SUCCES,
  after: after
});

export const SAVING_AFTER_ERROR = 'SAVING_AFTER_ERROR';
export type afterRequestError = {
  type: typeof SAVING_AFTER_ERROR;
  error: string;
}

export const afterRequestError: ActionCreator<afterRequestError> = (error: string) => ({
  type: SAVING_AFTER_ERROR,
  error,
});


export const postsRequestAsync = () : ThunkAction< void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    
    dispatch(postsRequest());
    dispatch(afterRequest());
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${getState().setToken.token}`},
      params: {
        limit: 10,
        after: getState().afterData.after
      }
    })
      .then((resp) => {
        const data = resp.data.data.children.map( (item: { kind: string , data: {[N: string]: any}}) => item.data);
        const nextAfter = resp.data.data.after;
        
        const postsData = data.map((item: {[N: string]: any}) => ({ 
          title: item.title,
          username: item.author,
          score: item.score,
          num_comments: item.num_comments,
          id: item.id,
          created: item.created,
          thumbnail: item.thumbnail,
          selftext: item.selftext
        }));
        dispatch(postsRequestSuccess(postsData));
        dispatch(afterRequestSuccess(nextAfter));
        console.log(getState().afterData.after)
      })
      .catch((error) => {
        console.log(error);
        dispatch(postsRequestError(String(error)));
        dispatch(afterRequestError(String(error)))
      })
} 