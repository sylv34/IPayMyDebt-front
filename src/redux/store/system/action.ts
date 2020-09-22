import { 
    SystemState, 
    SystemActionTypes,
    UPDATE_SESSION,
    GET_SESSION
} from './type'

export function updateSession(newSession: SystemState): SystemActionTypes {
    return {
        type: UPDATE_SESSION,
        payload: newSession
    }
}

export function getSession(): SystemActionTypes {
    return {
        type: GET_SESSION
    }
}