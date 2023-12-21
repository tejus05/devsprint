import React from 'react'
import { Input, Output } from '../components'


function Home() {
  return (
    <div>
      <Output target="Home"/>
      <div className="mb-[150px]"></div>
      <Input placeholder="Hello! I'm here to assist you." target="Home"/>
    </div>
  );
}

export default Home
