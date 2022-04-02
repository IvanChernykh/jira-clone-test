import { reducerActions } from "./actions"
import { ITodoData, IUserData } from "../../types"
import { ActionTypes, IReduceTotalTodos, ISetTodos, ISetUsers, IUpdTodoStatus } from "./types/actionTypes"
import { IState, ITodo, TodoStatus } from "./types/stateTypes"
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
        case reducerActions.REDUCE_TOTAL_TODOS: {

            const todos = state.users.map(user => {
                return state.todos.find(todo => user.id === todo.userId)
            }) as ITodo[]

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

export const reduceTotalTodos = (): IReduceTotalTodos => ({ type: reducerActions.REDUCE_TOTAL_TODOS })

export default reducer