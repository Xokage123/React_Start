import { Reducer } from 'redux';
import { SAVING_AFTER, SAVING_AFTER_ERROR, SAVING_AFTER_SUCCES, SAVING_POSTS, SAVING_POSTS_ERROR, SAVING_POSTS_SUCCES } from './posts/actions';
import { SAVING_TOKEN, SAVING_TOKEN_ERROR, SAVING_TOKEN_SUCCES } from './token/actions';
import { afterReducer, AfterState, postsReducer, PostsState } from './posts/reducer'
import { meReducer, MeState } from './me/reducer';
import { SAVING_ME, SAVING_ME_ERROR, SAVING_ME_SUCCES } from './me/actions';
import { tokenReducer, TokenState } from './token/reducer';

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
   afterData: {
    loading: false,
    error: '',
    after: '',
   }
}

export type RootState = {
  setToken: TokenState;
  postsData: PostsState;
  me: MeState;
  afterData: AfterState;
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
      case SAVING_AFTER:
      case SAVING_AFTER_SUCCES:
      case SAVING_AFTER_ERROR:
          return {
            ...state,
            afterData: afterReducer(state.afterData, action),
          };
    default:
      return state;
  }
};