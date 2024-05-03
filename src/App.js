import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

// useRef hook can be used to capture the form input without tracking each entry in a name
/*
Here is the implementation:

let userName = useRef()
<FormInput refer={userName} placeholder="userName" />
*/


function App() {
  let [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    country: "",
    joiningdate: "",
    password: "",
    cpwd: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "user name",
      label: "username",
      errorMessage: "Should be 3-15 character should not include any special character",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "user email",
      label: "email",
      errorMessage: "Should be a valid email address",
      required: true
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "user full name",
      label: "fullname",
      errorMessage: "Should not contain any special character"
    },
    {
      id: 4,
      name: "country",
      type: "text",
      placeholder: "user country",
      label: "country",
      errorMessage: "Should not contain any special character"
    },
    {
      id: 5,
      name: "Date of Joining",
      type: "date",
      placeholder: "Joining Date",
      label: "joiningdate",
      errorMessage: ""
    },
    {
      id: 4,
      name: "country",
      type: "password",
      placeholder: "password",
      label: "password",
      errorMessage: "Should contain one letter, one number and one special character",
      pattern: `^(?=.*[A-Za-z])(?=.*)(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{3,16}$/;`,
      required: true
    },
    {
      id: 4,
      name: "confirm password",
      type: "password",
      placeholder: "confirm password",
      label: "cpwd",
      errorMessage: "should match passwrod",
      pattern: values.password,
      required: true
    }
  ]

  const handleSubmit = (e) => { 
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
