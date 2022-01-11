import * as React from 'react';
import axios from 'axios';
import { useToken } from './useToken';
import { useDispatch, useSelector } from 'react-redux';
import { meRequest, meRequestAsync, meRequestSuccess } from '../shared/store/me/actions';
import { MeState } from '../shared/store/me/reducer';
import { RootState } from '../shared/store/rootReducer';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const dispatch = useDispatch();
  const [token] = useToken();
  React.useEffect(() => {
    if(!token) return
    dispatch(meRequestAsync());
  }, [token])

  return data
}