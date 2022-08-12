import React, { useState } from 'react'

export default function Textform() {
    const [text, setText] = useState("Enter text here ");

    const Up = () => {
        let newstr;
        newstr = text.toUpperCase();
        setText(newstr);
    }
    const Low = () => {
        let newstr;
        newstr = text.toLowerCase();
        setText(newstr);
    }
    const Change = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="form-group green-border-focus">
                <label htmlFor="exampleFormControlTextarea5">Enter text here</label>
                <textarea className="form-control" id="mybox" rows="3" onChange={Change} value={text} ></textarea>
                <button type="button" className="btn btn-primary mx-3 my-3" onClick={Up}>  Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-3 my-3" onClick={Low}>  Convert to Lowercase</button>

                <div className="container">
                    <h1>Your text summary </h1>
                    <br></br>                    {text.split(" ").length}  words and  {text.length} characters
                    <p>{0.008 * text.split(" ").length} minutes read</p>
                    <h1>Preview </h1>
                    <p>{text}</p>
                </div>

            </div>
        </>
    )
}
