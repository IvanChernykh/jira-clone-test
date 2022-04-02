import { IUpdTodoStatus } from "../redux/reducers/types/actionTypes"
import { ITodo, IUser } from "../redux/reducers/types/stateTypes"

export interface ITodoData {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface IUserData {
    id: number
    name: string
    username: string
    email: string
    website?: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: number
            lng: number
        }
    }
}

export interface TodoProps {
    todos: ITodo[] | []
    users: IUser[] | []

    updTodoStatus: (id: number) => IUpdTodoStatus
}