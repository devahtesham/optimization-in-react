import React from 'react'

const CompB = () => {
console.log("I AM COMP B");
  return (
    <div>CompB</div>
  )
}

export default React.memo(CompB)