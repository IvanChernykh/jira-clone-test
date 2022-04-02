import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Board from './components/Board'

import TicketList from './components/TicketList'

import { getServerData } from './redux/reducers/thunks'



type Props = {
    getServerData: () => any
}

const App: React.FC<Props> = ({ getServerData }) => {

    useEffect(() => {
        getServerData()
    }, [])

    return (
        <div className='container'>
            <TicketList />
            <Board />
        </div>
    )
}

export default connect(null, { getServerData })(App)