import { ITodo, IUser, TodoStatus } from "../redux/reducers/types/stateTypes"
import { ITodoData } from "../types"

export const getRandomColor = () => {
    const symbols = '0123456789abcdef'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * symbols.length)]
    }
    return color
}


export const getCardUser = (users: IUser[], todo: ITodoData) => {
    return users.find(user => user.id === todo.userId)
}

export const sortByStatus = (todos: ITodo[] | []) => {
    return todos.sort((a, b) => {
        if (a.status === TodoStatus.todo) {
            if (b.status !== TodoStatus.todo) return -1
        }
        if (a.status === TodoStatus.inProgress) {
            if (b.status === TodoStatus.todo) return 1
            if (b.status === TodoStatus.done) return -1
        }
        if (a.status === TodoStatus.done) {
            if (b.status !== TodoStatus.done) return 1
        }
        return 0
    })
}
export const filterByStatus = (todos: ITodo[] | [], status: TodoStatus) => {
    return todos.filter(todo => todo.status === status)
}