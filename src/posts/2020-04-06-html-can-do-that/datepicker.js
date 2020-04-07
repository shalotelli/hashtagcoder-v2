import React from 'react'

const Datepicker = () => (
  <div>
    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
      Select a date:
    </label>

    <input type="date" name="date" id="date" className="shadow appearance-none border rounded w-full sm:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
)

export default Datepicker