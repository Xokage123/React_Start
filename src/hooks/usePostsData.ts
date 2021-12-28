import * as React from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContaxt';

interface I {
  name?: string;
  iconImg?: string;
}

export function usePostsData() {
  const token = React.useContext(tokenContext);
  const [postsData, setPostsData] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${token}`}
    })
      .then((resp) => {
        const postsData = resp.data.children
        setPostsData(postsData)
      })
  }, [token])

  return [postsData]
}
