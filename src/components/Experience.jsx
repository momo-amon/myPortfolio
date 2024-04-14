import html from '../assets/icons/icons8-html-5-144.png'
import css from '../assets/icons/icons8-css-144.png'
import js from '../assets/icons/icons8-js-144.png'
import bootstrap from '../assets/icons/icons8-bootstrap-144.png'
import tailwind from '../assets/icons/icons8-tailwind-css-144.png'
import react from '../assets/icons/icons8-react-80.png'
import github from '../assets/icons/icons8-github-144.png'
import nextJs from "../assets/icons/icons8-nextjs-48.png"

export default function Experience() {
  const icons = [
    {
      id: 1,
      src: html,
      name: 'html',
      style: 'shadow-orange-500 , hover:shadow-orange-700'
    },
    {
      id: 2,
      src: css,
      name: 'CSS',
      style: 'shadow-blue-500 , hover:shadow-blue-700'
    },
    {
      id: 3,
      src: js,
      name: 'JS',
      style: 'shadow-yellow-500 , hover:shadow-yellow-600'
    },
    {
      id: 4,
      src: bootstrap,
      name: 'bootstrap',
      style: 'shadow-purple-500 , hover:shadow-purple-800'
    },
    {
      id: 5,
      src: tailwind,
      name: 'tailwind',
      style: 'shadow-sky-400 , hover:shadow-sky-600'
    },
    {
      id: 6,
      src: react,
      name: 'React',
      style: 'shadow-blue-600 , hover:shadow-blue-800'
    },
    {
      id: 7,
      src: github,
      name: 'GitHub',
      style: 'shadow-gray-400 , hover:shadow-gray-500'
    },
    {
      id: 8,
      src: nextJs,
      name: 'NextJs',
      style: 'shadow-white , hover:shadow-gray-500'
    }
  ]
  return (
    <div name="Experience" className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full justify-center text-white'>
        <div>
          <p className=' text-4xl font-bold border-b-4 border-gray-500 inline'>Experince</p>
          <p className='py-6'>These are the technologies  I&rsquo;v worked with</p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            icons.map(({ id, name, src, style }) => (
              <div key={id}
                className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                <img src={src} alt="" className=' w-20 mx-auto' />
                <p>{name}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div >
  )
}
