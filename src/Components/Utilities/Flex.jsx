import React from 'react'

const Flex = ({ childern, className }) => {
    return (
        <div className={`flex ${className}`}>
            {childern}
        </div>
    )
}

export default Flex