import { reducerActions } from "./actions"
import { ITodoData, IUserData } from "../../types"
import { ActionTypes, ISetTodos, ISetUsers } from "./types/actionTypes"
import { IState, TodoStatus } from "./types/stateTypes"

const initialState: IState = {
    users: [],
    todos: []
}

const reducer = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case reducerActions.SET_USERS: {
            return { ...state, users: action.payload }
        }
        case reducerActions.SET_TODOS: {
            const todos = action.payload.map(item => ({ ...item, status: TodoStatus.todo }))

            return { ...state, todos }
        }
        default: {
            return state
        }
    }
}

export const setUsers = (payload: IUserData[]): ISetUsers => ({ type: reducerActions.SET_USERS, payload })
export const setTodos = (payload: ITodoData[]): ISetTodos => ({ type: reducerActions.SET_TODOS, payload })

export default reducer