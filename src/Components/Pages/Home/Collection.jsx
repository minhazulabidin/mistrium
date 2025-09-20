import Flex from '../../Utilities/Flex'
import Container from '../../Utilities/Container'
import sofa from '../../../assets/sofa.png'
import chair from '../../../assets/chair.png'

const Collection = () => {
    return (
        <section className="relative mt-[66px]">
            {/* Background side */}
            <div className="absolute lg:top-0 lg:right-0 lg:w-1/2 w-full lg:h-full h-1/2 bg-first -z-10"></div>
            
            <Container>
                <Flex className="flex-col-reverse lg:flex-row lg:justify-between">
                    
                    {/* Left box */}
                    <Flex className="lg:w-2/4 w-full flex-col-reverse sm:flex-row justify-between items-center lg:py-[74px] py-8 lg:px-[50px] px-4 gap-6">
                        <div className="space-y-5 lg:space-y-[41px] text-center sm:text-left">
                            <h2 className="text-typography lg:text-3xl text-xl">House Product</h2>
                            <p className="text-first text-typography lg:text-[25px] text-base">
                                Browse More Collection
                            </p>
                        </div>
                        <img src={chair} alt="Chair" className="max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]" />
                    </Flex>

                    {/* Right box */}
                    <Flex className="lg:w-2/4 w-full flex-col-reverse sm:flex-row justify-between items-center lg:py-[74px] py-8 lg:px-[50px] px-4 gap-6">
                        <div className="space-y-5 lg:space-y-[41px] text-center sm:text-left">
                            <h2 className="lg:text-3xl text-xl text-black text-typography">
                                Office Furnicer
                            </h2>
                            <p className="lg:text-[25px] text-base text-second">
                                Browse More Collection
                            </p>
                        </div>
                        <img src={sofa} alt="Sofa" className="max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]" />
                    </Flex>

                </Flex>
            </Container>
        </section>
    )
}

export default Collection
