const authReducerDefaultState = {}
export default function authReducer (state = authReducerDefaultState, action) 
{
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}