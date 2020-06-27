import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import CoverImage from '../images/world-class-cover.png'

const WorldClassTeams = () => (
  <Layout>
    <SEO title="World Class Teams Create World Class Products" />

    <div className="my-24 sm:my-32">
      <div class="flex flex-col sm:flex-row w-full">
        <div>
          <img src={CoverImage} alt="World Class Teams Create World Class Products" />
        </div>

        <div className="ml-8">
          <h3>A Guide for Tech Leaders Navigating Growth and Change</h3>

          <div className="my-8">
            <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full sm:w-auto text-center"
              href="https://gumroad.com/l/fcfDm"
              target="_blank"
              rel="noopener noreferrer">
              Pre-order on Gumroad
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p>In fast-paced environments, how can you deliver on your goals while achieving high-quality products at every release and have some time left to drive strategic decisions?</p>

        <p className="font-bold">Build a great team - the key component of any engineering leaders' success.</p>

        <p>People don't come with documentation. In a world where technology is becoming the backbone of every company, knowing what to do when everyone is looking at you can feel brutal.</p>

        <p>In the tech industry, management can mean looking after people, products and finances and the learning curve is steep - especially when there are few tools, texts, and frameworks to help you. In this practical guide author Sha Alibhai (developer turned tech leader) takes you though how to start from the beginning, from strategizing and choosing the right technology and process frameworks, to how to plan, hire and onboard engineers and groom them to become world-class contributors.</p>

        <p>From how to constantly keep a pulse check on your team to identifying their highest priorities and roadblocks and create pragmatic solutions to drive them to success, you'll get actionable advice for approaching the various obstacles you'll encounter on your journey. This book is ideal whether you're creating a new team or trying to get better outcomes from an existing one. Pick up this book and learn how to become a better manager and leader in your organization.</p>

        <h2>A Sneak Peak</h2>

        <ul className="list-disc leading-loose ml-4">
          <li className="mb-8"><strong>Creating a world class strategy:</strong> This chapter helps you prioritize the most important aspects of creating an incredible team and guides you through making the right decisions to set them up for success from the beginning.</li>

          <li className="mb-8"><strong>Growing your team with a solid Growth Map:</strong> Clear, explicit communication is key to expectation setting. Cultivating great engineers doesn't happen by chance. This chapter sets you up, stage by stage, with everything you need to guide your teams professional and personal growth, including listing out accountabilities at each step.</li>

          <li><strong>Success as a side effect starts with the right focus:</strong> If you set clear, attainable goals and constantly measure your successes or adjust course appropriately you'll always be able to track progress and achievements and growth will come naturally. This chapter gives you a solid framework by which to identify the right priorities and set the right goals for your team.</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default WorldClassTeams