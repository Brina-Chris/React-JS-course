/* eslint-disable react/prop-types */

const GrandChild = ({setCount, count}) => {
  return (
    <div className="grand-child">
        <p>GrandChild</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default GrandChild