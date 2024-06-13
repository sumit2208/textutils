import React, { useState } from "react";
export default function TextForm(props) {


    // const ExtractEmail =() => {
    //     // console.log("hii");
    //     let ho = text.split(" ");
    //     function e () {
    //         if({text} === {text}+"@gmail.com")
    //             return e
    //       }  
    //   const hooo =   ho.filter(e) 
    //     console.log(hooo);   
          
          
         
        
    // }

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const clearfun  = ()=>{
        let name = " ";
        setText(name)
        
    } 

    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('');
    
    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">
                        {/* Example textarea */}
                    </label>
                    <textarea
                        value={text}
                        className="form-control"
                        id="mybox"
                        rows="10"
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpCase}>Convert to UPPERCASE</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLowerCase}>Convert to LOWERCASE</button>
                <button className="btn btn-primary my-3 mx-2" onClick={removeSpace}>Remove Space</button>    
                <br />
                <button className="btn btn-primary my-3 mx-2" onClick={clearfun}>Clear BUTTON</button>
                {/* <button className="btn btn-primary my-3 mx-2" onClick={ExtractEmail}>Extract Email</button> */}
            </div>

            <div className="container my-4">
                <h1>Your Test Summary</h1>
                <p> {text.split(" ").length-1} words {text.length} charater</p>
                <p>{0.008 * text.split(" ").length-0.008} Minute reads</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter The Text To Preview"}</p>
            </div>
        </>
    );
}
