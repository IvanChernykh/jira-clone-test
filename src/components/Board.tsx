import React from 'react'
import { connect } from 'react-redux'

import BoardSection from './BoardSection/BoardSection'
import Container from './ui/Container'

import { updTodoStatus } from '../redux/reducers/reducer'
import { IState, TodoStatus } from '../redux/reducers/types/stateTypes'
import { TodoProps } from '../types'
import { filterByStatus } from '../utils/utils'




const Board: React.FC<TodoProps> = ({ todos, users, updTodoStatus }) => {

    const Sections = [
        filterByStatus(todos, TodoStatus.todo),
        filterByStatus(todos, TodoStatus.inProgress),
        filterByStatus(todos, TodoStatus.done)
    ].map((todos, idx) => (
        <BoardSection
            key={idx}
            status={todos[0]?.status}
            todos={todos}
            users={users}
            updTodoStatus={updTodoStatus}
        />
    ))

    return (
        <div>
            <h1>Ticket list</h1>
            <Container sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {Sections}
            </Container>
        </div>
    )
}
const mapStateToProps = (store: IState) => ({
    todos: store.todos,
    users: store.users
})


export default connect(mapStateToProps, { updTodoStatus })(Board)