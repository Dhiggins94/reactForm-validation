import { useState } from "react";
import "./formInput.css"


export default function FormInput(props) {
  // with this onblur, handlefocus and usestate(focus), we're going set it so the error validation only pops up when we leave the input filed in an invalid state
const [focused,setFocused] = useState(false)
  // we're going to destructure our props by taking the inputs from our mapped inputs in (app.js) and use them here. 
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className='formInput'>
      <label>{label}</label>
      
      <input {...inputProps} onChange={onChange}  onBlur={handleFocus} onFocus={()=>inputProps.name=="confrimPassword" && setFocused(true)} focused={focused.toString()}
      
      />
      {/* for form error validation */}
      <span>{ errorMessage}</span>
    </div>
  )
}
// onFocus exist so that we can tell if our passwords dont match with the password and confrim password input fields. so it can function like the others before we submit the button
// we set focused to have a toString function because before its recognize as a boolean and if we can set it as a string we can use it later on for our error validation