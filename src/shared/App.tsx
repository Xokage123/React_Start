import * as React from 'react';
import { Layout } from './Layout/Layout'
import styles from './App.scss';
import './main.global.scss'
import { Header } from './Header';
import { Content } from './Content';
import { CardList } from './CardList';
import { UserContextProvider } from './context/userContext';
import { PostsDataContextProvider } from './context/postsDataContext';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from "./store/rootReducer";

const store = createStore(rootReducer, composeWithDevTools())

export function App() { 
  
   return (
      <Provider store={store}>
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
      </Provider>
   )
}



        