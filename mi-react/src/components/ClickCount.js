import React from 'react'

function ClickCount() {
    
    const [clicks, setClick] = React.useState(0)
    
    function handleClick(){
        setClick(clicks + 1)
    }
  return (
    <div>
        <button type="button" className="btn btn-primary disabled" onClick={handleClick}>+</button>
        <button type="button" className="btn btn-primary disabled" onClick={setClick(clicks - 1)}>-</button>
        <h5>Cantidad: {clicks}</h5>
    </div>
  )
}

export default ClickCount;