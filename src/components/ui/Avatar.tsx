import React from 'react'
import { IUser } from '../../redux/reducers/types/stateTypes'

import cls from './_Avatar.module.scss'

type Props = {
    user: IUser
}

const transformName = (name: string) => name.split(' ').map(word => word[0]).slice(0, 2)

const Avatar: React.FC<Props> = ({ user }) => {

    const initials = transformName(user.name)

    return (
        <div className={cls.container} style={{ backgroundColor: user.avatarColor }} >
            <span className={cls.letters}>{initials}</span>
        </div>
    )
}

export default Avatar