import pc1 from '../assets/Portfolio/pc1.jpg';
import pc2 from '../assets/Portfolio/pc2.jpg'
import pc3 from '../assets/Portfolio/pc3.jpg'
import pc4 from '../assets/Portfolio/pc4.jpg'
import pc5 from '../assets/Portfolio/px5.jpg'
import pc6 from '../assets/Portfolio/pc6.jpg'
import pc7 from '../assets/Portfolio/pc7.jpg'
import pc8 from '../assets/Portfolio/pc8.jpg'
import pc9 from '../assets/Portfolio/pc9.jpg'
import pc10 from '../assets/Portfolio/pc10.jpg'
import pc11 from '../assets/Portfolio/pc11PNG.jpg'

export default function Porfolio() {
  const pics = [
    {
      id: 1,
      src: pc1,
      linkCode: 'https://github.com/momo-amon/fiverr-website',
      Demo: 'https://momo-amon.github.io/fiverr-website/'
    },
    {
      id: 2,
      src: pc2,
      linkCode: 'https://momo-amon.github.io/Bandi/',
      Demo: 'https://momo-amon.github.io/Bandi/'
    },
    {
      id: 3,
      src: pc3,
      linkCode: 'https://github.com/momo-amon/calculator-',
      Demo: 'https://momo-amon.github.io/calculator-/'
    },
    {
      id: 4,
      src: pc4,
      linkCode: 'https://github.com/momo-amon/hangman',
      Demo: 'https://momo-amon.github.io/hangman/'
    },
    {
      id: 5,
      src: pc5,
      linkCode: 'https://github.com/momo-amon/iPhone-web',
      Demo: 'https://momo-amon.github.io/iPhone-web/'
    },
    {
      id: 6,
      src: pc6,
      linkCode: 'https://github.com/momo-amon/Nike',
      Demo: 'https://momo-amon.github.io/fiverr-website/'
    },
    {
      id: 7,
      src: pc7,
      linkCode: 'https://github.com/momo-amon/special-web-',
      Demo: 'https://momo-amon.github.io/special-web-/'
    },
    {
      id: 8,
      src: pc8,
      linkCode: 'https://github.com/momo-amon/Dashboard',
      Demo: 'https://github.com/momo-amon/Dashboard/deployments'
    },
    {
      id: 9,
      src: pc9,
      linkCode: 'https://github.com/momo-amon/about-me',
      Demo: 'https://momo-amon.github.io/about-me/'
    },
    {
      id: 10,
      src: pc10,
      linkCode: 'https://github.com/momo-amon/portfolio',
      Demo: 'https://momo-amon.github.io/portfolio/'
    },
    {
      id: 11,
      src: pc11,
      linkCode: 'https://github.com/momo-amon/X_-O_-JS',
      Demo: 'https://momo-amon.github.io/X_-O_-JS/'
    },
  ]
  return (
    <div name="Portoflio" className=" bg-gradient-to-b from-black to-gray-800 w-full text-white ">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-6">
          <p className=" text-4xl inline font-bold border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Chick out some of my work right here </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {
            pics.map(({ id, src, linkCode, Demo }) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className=' rounded-lg duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={Demo}>Demo</a></button>
                  <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={linkCode}>Code</a></button>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}
