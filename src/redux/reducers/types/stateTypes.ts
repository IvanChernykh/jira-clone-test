import { ITodoData, IUserData } from "../../../types";

export interface ITodo extends ITodoData {
    status: TodoStatus
}
export interface IUser extends IUserData {
    avatarColor: string
}

export enum TodoStatus {
    todo = 'Todo',
    inProgress = 'In Progress',
    done = 'Done'
}

export interface IState {
    users: IUser[] | []
    todos: ITodo[] | []
}