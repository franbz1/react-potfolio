import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close, linkedin } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img
            src={logo}
            alt='logo'
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Franacisco &nbsp; <span className='sm:block hidden'> Ruales</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li>
            <a
              href='https://www.linkedin.com/in/franvz1/'
              target='_blank'
            >
              <img
                src={linkedin}
                alt='linkedin'
                className='text-secondary hover:text-white w-[28px] h-[28px] object-contain cursor-pointer'
              />
            </a>
          </li>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient right-0 top-20 absolute mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none felx justify-end items-start flex-col gap-4'>
              <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
                <a
                  href='https://www.linkedin.com/in/franvz1/'
                  target='_blank'
                >
                  <img
                    src={linkedin}
                    alt='linkedin'
                    className='w-[28px] h-[28px] object-contain cursor-pointer'
                  />
                </a>
              </li>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } font-popins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
