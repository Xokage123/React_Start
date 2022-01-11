import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';
import { useNavigate, useParams } from 'react-router-dom'
import { Title } from '../CardList/Card/TextContent/Title';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { ICardProps, time } from '../CardList/Card';
import { TextContent } from '../CardList/Card/TextContent/TextContent';
import { KarmaCounter } from '../CardList/Card/Controls/KarmaCounter';
import { Controls } from '../CardList/Card/Controls';
import { Preview } from '../CardList/Card/Preview';
import { Form } from './Form';


export function Post() {
  // ID
  const { id } = useParams(); 
  
  // Close
  const navigate = useNavigate();
  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {document.removeEventListener('click', handleClick)}
  },[])

  const ref = React.useRef<HTMLDivElement>(null);

  const node = document.querySelector('#modal_root');
  if(!node) return null

  // Header
  const postsData = useSelector<RootState, ICardProps[]>(state => state.postsData.postsData);
  const thisPostData = postsData.find((el) => el.id == id);
  if(!thisPostData) return <div></div>

  return ReactDOM.createPortal((
    <div className={styles.container} ref={ref}>
      <div className={styles.modal}>
        <div className={styles.header}>
        <Controls className='controls-modal'>
          <KarmaCounter score={thisPostData.score}/>
        </Controls>
         <TextContent username={thisPostData.username}  date={time(thisPostData.created)} className='textContent-modal'>
          <Title title={thisPostData.title} id={id}/>
         </TextContent> 
        </div>
        <div className={styles.content}>
          <p className={styles.selfText}>{thisPostData.selftext}</p>
          <Preview thumbnail={thisPostData.thumbnail} className='preview-modal'/>
        </div>
        <Form />
      </div>
    </div>
  ), node);
}



