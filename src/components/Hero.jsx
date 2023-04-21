import { styles } from '../style'
import { github } from '../assets'
import React from 'react'

const Hero = () => {
  return (
    <section
      id='about'
      className='flex w-full sm:h-screen mx-auto'
    >
      <div
        className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-5`}
      >
        <div className='flex'>
          <div className='flex flex-col justify-center items-center mr-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div className='flex flex-col'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Miguel</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {' '}
              A software engineer specializing in building exceptional digital
              experiences. <br className='sm:block hidden' /> I pride myself on
              my professionalism and my ability to overcome obstacles with
              creativity and efficiency.
            </p>
            <a
              className='bg-tertiary py-3 px-8 mt-4 outline-none w-fit text-secondary hover:text-white font-bold shadow-md shadow-primary rounded-xl'
              href='./Miguel_RualesPianda_Resume.pdf'
              download
            >
              Download my CV.
            </a>
          </div>
        </div>
        <div className='sm:min-w-[320px]'>
          <img
            className='sm:min-w-[320px]'
            src={github}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
