import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id:1, name: 'Home', link: '/home'},
        {id:2, name: 'Shop', link: '/shop'},
        {id:3, name: 'Deals', link: '/deals'},
        {id:4, name: 'Coupons', link: '/coupon'},
        {id:5, name: 'Contact', link: '/contact'},
        
    ]
    return (
        <nav className='bg-indigo-20012345'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
            </div>
            <ul className={`md : flex justify-center md:static w-full absolute bg-indigo-200 duration-500 ease-in ${open ? 'top-16' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id}
                    route={route}
                    ></Link>)
                    
                }
            </ul>
        </nav>
    );
};

export default Navbar;