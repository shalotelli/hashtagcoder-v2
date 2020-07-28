import React from 'react'

const TestimonialCard = ({profilePic, profilePicAlign = 'end', children, name, link}) => (
  <div className="py-4 px-8 bg-white shadow-md rounded-lg my-20">
    <div className={`flex justify-center md:justify-${profilePicAlign} -mt-16`}>
      <img className="w-20 h-20 object-cover rounded-full" src={profilePic} alt={name} />
    </div>

    <div>{children}</div>

    <div className="flex justify-end mt-4">
      <a href={link} rel="noopener noreferrer" target="_blank" className="text-xl font-medium text-blue-500">
        {name}
      </a>
    </div>
  </div>
)

export default TestimonialCard