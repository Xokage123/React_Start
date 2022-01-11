import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared/store/rootReducer';
import { postsRequestAsync } from '../shared/store/posts/actions';


export function usePostsData() {
  const postsData = useSelector<RootState>(state => state.postsData.postsData) 
  const token = useSelector<RootState>(state => state.setToken.token);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(!token) return
    dispatch(postsRequestAsync());
  }, [token])
  
  return postsData
}
