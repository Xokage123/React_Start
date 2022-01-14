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
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
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
                        <Routes>
                           <Route path={'/auth'} element={<Navigate to={'/posts/'} /> }/>
                           <Route path={'/'} element={<Navigate to={'/posts/'}/> } />
                           <Route path={'/posts/'} element={<Content><CardList /> </Content>} />
                           <Route path={'/posts/:id'} element={<Content><CardList /> <Post/></Content>} />
                           <Route path={'*'} element={<h2 style={{textAlign: 'center', color: 'red'}}>Страница не найдена Ошибка 404</h2>}/>
                        </Routes>
               </Layout> 
            </BrowserRouter> 
         )}
         
      </Provider>
   )
}





        