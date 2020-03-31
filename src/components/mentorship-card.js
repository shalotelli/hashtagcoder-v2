import React from 'react'

const MentorshipCard = ({title, image}) => (
  <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden m-4">
    <img className="w-full h-56 object-cover object-center" src={image} alt={title} />
    <div className="px-6 py-3 bg-gray-900">
      <div className="mx-3 text-white text-lg font-semibold">{title}</div>
    </div>
  </div>
)

export default MentorshipCard