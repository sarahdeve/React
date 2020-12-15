const defaultState = {
    counter: 0
}

const reducer = (state = defaultState, action) => {
 if (action.type === 'INC') {
     let value = action.payload * state.counter;
     let newState = {...state, counter: state.counter + 1}
     return newState;
 }
 if (action.type === 'DEC') {
            let newState = {...state, counter: state.counter - 1}
            return newState
        }
if (action.type === 'CHANGE') {
    let value = action.payload;
    let newState = {...state, counter: value}
    return newState;
}
 return state;
}

export default reducer;