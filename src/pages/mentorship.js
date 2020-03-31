import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroImg from '../images/austin-distel-wD1LRb9OeEo-unsplash.jpg'

const MentorshipPage = () => {
  const date = new Date()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  date.setDate(date.getDate() + 1)

  return (
    <Layout>
      <SEO title="Mentorship" />

      <div className="my-24 sm:my-32">
        <h1>1-1 Live Mentorship Sessions</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden m-4">
          <img className="w-full h-64 object-cover object-center" src={HeroImg} alt="The key to being a good mentor is to help people become more of who they already are - not to make them more like you." />
          <div className="px-6 py-3 bg-gray-900">
            <div className="mx-3 text-white text-xl sm:text-2xl font-semibold">
              The key to being a good mentor is to <em>help people become more of who they already are</em> - not to make them more like you.
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row sm:h-24 m-4 sm:m-24">
          <div className="bg-blue-500 text-white 
          text-center sm:w-24 flex flex-col align-center justify-center leading-tight p-3 sm:p-0">
            <div className="text-4xl">{date.getDate()}</div>
            <div className="text-xl">{months[date.getMonth()]}</div>
          </div>

          <div className="p-5">
            <h5 className="text-gray-800">30 Minute Mentorship Session</h5>
            <p className="text-gray-600">Some description text</p>
          </div>

          <div className="flex flex-grow items-center justify-end p-5">
            <a href="https://calendly.com/hashtagcoder/30min" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full sm:w-auto text-center">
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MentorshipPage