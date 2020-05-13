import React from 'react'

const GoalCard = ({image, output, outcome, impact}) => (
  <div className="w-full bg-white shadow-md rounded-lg overflow-hidden m-4">
    <img className="w-full h-56 object-cover object-center" src={image} alt={output} />

    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 px-6 py-3 bg-gray-900">
        <div className="mx-3 text-white text-lg font-semibold">
          <div className="text-xs text-gray-400">Output</div>
          {output}
        </div>
      </div>

      <div className="w-full sm:w-1/2 px-6 py-3 bg-gray-700">
        <div className="mx-3 text-white text-lg font-semibold">
          <div className="text-xs text-gray-400">Outcome</div>
          {outcome}
        </div>
      </div>
    </div>

    <div className="py-4 px-6 bg-gray-100 text-sm sm:text-base">
      <div className="text-xs text-gray-400">Impact</div>
      {impact}
    </div>
  </div>
)

export default GoalCard