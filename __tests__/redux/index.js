const defaultState = {
  cash:200
}

const reducer1 = (state = defaultState, action) => {
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

const reducer2 = (state = defaultState, action) => {
  const { type, payload } = action;
  switch(type){
    case 'MULTIPLITE':
      return Object.assign({},state,{
        cash:state.cash * payload
      });
    case 'DIVISION':
      return Object.assign({},state,{
        cash:state.cash / payload
      });
    default:
      return state;
  }
}


// 测试 No reducer provided 执行 warning 函数
let noReducer; 
debugger;
const reducers = Redux.combineReducers({ reducer1, reducer2 });
const store = Redux.createStore(reducers, Redux.applyMiddleware(ReduxThunk.default, reduxLogger.logger));
// 执行 unSubscribe 会取消订阅，但 state 还是可以直接修改的
const unSubscribe = store.subscribe(()=>{
  console.log(`余额：${store.getState().reducer1.cash}`);
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
  });
  unSubscribe();
})

document.getElementById("button3").addEventListener("click", () => {
  store.dispatch({
    type:'MULTIPLITE',
    payload:2
  })
})

document.getElementById("button4").addEventListener("click", () => {
  store.dispatch({
    type:'DIVISION',
    payload:2
  })
})