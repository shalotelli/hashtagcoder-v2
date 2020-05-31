import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MentorshipCard from '../components/mentorship-card'
import BookMentorshipHero from '../components/book-mentorship-hero'
import StyledHr from '../components/styled-hr'
import TestimonaialCard from '../components/testimonial-card'

// reason images
import HeroImg from '../images/austin-distel-wD1LRb9OeEo-unsplash.jpg'
import ResumeImg from '../images/bram-naus-n8Qb1ZAkK88-unsplash.jpg'
import CareerImg from '../images/saulo-mohana-wNz7_5EvUWU-unsplash.jpg'
import FeedbackImg from '../images/dmitry-ratushny-O33IVNPb0RI-unsplash.jpg'
import DuckImg from '../images/timothy-dykes-LhqLdDPcSV8-unsplash.jpg'
import GoalsImg from '../images/isaac-smith-8XlMU62ii8I-unsplash.jpg'
import PerspectiveImg from '../images/anika-huizinga-RmzR87vTiYw-unsplash.jpg'
import CommunicationImg from '../images/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash.jpg'
import SkillsImg from '../images/kelly-sikkema-N3o-leQyFsI-unsplash.jpg'

// testimonial images
import RafaelImas from '../images/testimonials/rafael-imas.jpeg'
import ReyJoako from '../images/testimonials/rey-joako.jpg'
import AdeosunAbiola from '../images/testimonials/adeosun-abiola.jpg'
import JohnRinehart from '../images/testimonials/john-rinehart.png'
import Anonymous from '../images/testimonials/anonymous.jpg'

const MentorshipPage = () => (
    <Layout>
      <SEO title="Spend 30 minutes with me talking through career growth, goals, or code.Mentorship" />

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

        <BookMentorshipHero />

        <p>One of my biggest career regrets is that I isolated myself too much. Having spent most of my time working remotely, I tried to do everything myself without seeking help from others. It took me a while to realize that finding a mentor is a crucuial step of the learning process. A mentor provides feedback and helps creates growth paths where there otherwise wouldn't be any. Talent is not a replacement for experience.</p>

        <p>No matter where you are in your career or coding education, having someone to turn to for advice and feedback can make all the difference. Having been there and done that for a while, I feel like I have a lot of experience to share and would love to offer my time so others can benefit in the same way I have.</p>

        <p>Some of the things I can help you with during our 1-1 sessions:</p>

        <div className="my-10 flex flex-wrap justify-center">
          <MentorshipCard 
            title="Creating or refining your resume to stand out from others" 
            image={ResumeImg} />

          <MentorshipCard 
            title="Finding a job or figuring out your career path" 
            image={CareerImg} />

          <MentorshipCard 
            title="Providing valuable feedback on your plans and work" 
            image={FeedbackImg} />

          <MentorshipCard 
            title="Creating SMART goals and defining a plan to achieve them" 
            image={GoalsImg} />

          <MentorshipCard 
            title={`Having "rubber duck" sessions to think through ideas`} 
            image={DuckImg} />

          <MentorshipCard 
            title="Getting a different perspective and learning new ways of thinking" 
            image={PerspectiveImg} />

          <MentorshipCard 
            title="Improving communication skills and speaking more effectively" 
            image={CommunicationImg} />

          <MentorshipCard 
            title="Advancing your career and talking through skill development" 
            image={SkillsImg} />
        </div>

        <BookMentorshipHero />

        <StyledHr title="Testimonials" />

        <TestimonaialCard 
          name="Rafael Imas" 
          profilePic={RafaelImas} 
          link="https://www.linkedin.com/in/rafaimas/">
          <p class="mt-2 text-gray-800">
            I strongly encourage people to reach out to <a href="https://www.linkedin.com/in/sha-alibhai/" rel="noopener noreferrer" className="text-blue-500">Sha Alibhai</a>. I did and after 10 minutes of conversation he got me down to a T, and gave me incredibly useful insights. I am super grateful for his unselfish desire to help others.
          </p>
        </TestimonaialCard>

        <TestimonaialCard 
          name="Anon" 
          profilePic={Anonymous} 
          link="https://hashtagcoder.dev/mentorship">
          <p class="mt-2 text-gray-800">
            Regarding choosing the management path, your input related what a manager/director does on a practical basis gave me a good perspective. Most of the people talk things in abstract - like managers do leadership/one on ones/team direction setting etc. but you talked more practical things which you do on day today basis which provided more clarity.
          </p>
          
          <p class="mt-2 text-gray-800">
            Also you kind of challenged me on about my coding background which helped me to introspect how much ready I am if I decide to go to coding career path. I am now trying to  do some coding on a daily basis for practice.
          </p>

          <p class="mt-2 text-gray-800">
            Regarding the resume question, you mentioned about that during job interviews it really boils down to what I have done rather than which role I am currently in. This gave me a good perspective.
          </p>
        </TestimonaialCard>

        <TestimonaialCard 
          name="Rey Joako" 
          profilePic={ReyJoako} 
          link="https://twitter.com/joako_reyes/status/1262493182757163009">
          <p class="mt-2 text-gray-800">
            Just had a 1-1 session with <a href="https://twitter.com/hashtagcoder" rel="noopener noreferrer" className="text-blue-500">@hashtagcoder</a> and it was absolutely great. Serioulsy people of <a href="https://twitter.com/hashtag/100DaysOfCode?src=hashtag_click" rel="noopener noreferrer" className="text-blue-500">#100DaysOfCode</a> you don't know how helpful it is to have someone experienced point you in the right direction. This guy does it for free! Thanks mate, I really appreciate it.
          </p>
        </TestimonaialCard>

        <TestimonaialCard
          name="Adeosun Abiola"
          profilePic={AdeosunAbiola}
          link="https://twitter.com/AbiTech105/status/1265264955969994758">
          <p className="mt-2 text-gray-800">
            I had 30 minutes session with <a href="https://twitter.com/hashtagcoder" rel="noopener noreferrer" className="text-blue-500">@hashtagcoder</a> today and it was awesome. He really motivated me and also gave me some key important advice to make me better. I would like to suggest a 30 mins session with <a href="https://twitter.com/hashtagcoder" rel="noopener noreferrer" className="text-blue-500">@hashtagcoder</a> to anyone out there that needs guidance in software development.
          </p>
        </TestimonaialCard>

        <TestimonaialCard
          name="John Rinehart"
          profilePic={JohnRinehart}
          link="https://www.linkedin.com/in/johnrichardrinehart/">
          <p className="mt-2 text-gray-800">
            Sha is a pensive and sympathetic person - a valuable asset for someone like me who has a difficult time finding direction and focusing my energy. He isn't full of platitudes - he won't regurgitate faux-inspirational Vaynerchuk truisms or indulge those parts of your character that need attention/correction.
          </p>

          <p className="mt-2 text-gray-800">
            He's been useful for me to serve as a backboard for my ideas and to keep me grounded as an engineer. I really value his time and his thoughts and I would encourage anyone to have a conversation with him. You almost certainly won't regret it.
          </p>
        </TestimonaialCard>


        <BookMentorshipHero />
      </div>
    </Layout>
)

export default MentorshipPage