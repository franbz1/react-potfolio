import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { Laptop } from './canvas'
import { styles } from '../style'
const Tech = () => {
  return (
    <>
      <div className='flex'>
        <motion.div variants={textVariant}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>
      </div>
      <div className='w-auto h-screen'>
      <Laptop />
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
