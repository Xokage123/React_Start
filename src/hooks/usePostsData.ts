import * as React from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContaxt';


export function usePostsData() {
  const token = React.useContext(tokenContext);
  const [postsData, setPostsData] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${token}`}
    })
      .then((resp) => {
        const data = resp.data.data.children.map( (item: { kind: string , data: {[N: string]: any}}) => item.data);
        const postsData = data.map((item: {[N: string]: any}) => ({ title: item.title, username: item.name, score: item.score, num_comments: item.num_comments, id: item.id, created: item.created, thumbnail: item.thumbnail }));
        setPostsData(postsData);
        console.log(data)
      })
  }, [token])
  
  return postsData 
}
