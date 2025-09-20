import React from 'react'
import Container from '../../Utilities/Container'
import Marquee from "react-fast-marquee";

const TrustedClint = () => {
    const clints = [
        { id: 1, name: 'Samsung' },
        { id: 2, name: 'Google' },
        { id: 3, name: 'IBM' },
        { id: 4, name: 'DaraZ' },
        { id: 5, name: 'Amazon' },
    ]

    return (
        <Container className='space-y-[91px] mt-[105px]'>
            <h2 className='text-center lg:text-[23px] text-base font-gupter font-bold leading-[100%] tracking-[2%]'>
                SOME OF OUR TRUSTED CLIENTS
            </h2>


            <div className="">
                <Marquee gradient={true} speed={60} className='overflow-hidden'>
                    {clints.map((clint) => (
                        <span
                            key={clint.id}
                            className="mx-12 text-second lg:text-[45px] text-[35px] font-gupter font-bold leading-[100%] tracking-[2%]"
                        >
                            {clint.name}
                        </span>
                    ))}
                </Marquee>
            </div>
        </Container>
    )
}

export default TrustedClint
