import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { Laptop, TechBall } from './canvas'
import { styles } from '../style'
const Tech = () => {
  return (
    <>
    <div className='flex'>
        <motion.div variants={textVariant}>
          <p className={styles.sectionSubText}>The technologies I use.</p>
          <h2 className={styles.sectionHeadText}>My stack.</h2>
        </motion.div>
      </div>
      <div className='h-screen'>
        <TechBall />
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
