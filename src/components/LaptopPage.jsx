import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { technologies } from '../constants'
import { fadeIn } from '../utils/motion'

const TechCard = ({ name, icon, index }) => {
  return (
    <div className='bg-primary m-1 flex justify-center flex-col text-center w-1/3'>
      <div>
        <img className='w-[120px]' src={icon} alt={name} />
      </div>
      <div>
        <h3 className='text-[]'>
          {name}
        </h3>
      </div>
    </div>
  )
}

const LaptopPage = () => {
  return (
    <div className='w-full flex justify-center flex-wrap h-[1068px] bg-primary'>
      {technologies.map((tech,index) => (
        <TechCard key={`project-${index}`} index={index} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  )
}

export default LaptopPage
