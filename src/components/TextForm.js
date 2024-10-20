import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to uppercase", "success");
  };

  const handleDownClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lowercase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const clearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? '#282856' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            value={text} 
            style={{ backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#343a40', color: props.mode === 'light' ? 'black' : 'white' }} 
            onChange={handleOnChange} 
            id="myBox" 
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clearClick}>Clear text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy to clipboard</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className='container my-3' style={{ color: props.mode === 'light' ? '#282856' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((e) => e.length !== 0).length} words, {text.length} characters</p>
        <p>{(0.008 * text.split(" ").filter((e) => e.length !== 0).length).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
