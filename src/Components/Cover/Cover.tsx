import React, { FC, PropsWithChildren } from 'react'

const Cover: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div data-theme="sunset">
            {children}
        </div>
    )
}

export default Cover
