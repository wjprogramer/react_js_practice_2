// import React, { useState } from 'react';

// // 可傳入性別參數的 HOC
// const UserGenderHOC = (gender) => (WrappedComponent) => {
//   return (props) => {
//     return (
//       <WrappedComponent gender={gender} {...props} />
//     );
//   }
// };

// // 計數 HOC
// const CountHOC = (WrappedComponent) => {
//   const _CountHOC = (props) => {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => setCount(count + 1);

//     return <WrappedComponent 
//       {...props} 
//       count={count} 
//       incrementCount={incrementCount}
//     />
//   }
//   return _CountHOC; 
// };

// // 使用者清單元件
// // 改用 Decorator 方式
// @UserGenderHOC('Male')
// @CountHOC
// const UserComp = (props) => {
//     const {gender, count, incrementCount} = props;
//     return (
//       <div>
//         <div>Gender: {gender}</div>
//         <div>Number: {count}</div>
//         <button onClick={incrementCount}>Add Number</button>
//       </div>
//     );
// }

// const result = { UserComp };
// export default result;