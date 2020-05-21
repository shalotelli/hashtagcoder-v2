import React from 'react'
import StyledHr from '../../components/styled-hr'

const GrowthMapBlock = ({level, title, description, focus, skills}) => (
  <div className="w-full bg-white overflow-hidden mb-8">
    <StyledHr />

    <h3>Level {level}: {title}</h3>

    <div className="flex flex-col sm:flex-row">
      <div className="w-full px-6 py-3 bg-gray-100">
        <div className="mx-3">
          <div className="text-sm text-gray-600">Description</div>
          <div dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </div>

      <div className="w-full px-6 py-3 bg-gray-200">
        <div className="mx-3">
          <div className="text-sm text-gray-600">Focus</div>
          <div dangerouslySetInnerHTML={{__html: focus}} />
        </div>
      </div>
    </div>

    <div className="py-4 px-6 bg-gray-300 text-sm sm:text-base">
      <div className="text-sm text-gray-600">Skills</div>
      <ul>
        {skills.map((skill, i) => (
          <li className="mb-2 leading-tight">{skill}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default GrowthMapBlock