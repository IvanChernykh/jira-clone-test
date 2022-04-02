import React from 'react'

import { TodoStatus } from '../../redux/reducers/types/stateTypes'
import cls from './_TicketStatus.module.scss'


type Props = {
    status: TodoStatus
}

const TicketStatus: React.FC<Props> = ({ status }) => {

    return (
        <div className={cls.status}>
            {status}
        </div>
    )
}

export default TicketStatus