import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StyledHr from '../components/styled-hr'

import '../css/index.css'
import MeImg from '../images/me.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <div className="h-screen flex items-center">
      <h1 className="flex text-4xl ml-10">
        <span rol="img" aria-label="wave">👋</span>
        &nbsp;
        <div>Hi, I'm Sha.</div>
      </h1>
    </div>

    <div className="absolute bottom-0 left-0 flex justify-center w-screen text-6xl text-gray-300 z-10">
      <FontAwesomeIcon icon={faArrowDown} />
    </div>

    <div className="flex justify-center items-center">
      <img src={MeImg} alt="Sha Alibhai" className="w-64 h-64 rounded-full" />
      <p className="ml-10 w-5/12 leading-relaxed">I'm a self taught software developer with almost 15 years experience. I'm passionate about using the lessons I've learnt to teach others how to maximize on their opportunities and grow to become the best version of themselves. Currently, I'm the Director of Engineering for an awesome company in the Medical Transportation space.</p>
    </div>

    <StyledHr />

    <div className="skills">
      <div className="skill">
        <span role="img" aria-label="Developer">👨‍💻</span>
        <h2 className="title">Developer</h2>
        <div className="content">My first love is programming. I love bringing ideas to life and creating software that helps makes people's lifes a little easier.</div>
      </div>

      <div className="skill">
          <span role="img" aria-label="Leader">👨‍💼</span>
          <h2 className="title">Leader</h2>
          <div className="content">I find the best way to maximize my own potential is by empowering others to maximize theirs. We succeed as a team and we fail as a team.</div>
        </div>

      <div className="skill">
        <span role="img" aria-label="Author">👨‍🎓</span>
        <h2 className="title">Author</h2>
        <div className="content">If you finish what you start you set yourself apart. Writing a book on Webpack 2 is one of the most difficult and satisfying things i’ve ever done.</div>
      </div>

      <div className="skill">
        <span role="img" aria-label="Teacher">👨‍🏫</span>
        <h2 className="title">Teacher</h2>
        <div className="content">The best way to learn something is to teach it to someone else. For me, inspiring others is the most satisfying thing.</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
