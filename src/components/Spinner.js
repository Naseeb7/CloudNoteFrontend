import React from 'react'
import loading from "./loading.gif"

const Spinner=(props)=>{
    return (
      props.loading && <div style={{display:"flex",scale:".5", borderRadius:"50%",boxShadow:"0 0 12px 5px #983290f9"}}>
        <img src={loading} alt="loading"/>
      </div>
    )
}

export default Spinner
