import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'

import store from './redux/store'
import './scss/index.scss'


const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container!)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
