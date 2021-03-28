// 可傳入性別參數的 HOC
const UserGenderHOC = (gender) => (WrappedComponent) => {
  const UserGenderHOC = (props) => {
    return (
      <WrappedComponent gender={gender} {...props} />
    );
  }
  return UserGenderHOC;
};

// 要傳入的元件
const BaseComp = (props) => {
  const {gender} = props;
  return (<div>Gender: {gender}</div>); // Gender: Male
}

// 傳入參數並使用元件
const Male =  UserGenderHOC('Male')(BaseComp);

const result = { Male };
export default result;