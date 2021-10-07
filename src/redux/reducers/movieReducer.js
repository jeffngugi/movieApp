
const initialState = {
    movies:[],
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case "LOADING":
            return{
                ...state,
                loading:true
            }
        case "GET_MOVIES":
            return{
                ...state,
                movies:action.payload,
                loading:false
            }
        default:
            return state;
    }
}