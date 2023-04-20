import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { github } from '../assets'
import React from 'react'

const Hero = () => {
  return (
    <section
      id='about'
      className='relative w-full h-[75vh] sm:h-screen mx-auto'
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-5`}
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{' '}
              <br className='sm:block hidden' /> Esse error eligendi temporibus
              accusamus neque nihil odio
            </p>
          </div>
        </div>
        <div>
          <img
            src={github}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
