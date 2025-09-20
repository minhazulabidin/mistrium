import Container from './Container'
import fav from '/fav.png'
import footerImg from "../../assets/Footer.png"
import Flex from './Flex'

const Footer = () => {
    const navItems = [
        {
            id: 1,
            name: 'Home',
            href: '#'
        },
        {
            id: 2,
            name: 'About US',
            href: '#'
        },
        {
            id: 3,
            name: 'Products',
            href: '#'
        },
        {
            id: 4,
            name: 'FAQ’S',
            href: '#'
        },
        {
            id: 5,
            name: 'Contact Us',
            href: '#'
        }
    ]


    return (
        <div className='mt-[100px] mb-3'>
            <nav>
                <Container>
                    <Flex className='flex-item'>
                        <img className='cursor-pointer' src={fav} alt="" />
                        <ul className='flex gap-10'>
                            {
                                navItems.map((item) => <li
                                    className='nav-item'
                                    key={item?.id}
                                >
                                    <a href={item?.href}>{item?.name}</a>
                                </li>)
                            }
                        </ul>
                        <div className='flex gap-5 text-2xl'>
                            <img src={footerImg} alt="" />
                        </div>
                    </Flex>
                </Container>
            </nav>
            <hr className='border-[#0000003D] my-6' />
            <Container className="text-center">
                <h2 className='font-gupter text-lg tracking-[2px] font-bold'>All Copyright Reasurved By  ||  <span className='text-first'>ISTIAK</span></h2>
            </Container>
        </div>
    )
}

export default Footer