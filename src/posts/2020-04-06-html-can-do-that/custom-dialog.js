import React, {useState} from 'react'

const CustomDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button 
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => setOpen(true)}>
          Open Dialog
      </button>

      <dialog className="z-20 shadow-md bg-gray-100 w-full sm:w-1/2" open={open}>
        <button className="float-right font-sans text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" onClick={() => setOpen(false)}>close</button>
        <p className="p-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </dialog>
    </div>
  )
}
export default CustomDialog