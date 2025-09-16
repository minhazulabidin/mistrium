import React from 'react'
import Flex from '../../Utilities/Flex'
import Container from '../../Utilities/Container'
import sofa from '../../../assets/sofa.png'
import chair from '../../../assets/chair.png'

const Collection = () => {
    return (
        <section className='relative after:content-[""] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-[50%] after:bg-primary after:z-0 justify-center flex mt-[66px]'>
            <Container className="relative z-10">
                <Flex>
                    <div className='w-2/4 justify-between'>
                        <div>
                            <h2>House Product</h2>
                            <p>Browse More Collection</p>
                        </div>
                        <img src={chair} alt="" />
                    </div>
                    <Flex className='w-2/4 '>
                        <div>
                            <h2>House Product</h2>
                            <p>Browse More Collection</p>
                        </div>
                        <img src={sofa} alt="" />
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}

export default Collection