import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText] =useState('Enter Your Text Here');
    // text="new text state" // wrong way to change the text state
    // setText("new text state"); //correct way to change the state

    const handleupClick=()=>{
        // console.log("uppercase was clicked",text);
        let newtext = text.toUpperCase();
        setText(newtext)
        // props.showAlert("converted to upper case","success")
    }
    const handleLowClick=()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleCapitalizeClick = () => {
      let newText = text
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      setText(newText);
  };
  
  const handleFormatText = () => {
    let newText = text
        .trim() // Remove extra spaces from the start and end
        .replace(/\s+/g, " ") // Replace multiple spaces with a single space
        .replace(/\s*([,.!?;:])\s*/g, "$1 ") // Ensure proper spacing after punctuation
        .replace(/([.?!])\s*(\w)/g, (match, p1, p2) => p1 + " " + p2.toUpperCase()) // Capitalize first letter after punctuation
        .replace(/^(\w)/, (match) => match.toUpperCase()); // Capitalize the first letter of the text
    
    setText(newText);
};

 

    const handleclearClick=()=>{
        setText("")
    }
    const handleonChange=(event)=>{
        // console.log("On Change ");
        setText(event.target.value);
        
    }
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button>
<button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>captialize first Letter</button>
<button className="btn btn-primary mx-2" onClick={handleFormatText}>Format text</button>
    </div>
    <div className="container"style={{color: props.mode ==='dark'?'white':'#042743'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} character </p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in the textbox to preview it"}</p>
    </div>
    </>
  )
}
