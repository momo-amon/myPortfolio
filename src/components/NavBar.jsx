import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";



export default function NavBar() {
  const [NavB, setNavB] = useState(false)
  const Nav = [
    {
      id: 1,
      Links: "Home"
    },
    {
      id: 2,
      Links: "About"
    },
    {
      id: 3,
      Links: "Portoflio"
    },
    {
      id: 4,
      Links: "Experience"
    },
    {
      id: 5,
      Links: "Contact"
    },
  ]
  return (
    <div>
      <div className="flex justify-between items-center w-full h-14 bg-black px-20 text-white">
        <div>
          <h1 className="text-2xl">Mo&rsquo;men</h1>
        </div>
        <ul className="md:flex hidden">
          {Nav.map(Links => (
            <li key={Links.id} className="px-3 cursor-pointer font-medium text-gray-300 hover:scale-105 hover:text-gray-100 duration-200 ">
              <Link
                onClick={(() => (!Nav))}
                to={Links.Links} smooth duration={500}>{Links.Links}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNavB(!NavB)} className="text-gray-300 cursor-pointer z-10 md:hidden">
          {NavB ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        {NavB && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0
          w-full h-screen bg-gradient-to-b from-black to-gray-800">
            {Nav.map(Links => (
              <li key={Links.id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-80 text-gray-500 ">
                <Link
                  onClick={(() => setNavB(!Nav))}
                  to={Links.Links} smooth duration={500}>{Links.Links}</Link></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
