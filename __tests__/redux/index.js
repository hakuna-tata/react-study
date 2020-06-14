const defaultState = {
  cash:200
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch(type){
    case 'INCREMENT':
      return Object.assign({},state,{
        cash:state.cash + payload
      });
    case 'DECREMENT':
      return Object.assign({},state,{
        cash:state.cash - payload
      });
    default:
      return state;
  }
}

// 测试 No reducer provided 执行 warning 函数
let noReducer; 
debugger;
const reducers = Redux.combineReducers({ treasury:reducer });
const store = Redux.createStore(reducers);
store.subscribe(()=>{
  console.log(`余额：${store.getState().treasury.cash}`);
});


document.getElementById("button1").addEventListener("click", () => {
  store.dispatch({
    type:'INCREMENT',
    payload:100
  })
})

document.getElementById("button2").addEventListener("click", () => {
  store.dispatch({
    type:'DECREMENT',
    payload:100
  })
})