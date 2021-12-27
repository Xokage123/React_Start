import React from 'react';
import { Break } from '../../../Break';
import { Text, EColors } from '../../../Text/Text'
import { IconAnon } from '../../../Icons/Icon/IconAnon';
import styles from './userblock.scss';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export function UserBlock({ avatarSrc, userName}: IUserBlockProps) {
  return (
   <a 
   href="https://www.reddit.com/api/v1/authorize?client_id=wPuZkCZI9S4RJ87ZKWwc0w&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
   className={styles.userBox}
   >
    <div className={styles.avatarBox}>
      {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        : <IconAnon />      
      }
    </div>

    <div className={styles.username}>
      <Break size={12}/>
      <Text size={20} color={userName ? EColors.black : EColors.gray99}>{userName || 'Аноним'}</Text>
    </div>
    
    </a>
  );
}
