import React from 'react'
import loading from "./loading.gif"

const Spinner=(props)=>{
    return (
      props.loading && <div>
        <img src={loading} alt="loading" style={{scale:".5"}}/>
      </div>
    )
}

export default Spinner
