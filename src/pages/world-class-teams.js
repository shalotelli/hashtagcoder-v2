import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../css/world-class-teams.css'
import CoverImage from '../images/world-class-cover.png'

const WorldClassTeams = () => (
  <Layout>
    <SEO title="World Class Teams Create World Class Products" />

    <div className="my-24 sm:my-32 content">
      <div class="flex flex-col items-center sm:flex-row w-full">
        <div className="flex-none">
          <img src={CoverImage} 
            alt="World Class Teams Create World Class Products"
            className="shadow-lg" />
        </div>

        <div className="ml-8">
          <div className="text-2xl sm:text-3xl mt-12 sm:mt-0">A Guide for Tech Leaders Navigating Growth and Change</div>

          <div className="my-12">
            <a className="button-link"
              href="https://gumroad.com/l/fcfDm"
              target="_blank"
              rel="noopener noreferrer">
              Get your copy on Gumroad
            </a>
          </div>

          <h3 className="mb-2">A Sample of What You'll Learn</h3>

          <ul>
            <li>
              <strong>Creating a world class strategy</strong><br />
              Prioritize the most important aspects of creating an incredible team and make the right decisions to set them up for success from the beginning.</li>

            <li>
              <strong>Growing your team with a solid Growth Map</strong><br />
              Guide your teams professional and personal growth by identifying the most important accountabilities at each stage.</li>

            <li>
              <strong>Setting the right focus so that success becomes a side effect</strong><br />
              Create a solid framework to identify the right priorities and set the most important goals for your team.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gray-100 p-8 rounded-lg">
        <h3 className="text-center mb-4">Frequently Asked Questions</h3>

        <ul>
          <li>
            <strong>Is this book only for technical managers?</strong><br />
            Absolutely not! Whether you have a startup and are looking to establish your in house engineering team or you already have a team and are looking to optimize your processes, this book is for you.
          </li>

          <li>
            <strong>What if I have no leadership experience?</strong><br />
            This book introduces the main areas of focus and takes you through easy to follow processes to set you up for success. The only thing left is for you to learn from experience.
          </li>

          <li>
            <strong>Is there a return policy?</strong><br />
            I have a 30 day return policy. If you're not satisfied, reach out and you'll get a full refund.
          </li>

          <li>
            <strong>What do I get with my purchase?</strong><br />
            You'll get a copy of the book in PDF, epub and mobi. Every purchase also includes lifetime access to updated versions of the book. For a minor additional fee, you'll also get access to all documents and templates to set you up (job descriptions, onboarding and offboarding plans, growth maps etc).
          </li>

          <li>
            <strong>What if I have more questions?</strong><br />
            Reach out to me on twitter <a href="https://twitter.com/hashtagcoder" className="link" target="_blank" rel="noopener noreferrer">@hashtagcoder</a>.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default WorldClassTeams