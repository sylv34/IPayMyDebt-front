import { 
    SystemState, 
    SystemActionTypes,
    UPDATE_SESSION,
    GET_SESSION
} from './type'


const initialState: SystemState = {
    loggedIn: false,
    session: '',
    userId: 0
}

export function systemReducer(state = initialState, action: SystemActionTypes): SystemState {
    switch (action.type) {
        case GET_SESSION:
            return {
                ...state
            }
            
        case UPDATE_SESSION:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}