export interface SystemState {
   loggedIn: boolean,
   session: string,
   userId: number,
   password?: string
}

export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION,
    payload: SystemState
}

export const GET_SESSION = 'GET_SESSION'

interface GetSessionAction {
    type: typeof GET_SESSION
}

export type SystemActionTypes = UpdateSessionAction | GetSessionAction