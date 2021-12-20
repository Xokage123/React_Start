import * as React from 'react';
import { Layout } from './Layout/Layout'
import styles from './App.scss';
import './main.global.scss'
import { Header } from './Header';
import { Content } from './Content';
import { CardList } from './CardList';
import { Feed } from './Function'
import { generateId, generateRandomString } from './utils/React/generateRandomIndex';
import { merge } from './utils/JS/merge';
import { useIsMounted } from './utils/React/useIsMuonted';
import { Dropdown } from './Dropdown';

let LIST = [
  { title: 'Audio'},
  { title: 'Bio'},
  { title: 'Ali'},
].map(generateId)

export function App() {
  const [list, setList] = React.useState(LIST);
  const [isMounted] = useIsMounted()

   const itemDelete = (id: string) => {
    setList(list.filter((item) => item.id !== id))
   }

   const addItem = () => {
     setList(list.concat(generateId({ title: generateRandomString() })));
   };

   return (
     <Layout >
       <Feed blocks={list.map(merge({onClick: itemDelete }))}/>
       <button onClick={addItem}>Add me</button>
       <Header />
       <Content>
         <CardList />
         <div style={{padding: 20}}>
       <Dropdown button={<button>Test</button>}>
         <ul><li>122</li></ul>
       </Dropdown>
       </div>
       </Content>
     </Layout>
   )
}



