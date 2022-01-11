import axios from "axios";
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


export const postsRequestAsync = (): ThunkAction< void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(postsRequest());
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${getState().setToken.token}`}
    })
      .then((resp) => {
        const data = resp.data.data.children.map( (item: { kind: string , data: {[N: string]: any}}) => item.data);
        const postsData = data.map((item: {[N: string]: any}) => ({ 
          title: item.title,
          username: item.author,
          score: item.score,
          num_comments: item.num_comments,
          id: item.id,
          created: item.created,
          thumbnail: item.thumbnail,
          selftext: item.selftext, 
        }));
        dispatch(postsRequestSuccess(postsData));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        dispatch(postsRequestError(String(error)));
      })
} 