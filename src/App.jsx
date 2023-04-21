import { BrowserRouter } from 'react-router-dom'
import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvasv2
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Works />
        <Experience />
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <div className='absolute z-index-neg'>
            <StarsCanvasv2/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
