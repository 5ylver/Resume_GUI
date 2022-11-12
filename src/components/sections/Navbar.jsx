import { useState } from 'react'
import { navLinks } from '../../constants'
import { close, logo, menu } from '../../assets'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-5 justify-between items-center">
      <div className="h-10 flex items-end hover:scale-125 duration-300">
        <img src={logo} alt="hoobank" className="h-full" />
        {/* <p className="text-white text-xl font-poppins font-semibold tracking-widest">
          yl
          <span className="text-[#5CE1E6]">ver</span>
        </p> */}
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base ${
              active === nav.title ? 'text-white' : 'text-white/70'
            } ${index !== navLinks.length - 1 && 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-primary/90 absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-white/70'
                } ${index !== navLinks.length - 1 && 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
