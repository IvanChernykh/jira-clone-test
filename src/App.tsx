import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import TicketList from './components/ticketList/TicketList'
import { getServerData } from './redux/reducers/thunks'



type OwnProps = {
    getServerData: () => any
}

const App: React.FC<OwnProps> = ({ getServerData }) => {

    useEffect(() => {
        getServerData()
    }, [])

    return (
        <div className='container'>
            <TicketList />
        </div>
    )
}

export default connect(null, { getServerData })(App)