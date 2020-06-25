// Sign up Form
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import MuiAlert from "@material-ui/lab/Alert";

import Box from "@material-ui/core/Box";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { Snackbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
//Material UI Imports

//Make Styles
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    text:{
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
  },
}));
//Make Styles

export default function SignUpForm() {
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

    setSignUp({ ...signUp, [name]: value });
  };

  const { register, handleSubmit, errors, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const history = useHistory();
  const handleSignUp = (e) => {
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
        history.push("/login");
        console.log(res);
      })

      .catch((err) => console.log(err));
  };

  //useStyles outside return statement
  const classes = useStyles();
  return (
    // {/* Outlining Design Components**/}
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          {/* Outlining Design Components */}

          <div className="sign-up-border">
            <Typography component="h1" variant="h5">
              <h2>Sign Up Form</h2>
            </Typography>

            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(handleSignUp)}
            >
              {/* Added className={classes.form} noValidate  */}
              <TextField
                value={signUp.name}
                onChange={onHandleChange}
                type="text"
                //Design Properties
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="name"
                autoFocus
                //Design Properties

                placeholder="Full Name"
                name="name"
                inputRef={register({
                  required: "Name Required",
                  minLength: { value: 1, message: "Name too short" },
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}

              <TextField
                //Design Properties
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="email"
                autoFocus
                //Design Properties

                onChange={onHandleChange}
                value={signUp.email}
                type="text"
                placeholder="Email"
                name="email"
                inputRef={register({
                  required: "Email Required",
                  minLength: { value: 1, message: "Email too short" },
                })}
              />

              {errors.email && <p>{errors.email.message}</p>}

              <TextField 
                //Design Properties
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="password"
                autoFocus
                //Design Properties

                onChange={onHandleChange}
                value={signUp.password}
                type="password"
                placeholder="Password"
                name="password"
                inputRef={register({
                  required: "Password Required",
                  minLength: { value: 8, message: "Password too Short" },
                })}
              />
              {errors.password && <p >{errors.password.message}</p>}

              <Button
                type="submit"
                className={classes.submit}
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
