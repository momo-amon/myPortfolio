
import './App.css'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Porfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SociallLinks from './components/SociallLinks'
import GoToTopButton from './components/GoToTopButton'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Porfolio />
      <Experience />
      <Contact />
      <GoToTopButton />

      <SociallLinks />
    </>
  )
}

export default App
