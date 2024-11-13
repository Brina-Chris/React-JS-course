/* eslint-disable react/prop-types */
import GrandChild from "./GrandChild"


const ChildComponent = ({setCount, count}) => {
  return (
    <div className="child">
        <h2>ChildComponent</h2>
        <GrandChild setCount={setCount} count={count}/>
    </div>
  )
}

export default ChildComponent