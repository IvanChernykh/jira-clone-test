import React from 'react'
import { IUpdTodoStatus } from '../../redux/reducers/types/actionTypes'

import { ITodo, IUser, TodoStatus } from '../../redux/reducers/types/stateTypes'
import { getCardUser } from '../../utils/utils'
import TicketCard from '../TicketCard/TicketCard'
import cls from './_BoardSection.module.scss'


type Props = {
    status: TodoStatus
    todos: ITodo[] | []
    users: IUser[] | []

    updTodoStatus: (id: number) => IUpdTodoStatus
}

const BoardSection: React.FC<Props> = ({ status, todos, users, updTodoStatus }) => {

    const Cards = todos.map(todo => {

        const user = getCardUser(users, todo)

        return <TicketCard key={todo.id} todo={todo} user={user!} updTodoStatus={updTodoStatus} />
    })

    return (
        <>
            <h2 className={cls.title}>{status}</h2>
            {Cards}
        </>
    )
}

export default BoardSection