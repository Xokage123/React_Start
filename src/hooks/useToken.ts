import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared/store/rootReducer';
import { tokenRequestSuccess } from '../shared/store/token/actions';


export function useToken() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(window.__token__ === "undefined") {
      const localToken = localStorage.getItem('token');
      if(localToken && !(localToken == "undefined")) { 
        dispatch(tokenRequestSuccess(localToken));
      }
    }
    if(!(window.__token__ === "undefined")) {
      const windowToken = window.__token__ ;
      localStorage.setItem('token', windowToken)
      dispatch(tokenRequestSuccess(windowToken));
    }
  }, [])
  
  
  const token = useSelector<RootState, string>(state => state.setToken.token);

   return [token]
}