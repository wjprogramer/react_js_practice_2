import { useState } from 'react';

// 簡易的 HOC
const HOC = (WrappedComponent) => {
  const SimpleHOC = (props) => {
    const [say] = useState('good morning');
    return <WrappedComponent {...props} say={say}/>
  }
  return SimpleHOC;
};

// 要傳入的元件
const SimpleComp = (props) => {
  const {say} = props;
  return (<div>Johnny {say}</div>); // Johnny good morning
}

// 使用掛入完的元件
const Simple =  HOC(SimpleComp);

const result = { Simple };
export default result;