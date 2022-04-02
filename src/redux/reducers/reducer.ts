import { reducerActions } from "./actions"
import { ITodoData, IUserData } from "../../types"
import { ActionTypes, ISetTodos, ISetUsers, IUpdTodoStatus } from "./types/actionTypes"
import { IState, TodoStatus } from "./types/stateTypes"
import { getRandomColor } from "../../utils/utils"

const initialState: IState = {
    users: [],
    todos: []
}

const reducer = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case reducerActions.SET_USERS: {
            const users = action.payload.map(item => ({ ...item, avatarColor: getRandomColor() }))

            return { ...state, users }
        }
        case reducerActions.SET_TODOS: {
            const todos = action.payload.map(item => ({ ...item, status: TodoStatus.todo }))
                .slice(0, 10) //to reduce total number of items; should delete this late

            return { ...state, todos }
        }
        case reducerActions.UPD_STATUS: {

            const todos = state.todos.map(item => {
                if (item.id === action.payload) {
                    if (item.status === TodoStatus.inProgress) item.status = TodoStatus.done
                    if (item.status === TodoStatus.todo) item.status = TodoStatus.inProgress
                    return item
                }
                return item
            })

            return { ...state, todos }
        }
        default: {
            return state
        }
    }
}

export const setUsers = (payload: IUserData[]): ISetUsers => ({ type: reducerActions.SET_USERS, payload })
export const setTodos = (payload: ITodoData[]): ISetTodos => ({ type: reducerActions.SET_TODOS, payload })

export const updTodoStatus = (todoId: number): IUpdTodoStatus => ({ type: reducerActions.UPD_STATUS, payload: todoId })

export default reducer