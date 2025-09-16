import React from 'react'
import Container from '../../Utilities/Container'
import Flex from '../../Utilities/Flex'
import banner from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div className='mt-[72px]'>
            <Container>
                <Flex>
                    <div className='w-2/4 space-y-[43px]'>
                        <h1 className='font-habibi text-[65px] font-normal leading-[76px] tracking-[2%]'>Modern Furniture For Modern Living Style</h1>
                        <p className='text-xl font-habibi font-normal leading-[28px] tracking-[2%] max-w-[471px]'>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstr ate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            <br /><br /><br />

                            graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..
                        </p>
                        <Flex className='gap-[33px]'>
                            <button className='button'>Reagister</button>
                            <button className='button'>Watch Video’s</button>
                        </Flex>
                    </div>
                    <div className='w-2/4 flex justify-center'>
                        <img src={banner} alt="" />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Banner