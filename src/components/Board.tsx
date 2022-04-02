import React from 'react'
import { connect } from 'react-redux'
import { IState, ITodo, IUser } from '../redux/reducers/types/stateTypes'
import Container from './ui/Container'


//filterByStatus

type Props = {
    todos: ITodo[] | []
    users: IUser[] | []
}

const Board: React.FC<Props> = () => {
    return (
        <div>
            <h1>Ticket list</h1>
            <Container>
                this is container
            </Container>
        </div>
    )
}
const mapStateToProps = (store: IState) => ({
    todos: store.todos,
    users: store.users
})
export default connect(mapStateToProps)(Board)