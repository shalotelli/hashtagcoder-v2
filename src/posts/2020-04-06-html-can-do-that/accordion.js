import React from 'react'

const Accordion = () => (
  <section className="shadow rounded-lg">
    <details className="border-b" open>
      <summary className="bg-gray-200 px-5 py-3 cursor-pointer text-lg text-gray-800">First Section</summary>
      <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </details>

    <details>
      <summary className="bg-gray-200 px-5 py-3 cursor-pointer text-lg text-gray-800">Second Section</summary>
      <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </details>
  </section>
)

export default Accordion