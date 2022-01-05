import * as React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../shared/store/rootReducer';
import { tokenRequest, tokenRequestError, tokenRequestSuccess } from '../shared/store/Token/actions';


export function useToken() {
  const dispatch = useDispatch();
   React.useEffect(() => {
     if(!window.__token__) return ;
     dispatch(tokenRequest())
     if(window.__token__) {
       dispatch(tokenRequestSuccess(window.__token__))
     } else {
       dispatch(tokenRequestError(window.__token__))
     }
   }, [])

  const store = useStore<RootState>();
  const token = store.getState().setToken;

   return [token]
}