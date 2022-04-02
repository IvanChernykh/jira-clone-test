import React from 'react'
import { connect } from 'react-redux'

import Container from './ui/Container'
import TicketCard from './TicketCard/TicketCard'

import { IState, ITodo, IUser } from '../redux/reducers/types/stateTypes'
import { updTodoStatus } from '../redux/reducers/reducer'
import { IUpdTodoStatus } from '../redux/reducers/types/actionTypes'
import { getCardUser, sortByStatus } from '../utils/utils'



type Props = {
    todos: ITodo[] | []
    users: IUser[] | []

    updTodoStatus: (id: number) => IUpdTodoStatus
}




const TicketList: React.FC<Props> = ({ todos, users, updTodoStatus }) => {

    const Cards = sortByStatus([...todos]).map(todo => {

        const user = getCardUser(users, todo)

        return (
            <TicketCard
                key={todo.id}
                todo={todo}
                user={user!}
                updTodoStatus={updTodoStatus}
                showStatus
            />
        )
    })

    return (
        <div>
            <h1>Ticket list</h1>
            <Container>
                {Cards}
            </Container>
        </div>
    )
}
const mapStateToProps = (state: IState) => ({
    todos: state.todos,
    users: state.users
})


export default connect(mapStateToProps, { updTodoStatus })(TicketList)