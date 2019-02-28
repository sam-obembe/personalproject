import React from 'react'

const PhotoThumbs = (props)=>{

  return(
    <div className = "gPhotosThumb">
        <img src = {props.url} alt = "" className = "thumbnail" onClick = {()=>props.select(props.id)}/>
    </div>
    )
  
}

export default PhotoThumbs
