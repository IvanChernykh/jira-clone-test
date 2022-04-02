import React from 'react'
import { IUpdTodoStatus } from '../../redux/reducers/types/actionTypes'
import { ITodo, IUser } from '../../redux/reducers/types/stateTypes'

import Avatar from '../ui/Avatar'
import Container from '../ui/Container'
import TicketStatus from './TicketStatus'

import cls from './_TicketCard.module.scss'


type Props = {
    todo: ITodo
    user: IUser
    showStatus?: boolean

    updTodoStatus: (id: number) => IUpdTodoStatus
}

const TicketCard: React.FC<Props> = ({ todo, user, showStatus, updTodoStatus }) => {
    const clickHandler = () => {
        updTodoStatus(todo.id)
    }

    return (
        <Container classNames={cls.card} onClick={clickHandler}>
            <div className={cls.inner}>
                <Avatar user={user} />
                <p>
                    {todo.title}
                </p>
            </div>
            {showStatus && <TicketStatus status={todo.status} />}
        </Container>
    )
}

export default TicketCard