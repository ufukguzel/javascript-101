//write a counter with redux 

const INCREMENT = "INCREMENT";
//ı define a constant for increment aciton types
const DECREMENT = "DECREMENT"
//ı define a constant for decrement action types


const counterReducer = (state = 0, action) => {
    //ı create a reducer function that takes state and action as arguments and returns a new state
    switch(action.type){
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state -1 ;

        default:
            return state;
    }
};

//ı Define the counter reducer which will increment or decrement the state based on the action it receives

const inAction = () =>{
    return {
        type: INCREMENT
};
};
//ı define an action creator for decrementing
const deAction = () => {
    return{
        type: DECREMENT
    };
};

const store = Redux.createStore(counterReducer);
//ı define the Redux store here, passing in your reducers


