// import React, { JSXElementConstructor } from 'react';
// export function concat(a:string, b:string):string { 
//     return `${a} ${b}`         
//  }
//  const st = concat('hello', 'world');
//  console.log(st);

//  interface IHome {
//    howIDoIt : string,
//    simeArray: [string, string, number],
//    withData: [{
//      howIDoIt: string,
//      simeArray: [string, number],
//    }]
// }
// const io: IHome = {
//    howIDoIt: "I Do It Wel",
//    simeArray: ["string one", "string two", 42],
//    withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
// }



// const myArray: MyArray<string> = ['1','2','3','6','7','8','9']
// interface MyArray<T> {
//   [N: number]: T
//     
//   reduce<U>(fn:(el1:number | T , el2:T) => U, el3?:number): U
//  }
//   const oi = myArray.reduce((total, invester) => {
//      return total + invester 
//    }, 0)
// console.log(io);




// interface IHomeTask {
//        data: string;
//        numbericData: number;
//        date: Date;
//        externalData: {
//            basis: number;
//            value: string;
//        }
//    }

//  type MyPartial<T> = {
//     [N in keyof T]? :T[N] extends object ? MyPartial<T[N]> : T[N]
//  }
 
//  const homeTask: MyPartial<IHomeTask> = {
//        externalData: {
//            value: 'win'
//        }
//    }

//    function homeComponent(props: { firstProp: string }) {
//           return (
//               <div>
//                   { props.firstProp }
//               </div>
//           )
//       }

//   type ToGetProps<T> = T extends React.ComponentType<infer R> ? R : never
//   type firstProp = ToGetProps< typeof homeComponent> 
   