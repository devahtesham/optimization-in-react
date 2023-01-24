import React from 'react'

const CompA = () => {
 console.log("I AM COMP A");
  return (
    <div>CompA</div>
  )
}

export default React.memo(CompA)