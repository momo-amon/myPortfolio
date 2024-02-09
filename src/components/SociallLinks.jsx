import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'

export default function SociallLinks() {
  const Links = [
    {
      id: 1,
      Child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/moamen-ahmed-002b442a7/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      Child: (
        <>
          GitHup <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/momo-amon',
    },
    {
      id: 3,
      Child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:momoamon147@gmail.com',
    },
    {
      id: 4,
      Child: (
        <>
          Whatsapp <FaWhatsapp size={30} />
        </>
      ),
      href: 'https://wa.link/dpe2wz',
    },
  ]
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed  ">
      <ul>
        {Links.map((link, index) => (
          <li key={index}
            className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-lg duration-300 " + " " + link.style}>
            <a href={link.href} className="flex justify-between w-full items-center text-white" >
              {link.Child}
            </a>
          </li>
        ))
        }
      </ul >
    </div >
  )
}
