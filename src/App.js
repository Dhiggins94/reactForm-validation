import "./App.css";
import React, { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  // if your going to want to use multiple inputs, create a object for your useState
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confrimPassword: "",
  });
  // instead of typing multiple inputs you can create an array of objects with those input values,
  const inputs = [
    {
      id: 0,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Usernamee should be 3-16 characters with no special characters!",
      label: "Username",
      // this is for invalid functionality, pattern gives the required a condition to trigger on. ^ = start $ = end
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and should include 1 letter,number and special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confrimPassword",
      type: "password",
      placeholder: "ConfrimPassword",
      errorMessage: "passwords dont match",
      label: "ConfrimPassword",
      pattern: values.password,
      required: true,
    },
  ];

  // one way to prevent re rendering is to use useref
  // const usernameRef = useRef()

  const handleSubmit = (e) => {
    // this prevents a page re rendering on button submit
    e.preventDefault();
    // this shows our input values being taken without re rendering the components
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
