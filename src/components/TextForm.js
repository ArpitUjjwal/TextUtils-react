import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleAltCaseClick = () => {
        var alternateCase = function (s) {
            var chars = s.toLowerCase().split("");
            for (var i = 0; i < chars.length; i += 2) {
              chars[i] = chars[i].toUpperCase();
            }
            return chars.join("");
          };
        let newText = alternateCase(text);
        setText(newText);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    }

    const handleTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea placeholder="Your text goes here" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#BEBEBE':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-warning mx-1" onClick={handleAltCaseClick} >Convert to Alternate Case</button>
            <button className="btn btn-info mx-1" onClick={handleTitleCase} >Convert to Title Case</button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-success mx-1" onClick={handleCopyClick} >Copy Text</button>
            <hr/>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <hr/>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Text Field is empty"}</p>
        </div>
        </>
    )
}