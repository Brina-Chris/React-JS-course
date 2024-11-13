/* eslint-disable react/prop-types */

import { useState } from "react"
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="parent">
        <h1>ParentComponent</h1>
        <h2>count: {count}</h2>
        <ChildComponent setCount={setCount} count={count}/>
    </div>
  )
}

export default ParentComponent