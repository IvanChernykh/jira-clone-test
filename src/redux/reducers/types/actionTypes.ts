import { ITodoData, IUserData } from "../../../types"
import { reducerActions } from "../actions"

export interface ISetUsers {
    type: typeof reducerActions.SET_USERS
    payload: IUserData[]
}
export interface ISetTodos {
    type: typeof reducerActions.SET_TODOS
    payload: ITodoData[]
}

export type ActionTypes = ISetUsers | ISetTodos