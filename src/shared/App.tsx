import * as React from 'react';
import { Layout } from './Layout/Layout'
import styles from './App.scss';
import './main.global.scss'
import { Header } from './Header';
import { Content } from './Content';
import { CardList } from './CardList';
import { Feed } from './Function'
import { generateId } from './utils/React/generateRandomIndex';
import { merge } from './utils/JS/merge';
import { useIsMounted } from './utils/React/useIsMuonted';

const LIST = [
  { title: 'Audio'},
  { title: 'Bio'},
  { title: 'Ali'},
].map(generateId)

export function App() {
  const [list, setList] = React.useState(LIST);

  // const [isMounted] = useIsMounted()

  // // React.useEffect(() => {console.log('isMounted')},[isMounted])

   const itemDelete = (id: string): any => {
   setList(list.filter(item => {if(item.id === id) return false}))
   }

   React.useEffect(() => {
     console.log('asdasd')
   })

  const handleClick = (id: string) => {
    console.log(id)
  }
   return (
     <Layout >
       <Feed blocks={LIST.map(merge({onClick: itemDelete}))}/>
       <Header />
       <Content>
         <CardList />
       </Content>
     </Layout>
   )
}



