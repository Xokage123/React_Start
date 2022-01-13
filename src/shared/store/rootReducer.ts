import { Reducer } from 'redux';
import { SAVING_POSTS, SAVING_POSTS_ERROR, SAVING_POSTS_SUCCES } from './posts/actions';
import { SAVING_TOKEN, SAVING_TOKEN_ERROR, SAVING_TOKEN_SUCCES } from './token/actions';
import { tokenReducer, TokenState } from './token/reducer';
import { afterReducer, AfterState, postsReducer, PostsState } from './posts/reducer'
import { meReducer, MeState } from './me/reducer';
import { SAVING_ME, SAVING_ME_ERROR, SAVING_ME_SUCCES } from './me/actions';

export const initialState = {
  setToken: { 
    loading: false,
    error: '',
    token: '',
   },
   postsData: {
     loading: false,
     error: '',
     postsData: [],
   },
   me: {
     loading: false,
     error: '',
     data: {},
   },
   after: {
    loading: false,
    error: '',
    after: '',
   }
}

export type RootState = {
  setToken: TokenState;
  postsData: PostsState;
  me: MeState;
  after: AfterState;
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
      case SAVING_POSTS:
      case SAVING_POSTS_SUCCES:
      case SAVING_POSTS_ERROR:
          return {
            ...state,
            postsData: postsReducer(state.postsData, action),
          };
      case SAVING_ME:
      case SAVING_ME_SUCCES:
      case SAVING_ME_ERROR:
          return {
            ...state,
            me: meReducer(state.me, action),
          };
      case SAVING_ME:
      case SAVING_ME_SUCCES:
      case SAVING_ME_ERROR:
          return {
            ...state,
            after: afterReducer(state.after, action),
          };
    default:
      return state;
  }
};