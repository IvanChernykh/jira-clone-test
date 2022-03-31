import React from 'react'

import cls from './_Avatar.module.scss'

type OwnProps = {
    name: string
}

const transformName = (name: string) => name.split(' ').map(word => word[0]).slice(0, 2)

const getRandomColor = () => {
    const symbols = '0123456789abcdef'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)]
    }
    return color
}

const Avatar: React.FC<OwnProps> = ({ name }) => {

    const initials = transformName(name)
    const color = getRandomColor()

    return (
        <div className={cls.container} style={{ backgroundColor: color }}>
            <span className={cls.letters}>{initials}</span>
        </div>
    )
}

export default Avatar