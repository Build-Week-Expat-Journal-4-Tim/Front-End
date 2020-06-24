// Sign up Form
import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 20,
    padding: "0 30px",
    width: "6rem",
    margin: "2rem",
  },
});

export default function LoginForm() {
    const defaultValues = {
        email: "",
        password: "",
      };
  const classes = useStyles();

  const [login, setLogin] = useState(defaultValues) 



  const { register, handleSubmit, errors, reset } = useForm();

  const history = useHistory()
//equals anonymous function
  const onHandleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setLogin({...login, [name]:value})
  }

  const handleLogin = e => {
    // e.preventDefault()

    axiosWithAuth()
      .post('/api/auth/login', login)
        .then(res => {
          window.localStorage.setItem('token', res.data.token)
          window.localStorage.setItem('userId', res.data.user.id)
          history.push('/dashboard')
          console.log(res)
        })
        .catch(err => console.log(err))
  }

  return (
    <div className="login-up-border">
    <h2>Login Form</h2>

    <form onSubmit={handleSubmit(handleLogin)}>


      <input
      value={login.email}
      onChange={onHandleChange}
        type="text"
        placeholder="Email"
        name="email"
        ref={register({
          required: "Email Required",
          minLength: { value: 1, message: "Email too short" },
        })}
      />
      

      {errors.email && <p>{errors.email.message}</p>}
      <input
       value={login.password}
       onChange={onHandleChange}
        type="password"
        placeholder="Password"
        name="password"
        ref={register({
          required: "Password Required",
          minLength: { value: 8, message: "Password too Short" },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <Button
      
        type="submit"
        className={classes.root}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>

    
    </form>
  </div>
    
  )
}
