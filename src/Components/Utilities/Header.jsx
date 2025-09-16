import React from 'react'
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
                    <Flex className='flex justify-between items-center'>
                        <img className='cursor-pointer' src={logo} alt="" />
                        <ul className='flex gap-10'>
                            {
                                navItems.map((item) => <li
                                    className='relative after:absolute after:h-[2px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all font-gupter text-[17px] font-bold leading-[100%] tracking-[2%] pb-[6px]'
                                    key={item?.id}
                                >
                                    <a href={item?.href}>{item?.name}</a>
                                </li>)
                            }
                        </ul>
                        <div className='flex gap-5 text-2xl'>
                            <CiSearch className='cursor-pointer' />
                            <div className='after:content-[""] after:w-[10px] after:h-[10px] after:bg-[#FE0303] relative after:absolute after:top-[-8px] after:right-[-5px] after:rounded-full'>
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