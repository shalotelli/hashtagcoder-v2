import React from 'react'
import {Link} from 'gatsby'

import '../css/thoughts.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const thoughtLinks = [
  {
    title: 'Being an effective contributor',
    url: '/blog/senior-software-engineer/',
    description: 'As you progress through your career your accountabilities constantly change. I wanted to think through what I felt made me a good team mate, how I saw my accountabilities and how I responsibly saw beyond my own contributions.'
  },

  {
    title: 'Being an effective leader',
    url: '/blog/director-of-engineering/',
    description: 'At first I thought leadership was about managing people, but I ended up just getting in the way. Then I thought leadership was about teaching others to manage me, but then they were just getting in my way. Now I realize leadership is about teaching others to manage themselves. This is a collection of thoughts and accountabilities I have as a Director of Engineering, but applies to all levels of leadership.'
  },

  {
    title: 'Creating the right work culture',
    url: '/blog/engineering-culture',
    description: 'Team harmony is key to longevity. So called traditional "hard skills" can be taught, but being a good team mate and citizen takes personality. I worked hard to create the right culture on my team that starts with trust and ends with empowerment.'
  },

  {
    title: 'Finding your motivation',
    url: '/blog/people-problem-pay/',
    description: 'Money is a very temporary motivator. There is much more to it. I call my motivator "The Three Ps" - People, Problem, Pay. Finding your motivator is the first step to success.'
  },

  {
    title: 'Achieving your goals',
    url: '/blog/achieving-your-goals',
    description: 'Happiness is a direction, not a point in time. Set the right goals and you\'ll find happiness in your journey. This is my secret.'
  },

  {
    title: 'Working from home',
    url: '/blog/10-tips-for-working-from-home/',
    description: 'I\ve been working from home since 2014 and have gone through all sorts of iterations of what works for me and what doesn\'t. The comfort and flexibility is unmatched, but at the cost of bringing work stresses home. It can also wear on productivity because there\'s nobody around to tap on the shoulder and ask a question to or collaborate with. Here are my tips on what works.'
  },

  {
    title: 'Finding your dream job',
    url: '/blog/the-5-most-important-things-to-look-for-in-your-next-job/',
    description: 'Your next job isn\'t the important one. It\'s the one after that you should be focused on. These are my thoughts categorized into the 5 most important things to look for to continue pushing to your dream job.'
  }
]

const ThoughtsPage = () => (
  <Layout>
    <SEO title="My thoughts on having finding success" />

    <div className="my-24 sm:my-32">
      <h1>My thoughts on...</h1>

      <ul className="thoughts-list">
      {thoughtLinks.map((link, i) => (
        <li>
          <Link to={link.url} key={i}>{link.title}</Link>
          <p>{link.description}</p>
          <hr />
        </li>
      ))}
      </ul>
    </div>
  </Layout>
)

export default ThoughtsPage