import Container from './Container'
import logo from '/public/Logo.png'
import { CiSearch } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import Flex from './Flex'

const Header = () => {
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
        <header className='mt-5'>
            <nav>
                <Container>
                    <Flex className='flex-item'>
                        <img className='cursor-pointer' src={logo} alt="" />
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
                            <CiSearch className='cursor-pointer' />
                            <div className='icon-after'>
                                <RiDeleteBin6Line className='cursor-pointer' />
                            </div>
                            <AiOutlineUser className='cursor-pointer' />
                        </div>
                    </Flex>
                </Container>
            </nav>

        </header>
    )
}

export default Header