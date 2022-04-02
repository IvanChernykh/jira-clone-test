import React from 'react'

import TicketCard from '../TicketCard/TicketCard'

import { TodoStatus } from '../../redux/reducers/types/stateTypes'
import { TodoProps } from '../../types'
import { getCardUser } from '../../utils/utils'
import cls from './_BoardSection.module.scss'


interface Props extends TodoProps {
    status: TodoStatus
}

const BoardSection: React.FC<Props> = ({ status, todos, users, updTodoStatus }) => {

    const Cards = todos.map(todo => {

        const user = getCardUser(users, todo)

        return <TicketCard key={todo.id} todo={todo} user={user!} updTodoStatus={updTodoStatus} />
    })

    return (
        <div>
            <h2 className={cls.title}>{status}</h2>
            {Cards}
        </div>
    )
}

export default BoardSection