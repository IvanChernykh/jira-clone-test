import React from 'react'

import cls from './_Container.module.scss'


type OwnProps = {
    children: React.ReactNode
    classNames?: string
    sx?: React.CSSProperties

    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Container: React.FC<OwnProps> = ({ children, classNames, sx, onClick }) => {
    return (
        <div
            className={classNames ? `${cls.container} ${classNames}` : cls.container}
            style={sx}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Container