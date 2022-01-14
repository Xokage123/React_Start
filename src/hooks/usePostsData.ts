import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared/store/rootReducer';
import { postsRequestAsync } from '../shared/store/posts/actions';
import { ICardProps } from '../shared/CardList/Card';


export function usePostsData() {
  const postsData = useSelector<RootState, ICardProps[]>(state => state.postsData.postsData);
  const token = useSelector<RootState>(state => state.setToken.token);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token])
  
  return postsData
}
