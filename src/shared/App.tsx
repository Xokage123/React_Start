import * as React from 'react';
import { Layout } from './Layout/Layout'
import styles from './App.scss';
import './main.global.scss'
import { Header } from './Header';
import { Content } from './Content';
import { CardList } from './CardList';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from "./store/rootReducer";
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import { useIsMounted } from './utils/React/useIsMuonted';
import { Post } from './Post/Post';

const store = createStore(rootReducer, composeWithDevTools( 
  applyMiddleware(thunk),
))

export function App() { 
  const [ isMounted ] = useIsMounted();
  

   return (
      <Provider store={store}>
         {isMounted && (
            <BrowserRouter>
               <Layout >
                  <Header />
                  <Content>
                     <CardList />
                        <Routes>
                           <Route path={'/posts/:id'} element={<Post />} />
                        </Routes>
                  </Content>
               </Layout> 
            </BrowserRouter> 
         )}
         
      </Provider>
   )
}





        