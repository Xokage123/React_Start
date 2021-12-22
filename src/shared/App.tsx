import * as React from 'react';
import { Layout } from './Layout/Layout'
import styles from './App.scss';
import './main.global.scss'
import { Header } from './Header';
import { Content } from './Content';
import { CardList } from './CardList';

export function App() {

   return (
     <Layout >
       <Header />
       <Content>
         <CardList />
       </Content>
     </Layout>
   )
}



        