import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { Laptop, TechBall } from './canvas'
import { styles } from '../style'
const Tech = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center sm:flex-row h-[50vh]'>
        <motion.div
          className='mr-14'
          variants={textVariant}
        >
          <p className={styles.sectionSubText}>The technologies I use.</p>
          <h2 className={styles.sectionHeadText}>My stack.</h2>
        </motion.div>
        <div className='sm:w-1/2 h-screen'>
          <TechBall />
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
