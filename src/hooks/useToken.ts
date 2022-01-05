import * as React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../shared/store/rootReducer';
import { tokenRequestSync } from '../shared/store/Token/actions';


export function useToken() {
  const dispatch = useDispatch();
   React.useEffect(() => {
     dispatch(tokenRequestSync(window.__token__))
   }, [])
   
  const token = useSelector<RootState, string>(state => state.setToken.token)

   return [token]
}