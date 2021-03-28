import React from 'react';

import { H1, H2 } from '../../components/';

import demo1 from './components/demo1';

const HOC = () => {
  return (
    <>
      <H1>Higher-Order Components (HOC)</H1>

      <a href="https://hsien-w-wei.medium.com/react-higher-order-component-%E9%AB%98%E9%9A%8E%E7%B5%84%E4%BB%B6-4110c03043ba" target="_blank" rel="noreferrer">參考連結</a>

      <H2>#1 Simple HOC Demo</H2>

      <demo1.Simple />

    </>
  );
}

export default HOC;