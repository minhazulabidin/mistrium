import React from 'react'
import Container from '../../Utilities/Container'
import Flex from '../../Utilities/Flex'

const TrustedClint = () => {
    const clints = [
        {
            id: 1,
            name: 'Samsung'
        },
        {
            id: 2,
            name: 'Google'
        },
        {
            id: 3,
            name: 'IBM'
        },
        {
            id: 4,
            name: 'DaraZ'
        },
        {
            id: 5,
            name: 'emazon'
        },
    ]
    return (
        <Container className='space-y-[91px] mt-[105px]'>
            <h2 className='text-center text-[23px] font-gupter font-bold leading-[100%] tracking-[2%]'>SUM OF OUR TRUSTED CLIENTS</h2>
            <ul>
                <Flex className='justify-between'>
                    {
                        clints.map((clint) => <li 
                        className='text-second text-[45px] font-gupter font-bold leading-[100%] tracking-[2%]'
                        key={clint?.id}
                        >{clint?.name}</li>)
                    }
                </Flex>
            </ul>
        </Container>
    )
}

export default TrustedClint