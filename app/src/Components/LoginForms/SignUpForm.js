// Sign up Form
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

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

export default function SignUpForm() {
  const classes = useStyles();

  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const [signUp, setSignUp] = useState(defaultValues);

  //equals anonymous function
  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUp({...signUp, [name]: value });
  };

  const { register, handleSubmit, errors, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const history = useHistory();
  const handleSignUp = e => {
    // e.preventDefault();

    const newUser = {
      email: signUp.email,
      password: signUp.password,
      firstName: signUp.name,
     
    };

    axiosWithAuth()
      .post("/api/auth/register", newUser)

      .then((res) => {
        // window.localStorage.setItem('token')
        history.push('/login')
        console.log(res);
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="sign-up-border">
      <h2>Sign Up Form</h2>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <input
          value={signUp.name}
          onChange={onHandleChange}
          type="text"
          placeholder="Full Name"
          name="name"
          ref={register({
            required: "Name Required",
            minLength: { value: 1, message: "Name too short" },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          onChange={onHandleChange}
          value={signUp.email}
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
          onChange={onHandleChange}
          value={signUp.password}
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

        {/* <input type="submit"
        //   onClick={(event) => {
        //       event.preventDefault()
        //     reset(defaultValues);
        //   }}
          /> */}
      </form>
    </div>
  );
}
