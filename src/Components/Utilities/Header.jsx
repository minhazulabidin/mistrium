import React from 'react'
import Container from './Container'
import logo from '../../../public/Logo.png'
import { CiSearch } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'

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
        <header>
            <nav>
                <Container>
                    <div>
                        <img src={logo} alt="" />
                        <ul>
                            {
                                navItems.map((item) => <li key={item?.id}><a href={item?.href}>{item?.name}</a></li>)
                            }
                        </ul>
                        <div>
                            <CiSearch />
                            <RiDeleteBin6Line />
                            <AiOutlineUser />
                        </div>
                    </div>
                </Container>
            </nav>

        </header>
    )
}

export default Header