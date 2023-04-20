import React from 'react'
import { technologies } from '../constants'

const TechCard = ({ name, icon, link }) => {
  return (
    <div className='bg-primary m-2 flex justify-center flex-col text-center w-1/3'>
      <div>
        <img
          className='w-[120px]'
          src={icon}
          alt={name}
        />
      </div>
      <div>
        <a href={link}>
          <h3 className='hover:text-secondary' >{name}</h3>
        </a>
      </div>
    </div>
  )
}

const LaptopPage = () => {
  return (
    <div className='w-full flex align-middle justify-center flex-wrap h-[1068px] bg-primary'>
      {technologies.map((tech, index) => (
        <TechCard
          key={`project-${index}`}
          index={index}
          icon={tech.icon}
          name={tech.name}
          link={tech.link}
        />
      ))}
    </div>
  )
}

export default LaptopPage
