import React from 'react'

const BookMentorshipHero = () => {
  const date = new Date()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row sm:h-24 m-4 sm:mx-24 sm:my-10">
      <div className="bg-blue-500 text-white 
      text-center sm:w-24 flex flex-col align-center justify-center leading-tight p-3 sm:p-0">
        <div className="text-4xl">{date.getDate()}</div>
        <div className="text-xl">{months[date.getMonth()]}</div>
      </div>

      <div className="p-5">
        <h5 className="text-gray-800">30 Minute Mentorship Session</h5>
        <p className="text-gray-600 text-sm">Spend 30 minutes with me talking through career growth, goals, or code.</p>
      </div>

      <div className="flex flex-grow items-center justify-end p-5">
        <a href="https://calendly.com/hashtagcoder/30min" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full sm:w-auto text-center">
          Book a Session
        </a>
      </div>
    </div>
  )
  }

export default BookMentorshipHero