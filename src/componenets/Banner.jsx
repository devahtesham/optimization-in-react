import React, { useState } from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompC from './CompC'

const Banner = () => {
    const [state, setstate] = useState(0)
    // the problem is that state update only in this Banner component but due to this, the componenets(CompA,CompB,CompC) renders again and again for no reason, so for this we wrap those component in React.memo()
    console.log("I AM BANNER COMP");
  return (
    <>
        <h2>Banner</h2>
        <CompA />
        <CompB />
        <CompC />
        {state} <br />

        <button onClick={()=>setstate(state+1)} >Click ! </button>
    </>

  )
}

export default Banner