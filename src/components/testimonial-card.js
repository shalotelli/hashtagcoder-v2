import React from 'react'

const TestimonialCard = ({profilePic, children, name, link}) => (
  <div className="py-4 px-8 bg-white shadow-md rounded-lg my-20">
    <div class="flex justify-center md:justify-end -mt-16">
      <img class="w-20 h-20 object-cover rounded-full" src={profilePic} alt={name} />
    </div>

    <div>{children}</div>

    <div class="flex justify-end mt-4">
      <a href={link} rel="noopener noreferrer" target="_blank" class="text-xl font-medium text-blue-500">
        {name}
      </a>
    </div>
  </div>
)

export default TestimonialCard