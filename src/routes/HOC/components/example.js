import { useState, useEffect } from 'react';

//#region Some Simple Components
const Login = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = () => {
    localStorage.setItem('token', '123');
    setToken('123');
  }

  if (token) {
    return <ProductPage />
  } else {
    return (<>
      <button onClick={login}>Login</button>
    </>);
  }
  
}
//#endregion

//#region HOCs
//負責驗證登入狀態
const UserAuthHOC = (WrappedComponent) => {
  const _UserAuthHOC = (props) => {
    const [loginState, setLoginState] = useState({
      authPass: true, userToken: ''
    });

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token !== null) {
        setLoginState({ authPass: true, userToken: token });
      } else {
        setLoginState(prevState => ({ ...prevState, authPass: false }));
      }
    }, []);

    if (!loginState.authPass) { return (<Login />); } // 驗證不通過 回登入頁面
    return <WrappedComponent {...props} token={loginState.userToken} />
  }

  return _UserAuthHOC;
};

//負責計算商品數量
const ProductCountHOC = (WrappedComponent) => {
  const _ProductCountHOC = (props) => {
    const [count, setCount] = useState(1);

    const addProduct = () => {
      setCount(count + 1);
    };

    const lessProduct = () => {
      if (count === 1) { return; } // 最小商品數為1
      setCount(count - 1);
    };

    return <WrappedComponent 
      {...props}
      count={count} 
      addProduct={addProduct} 
      lessProduct={lessProduct} 
    />
  }

  return _ProductCountHOC;
};

//負責送出訂購資訊
const SubmitOrderHOC = (WrappedComponent) => {
  const _SubmitOrderHOC = (props) => {
    const submitOrder = () => {
      // 這裡的 token 是由 UserAuthHOC 中的 props 取得
      let request = {
        body: JSON.stringify({ token: props.token, product: { number: props.count } }),
        method: 'POST',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
      };
      fetch(`https://productURL/+${props.id}`, request)
        .then((respond) => { props.sendSuccessAction(respond); }) // 送出訂購成功的 action
        .catch((error) => { return error });
    };

    return <WrappedComponent {...props} submitOrder={submitOrder} />
  }
  return _SubmitOrderHOC;
};
//#endregion HOCs

const FruitProductContent = (props) => {
  const { name, count, addProduct, lessProduct, submitOrder } = props;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Number: {count}
        <button onClick={addProduct}>+</button>
        <button onClick={lessProduct}>-</button>
      </div>
      <button onClick={submitOrder}>Submit</button>
    </div>
  );
}

const FruitProduct = UserAuthHOC(SubmitOrderHOC(ProductCountHOC(FruitProductContent)))

// 使用裝飾好的元件
const ProductPage = () => {
  return (
    <div>
      <FruitProduct id={'Fruit01'} name={'Fruit'} />
    </div>
  );
}

const result = { ProductPage }
export default result;