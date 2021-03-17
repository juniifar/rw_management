import * as constant from '../constant/constant'

const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) =>{
    if (action.type === constant.TYPE_INCREEMENT){
        return {
            counter: state.counter + 1
        }
    }
    return state;
}

export default reducer;