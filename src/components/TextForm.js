//Using of rfc(React Functional Components):

import React, {useState} from 'react'     //using of react Hooks Search react Hooks on google.  

export default function TextForm(props) {   //using TextFrom(props).

    const handleUpClick = ()=>{
    //consol.log("Uppercase was clicked + text")
    let Text = text.toUpperCase();  //using of toUppercase(); Function.
    setText(Text) //Text = Variable.
    props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = ()=>{
      let  Text = text.toLowerCase();   //using of toLowercase(); Function.
      setText(Text)
      props.showAlert("Converted to Lowercase!","success");
    }

    const handleCopy = () =>{
      let Text = document.getElementById("myBox");   
      Text.select();   //using of select(); Function jisse ham Text ko select karke usse copy kar sakte h. 
      navigator.clipboard.writeText(Text.value); 
      props.showAlert("Copy to Clipboard!","success"); 
    }

    const handleClearClick = ()=>{
      let  Text ="";   //using of Clear Text
      setText(Text)
      props.showAlert("Text Cleared!","success"); 
    }

    const handleOnChange = (event) =>{    //handleOnChange ka used karene se hi ham text ko Edit OR Type kar sakenge.  //event Ek bydefault Event h.

        //consol.log("Onchange");
        setText(event.target.value)   
    }

    const [text, setText] = useState('');  // https://legacy.reactjs.org/docs/hooks-intro.html
    //text="new text"; // Wrong way to change the state.
    //setText("new text"); //Correct way to change the state.
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >  
      {/*yaha hamne style={{color:props.mode==='dark'?'white':'#042743'}} ka used container ke under ke test ko "white" and "#042743" karne ke liye kiya h */}
      {/*iska use hamne diffrent-diffrent conteiner used karne ke liye kiya h*/}
        <h1>{props.heading}</h1>  {/* Using Props.+ App.js props name */}
        <div className="mb-3">  {/* https://getbootstrap.com/docs/5.3/forms/form-control/ */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>   
        {/* yaha hamne "First" {} bracket ka used javaScript ke liye our "Second" bracket ka used "Object" ke liye kiya h. */}
        {/* yaha hamne backgroundColor:props.mode==='dark'?'grey':'white' ka used "text Box" ke Background color ko change karne ke liye kiya h and color:props.mode==='dark'?'white':'#042743' ka used "Text Box" ke undar ke "text" ko change karne ke liye kiya h. */}
        {/* value={text}, onChange={handleOnChange} add textarea tag, and replacing Rows="3" to "8" and id = "myBox"*/}
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>  
        {/*Add Button Event */}
        {/* onClick={handleUpClick} Used for Upercase Button*/}
        {/*mx-1 ka used hamne dono Button ke bitch me space ke liye kiya h*/}
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        {/*Add Button Event */}
        {/*onClick={handleLoClick} Used for Lowercase Button*/}
        {/*mx-1 ka used hamne dono Button ke bitch me space ke liye kiya h*/}
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        {/*Add Button Event */}
        {/*onClick={handleCopy} Used for Copy Button*/}
        {/*mx-1 ka used hamne dono Button ke bitch me space ke liye kiya h*/}
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        {/*Add Button Event */}
        {/*onClick={handleClearClick} Button Used hamne Text ko Clear karne ke liye kiya h*/}
        {/*mx-1 ka used hamne dono Button ke bitch me space ke liye kiya h*/}
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}} > {/*EK or container add karne ke liye use kiya h*/}
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words {text.length}</p>  {/*iska use se ham words or character ko count kar sakege*/}
        <p>3432 words and 453243 charecters</p> 
        <p>{0.008*text.split(' ').length}Minutes read</p>  {/*iska use hamne text ko read karne me kitne minutes lagenge uske liye kiya h OR "0.008" jo h wo Approx 1 Minutes=125 Words h means 1words ko read karne me 1/125=0.008 */}
        <h3>Preview</h3> 
        <p>{text.length>0?text:"Enter Something in the textbox above to Preview it here"}</p>  
        {/* yaha hamne text.length>0?text:"Enter Something in the textbox above to Preview it here ka used jab "TextBox" me "text" likha ho toh wo show ho warna "Enter Something in the textbox above to Preview it here" show ho iske liye kiya h */}
    </div>
    </>
  )
}
