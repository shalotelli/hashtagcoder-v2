import React, {useState} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'


const BookSignup = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await addToMailchimp(email)
      setSuccess(true)
    } catch(e) {
      setFailure(true)
      console.error(e)
    }
  }

  return (
    <div className="w-full rounded-lg bg-gray-800 py-5 mt-10">
      <div className="flex flex-col justify-center items-center">
        {success &&
          <div className="bg-blue-100 border-l-8 border-blue-500 rounded text-blue-900 py-4 px-2 my-4 w-11/12">
            <h4>Woop!</h4>
            <div>Thank you for subscribing</div>
          </div>
        }

        {failure &&
          <div className="bg-red-100 border-l-8 border-red-500 rounded text-red-900 py-4 px-2 my-4 w-11/12">
            <h4>Something went wrong</h4>
            <div>Please refresh the page and try again</div>
          </div>
        }
      </div>

      <h3 className="underline text-blue-500 text-center">
        <a href="/world-class-teams" className="hover:text-blue-300">
          World Class Teams Create World Class Products
        </a>
      </h3>
      <h4 className="text-gray-100 text-center m-1">A Guide for Tech Leaders Navigating Growth and Change.</h4>

      <p className="text-gray-100 text-center m-1">I'm writing a book! I share:</p>

      <ul className="text-gray-200 my-8 sm:w-3/4 list-disc ml-8 sm:ml-24">
        <li className="mb-4">My framework to define and achieve engineering goals so you can move the needle in your organization and keep everyone rowing in the same direction</li>
        <li className="mb-4">How to retain top tech talent and build high-performing teams</li>
        <li className="mb-4">How to release great products rapidly with a structured Software Development Lifecycle (SDLC)</li>
        <li className="mb-4">How to manage yourself and avoid common pitfalls that challenge many leaders</li>
        <li className="mb-4">How to manage multiple teams and learn how to manage managers</li>
        <li>Proven tactics to deliver better customer experience every time, even in fast paced environments</li>
      </ul>

      <p className="text-gray-100 font-bold text-center m-1">Released September 30, 2020</p>
      <p className="text-gray-100 text-center m-1">Subscribe to the mailing list to stay up to date</p>

      <div className="flex justify-center">
        <div className="w-8/12 bg-white rounded flex justify-between p-2">
          <input type="email" className="appearance-none p-3 w-3/4"
            value={email} 
            placeholder="Subscribe to the mailing list"
            onChange={(e) => setEmail(e.target.value)} />
          <button 
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full sm:w-auto text-center"
            onClick={(e) => handleSubmit(e)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookSignup