const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
      if(action.type === 'LOGIN'){
        return {
        login: true
        };
      }
      else {
        return state;
    }

  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };