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
export interface IUpdTodoStatus {
    type: typeof reducerActions.UPD_STATUS
    payload: number
}
export interface IReduceTotalTodos {
    type: typeof reducerActions.REDUCE_TOTAL_TODOS
}

export type ActionTypes = ISetUsers | ISetTodos | IUpdTodoStatus | IReduceTotalTodos