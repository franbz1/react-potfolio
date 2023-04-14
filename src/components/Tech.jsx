import React from 'react'
import { Ipad } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* {technologies.map((technology) => (
        <div
          className='w-28 h-28 flex flex-col justify-center items-center'
          key={technology.name}
        >
          <BallCanvas
            icon={technology.icon}
            name={technology.name}
          />
        </div>
      ))} */}
      <Ipad />
    </div>
  )
}

export default Tech
