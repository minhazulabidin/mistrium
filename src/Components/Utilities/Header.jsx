import { AiOutlineUser } from 'react-icons/ai'
import Container from './Container'
import logo from '/logo.png'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { CiSearch } from 'react-icons/ci'

const Header = () => {
    const navItems = [
        { id: 1, name: 'Home', href: '#' },
        { id: 2, name: 'About Us', href: '#' },
        { id: 3, name: 'Products', href: '#' },
        { id: 4, name: 'FAQ’s', href: '#' },
        { id: 5, name: 'Contact Us', href: '#' }
    ]

    return (
        <header className="mt-5">
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <a href="#">
                            <img src={logo} alt="Logo" className="h-10" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-100 w-52 rounded-box z-[10] mt-3 p-2 shadow right-0"
                            >
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.href}>{item.name}</a>
                                    </li>
                                ))}
                                <li>
                                    <a href=""><CiSearch className="cursor-pointer text-2xl" /></a>
                                </li>
                                <li>
                                    <a href=""><RiDeleteBin6Line className="cursor-pointer text-2xl" /></a>
                                </li>
                                <li>
                                    <a href=""><AiOutlineUser className="cursor-pointer text-2xl" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:flex gap-5 text-2xl hidden ml-2">
                            <CiSearch className="cursor-pointer" />
                            <RiDeleteBin6Line className="cursor-pointer" />
                            <AiOutlineUser className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
