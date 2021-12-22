import * as React from 'react';
import { getValue } from './pickFromSyntheticEvent';
import { preventDefault } from './preventDefault';
import { stopPropagation } from './stopPropagation';

function InputExample({ value, onChange}: any) {
  return (
    <input 
      value={value} 
      onChange={preventDefault(stopPropagation(getValue(onChange)))} 
    />
  )
}

function compose<U> (...fns: Function[]) {
  return <E, >(initialValue: any): U => 
   fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U> (...fns: Function[]) {
  return <E, >(initialValue: any): U => 
  fns.reduce((previousValue, fn) => fn(previousValue), initialValue); 
} 