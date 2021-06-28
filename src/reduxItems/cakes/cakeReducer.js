import { SOLD_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes : 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SOLD_CAKE : 
        return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        default : return state
    }
}

export default cakeReducer