import React from 'react';

import { H1, H2, H3 } from '../../components/';

import simple from './components/simple';
import receiveParams from './components/receiveParams';
import composition from './components/composition';

const HOC = () => {
  return (
    <>
      <H1>Higher-Order Components (HOC)</H1>

      <a href="https://hsien-w-wei.medium.com/react-higher-order-component-%E9%AB%98%E9%9A%8E%E7%B5%84%E4%BB%B6-4110c03043ba" target="_blank" rel="noreferrer">參考連結</a>

      <H2>#1 Simple HOC Demo</H2>
      <simple.Simple />

      <H2>#2 HOC 的各種用法</H2>
      <H3>傳入參數</H3>
      <receiveParams.Male />
      <H3>組合使用多個 HOC</H3>
      <composition.UserList />
    </>
  );
}

export default HOC;