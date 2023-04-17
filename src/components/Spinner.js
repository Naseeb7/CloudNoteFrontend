import React from 'react'
import loading from "./loading.gif"

const Spinner=(props)=>{
    return (
      props.loading && <div className='spinner'>
        <img src={loading} alt="loading" style={{scale : ".5",backgroundColor:"rgba(0, 0, 0, 0.675)"}}/>
      </div>
    )
}

export default Spinner
