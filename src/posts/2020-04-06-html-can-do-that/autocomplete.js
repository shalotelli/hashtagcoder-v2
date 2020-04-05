import React from 'react'

const Autocomplete = () => (
  <div>
    <label for="colors" className="block text-gray-700 text-sm font-bold mb-2">
      Choose a color:
    </label>

    <input 
      type="text"
      className="shadow appearance-none border rounded w-full sm:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      list="colorList" 
      id="colors" 
      name="colors" 
      placeholder="Select a color..." />

    <datalist id="colorList">
      <option value="Green" />
      <option value="Red" />
      <option value="Blue" />
      <option value="Orange" />
      <option value="Purple" />
    </datalist>
  </div>
)

export default Autocomplete