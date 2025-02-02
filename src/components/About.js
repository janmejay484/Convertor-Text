// import { useState } from "react"
import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] =useState({
    //     color:'white',
    //     backgroundColor:'black'
        
    // })
let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor: props.mode==='dark'?'#042743':'white',
}
   
  return (
    <div className="container" style={myStyle}>
        <h2>About us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Convertor gives you a way to analyze your text quickly  and efficiently be it word count , character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Convertor is a free character counter tool that providesinstant character count & word count stastics for a given text.
        Convertor reports the number of words and character thus it is suitable for writing text with word/character limit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Brower Compatiable
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        the word counter software work in any web browser such as chrome , firefox,InternetExplorer ,safari , opera it suits 
        to count character in facebook, blog,books, excel document ,pdf document ,essays etc.
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
