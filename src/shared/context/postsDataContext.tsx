import * as React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostsContextData {
  [x: string]: any;
  title?: string;
  username?: string;
  score?: number;
  num_comments?: number;
  id?: string;
  created?: number;
}

export const postsDataContext = React.createContext<IPostsContextData>({});

export function PostsDataContextProvider({ children }: { children: React.ReactNode}) {
   const postsData  = usePostsData() as IPostsContextData
   
   
   return (
     <postsDataContext.Provider value={postsData}>
      {children}
     </postsDataContext.Provider>
   )
}