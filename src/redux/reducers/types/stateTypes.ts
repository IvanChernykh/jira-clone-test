import { ITodoData, IUserData } from "../../../types";

interface ITodo extends ITodoData {
    status: TodoStatus
}

export enum TodoStatus {
    todo = 'Todo',
    inProgress = 'In Progress',
    done = 'Done'
}

export interface IState {
    users: IUserData[] | []
    todos: ITodo[] | []
}