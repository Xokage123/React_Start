import React from 'react';
import { adjectives, Config, countries, starWars, uniqueNamesGenerator } from 'unique-names-generator';
import styles from './header.scss';

interface IStarWarsNameClass {
  name: string;
  count: number;
}

export class Names extends React.PureComponent<{}, IStarWarsNameClass> {
  constructor(props: {}){
    super(props);
    this.state = {
      name: this.randomName(),
      count: 0
    }
  }
   public render() {
     return(
       <section className={styles.container}>
        <span className={styles.name}>{this.state.name}</span>
        <button className={styles.button} onClick={this.handleClick}>Random Country!</button>
       </section>
     )
   }

   private handleClick = () => {
     this.setState({ name: this.randomName()});
     this.setState((state, props) => ({count: state.count + 1}));
     console.log(this.state.count)
   }

   private randomName(): string {
     return uniqueNamesGenerator({dictionaries: [ countries ], length: 1 })
   }
}





