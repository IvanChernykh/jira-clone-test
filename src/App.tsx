import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Board from './components/Board'
import Button from './components/Button/Button'
import TicketList from './components/TicketList'

import { getServerData } from './redux/reducers/thunks'



interface Props {
    getServerData: () => any
}

const App: React.FC<Props> = ({ getServerData }) => {

    useEffect(() => {
        getServerData()
    }, [])

    return (
        <>
            <Button />
            <div className='container'>
                <TicketList />
                <Board />
            </div>
        </>
    )
}

export default connect(null, { getServerData })(App)