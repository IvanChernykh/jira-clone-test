import React from 'react'
import { connect } from 'react-redux'

import { reduceTotalTodos } from '../../redux/reducers/reducer'
import { IReduceTotalTodos } from '../../redux/reducers/types/actionTypes'
import cls from './Button.module.scss'



interface IProps {
    reduceTotalTodos: () => IReduceTotalTodos
}

const Button: React.FC<IProps> = ({ reduceTotalTodos }) => {

    const clickHandler = () => {
        reduceTotalTodos()
    }
    return (
        <div className={cls.container}>
            <button className={cls.button} onClick={clickHandler}>
                Reduce total number of todos
            </button>
        </div>
    )
}

export default connect(null, { reduceTotalTodos })(Button)