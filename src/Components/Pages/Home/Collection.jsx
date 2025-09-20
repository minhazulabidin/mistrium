import React from 'react'
import Flex from '../../Utilities/Flex'
import Container from '../../Utilities/Container'
import sofa from '../../../assets/sofa.png'
import chair from '../../../assets/chair.png'

const Collection = () => {
    return (
        <section className="relative mt-[66px]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-first -z-10"></div>
            <Container>
                <Flex className="justify-between">
                    <Flex className='w-2/4 justify-between items-center py-[74px] px-[50px]'>
                        <div className='space-y-[41px]'>
                            <h2 className='text-typography text-3xl'>House Product</h2>
                            <p className='text-first text-typography text-[25px]'>Browse More Collection</p>
                        </div>
                        <img src={chair} alt="Chair" />
                    </Flex>
                    <Flex className='w-2/4 justify-between items-center py-[74px] px-[50px]'>
                        <div className='space-y-[41px]'>
                            <h2 className='text-3xl text-black text-typography'>Office Furnicer</h2>
                            <p className='text-[25px] text-second'>Browse More Collection</p>
                        </div>
                        <img src={sofa} alt="Sofa"/>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}

export default Collection
