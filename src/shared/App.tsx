import * as React from 'react';
import { Layout } from './Layout/Layout'
import styles from './App.scss';
import './main.global.scss'
import { Header } from './Header';
import { Content } from './Content';
import { CardList } from './CardList';
import { useToken } from '../hooks/useToken'
import { tokenContext } from './context/tokenContaxt';
import { UserContextProvider } from './context/userContext';
import { PostsDataContextProvider } from './context/postsDataContext';

export function App() {
   const [token] = useToken(); 


   return (
    <tokenContext.Provider value={token}>
       <UserContextProvider>
         <PostsDataContextProvider>
            <Layout >
               <Header />
               <Content>
               <CardList />
               </Content>
            </Layout> 
         </PostsDataContextProvider>
       </UserContextProvider>
    </tokenContext.Provider>
   )
}



        