import React from 'react'
import { EXPERIENCES } from '../Constants'

function Experience() {
  return (
    <div className='border-b border-neuteral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex flex-wrap items-center lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div className='w-full lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                    {experience.role} - { " "}
                    <span className='text-sm text-purple-100'>
                        {experience.company}
                    </span>
                </h6>
                <p className='mb-2 text-neutral-400'>{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mt-4 round bg-neutral-900 px-2 py-1 text-sm font-medium text-pink-500'>{tech}</span>
                ))}

                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
